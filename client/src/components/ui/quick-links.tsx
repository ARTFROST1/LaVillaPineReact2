import { Link } from "wouter";
import { Home, Image, Calendar, Phone, FileText, Map } from "lucide-react";

const quickLinks = [
  {
    name: "О нас",
    href: "/about",
    description: "История и философия нашей виллы",
    icon: Home,
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    name: "Галерея",
    href: "/gallery",
    description: "Фотографии интерьеров и территории",
    icon: Image,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    name: "Бронирование",
    href: "/booking",
    description: "Забронировать проживание онлайн",
    icon: Calendar,
    color: "from-green-500/20 to-green-600/20"
  },
  {
    name: "Контакты",
    href: "/contacts",
    description: "Связаться с нами и найти на карте",
    icon: Phone,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    name: "Правила",
    href: "/rules",
    description: "Условия проживания и правила",
    icon: FileText,
    color: "from-red-500/20 to-red-600/20"
  }
];

export default function QuickLinks() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Изучите La Villa Pine
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Быстрый доступ к основным разделам нашего сайта
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group"
              >
                <div 
                  className="relative h-full p-6 rounded-lg border border-white/10 bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.5) 100%)`,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${link.color} backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      {link.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 rounded-lg transition-all duration-300"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Нужна помощь? <Link href="/contacts" className="text-primary hover:underline">Свяжитесь с нами</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
