import { Link } from "wouter";
import { SITE_CONFIG } from "@/lib/constants";
import AvitoIcon from "@/components/ui/avito-icon";

// Logo from public directory
const logoImage = "/images/icons/logo.png";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 pb-20 border-t border-border" style={{
      background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
      boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.35), 0 -4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center group mb-4">
              <img 
                src={logoImage} 
                alt={SITE_CONFIG.name}
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 object-contain"
              />
            </div>
            <p className="text-muted-foreground">{SITE_CONFIG.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{SITE_CONFIG.phone}</p>
              <p>{SITE_CONFIG.email}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.vk}
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-vk text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.telegram}
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.avito}
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AvitoIcon className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
