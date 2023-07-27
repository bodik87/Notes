import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8J_j0est6FOKbRtPimXwE7vz-G-Uxdow",
  authDomain: "shop-f618d.firebaseapp.com",
  projectId: "shop-f618d",
  storageBucket: "shop-f618d.appspot.com",
  messagingSenderId: "682596247975",
  appId: "1:682596247975:web:1785ce0a7d667755cfae82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
