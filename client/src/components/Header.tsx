import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663308445010/WFcpuDgACN7X6A3ZWGjPoj/logo-ecomax_149aa708.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Projets', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg backdrop-blur-md bg-opacity-95 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src={LOGO_URL} 
              alt="EcoMax Energie" 
              className="h-16 w-auto brightness-110 contrast-105" 
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-gray-700 hover:text-accent font-medium transition-colors duration-300">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/quote">
            <a className="btn-primary">
              Demander un devis
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block py-2 text-gray-700 hover:text-accent font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/quote">
              <a
                className="btn-primary block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander un devis
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
