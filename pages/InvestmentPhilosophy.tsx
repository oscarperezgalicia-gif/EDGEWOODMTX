
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const InvestmentPhilosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl border-l-4 border-brand-gold pl-8">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('philosophyPage.tag')}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-12 leading-tight">
            {t('philosophyPage.headline')}
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl">
            {t('philosophyPage.subheadline')}
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {(t('philosophyPage.items') as any[]).map((item, idx) => (
            <div key={idx} className="p-10 border border-gray-100 hover:bg-brand-cream/30 transition-colors group">
              <span className="text-brand-gold font-serif text-4xl block mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-4">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-charcoal p-12 lg:p-24 text-white">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif mb-8">{t('philosophyPage.holding.title')}</h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
              {t('philosophyPage.holding.body')}
            </p>
            <div className="h-1 w-20 bg-brand-gold/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPhilosophy;
