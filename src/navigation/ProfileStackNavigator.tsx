import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import SignUpScreen from '../Screens/SignUpScreen';

type ProfileStackParamList = {
    Profile: undefined;
    SignUp: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="SignUp" component={SignUpScreen} />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;