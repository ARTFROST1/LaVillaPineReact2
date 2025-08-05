import ImageGallery from "@/components/ui/image-gallery";
import PageMeta from "@/components/seo/PageMeta";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-constants";

export default function Gallery() {
  return (
    <div className="py-20 bg-secondary">
      <PageMeta
        title={SEO_PAGES.gallery.title}
        description={SEO_PAGES.gallery.description}
        keywords={SEO_PAGES.gallery.keywords}
        ogTitle={SEO_PAGES.gallery.ogTitle}
        ogDescription={SEO_PAGES.gallery.ogDescription}
        ogImage={SEO_PAGES.gallery.ogImage}
        canonical="https://lavillapine.onrender.com/gallery"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-display">
            Галерея
          </h1>
          <p className="text-xl text-gray-600">
            Посмотрите на фотографии наших гостевых домов и удобств
          </p>
        </div>

        <ImageGallery images={GALLERY_IMAGES} />
      </div>
    </div>
  );
}
