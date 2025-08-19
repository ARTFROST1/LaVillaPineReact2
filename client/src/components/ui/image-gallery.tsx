import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  url: string;
  fallbackUrl?: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Компонент для изображения галереи с fallback
  const GalleryImageComponent = ({ src, fallbackSrc, alt, className }: { 
    src: string; 
    fallbackSrc: string; 
    alt: string; 
    className?: string;
  }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    
    useEffect(() => {
      const img = new Image();
      img.onload = () => setCurrentSrc(src);
      img.onerror = () => setCurrentSrc(fallbackSrc);
      img.src = src;
    }, [src, fallbackSrc]);

    return (
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
    );
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <GalleryImageComponent
              src={image.url}
              fallbackSrc={image.fallbackUrl || image.url}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-150"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-150 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <i className="fas fa-expand text-2xl"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedImage !== null ? images[selectedImage].alt : "Изображение галереи"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Просмотр изображений галереи La Villa Pine. Используйте кнопки навигации для перехода между изображениями.
          </DialogDescription>
          {selectedImage !== null && (
            <div className="relative">
              <GalleryImageComponent
                src={images[selectedImage].url}
                fallbackSrc={images[selectedImage].fallbackUrl || images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
