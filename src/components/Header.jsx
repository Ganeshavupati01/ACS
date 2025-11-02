import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Header() {
  const navigate = useNavigate();

  const handleScroll = (section, path) => {
    navigate(path); // change URL
    scroller.scrollTo(section, {
      smooth: true,
      duration: 800,
      offset: -70,
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo goes here - replace the src with your actual logo path */}
        <div className="logo-container" onClick={() => handleScroll("home", "/")}>
          <img src="/log3.png"  className="logo" />
         
        </div>
        
        <nav>
          <button onClick={() => handleScroll("home", "/")}>Home</button>
          <button onClick={() => handleScroll("about-us", "/about-us")}>About Us</button>
          <button onClick={() => handleScroll("services", "/services")}>Services</button>
          <button onClick={() => handleScroll("blogs", "/blogs")}>Blogs</button>
          <button onClick={() => handleScroll("contact", "/contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}