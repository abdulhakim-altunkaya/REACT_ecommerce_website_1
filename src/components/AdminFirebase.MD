import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCakvgLoEXGmftdfrGY5L44MY_etI-iFFQ",
    authDomain: "todo-55bde.firebaseapp.com",
    projectId: "todo-55bde",
    storageBucket: "todo-55bde.appspot.com",
    messagingSenderId: "797558474110",
    appId: "1:797558474110:web:5c34a02800f596f21e9f2f"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);