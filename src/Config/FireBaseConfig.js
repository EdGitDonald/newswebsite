// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// allow us to connect to firestore database
import {getFirestore} from 'firebase/firestore'

//for auth
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTlHKcoQViG54ctzIfYk68viREUbHc_OA",
  authDomain: "articleproject-e3374.firebaseapp.com",
  projectId: "articleproject-e3374",
  storageBucket: "articleproject-e3374.appspot.com",
  messagingSenderId: "354809742057",
  appId: "1:354809742057:web:5177979469ab15429aa678",
  measurementId: "G-K616DXELY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up database and export it
export const db = getFirestore(app)

//set up auth and export it
export const auth = getAuth(app)