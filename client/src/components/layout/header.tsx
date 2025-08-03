import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import CustomTreeIcon from "@/components/ui/custom-tree-icon";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Галерея", href: "/gallery" },
    { name: "Контакты", href: "/contacts" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <CustomTreeIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-display">{SITE_CONFIG.name}</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-base text-primary hover:text-accent transition-colors duration-200 ${
                  location === item.href ? "text-accent font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/booking">
              <Button 
                size="sm"
                className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-md text-xs lg:text-sm px-3 lg:px-4 py-2"
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
              className="text-primary p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-slide-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-primary hover:text-accent transition-colors duration-200 ${
                    location === item.href ? "text-accent font-semibold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-md w-full">
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
