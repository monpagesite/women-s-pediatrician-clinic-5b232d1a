import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-text text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              {siteContent.header.logo}
            </h3>
            <p className="text-background/80 leading-relaxed mb-6">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteContent.footer.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteContent.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteContent.footer.email}`}
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteContent.footer.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{siteContent.footer.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">
              Hours
            </h4>
            <div className="flex items-start gap-2 text-background/80">
              <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>{siteContent.footer.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <p className="text-center text-background/60 text-sm">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
