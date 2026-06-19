import React, { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export const DoctorsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.doctor-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
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
      id="doctors"
      ref={sectionRef}
      className="py-20 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            {siteContent.doctors.heading}
          </h2>
          <p className="text-xl text-text-muted">
            {siteContent.doctors.subtext}
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {siteContent.doctors.team.map((doctor, index) => (
            <div
              key={index}
              className="doctor-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Doctor Photo */}
              <div className="aspect-square bg-secondary/10 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text mb-2">
                  {doctor.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {doctor.credentials}
                </p>
                <p className="text-base text-text-muted leading-relaxed mb-4">
                  {doctor.bio}
                </p>

                {/* Languages */}
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang, langIndex) => (
                    <span
                      key={langIndex}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
