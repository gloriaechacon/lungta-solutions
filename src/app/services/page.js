'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { translations } from '../../utils/translations';

const mainServices = [
  {
    id: '01',
    title: 'Real Estate Photography',
    description:
      'Professional HDR photography that captures every detail, angle, and atmosphere of your property.',
    items: [
      'HDR professional photography',
      'Interior & exterior shots',
      'Optional drone photography',
      'Professional editing',
      'Digital delivery',
    ],
    delivery: 'Delivery in 24-48 hours',
    featured: false,
  },
  {
    id: '02',
    title: 'Real Estate Video Production',
    description:
      'Cinematic storytelling that brings your property to life — from FPV drone flights to AI-enhanced edits.',
    items: [
      'Cinematic & branding videos',
      'Drone & FPV footage',
      'AI-enhanced editing',
      'Vertical content for social media',
      'Music & color grading',
    ],
    delivery: 'Delivery in 3-7 days',
    featured: true,
  },
  {
    id: '03',
    title: 'Virtual Tours',
    description:
      'Immersive 360° experiences that let buyers explore every room, from anywhere in the world.',
    items: [
      'Interactive navigation',
      'Hotspots & multimedia',
      'Mobile & desktop compatible',
      'Basic or Premium (3DVista)',
      'Custom branding available',
    ],
    delivery: 'Delivery in 2-5 days',
    featured: false,
  },
];

const videoChips = [
  'Cinematic Videos',
  'Branding Videos',
  'AI Enhanced Videos',
  'Drone Videos',
  'FPV Drone Shots',
  'Vertical Content',
];

