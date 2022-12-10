import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXurxgZ6CAOwLoA7YvwNtgRX29ZFD5EYY",
  authDomain: "spalvota-3f438.firebaseapp.com",
  databaseURL: "https://spalvota-3f438-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spalvota-3f438",
  storageBucket: "spalvota-3f438.appspot.com",
  messagingSenderId: "362690822214",
  appId: "1:362690822214:web:22de4b9f723691fbc74a47"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);