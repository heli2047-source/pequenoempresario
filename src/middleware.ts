import { defineMiddleware } from 'astro:middleware';
import fs from 'node:fs';
import path from 'node:path';

export const onRequest = defineMiddleware(async (context, next) => {
  // O @astrojs/sitemap gera os arquivos apenas durante o build estático de produção.
  // Em modo de desenvolvimento (DEV), este middleware serve os sitemaps para facilitar inspeção e testes locais.
  if (import.meta.env.DEV) {
    if (context.url.pathname === '/sitemap-index.xml') {
      const distPath = path.resolve('./dist/sitemap-index.xml');
      if (fs.existsSync(distPath)) {
        const content = fs.readFileSync(distPath, 'utf-8').replaceAll('https://pequenoempresario.com.br', context.url.origin);
        return new Response(content, {
          headers: { 'Content-Type': 'application/xml; charset=utf-8' },
        });
      }
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${context.url.origin}/sitemap-0.xml</loc></sitemap></sitemapindex>`,
        { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
      );
    }

    if (context.url.pathname === '/sitemap-0.xml') {
      const distPath = path.resolve('./dist/sitemap-0.xml');
      if (fs.existsSync(distPath)) {
        const content = fs.readFileSync(distPath, 'utf-8').replaceAll('https://pequenoempresario.com.br', context.url.origin);
        return new Response(content, {
          headers: { 'Content-Type': 'application/xml; charset=utf-8' },
        });
      }
    }
  }

  return next();
});
