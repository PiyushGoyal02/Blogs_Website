import "../CSS_Code/SignupCSS.css";
import NavbarLoginLogout from "../Navbar/NavbarLoginLogout";
import CreateAcc from "../Assests/CreateAcc_Image.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const Navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <NavbarLoginLogout />
      <div className="login-container">
        {/* Left Side Content */}
        <img
          src={CreateAcc}
          alt="Create Account Illustration"
          className="left-side-content"
        />

        {/* Right Side Content */}
        <div className="right-side-content">
          <p>Login into your account</p>
          <p>Enter your details to login your account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className="InputTag"
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                required
                type="text"
                id="dob"
                name="dob"
                value={formData.dob}
                className="InputTag"
                onChange={handleInputChange}
                placeholder="Enter your DOB"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className="InputTag"
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={formData.password}
                className="InputTag"
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-button">
              Signup
            </button>
          </form>

          <div className="register-link">
            <p className="Donthavetext">
              Already have an account?
              <span
                onClick={() => Navigator("/")}
                className="spanTextLoginSection"
              >
                {" "}
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
