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
import { HERO_IMAGES, SITE_CONFIG, GALLERY_IMAGES } from "@/lib/constants";
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

  // Функции для управления галереей
  const openGallery = (imageUrl: string) => {
    // Найти индекс изображения в основной галерее по URL
    const imageIndex = GALLERY_IMAGES.findIndex(img => 
      img.url === imageUrl || img.fallbackUrl === imageUrl
    );
    
    // Если изображение не найдено, ищем по схожему пути
    const fallbackIndex = imageUrl.includes('interior') ? 0 :
                         imageUrl.includes('pool') ? 1 :
                         imageUrl.includes('forest') ? 8 : 0;
    
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
                  La Villa Pine
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Откройте для себя роскошные гостевые дома в стиле лофт
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

      {/* Features Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary font-display">
              Почему выбирают <br />
              {SITE_CONFIG.name}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Два исключительных гостевых дома в стиле лофт, где современный
              дизайн встречается с природным спокойствием
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div 
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openGallery('/images/amenities/interior.jpg')}
              data-testid="card-loft-design"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <DynamicImage
                  src="/images/amenities/interior.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Современный дизайн лофт"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 text-center">
                <div className="text-accent text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                  <i className="fas fa-home"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  Современный дизайн лофт
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Дизайнерский ремонт с индустриальными элементами и современным
                  комфортом
                </p>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openGallery('/images/amenities/pool.jpg')}
              data-testid="card-pool-sauna"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <DynamicImage
                  src="/images/amenities/pool.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Подогреваемые бассейны"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 text-center">
                <div className="text-accent text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                  <i className="fas fa-swimming-pool"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  Подогреваемые бассейны и сауна
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Частные подогреваемые бассейны и сауны для круглогодичного
                  отдыха
                </p>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openGallery('/images/amenities/forest.jpg')}
              data-testid="card-forest-surrounding"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <DynamicImage
                  src="/images/amenities/forest.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Лесное окружение"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 text-center">
                <div className="text-accent text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                  <i className="fas fa-tree"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  Лесное окружение
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Чистая лесная местность с дикими животными и природным ручьем
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link href="/about">
              <Button
                size="default"
                className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-lg text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                Узнать больше
              </Button>
            </Link>
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
