'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { translations } from '../../utils/translations';

const faqItems = [
  {
    q: 'faqQ1',
    a: 'Photography takes 24-48 hours, videos are delivered in 3-7 days, and virtual tours are typically ready in 2-5 days.',
  },
  {
    q: 'faqQ2',
    a: 'We serve Orlando and all of Florida, including Miami. For selected projects we also travel to other cities; travel fees may apply.',
  },
  {
    q: 'faqQ3',
    a: 'Yes. We offer tailored combined packages based on your property type, marketing goals, and the content you need.',
  },
  {
    q: 'faqQ4',
    a: 'We use DJI drones, FPV drones, Sony cinema cameras, gimbal stabilizers, and 3D cameras for immersive virtual tours.',
  },
  {
    q: 'faqQ5',
    a: 'Yes, rush delivery can be arranged depending on project scope and scheduling availability. Contact us for details.',
  },
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  details: '',
};

function Icon({ children }) {
  return <span className="icon">{children}</span>;
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [openFaq, setOpenFaq] = useState(0);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);

  const t = translations[lang].contact;

  const onChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="grid-overlay" />
          <div className="hero-inner">
            <p className="tag">{t.tag}</p>
            <h1>{t.title}</h1>
            <p className="lead">
              {t.desc} Fill out the form or reach out to us directly.
            </p>

            <div className="trust-row">
              <article>
                <Icon>◷</Icon>
                <h3>{t.fast}</h3>
                <p>{t.fastDesc}</p>
              </article>
              <article>
                <Icon>◈</Icon>
                <h3>{t.tailored}</h3>
                <p>Custom packages for your needs</p>
              </article>
              <article>
                <Icon>★</Icon>
                <h3>{t.premium}</h3>
                <p>Professional results that sell properties</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-main">
          <div className="main-grid">
            <div>
              <p className="tag light">{t.send}</p>
              <form onSubmit={onSubmit}>
                <label htmlFor="fullName">{t.fullName}</label>
                <input id="fullName" placeholder="Your name" value={form.fullName} onChange={onChange('fullName')} />

                <label htmlFor="email">{t.email}</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={onChange('email')}
                />

                <label htmlFor="phone">{t.phone}</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={onChange('phone')}
                />

                <label htmlFor="service">{t.service}</label>
                <select id="service" value={form.service} onChange={onChange('service')}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="photo">Real Estate Photography</option>
                  <option value="video">Real Estate Video Production</option>
                  <option value="basic-tour">Basic Virtual Tour</option>
                  <option value="premium-tour">Premium Virtual Tour – 3DVista</option>
                  <option value="custom">Custom Package</option>
                </select>

                <label htmlFor="details">{t.details}</label>
                <textarea
                  id="details"
                  rows={5}
                  placeholder="Tell us about your project, property type, location, and any specific requirements..."
                  value={form.details}
                  onChange={onChange('details')}
                />

                <button type="submit" className="submit-btn">
                  {t.submit}
                </button>
              </form>
            </div>

            <aside>
              <p className="tag light">{t.direct}</p>

              <div className="contact-item">
                <div className="icon-box">☎</div>
                <div>
                  <p className="item-label">Phone</p>
                  <p className="item-value">(Add official number)</p>
                  <p className="item-note">Mon - Sat: 8AM - 7PM EST</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">✉</div>
                <div>
                  <p className="item-label">Email</p>
                  <p className="item-value">info@lungta-solutions.com</p>
                  <p className="item-note">We reply within 24 hours</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">⌖</div>
                <div>
                  <p className="item-label">Location</p>
                  <p className="item-value">Orlando, Florida</p>
                  <p className="item-note">Serving all of Florida & Miami</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">◎</div>
                <div>
                  <p className="item-label">Follow Us</p>
                  <p className="item-value">@lungtasolutions</p>
                  <p className="item-note">Instagram icon links</p>
                </div>
              </div>

              <button type="button" className="whatsapp">
                💬 {t.whatsapp}
              </button>

              <div className="map-placeholder">
                <p>⌖ Orlando, Florida</p>
                <p>Serving Miami & Surrounding Areas</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="badges">
          <div className="badges-grid">
            <article>
              <span>◉</span>
              <h3>Professional Team</h3>
              <p>Experienced experts dedicated to your success.</p>
            </article>
            <article>
              <span>◷</span>
              <h3>Flexible Scheduling</h3>
              <p>We work around your timeline to deliver on time.</p>
            </article>
            <article>
              <span>✈</span>
              <h3>State-of-the-Art Equipment</h3>
              <p>Using the latest technology for stunning results.</p>
            </article>
            <article>
              <span>🤝</span>
              <h3>Satisfaction Guaranteed</h3>
              <p>We&apos;re not happy until you are. That&apos;s our promise.</p>
            </article>
          </div>
        </section>

        <section className="faq">
          <div className="faq-grid">
            <div>
              <p className="tag">FAQ</p>
              <h2>{t.faqTitle}</h2>
              <p className="faq-lead">Have more questions? We&apos;re here to help.</p>
              <button type="button" className="outline-btn">
                Contact Us Directly →
              </button>

              <div className="accordion">
                {faqItems.map((item, index) => {
                  const open = openFaq === index;
                  return (
                    <article key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                      <button type="button" onClick={() => setOpenFaq(open ? -1 : index)} className="faq-question">
                        <span>{t[item.q]}</span>
                        <span className="plus">{open ? '−' : '+'}</span>
                      </button>
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="quote-card">
              <p className="tag">Ready To Elevate Your Listing?</p>
              <h3>Let&apos;s bring your vision to life.</h3>
              <p>From cinematic videos to immersive 3D tours, we create visuals that sell.</p>
              <button type="button" className="quote-btn">{t.quote}</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .contact-page {
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

        .hero {
          min-height: 55vh;
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
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 500;
          line-height: 1.1;
        }

        .lead {
          margin: 20px 0 0;
          color: #777;
          font-size: 15px;
          line-height: 1.8;
        }

        .trust-row {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .icon {
          font-size: 20px;
          color: #fff;
        }

        .trust-row h3 {
          margin: 8px 0 0;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
        }

        .trust-row p {
          margin: 4px 0 0;
          font-size: 11px;
          color: #555;
          line-height: 1.5;
        }

        .contact-main {
          background: #fff;
          padding: 80px 48px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
        }

        .light {
          margin-bottom: 32px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          color: #888;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        input,
        select,
        textarea {
          width: 100%;
          border: 0.5px solid #e0e0e0;
          padding: 12px 16px;
          font-size: 14px;
          color: #1c1c1c;
          outline: none;
          background: #fff;
          margin-bottom: 20px;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: #a51c30;
        }

        .submit-btn {
          width: 100%;
          background: #a51c30;
          color: #fff;
          padding: 14px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .submit-btn:hover {
          background: #8a1828;
        }

        .contact-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 0.5px solid #f0f0f0;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background: #1c1c1c;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .item-label {
          margin: 0 0 4px;
          font-size: 11px;
          color: #999;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .item-value {
          margin: 0;
          font-size: 14px;
          color: #1c1c1c;
          font-weight: 500;
        }

        .item-note {
          margin: 2px 0 0;
          color: #999;
          font-size: 12px;
        }

        .whatsapp {
          width: 100%;
          border: none;
          background: #25d366;
          color: #fff;
          padding: 14px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .whatsapp:hover {
          background: #1ea855;
        }

        .map-placeholder {
          margin-top: 14px;
          height: 200px;
          background: #f5f5f5;
          border: 0.5px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #999;
          font-size: 13px;
          text-align: center;
        }

        .map-placeholder p {
          margin: 4px 0;
        }

        .badges {
          background: #f9f9f9;
          border-top: 0.5px solid #eee;
          border-bottom: 0.5px solid #eee;
          padding: 48px;
        }

        .badges-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .badges article {
          text-align: center;
        }

        .badges span {
          font-size: 24px;
          color: #a51c30;
        }

        .badges h3 {
          margin: 12px 0 0;
          color: #1c1c1c;
          font-size: 14px;
          font-weight: 500;
        }

        .badges p {
          margin: 6px 0 0;
          color: #999;
          font-size: 13px;
          line-height: 1.7;
        }

        .faq {
          background: #1c1c1c;
          padding: 80px 48px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .faq h2 {
          margin: 0;
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 500;
        }

        .faq-lead {
          margin: 12px 0 0;
          color: #777;
          line-height: 1.8;
        }

        .outline-btn {
          margin-top: 18px;
          border: 1px solid #fff;
          color: #fff;
          background: transparent;
          padding: 11px 16px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .accordion {
          margin-top: 20px;
        }

        .faq-item {
          border-bottom: 0.5px solid #2a2a2a;
          padding: 18px 0;
        }

        .faq-question {
          width: 100%;
          border: none;
          background: transparent;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
        }

        .plus {
          color: #a51c30;
          font-size: 20px;
          line-height: 1;
          margin-left: 12px;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease;
        }

        .faq-item.open .faq-answer {
          max-height: 180px;
        }

        .faq-answer p {
          margin: 10px 0 0;
          color: #666;
          font-size: 13px;
          line-height: 1.7;
        }

        .quote-card {
          background: #111;
          border: 0.5px solid #222;
          padding: 40px;
          height: fit-content;
        }

        .quote-card h3 {
          margin: 0;
          color: #fff;
          font-size: 28px;
          font-weight: 500;
        }

        .quote-card p {
          margin: 12px 0 0;
          color: #555;
          line-height: 1.8;
        }

        .quote-btn {
          margin-top: 24px;
          width: 100%;
          border: none;
          background: #a51c30;
          color: #fff;
          padding: 14px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
        }

        @media (max-width: 1080px) {
          .main-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .trust-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 780px) {
          .hero-inner,
          .contact-main,
          .badges,
          .faq {
            padding-left: 20px;
            padding-right: 20px;
          }

          .badges-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-item {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
