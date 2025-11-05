import PageMeta from "@/components/seo/PageMeta";
import { SEO_PAGES } from "@/lib/seo-constants";
import {
  Clock,
  Users,
  Volume2,
  Cigarette,
  Car,
  Utensils,
  Shield,
  AlertTriangle,
  Baby,
  TreePine,
  Flame,
  Home,
  Phone,
  HelpCircle,
  MapPin,
  ShoppingBag,
  ChefHat,
  ClipboardCheck,
  Package,
  AlertCircle,
  Ban,
  Check,
  DollarSign,
  Calendar,
  Waves,
  Thermometer,
  Dog,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

export default function Rules() {
  return (
    <div className="relative min-h-screen">
      <PageMeta
        title={SEO_PAGES.rules.title}
        description={SEO_PAGES.rules.description}
        keywords={SEO_PAGES.rules.keywords}
        ogTitle={SEO_PAGES.rules.ogTitle}
        ogDescription={SEO_PAGES.rules.ogDescription}
        ogImage={SEO_PAGES.rules.ogImage}
        canonical="https://lavillapine.onrender.com/rules"
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
          style={{
            backgroundImage: "url(/images/gallery/13.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl font-display">
                Правила проживания
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Для комфортного проживания всех гостей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info widgets */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(212, 164, 74, 0.15)",
          borderBottom: "1px solid rgba(212, 164, 74, 0.15)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        }}
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="checkin-widget"
              >
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">
                  16:00 - 11:00
                </div>
                <div className="text-sm text-foreground/70">Заезд - Выезд</div>
              </div>
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="quiet-hours-widget"
              >
                <Volume2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">
                  22:00 - 08:00
                </div>
                <div className="text-sm text-foreground/70">Время тишины</div>
              </div>
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="smoking-widget"
              >
                <Cigarette className="w-10 h-10 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400 mb-1">
                  Запрещено
                </div>
                <div className="text-sm text-foreground/70">Курение внутри</div>
              </div>
              <div
                className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="contact-widget"
              >
                <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">
                  09:00 - 21:00
                </div>
                <div className="text-sm text-foreground/70">Администратор</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* 1. Общие положения */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="general-rules-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Home className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Общие положения
                </h2>
              </div>
              <div className="text-center space-y-6">
                <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                  Гостевой комплекс «La Villa Pine» работает круглосуточно для
                  вашего комфортного отдыха
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl bg-black/20 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-semibold text-primary mb-2">
                      Документы
                    </div>
                    <p className="text-sm text-foreground/80">
                      Паспорт для гостей от 14 лет
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-black/20 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-semibold text-primary mb-2">
                      Режим работы
                    </div>
                    <p className="text-sm text-foreground/80">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Вместимость */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="guest-capacity-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Вместимость
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-8 rounded-xl bg-primary/10 border border-primary/20 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-foreground/70">
                    Основных мест
                  </div>
                </div>
                <div className="p-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                  <div className="text-5xl font-bold text-amber-300 mb-2">
                    +2
                  </div>
                  <div className="text-sm text-foreground/70 mb-3">
                    Дополнительных
                  </div>
                  <div className="text-amber-200 font-semibold">
                    +5000₽/сутки
                  </div>
                </div>
                <div className="p-8 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                  <div className="text-5xl font-bold text-red-400 mb-2">8</div>
                  <div className="text-sm text-foreground/70">Максимум</div>
                </div>
              </div>
            </section>

            {/* 3. Бронирование */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="booking-payment-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Calendar className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Бронирование
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="font-semibold text-primary mb-3">
                    Способы связи
                  </div>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <div>+7‑918‑924‑00‑07</div>
                    <div>WhatsApp / Telegram</div>
                    <div>Avito, Суточно.ру, Яндекс Путешествия</div>
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-4" />
                  <div className="font-semibold text-green-400 mb-3">
                    Предолата
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    10 000₽
                  </div>
                  <div className="text-sm text-foreground/70">
                    Остаток при заезде
                  </div>
                  <div className="text-xs text-foreground/60 mt-2">
                    размер предоплаты может меняться в зависимости от даты
                    бронирования
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                <div className="grid md:grid-cols-1 gap-4 text-md">
                  <div className="flex items-center justify-center gap-2">
                    <AlertCircle className="w-8 h-8 text-amber-400" />
                    <span>Минимум 2 суток</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Заезд и Выезд */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="checkin-checkout-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Clock className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Заезд и Выезд
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-8 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-3">
                    16:00
                  </div>
                  <div className="text-lg font-semibold text-foreground/90">
                    Заезд
                  </div>
                </div>
                <div className="text-center p-8 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-3">
                    11:00
                  </div>
                  <div className="text-lg font-semibold text-foreground/90">
                    Выезд
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                <div className="font-semibold text-amber-300 mb-3">
                  Доплата за изменение
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground/80">
                  <div>
                    До 4 часов: <strong className="text-amber-200">50%</strong>
                  </div>
                  <div>
                    Свыше 4 часов:{" "}
                    <strong className="text-amber-200">100%</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Тишина */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="quiet-hours-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Volume2 className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Тишина и Поведение
                </h2>
              </div>
              <div className="text-center mb-8">
                <div className="inline-block p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">
                    22:00 - 08:00
                  </div>
                  <div className="text-sm text-foreground/70">Время тишины</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Ban className="w-6 h-6 text-red-400" />
                    <h3 className="font-semibold text-red-400">Запрещено</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Громкая музыка и разговоры</li>
                    <li>• Свои колонки</li>
                    <li>• Шумные вечеринки</li>
                    <li>• Агрессивное поведение</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="w-6 h-6 text-green-400" />
                    <h3 className="font-semibold text-green-400">Разрешено</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Спокойные беседы</li>
                    <li>• Умеренное употребление алкоголя</li>
                    <li>• Тихие активности</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Курение */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="smoking-alcohol-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Cigarette className="w-10 h-10 text-red-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Курение
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-8 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Ban className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <div className="font-bold text-red-400 text-xl mb-4">
                    В помещениях запрещено
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80 text-left max-w-xs mx-auto">
                    <li>• Обычные сигареты</li>
                    <li>• Электронные сигареты</li>
                    <li>• Кальяны</li>
                    <li>• Любые устройства</li>
                  </ul>
                  <div className="mt-6 p-4 rounded-lg bg-red-500/20">
                    <div className="text-2xl font-bold text-red-300">
                      5 000₽
                    </div>
                    <div className="text-xs text-foreground/70">Штраф</div>
                  </div>
                </div>
                <div className="text-center p-8 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <div className="font-bold text-amber-400 text-xl mb-4">
                    На улице
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-green-500/10">
                      <Check className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-foreground/80">
                        Разрешено курение
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/10">
                      <Ban className="w-6 h-6 text-red-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-red-300">
                        Угольные кальяны запрещены!
                      </div>
                      <div className="text-xs text-foreground/60 mt-1">
                        (опасны)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Бассейн и сауна */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="pool-sauna-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Waves className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Бассейн и Сауна
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Waves className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <div className="font-semibold text-blue-300 mb-4">
                    Бассейн
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80 text-left max-w-xs mx-auto">
                    <li>✓ Принять душ</li>
                    <li>✓ Шапочка для купания</li>
                    <li>✗ Без обуви</li>
                    <li>✗ Без стеклянной посуды</li>
                  </ul>
                </div>
                <div className="text-center p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Thermometer className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                  <div className="font-semibold text-orange-300 mb-4">
                    Сауна
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80 text-left max-w-xs mx-auto">
                    <li>✓ Полотенце на лавку</li>
                    <li>✓ Гигиенический душ</li>
                    <li>✗ Без алкоголя</li>
                    <li>✗ Дети под присмотром</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Уборка */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="cleaning-section"
            >
              <div className="flex items-center justify-center mb-8">
                <ClipboardCheck className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Уборка
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Check className="w-10 h-10 text-green-400 mx-auto mb-4" />
                  <div className="font-semibold text-green-400 mb-3">
                    Стандартно
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• После каждого гостя</li>
                    <li>• Смена полотенец</li>
                    <li>• Смена белья</li>
                  </ul>
                </div>
                <div className="text-center p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Calendar className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <div className="font-semibold text-blue-400 mb-3">
                    При длительном проживании
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Раз в 3 дня</li>
                    <li>• По запросу (платно)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. Дети */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="children-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Baby className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Дети
                </h2>
              </div>
              <div className="text-center max-w-2xl mx-auto">
                <div className="p-8 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <div className="font-semibold text-amber-300 text-xl mb-4">
                    Только под присмотром взрослых
                  </div>
                  <p className="text-sm text-foreground/80">
                    Родители несут полную ответственность за безопасность и
                    поведение детей
                  </p>
                </div>
              </div>
            </section>

            {/* 10. Мангал */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="bbq-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Flame className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Мангальная зона
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Check className="w-10 h-10 text-green-400 mx-auto mb-4" />
                  <div className="font-semibold text-green-400 mb-3">
                    Разрешено
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Только в мангале</li>
                    <li>• Под присмотром</li>
                    <li>• только угли специальная жидкость для розжига</li>
                  </ul>
                </div>
                <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Ban className="w-10 h-10 text-red-400 mx-auto mb-4" />
                  <div className="font-semibold text-red-400 mb-3">
                    Запрещено
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Открытый огонь вне зоны</li>
                    <li>• Оставлять без присмотра</li>
                    <li>• Использовать дрова и палеты</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 11. Помещение */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="indoor-rules-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Home className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  В помещении
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Ban className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <div className="font-semibold text-red-400 mb-3">
                    Запрещено
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✗ Уличная обувь</li>
                    <li>✗ Домашние животные</li>
                    <li>✗ Курение</li>
                  </ul>
                </div>
                <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Check className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="font-semibold text-green-400 mb-3">
                    Разрешено
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✓ Сменная обувь</li>
                    <li>✓ Комфортный отдых</li>
                    <li>✓ Приготовление еды</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 12. Территория */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="territory-rules-section"
            >
              <div className="flex items-center justify-center mb-8">
                <TreePine className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  На территории
                </h2>
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Ban className="w-10 h-10 text-red-400 mx-auto mb-4" />
                  <div className="font-semibold text-red-400 mb-4">
                    Запрещено
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground/80">
                    <div>✗ Петарды, фейерверки</div>
                    <div>✗ Мусор вне урн</div>
                    <div>✗ Порча имущества</div>
                    <div>✗ Громкая музыка ночью</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. Лес */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="forest-section"
            >
              <div className="flex items-center justify-center mb-8">
                <TreePine className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Лесная территория
                </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center mb-6">
                  <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                  <div className="font-semibold text-amber-300 mb-3">Важно</div>
                  <p className="text-sm text-foreground/80">
                    Предупредите администратора перед посещением леса
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                    <Check className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <div className="font-semibold text-green-400 mb-3">
                      Разрешено
                    </div>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• По тропам</li>
                      <li>• Днём</li>
                      <li>• В группе</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                    <Ban className="w-8 h-8 text-red-400 mx-auto mb-3" />
                    <div className="font-semibold text-red-400 mb-3">
                      Запрещено
                    </div>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Одному</li>
                      <li>• В темноте</li>
                      <li>• Разводить огонь</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 14. Парковка */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="parking-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Car className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Парковка
                </h2>
              </div>
              <div className="text-center max-w-2xl mx-auto">
                <div className="p-8 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Car className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-green-400 mb-3">
                    Бесплатно
                  </div>
                  <p className="text-sm text-foreground/80 mb-4">
                    Парковка на территории для всех гостей
                  </p>
                  <div className="text-xs text-foreground/60">
                    Администрация не несёт ответственности за автомобили
                  </div>
                </div>
              </div>
            </section>

            {/* 15. Животные */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="pets-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Dog className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Животные
                </h2>
              </div>
              <div className="text-center max-w-xl mx-auto">
                <div className="p-8 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Ban className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-red-400">
                    Запрещено
                  </div>
                </div>
              </div>
            </section>

            {/* 16. Повреждение имущества */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="damage-section"
            >
              <div className="flex items-center justify-center mb-8">
                <AlertCircle className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Повреждение имущества
                </h2>
              </div>
              <div className="text-center max-w-2xl mx-auto">
                <div className="p-8 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <div className="font-semibold text-amber-300 text-xl mb-4">
                    Бережное отношение
                  </div>
                  <p className="text-sm text-foreground/80 mb-6">
                    При повреждении имущества необходимо возместить 100%
                    стоимости
                  </p>
                  <div className="p-4 rounded-lg bg-red-500/10">
                    <div className="text-sm text-foreground/80">
                      Штрафы за нарушение правил по прайс листу{" "}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 17. Пожарная безопасность */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="fire-safety-section"
            >
              <div className="flex items-center justify-center mb-8">
                <Flame className="w-10 h-10 text-red-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Пожарная безопасность
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Ban className="w-10 h-10 text-red-400 mx-auto mb-4" />
                  <div className="font-semibold text-red-400 mb-3">
                    Запрещено
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✗ Оставлять электроприборы без присмотра</li>
                    <li>✗ Самодельные приборы</li>
                    <li>✗ Блокировать пути эвакуации</li>
                  </ul>
                </div>
                <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Check className="w-10 h-10 text-green-400 mx-auto mb-4" />
                  <div className="font-semibold text-green-400 mb-3">
                    Обязательно
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✓ Знать пути эвакуации</li>
                    <li>✓ Выключать приборы</li>
                    <li>✓ Соблюдать правила</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 18. Отмена бронирования */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="cancellation-section"
            >
              <div className="flex items-center justify-center mb-8">
                <AlertCircle className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Отмена бронирования
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-foreground/70 mb-3">
                    Возврат в обычные дни
                  </div>
                  <div className="text-xs text-foreground/60">За 14+ дней</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="text-3xl font-bold text-red-400 mb-2">0%</div>
                  <div className="text-sm text-foreground/70 mb-3">
                    удержание предоплаты
                  </div>
                  <div className="text-xs text-foreground/60">
                    Менее 14 дней
                  </div>
                </div>
                <div className="text-sm text-foreground/70 mb-3">
                  Для бронирований с 30.12 - 11.01 предоплата возвращается за
                  30+ дней
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section
              className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="faq-section"
            >
              <div className="flex items-center justify-center mb-8">
                <HelpCircle className="w-10 h-10 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Частые вопросы
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="rounded-xl bg-black/20 border border-primary/20 px-6"
                  data-testid="faq-item-1"
                >
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    Можно ли приехать раньше 16:00?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Да, ранний заезд возможен по согласованию с доплатой
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="rounded-xl bg-black/20 border border-primary/20 px-6"
                  data-testid="faq-item-2"
                >
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    Есть ли Wi-Fi?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Да, бесплатный Wi-Fi доступен на всей территории
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="rounded-xl bg-black/20 border border-primary/20 px-6"
                  data-testid="faq-item-3"
                >
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    Можно ли готовить еду?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Да, кухня полностью оборудована для приготовления пищи
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Контакты */}
            <section
              className="p-8 md:p-10 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
              data-testid="contact-info-section"
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Остались вопросы?
              </h3>
              <div className="text-xl font-semibold text-foreground mb-2">
                +7‑918‑924‑00‑07
              </div>
              <div className="text-sm text-foreground/70 mb-6">
                WhatsApp / Telegram
              </div>
              <div className="text-sm text-foreground/60">
                Время работы: 09:00 - 21:00
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
