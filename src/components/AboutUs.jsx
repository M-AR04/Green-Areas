import React from 'react';
import { translations } from '../translations';

export default function AboutUs({ lang }) {
  const t = translations[lang];

  return (
    <section id="about" style={{ backgroundColor: 'var(--clr-bg-black)' }}>
      {/* Soft background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(58,177,77,0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>{t.navAbout}</h2>
          <p>{t.aboutSub}</p>
        </div>

        {/* Narrative & Mission/Vision Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '50px',
            marginBottom: '70px',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Narrative Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{t.aboutTitle}</h3>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {t.aboutDesc1}
            </p>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {t.aboutDesc2}
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Mission */}
            <div className="glass-panel" style={{ padding: '30px', position: 'relative' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  marginBottom: '15px',
                  color: 'var(--clr-green-primary)' 
                }}
              >
                <i className="fa-solid fa-bullseye" style={{ fontSize: '1.8rem' }} />
                <h4 style={{ fontSize: '1.25rem', color: '#fff' }}>{t.aboutMissionTitle}</h4>
              </div>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {t.aboutMissionText}
              </p>
            </div>

            {/* Vision */}
            <div className="glass-panel" style={{ padding: '30px' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  marginBottom: '15px',
                  color: 'var(--clr-green-primary)' 
                }}
              >
                <i className="fa-solid fa-eye" style={{ fontSize: '1.8rem' }} />
                <h4 style={{ fontSize: '1.25rem', color: '#fff' }}>{t.aboutVisionTitle}</h4>
              </div>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {t.aboutVisionText}
              </p>
            </div>
          </div>
        </div>

        {/* USPs Cards Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '30px'
          }}
          className="about-usps-grid"
        >
          {/* USP 1 */}
          <div className="glow-card">
            <div className="laser-sweep" />
            <div 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: 'rgba(58,177,77,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-green-primary)',
                fontSize: '1.5rem',
                marginBottom: '20px'
              }}
            >
              <i className="fa-solid fa-bolt" />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{t.aboutUSP1Title}</h4>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {t.aboutUSP1Desc}
            </p>
          </div>

          {/* USP 2 */}
          <div className="glow-card">
            <div className="laser-sweep" />
            <div 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: 'rgba(58,177,77,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-green-primary)',
                fontSize: '1.5rem',
                marginBottom: '20px'
              }}
            >
              <i className="fa-solid fa-fire-burner" />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{t.aboutUSP2Title}</h4>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {t.aboutUSP2Desc}
            </p>
          </div>

          {/* USP 3 */}
          <div className="glow-card">
            <div className="laser-sweep" />
            <div 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: 'rgba(58,177,77,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-green-primary)',
                fontSize: '1.5rem',
                marginBottom: '20px'
              }}
            >
              <i className="fa-solid fa-map-location-dot" />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{t.aboutUSP3Title}</h4>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {t.aboutUSP3Desc}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .about-usps-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
