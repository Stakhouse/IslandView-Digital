import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './navigationTypes';
import HomeScreen from '../Screens/HomeScreen';
import HelpScreen from '../Screens/HelpScreen';
import MenuScreen from '../Screens/MenuScreen';
import BenefitsScreen from '../Screens/BenefitsScreen';
import DetailedInfoScreen from '../Screens/DetailedInfoScreen';
import PackagesScreen from '../Screens/PackagesScreen';

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="HelpScreen" component={HelpScreen}/>
      <Stack.Screen name="MenuScreen" component={MenuScreen}/>
      <Stack.Screen name="BenefitsScreen" component={BenefitsScreen}/>
      <Stack.Screen name="DetailedInfoScreen" component={DetailedInfoScreen}/>
      <Stack.Screen name="PackagesScreen" component={PackagesScreen}/>
  
    </Stack.Navigator>
  );
}

export default StackNavigator;