import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import HelpScreen from '../Screens/HelpScreen';
import MenuScreen from '../Screens/MenuScreen';
import ProfileStackNavigator from './ProfileStackNavigator'; // This should return a valid React component
import ProfileScreen from '../Screens/ProfileScreen';
import BenefitsScreen from '../Screens/BenefitsScreen';
import PackagesScreen from '../Screens/PackagesScreen';

const Tab = createBottomTabNavigator();

// This component sets up the bottom tab navigator with four tabs: Home, Profile, Help, and Menu.
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // This will hide the header
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Help') {
            iconName = focused ? 'ios-help-circle' : 'ios-help-circle-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'ios-menu' : 'ios-menu-outline';
          }
          // 'as keyof typeof Ionicons.glyphMap' is used to ensure type safety for icon names.
          return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator}/> 
      <Tab.Screen name="Help" component={HelpScreen}/>
      <Tab.Screen name="Menu" component={MenuScreen}/>
      <Tab.Screen name = "BenefitsScreen" component={BenefitsScreen}/>
      <Tab.Screen name ="PackagesScreen" component={PackagesScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
