import React from "react";
import homeVideo from "../assets/home3.mp4";
import MetaTags from "../components/MetaTags";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <MetaTags
        title="Home | Abhi Drain Line Cleaning Services"
        description="Expert drain, sewage, gutter, pipeline cleaning services in Dubai, Abu Dhabi, Sharjah & Ajman. 24/7 professional service with eco-friendly methods."
        keywords="Abhi Drain Line Cleaning Services, drain cleaning Dubai, sewage cleaning UAE, water tank cleaning Abu Dhabi, gutter cleaning Sharjah"
        url="https://abhidrainlinecleaning.com/"
      />

      {/* ✅ Home Section */}
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
            Welcome to <strong>Abhi Drain Line Cleaning Services</strong>
          </h1>
          <p>
            Reliable & affordable <strong>drain, sewage, gutter, pipeline cleaning</strong> services across the UAE.
          </p>

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
