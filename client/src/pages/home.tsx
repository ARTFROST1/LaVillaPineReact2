import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CarouselHero from "@/components/ui/carousel-hero";
import { HERO_IMAGES, SITE_CONFIG } from "@/lib/constants";
import { useEffect } from "react";

// Global type declaration for HomeReserve widget
declare global {
  interface Window {
    homereserve?: {
      initWidgetSearch: (config: { token: string; tag: string }) => void;
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://homereserve.ru/widget.js"]')) {
      // Script already exists, try to initialize
      if (window.homereserve && document.getElementById('hr-widget-home')) {
        window.homereserve.initWidgetSearch({
          token: "Aijbfbb7Zl",
          tag: "site"
        });
      }
      return;
    }

    // Load HomeReserve widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://homereserve.ru/widget.js';
    script.onload = () => {
      // Wait a bit for the module to fully load and initialize
      setTimeout(() => {
        if (window.homereserve && document.getElementById('hr-widget-home')) {
          window.homereserve.initWidgetSearch({
            token: "Aijbfbb7Zl",
            tag: "site"
          });
        }
      }, 100);
    };
    script.onerror = () => {
      console.error('Failed to load HomeReserve widget script');
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://homereserve.ru/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Добро пожаловать в <br />
                <span className="text-accent drop-shadow-lg">
                  {SITE_CONFIG.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-lg max-w-3xl mx-auto">
                Откройте для себя роскошные гостевые дома в стиле лофт
              </p>
              {/* HomeReserve Booking Widget */}
              <div className="mt-8 max-w-3xl mx-auto">
                <div id="hr-widget-home"></div>
              </div>
              
              {/* Fallback link to About page */}
              <div className="mt-6">
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary px-8 py-4 text-lg shadow-xl backdrop-blur-sm transition-all duration-300"
                  >
                    Узнать больше о нас
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Почему выбирают <br />
              {SITE_CONFIG.name}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Два исключительных гостевых дома в стиле лофт, где современный
              дизайн встречается с природным спокойствием
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
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

            <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
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

            <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-tree"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Лесное окружение</h3>
              <p className="text-gray-600">
                Чистая лесная местность с дикими животными и природным ручьем
              </p>
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
