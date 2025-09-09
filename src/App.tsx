import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Professional from './components/Professional';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Professional />
      <FAQ />
      <FinalCTA />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;