import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Booking() {
  return (
    <div className="py-20 relative">
      {/* Forest background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Забронировать проживание</h1>
          <p className="text-xl text-gray-200">
            Забронируйте свой идеальный отдых в La Villa Pine уже сегодня
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Модуль бронирования</h3>
            
            {/* Third-party booking module placeholder */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <i className="fas fa-calendar-alt text-4xl text-gray-400 mb-4"></i>
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Интеграция стороннего модуля бронирования</h4>
              <p className="text-gray-500 mb-4">
                В этой области будет размещен код стороннего модуля бронирования
              </p>
              <div className="text-sm text-gray-400">
                <p>Зона интеграции для:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Календарь выбора дат</li>
                  <li>Выбор дома (Дом 1 или Дом 2)</li>
                  <li>Форма информации о гостях</li>
                  <li>Обработка платежей</li>
                  <li>Подтверждение бронирования</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Нужна помощь с бронированием? Свяжитесь с нами напрямую:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacts">
                  <Button className="bg-accent hover:bg-white hover:text-accent text-white border-2 border-accent hover:border-accent transition-all duration-300 shadow-lg">
                    <i className="fas fa-envelope mr-2"></i>
                    Связаться с нами
                  </Button>
                </Link>
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg">
                    <i className="fas fa-phone mr-2"></i>
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
