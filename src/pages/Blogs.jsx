import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blogs.css';

export default function Blogs() {
  const [html, setHtml] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    const url = slug ? `https://blog-ssr-phi.vercel.app/blogs/${slug}` : 'https://blog-ssr-phi.vercel.app/blogs';
    fetch(`/api/blogs?url=${encodeURIComponent(url)}`)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const body = doc.body;
        const footer = body.querySelector('footer');
        if (footer) footer.remove();
        const bodyContent = body.innerHTML;
        setHtml(bodyContent);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, [slug]);

  return (
    <div className="blogs" style={{ paddingTop: '70px' }}>
      <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
