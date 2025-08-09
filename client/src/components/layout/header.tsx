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
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Игнорируем маленькие изменения прокрутки
      if (scrollDifference < 5) return;
      
      // Показываем Header если прокрутили в самый верх
      if (currentScrollY <= 50) {
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

    // Добавляем throttling для лучшей производительности
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`glass-header glass-shimmer-effect fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 logo-glass-effect">
            <CustomTreeIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-display">{SITE_CONFIG.name}</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`glass-nav-item text-sm lg:text-base text-primary font-medium ${
                  location === item.href ? "active" : ""
                }`}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/booking">
              <Button 
                size="sm"
                className="glass-button text-white font-medium text-xs lg:text-sm px-4 lg:px-6 py-2.5 ml-2"
                data-testid="button-booking"
              >
                Забронировать
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="glass-nav-item text-primary p-2"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-mobile-menu animate-slide-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`glass-mobile-item text-primary font-medium ${
                    location === item.href ? "text-accent font-semibold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="glass-button text-white font-medium w-full mt-2"
                  data-testid="mobile-button-booking"
                >
                  Забронировать
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
