import React from 'react';
import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles'; // Ensure all referenced styles are defined here
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../StackNavigator';

type DetailedInfoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'DetailedInfoScreen'>;
};

const DetailedInfoScreen: React.FC<DetailedInfoScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.detailedInfoContainer}>
      <ImageBackground source={require('../images/TheEye.png')} style={styles.detailedInfoBackground}>
        <ScrollView style={styles.detailedInfoScrollView}>
        <Text style={styles.mainHeader}>Why Digital Billboard Advertising is the Future of Urban Engagement</Text>
        <Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Captivating Visuals: </Text>
  Unlike static billboards, digital screens capture attention with dynamic content changes and vibrant displays. Studies show that moving images increase viewer engagement by over 60%.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Broader Audience Reach: </Text>
  Digital billboards are not just seen; they're experienced. They reach a diverse audience, from daily commuters to tourists, ensuring your message is seen by thousands daily.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Eco-Friendly Advertising: </Text>
  Transitioning to digital reduces paper waste associated with traditional billboards, aligning your brand with modern, environmentally conscious practices.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Real-Time Content Updates: </Text>
  The flexibility to update ads in real-time allows for timely and relevant messaging, a crucial factor in today's fast-paced world.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Increased Recall Rate: </Text>
  Research indicates that digital billboard advertising has a 47% higher recall rate compared to traditional methods, making your message more memorable.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Cost-Effective: </Text>
  With the ability to share space with other advertisers, digital billboards offer a cost-effective solution, especially for small and medium-sized businesses.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Extended Reach Beyond Daylight: </Text>
  Illuminated screens mean your ads are visible and effective 24/7, maximizing exposure regardless of the time of day.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Engaging the Community: </Text>
  Digital billboards offer a platform for local businesses and community messages, fostering a sense of connection and local engagement.
</Text>

<Text style={styles.infoParagraph}>
  <Text style={styles.infoHeader}>Data-Driven Targeting: </Text>
  Leveraging data analytics, digital billboards can display targeted ads based on viewer demographics and traffic patterns, enhancing the effectiveness of your campaign.
</Text>

<Text style={styles.callToAction}>
  Discover how you can leverage the power of digital billboard advertising with our range of packages. Tap 'Back to Packages' to find the perfect fit for your brand.
</Text>

          {/* Additional content can be added here */}
        </ScrollView>
        <View style={styles.detailedInfoButtonContainer}>
        <TouchableOpacity 
  style={styles.detailedInfoButton} 
  onPress={() => navigation.navigate('PackagesScreen')}>
  <Text style={styles.detailedInfoButtonText}>Back to Packages</Text>
</TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailedInfoScreen;
