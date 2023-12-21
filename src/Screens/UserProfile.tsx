import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import DefaultAvatar from '../images/DefaultAvatar.png';
import { useNavigation } from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

type ExtendedUser = FirebaseUser & {
  gender?: string;
};
const UserProfile: React.FC = () => {
  const navigation = useNavigation();
  const [userImage, setUserImage] = useState(DefaultAvatar); // State for user image
  const [user, setUser] = useState<ExtendedUser | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Directly set currentUser without type casting
        // Fetch additional user data from Firestore
        firestore()
          .collection('users')
          .doc(currentUser.uid)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              const userData = documentSnapshot.data();
              setUserImage(userData?.profilePicture || DefaultAvatar);
            }
          });
      } else {
        setUser(null);
        setUserImage(DefaultAvatar);
      }
    });
    return unsubscribe;
  }, []);
  

  const pickImageAndUpload = async () => {
    // Image picking and upload logic
    // ... (similar to the function provided in the previous response) ...
  };

  
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Navigate to the login screen after successful sign-out
        navigation.navigate('LoginScreen' as never);
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to sign out: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={userImage ? { uri: userImage } : DefaultAvatar} style={styles.avatar} />
        <Text style={styles.username}>{user?.displayName || 'Username'}</Text>
        
        <TouchableOpacity style={styles.button} onPress={pickImageAndUpload}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {/* Submit action */}}>
          <Text style={styles.buttonText}>Submit Ad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* View live stream action */}}>
          <Text style={styles.buttonText}>View Live Stream/Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* Contact us action */}}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* Help/instructions action */}}>
          <Text style={styles.buttonText}>How-to-Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, // Space out the profile section from the top
    backgroundColor: '#DFF6FF', // A subtle tropical blue
    alignItems: 'center', // Center children horizontally
    justifyContent: 'center', // Center children vertically
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    marginTop: 20, // Position the profile section at the top
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#ced4da',
    marginBottom: 10,
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1, // Take up all available space
    width: '90%', // Match profile section width
    //height: '100%', // Match profile section height
    marginBottom: 20,
     // Space from the bottom edge
  },
  button: {
    backgroundColor: '#FFC107', // Example tropical color for buttons
    borderRadius: 20,
    height: 60,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    marginTop: 10, // Space out buttons
    width: '100%', // Button width matches the container
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signOutButton: {
    backgroundColor: '#FF6347', // A different color for sign out button
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%', // Sign out button width matches the container
  },
});
export default UserProfile;