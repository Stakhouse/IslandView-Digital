import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Get the height of the device screen

const ProfileScreen: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginPress = () => {
    if (!isLoggedIn) {
    // Navigate to login screen logic here
    }
  };

  const handleCreateAccountPress = () => {
    // Navigate to create account screen logic here
  };

  const handleLogoutPress = () => {
    // Logout logic here
  };

  const dashboardHeight = height * 0.3; // Dashboard takes up 30% of the top half of the screen

  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.dashboardContainer, { height: dashboardHeight }]}>
        <TouchableOpacity style={styles.profileContainer} onPress={handleLoginPress}>
          <Image source={{ uri: 'path-to-avatar-image' }} style={styles.avatar} />
        </TouchableOpacity>
        {isLoggedIn ? (
          <Text style={styles.dashboardText}>Dashboard</Text>
        ) : (
          <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.menuContainer}>
        {!isLoggedIn && (
          <TouchableOpacity onPress={handleCreateAccountPress} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Create Account</Text>
          </TouchableOpacity>
        )}
        {!isLoggedIn && (
          <TouchableOpacity onPress={handleLoginPress} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Login</Text>
          </TouchableOpacity>
        )}
        {isLoggedIn && (
          <TouchableOpacity onPress={handleLogoutPress} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  dashboardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    position: 'relative',
  },
  profileContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  dashboardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginButton: {
    padding: 10,
    backgroundColor: '#5CB85C',
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default ProfileScreen;
