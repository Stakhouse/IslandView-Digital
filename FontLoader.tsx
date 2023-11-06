// FontLoader.js
import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'DancingScript-Regular': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });
};
