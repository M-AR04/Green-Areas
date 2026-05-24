import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import logoVector from '../assets/logo_vector.svg';

export default function Header({ lang, setLang, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'services', label: t.navServices },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'contact', label: t.navContact }
  ];

  const handleLinkClick = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 990,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(9, 11, 14, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          webkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--clr-border-glow)' : '1px solid transparent',
          transition: 'var(--transition-smooth)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo Brand Brand */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1000 }}
          >
            <img src={logoVector} alt="Green Ares Logo" style={{ width: '40px', height: '40px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontSize: '1.25rem', 
                fontWeight: 900, 
                color: 'var(--clr-green-primary)',
                letterSpacing: '1px',
                lineHeight: '1.1'
              }}>
                {lang === 'en' ? 'GREEN' : 'جرين'}
              </span>
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 900, 
                color: 'var(--clr-text-muted)',
                letterSpacing: '2px',
                lineHeight: '1.1'
              }}>
                {lang === 'en' ? 'AREAS' : 'أريس'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: activeSection === link.id ? 'var(--clr-green-primary)' : 'var(--clr-text-muted)',
                  letterSpacing: lang === 'en' ? '1px' : '0',
                  position: 'relative',
                  padding: '5px 0'
                }}
                className="nav-item-link"
              >
                {link.label}
                {activeSection === link.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--clr-green-primary)',
                    boxShadow: '0 0 8px var(--clr-laser-glow)'
                  }} />
                )}
              </a>
            ))}
          </nav>

          {/* Actions: Lang & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="desktop-actions">
            <button 
              onClick={toggleLanguage}
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#fff',
                padding: '8px 14px',
                border: '1px solid var(--clr-border-metal)',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'rgba(255,255,255,0.02)'
              }}
              hover-style={{ borderColor: 'var(--clr-green-primary)' }}
              className="lang-btn"
            >
              <i className="fa-solid fa-globe" style={{ marginRight: lang === 'en' ? '6px' : '0', marginLeft: lang === 'ar' ? '6px' : '0' }} />
              {t.langToggle}
            </button>

            <a 
              href="#quote" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('quote'); }}
              className="btn btn-secondary btn-laser"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <i className="fa-solid fa-calculator" />
              {t.navQuote}
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            style={{ 
              display: 'none', 
              fontSize: '1.5rem', 
              color: '#fff',
              zIndex: 1000 
            }} 
            className="hamburger-btn"
          >
            <i className={mobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(9, 11, 14, 0.98)',
          backdropFilter: 'blur(20px)',
          webkitBackdropFilter: 'blur(20px)',
          zIndex: 980,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.4s ease'
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: activeSection === link.id ? 'var(--clr-green-primary)' : 'var(--clr-text-main)',
              letterSpacing: lang === 'en' ? '2px' : '0'
            }}
          >
            {link.label}
          </a>
        ))}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '80%', maxWidth: '280px', marginTop: '20px' }}>
          <button 
            onClick={toggleLanguage}
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#fff',
              padding: '12px',
              border: '1px solid var(--clr-border-metal)',
              borderRadius: 'var(--border-radius-sm)',
              backgroundColor: 'rgba(255,255,255,0.02)',
              width: '100%'
            }}
          >
            <i className="fa-solid fa-globe" style={{ marginRight: '8px' }} />
            {t.langToggle}
          </button>
          
          <a 
            href="#quote" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('quote'); }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            <i className="fa-solid fa-calculator" />
            {t.navQuote}
          </a>
        </div>
      </div>

      {/* Styled JSX for Hamburger display and desktop menus */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .desktop-actions { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
        .nav-item-link:hover {
          color: var(--clr-green-primary) !important;
        }
        .lang-btn:hover {
          border-color: var(--clr-green-primary) !important;
          box-shadow: 0 0 10px rgba(58, 177, 77, 0.2);
        }
      `}</style>
    </>
  );
}
