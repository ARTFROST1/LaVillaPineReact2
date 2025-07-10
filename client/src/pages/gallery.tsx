import ImageGallery from "@/components/ui/image-gallery";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-display">Галерея</h1>
          <p className="text-xl text-gray-600">
            Исследуйте наши прекрасные гостевые дома и потрясающее природное окружение
          </p>
        </div>
        
        <ImageGallery images={GALLERY_IMAGES} />
      </div>
    </div>
  );
}
