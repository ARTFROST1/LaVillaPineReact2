import DynamicImage from "@/components/ui/dynamic-image";
import PageMeta from "@/components/seo/PageMeta";
import { SEO_PAGES } from "@/lib/seo-constants";
import {
  Home,
  MapPin,
  Building,
  Waves,
  TreePine,
  Lightbulb,
  Utensils,
  Bed,
  Car,
  Flame,
  Crown,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen">
      <PageMeta
        title={SEO_PAGES.about.title}
        description={SEO_PAGES.about.description}
        keywords={SEO_PAGES.about.keywords}
        ogTitle={SEO_PAGES.about.ogTitle}
        ogDescription={SEO_PAGES.about.ogDescription}
        ogImage={SEO_PAGES.about.ogImage}
        canonical="https://lavillapine.onrender.com/about"
      />
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/amenities/interior.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 text-primary font-bold font-display">О La Villa Pine</h1>
            <p className="text-lg font-light text-foreground/90">
              Два эксклюзивных дома с бассейнами в курортной зоне Адыгеи — сделано не для сдачи, а для себя
            </p>
          </div>

          {/* Quick info widgets */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">Адыгея</div>
                <div className="text-sm text-foreground/80">
                  пос. Тульский
                </div>
              </div>
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">2 дома</div>
                <div className="text-sm text-foreground/80">
                  + ресепшен
                </div>
              </div>
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Waves className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">6×4 м</div>
                <div className="text-sm text-foreground/80">
                  Подогрев бассейна
                </div>
              </div>
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">До 8 гостей</div>
                <div className="text-sm text-foreground/80">
                  Каждый дом
                </div>
              </div>
            </div>
          </div>

          {/* Content blocks */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 1. Расположение */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Курортное расположение
                </h2>
              </div>
              <div className="space-y-4 text-foreground">
                <p className="text-lg">
                  Расположены в посёлке Тульский (ул. Кольцевая, 4) между Майкопом и Лаго-Наки — 
                  в самом сердце курортной зоны Адыгеи с множеством активностей и достопримечательностей.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-black/20">
                    <strong>Рядом с нами:</strong>
                    <p className="mt-2">
                      Курортные отели, туристические маршруты, активные развлечения,
                      горные тропы и природные достопримечательности
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-black/20">
                    <strong>Уникальность:</strong>
                    <p className="mt-2">
                      В отличие от других объектов, наши дома построены без экономии —
                      качество материалов и исполнения на уровне собственного жилья
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Архитектура и строительство */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Премиальная архитектура
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Внешняя отделка
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Царский обожженный кирпич</li>
                    <li>• Крыша из металлочерепицы</li>
                    <li>• Алюминиевые окна премиум-класса</li>
                    <li>• Огромные окна в пол (6-метровые раздвижки)</li>
                    <li>• Гибкий неон по периметру крыши</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Особенности проекта
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="font-bold text-primary">
                        Два зеркальных дома
                      </div>
                      <div className="text-sm">Идентичные по планировке и отделке</div>
                    </div>
                    <div className="text-sm text-foreground/90">
                      + отдельный домик-ресепшен с администраторской стойкой
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Интерьер и отделка */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <Crown className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Роскошные интерьеры
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                    <Bed className="w-5 h-5 mr-2" />
                    Спальни
                  </h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Качественные матрасы</li>
                    <li>• Кирпичные стены</li>
                    <li>• Элементы из настоящего дерева</li>
                    <li>• Бетонные детали</li>
                    <li>• LED-подсветка по периметру</li>
                    <li>• Телевизор в каждой спальне</li>
                    <li>• Минималистичные картины</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                    <Utensils className="w-5 h-5 mr-2" />
                    Кухня-холл
                  </h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Обеденный стол из слэба</li>
                    <li>• Холодильник премиум-класса</li>
                    <li>• Индукционная плита</li>
                    <li>• Посудомоечная машина</li>
                    <li>• Микроволновая печь</li>
                    <li>• Чайник и вся посуда</li>
                    <li>• Большой телевизор</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Санузлы и сауна
                  </h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Унитазы-инсталляции</li>
                    <li>• Хромированные смесители</li>
                    <li>• Дорогая керамическая плитка</li>
                    <li>• Финская сауна из липы</li>
                    <li>• RGB-подсветка в сауне</li>
                    <li>• Рельефная штукатурка</li>
                    <li>• Двери из натурального дерева</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Территория и бассейн */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <Waves className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Бассейн и территория
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Бассейн премиум-класса
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="font-bold text-primary">
                        Размеры: 6×4 метра
                      </div>
                      <div className="text-sm">С подогревом воды круглый год</div>
                    </div>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li>• Бортик из натурального камня</li>
                      <li>• Большая терраса из лиственницы</li>
                      <li>• Потолок террасы из дерева</li>
                      <li>• Стильный ландшафтный дизайн</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Благоустройство
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Весь двор из уличной плитки</li>
                    <li>• Настоящий газон с автополивом</li>
                    <li>• Кирпичный мангал со столешницей</li>
                    <li>• Мойка для удобства готовки</li>
                    <li>• Неоновая подсветка крыши</li>
                    <li>• Профессиональный ландшафт</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Философия проекта */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <TreePine className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Сделано для себя
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Самое важное — эти дома построены не для сдачи, а как собственное жилье. 
                  На них не экономили ни копейки. Каждая деталь, каждый материал выбирались 
                  с мыслью о долговечности и комфорте.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-black/20">
                    <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-primary">Премиум материалы</div>
                    <div className="text-sm text-foreground/80">Без компромиссов</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-black/20">
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-primary">Невероятная атмосфера</div>
                    <div className="text-sm text-foreground/80">Ночная подсветка</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-black/20">
                    <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-primary">Полный комфорт</div>
                    <div className="text-sm text-foreground/80">Продумано всё</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
