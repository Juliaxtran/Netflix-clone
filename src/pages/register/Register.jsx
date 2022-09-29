import React from "react";
import "./register.scss";
import { useState } from "react";

function Register() {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Tv shows, and more</h1>
        <h2> Watch anywhere. Cancel anytime</h2>
        <p>
          Read to watch? Enter your email to create or restart your membership{" "}
        </p>
        <div className="input">
          <input type="email" placeholder="Email Address" />
          <button className="registerButton">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
