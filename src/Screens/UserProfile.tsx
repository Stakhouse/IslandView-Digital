import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';

// Remove the unused import statement
// import { ProfileStackParamList } from '../navigation/ProfileStackNavigator';
import MaleAvatar from '../images/MaleAvatar.jpg';
import FemaleAvatar from '../images/FemaleAvatar.png';

type ExtendedUser = FirebaseUser & {
  // ... user properties ...
  gender?: string;
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<ExtendedUser | null>(null);

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

  // Determine the avatar based on the user's photoURL
  const isMaleAvatar = user?.photoURL?.includes('male_avatar');
  const isFemaleAvatar = user?.photoURL?.includes('female_avatar');

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
        source={user?.photoURL ? { uri: user.photoURL } : 
          (user?.gender === 'male' ? MaleAvatar : FemaleAvatar)}
        style={styles.avatar} 
      />
        <Text style={styles.username}>{user?.displayName || 'Username'}</Text>
        <Text style={styles.infoText}>{user?.email || 'User information goes here'}</Text>
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