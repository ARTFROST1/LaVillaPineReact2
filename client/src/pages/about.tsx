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
      {/* Hero Section - similar to home page */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/images/amenities/interior.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl font-display">
                О нас <br />
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Два эксклюзивных дома с бассейнами в курортной зоне Адыгеи
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Quick info widgets section - like home page */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }} className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="location-widget"
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
                data-testid="houses-widget"
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
                data-testid="pool-widget"
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
                data-testid="guests-widget"
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">До 8 гостей</div>
                <div className="text-sm text-foreground/80">
                  Каждый дом
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content sections following home page patterns */}
      {/* 1. Location Section with Image */}
      <section className="py-12 sm:py-16 md:py-20" style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
                Курортное расположение
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Расположены в посёлке Тульский (ул. Кольцевая, 4) между Майкопом и Лаго-Наки — 
                  в самом сердце курортной зоны Адыгеи с множеством активностей и достопримечательностей.
                </p>
                <div className="grid gap-4">
                  <div className="p-6 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <h3 className="font-bold text-primary mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Рядом с нами
                    </h3>
                    <p className="text-foreground">
                      Курортные отели, туристические маршруты, активные развлечения,
                      горные тропы и природные достопримечательности
                    </p>
                  </div>
                  <div className="p-6 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <h3 className="font-bold text-primary mb-2 flex items-center">
                      <Crown className="w-5 h-5 mr-2" />
                      Уникальность
                    </h3>
                    <p className="text-foreground">
                      В отличие от других объектов, наши дома построены без экономии —
                      качество материалов и исполнения на уровне собственного жилья
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <DynamicImage
                  src="/images/amenities/forest.jpg"
                  fallbackSrc="@assets/image_1754745434193.png"
                  alt="Курортная зона Адыгеи"
                  className="w-full h-80 lg:h-96 object-cover"
                  data-testid="location-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2. Architecture Section */}
      <section className="py-12 sm:py-16 md:py-20" style={{
        background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
                Премиальная архитектура
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <DynamicImage
                  src="/images/amenities/interior.jpg"
                  fallbackSrc="@assets/image_1754745546084.png"
                  alt="Архитектура La Villa Pine"
                  className="w-full h-80 lg:h-96 object-cover"
                  data-testid="architecture-image"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="grid gap-6">
                  <div className="p-6 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                      <Building className="w-6 h-6 mr-2" />
                      Внешняя отделка
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Обожженный кирпич</li>
                      <li>• Крыша из металлочерепицы</li>
                      <li>• Алюминиевые окна</li>
                      <li>• Панорамные окна в пол</li>
                      <li>• Гибкий неон по периметру крыши</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Interior Section */}
      <section className="py-12 sm:py-16 md:py-20" style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
                Роскошные интерьеры
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl" style={{
                background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 164, 74, 0.2)'
              }}>
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
              <div className="p-6 rounded-xl" style={{
                background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 164, 74, 0.2)'
              }}>
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
              <div className="p-6 rounded-xl" style={{
                background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 164, 74, 0.2)'
              }}>
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <Flame className="w-5 h-5 mr-2" />
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
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <DynamicImage
                src="/images/amenities/sauna.jpg"
                fallbackSrc="@assets/IMG_2671_1752328359167.JPG"
                alt="Интерьеры La Villa Pine"
                className="w-full h-64 md:h-80 object-cover"
                data-testid="interior-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 4. Pool Section */}
      <section className="py-12 sm:py-16 md:py-20" style={{
        background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
                Бассейн и территория
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-xl" style={{
                  background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 164, 74, 0.2)'
                }}>
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                    <Waves className="w-6 h-6 mr-2" />
                    Бассейн премиум-класса
                  </h3>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                    <div className="font-bold text-primary">
                      Размеры: 6×4 метра
                    </div>
                    <div className="text-sm text-foreground/80">С подогревом воды круглый год</div>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Бортик из натурального камня</li>
                    <li>• Большая терраса из лиственницы</li>
                    <li>• Потолок террасы из дерева</li>
                    <li>• Стильный ландшафтный дизайн</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl" style={{
                  background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 164, 74, 0.2)'
                }}>
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                    <TreePine className="w-6 h-6 mr-2" />
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
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <DynamicImage
                  src="/images/amenities/pool.jpg"
                  fallbackSrc="@assets/IMG_5648 (2)_1752148510483.JPEG"
                  alt="Бассейн La Villa Pine"
                  className="w-full h-80 lg:h-96 object-cover"
                  data-testid="pool-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5. Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20" style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground font-display">
                Сделано для себя
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <DynamicImage
                  src="/images/amenities/bbq.jpg"
                  fallbackSrc="@assets/image_1752087177825.png"
                  alt="Философия La Villa Pine"
                  className="w-full h-80 lg:h-96 object-cover"
                  data-testid="philosophy-image"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-lg text-foreground leading-relaxed">
                  Самое важное — эти дома построены не для сдачи, а как собственное жилье. 
                  На них не экономили ни копейки. Каждая деталь, каждый материал выбирались 
                  с мыслью о долговечности и комфорте.
                </p>
                <div className="grid gap-4">
                  <div className="text-center p-6 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold text-primary mb-2">Премиум материалы</div>
                    <div className="text-sm text-foreground/80">Без компромиссов в качестве</div>
                  </div>
                  <div className="text-center p-6 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold text-primary mb-2">Невероятная атмосфера</div>
                    <div className="text-sm text-foreground/80">Ночная подсветка и дизайн</div>
                  </div>
                  <div className="text-center p-6 rounded-xl" style={{
                    background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <Car className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold text-primary mb-2">Полный комфорт</div>
                    <div className="text-sm text-foreground/80">Продумано до мелочей</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
