import React, { useState } from "react";
import "../styles/login.css";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye and slash icons from react-icons library
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const existingUsernames = ["pgt_test", "pgt@email.com"];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;

    if (!email) {
      setUsernameError("Email or username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // If form is valid, submit the form
    if (isValid) {
      // Submit the form or do other actions
      if (existingUsernames.includes(email) && password === "Test@1234") {
        console.log("Form submitted");
        navigate("/profile");
      }
    }
  };

  const handleBlurEmail = () => {
    // Validate the input value when it receives focus
    if (!email.trim()) {
      setUsernameError("Email or username is required");
    } else {
      setUsernameError("");
    }
  };

  const handleBlurPass = () => {
    // Validate the input value when it receives focus
    if (!password.trim()) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <img className="logo" src={logo} />
        <h1 class="logoTitle">Seamless Assist</h1>
      </div>

      {/* main login container  */}
      <div className="mainloginContainer">
        <div className="inputCol">
          <div className="loginLeftContent">
            <div className="loginLeftContentmain">
              <h2 className="signin-title">Sign in</h2>
              {/* username */}
              <div className="loginComponent">
                <div className="labelNames">
                  <label className="label">Email</label>
                </div>
                <div className="inputField">
                  <input
                    className="inputTextField"
                    placeholder="Enter email or username"
                    maxLength={60}
                    autoComplete="email"
                    onChange={handleEmailChange}
                    //onFocus={handleFocusEmail}
                    onBlur={handleBlurEmail}
                  />
                </div>
                <small class="p-error-invalid">{usernameError}</small>
              </div>
              {/* password */}
              <div className="loginComponent">
                <div className="labelNames">
                  <label className="label">Password</label>
                </div>
                <div className="p-password">
                  <input
                    className="passinputTextField"
                    placeholder="Enter password"
                    maxLength={60}
                    autoComplete="Enter password"
                    onChange={handlePasswordChange}
                    //onFocus={handleFocusPass}
                    onBlur={handleBlurPass}
                    type={showPassword ? "text" : "password"}
                  />
                  <div className="eyeIcon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <small class="p-error-invalid">{passwordError}</small>
              </div>
              {/* button container */}
              <div className="btnContainer">
                <button className="loginBtn" onClick={handleSubmit}>
                  <span class="p-button-label">Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="imgCol">
          <div className="imgContainer">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
