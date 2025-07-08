import ContactForm from "@/components/ui/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import AvitoIcon from "@/components/ui/avito-icon";
import YandexMap from "@/components/ui/yandex-map";
import { Button } from "@/components/ui/button";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-primary to-primary/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Свяжитесь с нами
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Мы всегда готовы помочь вам организовать незабываемый отдых в La Villa Pine
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact CTA */}
      <div className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Нужна быстрая связь?
              </h2>
              <p className="text-gray-600 mb-8">
                Выберите удобный способ связи для мгновенного ответа
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group bg-gradient-to-br from-accent to-accent/90 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Позвонить</h3>
                <p className="text-white/90 text-sm">Прямой звонок</p>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-white/90 text-sm">Быстрые сообщения</p>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <i className="fab fa-telegram text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Telegram</h3>
                <p className="text-white/90 text-sm">Онлайн-чат</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - Full Width */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Отправить сообщение
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Заполните форму ниже, и мы свяжемся с вами в течение часа. 
                      Подробно опишите ваши пожелания, и мы поможем организовать идеальный отдых.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info and Map */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Контактная информация
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-phone text-accent text-lg"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Телефон</p>
                        <a 
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-gray-600 hover:text-accent transition-colors"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-envelope text-accent text-lg"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <a 
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-gray-600 hover:text-accent transition-colors"
                        >
                          {SITE_CONFIG.email}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Отвечаем в течение 2 часов</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-map-marker-alt text-accent text-lg"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Адрес</p>
                        <p className="text-gray-600 leading-relaxed">
                          {SITE_CONFIG.address}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Республика Адыгея</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Как нас найти
                  </h3>
                  <div className="rounded-2xl overflow-hidden shadow-inner">
                    <YandexMap
                      address={SITE_CONFIG.address}
                      className="w-full h-64"
                    />
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>Как добраться:</strong> От Майкопа 45 км по трассе А159, 
                      поворот на посёлок Тульский. Подробные инструкции отправим после бронирования.
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Мы в социальных сетях
                  </h3>
                  <div className="grid grid-cols-5 gap-4 mb-6">
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
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Подписывайтесь на наши страницы для получения эксклюзивных предложений, 
                    новостей и красивых фотографий нашего комплекса.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-gray-600">
                Ответы на самые популярные вопросы наших гостей
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Как забронировать проживание?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Вы можете забронировать через наш сайт, позвонив по телефону или написав в WhatsApp/Telegram. 
                  Подтверждение бронирования происходит мгновенно.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Какое время заезда и выезда?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Заезд с 15:00, выезд до 12:00. При необходимости можно договориться о раннем заезде 
                  или позднем выезде за дополнительную плату.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Можно ли приехать с домашними животными?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, мы принимаем гостей с домашними животными. Необходимо предварительно согласовать 
                  и доплатить за уборку. Животные должны быть вакцинированы.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Что включено в стоимость?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  В стоимость включено: проживание, пользование сауной и бассейном, WiFi, парковка, 
                  базовые туалетные принадлежности и полотенца.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
