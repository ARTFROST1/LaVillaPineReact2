export type Language = 'ru' | 'en';

export interface Translations {
  // Navigation
  home: string;
  about: string;
  gallery: string;
  contacts: string;
  booking: string;
  
  // Site info
  siteName: string;
  siteDescription: string;
  
  // Home page
  heroTitle: string;
  heroSubtitle: string;
  bookNow: string;
  welcomeTitle: string;
  welcomeDescription: string;
  
  // About page
  aboutTitle: string;
  aboutDescription: string;
  amenitiesTitle: string;
  amenityTitles: {
    sauna: string;
    pool: string;
    forest: string;
    interior: string;
  };
  amenityDescriptions: {
    sauna: string;
    pool: string;
    forest: string;
    interior: string;
  };
  
  // Gallery page
  galleryTitle: string;
  galleryDescription: string;
  
  // Contacts page
  contactsTitle: string;
  contactForm: {
    title: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  followUs: string;
  location: string;
  
  // Booking page
  bookingTitle: string;
  bookingDescription: string;
  needHelp: string;
  contactUs: string;
  
  // Footer
  allRightsReserved: string;
  
  // Not found page
  notFoundTitle: string;
  notFoundDescription: string;
  backToHome: string;
}

export const translations: Record<Language, Translations> = {
  ru: {
    // Navigation
    home: 'Главная',
    about: 'О нас',
    gallery: 'Галерея',
    contacts: 'Контакты',
    booking: 'Забронировать',
    
    // Site info
    siteName: 'La Villa Pine',
    siteDescription: 'Роскошные гостевые дома в сосновом лесу',
    
    // Home page
    heroTitle: 'Добро пожаловать в La Villa Pine',
    heroSubtitle: 'Роскошные гостевые дома в сосновом лесу с саунами, бассейнами и премиальными удобствами',
    bookNow: 'Забронировать сейчас',
    welcomeTitle: 'Откройте для себя роскошь в природе',
    welcomeDescription: 'La Villa Pine предлагает два эксклюзивных лофт-дома, окруженных живописным сосновым лесом. Каждый дом оборудован собственной сауной, подогреваемым бассейном и всеми удобствами для незабываемого отдыха.',
    
    // About page
    aboutTitle: 'О La Villa Pine',
    aboutDescription: 'Откройте для себя два исключительных гостевых дома в стиле лофт, где современный дизайн встречается с природным спокойствием. Каждый дом имеет дизайнерский ремонт, частные сауны и подогреваемые бассейны, все это на фоне чистого леса.',
    amenitiesTitle: 'Наши удобства',
    amenityTitles: {
      sauna: 'Финская сауна',
      pool: 'Подогреваемый бассейн',
      forest: 'Сосновый лес',
      interior: 'Премиальный интерьер'
    },
    amenityDescriptions: {
      sauna: 'Традиционная финская сауна для полного расслабления и оздоровления',
      pool: 'Круглогодичный подогреваемый бассейн для комфортного плавания',
      forest: 'Живописный сосновый лес для прогулок и единения с природой',
      interior: 'Современный лофт-дизайн с премиальной мебелью и техникой'
    },
    
    // Gallery page
    galleryTitle: 'Галерея',
    galleryDescription: 'Посмотрите фотографии наших роскошных гостевых домов',
    
    // Contacts page
    contactsTitle: 'Контакты',
    contactForm: {
      title: 'Свяжитесь с нами',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      submit: 'Отправить',
      success: 'Сообщение успешно отправлено!',
      error: 'Ошибка при отправке сообщения'
    },
    followUs: 'Подписывайтесь на нас',
    location: 'Наше местоположение',
    
    // Booking page
    bookingTitle: 'Бронирование',
    bookingDescription: 'Забронируйте ваш идеальный отпуск в La Villa Pine',
    needHelp: 'Нужна помощь?',
    contactUs: 'Свяжитесь с нами',
    
    // Footer
    allRightsReserved: 'Все права защищены',
    
    // Not found page
    notFoundTitle: 'Страница не найдена',
    notFoundDescription: 'Извините, страница которую вы ищете не существует.',
    backToHome: 'Вернуться на главную'
  },
  
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    gallery: 'Gallery',
    contacts: 'Contacts',
    booking: 'Book Now',
    
    // Site info
    siteName: 'La Villa Pine',
    siteDescription: 'Luxury guest houses in pine forest',
    
    // Home page
    heroTitle: 'Welcome to La Villa Pine',
    heroSubtitle: 'Luxury guest houses in pine forest with saunas, pools and premium amenities',
    bookNow: 'Book Now',
    welcomeTitle: 'Discover luxury in nature',
    welcomeDescription: 'La Villa Pine offers two exclusive loft houses surrounded by picturesque pine forest. Each house features its own sauna, heated pool and all amenities for an unforgettable vacation.',
    
    // About page
    aboutTitle: 'About La Villa Pine',
    aboutDescription: 'Discover two exceptional loft-style guest houses where modern design meets natural tranquility. Each house features designer renovations, private saunas and heated pools, all set against a pristine forest backdrop.',
    amenitiesTitle: 'Our Amenities',
    amenityTitles: {
      sauna: 'Finnish Sauna',
      pool: 'Heated Pool',
      forest: 'Pine Forest',
      interior: 'Premium Interior'
    },
    amenityDescriptions: {
      sauna: 'Traditional Finnish sauna for complete relaxation and wellness',
      pool: 'Year-round heated pool for comfortable swimming',
      forest: 'Picturesque pine forest for walks and connecting with nature',
      interior: 'Modern loft design with premium furniture and appliances'
    },
    
    // Gallery page
    galleryTitle: 'Gallery',
    galleryDescription: 'View photos of our luxury guest houses',
    
    // Contacts page
    contactsTitle: 'Contacts',
    contactForm: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      success: 'Message sent successfully!',
      error: 'Error sending message'
    },
    followUs: 'Follow Us',
    location: 'Our Location',
    
    // Booking page
    bookingTitle: 'Booking',
    bookingDescription: 'Book your perfect vacation at La Villa Pine',
    needHelp: 'Need help?',
    contactUs: 'Contact Us',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    
    // Not found page
    notFoundTitle: 'Page Not Found',
    notFoundDescription: 'Sorry, the page you are looking for does not exist.',
    backToHome: 'Back to Home'
  }
};

export function getTranslation(key: keyof Translations, lang: Language): string {
  return translations[lang][key];
}

export function getNestedTranslation(
  category: keyof Translations,
  key: string,
  lang: Language
): string {
  const categoryTranslations = translations[lang][category] as any;
  return categoryTranslations?.[key] || key;
}