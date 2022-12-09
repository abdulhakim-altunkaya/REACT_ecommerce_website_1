// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqk42raVz4bRzytjDT26yDyHgHwFvnXkA",
  authDomain: "spalvotakuprine.firebaseapp.com",
  databaseURL: "https://spalvotakuprine-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spalvotakuprine",
  storageBucket: "spalvotakuprine.appspot.com",
  messagingSenderId: "272362493598",
  appId: "1:272362493598:web:ec7c98e64dc2c2ed4e0d8f",
  measurementId: "G-PMPSFQ5DR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };