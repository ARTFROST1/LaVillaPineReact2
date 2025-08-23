import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли уже согласие
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Мы используем файлы cookie, чтобы обеспечить вам наилучший опыт использования нашего веб-сайта. 
              Для получения дополнительной информации прочтите наше{" "}
              <Link href="/consent" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                Согласие на обработку и передачу персональных данных
              </Link>{" "}
              и{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                Политику конфиденциальности
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleAccept}
              className="bg-green-600 hover:bg-green-700 text-white"
              size="sm"
              data-testid="button-accept-cookies"
            >
              Принять
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              data-testid="button-decline-cookies"
            >
              Отклонить
            </Button>
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="sm"
              className="p-1"
              data-testid="button-close-cookies"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}