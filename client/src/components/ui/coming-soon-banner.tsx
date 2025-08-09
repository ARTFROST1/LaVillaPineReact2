import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Instagram, MessageCircle } from "lucide-react";
import { FaVk, FaWhatsapp, FaTelegram } from "react-icons/fa";
import AvitoIcon from "@/components/ui/avito-icon";
import { useDynamicContrast } from "@/hooks/useDynamicContrast";

interface ComingSoonBannerProps {
  variant?: "home" | "booking";
  className?: string;
}

export default function ComingSoonBanner({
  variant = "home",
  className = "",
}: ComingSoonBannerProps) {
  const isHomePage = variant === "home";
  
  // Use dynamic contrast hook for liquid glass styling
  const { textColor } = useDynamicContrast({
    headerSelector: '.coming-soon-banner',
    threshold: 128,
    currentPath: '/'
  });

  // Dynamic text color classes - solid colors only like in header
  const dynamicTextClass = textColor === 'light' ? 'text-white' : 'text-black';
  const accentClass = textColor === 'light' ? 'text-yellow-400' : 'text-yellow-600';
  
  // Dynamic border style for liquid glass effect
  const dynamicBorderStyle = textColor === 'light' 
    ? { '--border-color': 'rgba(255, 255, 255, 0.15)', '--border-hover-color': 'rgba(255, 255, 255, 0.4)' }
    : { '--border-color': 'rgba(0, 0, 0, 0.15)', '--border-hover-color': 'rgba(0, 0, 0, 0.4)' };

  return (
    <div
      className={`coming-soon-banner liquid-glass-banner ${isHomePage ? "liquid-glass-banner-home" : "liquid-glass-banner-page"} ${className}`}
      style={dynamicBorderStyle as React.CSSProperties}
    >
      <div className="text-center">
        <div className="mb-4 sm:mb-6">
          <Calendar
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 ${accentClass}`}
          />
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${dynamicTextClass}`}
          >
            Скоро открытие!
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl mb-2 ${dynamicTextClass}`}
          >
            Мы начинаем принимать брони
          </p>
          <p
            className={`text-lg sm:text-xl md:text-2xl font-semibold ${accentClass}`}
          >
            C 20 августа 2025
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <p
            className={`text-sm sm:text-base md:text-lg mb-3 sm:mb-4 ${dynamicTextClass}`}
          >
            Узнайте первыми о нашем открытии и специальных предложениях
          </p>
          <p
            className={`text-xs sm:text-sm md:text-base ${dynamicTextClass}`}
          >
            Подпишитесь на наши социальные сети или напишите нам в директ
          </p>
        </div>

        {/* Social Media Links with Liquid Glass Style */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          <a
            href="https://www.instagram.com/lavillapine/"
            target="_blank"
            rel="noopener noreferrer"
            className={`liquid-glass-social-link ${dynamicTextClass}`}
            style={dynamicBorderStyle as React.CSSProperties}
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Instagram</span>
          </a>

          <a
            href="https://vk.com/lavillapine"
            target="_blank"
            rel="noopener noreferrer"
            className={`liquid-glass-social-link ${dynamicTextClass}`}
            style={dynamicBorderStyle as React.CSSProperties}
          >
            <FaVk className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>VK</span>
          </a>

          <a
            href="https://wa.me/79999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`liquid-glass-social-link ${dynamicTextClass}`}
            style={dynamicBorderStyle as React.CSSProperties}
          >
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://t.me/lavillapine"
            target="_blank"
            rel="noopener noreferrer"
            className={`liquid-glass-social-link ${dynamicTextClass}`}
            style={dynamicBorderStyle as React.CSSProperties}
          >
            <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Telegram</span>
          </a>

          <a
            href="https://www.avito.ru/user/lavillapine"
            target="_blank"
            rel="noopener noreferrer"
            className={`liquid-glass-social-link ${dynamicTextClass}`}
            style={dynamicBorderStyle as React.CSSProperties}
          >
            <AvitoIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Avito</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/contacts">
            <button 
              className={`liquid-glass-button-primary ${dynamicTextClass}`}
              style={dynamicBorderStyle as React.CSSProperties}
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Связаться с нами
            </button>
          </Link>

          <Link href="/about">
            <button 
              className={`liquid-glass-button-secondary ${dynamicTextClass}`}
              style={dynamicBorderStyle as React.CSSProperties}
            >
              Узнать больше
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
