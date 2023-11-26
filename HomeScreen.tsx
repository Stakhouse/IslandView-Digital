import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type ImageSourcePropType = number | { uri: string };

type HomeStackParamList = {
  HomeStackScreen: undefined;
  HelpStackScreen: undefined;
  ProfileStackScreen: undefined;
  MenuStackScreen: undefined;
  BenefitsScreen: undefined;
  PackagesScreen:undefined; // Make sure this matches the screen name in StackNavigator
};

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeStackScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleBenefitsPress = () => {
    navigation.navigate('BenefitsScreen');
  };

  const handlePackagesPress = () => {
    navigation.navigate('PackagesScreen'); // Corrected navigation logic for PackagesScreen
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#004d91" />
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/IislandViewDigital.png')}
          style={styles.fullWidthImage}
        />
        <View style={styles.overlayText}>
          <Text style={styles.text}>
            Where Offline Views Leave a Lasting Impression
          </Text>
        </View>
      </View>
      <ScrollView style={styles.descriptionScrollView}>
  <Text style={styles.headerText}>
    Maximize Your Brand's Exposure with Our Digital Taxi-Top Advertising:
  </Text>

  <Text style={styles.descriptionText}>
    Elevate your marketing strategy with our digital taxi-top displays that offer unparalleled visibility as they navigate through the city's most populated areas. Our eye-catching displays stand out with dynamic content that engages viewers with every blink and switch, ensuring your message never goes unnoticed. The mobility of taxi-tops means your ad reaches a diverse audience, from bustling business districts to vibrant neighborhoods.
  </Text>

  <Text style={styles.descriptionText}>
    Experience targeted advertising with the ability to choose specific routes and times, making your campaigns more effective and cost-efficient. With our innovative app, you gain the power to update your ads on the fly—allowing for real-time adjustments and the flexibility to respond to your ad's performance instantly. Go green with our digital approach that's as eco-friendly as it is impactful. Our platform also offers analytics, giving you valuable insights into your ad's performance, optimizing your return on investment. Stay ahead of the curve by adapting your message to current events or market trends with just a few taps on your device.
  </Text>
</ScrollView>


      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleBenefitsPress} style={styles.gradientButton}>
  <LinearGradient
    colors={['#FFD700', '#FF6347', '#40E0D0', '#008000']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientBackground}
  >
    <Text style={styles.buttonText}>Benefits of Advertising with Us</Text>
  </LinearGradient>
</TouchableOpacity>
<TouchableOpacity onPress={handlePackagesPress} style={styles.gradientButton}>
  <LinearGradient
    colors={['#FFD700', '#FF6347', '#40E0D0', '#008000']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientBackground}
  >
    <Text style={styles.packageButtonText}>See Available Packages</Text>
  </LinearGradient>
</TouchableOpacity>


      </View>
    </View>
  );
};

export default HomeScreen;
