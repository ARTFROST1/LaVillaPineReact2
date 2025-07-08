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
  premiumComfort: string;
  premiumComfortDescription: string;
  exclusiveFeatures: string;
  exclusiveFeaturesDescription: string;
  perfectLocation: string;
  perfectLocationDescription: string;
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
  getInTouch: string;
  getInTouchDescription: string;
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
    premiumComfort: 'Премиум комфорт',
    premiumComfortDescription: 'Каждый дом площадью 80 квадратных метров предлагает просторные спальни с большими кроватями, полностью оборудованные кухни с современной техникой и стильные ванные комнаты с душевыми кабинами премиум-класса.',
    exclusiveFeatures: 'Эксклюзивные возможности',
    exclusiveFeaturesDescription: 'Наслаждайтесь частными подогреваемыми бассейнами и традиционными финскими саунами в каждом доме. Идеально для отдыха в любое время года с современными удобствами и природным окружением.',
    perfectLocation: 'Идеальное расположение',
    perfectLocationDescription: 'Расположенные в нетронутом сосновом лесу, наши дома предлагают полную приватность, при этом оставаясь легкодоступными. Наслаждайтесь дикой природой, включая белок и различных лесных птиц, прямо у вашего порога.',
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
    getInTouch: 'Свяжитесь с нами',
    getInTouchDescription: 'У вас есть вопросы о наших гостевых домах? Мы всегда готовы помочь вам спланировать идеальный отдых в La Villa Pine.',
    contactForm: {
      title: 'Отправить сообщение',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      submit: 'Отправить',
      success: 'Сообщение успешно отправлено!',
      error: 'Ошибка при отправке сообщения'
    },
    followUs: 'Подписывайтесь на наши страницы, чтобы быть в курсе новостей и специальных предложений',
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
    premiumComfort: 'Premium Comfort',
    premiumComfortDescription: 'Each 80 square meter house offers spacious bedrooms with large beds, fully equipped kitchens with modern appliances, and stylish bathrooms with premium shower facilities.',
    exclusiveFeatures: 'Exclusive Features',
    exclusiveFeaturesDescription: 'Enjoy private heated pools and traditional Finnish saunas in each house. Perfect for year-round relaxation with modern amenities and natural surroundings.',
    perfectLocation: 'Perfect Location',
    perfectLocationDescription: 'Located in pristine pine forest, our houses offer complete privacy while remaining easily accessible. Enjoy wildlife including squirrels and various forest birds right at your doorstep.',
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
    getInTouch: 'Get in Touch',
    getInTouchDescription: 'Have questions about our guest houses? We are always ready to help you plan the perfect getaway at La Villa Pine.',
    contactForm: {
      title: 'Send Message',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      success: 'Message sent successfully!',
      error: 'Error sending message'
    },
    followUs: 'Follow our pages to stay updated with news and special offers',
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