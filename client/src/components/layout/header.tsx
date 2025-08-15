import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useDynamicContrast } from "@/hooks/useDynamicContrast";
import logoImage from "@assets/logo_image.jpg";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Use dynamic contrast hook
  const { textColor } = useDynamicContrast({
    headerSelector: 'header',
    threshold: 128,
    currentPath: location
  });

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

  // Dynamic text color classes based on background - solid colors only
  const dynamicTextClass = textColor === 'light' ? 'text-white' : 'text-black';
  const transparentTextClass = textColor === 'light' ? 'text-white hover:text-white' : 'text-black hover:text-black';
  
  // Dynamic border color styles based on background
  const dynamicBorderStyle = textColor === 'light' 
    ? { '--border-color': 'rgba(255, 255, 255, 0.15)', '--border-hover-color': 'rgba(255, 255, 255, 0.4)' }
    : { '--border-color': 'rgba(0, 0, 0, 0.15)', '--border-hover-color': 'rgba(0, 0, 0, 0.4)' };

  return (
    <header 
      className={`loft-header-light dark:loft-header-dark fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-3 sm:px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group" data-testid="link-home-logo">
            <div className="relative">
              <img 
                src={logoImage} 
                alt={SITE_CONFIG.name}
                className="h-8 w-auto sm:h-10 md:h-12 transition-transform duration-300 group-hover:scale-110 object-contain"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          
          <div 
            className="hidden md:flex items-center space-x-2 lg:space-x-4" 
            style={dynamicBorderStyle as React.CSSProperties}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`loft-nav-button text-sm lg:text-base transition-colors duration-300 ${
                  location === item.href ? "active font-semibold" : ""
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="loft-booking-button text-xs lg:text-sm font-medium"
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
              className={`loft-nav-item transition-colors duration-300`}
              data-testid="button-mobile-menu"
              style={{ padding: '12px', minWidth: '44px', width: '44px' }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Loft Style Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide">
            <div className="loft-mobile-menu">
              {navigation.map((item, index) => (
                <div 
                  key={item.name} 
                  className={`loft-mobile-item ${location === item.href ? "active" : ""}`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'loft-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) both'
                  } as React.CSSProperties}
                >
                  <Link
                    href={item.href}
                    className={`loft-mobile-nav block transition-all duration-300 font-medium text-base ${
                      location === item.href ? "active font-semibold" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div 
                className="loft-mobile-item booking-item"
                style={{ 
                  animationDelay: `${navigation.length * 50}ms`,
                  animation: 'loft-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) both'
                } as React.CSSProperties}
              >
                <Link
                  href="/booking"
                  className="loft-mobile-booking block transition-all duration-300 font-medium text-base text-center"
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
