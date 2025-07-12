import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CarouselHero from "@/components/ui/carousel-hero";
import DynamicImage from "@/components/ui/dynamic-image";
import ComingSoonBanner from "@/components/ui/coming-soon-banner";
import BookingDateNotice from "@/components/ui/booking-date-notice";
import { HERO_IMAGES, SITE_CONFIG } from "@/lib/constants";

// Типы для HomeReserve
declare global {
  interface Window {
    homereserve?: {
      initWidgetSearch: (config: { token: string; tag: string }) => void;
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Загружаем модуль бронирования только если баннер отключен
    if (!SITE_CONFIG.showComingSoonBanner) {
      // Динамически загружаем скрипт HomeReserve
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://homereserve.ru/widget.js';
      script.onload = () => {
        // Инициализируем поисковую форму после загрузки скрипта
        if (window.homereserve) {
          window.homereserve.initWidgetSearch({
            token: "Aijbfbb7Zl",
            tag: "site"
          });
        }
      };
      document.head.appendChild(script);

      // Очистка при размонтировании компонента
      return () => {
        const existingScript = document.querySelector('script[src="https://homereserve.ru/widget.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Full width carousel background */}
        <div className="absolute inset-0 w-full h-full">
          <CarouselHero images={HERO_IMAGES} />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl font-display">
                Добро пожаловать в <br />
                <span className="text-accent drop-shadow-lg">
                  {SITE_CONFIG.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-lg max-w-3xl mx-auto">
                Откройте для себя роскошные гостевые дома в стиле лофт
              </p>
              {/* Условное отображение: баннер или модуль бронирования */}
              <div className="max-w-4xl mx-auto mt-8">
                {SITE_CONFIG.showComingSoonBanner ? (
                  <ComingSoonBanner variant="home" />
                ) : (
                  <div className="space-y-4">
                    <div id="hr-widget" className="w-full overflow-hidden rounded-lg"></div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-display">
              Почему выбирают <br />
              {SITE_CONFIG.name}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Два исключительных гостевых дома в стиле лофт, где современный
              дизайн встречается с природным спокойствием
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <DynamicImage 
                  src="/images/amenities/interior.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Современный дизайн лофт"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <div className="text-accent text-4xl mb-4">
                  <i className="fas fa-home"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Современный дизайн лофт
                </h3>
                <p className="text-gray-600">
                  Дизайнерский ремонт с индустриальными элементами и современным
                  комфортом
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <DynamicImage 
                  src="/images/amenities/pool.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Подогреваемые бассейны"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <div className="text-accent text-4xl mb-4">
                  <i className="fas fa-swimming-pool"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Подогреваемые бассейны и сауна
                </h3>
                <p className="text-gray-600">
                  Частные подогреваемые бассейны и сауны для круглогодичного
                  отдыха
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <DynamicImage 
                  src="/images/amenities/forest.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Лесное окружение"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <div className="text-accent text-4xl mb-4">
                  <i className="fas fa-tree"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Лесное окружение</h3>
                <p className="text-gray-600">
                  Чистая лесная местность с дикими животными и природным ручьем
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-lg"
              >
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
