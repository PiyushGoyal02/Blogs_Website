import "../CSS_Code/NavbarHomepageCSS.css";
import { IoSearch } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import profileImage from "../Assests/real-girl-pic-8.jpg";
import {
  FaUser,
  FaBlog,
  FaComments,
  FaPenFancy,
  FaSignOutAlt,
} from "react-icons/fa";

function NavbarHomepage() {
  const navigate = useNavigate();
  const userId =
    localStorage.getItem("UserIdAfterSignup") ||
    localStorage.getItem("UserIdAfterLogin");
  const [showDropdown, setShowDropdown] = useState(false);

  function LogoutButtonHandler() {
    localStorage.removeItem("UserIdAfterSignup");
    localStorage.removeItem("UserIdAfterLogin");
    navigate("/");
  }

  return (
    <div className="navbar-container">
      {/* Left Side */}
      <div className="navbar-left">
        <p onClick={() => navigate("/homepage")}>WRITELY</p>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="search-button">
            <IoSearch />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="navbar-right">
        <p onClick={() => navigate("/homepage")}>Home</p>
        <p onClick={() => navigate("/allblogs")}>Blogs</p>
        <p onClick={() => navigate("/about")}>About</p>
        <button>
          <IoIosSunny />
        </button>

        {userId && (
          <div className="profile-container">
            <img
              src={profileImage}
              alt="Profile"
              className="ProfileImage"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown-container">
                <p className="dropdown-title">My Account</p>
                <hr />
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/profilesection")}
                  >
                    <FaUser /> <span>Profile</span>
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/yourblogs")}
                  >
                    <FaBlog /> <span>Your Blog</span>
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/comments")}
                  >
                    <FaComments /> <span>Comments</span>
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/writeblog")}
                  >
                    <FaPenFancy /> <span>Write Blog</span>
                  </div>
                </div>
                <hr />
                <div
                  className="dropdown-item logout"
                  onClick={LogoutButtonHandler}
                >
                  <FaSignOutAlt /> <span>Log out</span>
                </div>
              </div>
            )}
          </div>
        )}
        <button onClick={LogoutButtonHandler}>Logout</button>
      </div>
    </div>
  );
}

export default NavbarHomepage;
