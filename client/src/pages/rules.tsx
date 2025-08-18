import PageMeta from "@/components/seo/PageMeta";
import { SEO_PAGES } from "@/lib/seo-constants";

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
          backgroundImage: 'url(/images/amenities/forest.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 text-primary font-bold font-display">Правила проживания</h1>
            <p className="text-lg font-light text-foreground/90">
              Ознакомьтесь с правилами и условиями проживания в La Villa Pine
            </p>
          </div>
          
          {/* Content blocks */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 1. Основные правила */}
            <section className="p-8 rounded-2xl transition-all duration-300" style={{
              background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Основные правила</h2>
              <div className="space-y-4 text-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <p><strong>Время заезда:</strong> с 14:00. Время выезда: до 12:00</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <p><strong>Количество гостей:</strong> не более указанного в бронировании количества человек</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <p><strong>Тишина:</strong> соблюдение тишины с 22:00 до 08:00</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">4</span>
                  </div>
                  <p><strong>Курение:</strong> курение разрешено только на открытых террасах</p>
                </div>
              </div>
            </section>

            {/* 2. Использование удобств */}
            <section className="p-8 rounded-2xl transition-all duration-300" style={{
              background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Использование удобств</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Бассейн и сауна</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Использование бассейна и сауны включено в стоимость</li>
                    <li>• Рекомендованное время использования сауны: не более 2 часов подряд</li>
                    <li>• После использования сауны необходимо проветрить помещение</li>
                    <li>• Запрещено оставлять детей без присмотра взрослых</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Мангальная зона</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Использование мангала разрешено в специально отведенной зоне</li>
                    <li>• Необходимо соблюдать правила пожарной безопасности</li>
                    <li>• После использования убрать территорию и потушить угли</li>
                    <li>• Дрова и уголь предоставляются за дополнительную плату</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Ответственность и безопасность */}
            <section className="p-8 rounded-2xl transition-all duration-300" style={{
              background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Ответственность и безопасность</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  <strong>Материальная ответственность:</strong> гости несут полную материальную ответственность 
                  за сохранность имущества гостевого дома. В случае повреждения или утраты имущества 
                  взимается полная стоимость восстановления или замены.
                </p>
                <p>
                  <strong>Безопасность:</strong> администрация не несет ответственности за травмы, 
                  полученные гостями во время проживания. Просим соблюдать осторожность при 
                  использовании всех удобств.
                </p>
                <p>
                  <strong>Животные:</strong> размещение с домашними животными возможно только 
                  по предварительному согласованию и за дополнительную плату.
                </p>
              </div>
            </section>

            {/* 4. Отмена бронирования */}
            <section className="p-8 rounded-2xl transition-all duration-300" style={{
              background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.7) 0%, rgba(25, 21, 17, 0.6) 50%, rgba(35, 29, 22, 0.75) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 164, 74, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Условия отмены бронирования</h2>
              <div className="space-y-4 text-foreground">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl" style={{
                    background: 'rgba(212, 164, 74, 0.1)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <div className="text-2xl font-bold text-primary mb-2">За 7+ дней</div>
                    <div className="text-sm">100% возврат средств</div>
                  </div>
                  <div className="text-center p-4 rounded-xl" style={{
                    background: 'rgba(212, 164, 74, 0.1)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <div className="text-2xl font-bold text-primary mb-2">За 3-6 дней</div>
                    <div className="text-sm">50% возврат средств</div>
                  </div>
                  <div className="text-center p-4 rounded-xl" style={{
                    background: 'rgba(212, 164, 74, 0.1)',
                    border: '1px solid rgba(212, 164, 74, 0.2)'
                  }}>
                    <div className="text-2xl font-bold text-primary mb-2">Менее 3 дней</div>
                    <div className="text-sm">Без возврата средств</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}