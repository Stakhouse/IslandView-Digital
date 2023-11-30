import * as Font from 'expo-font';

export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      'DancingScript-Regular': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
      // Add other font variations here as needed
      // 'OtherFont-Regular': require('./assets/fonts/OtherFont-Regular.ttf'),
    });
    console.log('Fonts loaded successfully.');
  } catch (error) {
    console.error('Error loading fonts:', error);
    // Handle the error, for example, by logging it or displaying a user-friendly message
  }
};
