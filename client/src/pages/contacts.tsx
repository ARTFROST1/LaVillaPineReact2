import ContactForm from "@/components/ui/contact-form";
import PageMeta from "@/components/seo/PageMeta";
import { SITE_CONFIG } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-constants";
import AvitoIcon from "@/components/ui/avito-icon";
import YandexMap from "@/components/ui/yandex-map";

export default function Contacts() {
  return (
    <div className="relative min-h-screen">
      <PageMeta 
        title={SEO_PAGES.contacts.title}
        description={SEO_PAGES.contacts.description}
        keywords={SEO_PAGES.contacts.keywords}
        ogTitle={SEO_PAGES.contacts.ogTitle}
        ogDescription={SEO_PAGES.contacts.ogDescription}
        ogImage={SEO_PAGES.contacts.ogImage}
        canonical="https://lavillapine.onrender.com/contacts"
      />
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/amenities/forest.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 text-primary font-bold font-display">Наши контакты</h1>
            <p className="text-lg font-light text-foreground/90">
              Свяжитесь с нами удобным способом, чтобы забронировать или задать вопрос
            </p>
          </div>
          
          {/* Content blocks */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 1. Contact Information */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary font-display">Контактная информация</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{
                    background: 'rgba(212, 164, 74, 0.2)',
                    border: '1px solid rgba(212, 164, 74, 0.3)'
                  }}>
                    <i className="fas fa-phone text-primary text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Телефон</p>
                    <p className="text-foreground font-semibold">{SITE_CONFIG.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{
                    background: 'rgba(212, 164, 74, 0.2)',
                    border: '1px solid rgba(212, 164, 74, 0.3)'
                  }}>
                    <i className="fas fa-envelope text-primary text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                    <p className="text-foreground font-semibold">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-address">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{
                    background: 'rgba(212, 164, 74, 0.2)',
                    border: '1px solid rgba(212, 164, 74, 0.3)'
                  }}>
                    <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Адрес</p>
                    <p className="text-foreground font-semibold text-sm">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* 2. Map */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Наше расположение</h2>
              <div className="rounded-xl overflow-hidden" style={{
                border: '1px solid rgba(212, 164, 74, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25)'
              }}>
                <YandexMap 
                  address={SITE_CONFIG.address}
                  className="w-full h-80"
                />
              </div>
            </section>
            
            {/* 3. Social Media */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary font-display">Мы в соцсетях</h2>
              <div className="flex justify-center flex-wrap gap-4">
                <a 
                  href={SITE_CONFIG.socialLinks.instagram} 
                  className="group w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  data-testid="social-instagram"
                >
                  <i className="fab fa-instagram text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.vk} 
                  className="group w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="VKontakte"
                  data-testid="social-vk"
                >
                  <i className="fab fa-vk text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.whatsapp} 
                  className="group w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  data-testid="social-whatsapp"
                >
                  <i className="fab fa-whatsapp text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.telegram} 
                  className="group w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                  data-testid="social-telegram"
                >
                  <i className="fab fa-telegram text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.avito} 
                  className="group w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Avito"
                  data-testid="social-avito"
                >
                  <AvitoIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              </div>
              <p className="text-sm mt-6 text-center font-light text-foreground/80">
                Подписывайтесь на наши страницы, чтобы быть в курсе новостей и специальных предложений
              </p>
            </section>
            
            {/* 4. Contact Form */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Отправить сообщение</h2>
              <p className="text-sm text-foreground/70 mb-6">
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время
              </p>
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
