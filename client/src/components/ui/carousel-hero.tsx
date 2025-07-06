import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  url: string;
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
    <div className="carousel-container w-full h-screen relative">
      <div className="carousel-track h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-opacity duration-200 ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
