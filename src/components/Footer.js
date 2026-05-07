'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { translations } from '../utils/translations';

export default function Footer() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved === 'es' ? 'es' : 'en');
  }, []);
  const t = translations[lang].footer;

  const quickLinks = [
    { name: translations[lang].navbar.home, href: '/' },
    { name: translations[lang].navbar.services, href: '/services' },
    { name: translations[lang].navbar.work, href: '/work' },
    { name: translations[lang].navbar.about, href: '/about' },
    { name: translations[lang].navbar.contact, href: '/contact' },
  ];

  const services = [
    { name: translations[lang].home.photo, href: '/services' },
    { name: 'Video Production', href: '/services' },
    { name: translations[lang].home.tours, href: '/services' },
  ];

  return (
    <footer className="bg-deep-black">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/images/lungta.png" alt="Lungta Solutions" style={{ height: '32px' }} className="w-auto" />
            <p className="text-muted-gray text-sm">{t.tagline}</p>
            <p className="text-sm text-muted-gray">
              {t.instagramLabel}{' '}
              <a
                href="https://instagram.com/lungtasolutions"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#888', textDecoration: 'none' }}
              >
                @lungtasolutions
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent-red text-xs uppercase tracking-[4px] font-medium mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-gray hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-accent-red text-xs uppercase tracking-[4px] font-medium mb-4">{t.services}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-gray hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-accent-red text-xs uppercase tracking-[4px] font-medium mb-4">{t.contact}</h4>
            <div className="space-y-4">
              <div className="text-muted-gray text-sm space-y-1">
                <p>Orlando, Florida</p>
                <p>info@lungta-solutions.com</p>
                <p>WhatsApp Available</p>
              </div>

              <div>
                <p className="text-white text-sm mb-2">{t.stayUpdated}</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-l px-3 py-2 text-white placeholder-muted-gray text-sm focus:outline-none focus:border-accent-red"
                  />
                  <button className="bg-accent-red text-white px-4 py-2 rounded-r hover:bg-accent-red/80 transition-colors duration-300 text-sm uppercase tracking-wider">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-gray text-sm">
              © 2025 Lungta Solutions. {t.rights}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-muted-gray hover:text-white transition-colors duration-300 text-sm">
                {t.privacy}
              </Link>
              <Link href="/terms" className="text-muted-gray hover:text-white transition-colors duration-300 text-sm">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}