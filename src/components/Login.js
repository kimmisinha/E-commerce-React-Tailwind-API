import React, { useState } from "react";
import "../components/Login.css";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

function Login() {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState(["", ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(credentials[0])) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      console.log("Email:", credentials[0]);
      console.log("Password:", credentials[1]);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1 className="Welcome">Welcome</h1>
        <h4 className="subtitle">A</h4>
      </div>
      <div className="box-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={credentials[0]}
              onChange={(e) =>
                setCredentials([e.target.value, credentials[1]])
              }
              required
            />
            {emailError && <p className="error">{emailError}</p>}
            <hr className="colorful-line" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={credentials[1]}
                onChange={(e) =>
                  setCredentials([credentials[0], e.target.value])
                }
                required
              />
              <span className="eye-icon" onClick={toggleShowPassword}>
                {showPassword ? <FaRegEye /> : <FaEyeLowVision />}
              </span>
            </div>
            <hr className="colorful-line" />
          </div>
          <button type="submit" className="gradient-button">
            Login
          </button>
        </form>
        <div className="footer">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;