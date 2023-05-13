import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeG2jG3SsOsiY7y0CKA98P9ieT6M6ltp8",
  authDomain: "monkey-blogging-bfdd0.firebaseapp.com",
  projectId: "monkey-blogging-bfdd0",
  storageBucket: "monkey-blogging-bfdd0.appspot.com",
  messagingSenderId: "518773645196",
  appId: "1:518773645196:web:975874899cef5a7ca380a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
