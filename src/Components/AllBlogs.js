import "../CSS_Code/AllBlogsCSS.css";
import Footer from "../Components/Footer"
import NavbarHomepage from "../Navbar/NavbarHomepage";
import BlockChainImage from "../Assests/Future of Blockchain Development Companies.png";

function AllBlogs() {
  const blogData = [
    {
      image: BlockChainImage,
      heading: "By Rahul | Web development | 08/05/2025",
      title: "What Is The Future Of Blockchain Developer",
      description:
        "The future of blockchain developers is poised for significant growth and innovation.",
    },
    {
      image: BlockChainImage,
      heading: "By Anjali | Full Stack | 05/05/2025",
      title: "The Ultimate Guide to Becoming a MERN Stack Developer",
      description:
        "Explore the secrets to becoming a MERN stack developer with our comprehensive guide.",
    },
    {
      image: BlockChainImage,
      heading: "By Rahul | Web development | 01/05/2025",
      title: "What Is The Future Of Blockchain Developer",
      description:
        "The future of blockchain developers is poised for significant growth and innovation.",
    },
    {
      image: BlockChainImage,
      heading: "By Anjali | Full Stack | 29/04/2025",
      title: "The Ultimate Guide to Becoming a MERN Stack Developer",
      description:
        "Explore the secrets to becoming a MERN stack developer with our comprehensive guide.",
    },
  ];

  return (
    <div>
      <NavbarHomepage />

      <div className="blogs-header">
        <h2>Our Blogs</h2>
      </div>

      <div className="blogs-container">
        {blogData.map((blog, index) => (
          <div key={index} className="single-blog">
            <img src={blog.image} alt="Blog" className="blog-image" />
            {blog.heading && <p className="blog-heading">{blog.heading}</p>}
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-description">{blog.description}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default AllBlogs;
