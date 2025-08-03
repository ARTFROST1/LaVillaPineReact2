// Генератор фида недвижимости для Яндекса
import { SITE_CONFIG } from "../client/src/lib/constants.js";

interface RealtyOffer {
  id: string;
  type: 'rent' | 'sale';
  category: 'house' | 'apartment' | 'room';
  url: string;
  title: string;
  description: string;
  price: number;
  currency: 'RUB';
  area: number;
  rooms: number;
  floor?: number;
  floors_total?: number;
  address: string;
  latitude?: number;
  longitude?: number;
  metro?: string;
  images: string[];
  features: string[];
  agent?: {
    name: string;
    phone: string;
    email?: string;
  };
  created_date: string;
  updated_date: string;
}

// Данные наших предложений
const offers: RealtyOffer[] = [
  {
    id: "lavilla-house-1",
    type: "rent",
    category: "house",
    url: "https://lavillapine.onrender.com/",
    title: "La Villa Pine - Премиальный лофт-дом #1 с бассейном и сауной",
    description: "Роскошный лофт-дом в стиле минимализм с подогреваемым бассейном, сауной, тремя спальнями и двумя санузлами. Идеальное место для отдыха в живописном лесном окружении Адыгеи.",
    price: 15000,
    currency: "RUB",
    area: 120,
    rooms: 3,
    address: "Республика Адыгея, лесная зона",
    images: [
      "https://lavillapine.onrender.com/images/carousel/interior-1.jpg",
      "https://lavillapine.onrender.com/images/carousel/pool-1.jpg",
      "https://lavillapine.onrender.com/images/rooms/room-1.jpg",
      "https://lavillapine.onrender.com/images/amenities/sauna.jpg",
      "https://lavillapine.onrender.com/images/amenities/forest.jpg"
    ],
    features: [
      "Подогреваемый крытый бассейн",
      "Сауна",
      "Современный дизайн в стиле лофт",
      "Кондиционер во всех комнатах",
      "Высокоскоростной Wi-Fi",
      "Полностью оборудованная кухня",
      "Парковка",
      "Лесное окружение",
      "Панорамные окна",
      "Система умный дом"
    ],
    agent: {
      name: "La Villa Pine",
      phone: "+7 (918) 469-24-04"
    },
    created_date: "2024-01-01T00:00:00Z",
    updated_date: new Date().toISOString()
  },
  {
    id: "lavilla-house-2", 
    type: "rent",
    category: "house",
    url: "https://lavillapine.onrender.com/",
    title: "La Villa Pine - Премиальный лофт-дом #2 с бассейном и сауной",
    description: "Второй роскошный лофт-дом в стиле минимализм с подогреваемым бассейном, сауной, тремя спальнями и двумя санузлами. Аналогичный первому дому уровень комфорта в живописном лесном окружении.",
    price: 15000,
    currency: "RUB", 
    area: 120,
    rooms: 3,
    address: "Республика Адыгея, лесная зона",
    images: [
      "https://lavillapine.onrender.com/images/carousel/interior-2.jpg",
      "https://lavillapine.onrender.com/images/carousel/pool-2.jpg", 
      "https://lavillapine.onrender.com/images/rooms/room-2.jpg",
      "https://lavillapine.onrender.com/images/amenities/sauna.jpg",
      "https://lavillapine.onrender.com/images/amenities/forest.jpg"
    ],
    features: [
      "Подогреваемый крытый бассейн",
      "Сауна", 
      "Современный дизайн в стиле лофт",
      "Кондиционер во всех комнатах",
      "Высокоскоростной Wi-Fi",
      "Полностью оборудованная кухня",
      "Парковка",
      "Лесное окружение",
      "Панорамные окна",
      "Система умный дом"
    ],
    agent: {
      name: "La Villa Pine",
      phone: "+7 (918) 469-24-04"
    },
    created_date: "2024-01-01T00:00:00Z",
    updated_date: new Date().toISOString()
  }
];

// Генерация XML фида
export function generateRealtyFeedXML(): string {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<realty-feed xmlns="http://webmaster.yandex.ru/schemas/feed/realty/2010-06">
  <generation-date>${new Date().toISOString()}</generation-date>
  <offers>`;

  const xmlFooter = `  </offers>
</realty-feed>`;

  const offersXML = offers.map(offer => `    <offer id="${offer.id}">
      <type>${offer.type}</type>
      <category>${offer.category}</category>
      <url><![CDATA[${offer.url}]]></url>
      <title><![CDATA[${offer.title}]]></title>
      <description><![CDATA[${offer.description}]]></description>
      <price>
        <value>${offer.price}</value>
        <currency>${offer.currency}</currency>
        <period>day</period>
      </price>
      <area>
        <value>${offer.area}</value>
        <unit>sq-meter</unit>
      </area>
      <rooms>${offer.rooms}</rooms>
      <location>
        <country>Россия</country>
        <region>Республика Адыгея</region>
        <locality>Адыгея</locality>
        <address><![CDATA[${offer.address}]]></address>
      </location>
      ${offer.images.map(img => `<image>${img}</image>`).join('\n      ')}
      <features>
        ${offer.features.map(feature => `<feature><![CDATA[${feature}]]></feature>`).join('\n        ')}
      </features>
      <agent>
        <name><![CDATA[${offer.agent?.name}]]></name>
        <phone>${offer.agent?.phone}</phone>
      </agent>
      <creation-date>${offer.created_date}</creation-date>
      <last-update-date>${offer.updated_date}</last-update-date>
    </offer>`).join('\n');

  return xmlHeader + '\n' + offersXML + '\n' + xmlFooter;
}

// Генерация JSON фида (альтернативный формат)
export function generateRealtyFeedJSON(): string {
  const feed = {
    version: "1.0",
    generation_date: new Date().toISOString(),
    offers: offers.map(offer => ({
      id: offer.id,
      type: offer.type,
      category: offer.category,
      url: offer.url,
      title: offer.title,
      description: offer.description,
      price: {
        value: offer.price,
        currency: offer.currency,
        period: "day"
      },
      area: {
        value: offer.area,
        unit: "sq-meter"
      },
      rooms: offer.rooms,
      location: {
        country: "Россия",
        region: "Республика Адыгея", 
        locality: "Адыгея",
        address: offer.address
      },
      images: offer.images,
      features: offer.features,
      agent: offer.agent,
      creation_date: offer.created_date,
      last_update_date: offer.updated_date
    }))
  };

  return JSON.stringify(feed, null, 2);
}

export { offers };