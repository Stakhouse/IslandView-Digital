
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import HomeScreen from './HomeScreen'; // Import the new HomeScreen component
import { loadFonts } from './FontLoader';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigator from './ BottomTabNavigator'; 
// Prepare the splash screen API to be used to prevent auto hiding.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
 
}
