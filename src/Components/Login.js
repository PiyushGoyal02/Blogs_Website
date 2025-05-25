import "../CSS_Code/LoginCSS.css";
import NavbarLoginLogout from "../Navbar/NavbarLoginLogout";
import LoginImage from "../Assests/Login_Image.png";

function Login() {
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="InputTag"
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
                                    className="InputTag"
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
                                <span className="spanTextLoginSection"> Signin</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
