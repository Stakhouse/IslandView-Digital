
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileStackParamList} from '../navigation/ProfileStackNavigator';
import { useNavigation } from '@react-navigation/native';
// ...

const navigation = useNavigation<StackNavigationProp<ProfileStackParamList>>();

// ...

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (userCredential.user) {
        await AsyncStorage.setItem('userToken', userCredential.user.uid); // Ensure user.uid is a string
        setIsLoading(false);
        // Navigate to another screen or update the UI
      } else {
        // Handle the case where user is null
        setIsLoading(false);
        console.error('User object is null');
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error('Unexpected error during login', error);
      }
    }
  };
  
  const navigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.forgotPasswordText} onPress={() => {/* Implement forgot password logic */}}>
        Forgot Password?
      </Text>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signupText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#e91e63',
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 35,
    height: 35,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#e91e63',
    marginLeft: 5,
  },
});

export default ProfileScreen;