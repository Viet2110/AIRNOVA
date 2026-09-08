import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU9NRIDhMJEcSJrXK09hqRzGYI6kGItj0",
    authDomain: "airnova-f6883.firebaseapp.com",
    projectId: "airnova-f6883",
    storageBucket: "airnova-f6883.firebasestorage.app",
    messagingSenderId: "1000042256069",
    appId: "1:1000042256069:web:1dec3680ca6e2007f382ac",
    measurementId: "G-1SXFNXTQFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();