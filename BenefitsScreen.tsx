
import React from 'react';
import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
//import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './StackNavigator';

type BenefitsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'BenefitsScreen'>;
};
const BenefitsScreen: React.FC<BenefitsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.benefitsContainer}>
      <ImageBackground source={require('./images/BenefitsImage.png')} style={styles.benefitsBackground}>
        <ScrollView style={styles.benefitsScrollView}>
          <Text style={styles.benefitsHeader}>Why Our Taxi-Top Advertising Stands Out:</Text>

          <Text style={styles.benefitsPoint}>
            1. Novelty Appeal: Our taxi rooftop displays offer a unique advertising medium that stands out amid the clutter of conventional billboards and signs.
          </Text>

          <Text style={styles.benefitsPoint}>
            2. Dynamic Engagement: With ads that rotate and change dynamically, our taxi-top displays capture attention and drive engagement as they traverse the city.
          </Text>

          <Text style={styles.benefitsPoint}>
            3. Smart Targeting: Leveraging data analytics from onboard cameras, we deliver targeted advertising that hits the mark every time.
          </Text>

          <Text style={styles.benefitsPoint}>
            4. User-Friendly Interface: Manage your campaigns on-the-go with our intuitive mobile app, streamlining ad submissions and real-time updates.
          </Text>

          <Text style={styles.benefitsPoint}>
            5. Accessible Advertising: Our flexible pricing models are designed to democratize advertising, catering to businesses big and small.
          </Text>

          <Text style={styles.benefitsPoint}>
            6. Timely Impact: Capitalize on peak visibility during commuter hours to ensure your message is seen by the masses.
          </Text>

          <Text style={styles.benefitsPoint}>
            7. Broad-Spectrum Reach: By targeting daily commuters throughout the city and island, your ads receive widespread exposure.
          </Text>

          <Text style={styles.benefitsPoint}>
            8. Inclusive Outreach: Our platform engages an elderly demographic often overlooked by digital ads, broadening your audience spectrum.
          </Text>

          <Text style={styles.benefitsPoint}>
            9. Community Connection: Local businesses find a voice on our screens, connecting their message with the community they serve.
          </Text>

          <Text style={styles.benefitsPoint}>
            10. Moving Messages: Unlike most taxis that would be parked on the taxi-stand until passengers approach them RoundTown Taxi circles the city all day, non-stop motion of rickshaw taxis ensures your ads are not just seen, but experienced across town.
          </Text>
          <Text style={styles.lastPoint}>
    11. All-Day Exposure: Our taxis are on the move from dawn till dusk, offering continuous exposure for your brand.
  </Text>
         
  </ScrollView>
        <View style={styles.benefitsButtonContainer}>
          <TouchableOpacity 
            style={styles.benefitsButton} 
            onPress={() => navigation.navigate('DetailedInfoScreen')} // Make sure 'DetailedInfoScreen' is defined in your navigator
          >
            <Text style={styles.benefitsButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BenefitsScreen;
