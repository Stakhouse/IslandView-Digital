import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator'; // Import your StackNavigator
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HelpScreen from './Screens/HelpScreen';
import MenuScreen from './Screens/MenuScreen';
// Import your BenefitsScreen if you have a separate screen component for it
// import BenefitsScreen from './BenefitsScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'ios-person' : 'ios-person-outline';
              break;
            case 'Help':
              iconName = focused ? 'ios-help-circle' : 'ios-help-circle-outline';
              break;
            case 'Menu':
              iconName = focused ? 'ios-menu' : 'ios-menu-outline';
              break;
            // Ensure you have a case for 'Benefits' if you have a Benefits tab
            // case 'Benefits':
            //   iconName = focused ? 'ios-gift' : 'ios-gift-outline';
            //   break;
            default:
              iconName = 'ios-information-circle';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      {/* If you want to add a tab for Benefits, uncomment the line below and ensure you import BenefitsScreen */}
      {/* <Tab.Screen name="Benefits" component={BenefitsScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
