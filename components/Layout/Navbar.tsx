import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Metodología', href: '#metodologia' },
  ];

  const handleMobileClick = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-brand-light/80 backdrop-blur-xl border-b border-black/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          <div className="flex flex-col">
            <span className="block font-serif text-3xl text-brand-dark group-hover:text-brand-gold transition-colors leading-none tracking-tight">
              José Alberto
            </span>
            <span className="block font-sans text-[9px] tracking-[0.4em] font-bold text-gray-500 uppercase group-hover:text-brand-dark transition-colors text-right mt-1">
              Pérez Franco
            </span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-neon shadow-[0_0_10px_rgba(0,255,157,0.8)] animate-pulse mb-4"></div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[10px] font-bold text-gray-500 hover:text-brand-dark transition-colors uppercase tracking-[0.25em]"
            >
              {link.label}
            </a>
          ))}
          
          <a href="#decodificador" className="text-[10px] font-bold text-brand-emerald hover:text-brand-neon transition-colors uppercase tracking-[0.25em] flex items-center gap-2">
            <Sparkles size={12} /> Decodificador
          </a>

          <a href="#contacto" className="px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] font-sans bg-black text-white hover:bg-brand-neon hover:text-black transition-all duration-300 shadow-lg border border-transparent hover:border-black">
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-brand-light/98 backdrop-blur-3xl flex flex-col items-center justify-center space-y-12 md:hidden transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={handleMobileClick}
              className="text-5xl font-serif text-brand-dark hover:text-brand-gold transition-colors"
            >
              {link.label}
            </a>
        ))}
        <a href="#decodificador" onClick={handleMobileClick} className="text-5xl font-serif text-brand-emerald hover:text-brand-gold transition-colors">
          ✨ Decodificador
        </a>
        <a href="#contacto" onClick={handleMobileClick} className="px-12 py-5 bg-black text-white rounded-full text-lg font-bold font-sans tracking-widest uppercase">
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;