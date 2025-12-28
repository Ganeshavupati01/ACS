import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/blogs': {
        target: 'https://blog-ssr-phi.vercel.app',
        changeOrigin: true,
        rewrite: (path) => {
          const url = new URL(`http://localhost${path}`);
          const targetUrl = url.searchParams.get('url');
          if (targetUrl) {
            return targetUrl.replace('https://blog-ssr-phi.vercel.app', '');
          }
          return '/blogs';
        },
      },
    },
  },
});