import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight ?? 0;
const navBarHeight = 50; // Assuming the navigation bar is 50px high
const usableHeight = windowHeight - statusBarHeight - navBarHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cce6ff',
  },
  imageContainer: {
    width: windowWidth,
    height: usableHeight * 0.62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
    fontWeight: 'bold',
  },
  descriptionScrollView: {
    flex: 1,
    paddingHorizontal: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  descriptionText: {
    fontSize: 18,
    color: 'black',
    padding: 3,
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
  buttonSpacer: {
    height: 1,
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
  benefitsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  benefitsBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  benefitsScrollView: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  benefitsHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  benefitsPoint: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 25,
    color: '#ffffff',
  },
  lastPoint: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 60,
    lineHeight: 25,
    color: '#ffffff',
  },
  benefitsButtonContainer: {
    padding: 8,
    alignItems: 'center',
  },
  benefitsButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  benefitsButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailedInfoContainer: {
    flex: 1,
    // Add other styling properties as needed
  },
  detailedInfoBackground: {
    flex: 1,
    resizeMode: 'cover',
    // Add other styling properties as needed
  },
  detailedInfoScrollView: {
    margin: 10,
    // Add other styling properties as needed
  },
  infoParagraph: {
    fontSize: 20,
    margin: 10,
    color: '#ffffff', // Assuming white text
    // Add other styling properties as needed
  },
  infoHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // Assuming white text for headers
    // Add other styling properties as needed
  },
  mainHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff', // Choose a suitable color
    textAlign: 'center',
    marginBottom: 20,
    marginTop:20, // Space before the next content
    // Other styles...
  },
  callToAction: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#ffffff', // Assuming white text for call to action
    // Add other styling properties as needed
  },
  detailedInfoButtonContainer: {
    alignItems: 'center',
    margin: 10,
    // Add other styling properties as needed
  },
  detailedInfoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Example color
    padding: 15,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    // Add other styling properties as needed
  },
  detailedInfoButtonText: {
    color: '#ffffff', // Example color
    fontSize: 16,
    // Add other styling properties as needed
  },
});
