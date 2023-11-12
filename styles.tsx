
import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: StatusBar.currentHeight,
  },
  imageContainer: {
    flexBasis:'50%', // adjust this flex value to change the height of the hero image
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   // paddingBottom:16,
   marginBottom:16,
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
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 2
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 16,
  },
  logoImage: {
    width: windowWidth * 0.9,
    height: 220,
    marginHorizontal: 16,
  },
  buttonContainer: {
    padding: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
  },
});
