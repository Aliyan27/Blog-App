import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBnTRbrlp9Ydmw9haqmQP6cosmO41A4LM",
  authDomain: "login-page-ff8fd.firebaseapp.com",
  projectId: "login-page-ff8fd",
  storageBucket: "login-page-ff8fd.appspot.com",
  messagingSenderId: "1022640580617",
  appId: "1:1022640580617:web:fef0dc55848026b2b5b0d8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
