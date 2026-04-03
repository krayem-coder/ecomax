import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ECO MAX Energie</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solutions solaires innovantes pour votre transition énergétique. Expertise, fiabilité et impact positif.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-accent transition-colors">Accueil</a>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <a className="text-gray-400 hover:text-accent transition-colors">Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-gray-400 hover:text-accent transition-colors">Projets</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-accent transition-colors">À propos</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+21620393508" className="text-gray-400 hover:text-accent transition-colors">
                  +216 20 393 508
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:contact.ecomaxenergie@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                  contact.ecomaxenergie@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Route Manzel Chaker<br />
                  Sfax, Tunisie
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ecomaxenergie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/eco.maxenergie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-2">À propos</h5>
              <p className="text-gray-400 text-sm">
                ECO MAX Energie - Société spécialisée dans l'installation de solutions photovoltaïques.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Horaires</h5>
              <p className="text-gray-400 text-sm">
                Lundi - Vendredi : 8h00 - 18h00<br />
                Samedi : 9h00 - 13h00<br />
                Dimanche : Fermé
              </p>
            </div>
            <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p>© {currentYear} ECO MAX Energie. Tous droits réservés.</p>
            <p className="mt-2">  pour la transition énergétique en Tunisie</p>
          </div>
          </div>

        
          
        </div>
      </div>
    </footer>
  );
}
