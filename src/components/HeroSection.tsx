import React, { useEffect, useRef } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll('.hero-reveal');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-8');
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 100);
    });
  }, []);

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#book');
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full min-h-screen">
        {/* Left Content Area */}
        <div className="w-[55%] bg-background flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20" ref={contentRef}>
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">
                {siteContent.hero.badge}
              </span>

              {/* Headline */}
              <h1 className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-5xl md:text-7xl font-bold text-text leading-tight tracking-tight mb-6">
                {siteContent.hero.headline}
              </h1>

              {/* Subtext */}
              <p className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out text-text-muted text-xl md:text-2xl leading-relaxed mb-10">
                {siteContent.hero.subtext}
              </p>

              {/* CTA Row */}
              <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap items-center gap-6 mb-12">
                <a
                  href="#book"
                  onClick={handleBookClick}
                  className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {siteContent.hero.ctaPrimary}
                </a>
                <a
                  href="tel:+85212345678"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {siteContent.hero.ctaSecondary}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap gap-8 text-sm text-text-muted">
                {siteContent.hero.stats.map((stat, index) => (
                  <span key={index}>{stat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="w-[45%] relative">
          <img
            src={siteContent.hero.image}
            alt="Mother and child"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative w-full min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={siteContent.hero.image}
            alt="Mother and child"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-6 py-32" ref={contentRef}>
          <div>
            {/* Badge */}
            <span className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">
              {siteContent.hero.badge}
            </span>

            {/* Headline */}
            <h1 className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-5xl font-bold text-text leading-tight tracking-tight mb-6">
              {siteContent.hero.headline}
            </h1>

            {/* Subtext */}
            <p className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out text-text-muted text-xl leading-relaxed mb-10">
              {siteContent.hero.subtext}
            </p>

            {/* CTA Row */}
            <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#book"
                onClick={handleBookClick}
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {siteContent.hero.ctaPrimary}
              </a>
              <a
                href="tel:+85212345678"
                className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {siteContent.hero.ctaSecondary}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 text-sm text-text-muted">
              {siteContent.hero.stats.map((stat, index) => (
                <span key={index}>{stat}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
