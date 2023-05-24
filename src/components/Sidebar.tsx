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
      <div className="NavButtons">
        <button>
          <img src="home.svg" alt="home"></img><p>Home</p>
        </button>
        <button>
          <img src="course.svg" alt="home"></img><p>Course</p>
        </button>
        <button>
          <img src="students.svg" alt="home"></img><p>Students</p>
        </button>
        <button>
          <img src="payment.svg" alt="home"></img><p>Payment</p>
        </button>
        <button>
          <img src="report.svg" alt="home"></img><p>Report</p>
        </button>
        <button>
          <img src="settings.svg" alt="home"></img><p>Settings</p>
        </button>
      </div>
      <div className="NavEnd">
        <p>Logout</p>
        <img src="logout.svg" alt="logout"></img>
      </div>
    </div>
  );
};

export default Sidebar;
