import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

interface BookingDateNoticeProps {
  variant?: "home" | "booking";
  className?: string;
}

export default function BookingDateNotice({
  variant = "home",
  className = "",
}: BookingDateNoticeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Запускаем анимацию появления через небольшую задержку
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`booking-date-notice relative overflow-hidden ${className}`}
      style={{
        transform: `translateY(${isVisible ? 0 : 20}px)`,
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Главный контейнер */}
      <div
        className="relative px-6 py-4 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.8) 0%, rgba(25, 21, 17, 0.7) 50%, rgba(35, 29, 22, 0.85) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 164, 74, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Декоративный градиентный акцент */}
        <div 
          className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(212, 164, 74, 0.8) 50%, transparent 100%)'
          }}
        />

        {/* Основной контент */}
        <div className="flex items-start space-x-4">
          {/* Иконка */}
          <div 
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 164, 74, 0.15) 0%, rgba(212, 164, 74, 0.05) 100%)',
              border: '1px solid rgba(212, 164, 74, 0.3)'
            }}
          >
            <Phone 
              className="w-5 h-5" 
              style={{ color: '#D4A44A' }}
            />
          </div>

          {/* Текстовый контент */}
          <div className="flex-1 space-y-2">
            <h3 className="text-sm font-semibold text-foreground tracking-wide">
              Бронирование
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Свяжитесь с нами любым удобным способом для бронирования
            </p>
          </div>
        </div>

        {/* Кнопки связи */}
        <div className="flex items-center justify-center space-x-3 mt-4 pt-3 border-t border-white/5">
          <button 
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(212, 164, 74, 0.1)',
              border: '1px solid rgba(212, 164, 74, 0.2)',
              color: '#D4A44A'
            }}
            onClick={() => window.open('tel:+79184471103')}
            data-testid="phone-button"
          >
            <Phone className="w-3 h-3" />
            <span>Телефон</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              color: '#22c55e'
            }}
            onClick={() => window.open('https://wa.me/79184471103')}
            data-testid="whatsapp-button"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              color: '#3b82f6'
            }}
            onClick={() => window.open('mailto:info@lavillapine.ru')}
            data-testid="email-button"
          >
            <Mail className="w-3 h-3" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  );
}