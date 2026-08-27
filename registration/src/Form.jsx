import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div className="page">
      <div className="registration-card">

        <div className="title">
          <div className="title-icon">👤</div>
          <h1>Registration Form</h1>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <div className="input-box">
              <span>♙</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-box">
              <span>✉</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-box">
              <span>🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-box">
              <span>🔒</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-box">
              <span>☎</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <div className="input-box">
              <span>♙</span>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <span className="arrow">⌄</span>
            </div>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn">
            <span>♟</span>
            Register
          </button>

        </form>

        <div className="login-text">
          Already have an account?
          <a href="#"> Login</a>
        </div>

      </div>
    </div>
  );
}

export default Form;