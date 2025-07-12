import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
}

export default function PageMeta({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  robots = "index,follow"
}: PageMetaProps) {
  useEffect(() => {
    // Обновляем title
    document.title = title;
    
    // Функция для обновления или создания мета-тега
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Обновляем основные мета-теги
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);
    
    // Обновляем Open Graph теги
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:type', 'website', true);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }
    
    // Обновляем Twitter теги
    updateMetaTag('twitter:title', ogTitle || title, true);
    updateMetaTag('twitter:description', ogDescription || description, true);
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage, true);
    }
    
    // Обновляем canonical если указан
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
    
    // Обновляем lang атрибут
    document.documentElement.lang = 'ru';
    
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, robots]);

  return null;
}