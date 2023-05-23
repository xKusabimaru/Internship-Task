const SignInPage = () => {
  return (
    <>
      <div className="SignInPage">
        <div className="SignInCard">
          <img src="Logo.svg" alt="Logo"></img>
          <div className="SignInText">
            <p className="SignInHeader">SIGN IN</p>
            <p className="SignInDefaultP">Enter your credentials to access your account</p>
          </div>
          <form className="SignInForm">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
            ></input>
            <input type="submit" value="SIGN IN" className="SignInButton"></input>
          </form>
          <p className="SignInDefaultP">
            Forgot your password? <span>Reset Password</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
