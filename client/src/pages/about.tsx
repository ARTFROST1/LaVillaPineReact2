import { AMENITIES } from "@/lib/constants";
import DynamicImage from "@/components/ui/dynamic-image";
import PageMeta from "@/components/seo/PageMeta";
import { SEO_PAGES } from "@/lib/seo-constants";

export default function About() {
  return (
    <div className="py-20 bg-white">
      <PageMeta
        title={SEO_PAGES.about.title}
        description={SEO_PAGES.about.description}
        keywords={SEO_PAGES.about.keywords}
        ogTitle={SEO_PAGES.about.ogTitle}
        ogDescription={SEO_PAGES.about.ogDescription}
        ogImage={SEO_PAGES.about.ogImage}
        canonical="https://lavillapine.onrender.com/about"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-display">
            О нас
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Наши лофт-дома сделаны так, чтобы вам сразу чувствовалось: это место
            особенное. Здесь чистые линии и индустриальные детали создают
            стильный, но тёплый интерьер. Мы используем дерево, камень, металл и
            стекло — всё это вместе выглядит минималистично, но не холодно: оно
            словно дышит и приглушённо шепчет «комфорт». Главная идея — простота
            и качество. Нет вычурности, только честная, современная красота,
            которую можно ощутить. Всё выглядит модно и со вкусом, но при этом
            остаётся домашним.
          </p>
          <div className="bg-neutral/50 p-8 rounded-2xl text-left max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-primary font-display">
              Премиум комфорт
            </h2>

            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 border-l-4 border-accent pl-3">
                  Три спальни, где хочется просыпаться
                </h3>
                <p className="text-gray-700 leading-relaxed pl-5">
                  Каждая комната продумана для настоящего отдыха: удобные
                  матрасы, простое и мягкое освещение, уютный текстиль — всё это
                  чувствуется сразу, стоит переступить порог.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 border-l-4 border-accent pl-3">
                  Два больших санузла — чисто и комфортно
                </h3>
                <p className="text-gray-700 leading-relaxed pl-5">
                  Просторные, со стеклянными перегородками и хромированными
                  элементами. Они сделаны так, чтобы вы чувствовали
                  современность и удобство в каждой мелочи — от полотенец до
                  вместительных полок.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 border-l-4 border-accent pl-3">
                  Сауна с RGB-подсветкой — от релакса до вечернего настроения
                </h3>
                <p className="text-gray-700 leading-relaxed pl-5">
                  Сауна дома — это не просто теплая комната, это место, где
                  можно полностью отключиться. Вы сами выбираете, каким будет
                  свет: мягким и расслабляющим или ярким и бодрящим. Сочетание
                  удобных полок, равномерного тепла и мягкой LED‑подсветки
                  создаёт атмосферу настоящего мини‑спа.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-primary mb-2">
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
                <h3 className="font-semibold text-primary mb-2">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <DynamicImage
                  src={amenity.image}
                  fallbackSrc={amenity.fallbackImage}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-3xl">
                  <i className={amenity.icon}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Удобное расположение */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-3xl mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary font-display">
              Идеальное расположение
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Всего 20 минут до города и 30 минут до гор — комфортное
              путешествие как для любителей городской жизни, так и для
              почитателей природы. В нескольких шагах кофейня с идеальным
              утренним кофе и ресторан "Пхали-Ханкали", где можно заказать блюда
              прямо к дому. Минеральные источники и спа "Благодать" буквально
              рядом — релакс никогда не был таким доступным.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <i className="fas fa-city text-accent text-3xl mb-3"></i>
                <h3 className="font-semibold text-lg mb-2">До города</h3>
                <p className="text-gray-600">20 минут</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <i className="fas fa-mountain text-accent text-3xl mb-3"></i>
                <h3 className="font-semibold text-lg mb-2">До гор</h3>
                <p className="text-gray-600">30 минут</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <i className="fas fa-spa text-accent text-3xl mb-3"></i>
                <h3 className="font-semibold text-lg mb-2">До спа-комплекса</h3>
                <p className="text-gray-600">Рядом</p>
              </div>
            </div>
          </div>
        </div>

        {/* Сервис и комфорт */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Премиум сервис</h3>
            <p className="text-lg text-gray-600 mb-6">
              Уютная зона приёма гостей с заботливым администратором — всё
              организовано так, чтобы вы чувствовали себя как в высококлассном
              отеле, только куда уютнее. От заселения до рекомендаций по досугу
              — полный сервис, где каждая деталь продумана для вашего спокойного
              отдыха.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Профессиональный ресепшен с администратором
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Круглосуточная поддержка гостей
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Все необходимое премиум-класса
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                Гостиничный сервис в частном доме
              </li>
            </ul>
          </div>
          <div>
            <DynamicImage
              src="/images/amenities/interior.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Премиум интерьер La Villa Pine"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
