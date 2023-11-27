import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import HelpScreen from './Screens/HelpScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MenuScreen from './Screens/MenuScreen';
import BenefitsScreen from './Screens/BenefitsScreen';
import DetailedInfoScreen from './Screens/DetailedInfoScreen'; // Import the DetailedInfoScreen component
import PackagesScreen from './Screens/PackagesScreen';

// Define the type for your navigation stack
export type RootStackParamList = {
  HomeStackScreen: undefined;
  HelpStackScreen: undefined;
  ProfileStackScreen: undefined;
  MenuStackScreen: undefined;
  BenefitsScreen: undefined;
  DetailedInfoScreen: undefined;
  PackagesScreen:undefined;
  // Add other screens here
  SomeScreen: { someParam: string };
};

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // This will hide the header for all screens
      }}
    >
      <Stack.Screen name="HomeStackScreen" component={HomeScreen} />
      <Stack.Screen name="HelpStackScreen" component={HelpScreen} />
      <Stack.Screen name="ProfileStackScreen" component={ProfileScreen} />
      <Stack.Screen name="MenuStackScreen" component={MenuScreen} />
      <Stack.Screen name="BenefitsScreen" component={BenefitsScreen} />
      <Stack.Screen name="DetailedInfoScreen" component={DetailedInfoScreen} />
      <Stack.Screen name="PackagesScreen" component = {PackagesScreen}/>
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}

export default StackNavigator;
