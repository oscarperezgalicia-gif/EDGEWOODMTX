
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=2000" 
            alt="Majestic tree at sunrise" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block animate-fade-in">{t('home.hero.tag')}</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-10 leading-[1.1]">
              {t('home.hero.headline')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-2xl">
              {t('home.hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/contact" className="bg-brand-gold text-brand-charcoal px-12 py-5 text-xs uppercase tracking-[0.25em] font-bold hover:bg-white transition-all text-center shadow-xl">
                {t('home.hero.cta1')}
              </Link>
              <Link to="/about" className="border border-white/30 text-white px-12 py-5 text-xs uppercase tracking-[0.25em] font-bold hover:bg-white/10 transition-all text-center">
                {t('home.hero.cta2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">{t('home.who.tag')}</span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-10 leading-tight">
                {t('home.who.headline')}
              </h2>
              <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed italic">
                "{t('home.who.quote')}"
              </p>
              <p className="text-gray-600 mb-12 font-light leading-relaxed">
                {t('home.who.body')}
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-charcoal font-bold text-[10px] uppercase tracking-[0.3em] group">
                {t('home.who.link')} <span className="ml-4 transition-transform group-hover:translate-x-3">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/10 -z-10"></div>
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=800" 
                  alt="Texture and Shadow" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">{t('home.focus.tag')}</span>
          <h2 className="text-5xl font-serif text-brand-charcoal">{t('home.focus.headline')}</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {(t('home.focus.items') as any[]).map((item, i) => (
            <div key={i} className="group p-12 border border-gray-100 hover:border-brand-gold/30 transition-all duration-500 bg-brand-cream/30 hover:bg-white hover:shadow-2xl">
              <h3 className="text-2xl font-serif text-brand-charcoal mb-8 group-hover:text-brand-gold transition-colors">{item.title}</h3>
              <p className="text-gray-500 font-light mb-12 text-sm leading-relaxed">{item.desc}</p>
              <Link to={['/philosophy', '/real-estate', '/advisory'][i]} className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal hover:underline decoration-brand-gold underline-offset-8">
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-charcoal p-16 md:p-24 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1533560223577-62a933256073?auto=format&fit=crop&q=80&w=1600" 
                alt="Topography" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-8 block">{t('home.geo.tag')}</span>
              <h2 className="text-5xl font-serif text-white mb-10 leading-tight">{t('home.geo.headline')}</h2>
              <p className="text-gray-400 font-light mb-12 leading-relaxed text-lg">
                {t('home.geo.body')}
              </p>
              <Link to="/contact" className="inline-block border border-brand-gold text-brand-gold px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                {t('nav.inquiry')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-32 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl font-serif text-brand-charcoal italic leading-relaxed mb-16 px-10">
            "{t('home.philosophy')}"
          </p>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-brand-gold"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
