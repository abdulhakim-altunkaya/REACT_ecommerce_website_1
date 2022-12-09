// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

export { db, collection, addDoc, deleteDoc, query, doc, onSnapshot, orderBy, updateDoc };


**** 


import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, deleteDoc, doc, query, onSnapshot, orderBy, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqk42raVz4bRzytjDT26yDyHgHwFvnXkA",
  authDomain: "spalvotakuprine.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/spalvotakuprine/database/spalvotakuprine-default-rtdb/data/~2F",
  projectId: "spalvotakuprine",
  storageBucket: "spalvotakuprine.appspot.com",
  messagingSenderId: "272362493598",
  appId: "1:272362493598:web:ec7c98e64dc2c2ed4e0d8f",
  measurementId: "G-PMPSFQ5DR3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, deleteDoc, query, doc, onSnapshot, orderBy, updateDoc };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);




**** 
import { collection, addDoc, deleteDoc, doc, query, onSnapshot, orderBy, updateDoc } from './firebase';
const sub = async (e) => {
  e.preventDefault();
  try {
    const docRef = await addDoc(collection(database, "orders"), {
      Name: "Ada",
      Age: 12,
      CourseEnrolled: "1815"
    });
    console.log("Document written with ID: ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}