import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../StackNavigator'; // Import your RootStackParamList type

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUpScreen' // Make sure this matches the name of the screen as defined in your RootStackParamList
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

// Use the Props type for your component's props
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
      <TouchableOpacity onPress={() => navigation.goBack()}> {/* navigation is used here */}
        <Text style={styles.returnLoginText}>Return to Login</Text>
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
    marginTop: 20,
  },
});

export default SignUpScreen;
