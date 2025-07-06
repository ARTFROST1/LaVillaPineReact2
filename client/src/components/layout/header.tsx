import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, TreePine } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-primary">{SITE_CONFIG.name}</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-primary hover:text-accent transition-colors duration-200 ${
                  location === item.href ? "text-accent font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/booking">
              <Button className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-white text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-md">
                Забронировать
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-in">
            <div className="flex flex-col space-y-4">
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
                <Button className="bg-accent hover:bg-white/20 hover:backdrop-blur-sm hover:text-white text-white border-2 border-accent hover:border-white transition-all duration-300 shadow-md w-full">
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
