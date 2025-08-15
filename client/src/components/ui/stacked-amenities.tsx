import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AMENITIES } from "@/lib/constants";
import { useScrollContext } from "@/contexts/scroll-context";
import DynamicImage from "./dynamic-image";

// Настройка момента скрытия заголовка (0.0 - 1.0)
// 0.0 = скрывать сразу при появлении карточки парковки
// 0.5 = скрывать когда карточка парковки наполовину появилась
// 1.0 = скрывать только когда карточка парковки полностью появилась
const HEADER_HIDE_DELAY = -0.9;

interface StackedAmenitiesProps {
  onImageClick: (imageUrl: string) => void;
}

export default function StackedAmenities({ onImageClick }: StackedAmenitiesProps) {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const isAnimating = useRef(false);
  const { setIsInAmenitiesSection } = useScrollContext();

  // Оптимизированная функция обновления анимации с requestAnimationFrame для плавности
  const updateAnimation = useCallback(() => {
    if (!containerRef.current) {
      isAnimating.current = false;
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    const viewportHeight = window.innerHeight;

    // Начинаем анимацию когда контейнер входит в область видимости
    if (containerTop < viewportHeight && containerTop + containerHeight > 0) {
      // Пользователь находится в секции достоинств - скрываем Яндекс рейтинг
      setIsInAmenitiesSection(true);
      
      // Рассчитываем прогресс скролла более точно
      const scrollableHeight = containerHeight - viewportHeight;
      const scrolled = Math.max(0, viewportHeight - containerTop);
      const scrollProgress = Math.min(1, scrolled / scrollableHeight);

      // Определяем какие карточки должны быть активными
      const totalCards = AMENITIES.length;
      const progressPerCard = 1 / totalCards;
      
      // Проверяем, доскроллил ли пользователь до блока "Наша галерея"
      // Ищем элемент с заголовком "Наша галерея"
      const gallerySection = document.evaluate("//h2[contains(text(), 'Наша галерея')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;
      
      if (gallerySection) {
        const galleryRect = gallerySection.getBoundingClientRect();
        const galleryTop = galleryRect.top;
        
        // Заголовок исчезает когда блок "Наша галерея" входит в область видимости
        // Настройте значение 0.9 для изменения момента исчезновения заголовка
        if (galleryTop <= viewportHeight * 0.9) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      } else {
        // Если блок не найден, используем прогресс скролла как fallback
        // Заголовок исчезает после прохождения 85% контента достоинств
        if (scrollProgress >= 0.85) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      }
      
      cardRefs.current.forEach((cardEl, index) => {
        if (!cardEl) return;

        const cardStartProgress = index * progressPerCard;
        const cardEndProgress = (index + 1) * progressPerCard;
        const nextCardStartProgress = (index + 1) * progressPerCard;
        const isLastCard = index === totalCards - 1;
        
        // Определяем состояние карточки
        // Базовый z-index: более поздние карточки имеют больший z-index
        const baseZIndex = 1000 + index;
        
        if (scrollProgress < cardStartProgress) {
          // Карточка еще не появилась
          cardEl.style.opacity = '0';
          cardEl.style.transform = 'translateY(100vh) scale(0.8) translateZ(0)';
          cardEl.style.filter = 'blur(0px)';
          cardEl.style.zIndex = baseZIndex.toString();
        } else if (scrollProgress >= cardStartProgress && scrollProgress < cardEndProgress) {
          // Карточка появляется и раскрывается - всегда чёткая
          const cardProgress = (scrollProgress - cardStartProgress) / progressPerCard;
          const translateY = (1 - cardProgress) * 100;
          const opacity = Math.min(1, cardProgress * 2);
          const scale = 0.8 + cardProgress * 0.2;
          
          cardEl.style.opacity = opacity.toString();
          cardEl.style.transform = `translateY(${translateY}vh) scale(${scale}) translateZ(0)`;
          cardEl.style.filter = 'blur(0px)'; // Всегда чёткая во время раскрытия
          cardEl.style.zIndex = baseZIndex.toString();
        } else if (isLastCard) {
          // Последняя карточка - остается четкой и видимой всегда после полного раскрытия
          cardEl.style.opacity = '1';
          cardEl.style.transform = 'translateY(0px) scale(1) translateZ(0)';
          cardEl.style.filter = 'blur(0px)';
          cardEl.style.zIndex = baseZIndex.toString();
        } else if (scrollProgress >= cardEndProgress && scrollProgress < nextCardStartProgress) {
          // Карточка полностью раскрыта и зафиксирована - остается чёткой
          cardEl.style.opacity = '1';
          cardEl.style.transform = 'translateY(0px) scale(1) translateZ(0)';
          cardEl.style.filter = 'blur(0px)'; // Остается чёткой пока следующая не начнет появляться
          cardEl.style.zIndex = baseZIndex.toString();
        } else {
          // Следующая карточка начала появляться - эта начинает блюриться, потом исчезает
          const nextCardProgress = (scrollProgress - nextCardStartProgress) / progressPerCard;
          
          // НАСТРОЙКИ ЭФФЕКТОВ (изменяйте эти значения для настройки анимации):
          // blurThreshold - когда начинается размытие
          const blurThreshold = 0.8;
          
          // hideThreshold - когда карточка полностью скрывается
          // Для предпоследней карточки используем более низкий порог
          const hideThreshold = 1.6;
          
          if (nextCardProgress < blurThreshold) {
            // Карточка еще четкая - следующая карточка появилась меньше чем на 30%
            cardEl.style.opacity = '1';
            cardEl.style.transform = 'translateY(0px) scale(1) translateZ(0)';
            cardEl.style.filter = 'blur(0px)';
            cardEl.style.zIndex = baseZIndex.toString();
          } else if (nextCardProgress < hideThreshold) {
            // Карточка размывается - между 30% и 70% появления следующей
            const adjustedProgress = (nextCardProgress - blurThreshold) / (hideThreshold - blurThreshold);
            
            const blurAmount = Math.min(8, adjustedProgress * 8);
            const opacity = Math.max(0.3, 1 - adjustedProgress * 0.7);
            const scale = Math.max(0.85, 1 - adjustedProgress * 0.05);
            
            cardEl.style.opacity = opacity.toString();
            cardEl.style.transform = `translateY(0px) scale(${scale}) translateZ(0)`;
            cardEl.style.filter = `blur(${blurAmount}px)`;
            cardEl.style.zIndex = baseZIndex.toString();
          } else {
            // Карточка полностью скрыта - следующая карточка появилась больше чем на 70%
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'translateY(0px) scale(0.9) translateZ(0)';
            cardEl.style.filter = 'blur(10px)';
            cardEl.style.zIndex = baseZIndex.toString();
          }
        }
      });
    } else {
      // Пользователь вышел из секции достоинств - показываем Яндекс рейтинг обратно
      setIsInAmenitiesSection(false);
    }
    
    isAnimating.current = false;
  }, []);

  // Оптимизированный обработчик скролла с requestAnimationFrame для плавности
  const handleScroll = useCallback(() => {
    // Отменяем предыдущий запрос анимации если он есть
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    
    // Запланируем обновление анимации на следующий кадр для плавности
    if (!isAnimating.current) {
      isAnimating.current = true;
      animationFrameId.current = requestAnimationFrame(updateAnimation);
    }
  }, [updateAnimation]);

  useEffect(() => {
    // Обработчики событий с улучшенными настройками для плавности
    const scrollOptions = { 
      passive: true,
      capture: false
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll, scrollOptions);
    
    // Запускаем начальное обновление
    updateAnimation();

    return () => {
      // Очищаем обработчики и анимации
      window.removeEventListener('scroll', handleScroll);
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll, updateAnimation]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[600vh] py-20"
      data-testid="stacked-amenities-container"
      style={{
        // Улучшаем производительность скролла на мобильных устройствах
        willChange: 'transform',
        transform: 'translateZ(0)', // Включаем аппаратное ускорение
        // Добавляем специальные CSS свойства для мобильных устройств
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'contain',
      }}
    >
      {/* Заголовок секции с параллакс эффектом */}
      <div 
        ref={headerRef}
        className={`sticky top-16 z-50 transition-opacity duration-500 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // Аппаратное ускорение
        }}
      >
        <div className="container mx-auto px-4 text-center py-8 backdrop-blur-sm bg-background/80 rounded-xl mx-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground font-display">
            Что вас ждёт в <br />
            La Villa Pine
          </h2>
        </div>
      </div>

      {/* Стопка карточек */}
      <div className="relative">
        {AMENITIES.map((amenity, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="sticky top-32 w-full h-screen flex items-center justify-center px-4"
            style={{
              opacity: 0,
              transform: 'translateY(100px) scale(0.9) translateZ(0)', // Комбинируем трансформации
              filter: 'blur(0px)',
              // Улучшаем производительность анимации
              willChange: 'transform, opacity, filter',
              transition: 'none', // Убираем CSS переходы в пользу JS анимации
            }}
            data-testid={`stacked-card-${index}`}
          >
            <div 
              className="w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl group"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
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
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16 pb-16 sm:pb-20 md:pb-24">
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
                  <div className="w-24 h-1 bg-transparent rounded-full mt-8"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}