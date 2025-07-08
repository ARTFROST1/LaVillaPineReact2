import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-200"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'ru' ? 'EN' : 'RU'}
      </span>
    </Button>
  );
}