// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, ScrollView, StatusBar } from 'react-native';
import { loadFonts } from './FontLoader'; // Import the loadFonts function
import styles from './styles'; // Import styles
import * as SplashScreen from 'expo-splash-screen';

// Prepare the splash screen API to be used to prevent auto hiding.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const handleBenefitsPress = () => { /* ... */ };
  const handlePackagesPress = () => { /* ... */ };
  const handleMenuPress = () => { /* ... */ };
  const handleProfilePress = () => { /* ... */ };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/IislandViewDigital.png')}
          style={{ width: '100%', height: '100%' }}
        />
        <View style={styles.overlayText}>
          <Text style={styles.text}>
            Where Offline Views Leave a Lasting Impression
          </Text>
        </View>
      </View>
      <ScrollView
        style={styles.horizontalScroll}
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
      <View style={styles.navBar}>
        <Button title="Menu" onPress={handleMenuPress} />
        <Button title="Profile" onPress={handleProfilePress} />
      </View>
    </View>
  );
}
