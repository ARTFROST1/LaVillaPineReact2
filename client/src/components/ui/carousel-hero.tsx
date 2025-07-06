import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";



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

  // Компонент для слайда карусели с fallback изображениями
  const CarouselSlideImage = ({ src, fallbackSrc, alt }: { src: string; fallbackSrc: string; alt: string }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    
    useEffect(() => {
      const img = new Image();
      img.onload = () => setCurrentSrc(src);
      img.onerror = () => setCurrentSrc(fallbackSrc);
      img.src = src;
    }, [src, fallbackSrc]);

    return (
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentSrc})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval]);

  return (
    <div className="carousel-container w-full h-screen relative overflow-hidden">
      <div 
        className="carousel-track h-full flex" 
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="carousel-slide w-full h-full flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <CarouselSlideImage 
              src={image.url} 
              fallbackSrc={image.fallbackUrl || image.url}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white opacity-100 scale-125" : "bg-white opacity-60 hover:opacity-80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
