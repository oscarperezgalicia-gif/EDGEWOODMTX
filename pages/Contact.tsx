
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">{t('contactPage.tag')}</span>
            <h1 className="text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
              {t('contactPage.headline')}
            </h1>
            <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
              {t('contactPage.subheadline')}
            </p>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-4">{t('contactPage.hq')}</h4>
                <p className="text-gray-600 font-light">
                  180 State St Suite 225<br />
                  Southlake, TX 76092
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-4">{t('contactPage.direct')}</h4>
                <p className="text-gray-600 font-light">
                  General: info@edgewoodlp.com<br />
                  Advisory: advisory@edgewoodlp.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-10 md:p-16 shadow-lg hover:border-brand-gold/20 transition-colors">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{t('contactPage.labels.name')}</label>
                    <input type="text" required className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{t('contactPage.labels.org')}</label>
                    <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{t('contactPage.labels.email')}</label>
                  <input type="email" required className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{t('contactPage.labels.type')}</label>
                  <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold bg-white">
                    {(t('contactPage.types') as string[]).map((type, i) => (
                      <option key={i}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{t('contactPage.labels.message')}</label>
                  <textarea rows={4} className="w-full border border-gray-100 p-4 focus:outline-none focus:border-brand-gold bg-brand-cream/10"></textarea>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-brand-charcoal text-white py-5 text-sm uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors">
                    {t('contactPage.button')}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-3xl font-serif text-brand-charcoal mb-4">{t('contactPage.success.title')}</h3>
                <p className="text-gray-500 font-light">{t('contactPage.success.body')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
