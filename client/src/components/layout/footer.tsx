import { Link } from "wouter";
import { TreePine } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import AvitoIcon from "@/components/ui/avito-icon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-gray-300">{SITE_CONFIG.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p>{SITE_CONFIG.phone}</p>
              <p>{SITE_CONFIG.email}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.vk}
                className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-vk text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.telegram}
                className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram text-xl"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.avito}
                className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AvitoIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
