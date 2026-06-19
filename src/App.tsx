import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DoctorsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
