import React, { useState } from 'react';
import { translations } from '../translations';

export default function QuoteWizard({ lang }) {
  const t = translations[lang];
  const [step, setStep] = useState(1);
  
  // Form State
  const [service, setService] = useState('laser');
  const [material, setMaterial] = useState('carbon');
  const [thickness, setThickness] = useState('2');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  
  // Contact details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Calculations states
  const [costRange, setCostRange] = useState({ min: 0, max: 0 });
  const [calculating, setCalculating] = useState(false);
  const [referenceNum, setReferenceNum] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Thickness based on material choice
  const thicknessOptions = {
    carbon: ['1', '2', '3', '5', '8', '12', '16', '20', '25'],
    stainless: ['1', '1.5', '2', '3', '4', '6', '8', '10', '12'],
    aluminum: ['1', '2', '3', '4', '6', '8', '12', '16'],
    brass: ['1', '2', '3', '5', '8'],
    galvanized: ['1', '1.5', '2', '3', '4', '6', '8', '10']
  };

  const handleMaterialChange = (e) => {
    const mat = e.target.value;
    setMaterial(mat);
    setThickness(thicknessOptions[mat][0]);
  };

  // Mock Pricing Calculation
  const calculateCost = () => {
    if (!width || !height || !quantity) return;
    
    setCalculating(true);
    
    setTimeout(() => {
      const w = parseFloat(width);
      const h = parseFloat(height);
      const q = parseInt(quantity);
      const th = parseFloat(thickness);

      // Area in square meters
      const area = (w * h) / 1000000;
      
      // Basic factors
      let materialRateFactor = 1.0; // Carbon steel standard
      if (material === 'stainless') materialRateFactor = 2.4;
      if (material === 'aluminum') materialRateFactor = 1.8;
      if (material === 'brass') materialRateFactor = 3.5;
      if (material === 'galvanized') materialRateFactor = 1.3;

      let thicknessFactor = 1.0;
      if (th > 3 && th <= 6) thicknessFactor = 1.6;
      if (th > 6 && th <= 12) thicknessFactor = 2.5;
      if (th > 12) thicknessFactor = 4.5;

      let serviceFactor = service === 'laser' ? 1.0 : 1.25;

      // Calculate mock base cost in Saudi Riyals (SAR)
      const baseCost = area * 350 * materialRateFactor * thicknessFactor * serviceFactor * q;
      
      // Pricing brackets
      const minCost = Math.max(Math.round(baseCost * 0.9), 150); // Minimum 150 SAR order charge
      const maxCost = Math.max(Math.round(baseCost * 1.15), 200);

      setCostRange({ min: minCost, max: maxCost });
      setCalculating(false);
      setStep(3);
    }, 1500);
  };

  // Mock file selection progress bar
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      setFile(e.target.files[0]);
      setTimeout(() => {
        setUploading(false);
        setUploaded(true);
      }, 2000);
    }
  };

  // Submit quote to mock backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Generate random reference code
    const randRef = Math.floor(10000 + Math.random() * 90000);
    setReferenceNum(randRef);
    setSubmitted(true);
  };

  // Direct contact link
  const getWhatsAppLink = () => {
    const text = lang === 'en' 
      ? `Hello Green Ares, I submitted a Quote Request (Ref: #GA-${referenceNum}). Service: ${service}, Material: ${material}, Thickness: ${thickness}mm. Please review my CAD file.`
      : `مرحباً جرين أريس، لقد قمت بإرسال طلب تسعيرة (رقم مرجعي: #GA-${referenceNum}). نوع الخدمة: ${service === 'laser' ? 'قص ليزر' : 'حدادة وتشكيل'}، المادة: ${material}، السماكة: ${thickness} مم. أرجو مراجعة ملف التصميم المرفق.`;
    return `https://wa.me/966504988298?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="quote" style={{ backgroundColor: 'hsl(210, 18%, 4%)' }}>
      
      {/* Background glow top right */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(58,177,77,0.04) 0%, transparent 75%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <h2>{t.navQuote}</h2>
          <p>{t.wizardSub}</p>
        </div>

        {/* Wizard Main Container Card */}
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', overflow: 'hidden' }}>
          
          {/* Progress Indicator Bar */}
          {!submitted && (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '10px',
                marginBottom: '40px',
                borderBottom: '1px solid var(--clr-border-metal)',
                paddingBottom: '20px'
              }}
              className="wizard-steps-header"
            >
              {[
                { s: 1, label: t.wizardStep1 },
                { s: 2, label: t.wizardStep2 },
                { s: 3, label: t.wizardStep3 },
                { s: 4, label: t.wizardStep4 }
              ].map((stepItem) => (
                <div 
                  key={stepItem.s}
                  style={{
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: step >= stepItem.s ? 'var(--clr-green-primary)' : 'var(--clr-text-muted)',
                    transition: 'var(--transition-smooth)',
                    borderBottom: step === stepItem.s ? '2px solid var(--clr-green-primary)' : 'none',
                    paddingBottom: '8px'
                  }}
                >
                  {stepItem.label}
                </div>
              ))}
            </div>
          )}

          {/* Wizard Form Sheets */}
          {!submitted ? (
            <div>
              {/* STEP 1: SERVICE & MATERIAL */}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  
                  {/* Service Toggle */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardSelectService}</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <button
                        type="button"
                        onClick={() => setService('laser')}
                        className={`btn ${service === 'laser' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '16px' }}
                      >
                        <i className="fa-solid fa-circle-dot" />
                        {t.serviceLaserTitle}
                      </button>
                      <button
                        type="button"
                        onClick={() => setService('metalwork')}
                        className={`btn ${service === 'metalwork' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '16px' }}
                      >
                        <i className="fa-solid fa-hammer" />
                        {t.serviceMetalTitle}
                      </button>
                    </div>
                  </div>

                  {/* Material selection grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="wizard-form-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardSelectMaterial}</label>
                      <select 
                        value={material} 
                        onChange={handleMaterialChange}
                        className="wizard-select"
                      >
                        <option value="carbon">{t.materialCarbonSteel}</option>
                        <option value="stainless">{t.materialStainlessSteel}</option>
                        <option value="aluminum">{t.materialAluminum}</option>
                        <option value="brass">{t.materialBrassCopper}</option>
                        <option value="galvanized">{t.materialGalvanized}</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardThickness}</label>
                      <select 
                        value={thickness} 
                        onChange={(e) => setThickness(e.target.value)}
                        className="wizard-select"
                      >
                        {thicknessOptions[material].map((th) => (
                          <option key={th} value={th}>{th} mm</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button 
                      onClick={() => setStep(2)} 
                      className="btn btn-primary"
                    >
                      {t.wizardNext}
                      <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}`} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DIMENSIONS */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }} className="wizard-dimensions-row">
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardWidth}</label>
                      <input 
                        type="number" 
                        placeholder="e.g. 1000" 
                        value={width} 
                        onChange={(e) => setWidth(e.target.value)}
                        className="wizard-input" 
                        min="1"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardHeight}</label>
                      <input 
                        type="number" 
                        placeholder="e.g. 2000" 
                        value={height} 
                        onChange={(e) => setHeight(e.target.value)}
                        className="wizard-input" 
                        min="1"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardQuantity}</label>
                      <input 
                        type="number" 
                        placeholder="1" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}
                        className="wizard-input" 
                        min="1"
                      />
                    </div>
                  </div>

                  {calculating && (
                    <div style={{ textAlign: 'center', margin: '20px 0', color: 'var(--clr-green-primary)' }}>
                      <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '10px' }} />
                      <p>{t.wizardCalculating}</p>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button 
                      onClick={() => setStep(1)} 
                      className="btn btn-secondary"
                    >
                      <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'}`} />
                      {t.wizardBack}
                    </button>

                    <button 
                      onClick={calculateCost} 
                      disabled={!width || !height || !quantity || calculating}
                      className="btn btn-primary btn-laser"
                    >
                      {t.wizardCalculate}
                      <i className="fa-solid fa-calculator" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: MOCK UPLOAD & RESULTS */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  
                  {/* cost result visual display */}
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(58, 177, 77, 0.04)', 
                      border: '1px dashed var(--clr-green-primary)',
                      borderRadius: 'var(--border-radius-md)',
                      padding: '30px',
                      textAlign: 'center'
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      {t.wizardResultTitle}
                    </span>
                    <h3 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--clr-green-primary)', margin: '10px 0' }}>
                      SAR {costRange.min} - {costRange.max}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)' }}>
                      {t.wizardResultSub} <br />
                      <span style={{ color: 'var(--clr-gold)' }}>{t.wizardResultVat}</span>
                    </p>
                  </div>

                  {/* Drag-and-drop file upload simulator */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{t.wizardUploadTitle}</label>
                    <div 
                      style={{
                        border: '2px dashed var(--clr-border-metal)',
                        borderRadius: 'var(--border-radius-md)',
                        padding: '40px 20px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.01)',
                        cursor: 'pointer',
                        position: 'relative'
                      }}
                      className="upload-dropzone"
                    >
                      <input 
                        type="file" 
                        accept=".dxf,.dwg,.pdf"
                        onChange={handleFileChange}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          cursor: 'pointer'
                        }}
                      />
                      
                      {uploading ? (
                        <div>
                          <i className="fa-solid fa-gear fa-spin" style={{ fontSize: '2.5rem', color: 'var(--clr-green-primary)', marginBottom: '15px' }} />
                          <p style={{ color: 'var(--clr-green-primary)', fontWeight: 700 }}>Analyzing CAD vectors...</p>
                        </div>
                      ) : uploaded ? (
                        <div>
                          <i className="fa-solid fa-circle-check" style={{ fontSize: '2.5rem', color: 'var(--clr-green-primary)', marginBottom: '15px' }} />
                          <p style={{ color: '#fff', fontWeight: 700 }}>{t.wizardUploadSuccess}</p>
                          <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-muted)' }}>{file?.name}</span>
                        </div>
                      ) : (
                        <div>
                          <i className="fa-solid fa-file-arrow-up" style={{ fontSize: '2.5rem', color: 'var(--clr-text-muted)', marginBottom: '15px' }} />
                          <p style={{ color: '#fff', fontWeight: 600 }}>{t.wizardUploadDesc}</p>
                          <span style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)' }}>Accepted Formats: AutoCAD .DXF, .DWG, or Vector PDF</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <button 
                      onClick={() => setStep(2)} 
                      className="btn btn-secondary"
                    >
                      <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'}`} />
                      {t.wizardBack}
                    </button>

                    <button 
                      onClick={() => setStep(4)} 
                      className="btn btn-primary"
                    >
                      {t.wizardNext}
                      <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}`} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: SUBMIT CONTACT DETAILS */}
              {step === 4 && (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="wizard-form-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>{t.wizardName} *</label>
                      <input 
                        type="text" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="wizard-input" 
                        placeholder={lang === 'en' ? 'John Doe' : 'الاسم الثنائي / اسم المؤسسة'}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>{t.wizardPhone} *</label>
                      <input 
                        type="tel" 
                        required 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        className="wizard-input" 
                        placeholder="e.g. 504988298"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>{t.wizardEmail}</label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="wizard-input" 
                      placeholder="name@company.com"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>{t.wizardNotes}</label>
                    <textarea 
                      rows="3" 
                      value={notes} 
                      onChange={(e) => setNotes(e.target.value)}
                      className="wizard-textarea"
                      placeholder={lang === 'en' ? 'Provide custom powder coat codes, alignment instructions...' : 'تفاصيل إضافية مثل كود الدهان الحراري المطلوبة، جودة التشطيب...'}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button 
                      type="button"
                      onClick={() => setStep(3)} 
                      className="btn btn-secondary"
                    >
                      <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'}`} />
                      {t.wizardBack}
                    </button>

                    <button 
                      type="submit" 
                      className="btn btn-primary btn-laser"
                      disabled={!name || !phone}
                    >
                      {t.wizardSubmitFinal}
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            
            /* SUCCESS SUBMITTED SHEET */
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '20px', padding: '20px 0' }}>
              <div 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(58, 177, 77, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--clr-green-primary)',
                  fontSize: '2.5rem',
                  margin: '0 auto',
                  boxShadow: '0 0 20px rgba(58, 177, 77, 0.2)'
                }}
              >
                <i className="fa-solid fa-clipboard-check" />
              </div>
              
              <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{t.wizardSuccessTitle}</h3>
              <p style={{ color: 'var(--clr-text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
                {t.wizardSuccessDesc.replace('{ref}', referenceNum)}
              </p>

              {/* Dynamic cost reminder block */}
              <div 
                style={{
                  backgroundColor: 'rgba(255,255,255,0.01)',
                  border: '1px solid var(--clr-border-metal)',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  maxWidth: '320px',
                  margin: '10px auto'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)' }}>Estimated Cost:</span>
                <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--clr-green-primary)' }}>SAR {costRange.min} - {costRange.max}</p>
              </div>

              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }} className="wizard-success-actions">
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ backgroundColor: '#25D366', color: '#fff', border: 'none', boxShadow: '0 0 15px rgba(37,211,102,0.4)' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }} />
                  {t.wizardWhatsAppCTA}
                </a>
                
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setWidth('');
                    setHeight('');
                    setName('');
                    setPhone('');
                    setFile(null);
                    setUploaded(false);
                  }}
                  className="btn btn-secondary"
                >
                  Create New Calculation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* Form inputs styling */
        .wizard-select, .wizard-input {
          background-color: var(--clr-surface-dark);
          border: 1px solid var(--clr-border-metal);
          color: #fff;
          padding: 14px 20px;
          border-radius: var(--border-radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          width: 100%;
          transition: var(--transition-smooth);
        }
        .wizard-select:focus, .wizard-input:focus {
          border-color: var(--clr-green-primary);
          box-shadow: 0 0 8px rgba(58, 177, 77, 0.2);
        }
        .wizard-textarea {
          background-color: var(--clr-surface-dark);
          border: 1px solid var(--clr-border-metal);
          color: #fff;
          padding: 14px 20px;
          border-radius: var(--border-radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          width: 100%;
          resize: none;
          transition: var(--transition-smooth);
        }
        .wizard-textarea:focus {
          border-color: var(--clr-green-primary);
          box-shadow: 0 0 8px rgba(58, 177, 77, 0.2);
        }
        .upload-dropzone:hover {
          border-color: var(--clr-green-primary) !important;
          background-color: rgba(58, 177, 77, 0.02) !important;
        }
        @media (max-width: 768px) {
          .wizard-steps-header {
            grid-template-columns: 1fr 1fr !important;
            row-gap: 15px !important;
          }
          .wizard-dimensions-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .wizard-form-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .wizard-success-actions {
            flex-direction: column !important;
            width: 100% !important;
            align-items: center;
          }
          .wizard-success-actions a, .wizard-success-actions button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
