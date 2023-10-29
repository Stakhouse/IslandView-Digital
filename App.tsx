import React from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./images/IislandViewDigital.png')} // Fixed the typo in the path
          style={{...styles.image, resizeMode: 'cover'}} // Moved resizeMode to style
        />
       
       <View style={styles.overlayText}>
  <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: 'white', fontSize: 24 }}>
    Where Offline Views Leave a Lasting Impression
  </Text>
</View>

      </View>
      
      <LinearGradient 
        colors={['transparent', '#000080']} 
        style={styles.descriptionContainer}
      >
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.descriptionText}>Your Explanation Here</Text>
          <Image 
            source={require('./images/islandviewdigitallogo1.0.png')}  // Fixed the typo in the path
            style={{ width: Dimensions.get('window').width * 0.9, height: 200 }} // Image style provided inline
          />
        </ScrollView>
      </LinearGradient>
      
      <View style={styles.buttonContainer}>
        <Button title="Benefits of Advertising with Us" onPress={() => { /* Navigate or Show Benefits */ }} />
        <Button title="See Available Packages" onPress={() => { /* Navigate or Show Packages */ }} />
      </View>
      
      <View style={styles.navBar}>
        <Button title="Menu" onPress={() => { /* Open Menu */ }} />
        <Button title="Profile" onPress={() => { /* Navigate to Profile */ }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',  // This is for vertical alignment
  },

  descriptionContainer: {
    flex: 1,
    padding: 16,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    width: Dimensions.get('window').width * 3,
  },
  buttonContainer: {
    flex: 0.4,
    padding: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#dcdcdc'
  }
});
