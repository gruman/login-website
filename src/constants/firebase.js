// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMAmKTNN9o4oCQmpVAMHLOCVlXozhPog",
  authDomain: "login-website-2891e.firebaseapp.com",
  projectId: "login-website-2891e",
  storageBucket: "login-website-2891e.appspot.com",
  messagingSenderId: "612476334371",
  appId: "1:612476334371:web:016aaf33065e47d8ff5c96",
  measurementId: "G-5C4KG653KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);