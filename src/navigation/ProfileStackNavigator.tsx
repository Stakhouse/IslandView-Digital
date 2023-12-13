import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import UserProfile from '../Screens/UserProfile';

export type ProfileStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    UserProfile: { user?: string }; 
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator initialRouteName="LoginScreen">
            <ProfileStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
            <ProfileStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
            <ProfileStack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }}/>
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;