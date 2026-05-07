'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { translations } from '../../utils/translations';

const FILTERS = ['ALL', 'CINEMATIC VIDEO', '3D TOURS', 'DRONE / FPV', 'PHOTOGRAPHY', 'AI ENHANCED'];

const PROJECTS = [
  { title: 'Oceanfront Villa', location: 'Orlando, Florida', category: 'CINEMATIC VIDEO', duration: '1:32', tone: 'warm-1' },
  { title: 'Modern Mansion', location: 'Miami, Florida', category: 'DRONE / FPV', duration: '2:15', tone: 'cool-1' },
  { title: 'Downtown Penthouse', location: 'Brickell, Miami', category: '3D TOURS', duration: '3:45', tone: 'green-1' },
  { title: 'Mountain Retreat', location: 'Aspen, Colorado', category: 'CINEMATIC VIDEO', duration: '1:48', tone: 'warm-2' },
  { title: 'Luxury Condo', location: 'Miami Beach, Florida', category: 'PHOTOGRAPHY', duration: '', tone: 'cool-2' },
  { title: 'Architectural Showcase', location: 'Coral Gables, Florida', category: 'AI ENHANCED', duration: '1:21', tone: 'green-2' },
  { title: 'Beach House', location: 'Key Biscayne, Florida', category: 'DRONE / FPV', duration: '1:59', tone: 'warm-3' },
  { title: 'Corporate Office', location: 'Downtown, Miami', category: '3D TOURS', duration: '2:30', tone: 'cool-3' },
  { title: 'Private Estate', location: 'Wellington, Florida', category: 'CINEMATIC VIDEO', duration: '2:05', tone: 'green-3' },
];

