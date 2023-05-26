import { NavLink } from "react-router-dom";

interface Props {
  children: any;
}

const Sidebar = ({ children }: Props) => {
  const items = [
    { img: "home.svg", name: "Home", path: "/home" },
    { img: "course.svg", name: "Course", path: "/course" },
    { img: "students.svg", name: "Students", path: "/students" },
    { img: "payment.svg", name: "Payment", path: "/payment" },
    { img: "report.svg", name: "Report", path: "/report" },
    { img: "settings.svg", name: "Settings", path: "/settings" },
  ];

  return (
    <div className="MainPage">
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
          {items.map((item, index) => (
            <NavLink to={item.path} key={index} className="ButtonsNavlink">
              <button>
                <div>
                  <img src={item.img} alt={item.name}></img>
                </div>
                <div>
                  <p>{item.name}</p>
                </div>
              </button>
            </NavLink>
          ))}
        </div>
        <NavLink to="/" className="EndNavlink">
          <div className="NavEnd">
            <p>Logout</p>
            <img src="logout.svg" alt="logout"></img>
          </div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
