import "../CSS_Code/NavbarLoginLogoutCSS.css";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import { useState } from "react";

function NavbarLoginLogout() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // document.body.classList.toggle("dark-mode", !isDarkMode); // Optional: toggle body class
    };

    return (
        <div className="navbar-container">
            {/* Left Side */}
            <div className="navbar-left">
                <p>WRITELY</p>
            </div>

            {/* Right Side */}
            <div className="navbar-right">
                <button onClick={toggleTheme}>
                    {isDarkMode ? <IoIosSunny /> : <FaMoon />}
                </button>
                <button>Login</button>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default NavbarLoginLogout;
