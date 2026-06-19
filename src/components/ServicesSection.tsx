import React, { useEffect, useRef } from 'react';
import { Stethoscope, Heart, Calendar, Baby } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Stethoscope,
  Heart,
  Calendar,
  Baby,
};

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
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
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            {siteContent.services.heading}
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.services.subtext}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-surface border border-border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-text mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
