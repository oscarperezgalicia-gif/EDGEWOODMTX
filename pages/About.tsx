
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('about.tag')}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-12 leading-tight">
            {t('about.headline')}
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-20">
          <div className="lg:col-span-4">
            <div className="sticky top-40">
              <div className="h-px w-full bg-brand-charcoal/10 mb-8"></div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-charcoal mb-12">{t('about.pillars.title')}</h3>
              <ul className="space-y-8">
                <li>
                  <h4 className="font-serif text-xl text-brand-charcoal mb-2">{t('about.pillars.item1.title')}</h4>
                  <p className="text-sm text-gray-500 font-light">{t('about.pillars.item1.desc')}</p>
                </li>
                <li>
                  <h4 className="font-serif text-xl text-brand-charcoal mb-2">{t('about.pillars.item2.title')}</h4>
                  <p className="text-sm text-gray-500 font-light">{t('about.pillars.item2.desc')}</p>
                </li>
                <li>
                  <h4 className="font-serif text-xl text-brand-charcoal mb-2">{t('about.pillars.item3.title')}</h4>
                  <p className="text-sm text-gray-500 font-light">{t('about.pillars.item3.desc')}</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-12 text-lg text-gray-600 font-light leading-relaxed">
              <p>{t('about.body1')}</p>
              <div className="aspect-[16/9] overflow-hidden my-16">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
                  alt="Minimalist Workspace" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <p>{t('about.body2')}</p>
              <h2 className="text-3xl font-serif text-brand-charcoal pt-8">{t('about.fiduciary.title')}</h2>
              <p>{t('about.fiduciary.body1')}</p>
              <p>{t('about.fiduciary.body2')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
