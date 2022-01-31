import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxK5Y7ng9xon0jI5GpYYWH4vEMuyMJMJc",
  authDomain: "reading-list-20a42.firebaseapp.com",
  projectId: "reading-list-20a42",
  storageBucket: "reading-list-20a42.appspot.com",
  messagingSenderId: "450934227237",
  appId: "1:450934227237:web:c54cb7eb2b97faa3d75acc",
};

// init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init auth
const auth = getAuth();

export { db, auth };
