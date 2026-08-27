import React, { useState } from "react";
import "./Login.css"; // Ensure your CSS file is imported

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (password === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Conditional visibility class handles the slider animation */}
        <p className={errors.email ? "visible" : ""}>{errors.email}</p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={errors.password ? "visible" : ""}>{errors.password}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
