import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

//   const goToBlogs = () => {
//   if (import.meta.env.DEV) {
//     // local development
//     window.location.href = "https://blog-ssr-phi.vercel.app/blogs";
//   } else {
//     // production (Vercel rewrite will handle)
//     navigate("/blogs");
//   }
// };


  // 🔥 Redirect to Next.js SSR blog
   

  return (
    <header className="header">
      <div className="header-content">
        <div
          className="logo-container"
          onClick={() => handleNavigate("/")}
        >
          <img
            src="./src/assets/log3.png"
            alt="Abhi Cleaning Services Logo"
            className="logo"
          />
        </div>

        <nav>
          <button onClick={() => handleNavigate("/")}>Home</button>
          <button onClick={() => handleNavigate("/about-us")}>About Us</button>
          <button onClick={() => handleNavigate("/services")}>Services</button>

          {/* ✅ Blogs → SSR Next.js app */}
          <button onClick={() => handleNavigate("/blogs")}>Blogs</button>
          
           {/* <button onClick={goToBlogs}>Blogs</button> */}


          <button onClick={() => handleNavigate("/contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
