"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contacts', href: '#contacts' },
    { name: 'Resume', href: '/resume', isExternal: true },
  ];

  const handleNavigation = (item) => {
    if (item.isExternal) {
      window.location.href = item.href;
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Don't render navigation until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gradient">Adan</div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform cursor-pointer"
              aria-label="Go to home section"
            >
              Adan
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label={`Navigate to ${item.name}${item.isExternal ? '' : ' section'}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <nav 
              className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  aria-label={`Navigate to ${item.name}${item.isExternal ? '' : ' section'}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
