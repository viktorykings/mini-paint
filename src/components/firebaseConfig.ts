import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCJb_VcZlNEqd-UAF1ALHoP26VCbfvCgf4",
    authDomain: "viktorykings-mini-paint.firebaseapp.com",
    projectId: "viktorykings-mini-paint",
    storageBucket: "viktorykings-mini-paint.appspot.com",
    messagingSenderId: "323718827940",
    appId: "1:323718827940:web:a9749e7ed3742c5e76bb31"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;