import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pequenoempresario.com.br',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/go/'), // Não indexa rotas de redirecionamento de afiliados
    }),
  ],
});
