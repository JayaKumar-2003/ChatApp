// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtW9bn_-Zz7JcSMvCItaZK9HyHArOsp-A",
  authDomain: "chat-eaddd.firebaseapp.com",
  projectId: "chat-eaddd",
  storageBucket: "chat-eaddd.appspot.com",
  messagingSenderId: "288733295521",
  appId: "1:288733295521:web:71365d40fbe4dc144191e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();