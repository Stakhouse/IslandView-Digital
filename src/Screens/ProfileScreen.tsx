import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { getAuth, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ProfileStackParamList } from '../navigation/ProfileStackNavigator';

// Extend the Firebase User type
type User = FirebaseUser & { isSubscriber: boolean };

async function checkIfSubscriber(userId: string): Promise<boolean> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      console.error('API response not OK:', response.status);
      return false;
    }
    const userData = await response.json();
    return userData.id % 2 === 0; 
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
}

const ProfileScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
       
        const isSubscribed = await checkIfSubscriber(currentUser.uid);
        setUser({
          ...currentUser,
          isSubscriber: isSubscribed,
        });
      } else {
        setUser(null);
      }
    });
    return unsubscribe; // Correct placement of the return statement for cleanup
  }, []); // Correct placement of the dependency array

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate('LoginScreen'); // Navigate to login screen after sign out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };


  return (
    <View style={styles.container}>
      {user?.isSubscriber ? (
        <View style={styles.liveStreamArea}>
          {/* Live stream player goes here */}
          
        </View>
      ) : (
        <View style={styles.nonSubscriberView}>

          <Text style={styles.nonSubscriberText}>Sign up to view the stream!</Text>
        </View>
      )}

      {user && (
        <View style={styles.profileOverlay}>
          <Image
            source={{ uri: user.photoURL || 'default_image_url_here' }} // Replace with a default image URL
            style={styles.profilePhoto}
          />
          <Text style={styles.userName}>{user.displayName || 'User'}</Text> {/* Display name or fallback to 'User' */}
        </View>
      )}

      <Text style={styles.title}>Profile Screen</Text>
      {user && <Text style={styles.userInfo}>Welcome, {user.displayName || 'Guest'}</Text>} 
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center', 
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  liveStreamArea: {
    width: '100%', 
    height: '30%', 
    backgroundColor: '#000', 
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },
  nonSubscriberView: {
    width: '100%', 
    height: '30%', 
    backgroundColor: '#000', 
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  nonSubscriberText: {
    color: 'white',
    fontSize: 18,
  },
  profileOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
