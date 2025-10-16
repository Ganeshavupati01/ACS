import React from "react";
import aboutImg from "../assets/about.jpg"; // Your main image
import card1 from "../assets/clock.jpg";   // 24/7 icon
import card2 from "../assets/highquality.jpg"; // High quality icon
import card3 from "../assets/bestprice.jpg";   // Best price icon
import MetaTags from "../components/MetaTags";
import "./about.css";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <MetaTags
        title="About Us | Abhi Cleaning Services UAE"
        description="Welcome to Abhi Cleaning Services, the trusted sewage, gutter, pipeline, drain-line, and water tank cleaning company in the UAE. Professional, hygienic, and affordable cleaning services across Dubai, Abu Dhabi, Sharjah, and Ajman."
        url="https://mycleaningcompany.com/about"
      />

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Left Image */}
          <div className="about-image">
            <img src={aboutImg} alt="About Abhi Cleaning Services" />
          </div>

          {/* Right Text */}
          <div className="about-content">
            <h2>
               <strong>About Abhi Cleaning Services</strong>
            </h2>
            <p>
              Welcome to <a href="/about"><strong>Abhi Cleaning Services</strong></a>, the trusted company for 
              <a href="/about"><strong> sewage cleaning</strong></a>, 
              <a href="/about"><strong> gutter cleaning</strong></a>, 
              <a href="/about"><strong> pipeline cleaning</strong></a>, 
              <a href="/about"><strong> drain-line cleaning</strong></a>, and 
              <a href="/about"><strong> water tank cleaning</strong></a> in the UAE. 
              We provide professional, hygienic, and affordable services across 
              <a href="/about"><strong> Dubai</strong></a>, 
              <a href="/about"><strong> Abu Dhabi</strong></a>, 
              <a href="/about"><strong> Sharjah</strong></a>, and 
              <a href="/about"><strong> Ajman</strong></a>.
            </p>
            <p>
              Our <a href="/about"><strong>experienced cleaning team</strong></a> ensures every job is completed 
              on time with precision, care, and top hygiene standards. We use advanced 
              <a href="/about"><strong> high-pressure jet machines</strong></a> and 
              <a href="/about"><strong> eco-friendly cleaning techniques</strong></a> to handle blocked drains, clogged gutters, sewage overflows, and water tank cleaning efficiently.
            </p>
            <p>
              Available <a href="/about"><strong>24/7 across the UAE</strong></a>, 
              <a href="/about"><strong> Abhi Cleaning Services</strong></a> is always ready to respond to 
              sewage or drainage emergencies. Whether it’s a midnight blockage or routine water tank cleaning, 
              we guarantee quick, safe, and hygienic service that keeps your surroundings 
              clean, odor-free, and healthy all year round.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="about-cards">
          <div className="card">
            <img src={card1} alt="24/7 Service" />
            <h3>24/7 Service</h3>
            <p>We are available anytime for emergency cleaning services across the UAE.</p>
          </div>
          <div className="card">
            <img src={card2} alt="High Quality" />
            <h3>High Quality Service</h3>
            <p>Our team ensures hygienic and professional cleaning every time.</p>
          </div>
          <div className="card">
            <img src={card3} alt="Best Price" />
            <h3>Best Price Services</h3>
            <p>Affordable cleaning solutions without compromising quality.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;