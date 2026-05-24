import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import imgLaser from '../assets/hero-laser.jpg';
import imgFacade from '../assets/hero-facade.jpg';
import imgGate from '../assets/hero-gate.jpg';

export default function Hero({ lang }) {
  const t = translations[lang];
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    {
      image: imgLaser,
      subtitle: lang === 'en' ? 'Advanced CNC Fiber Laser' : 'ليزر الألياف البصرية المتقدم CNC'
    },
    {
      image: imgFacade,
      subtitle: lang === 'en' ? 'High-End Architectural Panels' : 'قواطع معمارية وديكورات فاخرة'
    },
    {
      image: imgGate,
      subtitle: lang === 'en' ? 'Bespoke Luxury Blacksmithing' : 'أعمال حدادة فنية يدوية فاخرة'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
    >
      {/* Background Banners Slideshow */}
      {banners.map((banner, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(to right, rgba(9, 11, 14, 0.95) 30%, rgba(9, 11, 14, 0.6) 70%, rgba(9, 11, 14, 0.85) 100%), url(${banner.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: activeBanner === index ? 1 : 0,
            zIndex: 1,
            transition: 'opacity 1.5s ease-in-out'
          }}
          className="hero-banner-image"
        />
      ))}

      {/* Floating Spark Particles */}
      <div className="sparks-container" style={{ zIndex: 2 }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="spark-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container" style={{ zIndex: 3, position: 'relative' }}>
        <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Active Banner Indicator Tag */}
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              backgroundColor: 'rgba(58, 177, 77, 0.15)',
              border: '1px solid var(--clr-border-glow)',
              padding: '6px 14px',
              borderRadius: '50px',
              color: 'var(--clr-green-primary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              width: 'fit-content'
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--clr-laser-glow)',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'scale-infinite 1s infinite'
            }} />
            {banners[activeBanner].subtitle}
          </div>

          {/* Slogans */}
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: '1.1' }} className="hero-h1">
            {t.heroTitle}
            <span style={{ 
              display: 'block', 
              color: 'var(--clr-green-primary)',
              textShadow: '0 0 20px rgba(58, 177, 77, 0.3)'
            }}>
              {t.heroSubTitle}
            </span>
          </h1>

          <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '580px' }}>
            {t.heroDesc}
          </p>

          {/* Dual CTAs */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }} className="hero-actions">
            <button 
              onClick={() => handleScrollTo('quote')}
              className="btn btn-primary btn-laser"
              style={{ fontSize: '1rem', padding: '16px 32px' }}
            >
              <i className="fa-solid fa-wand-magic-sparkles" />
              {t.heroCTAQuote}
            </button>

            <button 
              onClick={() => handleScrollTo('portfolio')}
              className="btn btn-secondary"
              style={{ fontSize: '1rem', padding: '16px 32px' }}
            >
              <i className="fa-solid fa-images" />
              {t.heroCTAGallery}
            </button>
          </div>
        </div>

        {/* Technical Stats Dashboard */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
            marginTop: '80px',
            maxWidth: '850px'
          }}
          className="hero-stats"
        >
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--clr-green-primary)', textShadow: '0 0 10px rgba(58, 177, 77, 0.3)' }}>{t.heroStatPrecision}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.heroStatPrecisionDesc}</span>
          </div>

          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>{t.heroStatExperience}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.heroStatExperienceDesc}</span>
          </div>

          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--clr-green-primary)', textShadow: '0 0 10px rgba(58, 177, 77, 0.3)' }}>{t.heroStatCapacity}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.heroStatCapacityDesc}</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-h1 {
            font-size: 2.5rem !important;
          }
          .hero-actions {
            flex-direction: column !important;
            gap: 15px !important;
          }
          .hero-stats {
            grid-template-columns: 1fr !important;
            margin-top: 50px !important;
            gap: 15px !important;
          }
          .hero-banner-image {
            background-image: linear-gradient(to bottom, rgba(9, 11, 14, 0.9) 40%, rgba(9, 11, 14, 0.7) 70%, rgba(9, 11, 14, 0.95) 100%) !important;
          }
        }
      `}</style>
    </section>
  );
}
