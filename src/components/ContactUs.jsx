import React, { useState } from 'react';
import { translations } from '../translations';

export default function ContactUs({ lang }) {
  const t = translations[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('laser');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Simulate database post
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1800);
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--clr-bg-black)' }}>
      
      {/* Background glow bottom left */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(58,177,77,0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>{t.navContact}</h2>
          <p>{t.contactSub}</p>
        </div>

        {/* Form and Map Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '50px',
            alignItems: 'start'
          }}
          className="contact-main-grid"
        >
          {/* Quick Contact Form Card */}
          <div className="glass-panel" style={{ padding: '40px' }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <i className="fa-solid fa-envelope-circle-check" style={{ fontSize: '3rem', color: 'var(--clr-green-primary)', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>{t.contactFormSuccess}</h3>
                <button 
                  onClick={() => setSuccess(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '15px' }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.contactFormName} *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Abdullah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.contactFormPhone} *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 504988298"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.contactFormEmail}</label>
                    <input 
                      type="email" 
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.contactFormSubject}</label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="contact-select"
                    >
                      <option value="laser">{t.serviceLaserTitle}</option>
                      <option value="metalwork">{t.serviceMetalTitle}</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)', fontWeight: 600 }}>{t.contactFormMessage} *</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Enter project lengths, materials, finishing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={sending}
                  className="btn btn-primary btn-laser"
                  style={{ width: '100%', marginTop: '10px' }}
                >
                  {sending ? (
                    <>
                      <i className="fa-solid fa-gear fa-spin" />
                      {t.contactFormSending}
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" />
                      {t.contactFormSubmit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Riyadh Showroom Map Visualizer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Custom Interactive Map Card */}
            <div className="glow-card" style={{ padding: 0 }}>
              <div className="laser-sweep" />
              
              <div className="map-visualizer">
                {/* Visual grid overlay */}
                <div className="map-grid-layer" />
                
                {/* Moving Radar Line */}
                <div className="map-radar-circle" />

                {/* Showroom Coordinates Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(9, 11, 14, 0.85)',
                    border: '1px solid var(--clr-border-metal)',
                    padding: '8px 14px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    color: 'var(--clr-green-primary)',
                    zIndex: 4
                  }}
                >
                  GPS: 24.6974° N, 46.8286° E
                </div>

                {/* Laser cutting crosshair targeting the pin */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(58, 177, 77, 0.15)',
                    pointerEvents: 'none'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    width: '1px',
                    height: '100%',
                    backgroundColor: 'rgba(58, 177, 77, 0.15)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Center Pin */}
                <div className="map-location-pin">
                  <div className="map-pin-pulse" />
                  <i className="fa-solid fa-location-crosshairs" />
                  
                  <div 
                    style={{
                      backgroundColor: 'var(--clr-surface-dark)',
                      border: '1px solid var(--clr-green-primary)',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      marginTop: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#fff',
                      boxShadow: 'var(--shadow-premium)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    GREEN ARES SHOWROOM
                  </div>
                </div>
              </div>

              {/* Navigation trigger button */}
              <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--clr-surface-dark)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)' }}>{t.contactMapCaption}</span>
                <a 
                  href="https://maps.google.com/?q=24.6974,46.8286" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  <i className="fa-solid fa-map-location-dot" />
                  {t.contactMapOpenGoogle}
                </a>
              </div>
            </div>

            {/* Local Phone details card */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', borderBottom: '1px solid var(--clr-border-metal)', paddingBottom: '10px' }}>
                {t.contactAddressTitle}
              </h4>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--clr-green-primary)', marginRight: lang === 'en' ? '8px' : '0', marginLeft: lang === 'ar' ? '8px' : '0' }} />
                {t.contactAddress}
              </p>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>
                <i className="fa-solid fa-phone" style={{ color: 'var(--clr-green-primary)', marginRight: lang === 'en' ? '8px' : '0', marginLeft: lang === 'ar' ? '8px' : '0' }} />
                Showroom Call Line: <span dir="ltr" style={{ color: '#fff', fontWeight: 700 }}>{t.contactPhone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Contact Form Styles */
        .contact-input, .contact-select {
          background-color: var(--clr-surface-dark);
          border: 1px solid var(--clr-border-metal);
          color: #fff;
          padding: 14px 18px;
          border-radius: var(--border-radius-sm);
          font-family: inherit;
          font-size: 0.9rem;
          width: 100%;
          transition: var(--transition-smooth);
        }
        .contact-input:focus, .contact-select:focus {
          border-color: var(--clr-green-primary);
          box-shadow: 0 0 8px rgba(58, 177, 77, 0.2);
        }
        .contact-textarea {
          background-color: var(--clr-surface-dark);
          border: 1px solid var(--clr-border-metal);
          color: #fff;
          padding: 14px 18px;
          border-radius: var(--border-radius-sm);
          font-family: inherit;
          font-size: 0.9rem;
          width: 100%;
          resize: none;
          transition: var(--transition-smooth);
        }
        .contact-textarea:focus {
          border-color: var(--clr-green-primary);
          box-shadow: 0 0 8px rgba(58, 177, 77, 0.2);
        }
        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
