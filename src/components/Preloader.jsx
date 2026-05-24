import React, { useState, useEffect } from 'react';
import logoVector from '../assets/logo_vector.svg';

export default function Preloader({ onComplete, lang }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [doorSlide, setDoorSlide] = useState(false);

  // Status message mappings
  const statusMessages = {
    en: [
      { max: 25, text: "Initializing Fiber Laser System..." },
      { max: 55, text: "Calibrating CNC Galvanometer Mirrors..." },
      { max: 80, text: "Engraving Steel Plates (0.05mm alignment)..." },
      { max: 99, text: "Optimizing CAD Vector Pathways..." },
      { max: 100, text: "SYSTEM READY - WELCOME" }
    ],
    ar: [
      { max: 25, text: "جاري تشغيل نظام ليزر الألياف البصرية..." },
      { max: 55, text: "جاري معايرة مرايا نظام التوجيه الرقمي CNC..." },
      { max: 80, text: "جاري نقش لوحة الحديد (محاذاة 0.05 مم)..." },
      { max: 99, text: "جاري تحسين مسارات ملفات الكاد الهندسية..." },
      { max: 100, text: "النظام جاهز للتشغيل - أهلاً بك" }
    ]
  };

  useEffect(() => {
    // Ticking the percentage up from 0 to 100
    const duration = 2400; // 2.4 seconds total load time
    const intervalTime = 24; // Update every 24ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.floor((currentStep / totalSteps) * 100), 100);
      setProgress(currentProgress);

      // Determine current status message
      const messages = statusMessages[lang] || statusMessages.en;
      const matchingMessage = messages.find(msg => currentProgress <= msg.max);
      if (matchingMessage) {
        setStatus(matchingMessage.text);
      }

      if (currentProgress === 100) {
        clearInterval(interval);
        // Start sliding open the doors
        setTimeout(() => {
          setDoorSlide(true);
        }, 300);

        // Notify parent after doors slide open (animation is 1.2s in CSS)
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className={`preloader-container ${doorSlide ? 'loaded' : ''}`}>
      {/* Laser horizontal sweeping line */}
      {!doorSlide && <div className="preloader-laser-line" />}

      {/* Split Doors */}
      <div className="preloader-door left" />
      <div className="preloader-door right" />

      {/* Floating Center Content */}
      <div className="preloader-content">
        <div style={{ width: '180px', height: '180px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          {/* Logo vector embedded as SVG image */}
          <img 
            src={logoVector} 
            alt="Green Ares Logo" 
            style={{ 
              width: '100%', 
              height: '100%', 
              animation: 'scale-infinite 3s infinite ease-in-out' 
            }} 
          />
        </div>

        <div className="preloader-percentage">{progress}%</div>
        <div className="preloader-status" style={{ fontSize: '0.75rem', fontFamily: 'monospace', minHeight: '30px' }}>
          {status}
        </div>
      </div>
    </div>
  );
}
