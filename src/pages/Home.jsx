export default function Home() {
  return (
    <section id="home" className="page home">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Our Cleaning Services</h1>
          <p>Professional home & office cleaning solutions.</p>
        </div>

        <div className="cta-buttons">
          <a href="tel:+971556108355" className="btn call-btn">
            📞 Call Now
          </a>
          <a
            href="https://wa.me/971556108355"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
