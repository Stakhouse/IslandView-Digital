import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileStackParamList } from '../navigation/ProfileStackNavigator'; // Replace with actual path

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleSignUp = () => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: fullName,
        });
      })
      .then(() => {
        setIsLoading(false);
        navigation.navigate('UserProfile', { user: fullName });
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Sign Up Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <TextInput
        placeholder="Enter Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
<View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
  <TextInput
    placeholder="Enter Password"
    style={{ ...styles.input, flex: 1 }}
    value={password}
    onChangeText={setPassword}
    secureTextEntry={!passwordVisible}
  />
  <TouchableOpacity 
    onPress={togglePasswordVisibility} 
    style={{ position: 'absolute', right: 10 }}
  >
    <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="grey" />
  </TouchableOpacity>
</View>
      <TextInput
        placeholder="Enter Phone Number"
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSignUp}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      
     
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={24} color="#000" style={{ marginRight: 10 }} /> 
        <Text>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="twitter" size={24} color="#000" style={{ marginRight: 10 }} /> 
        <Text>Sign Up with Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={24} color="#000" style={{ marginRight: 10 }} /> 
        <Text>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="whatsapp" size={24} color="#000"style={{ marginRight: 10 }}  /> 
        <Text>Sign Up with WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ textAlign: 'center',fontWeight:'bold',color:"red",fontSize:25,}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define your styles here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
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
  saveButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  returnLoginText: {
    textAlign: 'center',
    color: '#e91e63',
    margin: 20,
    paddingLeft: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
});

export default SignUpScreen;