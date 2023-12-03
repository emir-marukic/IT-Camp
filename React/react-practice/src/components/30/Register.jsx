import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [secondPass, setSecondPass] = useState("");
  const [secondPassError, setSecondPassError] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      return false;
    }
    return true;
  };

  const validateForm = () => {
    let isValid = true;

    if (name.length <= 3) {
      setNameError("Your name must have more than 3 characters");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!isEmailValid(email)) {
      setEmailError("Your email is not correct");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Your password is incorrect");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== secondPass) {
      setSecondPassError("Not the same password");
      isValid = false;
    } else {
      setSecondPassError("");
    }

    return isValid;
  };

  const registerHandler = () => {
    if (validateForm()) {
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h3>Register</h3>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && (
          <p style={{ color: "red", margin: "0px" }}>{nameError}</p>
        )}
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <p style={{ color: "red", margin: "0px" }}>{emailError}</p>
        )}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p style={{ color: "red", margin: "0px" }}>{passwordError}</p>
        )}
        <input
          type="password"
          placeholder="confirm password"
          value={secondPass}
          onChange={(e) => setSecondPass(e.target.value)}
        />
        {secondPassError && (
          <p style={{ color: "red", margin: "0px" }}>{secondPassError}</p>
        )}
        <button onClick={registerHandler}>Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
