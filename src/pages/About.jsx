import React from "react";
import aboutImg from "../assets/about.jpg";
import card1 from "../assets/clock.jpg";
import card2 from "../assets/highquality.jpg";
import card3 from "../assets/bestprice.jpg";
import MetaTags from "../components/MetaTags";
import "./about.css";

const About = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <MetaTags
        title="About Us | Abhi Drain Line Cleaning Services UAE"
        description="Abhi Drain Line Cleaning Services UAE provides expert drain line, sewage, gutter, and water tank cleaning in Dubai, Abu Dhabi, Sharjah, and Ajman. 24/7 availability, eco-friendly methods, and affordable rates."
        keywords="Abhi Drain Line Cleaning Services, drain cleaning UAE, sewage cleaning Dubai, water tank cleaning Abu Dhabi, gutter cleaning Sharjah, pipeline cleaning UAE"
        url="https://abhidrainlinecleaning.com/about-us"
      />

      {/* ✅ About Section */}
      <section id="about-us" className="about-section">
        <div className="about-header">
          {/* Left Image */}
          <div className="about-header-image">
            <img
              src={aboutImg}
              alt="Professional drain line and sewage cleaning service in UAE"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="about-header-content">
            <h1>About Us</h1>
            <h2 className="company-subtitle">Abhi Drain Line Cleaning Services</h2>

            <p>
              Welcome to <strong>Abhi Drain Line Cleaning Services</strong>, your trusted partner for{" "}
              <strong>drain line cleaning</strong>, <strong>sewage cleaning</strong>,{" "}
              <strong>gutter cleaning</strong>, and <strong>water tank cleaning</strong> across the UAE.
            </p>

            <p>
              Our <strong>trained professionals</strong> use advanced{" "}
              <strong>high-pressure jetting machines</strong> and{" "}
              <strong>eco-friendly cleaning techniques</strong> to clear blockages, prevent overflows,
              and maintain hygienic drainage systems for residential, commercial, and industrial clients.
            </p>

            <p>
              Available <strong>24/7</strong> in <strong>Dubai</strong>,{" "}
              <strong>Abu Dhabi</strong>, <strong>Sharjah</strong>, and{" "}
              <strong>Ajman</strong> — we ensure fast, affordable, and high-quality cleaning
              services that keep your surroundings clean, safe, and odor-free.
            </p>
          </div>
        </div>

        {/* ✅ Feature Cards */}
        <div className="about-cards">
          <div className="feature-card">
            <img src={card1} alt="24/7 Drain Line Cleaning Service UAE" loading="lazy" />
            <h3>24/7 Service</h3>
            <p>Available anytime for emergency drain or sewage cleaning across the UAE.</p>
          </div>

          <div className="feature-card">
            <img src={card2} alt="High Quality Drain Line Cleaning UAE" loading="lazy" />
            <h3>High Quality</h3>
            <p>We deliver professional cleaning using modern tools and eco-safe solutions.</p>
          </div>

          <div className="feature-card">
            <img src={card3} alt="Affordable Drain Line Cleaning UAE" loading="lazy" />
            <h3>Best Price</h3>
            <p>Affordable, transparent pricing with complete customer satisfaction guaranteed.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
