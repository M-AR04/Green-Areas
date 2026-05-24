import React from 'react';
import { translations } from '../translations';

export default function Services({ lang }) {
  const t = translations[lang];

  // Technical specifications data
  const technicalSpecs = [
    { name: t.materialCarbonSteel, thickness: "25 mm", method: "O2 / N2 Assist" },
    { name: t.materialStainlessSteel, thickness: "12 mm", method: "N2 High Pressure" },
    { name: t.materialAluminum, thickness: "16 mm", method: "N2 / Air Assist" },
    { name: t.materialBrassCopper, thickness: "8 mm", method: "N2 Assist" },
    { name: t.materialGalvanized, thickness: "10 mm", method: "N2 Assist" }
  ];

  return (
    <section id="services" style={{ backgroundColor: 'hsl(210, 18%, 4%)' }}>
      
      {/* Background soft ambient green lighting */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(58,177,77,0.04) 0%, transparent 75%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesSub}</p>
        </div>

        {/* 3 Core Services Columns */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '30px',
            marginBottom: '80px'
          }}
          className="services-list-grid"
        >
          {/* Card 1: Laser Cutting */}
          <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="laser-sweep" />
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                backgroundColor: 'rgba(58,177,77,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-green-primary)',
                fontSize: '1.8rem'
              }}
            >
              <i className="fa-solid fa-circle-dot" style={{ animation: 'scale-infinite 2s infinite' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{t.serviceLaserTitle}</h3>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '15px' }}>
                {t.serviceLaserDesc}
              </p>
              <p style={{ color: 'var(--clr-green-primary)', fontSize: '0.85rem', fontWeight: 700 }}>
                {t.specApplications}
              </p>
            </div>
          </div>

          {/* Card 2: Blacksmithing */}
          <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="laser-sweep" />
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                backgroundColor: 'rgba(58,177,77,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-green-primary)',
                fontSize: '1.8rem'
              }}
            >
              <i className="fa-solid fa-hammer" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{t.serviceMetalTitle}</h3>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '15px' }}>
                {t.serviceMetalDesc}
              </p>
              <p style={{ color: 'var(--clr-green-primary)', fontSize: '0.85rem', fontWeight: 700 }}>
                {t.specBlacksmithingProducts}
              </p>
            </div>
          </div>

          {/* Card 3: Finishing */}
          <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="laser-sweep" />
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                backgroundColor: 'rgba(58,177,77,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-green-primary)',
                fontSize: '1.8rem'
              }}
            >
              <i className="fa-solid fa-fill-drip" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{t.serviceFinishingTitle}</h3>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '15px' }}>
                {t.serviceFinishingDesc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="spec-badge">Powder Coating</span>
                <span className="spec-badge">PVD Coating</span>
                <span className="spec-badge">Polishing</span>
                <span className="spec-badge">Galvanizing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specification Table Drawer */}
        <div className="glass-panel" style={{ padding: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <i className="fa-solid fa-sliders" style={{ color: 'var(--clr-green-primary)' }} />
            {t.serviceSpecsTitle}
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--clr-border-metal)' }}>
                  <th style={{ padding: '16px 20px', color: 'var(--clr-green-primary)', fontWeight: 700 }}>{t.serviceSpecMaterial}</th>
                  <th style={{ padding: '16px 20px', color: 'var(--clr-green-primary)', fontWeight: 700 }}>{t.serviceSpecMaxThickness}</th>
                  <th style={{ padding: '16px 20px', color: 'var(--clr-green-primary)', fontWeight: 700 }}>{t.serviceSpecLaserType}</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr 
                    key={index} 
                    style={{ 
                      borderBottom: index !== technicalSpecs.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                      backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
                    }}
                    className="spec-table-row"
                  >
                    <td style={{ padding: '18px 20px', fontWeight: 600, color: '#fff' }}>{spec.name}</td>
                    <td style={{ padding: '18px 20px', fontWeight: 700, fontFamily: 'monospace', color: 'var(--clr-green-primary)', fontSize: '1.1rem' }}>{spec.thickness}</td>
                    <td style={{ padding: '18px 20px', color: 'var(--clr-text-muted)' }}>{spec.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-list-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        .spec-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--clr-text-main);
          background-color: var(--clr-surface-light);
          border: 1px solid var(--clr-border-metal);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .spec-table-row {
          transition: var(--transition-smooth);
        }
        .spec-table-row:hover {
          background-color: rgba(58,177,77,0.05) !important;
        }
      `}</style>
    </section>
  );
}
