import React from 'react';
import { View, Text, Image, Button, ScrollView, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles'; // Ensure styles are refactored for TypeScript if needed

// Define the types for your navigation stack
type HomeStackParamList = {
  Home: undefined; // Define other screens and their parameters here if needed
  // Example: Details: { itemId: number };
};

// Define the type for the navigation prop specific to this screen
type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

// Define the props for the HomeScreen component
type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleBenefitsPress = () => {
    // Navigation logic or other functionality
  };
  const handlePackagesPress = () => {
    // Navigation logic or other functionality
  };

  return (
    <View style={styles.container}>
  <StatusBar translucent backgroundColor="gold" />
  <View style={{ ...styles.imageContainer, flex: .3,}}>
    <Image
      source={require('./images/IislandViewDigital.png')}
      style={{ width: '100%', height: '100%'}}
      resizeMode='contain'
    />
    <View style={styles.overlayText}>
      <Text style={styles.text}>
        Where Offline Views Leave a Lasting Impression
      </Text>
    </View>
  </View>
  <ScrollView
    style={{ flex: 1 }} // Give the ScrollView a flex: 1
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
    <Text style={styles.descriptionText}>Your Explanation Here</Text>
    <Image
      source={require('./images/islandviewdigitallogo1.0.png')}
      style={styles.logoImage}
    />
  </ScrollView>
  <View style={styles.buttonContainer}>
    <Button title="Benefits of Advertising with Us" onPress={handleBenefitsPress} />
    <Button title="See Available Packages" onPress={handlePackagesPress} />
  </View>
</View>

  );
};

export default HomeScreen;
