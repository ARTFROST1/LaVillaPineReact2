import ImageGallery from "@/components/ui/image-gallery";
import PageMeta from "@/components/seo/PageMeta";
import StructuredData from "@/components/seo/StructuredData";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-constants";

export default function Gallery() {
  return (
    <div className="pt-32 pb-20" style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 -8px 32px rgba(0, 0, 0, 0.25), 0 8px 32px rgba(0, 0, 0, 0.25)'
      }}>
      <PageMeta
        title={SEO_PAGES.gallery.title}
        description={SEO_PAGES.gallery.description}
        keywords={SEO_PAGES.gallery.keywords}
        ogTitle={SEO_PAGES.gallery.ogTitle}
        ogDescription={SEO_PAGES.gallery.ogDescription}
        ogImage={SEO_PAGES.gallery.ogImage}
        canonical="https://lavillapine.onrender.com/gallery"
      />
      <StructuredData type="page" pageName="Галерея" pageUrl="/gallery" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-display">
            Галерея
          </h1>
          <p className="text-xl text-foreground/80">
            Посмотрите на фотографии наших гостевых домов и удобств
          </p>
        </div>

        <ImageGallery images={GALLERY_IMAGES} />
      </div>
    </div>
  );
}
