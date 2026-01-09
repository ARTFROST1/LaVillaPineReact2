import { useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

interface StructuredDataProps {
  type?: 'home' | 'page';
  pageName?: string;
  pageUrl?: string;
}

export default function StructuredData({ type = 'home', pageName, pageUrl }: StructuredDataProps) {
  useEffect(() => {
    // Создаём или обновляем script тег с LocalBusiness schema
    const createOrUpdateScript = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script') as HTMLScriptElement;
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data, null, 2);
    };

    // LocalBusiness Schema для гостевого дома
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      image: 'https://lavillapine.onrender.com/images/og-image.jpg',
      '@id': 'https://lavillapine.onrender.com',
      url: 'https://lavillapine.onrender.com',
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Кольцевая улица, 4',
        addressLocality: 'посёлок Тульский',
        addressRegion: 'Республика Адыгея',
        postalCode: '385750',
        addressCountry: 'RU'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '44.279722',
        longitude: '40.296111'
      },
      priceRange: '$$$',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Подогреваемый бассейн'
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Сауна'
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Барбекю зона'
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Парковка'
        }
      ],
      sameAs: [
        SITE_CONFIG.socialLinks.instagram,
        SITE_CONFIG.socialLinks.vk,
        SITE_CONFIG.socialLinks.telegram,
        SITE_CONFIG.socialLinks.avito
      ]
    };

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: 'https://lavillapine.onrender.com',
      logo: 'https://lavillapine.onrender.com/images/icons/logo.webp',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'customer service',
        email: SITE_CONFIG.email,
        areaServed: 'RU',
        availableLanguage: 'Russian'
      },
      sameAs: [
        SITE_CONFIG.socialLinks.instagram,
        SITE_CONFIG.socialLinks.vk,
        SITE_CONFIG.socialLinks.telegram
      ]
    };

    // BreadcrumbList Schema (только для внутренних страниц)
    if (type === 'page' && pageName && pageUrl) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://lavillapine.onrender.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: pageName,
            item: `https://lavillapine.onrender.com${pageUrl}`
          }
        ]
      };
      createOrUpdateScript('breadcrumb-schema', breadcrumbSchema);
    } else {
      // Удаляем breadcrumb schema на главной странице
      const breadcrumbScript = document.getElementById('breadcrumb-schema');
      if (breadcrumbScript) {
        breadcrumbScript.remove();
      }
    }

    createOrUpdateScript('localbusiness-schema', localBusinessSchema);
    createOrUpdateScript('organization-schema', organizationSchema);

    // Cleanup function
    return () => {
      // Не удаляем скрипты при размонтировании, они нужны для SEO
    };
  }, [type, pageName, pageUrl]);

  return null;
}
