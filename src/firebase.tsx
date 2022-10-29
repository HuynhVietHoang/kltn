// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBodTRQyHFCzsAC0RWKiVtxI8nQAnLGhl8",
  authDomain: "kltn-12ef3.firebaseapp.com",
  projectId: "kltn-12ef3",
  storageBucket: "kltn-12ef3.appspot.com",
  messagingSenderId: "597083004412",
  appId: "1:597083004412:web:e2a616191398abba9c6679",
  measurementId: "G-PM6RRWZCG6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;