import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AMENITIES } from "@/lib/constants";
import DynamicImage from "./dynamic-image";

interface StackedAmenitiesProps {
  onImageClick: (imageUrl: string) => void;
}

export default function StackedAmenities({ onImageClick }: StackedAmenitiesProps) {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewportHeight = window.innerHeight;

      // Начинаем анимацию когда контейнер входит в область видимости
      if (containerTop < viewportHeight && containerTop + containerHeight > 0) {
        // Рассчитываем прогресс скролла более точно
        const scrollableHeight = containerHeight - viewportHeight;
        const scrolled = Math.max(0, viewportHeight - containerTop);
        const scrollProgress = Math.min(1, scrolled / scrollableHeight);

        // Определяем какие карточки должны быть активными
        const totalCards = AMENITIES.length;
        const progressPerCard = 1 / totalCards;
        
        cardRefs.current.forEach((cardEl, index) => {
          if (!cardEl) return;

          const cardStartProgress = index * progressPerCard;
          const cardFullyVisibleProgress = cardStartProgress + progressPerCard * 0.3; // карточка полностью раскрыта на 30% прогресса
          const cardStaticEndProgress = cardStartProgress + progressPerCard * 0.7; // карточка остается статичной до 70%
          const nextCardStartProgress = (index + 1) * progressPerCard;
          const nextCardBlurStartProgress = nextCardStartProgress + progressPerCard * 0.4; // размытие начинается когда следующая на 40% раскрыта
          const nextCardFullyVisibleProgress = nextCardStartProgress + progressPerCard * 0.8; // следующая полностью раскрыта на 80%
          
          // Определяем состояние карточки
          if (scrollProgress < cardStartProgress) {
            // Карточка еще не появилась
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'translateY(100vh) scale(0.8)';
            cardEl.style.filter = 'blur(0px)';
            cardEl.style.zIndex = '1';
            cardEl.style.display = 'flex';
          } else if (scrollProgress >= cardStartProgress && scrollProgress < cardFullyVisibleProgress) {
            // Карточка появляется и раскрывается - плавно выползает
            const cardProgress = (scrollProgress - cardStartProgress) / (progressPerCard * 0.3);
            const translateY = (1 - cardProgress) * 100;
            const opacity = Math.min(1, cardProgress * 2);
            const scale = 0.8 + cardProgress * 0.2;
            
            cardEl.style.opacity = opacity.toString();
            cardEl.style.transform = `translateY(${translateY}vh) scale(${scale})`;
            cardEl.style.filter = 'blur(0px)';
            cardEl.style.zIndex = (1000 + index).toString();
            cardEl.style.display = 'flex';
          } else if (scrollProgress >= cardFullyVisibleProgress && scrollProgress < cardStaticEndProgress) {
            // Карточка полностью видна и статично зафиксирована - остается чёткой с запасом скрола
            cardEl.style.opacity = '1';
            cardEl.style.transform = 'translateY(0px) scale(1)';
            cardEl.style.filter = 'blur(0px)';
            cardEl.style.zIndex = (1000 + index).toString();
            cardEl.style.display = 'flex';
          } else if (scrollProgress >= cardStaticEndProgress && scrollProgress < nextCardBlurStartProgress) {
            // Следующая карточка начинает выползать, но текущая ещё чёткая
            cardEl.style.opacity = '1';
            cardEl.style.transform = 'translateY(0px) scale(1)';
            cardEl.style.filter = 'blur(0px)';
            cardEl.style.zIndex = (1000 - index).toString();
            cardEl.style.display = 'flex';
          } else if (scrollProgress >= nextCardBlurStartProgress && scrollProgress < nextCardFullyVisibleProgress) {
            // Следующая карточка накладывается - текущая начинает блюриться постепенно
            const blurProgress = (scrollProgress - nextCardBlurStartProgress) / (progressPerCard * 0.4);
            const blurAmount = blurProgress * 8;
            const opacity = 1 - blurProgress * 0.4;
            const scale = 1 - blurProgress * 0.03;
            
            cardEl.style.opacity = opacity.toString();
            cardEl.style.transform = `translateY(0px) scale(${scale})`;
            cardEl.style.filter = `blur(${blurAmount}px)`;
            cardEl.style.zIndex = (1000 - index).toString();
            cardEl.style.display = 'flex';
          } else {
            // Следующая карточка полностью раскрыта - текущая полностью скрыта
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'translateY(0px) scale(0.9)';
            cardEl.style.filter = 'blur(15px)';
            cardEl.style.zIndex = '1';
            cardEl.style.display = 'none';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Запускаем сразу

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[600vh] py-20"
      data-testid="stacked-amenities-container"
    >
      {/* Заголовок секции */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary font-display">
            Что вас ждёт в <br />
            La Villa Pine
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Уникальные виллы в стиле лофт с современным дизайном, где комфорт и уют сочетаются с природой
          </p>
        </div>
      </div>

      {/* Стопка карточек */}
      <div className="relative">
        {AMENITIES.map((amenity, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="sticky top-32 w-full h-screen flex items-center justify-center px-4 transition-all duration-700 ease-out"
            style={{
              opacity: 0,
              transform: 'translateY(100px) scale(0.9)',
              filter: 'blur(0px)',
            }}
            data-testid={`stacked-card-${index}`}
          >
            <div 
              className="w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => onImageClick(amenity.image)}
            >
              {/* Фоновое изображение */}
              <div className="relative w-full h-full">
                <DynamicImage
                  src={amenity.image}
                  fallbackSrc={amenity.fallbackImage}
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Контент карточки */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16">
                  {/* Иконка */}
                  <div className="mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <i className={`${amenity.icon} text-white text-2xl sm:text-3xl`}></i>
                    </div>
                  </div>
                  
                  {/* Заголовок */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-display">
                    {amenity.title}
                  </h3>
                  
                  {/* Описание */}
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl">
                    {amenity.description}
                  </p>
                  
                  {/* Декоративная линия */}
                  <div className="w-24 h-1 bg-white/60 rounded-full mt-8"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Узнать больше" в конце */}
      <div className="relative z-50 bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/about">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white border-2 border-accent hover:border-accent/90 transition-all duration-300 shadow-lg text-lg px-12 py-4"
              data-testid="button-learn-more"
            >
              Узнать больше
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}