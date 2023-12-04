import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import firebase from 'firebase/app';
import 'firebase/auth';
//import LoginScreen from './src/screens/LoginScreen'; // hypothetical login screen
import ProfileScreen from './src/Screens/ProfileScreen';


const firebaseConfig = {
  apiKey: "AIzaSyD9Oi971diD82GFJTNP7fAWiUg6kJdL5hY",
  authDomain: "islandview-digital.firebaseapp.com",
  databaseURL: "https://islandview-digital.firebaseio.com",
  projectId: "islandview-digital",
  storageBucket: "islandview-digital.appspot.com",
  messagingSenderId: "1055372172009",
  appId: "1:524343102858:android:a07ad37e32b3c2c9fe0c73",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      currentUser => setUser(currentUser),
      error => console.error('Firebase auth state change error:', error)
    );
    return () => unsubscribe();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <ProfileScreen />}
    </NavigationContainer>
  );
}
