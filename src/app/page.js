'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { translations } from '../utils/translations';

export default function SplashScreen() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (localStorage.getItem('visited') === 'true') {
      router.replace('/home');
      return;
    }
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);

  const t = translations[lang].splash;

  const handleLanguageSelect = (lang) => {
    if (selectedLanguage) {
      return;
    }

    setSelectedLanguage(lang);
    localStorage.setItem('lang', lang);
    localStorage.setItem('visited', 'true');

    window.setTimeout(() => {
      setIsExiting(true);
    }, 700);

    window.setTimeout(() => {
      router.push(lang === 'es' ? '/home?lang=es' : '/home');
    }, 1100);
  };

  return (
    <main className={`splash-root ${isExiting ? 'exit' : ''}`}>
      <div className="bg-layer" />
      <div className="grid-layer" />
      <div className="scanline" />
      <div className="vignette-layer" />

      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      <div className="rec-indicator">
        <span className="rec-dot" />
        <span>REC</span>
      </div>

      <section className="content-wrap">
        <div className="language-area">
          <p className="prompt">{t.prompt}</p>
          <div className="buttons-row">
            <button
              type="button"
              className={selectedLanguage === 'en' ? 'lang-button selected' : 'lang-button'}
              onClick={() => handleLanguageSelect('en')}
            >
              <span className="title">{t.english}</span>
              <span className="subtitle">{t.continue}</span>
            </button>
            <button
              type="button"
              className={selectedLanguage === 'es' ? 'lang-button selected' : 'lang-button'}
              onClick={() => handleLanguageSelect('es')}
            >
              <span className="title">{t.spanish}</span>
              <span className="subtitle">{t.continuar}</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="info-bar">
        <span>{t.info1}</span>
        <i />
        <span>{t.info2}</span>
        <i />
        <span>{t.info3}</span>
      </footer>

      <style jsx>{`
        .splash-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
          transition: opacity 0.45s ease;
        }

        .splash-root.exit {
          opacity: 0;
          pointer-events: none;
        }

        .bg-layer,
        .grid-layer,
        .vignette-layer {
          position: absolute;
          inset: 0;
        }

        .bg-layer {
          opacity: 0;
          animation: bgFade 3s ease 0.2s forwards;
          background:
            linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            radial-gradient(circle at 8% 10%, rgba(180, 130, 60, 0.12), transparent 45%),
            radial-gradient(circle at 68% 42%, rgba(165, 28, 48, 0.06), transparent 50%),
            url('/images/home-desktop.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .grid-layer {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.8s forwards;
        }

        .vignette-layer {
          background: radial-gradient(circle at center, transparent 42%, rgba(0, 0, 0, 0.8) 100%);
          pointer-events: none;
        }

        .scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(165, 28, 48, 0.15);
          box-shadow: 0 0 10px rgba(165, 28, 48, 0.2);
          animation: scanMove 4s linear infinite;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: rgba(165, 28, 48, 0.8);
          border-style: solid;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.8s forwards;
        }

        .corner-tl {
          top: 24px;
          left: 24px;
          border-width: 1.5px 0 0 1.5px;
        }

        .corner-tr {
          top: 24px;
          right: 24px;
          border-width: 1.5px 1.5px 0 0;
        }

        .corner-bl {
          bottom: 24px;
          left: 24px;
          border-width: 0 0 1.5px 1.5px;
        }

        .corner-br {
          bottom: 24px;
          right: 24px;
          border-width: 0 1.5px 1.5px 0;
        }

        .rec-indicator {
          position: absolute;
          top: 26px;
          right: 66px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          letter-spacing: 4px;
          color: #a51c30;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.8s forwards;
        }

        .rec-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #a51c30;
          animation: blink 1.2s steps(2, end) infinite;
        }

        .content-wrap {
          position: relative;
          z-index: 2;
          text-align: center;
          width: min(760px, calc(100vw - 32px));
          min-height: 100vh;
          padding: 24px 16px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .language-area {
          width: 100%;
        }

        .prompt {
          margin: 0 0 20px;
          color: #ffffff;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.9s ease 3.2s forwards;
        }

        .buttons-row {
          display: flex;
          justify-content: center;
          gap: 1px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1s ease 3.7s forwards;
        }

        .lang-button {
          position: relative;
          min-width: 220px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(0, 0, 0, 0.6);
          color: #cccccc;
          padding: 24px 56px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          backdrop-filter: blur(8px);
        }

        .lang-button::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.5px;
          height: 1px;
          background: #a51c30;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .lang-button:hover {
          color: #fff;
          border-color: #a51c30;
        }

        .lang-button:hover::after {
          transform: scaleX(1);
        }

        .lang-button.selected {
          border-color: #a51c30;
          background: rgba(165, 28, 48, 0.15);
          color: #fff;
        }

        .title,
        .subtitle {
          display: block;
        }

        .subtitle {
          margin-top: 8px;
          color: #888;
          font-size: 9px;
          letter-spacing: 2.4px;
        }

        .info-bar {
          position: fixed;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
          color: #333;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 2;
          opacity: 0;
          animation: fadeUp 1s ease 3.9s forwards;
        }

        .info-bar i {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(165, 28, 48, 0.75);
        }

        @keyframes bgFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scanMove {
          from {
            top: -8%;
          }
          to {
            top: 108%;
          }
        }

        @keyframes blink {
          0%,
          45% {
            opacity: 1;
          }
          46%,
          100% {
            opacity: 0.15;
          }
        }

        @media (max-width: 768px) {
          .bg-layer {
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
              radial-gradient(circle at 8% 10%, rgba(180, 130, 60, 0.12), transparent 45%),
              radial-gradient(circle at 68% 42%, rgba(165, 28, 48, 0.06), transparent 50%),
              url('/images/home-mobile.jpeg');
          }

          .content-wrap {
            gap: 22px;
            padding-bottom: 110px;
          }

          .buttons-row {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .lang-button {
            width: 100%;
            max-width: 320px;
            min-width: 0;
            padding: 20px 28px;
            font-size: 13px;
            letter-spacing: 3px;
          }

          .prompt {
            font-size: 12px;
            letter-spacing: 3px;
          }

          .rec-indicator {
            right: 58px;
          }

          .info-bar {
            width: calc(100vw - 24px);
            justify-content: center;
            letter-spacing: 2px;
            font-size: 8px;
            gap: 8px;
            white-space: normal;
            text-align: center;
            line-height: 1.45;
          }
        }
      `}</style>
    </main>
  );
}
