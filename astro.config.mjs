import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://infusion-site.vercel.app', // your live URL
  redirects: {
    '/': '/en', // permanent redirect root → /en
  },
});