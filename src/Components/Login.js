import "../CSS_Code/LoginCSS.css";
import NavbarLoginLogout from "../Navbar/NavbarLoginLogout";
import LoginImage from "../Assests/Login_Image.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";

function Login() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post(
        "http://localhost:4000/api/v1/authLogin/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login success:", loginResponse.data);
      toast.success("Login successful!")
      Navigate("/homepage");

    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <NavbarLoginLogout />
      <div className="login-container">
        {/* Left Side Content */}
        <img
          src={LoginImage}
          alt="Login Illustration"
          className="left-side-content"
        />

        {/* Right Side Content */}
        <div className="right-side-content">
          <p>Login into your account</p>
          <p>Enter your details to login</p>

          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>

          <div className="register-link">
            <p className="Donthavetext">
              Don't have an account?
              <span
                onClick={() => Navigate("/signup")}
                className="spanTextLoginSection"
              >
                {" "}Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
