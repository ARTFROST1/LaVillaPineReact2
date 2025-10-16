import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useDynamicContrast } from "@/hooks/useDynamicContrast";
import { SiInstagram, SiTelegram } from "react-icons/si";
// Logo from public directory
const logoImage = "/images/icons/logo.webp";

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
    { name: "Правила", href: "/rules" },
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

  // Fixed white text for all elements
  const fixedTextClass = 'text-white';
  const transparentTextClass = 'text-white hover:text-white';
  
  // Fixed white border styles
  const dynamicBorderStyle = { '--border-color': 'rgba(255, 255, 255, 0.15)', '--border-hover-color': 'rgba(255, 255, 255, 0.4)' };

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
                className="h-14 w-auto sm:h-10 md:h-12 transition-transform duration-300 group-hover:scale-110 object-contain"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {/* Navigation */}
            <div 
              className="flex items-center space-x-2 lg:space-x-4" 
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
                className="loft-booking-button text-xs lg:text-sm font-medium text-[#f2ede6]"
                data-testid="link-booking"
              >
                Забронировать
              </Link>
            </div>

            {/* Contact Info & Social - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 border-l border-opacity-20 pl-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className={`flex items-center space-x-2 ${transparentTextClass} hover:opacity-80 transition-opacity`}
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">{SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${transparentTextClass} hover:opacity-80 transition-opacity`}
                data-testid="link-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${transparentTextClass} hover:opacity-80 transition-opacity`}
                data-testid="link-telegram"
              >
                <SiTelegram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            {/* Social Icons - Mobile */}
            <div className="flex items-center space-x-3">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${transparentTextClass} hover:opacity-80 transition-opacity`}
                data-testid="link-mobile-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${transparentTextClass} hover:opacity-80 transition-opacity`}
                data-testid="link-mobile-telegram"
              >
                <SiTelegram className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
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
          <div className="md:hidden flex flex-col gap-2 mt-4 animate-slide">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`loft-nav-button ${location === item.href ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: 'loft-appear 0.4s ease-out both'
                } as React.CSSProperties}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="loft-booking-button mt-2 text-[#f8f8f8]"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="link-mobile-booking"
              style={{ 
                animationDelay: `${navigation.length * 50}ms`,
                animation: 'loft-appear 0.4s ease-out both'
              } as React.CSSProperties}
            >
              Забронировать
            </Link>

            {/* Phone Number - Mobile Menu */}
            <div 
              className="mt-4 pt-4 border-t border-opacity-20"
              style={{ 
                borderColor: 'rgba(255,255,255,0.2)',
                animationDelay: `${(navigation.length + 1) * 50}ms`,
                animation: 'loft-appear 0.4s ease-out both'
              } as React.CSSProperties}
            >
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className={`flex items-center space-x-3 ${transparentTextClass} hover:opacity-80 transition-opacity py-2`}
                data-testid="link-mobile-phone"
              >
                <Phone className="h-5 w-5" />
                <span className="text-base font-medium">{SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
