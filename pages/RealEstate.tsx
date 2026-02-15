
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const RealEstate: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('realEstatePage.tag')}</span>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-8 leading-tight">
              {t('realEstatePage.headline')}
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              {t('realEstatePage.subheadline')}
            </p>
          </div>
          <div className="aspect-video grayscale">
            <img 
              src="https://images.unsplash.com/photo-1449156001103-f2419b8cc3a8?auto=format&fit=crop&q=80&w=1200" 
              alt="Architectural Detail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {(t('realEstatePage.grid') as any[]).map((item, i) => (
            <div key={i}>
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6 border-b border-gray-100 pb-4">{item.title}</h3>
              <p className="text-gray-600 font-light">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-brand-cream/50 text-center">
          <h2 className="text-3xl font-serif text-brand-charcoal mb-6">{t('realEstatePage.market.title')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 font-light">
            {t('realEstatePage.market.body')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
