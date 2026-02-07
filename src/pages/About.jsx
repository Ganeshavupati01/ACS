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
      {/* ✅ SEO Meta Tags – Google Business Profile Compliant */}
      <MetaTags
        title="About Us | Abhi Drain Line Cleaning"
        description="Abhi Drain Line Cleaning provides professional drain line, sewage, gutter, and water tank cleaning services in Dubai and Sharjah for residential and commercial properties."
        keywords="Abhi Drain Line Cleaning, drain cleaning Dubai, sewage cleaning Sharjah, gutter cleaning Dubai, water tank cleaning Sharjah"
        url="https://abhidrainlinecleaning.com/about-us"
      />

      {/* ✅ About Section */}
      <section id="about-us" className="about-section">
        <div className="about-header">
          {/* Left Image */}
          <div className="about-header-image">
            <img
              src={aboutImg}
              alt="Professional drain line and sewage cleaning service in Dubai and Sharjah"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="about-header-content">
            <h1>About Us</h1>
            <h2 className="company-subtitle">Abhi Drain Line Cleaning</h2>

            <p>
              Welcome to <strong>Abhi Drain Line Cleaning</strong>, a professional
              drainage and sewer cleaning service provider operating as a
              service-area business in <strong>Dubai</strong> and{" "}
              <strong>Sharjah</strong>.
            </p>

            <p>
              Our <strong>trained professionals</strong> use advanced{" "}
              <strong>high-pressure jetting machines</strong> and{" "}
              <strong>eco-friendly cleaning techniques</strong> to clear blockages,
              prevent overflows, and maintain hygienic drainage systems for
              residential and commercial properties.
            </p>

            <p>
              We focus on reliable service delivery, safety standards, and
              customer satisfaction while providing scheduled and emergency
              drainage cleaning services in <strong>Dubai</strong> and{" "}
              <strong>Sharjah</strong>.
            </p>
          </div>
        </div>

        {/* ✅ Feature Cards */}
        <div className="about-cards">
          <div className="feature-card">
            <img
              src={card1}
              alt="Reliable drain line cleaning services in Dubai and Sharjah"
              loading="lazy"
            />
            <h3>Reliable Service</h3>
            <p>
              Professional drainage and sewage cleaning delivered with care and
              consistency.
            </p>
          </div>

          <div className="feature-card">
            <img
              src={card2}
              alt="High quality drainage cleaning using professional equipment"
              loading="lazy"
            />
            <h3>Professional Quality</h3>
            <p>
              Modern tools and hygienic methods ensure effective and safe
              cleaning.
            </p>
          </div>

          <div className="feature-card">
            <img
              src={card3}
              alt="Affordable drain cleaning services in Dubai and Sharjah"
              loading="lazy"
            />
            <h3>Transparent Pricing</h3>
            <p>
              Fair and transparent pricing focused on long-term customer trust.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
