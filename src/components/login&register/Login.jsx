import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);

    // Reset input fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        <p>Please login to book appointment</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="link" onClick={()=>window.scrollTo(0, 0)}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
