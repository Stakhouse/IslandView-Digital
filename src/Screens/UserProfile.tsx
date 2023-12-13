import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ProfileStackParamList } from '../navigation/ProfileStackNavigator';
import MaleAvatar from '../images/MaleAvatar.jpg'; // Use the correct file extension


// Add other file types as needed

// Extend the Firebase User type if needed
type ExtendedUser = FirebaseUser & {
  // Add any additional properties if required
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const route = useRoute<RouteProp<ProfileStackParamList, 'UserProfile'>>();
  const userName = route.params?.user;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser as ExtendedUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      Alert.alert('Error', 'Failed to sign out: ' + error.message);
    });
  };


  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={user?.photoURL ? { uri: user.photoURL } : MaleAvatar}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.displayName || 'Username'}</Text>
        <Text style={styles.infoText}>{user?.email || 'User information goes here'}</Text>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {/* Submit action */}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* View live stream action */}}>
          <Text style={styles.buttonText}>View Live Stream</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* Contact us action */}}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* Help/instructions action */}}>
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ced4da',
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    width: '90%', // Match profile section width
    marginBottom: 20, // Space from the bottom edge
  },
  button: {
    backgroundColor: '#FFC107', // Example tropical color for buttons
    borderRadius: 20,
    height: 40,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    marginTop: 10, // Space out buttons
    width: '100%', // Button width matches the container
  },
  buttonText: {
    color: '#fff',
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