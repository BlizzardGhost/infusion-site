import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://infusion-site.vercel.app', // your live URL
  redirects: {
    '/': '/en', // permanent redirect root → /en
  },
});

// This is the configuration file for your Astro project.
// It sets the site URL and defines a redirect from the root path to the English version of the site.
// Make sure to replace 'https://infusion-site.vercel.app' with your actual live URL.
// The redirect ensures that anyone visiting the root of your site will be sent to the English
// version of your site, which is useful for SEO and user experience.
// You can add more redirects or modify the site URL as needed.