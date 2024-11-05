import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Importing the getAuth function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYpDvcIF1oE2-dpWaQqryHEW4I2LE76G4",
  authDomain: "job-analyzer-28c41.firebaseapp.com",
  projectId: "job-analyzer-28c41",
  storageBucket: "job-analyzer-28c41.appspot.com",
  messagingSenderId: "671917817733",
  appId: "1:671917817733:web:2509bb7272ef406149ceec",
  measurementId: "G-Q20VTF21G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app); // Create the auth object

export { auth }; // Export the auth object
