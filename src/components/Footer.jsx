import React from 'react';
import './footer.css';

const Footer = () => {
  // Array of social media icons (Font Awesome classes are assumed for this example)
  const socialIcons = [
    { iconClass: 'fa-facebook-f', link: '#' },
    { iconClass: 'fa-twitter', link: '#' },
    { iconClass: 'fa-instagram', link: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content-container">
        
        {/* Section 1: Abhi Cleaning Services */}
        <div className="footer-section company-info">
          <h3 className="section-title">Abhi Cleaning Services</h3>
          <p className="company-tagline">
            Making your spaces shine brighter, one clean at a time.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section quick-links">
          <h3 className="section-title">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Follow Us */}
        <div className="footer-section follow-us">
          <h3 className="section-title">Follow Us</h3>
          <div className="social-icons">
            {socialIcons.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                {/* Assuming you have a way to include Font Awesome, e.g., in index.html */}
                <i className={`fab ${item.iconClass}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Copyright Bar */}
      <div className="copyright">
        &copy; 2025 Abhi Cleaning Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;