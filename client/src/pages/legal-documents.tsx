import { Link } from "wouter";
import PageMeta from "@/components/seo/PageMeta";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Home } from "lucide-react";

export function LegalDocuments() {
  return (
    <>
      <PageMeta 
        title="Правовая информация - La Villa Pine"
        description="Политика конфиденциальности, согласие на обработку персональных данных и правила проживания в La Villa Pine."
        keywords="правовая информация, политика конфиденциальности, согласие на обработку данных, правила проживания"
      />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
          style={{
            backgroundImage: 'url(/images/amenities/1.webp)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl font-display">
                Правовая информация
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto">
                Ознакомьтесь с важными документами La Villa Pine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 164, 74, 0.15)',
        borderBottom: '1px solid rgba(212, 164, 74, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }} className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Политика конфиденциальности */}
              <div
                className="group p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Политика конфиденциальности
                </h3>
                <p className="text-sm text-gray-200 mb-6">
                  Информация о защите ваших персональных данных
                </p>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 font-medium border border-white/30"
                  data-testid="link-privacy-policy"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Читать документ
                </Link>
              </div>

              {/* Согласие на обработку данных */}
              <div
                className="group p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Согласие на обработку данных
                </h3>
                <p className="text-sm text-gray-200 mb-6">
                  Форма согласия для бронирования проживания
                </p>
                <Link
                  href="/consent"
                  className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 font-medium border border-white/30"
                  data-testid="link-consent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Читать документ
                </Link>
              </div>

              {/* Правила проживания */}
              <div
                className="group p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: "rgba(212, 164, 74, 0.15)",
                  border: "1px solid rgba(212, 164, 74, 0.3)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Правила проживания
                </h3>
                <p className="text-sm text-gray-200 mb-6">
                  Условия проживания и правила поведения
                </p>
                <Link
                  href="/rules"
                  className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 font-medium border border-white/30"
                  data-testid="link-rules"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Читать документ
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-lg border border-white/20">
                <p className="text-sm text-gray-200">
                  Вопросы? Свяжитесь с нами:{" "}
                  <a 
                    href="mailto:lavillapine@yandex.ru" 
                    className="text-yellow-300 hover:text-yellow-200 underline"
                  >
                    lavillapine@yandex.ru
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}