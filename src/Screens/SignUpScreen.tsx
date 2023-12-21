import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParamList } from "../navigation/ProfileStackNavigator";
import DefaultAvatar from '../images/DefaultAvatar.png'; // Import the default avatar image

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [gender, setGender] = useState(""); // Keep this if gender info is still needed
  // New state for form validation errors
  const [errors, setErrors] = useState({
    fullNameError: "",
    emailError: "",
    passwordError: "",
    phoneNumberError: "",
    genderError: "", // New error state for gender
  });
 
  // Function to validate email format
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function for form validation
  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      fullNameError: "",
      emailError: "",
      passwordError: "",
      phoneNumberError: "",
      genderError: "",
    };

    if (!fullName) {
      newErrors.fullNameError = "Full Name is required";
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      newErrors.emailError = "Please enter a valid email";
      isValid = false;
    }
    if (!password || password.length < 6) {
      newErrors.passwordError = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumberError = "Phone number is required";
      isValid = false;
    }
    if (!gender) {
      newErrors.genderError = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 
  // Modified: handleSignUp now includes form validation and gender
  const handleSignUp = () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Assign avatar based on gender selection
      

      // Update the user profile in Firebase
      return updateProfile(userCredential.user, {
        displayName: fullName,
        photoURL: DefaultAvatar, // Store the avatar URL or reference
      });
    })
      .then(() => {
        setIsLoading(false);
        navigation.navigate("UserProfile", { user: fullName });
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

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
    <TouchableOpacity
      style={[
        styles.genderButton,
        gender === "male" && styles.selectedGender,
      ]}
      onPress={() => {
        setGender("male");
      }}>
      <Text style={styles.genderText}>Male</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.genderButton,
        gender === "female" && styles.selectedGender,
      ]}
      onPress={() => {
        setGender("female");
      }}>
      <Text style={styles.genderText}>Female</Text>
    </TouchableOpacity>
  </View>
    {errors.genderError ? (
      <Text style={styles.errorText}>{errors.genderError}</Text>
    ) : null}

      <TextInput
        placeholder="Enter Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      {errors.fullNameError ? (
        <Text style={styles.errorText}>{errors.fullNameError}</Text>
      ) : null}

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {errors.emailError ? (
        <Text style={styles.errorText}>{errors.emailError}</Text>
      ) : null}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}>
        <TextInput
          placeholder="Enter Password"
          style={{ ...styles.input, flex: 1 }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={{ position: "absolute", right: 10 }}>
          <Icon
            name={passwordVisible ? "eye-slash" : "eye"}
            size={20}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      {errors.passwordError ? (
        <Text style={styles.errorText}>{errors.passwordError}</Text>
      ) : null}

      <TextInput
        placeholder="Enter Phone Number"
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      {errors.phoneNumberError ? (
        <Text style={styles.errorText}>{errors.phoneNumberError}</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.saveButton, isLoading && styles.disabledButton]}
        onPress={handleSignUp}
        disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.saveButtonText}>Save</Text>
        )}
        </TouchableOpacity>
    
      
      <ScrollView>
    <TouchableOpacity>
      <Text style={styles.returnLoginText}>
        {'Have an account? '}
        <Text
          style={{ fontWeight: "bold", color: "red", fontSize: 25 }}
          onPress={() => navigation.goBack()}>
         {' Login or'}
        </Text>
      </Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon
          name="facebook"
          size={24}
          color="#000"
          style={{ marginRight: 10 }}
        />
        <Text>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon
          name="twitter"
          size={24}
          color="#000"
          style={{ marginRight: 10 }}
        />
        <Text>Sign Up with Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon
          name="google"
          size={24}
          color="#000"
          style={{ marginRight: 10 }}
        />
        <Text>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon
          name="whatsapp"
          size={24}
          color="#000"
          style={{ marginRight: 10 }}
        />
        <Text>Sign Up with WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "red",
            fontSize: 25,
          }}>
          Go Back
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  saveButton: {
    backgroundColor: "#e91e63",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  returnLoginText: {
    textAlign: "left",
    color: "#e91e63",
    margin: 5,
    paddingLeft: 5,
    marginHorizontal: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  genderButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  selectedGender: {
    backgroundColor: "#e91e63",
  },
  genderText: {
    textAlign: "center",
  },
});
export default SignUpScreen;
