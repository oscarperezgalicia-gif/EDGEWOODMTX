
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.philosophy'), path: '/philosophy' },
    { name: t('nav.realEstate'), path: '/real-estate' },
    { name: t('nav.advisory'), path: '/advisory' },
    { name: t('nav.experience'), path: '/experience' },
    { name: t('nav.insights'), path: '/insights' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const textColor = scrolled ? 'text-brand-charcoal' : (isHome ? 'text-white' : 'text-brand-charcoal');
  const logoLight = !scrolled && isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo className="h-10" light={logoLight} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-gold ${textColor}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-2 border-l border-gray-300 pl-6 h-4">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${language === 'en' ? 'text-brand-gold' : textColor}`}
              >
                EN
              </button>
              <span className={`text-[9px] opacity-30 ${textColor}`}>|</span>
              <button 
                onClick={() => setLanguage('es')}
                className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${language === 'es' ? 'text-brand-gold' : textColor}`}
              >
                ES
              </button>
            </div>

            <Link
              to="/contact"
              className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all border ${scrolled ? 'border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white' : (isHome ? 'border-white text-white hover:bg-white hover:text-brand-charcoal' : 'border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white')}`}
            >
              {t('nav.inquiry')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} focus:outline-none transition-colors`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream shadow-2xl absolute top-full left-0 w-full p-8 flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-widest font-bold text-brand-charcoal hover:text-brand-gold border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-2">
            <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={`text-xs uppercase tracking-widest font-bold ${language === 'en' ? 'text-brand-gold' : 'text-gray-500'}`}>English</button>
            <button onClick={() => { setLanguage('es'); setIsOpen(false); }} className={`text-xs uppercase tracking-widest font-bold ${language === 'es' ? 'text-brand-gold' : 'text-gray-500'}`}>Español</button>
          </div>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-brand-charcoal text-white text-center py-4 text-xs uppercase tracking-widest font-bold"
          >
            {t('nav.inquiry')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
