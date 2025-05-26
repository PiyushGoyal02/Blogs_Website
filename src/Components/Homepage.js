import "../CSS_Code/HomepageCSS.css";
import NavbarHomepage from "../Navbar/NavbarHomepage";
import WebsiteImage from "../Assests/WebsiteImage.png";
import BlockChainImage from "../Assests/Future of Blockchain Development Companies.png"
import Image1 from "../Assests/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
import Image2 from "../Assests/real-girl-pic-8.jpg"
import Image3 from "../Assests/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.webp"
import Footer from "./Footer";

function Homepage() {

    const blogData = [
        {
            image: BlockChainImage,
            title: "What Is The Future Of Blockchain Developer",
            description:
                "The future of blockchain developers is poised for significant growth and innovation.",
        },
        {
            image: BlockChainImage,
            title: "The Ultimate Guide to Becoming a MERN Stack Developer",
            description:
                "Explore the secrets to becoming a MERN stack developer with our comprehensive guide.",
        },
        {
            image: BlockChainImage,
            title: "What Is The Future Of Blockchain Developer",
            description:
                "The future of blockchain developers is poised for significant growth and innovation.",
        },
        {
            image: BlockChainImage,
            title: "The Ultimate Guide to Becoming a MERN Stack Developer",
            description:
                "Explore the secrets to becoming a MERN stack developer with our comprehensive guide.",
        },
    ];

    const PopularAuthors = [
        {
            name: "John Doe",
            image: Image1
        },
        {
            name: "Shruti Goyal",
            image: Image2
        },
        {
            name: "Rahul Bansal",
            image: Image3
        }
    ]
    
    return (
        <div>
            <NavbarHomepage />
            <img src={WebsiteImage} className="WebsiteImage" alt="Website" />
            <div className="HomepageText">
                <h1 className="WebsiteTitle">Welcome to Our Website</h1>
            </div>

            <div className="ContentWrapper">

                {/* Left Side Blogs */}
                <div className="LeftSideBlogContent">
                    {
                        blogData.map((blog, index) => (
                            <div className="BlogCard" key={index}>
                                <img className="BlogImage" src={blog.image} alt={blog.title} />
                                <div>
                                    <h2 className="HTwo-TagBlogText">{blog.title}</h2>
                                    <p className="BlogDescriptionText">{blog.description}</p>
                                    <button className="ReadMoreButton">Read More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                {/* Right Side Sidebar */}
                <div className="RightSidebar">
                    <h3 className="PopularCategories">Popular categories</h3>
                    <div className="Categories">
                        {["Blogging", "Web Development", "Digital Marketing", "Cooking", "Photography", "Sports"].map((item) => (
                            <span key={item} className="CategoryTag">{item}</span>
                        ))}
                    </div>

                    <div className="Newsletter">
                        <h3>Subscribe to Newsletter</h3>
                        <p>Get the latest posts and updates delivered straight to your inbox.</p>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>

                    <div className="SuggestedBlogs">
                        <h3>Suggested Blogs</h3>
                        <ul>
                            <li>10 Tips to Master React</li>
                            <li>Understanding Tailwind CSS</li>
                            <li>Improve SEO in 2024</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Popular Authors */}
            <div>
                <div className="HomepageText">
                    <h2 className="WebsiteTitle">Popular Authors</h2>
                </div>

                <div className="PopularAuthorsWrapper">
                    {
                        PopularAuthors.map((index, populardata) => {
                            return (
                                <div className="PopularAuthorCard" key={populardata}>
                                    <img className="AuthorImage" src={index.image} alt={index.name} />
                                    <h3 className="AuthorName">{index.name}</h3>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            {/* Footer Code */}
            <Footer/>
        </div>
    );
}

export default Homepage;
