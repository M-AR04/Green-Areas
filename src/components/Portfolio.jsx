import React, { useState } from 'react';
import { translations } from '../translations';

// Import project images (to be generated next)
import imgArch1 from '../assets/project-arch-1.jpg';
import imgArch2 from '../assets/hero-facade.jpg';
import imgDeco1 from '../assets/project-deco-1.jpg';
import imgDeco2 from '../assets/project-deco-2.jpg';
import imgGate1 from '../assets/project-gate-1.jpg';
import imgGate2 from '../assets/hero-gate.jpg';
import imgInd1 from '../assets/project-ind-1.jpg';

export default function Portfolio({ lang }) {
  const t = translations[lang];
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'architectural',
      title: lang === 'en' ? 'Al Yasmin Villa Cladding' : 'تكسية واجهة فيلا بالياسمين',
      image: imgArch1,
      client: lang === 'en' ? 'Residential Architect' : 'مكتب تصميم معماري سكني',
      material: lang === 'en' ? '4mm Powder-Coated Aluminum' : 'ألمنيوم 4 مم طلاء حراري',
      location: lang === 'en' ? 'Al Yasmin, Riyadh' : 'حي الياسمين، الرياض'
    },
    {
      id: 2,
      category: 'decorative',
      title: lang === 'en' ? 'Islamic Geometric Partitions' : 'قواطع هندسية بنقوش إسلامية',
      image: imgDeco1,
      client: lang === 'en' ? 'Luxury Interior Designer' : 'مصمم ديكور داخلي فاخر',
      material: lang === 'en' ? '3mm PVD Gold Stainless Steel' : 'ستانلس ستيل 3 مم ميتالايز ذهبي',
      location: lang === 'en' ? 'Al Nakheel, Riyadh' : 'حي النخيل، الرياض'
    },
    {
      id: 3,
      category: 'gates',
      title: lang === 'en' ? 'Modern Charcoal Villa Gate' : 'بوابة فيلا مودرن فحمية',
      image: imgGate1,
      client: lang === 'en' ? 'Private Homeowner' : 'مالك فيلا خاص',
      material: lang === 'en' ? '6mm Double-Plate Wrought Iron' : 'حديد مشغول سماكة 6 مم',
      location: lang === 'en' ? 'Al Malqa, Riyadh' : 'حي الملقا، الرياض'
    },
    {
      id: 4,
      category: 'industrial',
      title: lang === 'en' ? 'CNC Heavy Flanges & Brackets' : 'فلانشات وقواعد حديدية ثقيلة CNC',
      image: imgInd1,
      client: lang === 'en' ? 'Local Steel Fabrication Plant' : 'مصنع تراكيب معدنية بالرياض',
      material: lang === 'en' ? '20mm Heavy Carbon Steel' : 'حديد أسود ثقيل سماكة 20 مم',
      location: lang === 'en' ? 'Al Sulay Industrial, Riyadh' : 'صناعية السلي، الرياض'
    },
    {
      id: 5,
      category: 'architectural',
      title: lang === 'en' ? 'Commercial Tower Facade Screens' : 'سواتر واجهات برج تجاري',
      image: imgArch2,
      client: lang === 'en' ? 'Real Estate Developer' : 'شركة تطوير عقاري كبرى',
      material: lang === 'en' ? '5mm Anodized Weathering Steel' : 'حديد كورتن معالج 5 مم',
      location: lang === 'en' ? 'Olaya District, Riyadh' : 'حي العليا، الرياض'
    },
    {
      id: 6,
      category: 'gates',
      title: lang === 'en' ? 'Classic Hand-Forged Palace Gate' : 'بوابة قصر كلاسيكية مطروقة يدوياً',
      image: imgGate2,
      client: lang === 'en' ? 'Royal Estate Project' : 'مشروع قصور ملكية خاص',
      material: lang === 'en' ? 'Hand-Forged Steel with Gold Patina' : 'حديد مشغول يدوي مع تطعيمات ذهب',
      location: lang === 'en' ? 'Diplomatic Quarter, Riyadh' : 'الحي الدبلوماسي، الرياض'
    },
    {
      id: 7,
      category: 'decorative',
      title: lang === 'en' ? 'Majlis Decorative Laser Walls' : 'جداريات ليزر ديكورية للمجلس',
      image: imgDeco2,
      client: lang === 'en' ? 'Bespoke Furniture Manufacturer' : 'مصنع أثاث مخصص فاخر',
      material: lang === 'en' ? '2mm Lacquered Brushed Brass' : 'نحاس أصفر مصقول معزول 2 مم',
      location: lang === 'en' ? 'Hittin District, Riyadh' : 'حي حطين، الرياض'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const filterButtons = [
    { id: 'all', label: t.filterAll },
    { id: 'architectural', label: t.filterArchitectural },
    { id: 'decorative', label: t.filterDecorative },
    { id: 'gates', label: t.filterGates },
    { id: 'industrial', label: t.filterIndustrial }
  ];

  return (
    <section id="portfolio" style={{ backgroundColor: 'var(--clr-bg-black)' }}>
      {/* Background ambient circular light */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(58,177,77,0.03) 0%, transparent 80%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>{t.portfolioTitle}</h2>
          <p>{t.portfolioSub}</p>
        </div>

        {/* Filter Navigation Bar */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '50px'
          }}
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--border-radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: '1px solid',
                borderColor: filter === btn.id ? 'var(--clr-green-primary)' : 'var(--clr-border-metal)',
                backgroundColor: filter === btn.id ? 'rgba(58,177,77,0.1)' : 'rgba(18, 22, 27, 0.4)',
                color: filter === btn.id ? 'var(--clr-green-primary)' : 'var(--clr-text-muted)',
                boxShadow: filter === btn.id ? '0 0 10px rgba(58,177,77,0.1)' : 'none',
                textTransform: 'uppercase'
              }}
              className="filter-btn"
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px'
          }}
          className="portfolio-grid-layout"
        >
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="portfolio-item-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                border: '1px solid var(--clr-border-metal)',
                backgroundColor: 'var(--clr-surface-dark)',
                boxShadow: 'var(--shadow-premium)',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Project Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}
                className="portfolio-image"
              />

              {/* Glass Details Overlay */}
              <div 
                className="portfolio-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(9, 11, 14, 0.95) 15%, rgba(9, 11, 14, 0.7) 60%, rgba(9, 11, 14, 0.2) 100%)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  opacity: 0,
                  transition: 'opacity 0.4s ease'
                }}
              >
                <div style={{ transform: 'translateY(15px)', transition: 'transform 0.4s ease' }} className="portfolio-info-wrap">
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: 'var(--clr-green-primary)', 
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '6px'
                  }}>
                    {item.category}
                  </span>
                  
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
                    {item.title}
                  </h3>

                  {/* Specification Details List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--clr-text-muted)' }}>{t.projectClient}</span>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{item.client}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--clr-text-muted)' }}>{t.projectMaterial}</span>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{item.material}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--clr-text-muted)' }}>{t.projectLocation}</span>
                      <span style={{ color: 'var(--clr-green-primary)', fontWeight: 600 }}>
                        <i className="fa-solid fa-location-dot" style={{ marginRight: lang === 'en' ? '4px' : '0', marginLeft: lang === 'ar' ? '4px' : '0' }} />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-item-card:hover {
          transform: translateY(-5px);
          border-color: var(--clr-green-primary);
          box-shadow: 0 15px 30px rgba(58,177,77,0.15);
        }
        .portfolio-item-card:hover .portfolio-image {
          transform: scale(1.08);
        }
        .portfolio-item-card:hover .portfolio-overlay {
          opacity: 1 !important;
        }
        .portfolio-item-card:hover .portfolio-info-wrap {
          transform: translateY(0) !important;
        }
        .filter-btn:hover {
          border-color: var(--clr-green-primary) !important;
          color: var(--clr-green-primary) !important;
        }
      `}</style>
    </section>
  );
}
