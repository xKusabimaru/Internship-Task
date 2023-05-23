import React from "react";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src="Logo.svg" alt="Logo"></img>
      <div className="Profile">
        <img
          src="pexels-photo-2379004 1.png"
          alt="Profile Picture"
          className="ProfilePicture"
        ></img>
        <p className="ProfileName">Karthi Madesh</p>
        <p className="ProfilePosition">Admin</p>
      </div>
      {/* <div className="Navlinks"> */}
        <div className="NavButton">
          <button>
            <img src="home.svg" alt="home"></img>Home
          </button>
          <button>
            <img src="course.svg" alt="home"></img>Course
          </button>
          <button>
            <img src="students.svg" alt="home"></img>Students
          </button>
          <button>
            <img src="payment.svg" alt="home"></img>Payment
          </button>
          <button>
            <img src="report.svg" alt="home"></img>Report
          </button>
          <button>
            <img src="settings.svg" alt="home"></img>Settings
          </button>
        </div>
        <div className="NavEnd">
          <p>Logout</p>
          <img src="logout.svg" alt="logout"></img>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
