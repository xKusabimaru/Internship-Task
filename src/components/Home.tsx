const Home = () => {
  return (
    <div className="home">
      <div className="home-students">
        <img src="home-students.svg" alt="students"></img>
        <p className="home-name">Students</p>
        <p className="home-info">243</p>
      </div>
      <div className="home-course">
        <img src="home-course.svg" alt="course"></img>
        <p className="home-name">Course</p>
        <p className="home-info">13</p>
      </div>
      <div className="home-payments">
        <img src="home-payments.svg" alt="payments"></img>
        <p className="home-name">Payments</p>
        <p className="home-info">
          <span>INR </span>556,000
        </p>
      </div>
      <div className="home-users">
        <img src="home-users.svg" alt="users"></img>
        <p className="home-name home-user-name">Users</p>
        <p className="home-info">3</p>
      </div>
    </div>
  );
};

export default Home;
