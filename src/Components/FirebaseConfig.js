// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuf0CQwsjgsZ2PIE9x1UFgKUpVI6hGQdw",
  authDomain: "schoolapp-2a9b6.firebaseapp.com",
  projectId: "schoolapp-2a9b6",
  storageBucket: "schoolapp-2a9b6.firebasestorage.app",
  messagingSenderId: "183843948712",
  appId: "1:183843948712:web:a0b8a57ed84af406e5da9d"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP)