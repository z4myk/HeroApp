// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSSrSH4w4VT160DkCCfwbOOt84gU9Mx8",
  authDomain: "heroesappp-795de.firebaseapp.com",
  projectId: "heroesappp-795de",
  storageBucket: "heroesappp-795de.appspot.com",
  messagingSenderId: "342227353826",
  appId: "1:342227353826:web:0291c795cc442af19bdebb",
  measurementId: "G-C5L4Y47V8C"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)