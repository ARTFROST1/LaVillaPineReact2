import ContactForm from "@/components/ui/contact-form";
import { SITE_CONFIG } from "@/lib/constants";

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
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <i className="fas fa-map-marked-alt text-4xl mb-2"></i>
                  <p className="font-semibold">Интеграция с Яндекс Картами</p>
                  <p className="text-sm">Интерактивная карта будет отображена здесь</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Следите за нами</h3>
              <div className="flex space-x-4">
                <a href={SITE_CONFIG.socialLinks.instagram} className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-200">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={SITE_CONFIG.socialLinks.facebook} className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-200">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={SITE_CONFIG.socialLinks.whatsapp} className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-200">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href={SITE_CONFIG.socialLinks.telegram} className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-200">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
