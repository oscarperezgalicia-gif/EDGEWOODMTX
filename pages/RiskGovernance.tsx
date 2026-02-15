
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const RiskGovernance: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('riskPage.tag')}</span>
          <h1 className="text-5xl font-serif text-brand-charcoal mb-8">{t('riskPage.headline')}</h1>
          <p className="text-xl text-gray-600 font-light italic">
            “{t('riskPage.quote')}”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(t('riskPage.cards') as any[]).map((card, i) => (
            <div key={i} className="bg-white p-12 border border-gray-100 shadow-sm hover:border-brand-gold/30 transition-colors">
              <h3 className="text-xl font-serif text-brand-charcoal mb-6">{card.title}</h3>
              <p className="text-gray-600 font-light">{card.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto border-t border-gray-200 pt-12">
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6">{t('riskPage.transparency.title')}</h4>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            {t('riskPage.transparency.body')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskGovernance;
