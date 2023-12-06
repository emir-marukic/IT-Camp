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
      setEmailError("email is very very wrong");
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

    // if (valid) {
    loginAction(email, password);
    // }
  };

  const loginAction = async (formEmail, formPassword) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formEmail,
          password: formPassword,
          // expiresInMins: 60, // optional
        }),
      });

      const data = await response.json();

      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
