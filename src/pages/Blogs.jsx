import './blogs.css';

export default function Blogs() {
  return (
    <div className="blogs" style={{ paddingTop: '70px' }}>
      <iframe
        src="https://blog-ssr-phi.vercel.app/blogs"
        title="Blogs"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
      />
    </div>
  );
}
