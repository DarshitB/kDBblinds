import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { toast } from "react-toastify";

function Register({ updaterespons }) {
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

  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();

  const handleregistreation = async (e) => {
    e.preventDefault();
    if (password === cpassword) {
      const registration = {
        username: fname + sname,
        email: email,
        password: password,
      };
      const res = await publicRequest.post("/auth/register", registration);
      if (res.status === 201) {
        updaterespons(true);
        toast.success("Your account registration is a success");
      } else {
        toast.error("Something went wrong, please try again later");
      }
    } else {
      setCpassword("");
      toast.error(
        "The passwords are not matched, Please enter the same password"
      );
    }
  };

  return (
    <>
      <div className="Register-wrapper">
        <div className="logo-container"></div>
        <div className="login-form-wrapper position-relative h-100">
          <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
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
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="fname-box pl-1">
                      <input
                        type="text"
                        className="searchbox"
                        placeholder="Last Name"
                        onChange={(e) => setSname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="email-box ">
                    <input
                      type="email"
                      className="searchbox"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="passs-confirm-boxes">
                    <div className="pass-box">
                      <input
                        type={passwordType}
                        className="searchbox "
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-3 mb-2">
                    <button className="login-btn" onClick={handleregistreation}>
                      Create Account
                    </button>
                  </div>
                  <span>
                    Alredy have an account? &nbsp;
                    <Link to="/login">LogIn Here</Link>
                  </span>
                  <span style={{ float: "right" }}>
                    <Link to="/">Back to Home</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
