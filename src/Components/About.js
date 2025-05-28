import "../CSS_Code/AboutCSS.css";
import NavbarHomepage from "../Navbar/NavbarHomepage";
import LeptopImage from "../Assests/360_F_631540090_tiskZdz2LRfp1aD1QJJXyFleMpQlnRFQ.jpg";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="about-page">
      <NavbarHomepage />
      <div className="about-container">
        <div className="about-header">
          <h1>About Our Blog</h1>
          <p>A place to share thoughts, inspire others, and grow together.</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={LeptopImage} alt="Laptop" className="laptop-image" />
          </div>

          <div className="about-text">
            <p>
              Welcome to our Blog App! We created this platform for readers,
              writers, and thinkers to connect through stories, tutorials, and
              creative insights. Whether you're a passionate blogger or someone
              who loves reading, this space is built for you.
              <br /><br />
              Our mission is to empower individuals to express themselves freely.
              We offer simple tools to write, publish, and engage with others in
              meaningful ways.
              <br /><br />
              Thank you for being a part of our growing community.
            </p>
          </div>
        </div>

        <div className="about-quote">
          <p>"Words are powerful. Use them to inspire."</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
