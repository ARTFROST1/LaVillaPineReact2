import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { useEffect } from "react";
import ComingSoonBanner from "@/components/ui/coming-soon-banner";
import BookingDateNotice from "@/components/ui/booking-date-notice";
import PageMeta from "@/components/seo/PageMeta";
import { BreadcrumbsSchema } from "@/components/seo/StructuredData";
import { SEO_PAGES } from "@/lib/seo-constants";

// Global type declaration for HomeReserve widget
declare global {
  interface Window {
    homereserve?: {
      initWidgetSearch: (config: { token: string; tag: string }) => void;
      initWidgetList: (config: { token: string; tag: string }) => void;
    };
  }
}

export default function Booking() {
  useEffect(() => {
    // Загружаем модуль бронирования только если баннер отключен
    if (!SITE_CONFIG.showComingSoonBanner) {
      // Check if script is already loaded
      if (
        document.querySelector('script[src="https://homereserve.ru/widget.js"]')
      ) {
        // Script already exists, try to initialize
        if (window.homereserve) {
          window.homereserve.initWidgetList({
            token: "Aijbfbb7Zl",
            tag: "site",
          });
        }
        return;
      }

      // Load HomeReserve widget script
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://homereserve.ru/widget.js";
      script.onload = () => {
        // Initialize module immediately after script loads
        if (window.homereserve && document.getElementById("hr-widget")) {
          window.homereserve.initWidgetList({
            token: "Aijbfbb7Zl",
            tag: "site",
          });
        }
      };
      script.onerror = () => {
        console.error("Failed to load HomeReserve widget script");
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup script on unmount
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
    <div className="py-20 relative">
      <PageMeta
        title={SEO_PAGES.booking.title}
        description={SEO_PAGES.booking.description}
        keywords={SEO_PAGES.booking.keywords}
        ogTitle={SEO_PAGES.booking.ogTitle}
        ogDescription={SEO_PAGES.booking.ogDescription}
        ogImage={SEO_PAGES.booking.ogImage}
        canonical="https://lavillapine.onrender.com/booking"
      />
      <BreadcrumbsSchema items={[
        { name: "Главная", url: "/" },
        { name: "Бронирование" }
      ]} />
      {/* Room background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/rooms/room-1.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
            Бронирование
          </h1>
          <p className="text-xl text-gray-200">
            Забронируйте роскошный отдых в La Villa Pine на удобные даты
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Условное отображение: баннер или модуль бронирования */}
          {SITE_CONFIG.showComingSoonBanner ? (
            <div className="mb-12">
              <ComingSoonBanner variant="booking" />
            </div>
          ) : (
            <>
              {/* HomeReserve Booking Widget - directly on background */}
              <div className="mb-12 space-y-4">
                <div id="hr-widget"></div>
                {SITE_CONFIG.showBookingDateNotice && (
                  <BookingDateNotice variant="booking" />
                )}
              </div>

              {/* Contact buttons section */}
              <div className="max-w-2xl mx-auto">
                <div className="backdrop-blur-md rounded-xl shadow-2xl p-8 bg-white/10">
                  <div className="text-center">
                    <p className="mb-4 text-white">
                      Нужна помощь с бронированием? Свяжитесь с нами напрямую:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contacts">
                        <Button className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-lg">
                          <i className="fas fa-envelope mr-2"></i>
                          Связаться с нами
                        </Button>
                      </Link>
                      <a href={`tel:${SITE_CONFIG.phone}`}>
                        <Button
                          variant="outline"
                          className="border-2 border-accent text-accent bg-white/20 backdrop-blur-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
                        >
                          <i className="fas fa-phone mr-2"></i>
                          Позвонить
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
