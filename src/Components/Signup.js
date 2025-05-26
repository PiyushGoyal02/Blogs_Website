import "../CSS_Code/SignupCSS.css";
import NavbarLoginLogout from "../Navbar/NavbarLoginLogout";
import CreateAcc from "../Assests/CreateAcc_Image.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';

function Signup() {
  const Navigate = useNavigate(); // ✅ Renamed from Navigator
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupresponse = await axios.post(
        `http://localhost:4000/api/v1/authSignup/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (signupresponse.data.success) {
        toast('Signup Successfuly 🎉', {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setTimeout(() => {
          Navigate("/homepage");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
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
          <p>Create your account</p>
          <p>Enter your details to sign up</p>

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
                type="date"
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
                onClick={() => Navigate("/")}
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
