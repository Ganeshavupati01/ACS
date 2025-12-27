import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (section, path) => {
    navigate(path);
    scroller.scrollTo(section, {
      smooth: true,
      duration: 800,
      offset: -70,
    });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
        </button>

        <div className="logo-container" onClick={() => handleScroll("home", "/")}>
          <img src="/log3.png" className="logo" alt="Logo" />
        </div>

        <nav className={isMenuOpen ? "nav-open" : ""}>
          <button onClick={() => handleScroll("home", "/")}>Home</button>
          <button onClick={() => handleScroll("about-us", "/about-us")}>About Us</button>
          <button onClick={() => handleScroll("services", "/services")}>Services</button>

          <button
  onClick={() => {
    window.location.href = "/blogs";
  }}
>
  Blogs
</button>



          <button onClick={() => handleScroll("contact", "/contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
