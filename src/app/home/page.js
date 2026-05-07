'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { translations } from '../../utils/translations';

export default function Home() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);
  const t = translations[lang].home;

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-grid" />
          <div className="hero-gradient" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="tag-row">
                <span className="tag-line" />
                <p>{t.tag}</p>
              </div>
              <h1>{lang === 'es' ? t.title : <>Visuals that make properties <span>sell.</span></>}</h1>
              <p className="hero-desc">
                {t.description}
              </p>
              <div className="hero-actions">
                <button type="button" className="btn btn-primary">{t.quoteBtn}</button>
                <button type="button" className="btn btn-outline">{t.workBtn}</button>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <img src="/images/logo.png" alt="Lungta" height="32" />
            </div>
          </div>
          <div className="scroll-cue">
            <span className="scroll-line" />
            <span>SCROLL</span>
          </div>
        </section>

        <section className="stats">
          <div className="stats-grid">
            {[
              { value: '150+', label: 'Projects Completed', accent: '+' },
              { value: '100+', label: 'Happy Clients', accent: '+' },
              { value: '5+', label: 'Years Experience', accent: '+' },
              { value: 'Florida', label: '& Surrounding Areas' },
              { value: '5★', label: 'Client Rating', accent: '★' },
            ].map((stat) => (
              <article key={stat.label} className="stat-item">
                <h3>
                  {stat.accent ? (
                    <>
                      {stat.value.slice(0, -1)}
                      <span>{stat.accent}</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <div>
              <p className="tag">{t.whatWeDo}</p>
              <h2>{t.servicesTitle}</h2>
              <p className="subtitle">{t.servicesSubtitle}</p>
            </div>
            <button type="button" className="btn btn-outline">{t.allServices}</button>
          </div>

          <div className="services-grid">
            {[
              {
                n: '01',
                title: t.photo,
                desc: t.photoDesc,
                tags: ['HDR Photos', 'Drone', '24-48h delivery'],
              },
              {
                n: '02',
                title: t.video,
                desc: t.videoDesc,
                tags: ['Cinematic', 'FPV Drone', 'AI Enhanced'],
                featured: true,
              },
              {
                n: '03',
                title: t.tours,
                desc: t.toursDesc,
                tags: ['360° Tour', '3DVista', '2-5 days'],
              },
            ].map((service) => (
              <article key={service.title} className={`service-card ${service.featured ? 'featured' : ''}`}>
                <span className="service-n">{service.n}</span>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <p className="chips">{service.tags.join(' · ')}</p>
                <a href="#" onClick={(e) => e.preventDefault()}>{t.learnMore}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="work">
          <div className="section-head">
            <div>
              <p className="tag">{t.featured}</p>
              <h2>{t.showcase}</h2>
            </div>
            <button type="button" className="btn btn-outline">{t.allProjects}</button>
          </div>

          <div className="work-grid">
            {[
              { title: 'Oceanfront Villa', location: 'Orlando, Florida', kind: 'Cinematic Video', tone: 'warm' },
              { title: 'Modern Mansion', location: 'Miami, Florida', kind: 'FPV Drone', tone: 'cool' },
              { title: 'Downtown Penthouse', location: 'Brickell, Miami', kind: '3D Virtual Tour', tone: 'green' },
            ].map((item) => (
              <article key={item.title} className={`work-card ${item.tone}`}>
                <span className="work-badge">{item.kind}</span>
                <div className="play">▶</div>
                <div className="work-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-strip">
          <div className="about-grid">
            <div className="about-visual">
              <img src="/images/logo.png" alt="Lungta" height="32" />
              <span className="rated">5★ Rated</span>
            </div>

            <div className="about-copy">
              <p className="tag">{t.story}</p>
              <h2>{t.built}</h2>
              <p>
                {t.storyP1}
              </p>
              <p>
                {t.storyP2}
              </p>
              <button type="button" className="btn btn-outline">{t.aboutBtn}</button>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <p className="tag">{t.clientsSay}</p>
          <blockquote>
            Lungta Solutions has completely elevated the way we market our listings. The quality, attention to detail,
            and creativity are <span>unmatched.</span> Our properties sell faster and for more.
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
        </section>

        <section className="final-cta">
          <span className="top-line" />
          <p className="tag">{t.ready}</p>
          <h2>{t.together}</h2>
          <p>
            {t.finalP}
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary">{t.finalQuote}</button>
            <button type="button" className="btn btn-outline">{t.viewServices}</button>
          </div>
        </section>
      </main>

      <Footer />
      <style jsx>{`
        .home-page {
          background: #0a0a0a;
          color: #fff;
        }

        main {
          padding-top: 64px;
        }

        .tag {
          margin: 0 0 14px;
          color: #a51c30;
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 4px;
        }

        .btn {
          padding: 13px 22px;
          border: 1px solid transparent;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          transition: all 0.25s ease;
          background: transparent;
          color: #fff;
          cursor: pointer;
        }

        .btn-primary {
          background: #a51c30;
          border-color: #a51c30;
        }

        .btn-primary:hover {
          background: #8d1728;
          border-color: #8d1728;
        }

        .btn-outline {
          border-color: #333;
          color: #b0b0b0;
        }

        .btn-outline:hover {
          border-color: #a51c30;
          color: #fff;
        }

        .hero {
          position: relative;
          min-height: calc(100vh - 64px);
          overflow: hidden;
          background: #0a0a0a;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background-image: url('/images/home-desktop.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
            linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.45) 58%, rgba(0, 0, 0, 0.25) 100%),
            radial-gradient(circle at 84% 45%, rgba(165, 28, 48, 0.06), transparent 46%),
            radial-gradient(circle at 12% 92%, rgba(180, 130, 60, 0.08), transparent 50%);
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          min-height: calc(100vh - 64px);
          padding: 0 48px;
          display: grid;
          grid-template-columns: minmax(0, 680px) 1fr;
          align-items: center;
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -1px;
          max-width: 680px;
        }

        .hero-copy h1 span {
          color: #a51c30;
        }

        .tag-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .tag-row p {
          margin: 0;
          color: #a51c30;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .tag-line {
          width: 24px;
          height: 1px;
          background: #a51c30;
        }

        .hero-desc {
          margin: 26px 0 0;
          max-width: 480px;
          color: #777;
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-actions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-visual svg {
          width: min(420px, 44vw);
          opacity: 0.2;
        }

        .hero-visual img {
          width: auto;
          height: 32px;
          opacity: 0.22;
        }

        .scroll-cue {
          position: absolute;
          z-index: 2;
          left: 50%;
          bottom: 28px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: #a51c30;
          animation: pulse 1.8s ease-in-out infinite;
        }

        .scroll-cue span:last-child {
          color: #333;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .stats {
          background: #0a0a0a;
          border-top: 0.5px solid #1a1a1a;
          border-bottom: 0.5px solid #1a1a1a;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .stat-item {
          text-align: center;
          padding: 36px 24px;
          border-right: 0.5px solid #1a1a1a;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-item h3 {
          margin: 0;
          font-size: 32px;
          font-weight: 500;
          color: #fff;
        }

        .stat-item h3 span {
          color: #a51c30;
        }

        .stat-item p {
          margin: 12px 0 0;
          color: #444;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .services,
        .work,
        .about-strip,
        .testimonial,
        .final-cta {
          padding: 80px 48px;
        }

        .services {
          background: #1c1c1c;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 34px;
        }

        .section-head h2 {
          margin: 0;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 500;
          line-height: 1.18;
        }

        .subtitle {
          margin: 12px 0 0;
          color: #666;
          font-size: 15px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
        }

        .service-card {
          background: #1c1c1c;
          padding: 40px 32px;
          border-bottom: 2px solid transparent;
          transition: all 0.25s ease;
        }

        .service-card.featured {
          border-left: 0.5px solid #a51c30;
          border-right: 0.5px solid #a51c30;
        }

        .service-card:hover {
          background: #222;
          border-bottom-color: #a51c30;
        }

        .service-n {
          display: block;
          color: #2a2a2a;
          font-size: 48px;
          line-height: 1;
          font-weight: 500;
          margin-bottom: 18px;
        }

        .service-card h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 500;
        }

        .service-desc {
          margin: 16px 0 0;
          color: #787878;
          line-height: 1.75;
        }

        .chips {
          margin: 16px 0 0;
          color: #555;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .service-card a {
          margin-top: 22px;
          display: inline-block;
          color: #a51c30;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .work {
          background: #ffffff;
          color: #1c1c1c;
        }

        .work .section-head h2 {
          color: #1c1c1c;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
        }

        .work-card {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border: 1px solid #e0e0e0;
        }

        .work-card.warm,
        .work-card.cool,
        .work-card.green {
          background: #f5f5f5;
        }

        .work-badge {
          position: absolute;
          left: 14px;
          top: 14px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #555;
          padding: 7px 10px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(8px);
        }

        .play {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #1c1c1c;
          background: rgba(255, 255, 255, 0.6);
        }

        .work-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 36px 22px 18px;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.95) 55%);
          transform: translateY(100%);
          transition: transform 0.28s ease;
        }

        .work-card:hover .work-overlay {
          transform: translateY(0);
        }

        .work-overlay h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: #1c1c1c;
        }

        .work-overlay p {
          margin: 8px 0 0;
          color: #888;
          font-size: 13px;
        }

        .about-strip {
          background: #1c1c1c;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .about-visual {
          position: relative;
          background: #111;
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-visual img {
          width: auto;
          height: 32px;
          opacity: 0.1;
        }

        .rated {
          position: absolute;
          right: 18px;
          bottom: 18px;
          background: #a51c30;
          color: #fff;
          font-size: 11px;
          letter-spacing: 1px;
          padding: 10px 14px;
          text-transform: uppercase;
        }

        .about-copy h2 {
          margin: 0;
          max-width: 460px;
          font-size: clamp(28px, 3.2vw, 42px);
          line-height: 1.15;
          font-weight: 500;
        }

        .about-copy p {
          margin: 18px 0 0;
          color: #7a7a7a;
          line-height: 1.85;
        }

        .about-copy .btn {
          margin-top: 28px;
        }

        .testimonial {
          background: #ffffff;
          text-align: center;
          color: #1c1c1c;
        }

        .testimonial .tag {
          margin-bottom: 20px;
        }

        blockquote {
          margin: 0 auto;
          max-width: 700px;
          font-style: italic;
          color: #888;
          line-height: 1.6;
          font-size: clamp(18px, 2.5vw, 26px);
        }

        blockquote span {
          color: #1c1c1c;
          font-style: normal;
        }

        .author {
          margin-top: 34px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-align: left;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #e8e8e8;
          border: 1px solid #d0d0d0;
          display: grid;
          place-items: center;
          font-size: 12px;
          letter-spacing: 1px;
          color: #1c1c1c;
        }

        .author h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: #1c1c1c;
        }

        .author p {
          margin: 4px 0 0;
          color: #555;
          font-size: 12px;
        }

        .dots {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dots i {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #d0d0d0;
        }

        .dots .active {
          background: #a51c30;
        }

        .final-cta {
          background: #1c1c1c;
          padding: 100px 48px;
          text-align: center;
        }

        .top-line {
          width: min(460px, 88%);
          height: 1px;
          display: inline-block;
          background: linear-gradient(90deg, transparent, #a51c30, transparent);
          margin-bottom: 26px;
        }

        .final-cta h2 {
          margin: 0 auto;
          max-width: 600px;
          font-size: clamp(30px, 3.8vw, 48px);
          line-height: 1.2;
          font-weight: 500;
        }

        .final-cta p {
          margin: 16px auto 0;
          max-width: 620px;
          color: #777;
          line-height: 1.8;
        }

        .final-cta .hero-actions {
          justify-content: center;
          margin-top: 30px;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 1100px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 38px 24px 100px;
          }

          .hero-copy {
            max-width: 680px;
          }

          .hero-visual {
            justify-content: flex-start;
          }

          .hero-visual svg {
            width: min(320px, 58vw);
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .stat-item:nth-child(3n) {
            border-right: none;
          }

          .services-grid,
          .work-grid,
          .about-grid {
            grid-template-columns: 1fr;
          }

          .section-head {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .hero-image {
            background-image: url('/images/home-mobile.jpeg');
          }
        }

        @media (max-width: 700px) {
          .services,
          .work,
          .about-strip,
          .testimonial,
          .final-cta {
            padding: 62px 20px;
          }

          .final-cta {
            padding: 86px 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stat-item {
            border-right: 0.5px solid #1a1a1a;
            border-bottom: 0.5px solid #1a1a1a;
          }

          .stat-item:nth-child(2n) {
            border-right: none;
          }

          .stat-item:nth-last-child(-n + 1) {
            grid-column: 1 / -1;
            border-right: none;
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
}