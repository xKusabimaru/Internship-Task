import "./App.css";
import Course from "./components/Course";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import SignInPage from "./components/SignInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Payment from "./components/Payment";
import Report from "./components/Report";
import Settings from "./components/Settings";
import Headerbar from "./components/Headerbar";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db, db_storage, studentsCollectionRef } from "./firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";

export async function handleCreateSubmet(
  selectedImage: String,
  selectedName: string,
  selectedEmail: string,
  selectedPhone: string,
  selectedNumber: string,
  selectedDate: string
): Promise<any> {
  return await addDoc(studentsCollectionRef, {
    image: selectedImage,
    name: selectedName,
    email: selectedEmail,
    phone: selectedPhone,
    number: selectedNumber,
    date: selectedDate,
  });
}

export async function uploadImage(image: File): Promise<string> {
  const image_storage = ref(db_storage, `images/${v4()}`);
  await uploadBytesResumable(image_storage, image);
  return await getDownloadURL(image_storage);
}

export async function handleUpdateSubmet(
  id: any,
  selectedName: string,
  selectedEmail: string,
  selectedPhone: string,
  selectedNumber: string,
  selectedDate: string
): Promise<any> {
  const studentDoc = doc(db, "students", id);
  return await updateDoc(studentDoc, {
    name: selectedName,
    email: selectedEmail,
    phone: selectedPhone,
    number: selectedNumber,
    date: selectedDate,
  });
}

function App() {
  const [students, setStudents] = useState([]);

  const [payments, setPayments] = useState([]);
  const paymentsCollectionRef = collection(db, "payments");

  useEffect(() => {
    const getStudents = async () => {
      const data: any = await getDocs(studentsCollectionRef);
      setStudents(
        data.docs.map((doc: { data: () => any; id: any }) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    const getPayments = async () => {
      const data: any = await getDocs(paymentsCollectionRef);
      setPayments(
        data.docs.map((doc: { data: () => any; id: any }) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getStudents();
    getPayments();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route
            path="/home"
            element={
              <Sidebar>
                <Headerbar />
                <Home />
              </Sidebar>
            }
          />
          <Route
            path="/course"
            element={
              <Sidebar>
                <Headerbar />
                <Course />
              </Sidebar>
            }
          />
          <Route
            path="/students"
            element={
              <Sidebar>
                <Headerbar />
                <Students items={students} />
              </Sidebar>
            }
          />
          <Route
            path="/payment"
            element={
              <Sidebar>
                <Headerbar />
                <Payment items={payments} />
              </Sidebar>
            }
          />
          <Route
            path="/report"
            element={
              <Sidebar>
                <Headerbar />
                <Report />
              </Sidebar>
            }
          />
          <Route
            path="/settings"
            element={
              <Sidebar>
                <Headerbar />
                <Settings />
              </Sidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
