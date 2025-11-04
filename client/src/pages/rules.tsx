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

      {/* Hero Section - similar to home and about pages */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
          style={{
            backgroundImage: "url(/images/gallery/13.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl font-display">
                Правила проживания
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Ознакомьтесь с правилами и условиями проживания в La Villa Pine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info widgets section - like home page */}
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
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="checkin-widget"
              >
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">15:00 - 11:00</div>
                <div className="text-sm text-foreground/80">Заезд - Выезд</div>
              </div>
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="quiet-hours-widget"
              >
                <Volume2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">22:00 - 08:00</div>
                <div className="text-sm text-foreground/80">Тихое время</div>
              </div>
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="smoking-widget"
              >
                <Cigarette className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-red-400 font-bold">Запрещено</div>
                <div className="text-sm text-foreground/80">
                  Курение в помещениях
                </div>
              </div>
              <div
                className="p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                data-testid="contact-widget"
              >
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">09:00 - 21:00</div>
                <div className="text-sm text-foreground/80">
                  Связь с администратором
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Background */}
      <div className="relative">
        {/* Background overlay for content sections */}
        <div
          className="absolute inset-0"
          style={{
            background: "transparent",
          }}
        ></div>

        <div className="relative z-10 py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            {/* Content blocks */}
            <div className="max-w-4xl mx-auto space-y-12">
              {/* 1. Общие положения */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <Home className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Общие положения
                  </h2>
                </div>
                <div className="space-y-4 text-foreground">
                  <p className="text-lg">
                    Гостевой комплекс «La Villa Pine» предназначен для
                    временного проживания гостей. Режим работы комплекса –
                    круглосуточный.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-black/20">
                      <strong>Документы для заселения:</strong>
                      <p className="mt-2">
                        Паспорт или иной документ, удостоверяющий личность для
                        всех гостей старше 14 лет
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-black/20">
                      <strong>Режим работы:</strong>
                      <p className="mt-2">
                        Круглосуточный (сезонный или круглогодичный)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Количество гостей */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Количество гостей
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      Основные спальные места
                    </h3>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        6
                      </div>
                      <div className="text-foreground/80">человек</div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-amber-300">
                      Дополнительные места
                    </h3>
                    <div className="space-y-3 text-foreground">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-300 mb-2">
                          +2
                        </div>
                        <div className="text-sm">Максимально 2 доп. места</div>
                      </div>
                      <div className="p-3 rounded-lg bg-amber-500/20 text-center">
                        <div className="font-bold text-amber-200">
                          +5000₽ в сутки
                        </div>
                        <div className="text-sm">с человека</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                  <h4 className="font-semibold text-red-300 mb-2">
                    Максимальная вместимость
                  </h4>
                  <p className="text-lg font-bold text-red-400">8 человек</p>
                </div>
              </section>

              {/* 3. Бронирование и оплата */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <Utensils className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Бронирование и оплата
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      Способы бронирования
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Телефон: +7‑918‑924‑00‑07</li>
                      <li>• WhatsApp / Telegram по тому же номеру</li>
                      <li>• Avito, Суточно.ру, и другие площадки</li>
                      <li>• Официальный сайт комплекса</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      Условия оплаты
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="font-bold text-primary">
                          Предоплата: 50%
                        </div>
                        <div className="text-sm">от стоимости проживания</div>
                      </div>
                      <div className="text-sm text-foreground/90">
                        Остаток оплаты при заезде наличными
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">
                    📅 Условия бронирования по дням
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Пн-Чт:</span> Можно
                      бронировать посуточно
                    </div>
                    <div>
                      <span className="font-semibold">Пт-Вс:</span> Минимум 2
                      суток
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Заезд и выезд */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Заезд и выезд
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">
                      15:00
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      Время заезда
                    </div>
                    <div className="text-sm text-foreground/80">
                      Стандартное время
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">
                      11:00
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      Время выезда
                    </div>
                    <div className="text-sm text-foreground/80">
                      До указанного времени
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-semibold text-amber-300 mb-2">
                      Доплата за изменение времени
                    </h4>
                    <div className="text-sm text-foreground space-y-1">
                      <div>Ранний заезд (до 15:00)</div>
                      <div>Поздний выезд (после 11:00)</div>
                      <div className="font-bold">
                        Задержка до 4 часов: 50% стоимости
                      </div>
                      <div className="font-bold">
                        Задержка свыше 4 часов: 100% стоимости
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Поведение гостей и тишина */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <Volume2 className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Поведение гостей и соблюдение тишины
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">
                          Запрещено:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Шумные разговоры</li>
                          <li>• Громкая музыка</li>
                          <li>• Свои колонки</li>
                          <li>• Публичные конфликты</li>
                          <li>• Агрессивное поведение</li>
                          <li>• Шумные вечеринки и мероприятия</li>
                          <li>• Проживание с животными</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">
                          Разрешено:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Умеренное употребление алкоголя</li>
                          <li>• Спокойные беседы</li>
                          <li>• Тихие активности</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">
                          Время тишины: 22:00 - 08:00
                        </h3>
                        <p className="text-sm text-foreground/80">
                          (закон о тишине)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-semibold text-amber-300 mb-2">
                      ⚠️ Штрафы за нарушения
                    </h4>
                    <p className="text-sm">
                      За нарушение правил поведения может быть применен штраф
                      или досрочное выселение без возврата средств.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Курение и алкоголь */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <Cigarette className="w-8 h-8 text-red-400 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Курение и алкоголь
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-red-400">
                      🚭 Запрет курения
                    </h3>
                    <div className="space-y-3 text-foreground">
                      <p>
                        <strong>Полностью запрещено:</strong>
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• В номерах</li>
                        <li>• В общественных зонах</li>
                        <li>• Электронные сигареты</li>
                        <li>• Кальяны</li>
                      </ul>
                      <div className="p-3 rounded-lg bg-red-500/20 mt-4">
                        <p className="font-bold text-red-300">Штраф: 5 000₽</p>
                        <p className="text-sm">За курение в номере</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">
                      🍷 Алкоголь
                    </h3>
                    <div className="space-y-3 text-foreground">
                      <p>
                        <strong>Разрешено умеренное употребление:</strong>
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• В номерах</li>
                        <li>• На террасах</li>
                        <li>• В мангальной зоне</li>
                      </ul>
                      <div className="p-3 rounded-lg bg-amber-500/20 mt-4">
                        <p className="font-bold text-amber-300">
                          Запрещена продажа
                        </p>
                        <p className="text-sm">
                          Алкоголь не продается на территории
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Использование бассейна и сауны */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 text-primary mr-3">🏊‍♂️</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Использование бассейна и сауны
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      🏊‍♂️ Бассейн
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <h4 className="font-semibold text-blue-300 mb-2">
                          Обязательно перед входом:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Принять душ</li>
                          <li>• Использовать купальную шапочку</li>
                          <li>• Снять обувь</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <h4 className="font-semibold text-red-300 mb-2">
                          Запрещено:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Нырять, бегать и прыгать</li>
                          <li>• Использовать стекло и острые предметы</li>
                          <li>• Приносить еду и напитки</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-3">
                        <h4 className="font-semibold text-amber-300 mb-2">
                          👨‍👩‍👧 Дети
                        </h4>
                        <p className="text-sm">Только с взрослыми</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      🧖‍♀️ Сауна
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                        <h4 className="font-semibold text-orange-300 mb-2">
                          Правила использования:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Максимальное время: 15-20 минут</li>
                          <li>• Использовать полотенце на полке</li>
                          <li>• Пить больше воды</li>
                          <li>• Проветрить после использования</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <h4 className="font-semibold text-red-300 mb-2">
                          Запрещено:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Использовать масла, скрабы и соли</li>
                          <li>• Посещать при сердечных заболеваниях</li>
                          <li>• Беременным</li>
                          <li>• В алкогольном опьянении</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-3">
                        <h4 className="font-semibold text-amber-300 mb-2">
                          👨‍👩‍👧 Дети
                        </h4>
                        <p className="text-sm">Только с взрослыми</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Ответственность за детей */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="children-responsibility-section"
              >
                <div className="flex items-center mb-6">
                  <Baby className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Ответственность за детей
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-amber-300">
                      ⚠️ Полная ответственность родителей
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">За безопасность:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• В номере</li>
                          <li>• На территории комплекса</li>
                          <li>• У бассейна и сауны</li>
                          <li>• В мангальной зоне</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">За поведение:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Соблюдение тишины</li>
                          <li>• Сохранность имущества</li>
                          <li>• Уважение к другим гостям</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h4 className="font-semibold text-red-300 mb-2">
                      🚫 Строго запрещено
                    </h4>
                    <p className="text-sm">
                      Оставлять детей без присмотра взрослых в номере или на
                      территории комплекса
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Мангальная зона */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="bbq-area-section"
              >
                <div className="flex items-center mb-6">
                  <Flame className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Мангальная зона
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      ✅ Разрешено
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Использование только в оборудованной зоне</li>
                      <li>• Разжигание углей в мангале</li>
                      <li>• Приготовление еды на гриле</li>
                      <li>• Использование специальных средств для розжига</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-400">
                      ❌ Запрещено
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Открытый огонь вне мангала</li>
                      <li>• Оставлять мангал без присмотра</li>
                      <li>• Использовать жидкости для розжига</li>
                      <li>• Оставлять мусор и угли</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">
                    🔥 Важно!
                  </h4>
                  <p className="text-sm">
                    Обязательно потушите угли водой и уберите территорию после
                    использования
                  </p>
                </div>
              </section>

              {/* 10. Правила в помещении */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="indoor-rules-section"
              >
                <div className="flex items-center mb-6">
                  <Home className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Правила в помещении
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-red-400">
                      🚫 Запрещено
                    </h3>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li>• Ходить в уличной обуви</li>
                      <li>• Использовать открытый огонь и свечи</li>
                      <li>• Использовать гриль в помещении</li>
                      <li>• Использовать мощные обогреватели</li>
                      <li>• Переставлять мебель</li>
                      <li>• Портить имущество</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">
                      ✅ Необходимо
                    </h3>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li>• Использовать сменную обувь или тапочки</li>
                      <li>• Бережно относиться к мебели и технике</li>
                      <li>• Сообщать о неисправностях</li>
                      <li>• Соблюдать чистоту и порядок</li>
                      <li>• Оставлять ключи на ресепшене при выезде</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 11. Правила на территории */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="outdoor-territory-section"
              >
                <div className="flex items-center mb-6">
                  <TreePine className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Правила на территории
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <h3 className="text-lg font-semibold mb-3 text-red-400">
                        🚫 Строго запрещено
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Фейерверки, петарды, фонтаны</li>
                        <li>• Хлопушки и конфетти</li>
                        <li>• Пенные вечеринки</li>
                        <li>• Заезжать на газон</li>
                        <li>• Повреждать растения и декор</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <h3 className="text-lg font-semibold mb-3 text-green-400">
                        ✅ Необходимо
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Бережно относиться к растениям</li>
                        <li>• Не повреждать декор</li>
                        <li>• Выбрасывать мусор только в контейнеры</li>
                        <li>• Соблюдать чистоту на территории</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 12. Посещение лесной территории */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="forest-area-section"
              >
                <div className="flex items-center mb-6">
                  <TreePine className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Посещение лесной территории
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <h3 className="text-lg font-semibold mb-3 text-green-400">
                        ✅ Правила безопасности
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Уведомить администратора</li>
                        <li>• Не выходить в одиночку</li>
                        <li>• Не покидать видимые тропы</li>
                        <li>• Возвращаться до темноты</li>
                        <li>• Иметь при себе телефон</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <h3 className="text-lg font-semibold mb-3 text-red-400">
                        ❌ Запрещено
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Разводить огонь</li>
                        <li>• Оставлять мусор</li>
                        <li>• Собирать растения и цветы</li>
                        <li>• Заходить в воду ручья</li>
                        <li>• Удаляться далеко от комплекса</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-semibold text-amber-300 mb-2">
                      🚨 В экстренной ситуации
                    </h4>
                    <p className="text-sm">
                      Немедленно свяжитесь с администратором:{" "}
                      <strong>+7‑918‑924‑00‑07</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* 13. Парковка */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="parking-section"
              >
                <div className="flex items-center mb-6">
                  <Car className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Парковка
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h3 className="text-lg font-semibold mb-3 text-green-400">
                      ✅ Преимущества
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Бесплатная парковка</li>
                      <li>• На территории комплекса</li>
                      <li>• Охраняемая территория</li>
                      <li>• Видеонаблюдение</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h3 className="text-lg font-semibold mb-3 text-amber-400">
                      ⚠️ Требования
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Парковаться только в отведенных местах</li>
                      <li>• Не блокировать проезды</li>
                      <li>• Соблюдать скоростной режим (5 км/ч)</li>
                      <li>• Не заезжать на газон</li>
                      <li>• Не оставлять ценные вещи в машине</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 14. Животные */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="pets-section"
              >
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">🐕</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Размещение с животными
                  </h2>
                </div>
                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">
                    🚫 Размещение с животными запрещено
                  </h3>
                  <p className="text-foreground">
                    Размещение с домашними животными (кошками, собаками и др.) в
                    номерах и на территории комплекса не допускается.
                  </p>
                </div>
              </section>

              {/* 15. Повреждение имущества и штрафы */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="property-damage-section"
              >
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Повреждение имущества и штрафы
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-red-400">
                      💰 Материальная ответственность
                    </h3>
                    <p className="mb-4">
                      Гости обязаны бережно относиться к имуществу комплекса. В
                      случае утраты, порчи или повреждения необходимо возместить
                      ущерб:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">
                          100% стоимости поврежденных предметов:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Мебель</li>
                          <li>• Техника</li>
                          <li>• Сантехника</li>
                          <li>• Постельное белье</li>
                          <li>• Посуда</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Штрафы:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>
                            • Курение в номере: <strong>5 000₽</strong>
                          </li>
                          <li>
                            • Нарушение тишины:{" "}
                            <strong>предупреждение/штраф</strong>
                          </li>
                          <li>
                            • Несанкционированные гости:{" "}
                            <strong>доплата</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 16. Пожарная безопасность */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="fire-safety-section"
              >
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Пожарная и бытовая безопасность
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <h3 className="text-lg font-semibold mb-3 text-red-400">
                        🚫 Запрещено
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Оставлять электроприборы без присмотра</li>
                        <li>• Использовать самодельные приборы</li>
                        <li>• Хранить легковоспламеняющиеся вещества</li>
                        <li>• Блокировать пути эвакуации</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <h3 className="text-lg font-semibold mb-3 text-green-400">
                        ✅ Обязательно
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Изучить план эвакуации</li>
                        <li>• Знать расположение огнетушителей</li>
                        <li>• Отключать приборы при уходе</li>
                        <li>• Сообщать о неисправностях</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h4 className="font-semibold text-red-300 mb-2">
                      🚨 В случае пожара
                    </h4>
                    <p className="text-sm">
                      Немедленно покинуть помещение, вызвать службу спасения:{" "}
                      <strong>112</strong>, уведомить администратора
                    </p>
                  </div>
                </div>
              </section>

              {/* 17. Отмена бронирования */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="cancellation-section"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">
                  Условия отмены бронирования
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="text-4xl font-bold text-green-400 mb-3">
                        За 14+ дней
                      </div>
                      <div className="text-xl font-semibold mb-2 text-green-300">
                        Возврат предоплаты
                      </div>
                      <div className="text-sm text-foreground/80">
                        Полный возврат предоплаты
                      </div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                      <div className="text-4xl font-bold text-red-400 mb-3">
                        Менее 14 дней
                      </div>
                      <div className="text-xl font-semibold mb-2 text-red-300">
                        Без возврата
                      </div>
                      <div className="text-sm text-foreground/80">
                        Предоплата не возвращается
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-semibold text-amber-300 mb-2 text-center">
                      ⚠️ Обратите внимание
                    </h4>
                    <p className="text-sm text-center text-foreground/90">
                      В праздничные периоды условия отмены могут отличаться.
                      Уточняйте при бронировании.
                    </p>
                  </div>
                </div>
              </section>

              {/* 18. Часто задаваемые вопросы (FAQ) */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="flex items-center mb-6">
                  <HelpCircle className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Часто задаваемые вопросы
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {/* Что входит в стоимость */}
                  <AccordionItem
                    value="item-1"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-whats-included"
                    >
                      <div className="flex items-center gap-3">
                        <Package className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Что входит в стоимость проживания?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <ul className="space-y-2 mt-2">
                        <li>✓ Высокоскоростной Wi-Fi</li>
                        <li>✓ Постельное белье и полотенца</li>
                        <li>✓ Тапочки, халаты и средства гигиены</li>
                        <li>✓ Использование бассейна и сауны</li>
                        <li>✓ Парковка на территории</li>
                        <li>✓ Уборка по запросу</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Что взять с собой */}
                  <AccordionItem
                    value="item-2"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-what-to-bring"
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Что взять с собой?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="font-semibold mb-2">Основное:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Документы (паспорт, свидетельства о рождении
                              детей)
                            </li>
                            <li>• Личные средства гигиены</li>
                            <li>• Купальные принадлежности </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Продукты:</h4>
                          <p className="text-sm">
                            Если планируете готовить самостоятельно, возьмите
                            продукты с собой или закажите доставку
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Как добраться */}
                  <AccordionItem
                    value="item-3"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-how-to-get"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Как добраться до комплекса?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <div>
                          <p className="text-sm font-mono bg-background/20 p-2 rounded">
                            Если вы едете со стороны Майкопа, двигайтесь по
                            главной дороге до перекрёстка, где направо — поворот
                            на Цветочный, а налево — на Тульский. Поверните
                            налево в сторону Тульского, а затем сразу же снова
                            налево. Проехав примерно 100 метров, поверните
                            направо на улицу Кольцевая. Через ещё 100 метров, по
                            правую сторону, вас встретит стильный кирпичный
                            забор в стиле лофт — это и есть La Villa Pine. Добро
                            пожаловать!
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Расположение:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• 20 минут от Майкопа</li>
                            <li>• 30 минут до гор</li>
                            <li>
                              • Поселок Тульский, Республика Адыгея, Кольцевая
                              улица, 4
                            </li>
                          </ul>
                        </div>
                        <Link href="/contacts">
                          <button
                            className="mt-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors text-sm"
                            data-testid="button-view-map"
                          >
                            Посмотреть на карте
                          </button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Магазины и аптеки */}
                  <AccordionItem
                    value="item-4"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-shops-pharmacies"
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Ближайшие магазины и аптеки
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="font-semibold mb-2">
                            В поселке Тульский:
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Продуктовые магазины (ул. Первомайская, ул.
                              Ленина)
                            </li>
                            <li>• Аптеки в центре поселка</li>
                            <li>• Местный рынок с фермерскими продуктами</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            Рядом с комплексом:
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Кофейня (2 минуты пешком)</li>
                            <li>
                              • Ресторан "Пхали-Хинкали" (доставка доступна)
                            </li>
                          </ul>
                        </div>
                        <p className="text-sm text-foreground/70 mt-2">
                          💡 Рекомендуем использовать 2ГИС или Яндекс.Карты для
                          поиска актуальных адресов и часов работы
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Можно ли готовить */}
                  <AccordionItem
                    value="item-5"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-cooking"
                    >
                      <div className="flex items-center gap-3">
                        <ChefHat className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Можно ли готовить свою еду?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-2 mt-2">
                        <p>
                          Да! В каждом доме есть полностью оборудованная кухня:
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li>✓ Плита и духовка</li>
                          <li>✓ Микроволновая печь</li>
                          <li>✓ Чайник</li>
                          <li>✓ Вся необходимая посуда и кухонные приборы</li>
                          <li>✓ Холодильник</li>
                        </ul>
                        <p className="text-sm mt-3">
                          Пожалуйста, соблюдайте чистоту и не оставляйте плиту
                          без присмотра.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Правила перед выездом */}
                  <AccordionItem
                    value="item-6"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-checkout-rules"
                    >
                      <div className="flex items-center gap-3">
                        <ClipboardCheck className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Что нужно сделать перед выездом?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="font-semibold mb-2">Желательно:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Помыть посуду</li>
                            <li>• Вынести мусор в отведенное место</li>
                            <li>• Провести базовую уборку</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Обязательно:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Сложить постельное белье отдельно</li>
                            <li>• Передать ключи администратору</li>
                            <li>• Отключить все электроприборы</li>
                            <li>• Закрыть окна</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-sm">💡 Расчетный час: до 11:00</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Дополнительные услуги */}
                  <AccordionItem
                    value="item-7"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-additional-services"
                    >
                      <div className="flex items-center gap-3">
                        <Package className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Какие дополнительные услуги доступны?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <ul className="space-y-2">
                          <li className="p-3 bg-background/10 rounded-lg">
                            <h4 className="font-semibold mb-1">Доставка еды</h4>
                            <p className="text-sm">
                              Из ресторана "Пхали-Хинкали" прямо к вам
                            </p>
                          </li>
                          <li className="p-3 bg-background/10 rounded-lg">
                            <h4 className="font-semibold mb-1">
                              Дополнительная уборка
                            </h4>
                            <p className="text-sm">
                              По запросу за дополнительную плату
                            </p>
                          </li>
                          <li className="p-3 bg-background/10 rounded-lg">
                            <h4 className="font-semibold mb-1">
                              Ранний заезд / Поздний выезд
                            </h4>
                            <p className="text-sm">
                              При наличии свободных мест (уточняйте стоимость)
                            </p>
                          </li>
                        </ul>
                        <p className="text-sm text-foreground/70 mt-3">
                          Все услуги необходимо заранее согласовывать с
                          администратором
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Экстренные контакты */}
                  <AccordionItem
                    value="item-8"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-emergency-contacts"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Экстренные контакты и помощь
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <h4 className="font-semibold text-red-400 mb-2">
                            🚨 Экстренные службы:
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Служба спасения: <strong>112</strong>
                            </li>
                            <li>
                              • Скорая помощь: <strong>103</strong>
                            </li>
                            <li>
                              • Пожарная служба: <strong>101</strong>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                          <h4 className="font-semibold text-amber-400 mb-2">
                            При поломке или проблемах:
                          </h4>
                          <p className="text-sm">
                            Немедленно свяжитесь с администратором:
                            <br />
                            <strong className="text-primary">
                              +7‑918‑924‑00‑07
                            </strong>
                          </p>
                        </div>
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <h4 className="font-semibold text-blue-400 mb-2">
                            Ближайшая больница:
                          </h4>
                          <p className="text-sm">
                            Майкопская городская больница (20 мин от комплекса)
                            <br />
                            Для уточнения адреса обратитесь к администратору
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Безопасно ли в лесу */}
                  <AccordionItem
                    value="item-9"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-forest-safety"
                    >
                      <div className="flex items-center gap-3">
                        <TreePine className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Безопасно ли в лесу?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <p>Да, территория безопасна при соблюдении правил:</p>
                        <div>
                          <h4 className="font-semibold mb-2 text-green-400">
                            ✓ Безопасно:
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Прогулки по видимым тропам</li>
                            <li>• Посещение в светлое время суток</li>
                            <li>• В сопровождении (не в одиночку)</li>
                            <li>• После уведомления администратора</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-amber-400">
                            ⚠️ Обитатели леса:
                          </h4>
                          <p className="text-sm">
                            Белки, птицы и другая мелкая фауна. Опасных животных
                            в ближайшей зоне нет.
                          </p>
                        </div>
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                          <p className="text-sm font-semibold">
                            Дети могут гулять только под присмотром взрослых!
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Мобильная связь */}
                  <AccordionItem
                    value="item-10"
                    className="border border-primary/20 rounded-lg px-6 bg-background/5"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-4"
                      data-testid="faq-mobile-internet"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          Работает ли мобильная связь и интернет?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 pb-4">
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Мобильная связь:
                          </h4>
                          <p className="text-sm">
                            Хорошее покрытие основных операторов (МТС, Билайн,
                            Мегафон, Теле2)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Интернет:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              ✓ Высокоскоростной Wi-Fi по всей территории
                              комплекса
                            </li>
                            <li>✓ Стабильное соединение</li>
                            <li>✓ Достаточно для работы и видеозвонков</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* 17. Контактная информация */}
              <section
                className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212, 164, 74, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                data-testid="contact-section"
              >
                <div className="flex items-center mb-6">
                  <Phone className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Контакты администрации
                  </h2>
                </div>
                <div className="text-center">
                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 inline-block">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      Администратор гостевого комплекса
                    </h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">
                        +7‑918‑924‑00‑07
                      </div>
                      <div className="text-sm text-foreground/80">WhatsApp</div>
                      <div className="text-sm font-semibold">
                        Время работы: 09:00 - 21:00
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-foreground/90">
                    С уважением, администрация гостевого комплекса «La Villa
                    Pine»
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
