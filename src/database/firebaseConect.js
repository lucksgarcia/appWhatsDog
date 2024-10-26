

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/compat/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvW6Alj23vaHbhwWnOFU_gdOg8dKJNUCE",
  authDomain: "basewhatsdog.firebaseapp.com",
  projectId: "basewhatsdog",
  storageBucket: "basewhatsdog.appspot.com",
  messagingSenderId: "278153115950",
  appId: "1:278153115950:web:d9e9661cac156c1bd8e2bf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



if (firebase.apps.length == 0) { 
      firebase.initializeApp(firebaseConfig); 
}

export default firebase;