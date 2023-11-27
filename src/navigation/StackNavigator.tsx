import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './navigationTypes';
import HomeScreen from '../Screens/HomeScreen';
import HelpScreen from '../Screens/HelpScreen';
import ProfileScreen from '../Screens/ProfileScreen'; // Ensure correct import
import MenuScreen from '../Screens/MenuScreen';
import BenefitsScreen from '../Screens/BenefitsScreen';
import DetailedInfoScreen from '../Screens/DetailedInfoScreen';
import PackagesScreen from '../Screens/PackagesScreen';
import SignUpScreen from '../Screens/SignUpScreen';



const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="BenefitsScreen" component={BenefitsScreen} />
      <Stack.Screen name="DetailedInfoScreen" component={DetailedInfoScreen} />
      <Stack.Screen name="PackagesScreen" component={PackagesScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
}

export default StackNavigator;
