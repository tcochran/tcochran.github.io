import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { isListed } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', isListed);
  const links = await getCollection('links', isListed);

  const items = [
    ...posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description ?? '',
      link: `/posts/${p.id}/`,
    })),
    ...links.map((l) => ({
      title: l.data.title,
      pubDate: l.data.date,
      description: l.data.note ?? '',
      link: l.data.url,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items,
  });
}
