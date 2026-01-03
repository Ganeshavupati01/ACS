import { useEffect } from "react";
import React from "react";
export default function BlogPage() {
  useEffect(() => {
    // 🔥 Redirect to Next.js SSR Blog
    window.location.replace(
      "https://blog-ssr-phi.vercel.app/blog"
    );
  }, []);

  return (
    <p style={{ textAlign: "center", marginTop: "40px" }}>
      Redirecting to blogs…
    </p>
  );
}
