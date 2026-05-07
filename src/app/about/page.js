'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { translations } from '../../utils/translations';

const stats = [
  {
    value: '150+',
    label: 'Projects Completed',
    description: 'From luxury homes to large developments.',
    accent: true,
  },
  {
    value: '100+',
    label: 'Happy Clients',
    description: 'Agents, brokers and developers who trust our work.',
    accent: true,
  },
  {
    value: '5+',
    label: 'Years Experience',
    description: 'Experience that translates into stunning results.',
    accent: true,
  },
  {
    value: '⌖',
    label: 'Miami & Beyond',
    description: 'Serving Orlando, Miami, Florida and surrounding areas.',
    accent: false,
    icon: true,
  },
  {
    value: '★',
    label: '5-Star Rated',
    description: 'Consistent 5-star reviews across all platforms.',
    accent: false,
    icon: true,
  },
];

const differentiators = [
  {
    icon: '◉',
    title: 'cin',
    description: 'We create emotional content that connects buyers to properties.',
  },
  {
    icon: '✈',
    title: 'tech',
    description: 'FPV drones, 3D tours, AI editing and more. Always ahead of the curve.',
  },
  {
    icon: '◆',
    title: 'detail',
    description: 'Every angle, every frame, every detail is intentional and flawless.',
  },
  {
    icon: '◷',
    title: 'fast',
    description: 'We respect your time and deliver high-quality content on schedule.',
  },
  {
    icon: '▣',
    title: 'results',
    description: 'Our content is designed to help you stand out and close more deals.',
  },
];

const gear = [
  { icon: '◉', name: 'DJI Inspire 3', role: 'Cinematic Drone' },
  { icon: '◈', name: 'DJI FPV', role: 'FPV Drone' },
  { icon: '▦', name: 'Sony A7S III', role: 'Cinema Camera' },
  { icon: '◍', name: 'DJI Ronin 4D', role: 'Gimbal Stabilizer' },
  { icon: '⬢', name: 'Matterport Pro3', role: '3D Camera' },
  { icon: '▤', name: 'Mac Studio', role: 'Editing Station' },
];

