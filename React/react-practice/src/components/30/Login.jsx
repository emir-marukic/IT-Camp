import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

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
      setPasswordError("Incorect password");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // Redirect to the home page
      navigate("/");
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
        {emailError && (
          <p style={{ color: "red", margin: "0px" }}>{emailError}</p>
        )}

        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p style={{ color: "red", margin: "0px" }}>{passwordError}</p>
        )}

        <button onClick={handleLogin}>Login</button>
        <p>
          Create an account <Link to="/register">Signup now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
