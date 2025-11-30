import React from 'react';
import Reveal from '../UI/Reveal';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Adjusted opacity to allow 3D neurons to shine through */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/Vymc6Dg/Change-the-human-202511291529.jpg" 
          alt="José Alberto Pérez Franco Hero" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply grayscale-[30%] contrast-125" 
        />
        {/* Lighter gradients to expose the underlying 3D network */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light/70 via-brand-light/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light/90 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 w-full relative z-10 grid grid-cols-1 h-full items-center">
        <Reveal className="flex flex-col items-center justify-center pt-10 text-center">
          
          <div className="flex flex-col items-center w-full">
            <div className="flex items-end gap-6 mb-12">
               <span className="text-brand-emerald text-[9px] uppercase tracking-[0.4em] font-bold font-sans border-b border-brand-gold pb-2">
                Terapia & Conciencia
              </span>
            </div>

            {/* Typography: Centered but Indented for Dynamic Flow */}
            <h1 className="flex flex-col items-center w-full gap-4 md:gap-6">
              <span className="text-[3vw] md:text-[2rem] lg:text-[3rem] font-display font-black text-brand-dark tracking-tighter uppercase mix-blend-darken transform -translate-x-8 md:-translate-x-16">
                Transformar
              </span>
              
              <div className="flex items-center gap-8 md:gap-12 my-2">
                <span className="h-[1px] w-12 md:w-24 bg-brand-dark/30 hidden md:block"></span>
                <span className="text-[2.5vw] md:text-[1.5rem] lg:text-[2rem] font-serif italic text-gray-700 tracking-wide leading-none">
                  tu mirada
                </span>
                <span className="h-[1px] w-12 md:w-24 bg-brand-dark/30 hidden md:block"></span>
              </div>
              
              <span className="text-[3vw] md:text-[2rem] lg:text-[3rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-dark to-gray-800 tracking-tighter uppercase mix-blend-multiply transform translate-x-8 md:translate-x-16">
                Interior.
              </span>
            </h1>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-10 w-full max-w-4xl">
             <p className="text-base md:text-lg text-brand-dark/80 font-sans font-medium max-w-2xl leading-relaxed tracking-wide text-center px-4">
              Acompañamiento profesional de vanguardia para descifrar el sentido profundo de lo que vives y reconectar con tu bienestar integral.
            </p>
            
            <a href="#decodificador" className="relative bg-brand-dark text-white overflow-hidden transition-all duration-300 z-10 shadow-[0_10px_30px_-5px_rgba(0,255,157,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,157,0.6)] hover:text-brand-neon px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] font-sans flex items-center gap-4 group">
               {/* Atomic Border Effect */}
              <div className="absolute -inset-[100%] bg-[conic-gradient(transparent,transparent,#00FF9D,transparent)] animate-border-spin z-[-2]" />
              <div className="absolute inset-[2px] bg-brand-dark rounded-full z-[-1]" />
              
              <span>Comenzar Proceso</span>
              <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-brand-dark/50 mix-blend-multiply">
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans mb-2">Scroll</span>
        <div className="h-12 w-[1px] bg-brand-dark/20 overflow-hidden">
             <div className="h-full w-full bg-brand-dark animate-pulse-slow"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;