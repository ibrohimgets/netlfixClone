import React from "react";
import "./logIn.scss";
const LogIn = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="password" />
          <button className="login-btn">Sign In</button>

          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>

          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
