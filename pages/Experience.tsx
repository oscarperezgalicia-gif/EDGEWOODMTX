
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('experiencePage.tag')}</span>
          <h1 className="text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
            {t('experiencePage.headline')}
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            {t('experiencePage.subheadline')}
          </p>
        </div>

        <div className="space-y-32">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-8 border-b border-gray-100 pb-4">{t('experiencePage.assetCategories.title')}</h3>
              <ul className="space-y-6">
                {(t('experiencePage.assetCategories.items') as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg font-serif text-brand-charcoal">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-cream/30 p-12">
              <h4 className="text-sm uppercase tracking-widest font-bold text-brand-charcoal mb-6">{t('experiencePage.metrics.title')}</h4>
              <div className="space-y-8">
                <div>
                  <span className="block text-4xl font-serif text-brand-charcoal">{t('experiencePage.metrics.item1.val')}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">{t('experiencePage.metrics.item1.label')}</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-brand-charcoal">{t('experiencePage.metrics.item2.val')}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">{t('experiencePage.metrics.item2.label')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-12 border-b border-gray-100 pb-4">{t('experiencePage.advisory.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {(t('experiencePage.advisory.items') as any[]).map((item, idx) => (
                <div key={idx} className="border-l border-brand-gold/30 pl-8">
                  <h4 className="font-serif text-xl mb-4 text-brand-charcoal">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
