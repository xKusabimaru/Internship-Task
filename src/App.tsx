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
                <Students />
              </Sidebar>
            }
          />
          <Route
            path="/payment"
            element={
              <Sidebar>
                <Headerbar />
                <Payment />
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
