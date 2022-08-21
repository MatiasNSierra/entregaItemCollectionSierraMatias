
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAez96J5eg5IDAcFVMP4BAESNGwvaoNM7Y",
  authDomain: "ecommercesierramatias.firebaseapp.com",
  projectId: "ecommercesierramatias",
  storageBucket: "ecommercesierramatias.appspot.com",
  messagingSenderId: "897582347675",
  appId: "1:897582347675:web:512ce5339219b02ce39d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)