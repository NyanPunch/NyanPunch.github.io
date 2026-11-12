import { getCollection } from 'astro:content';
export async function getPosts() {
  return (await getCollection('posts', ({ data }) => !data.draft && data.date <= new Date()))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const formatDate = (date: Date) => date.toLocaleDateString('ko-KR', {timeZone: 'UTC', year:'numeric', month:'2-digit', day:'2-digit'}).replace(/\. /g, '.').replace(/\.$/, '');
export const readingTime = (body: string = '') => Math.max(1, Math.ceil(body.replace(/```[\s\S]*?```/g, '').length / 650));
