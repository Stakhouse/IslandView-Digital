import { StyleSheet, Dimensions, StatusBar } from 'react-native';


const windowWidth = Dimensions.get('window').width; // Get the width of the screen
const windowHeight = Dimensions.get('window').height; // Get the height of the screen


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cce6ff',
   paddingTop: StatusBar.currentHeight,
  },
  // Container for the hero image
  
  imageContainer: {
    width: windowWidth,
    height: windowHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    fontSize: 34,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
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
    padding: 10,
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
