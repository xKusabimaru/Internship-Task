import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_SENDER,
  appId: import.meta.env.VITE_APP,
  measurementId: import.meta.env.VITE_MEASUREMENT
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const db_storage = getStorage(app);
export const studentsCollectionRef = collection(db, "students");