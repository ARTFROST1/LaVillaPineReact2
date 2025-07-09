import ContactForm from "@/components/ui/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import AvitoIcon from "@/components/ui/avito-icon";
import YandexMap from "@/components/ui/yandex-map";

export default function Contacts() {
  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/amenities/forest.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground font-bold">Связаться с нами</h1>
            <p className="text-lg text-muted-foreground font-light">
              Свяжитесь с нами, чтобы забронировать проживание или задать любые вопросы
            </p>
          </div>
          
          {/* Content blocks */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 1. Contact Information */}
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/20 shadow-xl">
              <h2 className="text-2xl font-light mb-8 text-foreground">Контактная информация</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-accent text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Телефон</p>
                    <p className="text-foreground font-medium">{SITE_CONFIG.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-accent text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                    <p className="text-foreground font-medium">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-accent text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Адрес</p>
                    <p className="text-foreground font-medium">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2. Map */}
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/20 shadow-xl">
              <h2 className="text-2xl font-light mb-6 text-foreground">Расположение</h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <YandexMap 
                  address={SITE_CONFIG.address}
                  className="w-full h-80"
                />
              </div>
            </div>
            
            {/* 3. Social Media */}
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/20 shadow-xl">
              <h2 className="text-2xl font-light mb-8 text-foreground">Следите за нами</h2>
              <div className="flex justify-center space-x-4">
                <a 
                  href={SITE_CONFIG.socialLinks.instagram} 
                  className="group w-14 h-14 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 flex items-center justify-center bg-background hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-xl text-muted-foreground group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.vk} 
                  className="group w-14 h-14 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 flex items-center justify-center bg-background hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="VKontakte"
                >
                  <i className="fab fa-vk text-xl text-muted-foreground group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.whatsapp} 
                  className="group w-14 h-14 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 flex items-center justify-center bg-background hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-xl text-muted-foreground group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.telegram} 
                  className="group w-14 h-14 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 flex items-center justify-center bg-background hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                >
                  <i className="fab fa-telegram text-xl text-muted-foreground group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.avito} 
                  className="group w-14 h-14 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 flex items-center justify-center bg-background hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Avito"
                >
                  <AvitoIcon className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center font-light">
                Подписывайтесь на наши страницы, чтобы быть в курсе новостей и специальных предложений
              </p>
            </div>
            
            {/* 4. Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/20 shadow-xl">
              <h2 className="text-2xl font-light mb-6 text-foreground">Отправить сообщение</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
