import React, { useEffect, useRef } from 'react';
import { Clock, Users, MessageCircle, HeartHandshake, Timer, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Clock,
  Users,
  MessageCircle,
  HeartHandshake,
  Timer,
  MapPin,
};

export const WhyUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.reason-card');
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
      id="why-us"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            {siteContent.whyUs.heading}
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.whyUs.subtext}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.whyUs.reasons.map((reason, index) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="reason-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-surface border border-border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-text mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
