import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import SignUpScreen from '../Screens/SignUpScreen';

export type ProfileStackParamList = {
    ProfileScreen: undefined;
    SignUpScreen: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator initialRouteName="ProfileScreen">
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
            <ProfileStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;