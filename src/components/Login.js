import React, { useState } from "react";
import "../components/Login.css";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import generateToken from './Token'
function Login() {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState(["", ""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginuser = JSON.parse(localStorage.getItem("user"));
    let userToken=(generateToken(60))
    localStorage.setItem("token", JSON.stringify({ userToken }));
    if (
      credentials[1] === loginuser.email &&
      credentials[0] === loginuser.password
    ) 
    navigate("/");
  
    if (credentials[0]!== loginuser.email) {
      alert("you enter wrong email");
    }
    if (credentials[1] !== loginuser.password) {
      alert("you enter wrong password");
    }
    if (!validateEmail(credentials[0])) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    //   console.log("Email1:", credentials[0]);
    //   console.log("Password1:", credentials[1]);
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
              onChange={(e) => setCredentials([e.target.value, credentials[1]])}
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
      </div>
    </div>
  );
}

export default Login;
