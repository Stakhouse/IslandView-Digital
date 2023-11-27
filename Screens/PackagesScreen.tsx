import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView,Modal, Button,Switch} from 'react-native';
import styles from '../styles'; // Adjust the path as necessary
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    PackagesScreen: undefined;
  };
  
  type PackagesScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'PackagesScreen'>;
  };
  
  const PackagesScreen: React.FC<PackagesScreenProps> = ({ navigation }) => {
    const [isPeakModalVisible, setPeakModalVisible] = useState(false);
    const [isOffPeakModalVisible, setOffPeakModalVisible] = useState(false);
    const [morningPackageSelected, setMorningPackageSelected] = useState(false);
    const [eveningPackageSelected, setEveningPackageSelected] = useState(false);
    const [offPeakPackageSelected, setOffPeakPackageSelected] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
  
    const handlePeakPackagePress = () => {
      setPeakModalVisible(true);
    };
  
    const handleOffPeakPackagePress = () => {
      setOffPeakModalVisible(true);
    };
  
    const calculateTotalCost = (isPeak: boolean) => {
        let cost = 0;
        if (isPeak) {
          if (morningPackageSelected) cost += 10 * 3; // $10 per hour for 3 hours
          if (eveningPackageSelected) cost += 10 * 5; // $10 per hour for 5 hours
        } else {
          if (offPeakPackageSelected) cost += 5 * 5; // $5 per hour for 5 hours
        }
        setTotalCost(cost);
        alert(`Total Cost: $${cost}`);
      };
  return (
    <View style={styles.packagesContainer}>
      <ImageBackground source={require('../images/PackagesBackground.jpg')} style={styles.packagesBackground}>
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
     {/* Peak Package Modal */}
     <Modal
        animationType="slide"
        transparent={true}
        visible={isPeakModalVisible}
        onRequestClose={() => setPeakModalVisible(!isPeakModalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Your Peak Package</Text>
            <View style={styles.modalOption}>
              <Text style={styles.modalText}>Morning: 7:00 a.m. - 10:00 a.m.</Text>
              <Switch
                onValueChange={() => setMorningPackageSelected(!morningPackageSelected)}
                value={morningPackageSelected}
              />
            </View>
            <View style={styles.modalOption}>
              <Text style={styles.modalText}>Evening: 3:00 p.m. - 8:00 p.m.</Text>
              <Switch
                onValueChange={() => setEveningPackageSelected(!eveningPackageSelected)}
                value={eveningPackageSelected}
              />
            </View>
            <Button
              title="Confirm"
              onPress={() => calculateTotalCost(true)}
            />
            <Button
              title="Close"
              onPress={() => setPeakModalVisible(!isPeakModalVisible)}
            />
          </View>
        </View>
      </Modal>

      {/* Off-Peak Package Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOffPeakModalVisible}
        onRequestClose={() => setOffPeakModalVisible(!isOffPeakModalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Your Off-Peak Package</Text>
            <View style={styles.modalOption}>
              <Text style={styles.modalText}>Time: 10:00 a.m. - 3:00 p.m.</Text>
              <Switch
                onValueChange={() => setOffPeakPackageSelected(!offPeakPackageSelected)}
                value={offPeakPackageSelected}
              />
            </View>
            <Button
              title="Confirm"
              onPress={() => calculateTotalCost(false)}
            />
            <Button
              title="Close"
              onPress={() => setOffPeakModalVisible(!isOffPeakModalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PackagesScreen;