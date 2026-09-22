import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Pequeno Empresário — Tecnologia & Marketing para Pequenos Negócios',
    description: 'Guias práticos de tecnologia, marketing digital, SEO local no Google Maps e estratégias de vendas para apoiar o pequeno empreendedor.',
    site: context.site || 'https://pequenoempresario.com.br',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/\.(md|mdx)$/, '')}/`,
      author: post.data.author,
      categories: post.data.tags,
    })),
    customData: `<language>pt-BR</language>`,
  });
}
