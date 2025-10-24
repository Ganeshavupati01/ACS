import React from "react";
import aboutTop from "../assets/about.jpg";
import { FaClock, FaCheckCircle, FaDollarSign, FaHandsHelping } from "react-icons/fa";
import MetaTags from "../components/MetaTags";
import "./about.css";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <MetaTags
        title="About Us | Abhi Cleaning Services UAE"
        description="Abhi Cleaning Services offers professional sewage, gutter, pipeline, and water tank cleaning with 24/7 availability and affordable pricing across the UAE."
        url="https://mycleaningcompany.com/about"
      />

      {/* About Section */}
      <section id="about" className="about-section">
        {/* Header Section: Image + Text Side by Side */}
        <div className="about-header">
          <div className="about-header-image">
            <img src={aboutTop} alt="About Abhi Cleaning Services" />
          </div>

          <div className="about-header-content">
            <h2>
              <strong>About Abhi Cleaning Services</strong>
            </h2>
            <p>
              Welcome to <strong>Abhi Cleaning Services</strong>, your trusted partner
              for sewage, gutter, pipeline, and water tank cleaning across the UAE.
              Our team is committed to providing hygienic and affordable solutions
              using modern, eco-friendly cleaning technology.
            </p>
            <p>
              We take pride in maintaining top hygiene standards while ensuring
              every project is handled with care and precision. Whether you need
              routine maintenance or emergency support, our experts are always ready
              to assist.
            </p>
            <p>
              Operating 24/7 across <strong>Dubai, Abu Dhabi, Sharjah, and Ajman</strong>,
              we guarantee fast response times, professional service, and long-lasting results.
            </p>
          </div>
        </div>

        {/* Right Side - Feature Cards */}
        <div className="about-right">
          <div className="feature-card">
            <FaClock className="feature-icon" />
            <h3>24/7 Availability</h3>
            <p>Our team is ready around the clock for any cleaning emergencies.</p>
          </div>

          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>High Quality Cleaning</h3>
            <p>We deliver spotless and hygienic results with every service.</p>
          </div>

          <div className="feature-card">
            <FaDollarSign className="feature-icon" />
            <h3>Affordable Pricing</h3>
            <p>Competitive prices that ensure great value for your money.</p>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default About;
