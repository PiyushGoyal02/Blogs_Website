import "../CSS_Code/YourBlogsCSS.css";
import { CiMenuKebab } from "react-icons/ci";
import BlockChainImage from "../Assests/Future of Blockchain Development Companies.png";
import { useState } from "react";

function YourBlogs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const Data = [
        {
            image: BlockChainImage,
            Title: "Complete guide for digital marketing in 2025",
            Category: "Digital Marketing",
            Date: "05/02/2025"
        },
        {
            image: BlockChainImage,
            Title: "What is Email marketing and How to Do it Right",
            Category: "Email Marketing",
            Date: "25/02/2025"
        },
        {
            image: BlockChainImage,
            Title: "How to do search engine optimization",
            Category: "Engine Optimization",
            Date: "15/02/2025"
        }
    ];

    const toggleMenu = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div>
            <div className="YourBlogsContainer">
                <div className="TitleHeading-YourBlogs">
                    <div><p>Title</p></div>
                    <div className="CategoryDateAction-Heading">
                        <p>Category</p>
                        <p>Date</p>
                        <p>Action</p>
                    </div>
                </div>

                <div>
                    {Data.map((data, index) => (
                        <div className="BlogItemRow" key={index}>
                            <div className="BlogInfoLeft">
                                <img
                                    src={data.image}
                                    alt="BlockChainImage"
                                    className="YourBlogsImage"
                                />
                                <p className="BlogTitle">{data.Title}</p>
                            </div>
                            <div className="BlogMetaRight">
                                <p>{data.Category}</p>
                                <p>{data.Date}</p>
                                <div className="ActionContainer">
                                    <CiMenuKebab onClick={() => toggleMenu(index)} />
                                    {activeIndex === index && (
                                        <div className="ActionEditSection">
                                            <p>Edit</p>
                                            <p>Delete</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="RecentBlogsDiv">
                    <p className="RecentBlogsTitle">a list of your recent blogs 🙂</p>
                </div>
            </div>
        </div>
    );
}

export default YourBlogs;
