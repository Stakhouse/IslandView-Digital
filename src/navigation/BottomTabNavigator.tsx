import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from './StackNavigator'; // Newly added
import HelpScreen from '../Screens/HelpScreen';
import MenuScreen from '../Screens/MenuScreen';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

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
    
          return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator}/>
      <Tab.Screen name="Help" component={HelpScreen}/>
      <Tab.Screen name="Menu" component={MenuScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