const steps = [
  {
    number: '01',
    name: 'Plan',
    description: 'We discuss your goals and design the perfect visual strategy for your property.',
  },
  {
    number: '02',
    name: 'Capture',
    description: 'Our team shoots on-site with professional equipment — cameras, drones, and FPV.',
  },
  {
    number: '03',
    name: 'Edit',
    description: 'We edit, color grade, and perfect every frame to match the vision.',
  },
  {
    number: '04',
    name: 'Deliver',
    description: 'You receive your final content ready to publish, share, and sell.',
    fast: true,
  },
];

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5zm0 17.5a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8zm.75-12h-1.5v5.1l4.35 2.61.75-1.23-3.6-2.13z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ServicesPage() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);
  const t = translations[lang].servicesPage;

  return (
    <div className="services-page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="grid-overlay" />
          <div className="hero-inner">
            <p className="breadcrumb">Home › Services</p>
            <p className="tag">{t.heroTag}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lead">
              {t.heroDesc}
            </p>
            <p className="note">Every project is custom-quoted based on property size and scope.</p>
          </div>
        </section>

        <section className="services-main">
          <div className="section-head">
            <p className="tag">{t.ourServices}</p>
            <h2>{t.coreTitle}</h2>
          </div>

          <div className="cards-grid">
            {mainServices.map((service) => (
              <article key={service.title} className={`service-card ${service.featured ? 'featured' : ''}`}>
                <span className="number">{service.id}</span>
                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="delivery">
                  <ClockIcon />
                  <span>{service.delivery}</span>
                </p>
                <a href="#" onClick={(event) => event.preventDefault()}>
                  Get a Quote →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="options">
          <div className="options-grid">
            <div className="video-options">
              <p className="tag">{t.videoOptions}</p>
              <h3>{t.whatsInside}</h3>
              <p className="subtitle">{t.choose}</p>
              <div className="chip-wrap">
                {videoChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="tour-options">
              <p className="tag">{t.tourOptions}</p>
              <h3>{t.basicVs}</h3>
              <div className="tour-box">
                <h4>Basic Virtual Tour</h4>
                <p>Interactive tour · Simple navigation · Basic hotspots · Mobile & desktop</p>
              </div>
              <div className="tour-box premium">
                <div className="tour-top">
                  <h4>Premium Virtual Tour – 3DVista</h4>
                  <span>PREMIUM</span>
                </div>
                <p>Immersive experience · Drone panoramas · Custom branding · Advanced hotspots · Live guided tour</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <p className="tag">{t.process}</p>
          <h2>{t.processTitle}</h2>
          <p className="subtitle">
            We make the process easy so you can focus on what matters — closing deals.
          </p>
          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step">
                <span className="step-number">{step.number}</span>
                <h3>{step.name === 'Plan' ? t.plan : step.name === 'Capture' ? t.capture : step.name === 'Edit' ? t.edit : step.name === 'Deliver' ? t.deliver : step.name}</h3>
                <p>{step.description}</p>
                {step.fast ? <span className="fast-tag">Fast turnaround</span> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2>{t.ready}</h2>
          <p>Every property is unique. Let&apos;s create something extraordinary together.</p>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary">
              {t.request}
            </button>
            <button type="button" className="btn btn-outline">
              View Our Work
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .services-page {
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

        .btn {
          border: 1px solid transparent;
          padding: 12px 20px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
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
          background: #8f1829;
          border-color: #8f1829;
        }

        .btn-outline {
          border-color: #333;
          color: #b2b2b2;
        }

        .btn-outline:hover {
          border-color: #a51c30;
          color: #fff;
        }

        .hero {
          min-height: 60vh;
          position: relative;
          background:
            radial-gradient(circle at 84% 45%, rgba(165, 28, 48, 0.06), transparent 46%),
            radial-gradient(circle at 12% 92%, rgba(180, 130, 60, 0.08), transparent 50%),
            #0a0a0a;
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
          max-width: 760px;
          padding: 72px 48px;
        }

        .breadcrumb {
          margin: 0 0 18px;
          color: #444;
          font-size: 11px;
          letter-spacing: 1px;
        }

        h1 {
          margin: 0;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 500;
          line-height: 1.1;
        }

        .lead {
          margin: 22px 0 0;
          color: #777;
          font-size: 15px;
          line-height: 1.8;
          max-width: 620px;
        }

        .note {
          margin: 14px 0 0;
          color: #444;
          font-size: 13px;
          font-style: italic;
        }

        .services-main {
          background: #1c1c1c;
          padding: 80px 48px;
        }

        .section-head h2 {
          margin: 0;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 500;
          line-height: 1.15;
        }

        .cards-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: #2a2a2a;
        }

        .service-card {
          background: #1c1c1c;
          padding: 36px 28px;
        }

        .service-card.featured {
          border-left: 0.5px solid #a51c30;
          border-right: 0.5px solid #a51c30;
        }

        .number {
          display: block;
          color: #1f1f1f;
          font-size: 52px;
          line-height: 1;
          margin-bottom: 14px;
          font-weight: 500;
        }

        .service-card h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
        }

        .description {
          margin: 14px 0 0;
          color: #747474;
          line-height: 1.75;
        }

        ul {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        li {
          position: relative;
          color: #888;
          font-size: 13px;
          padding-left: 14px;
        }

        li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #a51c30;
        }

        .delivery {
          margin: 20px 0 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #555;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .delivery svg {
          width: 14px;
          color: #666;
          flex: 0 0 auto;
        }

        .service-card a {
          margin-top: 20px;
          display: inline-block;
          text-decoration: none;
          color: #a51c30;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .options {
          background: #111;
          padding: 64px 48px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .options h3 {
          margin: 0;
          font-size: 28px;
          font-weight: 500;
        }

        .subtitle {
          margin: 12px 0 0;
          color: #666;
          line-height: 1.7;
        }

        .chip-wrap {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .chip {
          border: 0.5px solid #333;
          color: #888;
          font-size: 12px;
          padding: 8px 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .tour-box {
          margin-top: 14px;
          border: 0.5px solid #222;
          padding: 20px;
        }

        .tour-box h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
        }

        .tour-box p {
          margin: 10px 0 0;
          color: #777;
          line-height: 1.65;
        }

        .tour-box.premium {
          border-color: #a51c30;
        }

        .tour-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .tour-top span {
          background: #a51c30;
          color: #fff;
          font-size: 10px;
          letter-spacing: 1px;
          padding: 4px 8px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .process {
          background: #ffffff;
          padding: 64px 48px;
          color: #1c1c1c;
        }

        .process h2 {
          margin: 0;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 500;
          color: #1c1c1c;
        }

        .process .subtitle {
          color: #666;
        }

        .steps-grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          background: #e0e0e0;
        }

        .step {
          background: #ffffff;
          padding: 28px 24px;
        }

        .step-number {
          display: block;
          color: #a51c30;
          font-size: 28px;
          font-weight: 500;
          line-height: 1;
          margin-bottom: 12px;
        }

        .step h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: #1c1c1c;
        }

        .step p {
          margin: 10px 0 0;
          color: #666;
          font-size: 13px;
          line-height: 1.75;
        }

        .fast-tag {
          margin-top: 14px;
          display: inline-block;
          color: #a51c30;
          border: 0.5px solid #a51c30;
          padding: 4px 8px;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cta {
          background: #1c1c1c;
          padding: 80px 48px;
          text-align: center;
        }

        .cta h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
        }

        .cta p {
          margin: 14px auto 0;
          max-width: 580px;
          color: #777;
          line-height: 1.8;
        }

        .cta-actions {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .cards-grid,
          .options-grid {
            grid-template-columns: 1fr;
          }

          .steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .hero-inner,
          .services-main,
          .options,
          .process,
          .cta {
            padding-left: 20px;
            padding-right: 20px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
