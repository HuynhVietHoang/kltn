
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { get, getDatabase, ref } from "firebase/database";


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
export const dbRef = ref(getDatabase());
export const getFireBase:any = (child)=> get(child(dbRef, child)).then((snapshot) => {
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    return null
  }
}).catch((error) => {
  return null
});
export default app;