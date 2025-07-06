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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, images.length]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Показываем только одно изображение в каждый момент времени */}
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Если основное изображение не загрузилось, используем fallback
              if (image.fallbackUrl && e.currentTarget.src !== image.fallbackUrl) {
                e.currentTarget.src = image.fallbackUrl;
              }
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}
      
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
