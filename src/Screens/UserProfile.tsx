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
      <View style={styles.profileCard}>
        <Image 
          source={user?.photoURL ? { uri: user.photoURL } :MaleAvatar} 
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.displayName || 'Username'}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{user?.email || 'User information goes here'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
          {/* Add more buttons with functionality as needed */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ecef',
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
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
  infoContainer: {
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '30%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40, // Align text vertically
  },
});

export default UserProfile;