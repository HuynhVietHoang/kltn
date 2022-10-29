// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.,
  authDomain: "kltn-c7765.firebaseapp.com",
  projectId: "kltn-c7765",
  storageBucket: "kltn-c7765.appspot.com",
  messagingSenderId: "1035371961574",
  appId: "1:1035371961574:web:9d866bacafdb0b90cd2f27",
  measurementId: "G-H23HHEJW57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);