// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-3J3t11ggefVufqZbFDeH2qhEAQ6Fbfc",
  authDomain: "ecommerce-dd571.firebaseapp.com",
  projectId: "ecommerce-dd571",
  storageBucket: "ecommerce-dd571.appspot.com",
  messagingSenderId: "968017167707",
  appId: "1:968017167707:web:463316aa161d2f74b5867e",
  measurementId: "G-KTCC1BYB2J",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
