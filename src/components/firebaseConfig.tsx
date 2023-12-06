import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAz4VwBYYKS2WJ3Dy0ExwtRbTCr4OipLNg",
  authDomain: "islandviewdigital.firebaseapp.com",
  projectId: "islandviewdigital",
  storageBucket: "islandviewdigital.appspot.com",
  messagingSenderId: "768073142640",
  appId: "1:768073142640:web:43fd359f347a58e5633fb5"
};
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export { app, auth };
