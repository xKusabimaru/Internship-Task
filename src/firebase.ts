import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.VITE_APIKEY,
  authDomain: process.env.VITE_AUTH,
  projectId: process.env.VITE_ID,
  storageBucket: process.env.VITE_STORAGE,
  messagingSenderId: process.env.VITE_SENDER,
  appId: process.env.VITE_APP,
  measurementId: process.env.VITE_MEASUREMENT
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const db_storage = getStorage(app);
export const studentsCollectionRef = collection(db, "students");