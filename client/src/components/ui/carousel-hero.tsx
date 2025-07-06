import { useState, useEffect } from "react";

interface CarouselImage {
  url: string;
  fallbackUrl?: string;
  alt: string;
}

interface CarouselHeroProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function CarouselHero({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: CarouselHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Предзагрузка изображений
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((image, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, index]));
            resolve();
          };
          img.onerror = () => {
            // Если основное изображение не загрузилось, пробуем fallback
            if (image.fallbackUrl) {
              const fallbackImg = new Image();
              fallbackImg.onload = () => {
                setLoadedImages(prev => new Set([...prev, index]));
                resolve();
              };
              fallbackImg.onerror = () => resolve();
              fallbackImg.src = image.fallbackUrl;
            } else {
              resolve();
            }
          };
          img.src = image.url;
        });
      });
      
      await Promise.all(promises);
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (autoPlay && images.length > 1 && loadedImages.size > 0) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, images.length, loadedImages.size]);

  const getImageSrc = (image: CarouselImage, index: number) => {
    if (loadedImages.has(index)) {
      return image.url;
    }
    return image.fallbackUrl || image.url;
  };

  return (
    <div className="carousel-container w-full h-screen relative overflow-hidden">
      <div 
        className="carousel-track h-full flex transition-transform duration-700 ease-in-out" 
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="carousel-slide w-full h-full flex-shrink-0 relative"
            style={{ width: `${100 / images.length}%` }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${getImageSrc(image, index)})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white opacity-100 scale-125" : "bg-white opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
