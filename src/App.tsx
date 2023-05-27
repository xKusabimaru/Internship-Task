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

function App() {
  let studentList: any[] = [
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
    {
      img: "pexels-photo-2379004 1.png",
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      number: "1234567305477760",
      date: "08-Dec, 2021",
    },
  ];

  let paymentList: any[] = [
    {
      name: "Karthi",
      schedule: "First",
      bill: "00012223",
      paid: "INR 35,000",
      balance: "INR 55,000",
      date: "08-Dec, 2021",
    },
    {
      name: "Karthi",
      schedule: "First",
      bill: "00012223",
      paid: "INR 35,000",
      balance: "INR 55,000",
      date: "08-Dec, 2021",
    },
    {
      name: "Karthi",
      schedule: "First",
      bill: "00012223",
      paid: "INR 35,000",
      balance: "INR 55,000",
      date: "08-Dec, 2021",
    },
    {
      name: "Karthi",
      schedule: "First",
      bill: "00012223",
      paid: "INR 35,000",
      balance: "INR 55,000",
      date: "08-Dec, 2021",
    },
  ];

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
                <Students items={studentList} />
              </Sidebar>
            }
          />
          <Route
            path="/payment"
            element={
              <Sidebar>
                <Headerbar />
                <Payment items={paymentList} />
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
