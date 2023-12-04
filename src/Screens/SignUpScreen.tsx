import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../navigation/ProfileStackNavigator'; // Adjust the import path as necessary
import Icon from 'react-native-vector-icons/FontAwesome';

type SignUpScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'SignUpScreen'>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) =>  { // Corrected this line

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <TextInput placeholder="Enter Full Name" style={styles.input} />
      <TextInput placeholder="Enter Email" style={styles.input} />
      <TextInput placeholder="Enter Password" style={styles.input} secureTextEntry />
      <TextInput placeholder="Enter Phone Number" style={styles.input} />
      <TouchableOpacity style={styles.saveButton}>
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