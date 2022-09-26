import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const despatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handlelogin = (e) => {
    e.preventDefault();
    login(despatch, { username, password });
  };
  return (
    <>
      <div className="login-wrapper">
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
                <div className="mt-5 login-form-container">
                  <h1>Log Into KDB Blinds</h1>
                  <p>
                    If you have an account, sign in with your email address.
                  </p>
                  {error && (
                    <p className="alert alert-danger py-1 mt-2 mb-0">
                      Something went wrong
                    </p>
                  )}
                  <form>
                    <div className="email-box">
                      <input
                        type="text"
                        className="searchbox"
                        placeholder="Email..."
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="pass-box">
                      <input
                        type={passwordType}
                        className="searchbox"
                        placeholder="Password..."
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <img
                        src="/assets/img/eye-i.svg"
                        className="passwordshowbtn"
                        onClick={togglePassword}
                        alt=""
                      />
                    </div>
                    <div className="pb-2">
                      <input type="checkbox" id="Remamberme" /> &nbsp;
                      <label htmlFor="Remamberme">Remamber me</label>
                    </div>
                    <Link to="">Forgot Password?</Link>
                    <div className="mt-3 mb-2">
                      <button
                        className="login-btn"
                        onClick={handlelogin}
                        disabled={isFetching}
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                  <span>
                    Don't have an account yet? &nbsp;
                    <Link to="/register">Create New</Link>
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

export default Login;
