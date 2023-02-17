import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBkxVyzstY7VXr2CIaroGsPoS0NatNY5b8",
  authDomain: "monkey-blogging-e68be.firebaseapp.com",
  projectId: "monkey-blogging-e68be",
  storageBucket: "monkey-blogging-e68be.appspot.com",
  messagingSenderId: "537488498427",
  appId: "1:537488498427:web:648b6d6aa4bbafd9f2da5e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
