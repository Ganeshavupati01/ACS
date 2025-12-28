import { useEffect, useState } from 'react';
import './blogs.css';

export default function Blogs() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('/api/blogs')
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
  }, []);

  return (
    <div className="blogs" style={{ paddingTop: '70px' }}>
      <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
