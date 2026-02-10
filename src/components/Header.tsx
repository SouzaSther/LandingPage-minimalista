import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'contato', label: 'Contato' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-emerald-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className={`font-manrope transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
            Digital
          </span>
          <span className="text-yellow-500">Pro</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative font-inter px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? activeSection === item.id
                      ? 'text-emerald-800 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-800 hover:bg-gray-50'
                    : activeSection === item.id
                      ? 'text-yellow-400'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-emerald-800' : 'bg-yellow-400'
                  }`} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <button
          onClick={() => scrollToSection('contato')}
          className={`hidden md:block px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            isScrolled
              ? 'bg-emerald-800 text-white hover:bg-emerald-900'
              : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
          }`}
        >
          Fale Conosco
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-emerald-800" size={24} />
          ) : (
            <Menu className={`transition-colors ${isScrolled ? 'text-emerald-800' : 'text-white'}`} size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 md:hidden">
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-6 py-3 font-inter text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-emerald-800 bg-emerald-50 border-l-2 border-emerald-800'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-800'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
