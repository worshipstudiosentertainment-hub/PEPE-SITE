import React from 'react';
import Reveal from '../UI/Reveal';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image - Absolute Position Z-0 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/Vymc6Dg/Change-the-human-202511291529.jpg" 
          alt="José Alberto Pérez Franco Hero" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply grayscale-[30%] contrast-125" 
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light/70 via-brand-light/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light/90 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 w-full relative z-10 grid grid-cols-1 h-full items-center">
        <Reveal className="flex flex-col items-center justify-center text-center w-full">
          
          <div className="flex flex-col w-full max-w-5xl mx-auto">
            {/* Top Label */}
            <div className="flex justify-center md:justify-start w-full mb-8 md:mb-12 md:pl-20">
               <span className="text-brand-emerald text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold font-sans border-b border-brand-gold pb-2">
                Terapia & Conciencia
              </span>
            </div>

            {/* Typography: Flex Column with Self-Alignment to prevent overlap */}
            <h1 className="flex flex-col w-full gap-2 md:gap-4 lg:gap-6">
              {/* Word 1: Left Aligned */}
              <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] md:leading-[0.8] font-display font-black text-brand-dark tracking-tighter uppercase self-center md:self-start md:pl-10 mix-blend-darken transition-all duration-300">
                Transformar
              </span>
              
              {/* Word 2: Center with Separators */}
              <div className="flex items-center justify-center gap-4 md:gap-12 my-1 md:my-2 self-center w-full">
                <span className="h-[1px] w-8 md:w-24 bg-brand-dark/30 block"></span>
                <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif italic text-gray-700 tracking-wide leading-none whitespace-nowrap">
                  tu mirada
                </span>
                <span className="h-[1px] w-8 md:w-24 bg-brand-dark/30 block"></span>
              </div>
              
              {/* Word 3: Right Aligned */}
              <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] md:leading-[0.8] font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-dark to-gray-800 tracking-tighter uppercase self-center md:self-end md:pr-10 mix-blend-multiply transition-all duration-300">
                Interior.
              </span>
            </h1>
          </div>
          
          <div className="mt-12 md:mt-20 flex flex-col items-center gap-8 md:gap-10 w-full max-w-4xl mx-auto">
             <p className="text-sm sm:text-base md:text-lg text-brand-dark/80 font-sans font-medium max-w-xl md:max-w-2xl leading-relaxed tracking-wide text-center px-4">
              Acompañamiento profesional de vanguardia para descifrar el sentido profundo de lo que vives y reconectar con tu bienestar integral.
            </p>
            
            <a href="#decodificador" className="relative bg-brand-dark text-white overflow-hidden transition-all duration-300 z-10 shadow-[0_10px_30px_-5px_rgba(0,255,157,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,157,0.6)] hover:text-brand-neon px-8 md:px-10 py-4 md:py-5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans flex items-center gap-3 md:gap-4 group">
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
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 text-brand-dark/50 mix-blend-multiply z-10">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-sans mb-1 md:mb-2">Scroll</span>
        <div className="h-8 md:h-12 w-[1px] bg-brand-dark/20 overflow-hidden">
             <div className="h-full w-full bg-brand-dark animate-pulse-slow"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;