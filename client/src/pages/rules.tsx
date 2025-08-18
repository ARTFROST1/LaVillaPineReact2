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
} from "lucide-react";

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
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(/images/og-image-final.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 text-primary font-bold font-display">
              Правила проживания
            </h1>
            <p className="text-lg font-light text-foreground/90">
              Ознакомьтесь с правилами и условиями проживания в La Villa Pine
            </p>
          </div>

          {/* Quick info widgets */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "rgba(212, 164, 74, 0.1)",
                  border: "1px solid rgba(212, 164, 74, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">15:00 - 11:00</div>
                <div className="text-sm text-foreground/80">Заезд - Выезд</div>
              </div>
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "rgba(212, 164, 74, 0.1)",
                  border: "1px solid rgba(212, 164, 74, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Volume2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">22:00 - 08:00</div>
                <div className="text-sm text-foreground/80">Тихий час</div>
              </div>
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "rgba(212, 164, 74, 0.1)",
                  border: "1px solid rgba(212, 164, 74, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Cigarette className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-red-400 font-bold">Запрещено</div>
                <div className="text-sm text-foreground/80">
                  Курение в помещениях
                </div>
              </div>
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "rgba(212, 164, 74, 0.1)",
                  border: "1px solid rgba(212, 164, 74, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold">09:00 - 21:00</div>
                <div className="text-sm text-foreground/80">
                  Связь с администратором
                </div>
              </div>
            </div>
          </div>

          {/* Content blocks */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 1. Общие положения */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <Home className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Общие положения
                </h2>
              </div>
              <div className="space-y-4 text-foreground">
                <p className="text-lg">
                  Гостевой комплекс «La Villa Pine» предназначен для временного
                  проживания гостей. Режим работы комплекса – круглосуточный.
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

            {/* 2. Бронирование и оплата */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-primary mr-3" />
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
                    <li>• WhatsApp / Telegram</li>
                    <li>• Avito</li>
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
                        Предоплата: 10 000₽
                      </div>
                      <div className="text-sm">Для подтверждения брони</div>
                    </div>
                    <div className="text-sm text-foreground/90">
                      Оплата при заезде наличными
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Заезд и выезд */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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
                  <div className="text-lg font-semibold mb-2">Время заезда</div>
                  <div className="text-sm text-foreground/80">
                    Стандартное время
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    11:00
                  </div>
                  <div className="text-lg font-semibold mb-2">Время выезда</div>
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

            {/* 4. Поведение гостей и тишина */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-6">
                <Volume2 className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                  Поведение гостей и соблюдение тишины
                </h2>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Время тишины: 22:00 - 08:00
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-400 mb-2">
                        Запрещено:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Шумные разговоры</li>
                        <li>• Громкая музыка</li>
                        <li>• Публичные конфликты</li>
                        <li>• Агрессивное поведение</li>
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
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h4 className="font-semibold text-amber-300 mb-2">
                    ⚠️ Штрафы за нарушения
                  </h4>
                  <p className="text-sm">
                    За нарушение правил поведения может быть применен штраф или
                    досрочное выселение без возврата средств.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Курение и алкоголь */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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

            {/* 6. Использование бассейна и сауны */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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
                        <li>• Нырять в мелкой части</li>
                        <li>• Использовать стеклянную посуду</li>
                        <li>• Приносить еду и напитки</li>
                      </ul>
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
                        Противопоказания:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Сердечно-сосудистые заболевания</li>
                        <li>• Беременность</li>
                        <li>• Алкогольное опьянение</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Ответственность за детей */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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

            {/* 8. Мангальная зона */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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

            {/* 9. Посещение лесной территории */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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

            {/* 10. Парковка */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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
                  <h3 className="text-lg font-semibold mb-3 text-amber-300">
                    ⚠️ Ответственность
                  </h3>
                  <p className="text-sm">
                    Администрация не несет ответственности за сохранность
                    автомобилей. Парковка осуществляется на страх и риск
                    автовладельцев.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Животные */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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

            {/* 12. Повреждение имущества и штрафы */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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
                          • Несанкционированные гости: <strong>доплата</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. Пожарная безопасность */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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

            {/* 14. Отмена бронирования */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">
                Условия отмены бронирования
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      За 7+ дней
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      100% возврат
                    </div>
                    <div className="text-sm text-foreground/80">
                      Полный возврат предоплаты
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      За 3-6 дней
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      50% возврат
                    </div>
                    <div className="text-sm text-foreground/80">
                      Частичный возврат предоплаты
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      Менее 3 дней
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      Без возврата
                    </div>
                    <div className="text-sm text-foreground/80">
                      Предоплата не возвращается
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 15. Контактная информация */}
            <section
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(212, 164, 74, 0.15)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
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
                  С уважением, администрация гостевого комплекса «La Villa Pine»
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
