import ContactForm from "@/components/ui/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import AvitoIcon from "@/components/ui/avito-icon";
import YandexMap from "@/components/ui/yandex-map";

export default function Contacts() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Связаться с нами</h1>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами, чтобы забронировать проживание или задать любые вопросы о наших гостевых домах
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-neutral p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-phone text-accent text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-accent text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-accent text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div className="bg-neutral p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Расположение</h3>
              <YandexMap 
                address={SITE_CONFIG.address}
                className="w-full h-64"
              />
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-medium mb-8 text-primary tracking-wide">Следите за нами</h3>
              <div className="grid grid-cols-5 gap-3">
                <a 
                  href={SITE_CONFIG.socialLinks.instagram} 
                  className="group relative w-14 h-14 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300 flex items-center justify-center bg-white hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-xl text-gray-600 group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.vk} 
                  className="group relative w-14 h-14 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300 flex items-center justify-center bg-white hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="VKontakte"
                >
                  <i className="fab fa-vk text-xl text-gray-600 group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.whatsapp} 
                  className="group relative w-14 h-14 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300 flex items-center justify-center bg-white hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-xl text-gray-600 group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.telegram} 
                  className="group relative w-14 h-14 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300 flex items-center justify-center bg-white hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                >
                  <i className="fab fa-telegram text-xl text-gray-600 group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href={SITE_CONFIG.socialLinks.avito} 
                  className="group relative w-14 h-14 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300 flex items-center justify-center bg-white hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Avito"
                >
                  <AvitoIcon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                Подписывайтесь на наши страницы, чтобы быть в курсе новостей и специальных предложений
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
