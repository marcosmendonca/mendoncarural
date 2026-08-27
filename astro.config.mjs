import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const hiddenFromSitemap = ['/calculadoras', '/coeficientes', '/downloads', '/orcamento', '/cms', '/404'];

export default defineConfig({
  site: 'https://mendoncarural.com.br',
  integrations: [
    sitemap({
      filter: (page) => !hiddenFromSitemap.some((path) => {
        const url = new URL(page);
        return url.pathname === path || url.pathname.startsWith(`${path}/`);
      })
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
