const SignInPage = () => {
  return (
    <>
      <div className="SignInCard">
        <img src="Logo.svg"></img>
        <div className="SignInText">
          <p className="SignInHeader">SIGN IN</p>
          <p>Enter your credentials to access your account</p>
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
        <p>
          Forgot your password? <span>Reset Password</span>
        </p>
      </div>
    </>
  );
};

export default SignInPage;
