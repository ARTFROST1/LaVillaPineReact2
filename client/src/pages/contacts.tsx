import ContactForm from "@/components/ui/contact-form";
import PageMeta from "@/components/seo/PageMeta";
import { SITE_CONFIG } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-constants";
import AvitoIcon from "@/components/ui/avito-icon";
import YandexMap from "@/components/ui/yandex-map";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";

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
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: 'url(/images/gallery/10.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl font-display">
                Контакты
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Свяжитесь с нами удобным способом для бронирования или вопросов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Widgets Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }} className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phone Widget */}
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="contact-phone-widget"
              >
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-primary font-bold text-lg mb-1">Телефон</div>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-foreground font-semibold hover:text-primary transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Email Widget */}
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="contact-email-widget"
              >
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-primary font-bold text-lg mb-1">Email</div>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-foreground font-semibold hover:text-primary transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Location Widget */}
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="contact-location-widget"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-primary font-bold text-lg mb-1">Адрес</div>
                <div className="text-foreground font-semibold text-sm">
                  {SITE_CONFIG.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Map Section */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display text-center">Наше расположение</h2>
              <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
                Мы находимся в живописной курортной зоне Адыгеи, в окружении гор и лесов
              </p>
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
            
            {/* Social Media Section */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary font-display text-center">Мы в социальных сетях</h2>
              <div className="flex justify-center flex-wrap gap-6">
                <a 
                  href={SITE_CONFIG.socialLinks.instagram} 
                  className="group w-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  data-testid="social-instagram"
                >
                  <i className="fab fa-instagram text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.vk} 
                  className="group w-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="VKontakte"
                  data-testid="social-vk"
                >
                  <i className="fab fa-vk text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.whatsapp} 
                  className="group w-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  data-testid="social-whatsapp"
                >
                  <i className="fab fa-whatsapp text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.telegram} 
                  className="group w-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                  data-testid="social-telegram"
                >
                  <i className="fab fa-telegram text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.avito} 
                  className="group w-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.6), rgba(50, 42, 35, 0.5))',
                    border: '2px solid rgba(212, 164, 74, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Avito"
                  data-testid="social-avito"
                >
                  <AvitoIcon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              </div>
              <p className="text-sm mt-6 text-center font-light text-foreground/80">
                Следите за новостями и специальными предложениями
              </p>
            </section>
            
            {/* Contact Form Section */}
            <section className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]" style={{
              background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display text-center">Отправить сообщение</h2>
              <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время
              </p>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}