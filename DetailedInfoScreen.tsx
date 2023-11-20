import React from 'react';
import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles'; // Ensure all referenced styles are defined here
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './StackNavigator';

type DetailedInfoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'DetailedInfoScreen'>;
};

const DetailedInfoScreen: React.FC<DetailedInfoScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.detailedInfoContainer}>
      <ImageBackground source={require('./images/TheEye.png')} style={styles.detailedInfoBackground}>
        <ScrollView style={styles.detailedInfoScrollView}>
          <Text style={styles.detailedInfoHeader}>More About Our Services:</Text>
          <Text style={styles.detailedInfoText}>
            {/* Detailed information about your services */}
            Here you can provide more in-depth details about your services, 
            the effectiveness of taxi-top advertising, success stories, etc.
          </Text>
          {/* Additional content can be added here */}
        </ScrollView>
        <View style={styles.detailedInfoButtonContainer}>
          <TouchableOpacity 
            style={styles.detailedInfoButton} 
            onPress={() => navigation.goBack()}>
            <Text style={styles.detailedInfoButtonText}>Back to Packages</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailedInfoScreen;
