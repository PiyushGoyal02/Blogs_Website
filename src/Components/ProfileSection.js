import "../CSS_Code/ProfileSectionCSS.css";
import NavbarHomepage from "../Navbar/NavbarHomepage";
import { FaUser, FaRegComments } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { useState } from "react";

function ProfileSection() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div>
            <NavbarHomepage />

            <div className="SidebarContainer">
                <div className="SidebarTags">
                    <div
                        className={`SidebarItem ${activeTab === "profile" ? "active" : ""}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        <FaUser className="SidebarIcon" />
                        <p>Profile</p>
                    </div>

                    <div
                        className={`SidebarItem ${activeTab === "yourblogs" ? "active" : ""}`}
                        onClick={() => setActiveTab("yourblogs")}
                    >
                        <PiNotebookDuotone className="SidebarIcon" />
                        <p>Your Blogs</p>
                    </div>

                    <div
                        className={`SidebarItem ${activeTab === "comments" ? "active" : ""}`}
                        onClick={() => setActiveTab("comments")}
                    >
                        <FaRegComments className="SidebarIcon" />
                        <p>Comments</p>
                    </div>

                    <div
                        className={`SidebarItem ${activeTab === "create" ? "active" : ""}`}
                        onClick={() => setActiveTab("create")}
                    >
                        <MdOutlineCreate className="SidebarIcon" />
                        <p>Create Blog</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;
