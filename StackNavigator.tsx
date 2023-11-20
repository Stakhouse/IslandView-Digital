import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';
import ProfileScreen from './ProfileScreen';
import MenuScreen from './MenuScreen';
import BenefitsScreen from './BenefitsScreen';
import DetailedInfoScreen from './DetailedInfoScreen'; // Import the DetailedInfoScreen component

// Define the type for your navigation stack
export type RootStackParamList = {
  HomeStackScreen: undefined;
  HelpStackScreen: undefined;
  ProfileStackScreen: undefined;
  MenuStackScreen: undefined;
  BenefitsScreen: undefined;
  DetailedInfoScreen: undefined; // Add DetailedInfoScreen here
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
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}

export default StackNavigator;
