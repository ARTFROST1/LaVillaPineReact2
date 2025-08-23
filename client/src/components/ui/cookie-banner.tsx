import { useState, useEffect } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { X, Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, дал ли пользователь уже согласие
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-white shadow-lg border">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                Мы используем cookies
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Этот сайт использует cookies для улучшения пользовательского опыта и 
                сохранения ваших предпочтений. Продолжая использовать сайт, вы соглашаетесь 
                с нашей политикой использования cookies.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={acceptCookies}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Принять все
                </Button>
                <Button 
                  onClick={declineCookies}
                  variant="outline"
                  className="border-gray-300"
                >
                  Отклонить
                </Button>
              </div>
            </div>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}