import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { RootStackParamList } from '../navigation/navigationTypes';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        // User is signed in, navigate to the ProfileScreen
        navigation.navigate('ProfileScreen');
      }
      // If no user, stay on this screen
    });

    return unsubscribe; // Unsubscribe on unmount
  }, [navigation]);

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // You can handle navigation or user state updates here if needed
      })
      .catch((error) => {
        console.error('Error signing in: ', error);
      });
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../images/TwitterLogo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../images/FBIcon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../images/GoogleIcon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../images/WhatsApp.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
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

export default LoginScreen;
