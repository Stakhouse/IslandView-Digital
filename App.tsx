import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { loadFonts } from './FontLoader';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load custom fonts
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn('Error loading fonts:', e);
      } finally {
        // Hide the splash screen once fonts are loaded
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // Render nothing until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  // Render the app with BottomTabNavigator inside the NavigationContainer
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
