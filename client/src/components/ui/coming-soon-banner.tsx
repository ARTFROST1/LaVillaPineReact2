import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Instagram, MessageCircle } from "lucide-react";
import { FaVk, FaWhatsapp, FaTelegram } from "react-icons/fa";
import AvitoIcon from "@/components/ui/avito-icon";

interface ComingSoonBannerProps {
  variant?: "home" | "booking";
  className?: string;
}

export default function ComingSoonBanner({
  variant = "home",
  className = "",
}: ComingSoonBannerProps) {
  const isHomePage = variant === "home";

  return (
    <div
      className={`backdrop-blur-md rounded-xl shadow-2xl p-8 ${isHomePage ? "bg-white/10" : "bg-white/95"} ${className}`}
    >
      <div className="text-center">
        <div className="mb-6">
          <Calendar
            className={`w-12 h-12 mx-auto mb-4 ${isHomePage ? "text-accent" : "text-primary"}`}
          />
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${isHomePage ? "text-white" : "text-primary"}`}
          >
            Скоро открытие!
          </h2>
          <p
            className={`text-lg md:text-xl mb-2 ${isHomePage ? "text-gray-100" : "text-gray-700"}`}
          >
            Мы начинаем принимать брони
          </p>
          <p
            className={`text-xl md:text-2xl font-semibold ${isHomePage ? "text-accent" : "text-primary"}`}
          >
            C 20 августа 2025
          </p>
        </div>

        <div className="mb-8">
          <p
            className={`text-base md:text-lg mb-4 ${isHomePage ? "text-gray-200" : "text-gray-600"}`}
          >
            Узнайте первыми о нашем открытии и специальных предложениях
          </p>
          <p
            className={`text-sm md:text-base ${isHomePage ? "text-gray-300" : "text-gray-500"}`}
          >
            Подпишитесь на наши социальные сети или напишите нам в директ
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/lavillapine/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isHomePage
                ? "bg-white/20 hover:bg-white/30 text-white hover:text-accent"
                : "bg-primary hover:bg-accent text-white"
            }`}
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>

          <a
            href="https://vk.com/lavillapine"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isHomePage
                ? "bg-white/20 hover:bg-white/30 text-white hover:text-accent"
                : "bg-primary hover:bg-accent text-white"
            }`}
          >
            <FaVk className="w-5 h-5" />
            <span>VK</span>
          </a>

          <a
            href="https://wa.me/79999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isHomePage
                ? "bg-white/20 hover:bg-white/30 text-white hover:text-accent"
                : "bg-primary hover:bg-accent text-white"
            }`}
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://t.me/lavillapine"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isHomePage
                ? "bg-white/20 hover:bg-white/30 text-white hover:text-accent"
                : "bg-primary hover:bg-accent text-white"
            }`}
          >
            <FaTelegram className="w-5 h-5" />
            <span>Telegram</span>
          </a>

          <a
            href="https://www.avito.ru/user/lavillapine"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isHomePage
                ? "bg-white/20 hover:bg-white/30 text-white hover:text-accent"
                : "bg-primary hover:bg-accent text-white"
            }`}
          >
            <AvitoIcon className="w-5 h-5" />
            <span>Avito</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacts">
            <Button
              className={`${
                isHomePage
                  ? "bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white"
                  : "bg-accent hover:bg-primary text-white"
              } transition-all duration-300 shadow-md w-full sm:w-auto`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Связаться с нами
            </Button>
          </Link>

          <Link href="/about">
            <Button
              variant="outline"
              className={`${
                isHomePage
                  ? "bg-white/10 border-accent text-white hover:bg-white hover:border-white hover:text-primary backdrop-blur-sm"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              } transition-all duration-300 w-full sm:w-auto`}
            >
              Узнать больше
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
