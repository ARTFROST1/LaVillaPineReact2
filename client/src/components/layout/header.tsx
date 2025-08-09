import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import CustomTreeIcon from "@/components/ui/custom-tree-icon";
import { useDynamicContrast } from "@/hooks/useDynamicContrast";

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

  // Dynamic text color classes based on background with transparency for menu items
  const dynamicTextClass = textColor === 'light' ? 'text-white' : 'text-black';
  const transparentTextClass = textColor === 'light' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black';
  
  // Dynamic border color styles based on background
  const dynamicBorderStyle = textColor === 'light' 
    ? { '--border-color': 'rgba(255, 255, 255, 0.15)', '--border-hover-color': 'rgba(255, 255, 255, 0.4)' }
    : { '--border-color': 'rgba(0, 0, 0, 0.15)', '--border-hover-color': 'rgba(0, 0, 0, 0.4)' };

  return (
    <header 
      className={`glass-header-light dark:glass-header-dark fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-3 sm:px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group" data-testid="link-home-logo">
            <div className="relative">
              <CustomTreeIcon className={`h-7 w-7 sm:h-9 sm:w-9 transition-transform duration-300 group-hover:scale-110 ${dynamicTextClass}`} />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={`text-lg sm:text-xl md:text-2xl font-bold font-display transition-all duration-300 ${dynamicTextClass}`}>
              {SITE_CONFIG.name}
            </span>
          </Link>
          
          <div 
            className="hidden md:flex items-center space-x-2 lg:space-x-4" 
            style={dynamicBorderStyle as React.CSSProperties}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`ios-glass-nav-button text-sm lg:text-base transition-colors duration-300 ${
                  location === item.href ? "active font-semibold text-yellow-500 hover:text-yellow-400" : transparentTextClass
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="ios-glass-booking-button text-xs lg:text-sm font-medium"
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
              className={`glass-nav-item transition-colors duration-300 ${dynamicTextClass}`}
              data-testid="button-mobile-menu"
              style={{ padding: '12px', minWidth: '44px', width: '44px' }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* iOS 26 Liquid Glass Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide">
            <div 
              className="glass-mobile-menu dark:glass-mobile-menu-dark"
              style={dynamicBorderStyle as React.CSSProperties}
            >
              {navigation.map((item, index) => (
                <div 
                  key={item.name} 
                  className={`glass-mobile-item ${location === item.href ? "active" : ""}`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'liquid-glass-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
                    ...dynamicBorderStyle
                  } as React.CSSProperties}
                >
                  <Link
                    href={item.href}
                    className={`ios-glass-mobile-nav block transition-all duration-300 font-medium text-base ${
                      location === item.href ? "font-semibold text-yellow-500" : transparentTextClass
                    }`}
                    style={dynamicBorderStyle as React.CSSProperties}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
{item.name}
                  </Link>
                </div>
              ))}
              <div 
                className="glass-mobile-item booking-item"
                style={{ 
                  animationDelay: `${navigation.length * 50}ms`,
                  animation: 'liquid-glass-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
                  ...dynamicBorderStyle
                } as React.CSSProperties}
              >
                <Link
                  href="/booking"
                  className="ios-glass-mobile-booking block transition-all duration-300 font-medium text-base text-center"
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
