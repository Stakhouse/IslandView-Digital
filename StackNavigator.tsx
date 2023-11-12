
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import your HomeScreen component
import HelpScreen from './HelpScreen';
import ProfileScreen from './ProfileScreen';
import MenuScreen from './MenuScreen';
// Import other screens

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // This will hide the header for all screens
      }}
    >
      <Stack.Screen name="HomeStackScreen" component={HomeScreen} />
      <Stack.Screen name='HelpStackScreen' component={HelpScreen}/>
      <Stack.Screen name="ProfileStackScreen" component={ProfileScreen} />
      <Stack.Screen name='MenuStackScreen' component={MenuScreen}/>

    </Stack.Navigator>
  );
}

export default StackNavigator;
