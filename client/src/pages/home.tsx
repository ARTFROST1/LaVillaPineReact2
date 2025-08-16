import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselHero from "@/components/ui/carousel-hero";
import DynamicImage from "@/components/ui/dynamic-image";
import ComingSoonBanner from "@/components/ui/coming-soon-banner";
import BookingDateNotice from "@/components/ui/booking-date-notice";
import PageMeta from "@/components/seo/PageMeta";
import YandexMap from "@/components/ui/yandex-map";
import StackedAmenities from "@/components/ui/stacked-amenities";
import { HERO_IMAGES, SITE_CONFIG, GALLERY_IMAGES, AMENITIES } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-constants";

// Типы для HomeReserve
declare global {
  interface Window {
    homereserve?: {
      initWidgetSearch: (config: { token: string; tag: string }) => void;
    };
  }
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  // Состояние для карусели галереи
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [galleryRef, setGalleryRef] = useState<HTMLDivElement | null>(null);
  const [showArrows, setShowArrows] = useState(false);

  // Функции для управления галереей
  const openGallery = (imageUrl: string) => {
    // Найти индекс изображения в основной галерее по URL
    const imageIndex = GALLERY_IMAGES.findIndex(img => 
      img.url === imageUrl || img.fallbackUrl === imageUrl
    );
    
    // Если изображение не найдено, ищем по схожему пути
    const fallbackIndex = imageUrl.includes('interior') ? 0 :
                         imageUrl.includes('sauna') ? 5 :
                         imageUrl.includes('pool') ? 1 :
                         imageUrl.includes('forest') ? 2 :
                         imageUrl.includes('bbq') ? 3 :
                         imageUrl.includes('parking') ? 4 : 0;
    
    setSelectedImage(imageIndex !== -1 ? imageIndex : fallbackIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  // Навигация карусели
  const nextGallerySlide = () => {
    setUserInteracted(true);
    setCurrentGallerySlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevGallerySlide = () => {
    setUserInteracted(true);
    setCurrentGallerySlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  // Логика автопрокрутки карусели
  useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout;
    let inactivityTimeout: NodeJS.Timeout;

    const startAutoScroll = () => {
      if (!isAutoScrolling || userInteracted) return;
      
      autoScrollInterval = setInterval(() => {
        if (!userInteracted) {
          setCurrentGallerySlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
        }
      }, 4000); // Смена слайда каждые 4 секунды
    };

    const stopAutoScroll = () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };

    const handleUserInteraction = () => {
      setUserInteracted(true);
      stopAutoScroll();
      
      if (inactivityTimeout) {
        clearTimeout(inactivityTimeout);
      }
      
      // Возобновить автопрокрутку через 15 секунд бездействия
      inactivityTimeout = setTimeout(() => {
        setUserInteracted(false);
      }, 15000);
    };

    if (isAutoScrolling && !userInteracted) {
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
      if (inactivityTimeout) {
        clearTimeout(inactivityTimeout);
      }
    };
  }, [isAutoScrolling, userInteracted]);

  // Обработка касаний для мобильных устройств
  useEffect(() => {
    if (!galleryRef) return;

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      setUserInteracted(true);
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Проверяем что это горизонтальный свайп
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextGallerySlide();
        } else {
          prevGallerySlide();
        }
      }
    };

    galleryRef.addEventListener('touchstart', handleTouchStart);
    galleryRef.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (galleryRef) {
        galleryRef.removeEventListener('touchstart', handleTouchStart);
        galleryRef.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [galleryRef]);

  // Компонент для отображения изображения с fallback
  const GalleryImageComponent = ({ src, fallbackSrc, alt, className }: { 
    src: string; 
    fallbackSrc: string; 
    alt: string; 
    className?: string;
  }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    
    useEffect(() => {
      const img = new Image();
      img.onload = () => setCurrentSrc(src);
      img.onerror = () => setCurrentSrc(fallbackSrc);
      img.src = src;
    }, [src, fallbackSrc]);

    return (
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
    );
  };

  useEffect(() => {
    // Загружаем модуль бронирования только если баннер отключен
    if (!SITE_CONFIG.showComingSoonBanner) {
      // Динамически загружаем скрипт HomeReserve
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://homereserve.ru/widget.js";
      script.onload = () => {
        // Инициализируем поисковую форму после загрузки скрипта
        if (window.homereserve) {
          window.homereserve.initWidgetSearch({
            token: "Aijbfbb7Zl",
            tag: "site",
          });
        }
      };
      document.head.appendChild(script);

      // Очистка при размонтировании компонента
      return () => {
        const existingScript = document.querySelector(
          'script[src="https://homereserve.ru/widget.js"]',
        );
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  return (
    <div>
      <PageMeta
        title={SEO_PAGES.home.title}
        description={SEO_PAGES.home.description}
        keywords={SEO_PAGES.home.keywords}
        ogTitle={SEO_PAGES.home.ogTitle}
        ogDescription={SEO_PAGES.home.ogDescription}
        ogImage={SEO_PAGES.home.ogImage}
        canonical="https://lavillapine.onrender.com/"
      />
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Full width carousel background */}
        <div className="absolute inset-0 w-full h-full">
          <CarouselHero images={HERO_IMAGES} />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl font-display">
                Добро пожаловать в <br />
                <span className="text-accent drop-shadow-lg">
                  {SITE_CONFIG.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Отдых в стиле лофт в Адыгее
              </p>
              {/* Условное отображение: баннер или модуль бронирования */}
              <div className="max-w-3xl lg:max-w-4xl mx-auto mt-6 sm:mt-8">
                {SITE_CONFIG.showComingSoonBanner ? (
                  <ComingSoonBanner variant="home" />
                ) : (
                  <div className="space-y-4">
                    <div id="hr-widget"></div>
                    {SITE_CONFIG.showBookingDateNotice && (
                      <BookingDateNotice variant="home" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Amenities with Scroll Effect */}
      <StackedAmenities onImageClick={openGallery} />

      {/* Галерея карусель */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 group"
        style={{
          background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(212, 164, 74, 0.15)',
          borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 -8px 32px rgba(0, 0, 0, 0.25), 0 8px 32px rgba(0, 0, 0, 0.25)'
        }}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-display">
              Наша галерея
            </h2>
          </div>

          {/* Карусель карточек */}
          <div 
            ref={setGalleryRef}
            className="relative overflow-hidden rounded-3xl"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-96 relative cursor-pointer"
                  onClick={() => {
                    setSelectedImage(index);
                    setIsGalleryOpen(true);
                  }}
                  data-testid={`gallery-card-${index}`}
                >
                  <DynamicImage
                    src={image.url}
                    fallbackSrc={image.fallbackUrl || image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Навигационные стрелки (только для десктопа) */}
          {showArrows && (
            <>
              <button
                onClick={prevGallerySlide}
                className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-black/60 transition-all duration-300 z-10"
                data-testid="gallery-prev-button"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextGallerySlide}
                className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-black/60 transition-all duration-300 z-10"
                data-testid="gallery-next-button"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Индикаторы слайдов */}
          <div className="flex justify-center mt-6 space-x-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setUserInteracted(true);
                  setCurrentGallerySlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentGallerySlide 
                    ? 'bg-accent scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                data-testid={`gallery-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      

      {/* Наш адрес и карта */}
      <section className="py-12 sm:py-16 md:py-20" style={{
        background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
                Наш адрес
              </h2>
            </div>

            {/* Адрес */}
            <div className="p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 shadow-sm" style={{
              background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.5), rgba(50, 42, 35, 0.4))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(212, 164, 74, 0.2)',
                  border: '1px solid rgba(212, 164, 74, 0.3)'
                }}>
                  <i className="fas fa-map-marker-alt text-lg sm:text-xl" style={{ color: '#D4A44A' }}></i>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-medium text-sm sm:text-base text-muted-foreground uppercase tracking-wide mb-1">
                    Адрес
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-foreground font-medium">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg" style={{
              border: '1px solid rgba(212, 164, 74, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25)'
            }}>
              <YandexMap 
                address={SITE_CONFIG.address}
                className="w-full h-64 sm:h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Идеальное расположение */}
      <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20" style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 -8px 32px rgba(0, 0, 0, 0.25), 0 8px 32px rgba(0, 0, 0, 0.25)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
              Идеальное расположение
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Всего 20 минут до города и 30 минут до гор — сочетание удобства и природы для любого типа отдыха.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* От города */}
            <div className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <DynamicImage
                src="https://img.geliophoto.com/maykop/maykop_21.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="До города"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="text-accent text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
                  <i className="fas fa-city"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  От города
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
                  20 минут
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1 sm:mt-2">
                  Удобный доступ к городской инфраструктуре
                </p>
              </div>
            </div>

            {/* До гор */}
            <div className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <DynamicImage
                src="https://cdn.tripster.ru/photos/d4904480-72a5-4f08-982a-b6a049a4c96c.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="До гор"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="text-accent text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
                  <i className="fas fa-mountain"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  До гор
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
                  30 минут
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1 sm:mt-2">
                  Живописные пейзажи и свежий воздух
                </p>
              </div>
            </div>

            {/* До спа-комплексов */}
            <div className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <DynamicImage
                src="https://s9.stc.all.kpcdn.net/russia/wp-content/uploads/2023/05/termalnye-istochniki-adygei-devushka-v-otkrytom-bassejne.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="До спа-комплексов"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="text-accent text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
                  <i className="fas fa-spa"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  До спа-комплексов
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
                  2 минуты
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1 sm:mt-2">
                  Минеральные источники рядом
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок бронирования с фиксированным фоном */}
      <section 
        className="relative h-[90vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen bg-fixed bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url(/images/amenities/pool.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Темный оверлей для лучшей читаемости */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Контент */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 font-display leading-tight">
              Забронируйте свой идеальный отдых
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 opacity-90 leading-relaxed">
              Окунитесь в атмосферу комфорта и уюта в окружении природы
            </p>
            <div className="flex justify-center">
              <Link href="/booking">
                <Button
                  size="lg"
                  className="loft-booking-button text-base sm:text-lg font-medium"
                >
                  Забронировать
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно галереи */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedImage !== null 
              ? GALLERY_IMAGES[selectedImage].alt 
              : "Галерея изображений"
            }
          </DialogTitle>
          <DialogDescription className="sr-only">
            Просмотр галереи изображений La Villa Pine. Используйте кнопки навигации для перехода между изображениями.
          </DialogDescription>
          {selectedImage !== null && (
            <div className="relative">
              <GalleryImageComponent
                src={GALLERY_IMAGES[selectedImage].url}
                fallbackSrc={GALLERY_IMAGES[selectedImage].fallbackUrl || GALLERY_IMAGES[selectedImage].url}
                alt={GALLERY_IMAGES[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Навигация */}
              {GALLERY_IMAGES.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
              
              {/* Счетчик изображений */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
