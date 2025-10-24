import React from "react";
import homeVideo from "../assets/home3.mp4"; // Replace with your video file
import MetaTags from "../components/MetaTags";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* SEO for Home Page */}
      <MetaTags
        title="Home | Abhi Cleaning Services UAE"
        description="Abhi Cleaning Services offers professional sewage, gutter, drain-line, and water tank cleaning across Dubai, Abu Dhabi, Sharjah & Ajman."
        url="https://mycleaningcompany.com/"
      />

      {/* Home Section */}
      <section id="home" className="home-section">
        {/* Background Video */}
        <video
          className="home-bg-video"
          src={homeVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="home-overlay"></div>

        {/* Text Content */}
        <div className="home-content">
          <h1>
            Welcome to <strong>Abhi Cleaning Services</strong>
          </h1>
          <p>
            Your trusted cleaning partner across the UAE, offering hygienic and
            affordable solutions 24/7.
          </p>

          {/* Call & WhatsApp Buttons */}
          <div className="home-buttons">
            <a href="tel:+971556108355" className="call-btn">
              Call Now
            </a>
            <a
              href="https://wa.me/971556108355"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Wave */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="home-wave"
        >
          <path
            d="M0,100 C150,200 450,0 700,100 C950,200 1100,50 1200,100 L1200,200 L0,200 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Home;
