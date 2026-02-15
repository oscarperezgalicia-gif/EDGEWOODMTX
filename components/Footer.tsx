
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <Logo light className="h-12" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-8 text-brand-gold">Platform</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/philosophy" className="hover:text-white transition-colors">{t('nav.philosophy')}</Link></li>
              <li><Link to="/real-estate" className="hover:text-white transition-colors">{t('nav.realEstate')}</Link></li>
              <li><Link to="/advisory" className="hover:text-white transition-colors">{t('nav.advisory')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-8 text-brand-gold">Governance</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium text-gray-400">
              <li><Link to="/risk-governance" className="hover:text-white transition-colors">Risk & Compliance</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">{t('nav.experience')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-[0.15em] font-medium">
              <p className="mb-6">
                {t('footer.legal')}
              </p>
              <p>
                © {new Date().getFullYear()} Edgewood Management & Consulting LP. 180 State St Suite 225, Southlake, TX 76092.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
