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
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [students, setStudents] = useState([]);
  const studentsCollectionRef = collection(db, "students");

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
