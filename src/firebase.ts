import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_eQ17EpAI4q9QkTRgVgIH45s_iR5IhWM",
  authDomain: "react-internship-task-381a2.firebaseapp.com",
  projectId: "react-internship-task-381a2",
  storageBucket: "react-internship-task-381a2.appspot.com",
  messagingSenderId: "444759951644",
  appId: "1:444759951644:web:01ee22c5ae9a9f126252d9",
  measurementId: "G-Z3SEB322RE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const db_storage = getStorage(app);
export const studentsCollectionRef = collection(db, "students");