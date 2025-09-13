import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string; // Применяется к wrapper div
  imgClassName?: string; // Применяется к img элементу
  style?: React.CSSProperties;
  priority?: boolean; // Для критических изображений, которые должны загружаться сразу
  rootMargin?: string; // Margin для Intersection Observer
  threshold?: number; // Threshold для Intersection Observer
  onLoad?: () => void;
  onError?: () => void;
  'data-testid'?: string;
}

export default function LazyImage({
  src,
  fallbackSrc,
  alt,
  className = '',
  imgClassName = '',
  style,
  priority = false,
  rootMargin = '50px',
  threshold = 0.1,
  onLoad,
  onError,
  'data-testid': testId
}: LazyImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | null>(priority ? src : null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer для lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority, rootMargin, threshold]);

  // Загрузка изображения когда элемент виден
  useEffect(() => {
    if (!isInView || currentSrc) return;

    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
      setHasError(false);
      onLoad?.();
    };

    img.onerror = () => {
      // Пробуем fallback изображение
      const fallbackImg = new Image();
      
      fallbackImg.onload = () => {
        setCurrentSrc(fallbackSrc);
        setIsLoading(false);
        setHasError(false);
        onLoad?.();
      };
      
      fallbackImg.onerror = () => {
        setCurrentSrc(fallbackSrc);
        setIsLoading(false);
        setHasError(true);
        onError?.();
      };

      fallbackImg.src = fallbackSrc;
    };

    img.src = src;
  }, [isInView, src, fallbackSrc, currentSrc, onLoad, onError]);

  // Обработка ошибок загрузки на самом img элементе
  const handleImgError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
      onError?.();
    }
  };

  const handleImgLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div 
      ref={imgRef}
      className={`relative ${className}`} 
      style={style}
      data-testid={testId}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded"
          style={{
            background: 'linear-gradient(90deg, rgba(229, 231, 235, 0.8) 25%, rgba(209, 213, 219, 0.8) 50%, rgba(229, 231, 235, 0.8) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      
      {/* Actual image */}
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${imgClassName}`}
          onLoad={handleImgLoad}
          onError={handleImgError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Error state (optional) */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Изображение недоступно</div>
          </div>
        </div>
      )}
    </div>
  );
}

// CSS анимация для shimmer эффекта (должна быть добавлена в глобальные стили)
export const shimmerCSS = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;