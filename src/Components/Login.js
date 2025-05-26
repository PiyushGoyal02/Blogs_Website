import "../CSS_Code/LoginCSS.css";
import NavbarLoginLogout from "../Navbar/NavbarLoginLogout";
import LoginImage from "../Assests/Login_Image.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const Navigate = useNavigate();

    const [formData, setformData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div>
            <NavbarLoginLogout />
            <div className="login-container">
                {/* Left Side Content */}
                <img
                    src={LoginImage}
                    alt="Left Side Content"
                    className="left-side-content"
                />

                <div>
                    {/* Right Side Content */}
                    <div className="right-side-content">
                        <p>Login into your account</p>
                        <p>Enter your details to login your account</p>
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
                                <span onClick={() => Navigate('/signup')} className="spanTextLoginSection"> Signin</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
