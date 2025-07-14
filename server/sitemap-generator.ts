import { promises as fs } from 'fs';
import { log } from './vite';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const SITE_URLS: SitemapUrl[] = [
  {
    loc: 'https://lavillapine.onrender.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: 'https://lavillapine.onrender.com/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://lavillapine.onrender.com/gallery',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    loc: 'https://lavillapine.onrender.com/contacts',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: 'https://lavillapine.onrender.com/booking',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  }
];

export function generateSitemapXml(): string {
  const urls = SITE_URLS.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function updateSitemap(): Promise<boolean> {
  try {
    const sitemapContent = generateSitemapXml();
    await fs.writeFile('public/sitemap.xml', sitemapContent, 'utf8');
    log('Sitemap обновлен успешно');
    return true;
  } catch (error) {
    log(`Ошибка при обновлении sitemap: ${error}`);
    return false;
  }
}

export function getSitemapUrls(): string[] {
  return SITE_URLS.map(url => url.loc);
}