
import firebase from "firebase/compat/app";
// authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm-6NIFQjOX2MB7O0uZaYVe3jhc_gL_xg",
  authDomain: "my--frontend.firebaseapp.com",
  projectId: "my--frontend",
  storageBucket: "my--frontend.appspot.com",
  messagingSenderId: "767452523164",
  appId: "1:767452523164:web:87f2464c3faa21d6d79b59"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = app.firestore();
 