import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; // Adjust the path as necessary
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {

  PackagesScreen: undefined;
};

type PackagesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PackagesScreen'>;
};

const PackagesScreen: React.FC<PackagesScreenProps> = ({ navigation }) => {
  // Example onPress functions (you can modify these as needed)
  const handlePeakPackagePress = () => {
    // Navigation or other logic for Peak Package
  };

  const handleOffPeakPackagePress = () => {
    // Navigation or other logic for Off-Peak Package
  };

  return (
    <View style={styles.packagesContainer}>
      <ImageBackground source={require('./images/PackagesBackground.jpg')} style={styles.packagesBackground}>
        <ScrollView style={styles.packagesContainer}>
        <Text style={styles.packagesHeader}>Welcome to IslandView Digital</Text>
  <Text style={styles.packageDescription}>
    Your Gateway to Innovative Advertising in Kingstown!
  </Text>

  <Text style={styles.packagesHeader}>Why Choose IslandView Digital?</Text>
  <Text style={styles.packageDescription}>
    - Dynamic Displays: Our digital screens are designed to catch the eye, ensuring your ads stand out in Kingstown.
    - Strategic Timing: With our Peak and Off-Peak packages, your ads are shown at the most opportune times.
    - Cost-Effective Advertising: Competitive pricing for businesses of all sizes.
  </Text>

  <Text style={styles.packagesHeader}>Our Packages:</Text>

  <Text style={styles.packagesHeader}>Peak Package</Text>
  <Text style={styles.packageDescription}>
    Time: 7:00 a.m. - 10:00 a.m. & 3:00 p.m. - 8:00 p.m.
    Duration: 8 hours/day.
    Ideal For: Maximum visibility during Kingstown's busiest hours.
    Pricing: $480 for a 6-day contract.
  </Text>

  <Text style={styles.packagesHeader}>Off-Peak Package</Text>
  <Text style={styles.packageDescription}>
    Time: 10:00 a.m. - 3:00 p.m.
    Duration: 5 hours/day.
    Ideal For: Targeting the lunch crowd.
    Pricing: $150 for a 6-day contract.
  </Text>

  <Text style={styles.packagesHeader}>Maximize Your Reach</Text>
  <Text style={styles.packageDescription}>
    - Location-Specific Ads: Target specific areas with our screens.
    - Special Peak Times Packages: High footfall during festive seasons.
  </Text>

  <Text style={styles.packagesHeader}>Join Us in Revolutionizing Local Advertising</Text>
  <Text style={styles.packageDescription}>
    Pilot Phase Offer: Try our services with a 2-week free trial.
  </Text>

  <Text style={styles.packageDescription}>
    Ready to elevate your advertising game? Choose your package and let TaxiTap drive your message across Kingstown!
  </Text>
        </ScrollView>
        <View style={styles.packageButtonContainer}>
          <TouchableOpacity style={styles.packageButton} onPress={handlePeakPackagePress}>
            <Text style={styles.packageButtonText}>Peak Package</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.packageButton} onPress={handleOffPeakPackagePress}>
            <Text style={styles.packageButtonText}>Off-Peak Package</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PackagesScreen;
