import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import CustomTreeIcon from "@/components/ui/custom-tree-icon";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Галерея", href: "/gallery" },
    { name: "Контакты", href: "/contacts" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Отслеживание прокрутки для скрытия/показа Header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Показываем Header если прокрутили в самый верх
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } 
      // Скрываем Header если прокручиваем вниз и уже прокрутили больше 100px
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
        setIsMobileMenuOpen(false); // Закрываем мобильное меню при скрытии Header
      } 
      // Показываем Header если прокручиваем вверх
      else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-3 sm:px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group" data-testid="link-home-logo">
            <div className="relative">
              <CustomTreeIcon className="h-7 w-7 sm:h-9 sm:w-9 text-black transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-display text-black transition-all duration-300">
              {SITE_CONFIG.name}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg bg-white text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-gray-50 ${
                  location === item.href ? "text-accent font-semibold" : "text-black"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="px-4 py-2 rounded-lg bg-white text-xs lg:text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-50"
              data-testid="link-booking"
            >
              Забронировать
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="default"
              onClick={toggleMobileMenu}
              className="p-3 rounded-lg bg-white text-black hover:bg-gray-50 transition-colors duration-300"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Минималистичное мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="mt-4 pt-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg bg-white font-medium text-base transition-colors duration-300 hover:bg-gray-50 ${
                      location === item.href ? "text-accent font-semibold" : "text-black"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/booking"
                  className="px-4 py-3 rounded-lg bg-white font-medium text-base text-black transition-colors duration-300 hover:bg-gray-50 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="link-mobile-booking"
                >
                  Забронировать
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
