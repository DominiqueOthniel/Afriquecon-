'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#routes', label: 'Destinations' },
    { href: '#comfort', label: 'Confort' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Afrique-con
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                #ConnectingAfrica
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#booking"
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-200"
            >
              Réserver maintenant
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-amber-600'
                      : 'text-white hover:text-amber-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2.5 rounded-full font-semibold text-center"
              >
                Réserver maintenant
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
