// Генератор YML-фида недвижимости для Яндекса
import { SITE_CONFIG } from "../client/src/lib/constants.js";

interface RealtyOffer {
  id: string;
  url: string;
  name: string;
  description: string;
  price: number;
  currencyId: string;
  categoryId: string;
  setIds: string[];
  pictures: string[];
  vendor: string;
  params: {
    [key: string]: string | number | boolean;
  };
}

interface RealtySet {
  id: string;
  name: string;
  url: string;
}

// Сеты (наборы предложений) для группировки
const sets: RealtySet[] = [
  {
    id: "lavilla-premium-houses",
    name: "La Villa Pine - Премиальные лофт-дома с бассейном",
    url: "https://lavillapine.onrender.com/"
  }
];

// Данные наших предложений в формате YML
const offers: RealtyOffer[] = [
  {
    id: "offer-1",
    url: "https://lavillapine.onrender.com/house-1",
    name: "La Villa Pine - Премиальный лофт-дом #1 с бассейном и сауной",
    description: "Роскошный лофт-дом в стиле минимализм с подогреваемым бассейном, сауной, тремя спальнями и двумя санузлами. Идеальное место для отдыха в живописном лесном окружении Адыгеи.",
    price: 15000,
    currencyId: "RUR",
    categoryId: "1", 
    setIds: ["lavilla-premium-houses"],
    pictures: [
      "https://lavillapine.onrender.com/images/carousel/interior-1.jpg",
      "https://lavillapine.onrender.com/images/carousel/pool-1.jpg",
      "https://lavillapine.onrender.com/images/rooms/room-1.jpg",
      "https://lavillapine.onrender.com/images/amenities/sauna.jpg",
      "https://lavillapine.onrender.com/images/amenities/forest.jpg"
    ],
    vendor: "La Villa Pine",
    params: {
      "Конверсия": 100,
      "Тип предложения": "Аренда",
      "Посуточно": true,
      "Адрес": "Республика Адыгея, лесная зона",
      "Площадь": 120,
      "Число комнат": 3,
      "Класс жилья": "Премиум",
      "Рынок жилья": "Первичный",
      "Дата публикации": "2024-01-01T00:00:00+03:00",
      "Телефон объекта": "+7 (918) 469-24-04",
      "Название риелтора": "La Villa Pine"
    }
  },
  {
    id: "offer-2",
    url: "https://lavillapine.onrender.com/house-2", 
    name: "La Villa Pine - Премиальный лофт-дом #2 с бассейном и сауной",
    description: "Второй роскошный лофт-дом в стиле минимализм с подогреваемым бассейном, сауной, тремя спальнями и двумя санузлами. Аналогичный первому дому уровень комфорта в живописном лесном окружении.",
    price: 15000,
    currencyId: "RUR",
    categoryId: "1",
    setIds: ["lavilla-premium-houses"],
    pictures: [
      "https://lavillapine.onrender.com/images/carousel/interior-2.jpg",
      "https://lavillapine.onrender.com/images/carousel/pool-2.jpg", 
      "https://lavillapine.onrender.com/images/rooms/room-2.jpg",
      "https://lavillapine.onrender.com/images/amenities/sauna.jpg",
      "https://lavillapine.onrender.com/images/amenities/forest.jpg"
    ],
    vendor: "La Villa Pine",
    params: {
      "Конверсия": 100,
      "Тип предложения": "Аренда",
      "Посуточно": true,
      "Адрес": "Республика Адыгея, лесная зона",
      "Площадь": 120,
      "Число комнат": 3,
      "Класс жилья": "Премиум", 
      "Рынок жилья": "Первичный",
      "Дата публикации": "2024-01-01T00:00:00+03:00",
      "Телефон объекта": "+7 (918) 469-24-04",
      "Название риелтора": "La Villa Pine"
    }
  },
  {
    id: "offer-3",
    url: "https://lavillapine.onrender.com/booking",
    name: "Аренда премиальных домов в Адыгее - La Villa Pine",
    description: "Забронируйте один из двух роскошных лофт-домов с бассейном и сауной в живописном лесном окружении Адыгеи. Премиальный отдых в стиле комфорт+.",
    price: 15000,
    currencyId: "RUR", 
    categoryId: "1",
    setIds: ["lavilla-premium-houses"],
    pictures: [
      "https://lavillapine.onrender.com/images/gallery/exterior-1.jpg",
      "https://lavillapine.onrender.com/images/gallery/pool-view.jpg",
      "https://lavillapine.onrender.com/images/gallery/forest-view.jpg"
    ],
    vendor: "La Villa Pine",
    params: {
      "Конверсия": 95,
      "Тип предложения": "Аренда", 
      "Посуточно": true,
      "Число объявлений": 2,
      "Адрес": "Республика Адыгея, лесная зона",
      "Площадь": 120,
      "Число комнат": 3,
      "Класс жилья": "Премиум",
      "Рынок жилья": "Первичный",
      "Дата публикации": "2024-01-01T00:00:00+03:00",
      "Телефон объекта": "+7 (918) 469-24-04",
      "Название риелтора": "La Villa Pine"
    }
  }
];

// Генерация YML-фида согласно стандарту Яндекса
export function generateRealtyFeedYML(): string {
  const currentDate = new Date().toISOString().split('T')[0] + ' ' + 
                     new Date().toTimeString().split(' ')[0];
  
  const ymlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${currentDate}">
  <shop>
    <name>La Villa Pine</name>
    <company>La Villa Pine</company>
    <url>https://lavillapine.onrender.com</url>
    <email>info@lavillapine.com</email>
    
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    
    <categories>
      <category id="1">Дома</category>
    </categories>
    
    <sets>`;

  const setsXML = sets.map(set => `      <set id="${set.id}">
        <name><![CDATA[${set.name}]]></name>
        <url><![CDATA[${set.url}]]></url>
      </set>`).join('\n');

  const offersHeader = `    </sets>
    
    <offers>`;

  const offersXML = offers.map(offer => {
    const pictures = offer.pictures.map(pic => `      <picture>${pic}</picture>`).join('\n');
    
    const params = Object.entries(offer.params)
      .map(([name, value]) => `      <param name="${name}">${value}</param>`)
      .join('\n');

    return `      <offer id="${offer.id}">
        <url><![CDATA[${offer.url}]]></url>
        <name><![CDATA[${offer.name}]]></name>
        <description><![CDATA[${offer.description}]]></description>
        <price>${offer.price}</price>
        <currencyId>${offer.currencyId}</currencyId>
        <categoryId>${offer.categoryId}</categoryId>
        <set-ids>${offer.setIds.join(',')}</set-ids>
${pictures}
        <vendor><![CDATA[${offer.vendor}]]></vendor>
${params}
      </offer>`;
  }).join('\n');

  const ymlFooter = `    </offers>
  </shop>
</yml_catalog>`;

  return ymlHeader + '\n' + setsXML + '\n' + offersHeader + '\n' + offersXML + '\n' + ymlFooter;
}

// Для обратной совместимости (устаревшие методы)
export function generateRealtyFeedXML(): string {
  return generateRealtyFeedYML();
}

export function generateRealtyFeedJSON(): string {
  const feed = {
    version: "1.0",
    generation_date: new Date().toISOString(),
    shop: {
      name: "La Villa Pine",
      company: "La Villa Pine", 
      url: "https://lavillapine.onrender.com",
      email: "info@lavillapine.com",
      currencies: [{ id: "RUR", rate: 1 }],
      categories: [{ id: "1", name: "Дома" }],
      sets: sets,
      offers: offers
    }
  };

  return JSON.stringify(feed, null, 2);
}

export { offers, sets };