import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Singup.css";

import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
function SignUp() {
  const navgiate = useNavigate();
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, confirmPassword, password })
    );
    navgiate("/Login");
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
      navgiate("/Signup");
    } else {
      setEmailError("error in email");
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1 className="Welcome">Sign up</h1>
        <h4 className="subtitle">A</h4>
      </div>
      <div className="box-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={toggleShowPassword}>
                {showPassword ? <FaRegEye /> : <FaEyeLowVision />}
              </span>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
          </div>
          <button type="submit" className="gradient-button">
            Sign up
          </button>
          <p className="login-text">
            Already have an account?
            <span className="login-link" onClick={() => navgiate("/Login")}>
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
