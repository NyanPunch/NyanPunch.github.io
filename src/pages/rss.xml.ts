import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';
import { site } from '../config';
export async function GET() {
  return rss({ title: site.title, description: site.description, site: site.url,
    items: (await getPosts()).filter(p=>!p.data.sample).map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.date,link:`/posts/${p.id}/`})), customData:'<language>ko-kr</language>' });
}
