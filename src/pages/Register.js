import React, { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const [eyropacity, setEyropacity] = useState(true);
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setEyropacity(false);
      return;
    }
    setPasswordType("password");
    setEyropacity(true);
  };
  return (
    <>
      <div className="Register-wrapper">
        <div className="navbar navbar-expand-lg flex-column">
          <div className="topNav row">
            <div className="logodiv col-md-2">
              <Link className="navbar-brand" to="/">
                <img
                  src="/assets/img/logobgw.png"
                  className="navbar-logo"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="login-form-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="mt-4 login-form-container">
                  <h1>Create New Account</h1>
                  <p>
                    If you have an account, sign in with your email address.
                  </p>
                  <div className="register-name-insert">
                    <div className="fname-box pr-1">
                      <input
                        type="text"
                        className="searchbox"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="fname-box pl-1">
                      <input
                        type="text"
                        className="searchbox"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="email-box ">
                    <input
                      type="email"
                      className="searchbox"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="passs-confirm-boxes">
                    <div className="pass-box">
                      <input
                        type={passwordType}
                        className="searchbox"
                        placeholder=" Password"
                        required
                      />
                      <img
                        src="/assets/img/eye-i.svg"
                        className="passwordshowbtn"
                        onClick={togglePassword}
                        alt=""
                        style={{ opacity: eyropacity ? "0.3" : "1" }}
                        required
                      />
                    </div>
                    <div className="pass-box">
                      <input
                        type={passwordType}
                        className="searchbox"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-3 mb-2">
                    <button className="login-btn">Create Account</button>
                  </div>
                  <span>
                    Alredy have an account? &nbsp;
                    <Link to="/login">LogIn Here</Link>
                  </span>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="backgrounddivbox">
                <img className="" alt="" src="/assets/img/logBliend-i.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
