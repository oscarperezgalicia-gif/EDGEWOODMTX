
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Advisory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('advisoryPage.tag')}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal leading-tight">
            {t('advisoryPage.headline')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {(t('advisoryPage.sections') as any[]).map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-serif text-brand-charcoal">{section.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {section.desc}
              </p>
              <ul className="text-sm space-y-3 text-brand-gold font-medium">
                {section.points.map((p: string, i: number) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-charcoal text-white p-12 md:p-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif mb-8">{t('advisoryPage.clientProfile.title')}</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              {t('advisoryPage.clientProfile.body')}
            </p>
            <div className="h-px w-full bg-white/10 mb-8"></div>
            <p className="text-sm italic text-gray-400">
              {t('advisoryPage.clientProfile.footer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
