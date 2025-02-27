import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Data:", formData);

    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      address: "",
      password: "",
    });

    alert("Registration Successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create Account</h1>
        <p>Please sign up to book appointment</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
          />

          {/* Gender & Date of Birth in a Single Row */}
          <div className="input-row">
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link" onClick={()=>window.scrollTo(0, 0)}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
