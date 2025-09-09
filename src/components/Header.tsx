import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-800">
          <span className="font-manrope">Digital</span>
          <span className="text-yellow-600">Pro</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'sobre', 'servicos', 'portfolio', 'contato'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`font-inter hover:text-yellow-600 transition-colors capitalize ${
                  isScrolled ? 'text-emerald-800' : 'text-white'
                }`}
              >
                {item === 'servicos' ? 'Serviços' : item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-emerald-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-emerald-800' : 'text-white'} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col py-4">
              {['home', 'sobre', 'servicos', 'portfolio', 'contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 text-emerald-800 hover:bg-gray-50 capitalize"
                  >
                    {item === 'servicos' ? 'Serviços' : item}
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