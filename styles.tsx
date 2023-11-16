
import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight ?? 0; // Fallback to 0 if undefined
const navBarHeight = 50; // Assuming the navigation bar is 50px high, adjust as needed
const usableHeight = windowHeight - statusBarHeight - navBarHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cce6ff',
    // Remove or adjust paddingTop if it's creating extra space
  },
  imageContainer: {
    width: windowWidth,
    // Adjust the height value to fill the space above the nav bar
    // You might want to tweak this value to get the desired result
    height: usableHeight * 0.62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // You're using 'stretch' to fit the image
  },

  overlayText: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'DancingScript-Regular',
    color: 'yellow',
    fontSize: 25,
    textAlign: 'center',
    textShadowColor: 'rgba(1, 2, 0, 0.75)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 4,
    fontWeight:'bold',
  },
  descriptionScrollView: {
    flex: 1, // Adjust according to your layout
    paddingHorizontal: 5, // Add horizontal padding
    // Add any additional styling you wish for the ScrollView
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    padding: 5,
    // Any other styling for the header text
  },

  descriptionText: {
    fontSize: 18,
    color: '#000',
    padding: 5,
    // Any other styling for the description text
  },
  
  explanationContainer: {
    maxHeight: 200,
  },
  
  buttonContainer: {
    padding: 8,
    alignItems: 'center',
  },
  gradientButton: {
    borderRadius: 25,
    marginBottom: 10,
    width: '95%',
  },
  gradientBackground: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSpacer: {
    height: 2,
  },
  navBar: {
    backgroundColor: '#f2f2f2',
    borderTopWidth: 0,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    elevation: 5,
  },
});
