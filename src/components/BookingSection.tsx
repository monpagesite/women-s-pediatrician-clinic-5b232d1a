import React, { useEffect, useRef } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const BookingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.booking-reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="book"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            {siteContent.booking.heading}
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.booking.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="booking-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out bg-surface rounded-3xl p-10 border border-border">
            <h3 className="font-display text-2xl font-bold text-text mb-6">
              Get in touch
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href={`tel:${siteContent.booking.contact.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-1">
                    Phone
                  </p>
                  <p className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
                    {siteContent.booking.contact.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteContent.booking.contact.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-1">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
                    {siteContent.booking.contact.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-1">
                    Address
                  </p>
                  <p className="text-lg font-semibold text-text">
                    {siteContent.booking.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border">
              <a
                href={`tel:${siteContent.booking.contact.phone.replace(/\s/g, '')}`}
                className="flex-1 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {siteContent.booking.ctaSecondary}
              </a>
              <a
                href={`mailto:${siteContent.booking.contact.email}`}
                className="flex-1 bg-surface border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {siteContent.booking.ctaPrimary}
              </a>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="booking-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out bg-surface rounded-3xl p-10 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text">
                {siteContent.booking.hours.heading}
              </h3>
            </div>

            <div className="space-y-4">
              {siteContent.booking.hours.schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                >
                  <span className="text-base font-medium text-text">
                    {item.day}
                  </span>
                  <span className="text-base text-text-muted">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="bg-secondary/5 rounded-2xl p-6">
                <p className="text-base text-text-muted leading-relaxed">
                  <span className="font-semibold text-secondary">
                    Same-day appointments available.
                  </span>{' '}
                  Call us in the morning for afternoon slots, or book online for routine checkups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
