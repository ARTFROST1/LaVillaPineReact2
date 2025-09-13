import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  className?: string;
  parallaxSpeed?: number;
  mobileBackgroundPosition?: string;
}

export function ParallaxSection({
  children,
  backgroundImage,
  className = '',
  parallaxSpeed = 0.3,
  mobileBackgroundPosition = 'center 30%'
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем предпочтения движения
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Проверяем размер экрана
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Intersection Observer для оптимизации производительности
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    const updateParallax = () => {
      const background = backgroundRef.current;
      const section = sectionRef.current;
      if (!background || !section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      
      // Вычисляем относительное смещение секции относительно viewport
      const relativeOffset = -rect.top;
      
      // Ограничиваем диапазон параллакса чтобы избежать пробелов в фоне
      const maxOffset = sectionHeight * parallaxSpeed * 0.5;
      const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, relativeOffset * parallaxSpeed));
      
      background.style.transform = `translate3d(0, ${clampedOffset}px, 0)`;
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax(); // Начальная позиция

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallaxSpeed, prefersReducedMotion, isInView]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        minHeight: isMobile ? '100svh' : 'auto',
        height: isMobile ? '100dvh' : 'auto'
      }}
      data-testid="parallax-section"
    >
      {/* Фоновый слой */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: isMobile ? mobileBackgroundPosition : 'center',
          // Расширяем фон для параллакс эффекта (увеличенный буфер)
          transform: 'translate3d(0, 0, 0)',
          top: '-30%',
          height: '160%'
        }}
        data-testid="parallax-background"
      />
      
      {/* Контент */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
}