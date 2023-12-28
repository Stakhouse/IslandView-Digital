import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz4VwBYYKS2WJ3Dy0ExwtRbTCr4OipLNg",
  authDomain: "islandviewdigital.firebaseapp.com",
  projectId: "islandviewdigital",
  storageBucket: "islandviewdigital.appspot.com",
  messagingSenderId: "768073142640",
  appId: "1:768073142640:web:43fd359f347a58e5633fb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = getAuth(app);
setPersistence(auth, inMemoryPersistence);


// Get the Firestore instance
const db = getFirestore(app);

export { auth, db };
