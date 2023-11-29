import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const handleLogin = async () => {
    let valid = true;

    if (name.length < 4) {
      setNameError("Name must contain 4 or more letter");
      valid = false;
    } else {
      setNameError("");
    }

    if (valid) {
      // login funkcija
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {nameError && <p>{nameError}</p>}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="password"
      />
      {emailError && <p>{emailError}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Register;
