
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Insights: React.FC = () => {
  const { t } = useLanguage();
  const articles = t('insightsPage.articles') as any[];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('insightsPage.tag')}</span>
          <h1 className="text-5xl font-serif text-brand-charcoal">{t('insightsPage.headline')}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{article.category}</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">{article.date}</span>
              </div>
              <h3 className="text-2xl font-serif text-brand-charcoal group-hover:text-brand-gold transition-colors leading-snug">
                {article.title}
              </h3>
              <div className="mt-6 flex items-center text-xs uppercase tracking-widest font-bold text-brand-charcoal opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">
                {t('insightsPage.cta')} <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-brand-cream/30 text-center">
          <p className="text-gray-500 font-light italic mb-8">{t('insightsPage.subscribe.text')}</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder={t('insightsPage.subscribe.placeholder')} 
              className="flex-grow px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand-gold bg-white"
            />
            <button className="bg-brand-charcoal text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors">
              {t('insightsPage.subscribe.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
