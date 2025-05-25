import "../CSS_Code/NavbarLoginLogoutCSS.css"
import { IoSearch } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

function NavbarLoginLogout() {
    return (
        <div>

            <div className="navbar-container">
                {/* First Left Side */}
                <div className="navbar-left">
                    <p>WRITELY</p>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search" />
                        <button className="search-button">
                            <IoSearch/>
                        </button>
                    </div>
                </div>

                {/* Second Right Side */}
                <div className="navbar-right">
                    <p>Home</p>
                    <p>Blogs</p>
                    <p>About</p>
                    <button><IoIosSunny/></button>
                    <button>Login</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default NavbarLoginLogout;
