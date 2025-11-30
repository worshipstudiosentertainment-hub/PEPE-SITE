import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Decoder from './components/Sections/Decoder';
import About from './components/Sections/About';
import Methodology from './components/Sections/Methodology';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';
import Newsletter from './components/Sections/Newsletter';
import Footer from './components/Layout/Footer';
import Background3D from './components/UI/Background3D';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-brand-dark">
      <Background3D />
      
      {/* Noise Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Decoder />
        <About />
        <Methodology />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default App;