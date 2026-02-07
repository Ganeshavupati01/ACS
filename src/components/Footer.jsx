import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./footer.css";

const Footer = () => {
  const socialIcons = [
    {
      iconClass: "fa-facebook-f",
      link: "https://www.facebook.com/abhidrainlinecleaning",
      label: "Follow Abhi Drain Line Cleaning on Facebook",
    },
    {
      iconClass: "fa-instagram",
      link: "https://www.instagram.com/abhidrainlinecleaning",
      label: "Follow Abhi Drain Line Cleaning on Instagram",
    },
  ];

  return (
    <>
      {/* ✅ SEO (Google Business Profile–Compliant) */}
      <Helmet>
        <title>
          Abhi Drain Line Cleaning | Professional Drainage Services in Dubai & Sharjah
        </title>

        <meta
          name="description"
          content="Abhi Drain Line Cleaning provides professional drain, sewage, and water tank cleaning services in Dubai and Sharjah for residential and commercial properties."
        />

        <meta
          name="keywords"
          content="drain line cleaning Dubai, sewage cleaning Sharjah, drainage service Dubai, pipe unclogging Sharjah"
        />

        <link rel="canonical" href="https://www.abhidrainlinecleaning.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhi Drain Line Cleaning" />
        <meta
          property="og:description"
          content="Professional drain and sewage cleaning services in Dubai and Sharjah."
        />
        <meta
          property="og:image"
          content="https://www.abhidrainlinecleaning.com/assets/seo-default.jpg"
        />
        <meta property="og:url" content="https://www.abhidrainlinecleaning.com/" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhi Drain Line Cleaning" />
        <meta
          name="twitter:description"
          content="Trusted drain and sewage cleaning services in Dubai and Sharjah."
        />
        <meta
          name="twitter:image"
          content="https://www.abhidrainlinecleaning.com/assets/seo-default.jpg"
        />
      </Helmet>

      {/* ✅ Footer */}
      <footer className="footer" role="contentinfo">
        <div className="footer-content-container">
          {/* Company Info */}
          <div className="footer-section company-info">
            <h2 className="section-title">Abhi Drain Line Cleaning</h2>
            <p className="company-tagline">
              Abhi Drain Line Cleaning is a professional drainage and sewer cleaning
              service provider operating as a service-area business in Dubai and
              Sharjah. We serve residential and commercial properties using
              professional equipment and hygienic methods.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="footer-section quick-links" aria-label="Quick Links">
            <h3 className="section-title">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" aria-label="Go to Home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" aria-label="Learn more about Abhi Drain Line Cleaning">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" aria-label="View drainage services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" aria-label="Read blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" aria-label="Contact Abhi Drain Line Cleaning">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Follow Us + Contact */}
          <div className="footer-section follow-us">
            <h3 className="section-title">Follow Us</h3>
            <div className="social-icons">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <i className={`fab ${item.iconClass}`}></i>
                </a>
              ))}
            </div>

            <div className="contact-methods">
              <a
                href="https://wa.me/971556108355"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="contact-link"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp: +971 55 610 8355
              </a>

              <a
                href="tel:+971556108355"
                aria-label="Call Abhi Drain Line Cleaning"
                className="contact-link"
              >
                <i className="fa fa-phone"></i> Call: +971 55 610 8355
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="copyright">
          &copy; {new Date().getFullYear()} Abhi Drain Line Cleaning. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
