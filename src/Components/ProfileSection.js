import "../CSS_Code/ProfileSectionCSS.css";
import profileImage from "../Assests/real-girl-pic-8.jpg";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function ProfileSection() {
    const [popup, setPopup] = useState(false);
    const [form, setform] = useState({
        name:"",
        lastname:"",
        linkdin:"",
        github:"",
        facebook:"",
        instagram:"",
        description:"",
        imgaeURL:""
    })

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setform((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }


    const submitFormDataHandler = async (e) => {
        e.preventDefault();
        console.log(form, "FormData")
    }

    const openPopup = () => setPopup(true);
    const closePopup = () => setPopup(false);

    return (
        <div>
            <div className="profilecontainer">
                {/* Left Panel */}
                <div className="leftsideContainer">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="ProfileImage-ProfileSection"
                    />
                    <p className="role">Web Developer</p>
                    <div className="SocialMediaIcons">
                        <FaFacebook />
                        <FaLinkedin />
                        <FaGithub />
                        <FaInstagram />
                    </div>
                </div>

                {/* Right Panel */}
                <div className="rightsideContainer">
                    <h2 className="welcome-text">Welcome Rohit!</h2>
                    <p><strong>Email:</strong> rohitsingh@gmail.com</p>
                    <p className="about-label">About Me</p>
                    <div className="about-box">
                        <p></p>
                    </div>
                    <button onClick={openPopup} className="edit-btn">Edit Profile</button>
                </div>
            </div>

            {/* Popup Modal */}
            {popup && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="HeadingSection-CrossBtn">
                            <div className="HeadingtextEditprofile">
                                <h2 className="modal-title">Edit Profile</h2>
                                <p className="modal-subtext">Make changes to your profile here.</p>
                            </div>
                            <div>
                                <RxCross2 onClick={closePopup} className="CrossBtn" />
                            </div>
                        </div>

                        <form onSubmit={submitFormDataHandler}>
                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" onChange={onChangeHandler} name="name" value={form.name} />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" onChange={onChangeHandler} name="lastname" value={form.lastname} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="facebook">Facebook</label>
                                    <input id="facebook" type="text" placeholder="Enter a URL" onChange={onChangeHandler} name="facebook" value={form.facebook} />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="instagram">Instagram</label>
                                    <input id="instagram" type="text" placeholder="Enter a URL" onChange={onChangeHandler} name="instagram" value={form.instagram}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="linkedin">LinkedIn</label>
                                    <input id="linkedin" type="text" onChange={onChangeHandler} name="linkdin" value={form.linkdin}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="github">GitHub</label>
                                    <input id="github" type="text" onChange={onChangeHandler} name="github" value={form.github}/>
                                </div>
                            </div>

                            <div className="form-full">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="4" onChange={onChangeHandler} name="description" value={form.description}/>
                            </div>

                            <div className="form-full">
                                <label htmlFor="profileImage">Profile Picture</label>
                                <label htmlFor="profileImage" className="custom-file-label">
                                    Click to upload
                                </label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    title="File Explorer"
                                    style={{ display: "none" }}
                                    name="imageURL"
                                    value={form.imgaURL}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="modal-actions">
                                <button type="submit" className="edit-btn">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileSection;
