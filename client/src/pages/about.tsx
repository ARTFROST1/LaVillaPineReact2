// import { AMENITIES } from "@/lib/constants"; // Больше не используется
import DynamicImage from "@/components/ui/dynamic-image";
import PageMeta from "@/components/seo/PageMeta";
import { SEO_PAGES } from "@/lib/seo-constants";

export default function About() {
  return (
    <div className="pt-24 pb-12 sm:pb-16 md:pb-20 bg-white">
      <PageMeta
        title={SEO_PAGES.about.title}
        description={SEO_PAGES.about.description}
        keywords={SEO_PAGES.about.keywords}
        ogTitle={SEO_PAGES.about.ogTitle}
        ogDescription={SEO_PAGES.about.ogDescription}
        ogImage={SEO_PAGES.about.ogImage}
        canonical="https://lavillapine.onrender.com/about"
      />
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary font-display">
            О нас
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
            Наши лофт-дома сделаны так, чтобы вам сразу чувствовалось: это место
            особенное. Здесь чёткие линии и объёмные элементы создают стильный и
            иютный интерьер. Мы используем дерево, камень, металл и стекло — всё
            это вместе выглядит минималистично но с душой: оно словно дышит и
            приглушённо шепчет «релакс»
          </p>
          <div className="bg-gradient-to-br from-neutral/50 to-neutral/30 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-left max-w-2xl lg:max-w-3xl mx-auto border border-accent/20 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
              Премиум комфорт
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
              <div>
                <h3 className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-base sm:text-lg">
                  Внутри дома:
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Три спальни с качественными матрасами</li>
                  <li>• Два стильных санузла со стеклом и хромом</li>
                  <li>• Холл-кухня с большим обеденным столом</li>
                  <li>• Финская сауна с кастомной подсветкой</li>
                  <li>• Халаты и тапочки для мгновенного релакса</li>
                  <li>• Качественная посуда и техника</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-base sm:text-lg">
                  На территории:
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Собственный подогреваемый бассейн</li>
                  <li>• Газон премиум-класса как зелёный ковёр</li>
                  <li>• Мангал-зоны с подсветкой для вечернего огня</li>
                  <li>• Просторная парковка прямо у дома</li>
                  <li>• Живописный лес в нескольких шагах</li>
                  <li>• Мелодичный ручей для утренних прогулок</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
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
                Современный лофт дизайн
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Дизайнерский ремонт с индустриальными элементами и современным
                комфортом
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
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

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
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



        {/* Сервис и комфорт */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Премиум сервис
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Уютная зона приёма гостей с заботливым администратором — всё как в
              высококлассном отеле, только куда уютнее. От заселения до
              рекомендаций по досугу — мы заботимся о каждом госте
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2 sm:mr-3 text-sm sm:text-base"></i>
                Профессиональный ресепшен с администратором
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2 sm:mr-3 text-sm sm:text-base"></i>
                Круглосуточная поддержка гостей
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2 sm:mr-3 text-sm sm:text-base"></i>
                Все необходимое премиум-класса
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2 sm:mr-3 text-sm sm:text-base"></i>
                Гостиничный сервис в частном доме
              </li>
            </ul>
          </div>
          <div>
            <DynamicImage
              src="/images/amenities/interior.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Премиум интерьер La Villa Pine"
              className="rounded-lg sm:rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
