import "../CSS_Code/NavbarHomepageCSS.css"
import { IoSearch } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function NavbarHomepage() {
    const Navigator = useNavigate();
    return (
        <div>

            <div className="navbar-container">
                {/* First Left Side */}
                <div className="navbar-left">
                    <p onClick={() => Navigator('/homepage')}>WRITELY</p>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search" />
                        <button className="search-button">
                            <IoSearch/>
                        </button>
                    </div>
                </div>

                {/* Second Right Side */}
                <div className="navbar-right">
                    <p onClick={() => Navigator('/homepage')}>Home</p>
                    <p onClick={() => Navigator('/allblogs')}>Blogs</p>
                    <p onClick={() => Navigator('/about')}>About</p>
                    <button><IoIosSunny/></button>
                    <button>Login</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default NavbarHomepage;
