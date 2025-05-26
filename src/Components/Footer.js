import "../CSS_Code/FooterCSS.css";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        {/* First Column */}
        <div className="footer-column">
          <h2>WRITELY</h2>
          <p>Sharing insights, tutorials, and ideas on web development and tech.</p>
          <p>123 Blog St, Style City, NY 10001</p>
          <p>Email: support@blog.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Second Column */}
        <div className="footer-column SecondFooterColoum">
          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Blogs</p>
            <p>About Us</p>
            <p>FAQs</p>
          </div>

          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaSquareTwitter />
            <FaPinterest />
          </div>
        </div>

        {/* Third Column */}
        <div className="footer-column">
          <h4>Stay in the Loop</h4>
          <p>Subscribe to get special offers, free giveaways, and more</p>
          <div className="footer-input-section">
            <input
              type="email"
              placeholder="Your email address"
              className="footer-input"
            />
            <button className="footer-button">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        © 2025 <span style={{ color: "#ef4444" }}>Blog</span>. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
