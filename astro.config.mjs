import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://nyanpunch.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !['opencv-preprocessing', 'python-environments', 'data-quality-checklist'].some(id => page.endsWith(`/posts/${id}/`)) })],
});
