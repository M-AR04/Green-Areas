import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import QuoteWizard from './components/QuoteWizard';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic for Saudi localization
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Programmatically toggle RTL/LTR on document body when language changes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Section intersection observer to highlight header nav items
  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const observers = [];

    const options = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger near center screen
      threshold: 0
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* 1. Laser preloading screen */}
      {loading ? (
        <Preloader lang={lang} onComplete={() => setLoading(false)} />
      ) : (
        <div 
          style={{ 
            opacity: 1, 
            transition: 'opacity 0.8s ease', 
            position: 'relative',
            overflow: 'hidden' 
          }}
          className="app-main-wrapper"
        >
          {/* 2. Responsive Header Navigation */}
          <Header lang={lang} setLang={setLang} activeSection={activeSection} />

          {/* 3. Main Sections Layout */}
          <main>
            <Hero lang={lang} />
            <AboutUs lang={lang} />
            <Services lang={lang} />
            <Portfolio lang={lang} />
            <QuoteWizard lang={lang} />
            <ContactUs lang={lang} />
          </main>

          {/* 4. Localized Footer */}
          <Footer lang={lang} />

          {/* 5. Global Floating WhatsApp Button */}
          <a 
            href={`https://wa.me/966504988298?text=${encodeURIComponent(
              lang === 'en' 
                ? "Hello Green Ares, I am visiting your website and have a metalwork project inquiry." 
                : "مرحباً جرين أريس، أنا أتصفح موقعكم الإلكتروني ولدي استفسار بخصوص مشروع أعمال حدادة وقص ليزر."
            )}`}
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: lang === 'en' ? '30px' : 'auto',
              left: lang === 'ar' ? '30px' : 'auto',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              zIndex: 900,
              transition: 'var(--transition-smooth)'
            }}
            className="whatsapp-float-btn"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>
      )}

      {/* Embedded interactive stylesheet for global floating elements */}
      <style>{`
        .whatsapp-float-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
        }
      `}</style>
    </>
  );
}
