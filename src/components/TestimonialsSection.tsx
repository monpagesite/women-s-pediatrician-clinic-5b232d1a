import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
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
      ref={sectionRef}
      className="py-20 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            {siteContent.testimonials.heading}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg text-text leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-base font-bold text-text">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
