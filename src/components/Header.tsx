import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home', href: '#home' },
    { name: 'Produtos', page: 'produtos', href: '#produtos' },
    { name: 'Depoimentos', page: 'home', href: '#depoimentos' },
    { name: 'Serviços', page: 'home', href: '#servicos' },
    { name: 'Localização', page: 'home', href: '#localizacao' },
    { name: 'Fale Conosco', page: 'home', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    e.preventDefault();
    setCurrentPage(link.page);
    setIsMobileMenuOpen(false);
    
    if (link.page === 'home' && link.href !== '#home') {
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-[#1f2937] shadow-lg py-4 border-b border-gray-800' : 'bg-[#101827] py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, { page: 'home', href: '#home' })}
          className={`flex items-center transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
        >
          <img 
            src="/logo.png" 
            alt="Yanni Solar Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-gray-300' : 'text-gray-300'
              } ${currentPage === link.page && link.page === 'produtos' ? 'text-orange-500' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 hover:text-orange-500 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1f2937] border-t border-gray-800 shadow-xl">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm font-medium text-gray-300 hover:text-orange-500 py-2 px-2 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
