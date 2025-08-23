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
      
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-200 mb-4">
              Правовая информация
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Ознакомьтесь с важными документами, регулирующими использование нашего сайта и услуг проживания
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {/* Политика конфиденциальности */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl text-stone-800 dark:text-stone-200">
                  Политика конфиденциальности
                </CardTitle>
                <CardDescription className="text-stone-600 dark:text-stone-400">
                  Информация о том, как мы собираем, используем и защищаем ваши персональные данные
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  data-testid="link-privacy-policy"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Читать документ
                </Link>
              </CardContent>
            </Card>

            {/* Согласие на обработку данных */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl text-stone-800 dark:text-stone-200">
                  Согласие на обработку данных
                </CardTitle>
                <CardDescription className="text-stone-600 dark:text-stone-400">
                  Форма согласия на обработку и передачу персональных данных для бронирования
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link
                  href="/consent"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  data-testid="link-consent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Читать документ
                </Link>
              </CardContent>
            </Card>

            {/* Правила проживания */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-xl text-stone-800 dark:text-stone-200">
                  Правила проживания
                </CardTitle>
                <CardDescription className="text-stone-600 dark:text-stone-400">
                  Условия проживания, правила поведения и информация о наших услугах
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link
                  href="/rules"
                  className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  data-testid="link-rules"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Читать документ
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-stone-200 dark:bg-stone-700 rounded-lg">
              <p className="text-sm text-stone-700 dark:text-stone-300">
                Вопросы? Свяжитесь с нами:{" "}
                <a 
                  href="mailto:lavillapine@yandex.ru" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  lavillapine@yandex.ru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}