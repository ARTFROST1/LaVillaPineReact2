import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CarouselHero from "@/components/ui/carousel-hero";
import { HERO_IMAGES, SITE_CONFIG } from "@/lib/constants";

export default function Home() {
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white px-8 py-4 text-lg shadow-xl border-2 border-accent hover:border-white transition-all duration-300"
                  >
                    Забронировать
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-[#ffffff00] hover:bg-white hover:text-primary px-8 py-4 text-lg shadow-xl backdrop-blur-sm transition-all duration-300"
                  >
                    Узнать больше
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
