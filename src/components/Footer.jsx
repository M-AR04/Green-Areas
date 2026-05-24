import React from 'react';
import { translations } from '../translations';
import logoVector from '../assets/logo_vector.svg';

export default function Footer({ lang }) {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: '#050608',
        borderTop: '1px solid var(--clr-border-metal)',
        padding: '80px 0 40px 0',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      {/* Background soft green radial glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '200px',
          background: 'radial-gradient(ellipse at bottom, rgba(58,177,77,0.1), transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1.2fr 1.2fr',
            gap: '40px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={logoVector} alt="Green Ares Logo" style={{ width: '45px', height: '45px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--clr-green-primary)', letterSpacing: '1px', lineHeight: '1.1' }}>
                  {lang === 'en' ? 'GREEN' : 'جرين'}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--clr-text-muted)', letterSpacing: '2px', lineHeight: '1.1' }}>
                  {lang === 'en' ? 'AREAS' : 'أريس'}
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '380px' }}>
              {t.footerDesc}
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }} className="footer-socials">
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-whatsapp" /></a>
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-instagram" /></a>
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="#" className="social-icon-btn"><i className="fa-regular fa-envelope" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '1.1rem', position: 'relative', paddingBottom: '10px' }}>
              {t.footerLinks}
              <span style={{ position: 'absolute', bottom: 0, left: lang === 'ar' ? 'auto' : 0, right: lang === 'ar' ? 0 : 'auto', width: '30px', height: '2px', backgroundColor: 'var(--clr-green-primary)' }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="footer-link">{t.navHome}</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} className="footer-link">{t.navAbout}</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }} className="footer-link">{t.navServices}</a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); handleLinkClick('portfolio'); }} className="footer-link">{t.navPortfolio}</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} className="footer-link">{t.navContact}</a>
            </div>
          </div>

          {/* Services Quick View */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '1.1rem', position: 'relative', paddingBottom: '10px' }}>
              {t.footerServices}
              <span style={{ position: 'absolute', bottom: 0, left: lang === 'ar' ? 'auto' : 0, right: lang === 'ar' ? 0 : 'auto', width: '30px', height: '2px', backgroundColor: 'var(--clr-green-primary)' }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }} className="footer-link">{t.serviceLaserTitle}</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }} className="footer-link">{t.serviceMetalTitle}</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }} className="footer-link">{t.serviceFinishingTitle}</a>
            </div>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '1.1rem', position: 'relative', paddingBottom: '10px' }}>
              {t.footerContact}
              <span style={{ position: 'absolute', bottom: 0, left: lang === 'ar' ? 'auto' : 0, right: lang === 'ar' ? 0 : 'auto', width: '30px', height: '2px', backgroundColor: 'var(--clr-green-primary)' }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--clr-green-primary)', marginTop: '4px', fontSize: '1.1rem' }} />
                <span>{t.contactAddress}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-phone" style={{ color: 'var(--clr-green-primary)', fontSize: '1rem' }} />
                <span dir="ltr">{t.contactPhone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-clock" style={{ color: 'var(--clr-green-primary)', fontSize: '1rem' }} />
                <span>{t.contactHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid var(--clr-border-metal)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: 'var(--clr-text-muted)'
          }}
          className="footer-bottom"
        >
          <span>{t.footerRights.replace('{year}', currentYear)}</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-link">Sitemap</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 15px !important;
            text-align: center;
          }
        }
        .footer-link {
          color: var(--clr-text-muted);
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: var(--clr-green-primary);
          transform: translateX(${lang === 'ar' ? '-5px' : '5px'});
        }
        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--clr-surface-dark);
          border: 1px solid var(--clr-border-metal);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-text-muted);
          font-size: 1.1rem;
          transition: var(--transition-smooth);
        }
        .social-icon-btn:hover {
          background-color: var(--clr-green-primary);
          border-color: var(--clr-green-primary);
          color: var(--clr-bg-black);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}
