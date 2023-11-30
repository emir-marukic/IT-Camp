import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

// za napredne implementirati login preko auth rute na dummy json vebsajtu

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEmailValid(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const handleLogin = async () => {
    let valid = true;

    if (!isEmailValid(email)) {
      setEmailError("Email is not correct");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password wrong");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  return (
    <div className="container">
      <div className="form">
        <h3>Login</h3>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        <button onClick={handleLogin}>Login</button>
        <p>
          Create an account <Link to="/register">Signup now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
