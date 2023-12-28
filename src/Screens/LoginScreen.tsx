import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { RootStackParamList } from '../navigation/navigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../components/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../components/firebaseConfig';

const LoginScreen: React.FC = () => {
  const { setIsUserAuthenticated } = useAuth(); // Use the setter from AuthContext
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          // other user data you want to save
        };
        AsyncStorage.setItem('user', JSON.stringify(userData));
        setIsUserAuthenticated(true);
        setIsLoading(false);
        navigation.navigate('UserProfile');
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Login Error", error.message);
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
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
          <TextInput 
            placeholder="Password" 
            style={{ ...styles.input, flex: 1 }} 
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity 
            onPress={togglePasswordVisibility} 
            style={{ position: 'absolute', right: 10 }}
          >
            <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="grey"/>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
        <Text style={styles.loginButtonText}>{isLoading ? 'Logging in...' : 'Login'}</Text>
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
