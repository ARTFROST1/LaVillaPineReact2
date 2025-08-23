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
    <div className="fixed bottom-4 right-4 z-40 max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            Мы используем cookie для улучшения работы сайта.{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
              Подробнее
            </Link>
          </p>
          <Button
            onClick={handleDecline}
            variant="ghost"
            size="sm"
            className="p-0 h-5 w-5 flex-shrink-0"
            data-testid="button-close-cookies"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
        <Button
          onClick={handleAccept}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-xs py-2"
          size="sm"
          data-testid="button-accept-cookies"
        >
          Принять
        </Button>
      </div>
    </div>
  );
}