export default function AboutPage() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);
  const t = translations[lang].about;

  return (
    <div className="about-page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="grid-overlay" />
          <div className="hero-inner">
            <p className="tag">{t.tag}</p>
            <h1>{t.title}</h1>
            <p className="lead">
              We combine cinematic storytelling, cutting-edge technology, and a passion for detail to help real estate
              professionals stand out and sell more.
            </p>
            <div className="signature">
              <p className="name">Lungta</p>
              <p className="role">{t.founder}</p>
            </div>
            <button type="button" className="btn red">{t.work}</button>
          </div>
        </section>

        <section className="story">
          <div className="story-grid">
            <div className="story-visual">
              <div className="warm-overlay" />
              <img src="/images/logo.png" alt="Lungta" height="32" />
              <p>LUNGTA SOLUTIONS</p>
            </div>
            <div className="story-copy">
              <p className="tag">{t.story}</p>
              <h2>{t.built}</h2>
              <p>
                Lungta Solutions was founded with a simple mission: to create extraordinary visual content that
                transforms the way properties are marketed.
              </p>
              <p>
                What started as a passion for drones and visual storytelling has grown into a full-service real estate
                media company trusted by agents, developers, and brands across Miami and beyond.
              </p>
              <p>We believe every property has a story. Our job is to tell it in the most powerful way possible.</p>
              <button type="button" className="btn dark">{t.work}</button>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="stat-card">
                <h3 className={item.icon ? 'icon' : ''}>
                  {item.accent ? (
                    <>
                      {item.value.slice(0, -1)}
                      <span>+</span>
                    </>
                  ) : (
                    item.value
                  )}
                </h3>
                <h4>{item.label}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="apart">
          <p className="tag center">{t.apart}</p>
          <h2>{t.apartTitle}</h2>
          <div className="apart-grid">
            {differentiators.map((item) => (
              <article key={item.title}>
                <span className="icon-wrap">{item.icon}</span>
                <h3>{t[item.title]}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gear">
          <div className="gear-grid">
            <div className="gear-copy">
              <p className="tag">{t.tools}</p>
              <h2>{t.gear}</h2>
              <p>
                We invest in the best equipment to deliver the highest quality visuals for your listings.
              </p>
            </div>
            <div className="gear-items">
              {gear.map((item) => (
                <article key={item.name}>
                  <span>{item.icon}</span>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials">
          <p className="tag center">{t.clients}</p>
          <div className="quote-wrap">
            <p className="quote-mark">&quot;</p>
            <blockquote>
              Lungta Solutions has completely elevated the way we market our listings. The quality, attention to
              detail, and creativity are <span>unmatched.</span> Our properties sell faster and for more.
            </blockquote>
            <div className="author">
              <span className="avatar">MR</span>
              <div>
                <h4>Michael Rodriguez</h4>
                <p>Luxury Real Estate Advisor · Miami, FL</p>
              </div>
            </div>
            <div className="dots">
              <i className="active" />
              <i />
              <i />
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="left">
            <span className="drone">✈</span>
            <div>
              <h3>{t.ready}</h3>
              <p>Let&apos;s create something extraordinary together.</p>
            </div>
          </div>
          <button type="button" className="btn red">GET A QUOTE →</button>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .about-page {
          background: #0a0a0a;
          color: #fff;
        }

        main {
          padding-top: 64px;
        }

        .tag {
          margin: 0 0 14px;
          color: #a51c30;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .center {
          text-align: center;
        }

        .btn {
          border: none;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 12px 28px;
          transition: background 0.2s ease;
        }

        .btn.red {
          background: #a51c30;
          color: #fff;
        }

        .btn.red:hover {
          background: #8e1628;
        }

        .btn.dark {
          background: #1c1c1c;
          color: #fff;
          margin-top: 18px;
        }

        .hero {
          min-height: 60vh;
          background: #0a0a0a;
          position: relative;
          display: flex;
          align-items: center;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 600px;
          padding: 72px 48px;
        }

        h1 {
          margin: 0;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 500;
          line-height: 1.1;
        }

        .lead {
          margin: 18px 0 0;
          color: #777;
          font-size: 15px;
          line-height: 1.8;
        }

        .signature {
          margin-top: 22px;
        }

        .signature .name {
          margin: 0;
          font-size: 24px;
          color: #fff;
          font-style: italic;
        }

        .signature .role {
          margin: 6px 0 0;
          font-size: 11px;
          color: #555;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero .btn {
          margin-top: 22px;
        }

        .story {
          background: #fff;
          padding: 80px 48px;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .story-visual {
          aspect-ratio: 4 / 3;
          background: #1c1c1c;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-direction: column;
        }

        .warm-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 20%, rgba(180, 130, 60, 0.2), transparent 55%);
        }

        .story-visual img {
          width: auto;
          height: 32px;
          opacity: 0.15;
          position: relative;
          z-index: 2;
        }

        .story-visual p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.1);
          letter-spacing: 4px;
          font-size: 12px;
          position: relative;
          z-index: 2;
        }

        .story-copy h2 {
          margin: 0;
          color: #1c1c1c;
          font-size: 32px;
          font-weight: 500;
          line-height: 1.2;
        }

        .story-copy p {
          margin: 14px 0 0;
          color: #666;
          font-size: 15px;
          line-height: 1.8;
        }

        .stats {
          background: #1c1c1c;
          padding: 40px 48px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .stat-card {
          text-align: center;
          padding: 24px;
          border-right: 0.5px solid #2a2a2a;
        }

        .stat-card:last-child {
          border-right: none;
        }

        .stat-card h3 {
          margin: 0;
          font-size: 36px;
          font-weight: 500;
          color: #fff;
          line-height: 1;
        }

        .stat-card h3 span {
          color: #a51c30;
        }

        .stat-card h3.icon {
          color: #a51c30;
        }

        .stat-card h4 {
          margin: 8px 0 0;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
        }

        .stat-card p {
          margin: 4px 0 0;
          color: #555;
          font-size: 11px;
          line-height: 1.7;
        }

        .apart {
          background: #fff;
          padding: 80px 48px;
          text-align: center;
        }

        .apart h2 {
          margin: 0;
          color: #1c1c1c;
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 500;
        }

        .apart-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1px;
          background: #f0f0f0;
        }

        .apart-grid article {
          background: #fff;
          padding: 32px 24px;
          text-align: center;
        }

        .icon-wrap {
          width: 56px;
          height: 56px;
          border: 0.5px solid #e0e0e0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #a51c30;
          font-size: 28px;
          margin-bottom: 16px;
        }

        .apart-grid h3 {
          margin: 0;
          color: #1c1c1c;
          font-size: 14px;
          font-weight: 500;
        }

        .apart-grid p {
          margin: 8px 0 0;
          color: #999;
          font-size: 13px;
          line-height: 1.7;
        }

        .gear {
          background: #0a0a0a;
          padding: 80px 48px;
        }

        .gear-grid {
          display: grid;
          grid-template-columns: minmax(300px, 400px) 1fr;
          gap: 48px;
          align-items: start;
        }

        .gear-copy h2 {
          margin: 0;
          color: #fff;
          font-size: 28px;
          font-weight: 500;
          line-height: 1.2;
        }

        .gear-copy p {
          margin: 12px 0 0;
          color: #555;
          font-size: 14px;
          line-height: 1.8;
        }

        .gear-items {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .gear-items article {
          background: #111;
          border: 0.5px solid #1a1a1a;
          padding: 20px;
          text-align: center;
        }

        .gear-items span {
          color: #2a2a2a;
          font-size: 40px;
          line-height: 1;
        }

        .gear-items h3 {
          margin: 12px 0 0;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
        }

        .gear-items p {
          margin: 4px 0 0;
          font-size: 11px;
          color: #555;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .testimonials {
          background: #1c1c1c;
          padding: 80px 48px;
          text-align: center;
        }

        .quote-wrap {
          max-width: 800px;
          margin: 0 auto;
        }

        .quote-mark {
          margin: 0 0 24px;
          color: #a51c30;
          font-size: 80px;
          line-height: 0.5;
        }

        blockquote {
          margin: 0;
          color: #888;
          font-size: clamp(18px, 2vw, 24px);
          font-style: italic;
          line-height: 1.7;
        }

        blockquote span {
          color: #fff;
          font-style: normal;
        }

        .author {
          margin-top: 26px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: #222;
          border: 1px solid #333;
          display: grid;
          place-items: center;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .author h4 {
          margin: 0;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          text-align: left;
        }

        .author p {
          margin: 4px 0 0;
          color: #555;
          font-size: 12px;
          text-align: left;
        }

        .dots {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dots i {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #2a2a2a;
          cursor: pointer;
        }

        .dots i.active {
          background: #a51c30;
        }

        .final-cta {
          background: #0a0a0a;
          border-top: 0.5px solid #1a1a1a;
          padding: 32px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .drone {
          color: #a51c30;
          font-size: 22px;
        }

        .left h3 {
          margin: 0;
          color: #fff;
          font-size: 18px;
          font-weight: 500;
        }

        .left p {
          margin: 4px 0 0;
          color: #555;
          font-size: 13px;
        }

        @media (max-width: 1140px) {
          .story-grid,
          .gear-grid {
            grid-template-columns: 1fr;
          }

          .apart-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .stat-card:nth-child(3n) {
            border-right: none;
          }
        }

        @media (max-width: 780px) {
          .hero-inner,
          .story,
          .stats,
          .apart,
          .gear,
          .testimonials,
          .final-cta {
            padding-left: 20px;
            padding-right: 20px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stat-card {
            border-right: 0.5px solid #2a2a2a;
            border-bottom: 0.5px solid #2a2a2a;
          }

          .stat-card:nth-child(2n) {
            border-right: none;
          }

          .stat-card:last-child {
            grid-column: 1 / -1;
            border-right: none;
          }

          .apart-grid {
            grid-template-columns: 1fr;
          }

          .gear-items {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .final-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
