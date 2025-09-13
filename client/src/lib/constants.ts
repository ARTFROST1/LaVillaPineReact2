export const SITE_CONFIG = {
  name: "La Villa Pine",
  description:
    "Гостевой дом в стиле лофт с саунами, бассейнами и лесным окружением",
  phone: "+7 (918) 924-00-07",
  email: "lavillapine@yandex.com",
  address: "Республика Адыгея, посёлок Тульский, Кольцевая улица, 4",
  socialLinks: {
    instagram: "https://www.instagram.com/lavillapine/",
    vk: "https://vk.com/lavillapine",
    whatsapp: "https://wa.me/79189240007",
    telegram: "https://t.me/LaVillaPine",
    avito: "https://www.avito.ru/user/lavillapine",
  },
  // Контроль отображения баннера "Скоро открытие"
  // Для возврата к рабочему состоянию измените на false
  showComingSoonBanner: false, // Баннер отключен, показываем модуль бронирования

  // Контроль отображения пометки о Необходимости связаться для бронирования
  // Для отключения пометки измените на false
  showBookingDateNotice: false, // Показывать пометку !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};

export const HERO_IMAGES = [
  {
    url: "/images/carousel/1.webp",
    fallbackUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    alt: "La Villa Pine - Главный вид",
  },
  {
    url: "/images/carousel/6.webp",
    fallbackUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    alt: "La Villa Pine - Холл",
  },
  {
    url: "/images/carousel/2.webp",
    fallbackUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    alt: "La Villa Pine - Вид с террасы",
  },
  {
    url: "/images/carousel/4.webp",
    fallbackUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    alt: "La Villa Pine - Спальня",
  },
  {
    url: "/images/carousel/3.webp",
    fallbackUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    alt: "La Villa Pine - вид сбоку",
  },
  
  {
    url: "/images/carousel/5.webp",
    fallbackUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    alt: "La Villa Pine - Сауна",
  },
  
];

// Галереи изображений для карточек на главной странице
export const FEATURE_GALLERIES = {
  loftDesign: [
    {
      url: "/images/amenities/1.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Современный лофт интерьер - гостиная",
    },
    {
      url: "/images/rooms/room-1.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Лофт спальня - современный дизайн",
    },
    {
      url: "/images/rooms/room-2.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Лофт кухня с индустриальными элементами",
    },
    {
      url: "/images/gallery/gallery-1.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Лофт интерьер - детали дизайна",
    },
    {
      url: "/images/gallery/gallery-2.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Современная ванная комната в стиле лофт",
    },
  ],
  poolSauna: [
    {
      url: "/images/amenities/2.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Подогреваемый бассейн - общий вид",
    },
    {
      url: "/images/amenities/3.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Сауна с RGB-подсветкой",
    },
    {
      url: "/images/gallery/gallery-3.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Бассейн вечером - атмосферное освещение",
    },
    {
      url: "/images/gallery/gallery-7.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Сауна - интерьер и отделка",
    },
    {
      url: "/images/gallery/gallery-11.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Зона отдыха у бассейна",
    },
  ],
  forestSurrounding: [
    {
      url: "/images/amenities/5.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Лесное окружение - природный пейзаж",
    },
    {
      url: "/images/gallery/gallery-9.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Лесная тропа рядом с домом",
    },
    {
      url: "/images/gallery/gallery-13.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Вид на лес с террасы",
    },
    {
      url: "/images/gallery/gallery-15.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Дикая природа - утренний лес",
    },
    {
      url: "/images/amenities/4.webp",
      fallbackUrl:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Мангальная зона в лесу",
    },
  ],
};

export const GALLERY_IMAGES = [
  {
    url: "/images/gallery/1.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 1",
  },
  {
    url: "/images/gallery/2.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 2",
  },
  {
    url: "/images/gallery/3.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 3",
  },
  {
    url: "/images/gallery/4.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 4",
  },
  {
    url: "/images/gallery/5.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 5",
  },
  {
    url: "/images/gallery/6.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 6",
  },
  {
    url: "/images/gallery/7.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 7",
  },
  {
    url: "/images/gallery/8.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 8",
  },
  {
    url: "/images/gallery/9.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 9",
  },
  {
    url: "/images/gallery/10.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 10",
  },
  {
    url: "/images/gallery/11.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 11",
  },
  {
    url: "/images/gallery/12.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 12",
  },
  {
    url: "/images/gallery/13.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 13",
  },
  {
    url: "/images/gallery/14.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 14",
  },
  {
    url: "/images/gallery/15.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 15",
  },
  {
    url: "/images/gallery/16.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 16",
  },
  {
    url: "/images/gallery/17.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 17",
  },
  {
    url: "/images/gallery/18.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 18",
  },
  {
    url: "/images/gallery/19.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 19",
  },
  {
    url: "/images/gallery/20.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 20",
  },
  {
    url: "/images/gallery/21.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 21",
  },
  {
    url: "/images/gallery/22.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 22",
  },
  {
    url: "/images/gallery/23.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 23",
  },
  {
    url: "/images/gallery/24.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 24",
  },
  {
    url: "/images/gallery/25.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 25",
  },
  {
    url: "/images/gallery/26.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 26",
  },
  {
    url: "/images/gallery/27.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 27",
  },
  {
    url: "/images/gallery/28.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 28",
  },
  {
    url: "/images/gallery/29.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 29",
  },
  {
    url: "/images/gallery/30.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 30",
  },
  {
    url: "/images/gallery/31.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 31",
  },
  {
    url: "/images/gallery/32.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 32",
  },
  {
    url: "/images/gallery/33.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 33",
  },
  {
    url: "/images/gallery/34.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 34",
  },
  {
    url: "/images/gallery/35.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 35",
  },
  {
    url: "/images/gallery/36.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 36",
  },
  {
    url: "/images/gallery/37.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 37",
  },
  {
    url: "/images/gallery/38.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 38",
  },
  {
    url: "/images/gallery/39.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 39",
  },
  {
    url: "/images/gallery/40.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "La Villa Pine - Фото 40",
  },
];

export const AMENITIES = [
  {
    icon: "fas fa-home",
    title: "Дизайн Лофт",
    description:
      "Современно и уютно",
    image: "/images/amenities/1.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    icon: "fas fa-swimming-pool",
    title: "Подогреваемый Бассейн",
    description:
      "с подсветкой и видом на лес",
    image: "/images/amenities/2.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    icon: "fas fa-hot-tub",
    title: "Финская Сауна",
    description:
      "Расслабьтесь в сауне прямо в доме",
    image: "/images/amenities/3.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    icon: "fas fa-fire",
    title: "Мангальные Зоны",
    description:
      "с удобной мебелью и подсветкой",
    image: "/images/amenities/4.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1574906519174-daa3b7a6de14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    icon: "fas fa-tree",
    title: "Лесная Локация",
    description:
      "всего в нескольких шагах от дома.",
    image: "/images/amenities/5.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  
];