function CameraIcon() {
  return (
    <svg viewBox="0 0 180 120" aria-hidden="true">
      <path d="M8 96h124v-48h-18l-12-16H52L40 48H8v48zm136-38 28-12v40l-28-12V58z" />
    </svg>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);
  const t = translations[lang].work;

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'ALL') {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="work-page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="grid-overlay" />
          <div className="hero-inner">
            <p className="tag">{t.tag}</p>
            <h1>{t.title}</h1>
            <p className="lead">{t.desc}</p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary">{t.allProjects}</button>
              <button type="button" className="btn btn-outline-dark">{t.quote}</button>
            </div>
          </div>
        </section>

        <section className="portfolio">
          <div className="filters-row">
            <div className="tabs-scroll">
              <div className="tabs">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`tab ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {t.tabs[filter]}
                  </button>
                ))}
              </div>
            </div>

            <label className="sort">
              <span>Sort by:</span>
              <select defaultValue="Newest" aria-label="Sort portfolio projects">
                <option>Newest</option>
                <option>Oldest</option>
                <option>A-Z</option>
              </select>
            </label>
          </div>

          <div className="portfolio-grid">
            {PROJECTS.map((project) => {
              const isVisible = activeFilter === 'ALL' || project.category === activeFilter;
              return (
                <article key={project.title} className={`project-card ${project.tone} ${isVisible ? 'visible' : 'dimmed'}`}>
                  <div className="card-media">
                    <span className="category-badge">{project.category}</span>
                    <div className="play">▶</div>
                    {project.duration ? <span className="duration">{project.duration}</span> : null}
                    <div className="overlay">
                      <h3>{project.title}</h3>
                      <p>{project.location}</p>
                      <a href="#" onClick={(event) => event.preventDefault()}>VIEW PROJECT →</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {!visibleProjects.length && <p className="empty">No projects in this category yet.</p>}
        </section>

        <section className="bottom-cta">
          <div className="cta-left">
            <div className="cta-icon">
              <CameraIcon />
            </div>
            <p>{t.ctaQ} {t.ctaP}</p>
          </div>
          <button type="button" className="btn btn-primary">{t.start}</button>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .work-page {
          background: #0a0a0a;
          color: #fff;
        }

        main {
          padding-top: 64px;
        }

        .btn {
          padding: 12px 20px;
          border: 1px solid transparent;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
        }

        .btn-primary {
          background: #a51c30;
          border-color: #a51c30;
          color: #fff;
        }

        .btn-primary:hover {
          background: #8b1728;
          border-color: #8b1728;
        }

        .btn-outline-dark {
          border-color: #333;
          color: #bbb;
          background: transparent;
        }

        .btn-outline-dark:hover {
          color: #fff;
          border-color: #a51c30;
        }

        .hero {
          position: relative;
          min-height: 50vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          overflow: hidden;
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
          max-width: 680px;
          padding: 72px 48px;
        }

        .tag {
          margin: 0 0 16px;
          color: #a51c30;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 500;
          line-height: 1.1;
        }

        .lead {
          margin: 20px 0 0;
          color: #777;
          font-size: 15px;
          line-height: 1.8;
          max-width: 520px;
        }

        .hero-actions {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .portfolio {
          background: #fff;
          color: #1c1c1c;
          padding: 64px 48px;
        }

        .filters-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
        }

        .tabs-scroll {
          overflow-x: auto;
          scrollbar-width: thin;
        }

        .tabs {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: max-content;
          padding-bottom: 4px;
        }

        .tab {
          border: 0;
          border-bottom: 2px solid transparent;
          background: transparent;
          color: #999;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 10px 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab:hover {
          color: #1c1c1c;
        }

        .tab.active {
          background: #1c1c1c;
          color: #fff;
          padding: 10px 20px;
        }

        .sort {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #999;
          font-size: 12px;
          white-space: nowrap;
        }

        .sort select {
          border: 0.5px solid #ddd;
          color: #999;
          font-size: 12px;
          padding: 8px 16px;
          background: #fff;
        }

        .portfolio-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .project-card {
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .project-card.visible {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }

        .project-card.dimmed {
          opacity: 0.2;
          transform: scale(0.98);
          pointer-events: none;
        }

        .card-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #ececec;
          display: grid;
          place-items: center;
          transition: transform 0.3s ease;
        }

        .project-card:hover .card-media {
          transform: scale(1.03);
        }

        .warm-1 .card-media {
          background: linear-gradient(140deg, #2b1a11, #141316 58%, #2f1d16);
        }

        .cool-1 .card-media {
          background: linear-gradient(140deg, #111d32, #12141d 58%, #1a2841);
        }

        .green-1 .card-media {
          background: linear-gradient(140deg, #182417, #101211 58%, #213021);
        }

        .warm-2 .card-media {
          background: linear-gradient(140deg, #2d2016, #181613 58%, #34261c);
        }

        .cool-2 .card-media {
          background: linear-gradient(140deg, #192334, #131518 58%, #243246);
        }

        .green-2 .card-media {
          background: linear-gradient(140deg, #182918, #131715 58%, #274227);
        }

        .warm-3 .card-media {
          background: linear-gradient(140deg, #3a2619, #171311 58%, #302018);
        }

        .cool-3 .card-media {
          background: linear-gradient(140deg, #1a2638, #111318 58%, #25364d);
        }

        .green-3 .card-media {
          background: linear-gradient(140deg, #243522, #121611 58%, #1f2c1d);
        }

        .play {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          background: rgba(0, 0, 0, 0.24);
        }

        .category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 9px;
        }

        .duration {
          position: absolute;
          right: 12px;
          bottom: 12px;
          background: rgba(0, 0, 0, 0.58);
          color: #fff;
          font-size: 11px;
          padding: 5px 8px;
          letter-spacing: 0.5px;
        }

        .overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 32px 16px 16px;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.88) 65%);
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.28s ease, opacity 0.28s ease;
        }

        .project-card:hover .overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .overlay h3 {
          margin: 0;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }

        .overlay p {
          margin: 8px 0 0;
          color: #666;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .overlay a {
          margin-top: 12px;
          display: inline-block;
          color: #a51c30;
          font-size: 11px;
          letter-spacing: 1px;
          text-decoration: none;
        }

        .empty {
          margin: 20px 0 0;
          color: #999;
          font-size: 13px;
        }

        .bottom-cta {
          background: #fff;
          padding: 48px;
          border-top: 0.5px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .cta-left {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #1c1c1c;
        }

        .cta-left p {
          margin: 0;
          max-width: 620px;
          line-height: 1.6;
        }

        .cta-icon {
          width: 66px;
          color: #ddd;
          flex: 0 0 auto;
        }

        .cta-icon svg {
          display: block;
          width: 100%;
          fill: currentColor;
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hero-inner,
          .portfolio,
          .bottom-cta {
            padding-left: 20px;
            padding-right: 20px;
          }

          .filters-row {
            flex-direction: column;
            align-items: stretch;
          }

          .sort {
            justify-content: flex-start;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .bottom-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-left {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
