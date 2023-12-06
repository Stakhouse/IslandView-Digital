import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { loadFonts } from './FontLoader';
import * as SplashScreen from 'expo-splash-screen';
import './src/components/firebaseConfig'; // Firebase initialization
import 'react-native-gesture-handler';
// ... other imports

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Attempt to load custom fonts
        await loadFonts();
        // If successful, set the state to indicate fonts are loaded
        setFontsLoaded(true);
      } catch (e) {
        // If an error occurs, log it to the console
        console.warn('Error loading fonts:', e);
      } finally {
        // Hide the splash screen regardless of the outcome
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // If fonts are not loaded, return null to avoid rendering the app
  if (!fontsLoaded) {
    return null;
  }

  // Once fonts are loaded, render the app with BottomTabNavigator
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
