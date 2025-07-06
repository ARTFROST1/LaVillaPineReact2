import { Link } from "wouter";
import { TreePine } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

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
            <p className="text-gray-300">
              {SITE_CONFIG.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-accent transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors duration-200">About</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors duration-200">Gallery</Link></li>
              <li><Link href="/contacts" className="hover:text-accent transition-colors duration-200">Contacts</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Amenities</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Private Sauna</li>
              <li>Heated Pool</li>
              <li>Forest Location</li>
              <li>Designer Interiors</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>{SITE_CONFIG.phone}</p>
              <p>{SITE_CONFIG.email}</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href={SITE_CONFIG.socialLinks.instagram} className="text-gray-300 hover:text-accent transition-colors duration-200">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href={SITE_CONFIG.socialLinks.facebook} className="text-gray-300 hover:text-accent transition-colors duration-200">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href={SITE_CONFIG.socialLinks.whatsapp} className="text-gray-300 hover:text-accent transition-colors duration-200">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href={SITE_CONFIG.socialLinks.telegram} className="text-gray-300 hover:text-accent transition-colors duration-200">
                <i className="fab fa-telegram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
