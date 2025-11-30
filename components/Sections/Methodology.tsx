import React from 'react';
import Reveal from '../UI/Reveal';
import { MethodStep } from '../../types';

const steps: MethodStep[] = [
  {
    number: 1,
    title: "Escucha Consciente",
    description: "El punto de partida. Un espacio seguro en la penumbra para expresar lo que ha estado oculto."
  },
  {
    number: 2,
    title: "Comprensión Profunda",
    description: "El amanecer de la conciencia. Identificamos los patrones y su función biológica."
  },
  {
    number: 3,
    title: "Transformación Interior",
    description: "La luz plena. Cambias tu percepción, recuperas tu paz y decides desde la libertad."
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="relative min-h-[90vh] flex items-center">
      {/* Cinematic Gradient: Darkness (Top/Left) -> Light (Bottom/Right) */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#000000] via-[#1F1F1F] to-[#FFFFFF] z-0"></div>
      
      {/* Noise Texture for Film Grain effect */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10 w-full py-24 md:py-0">
        
        {/* Title Section - Located in the 'Dark' zone */}
        <div className="mb-20 md:mb-32 text-center md:text-left md:pl-12">
           <Reveal>
             <span className="block text-brand-gold text-[9px] uppercase tracking-[0.6em] font-bold font-sans mb-8 opacity-70 ml-12">
                La Ruta
              </span>
            <h2 className="flex flex-col text-5xl md:text-7xl lg:text-[6rem] font-display font-black tracking-tighter uppercase leading-[0.8] text-white gap-2">
              <span className="transform -translate-x-0 md:-translate-x-0 ml-0 md:ml-12">El</span>
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white/50 ml-12 md:ml-32">Proceso</span>
            </h2>
           </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => {
            // Determine text colors based on the phase 
            // Phase 1 (Dark): White text
            // Phase 2 (Transition): Gray/White text
            // Phase 3 (Light): Dark text
            const isDarkPhase = index === 0;
            const isMidPhase = index === 1;
            const isLightPhase = index === 2;

            return (
              <Reveal key={step.number} delay={index * 200} className="h-full">
                <div className={`
                    group relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 
                    border-l border-white/5 md:border-l-0 md:first:border-l-0
                    transition-all duration-1000
                    ${isDarkPhase ? 'md:border-r border-white/10 hover:bg-white/[0.03]' : ''}
                    ${isMidPhase ? 'md:border-r border-white/10 hover:bg-white/[0.05]' : ''}
                    ${isLightPhase ? 'hover:bg-black/[0.02]' : ''}
                `}>
                  
                  {/* Decorative number */}
                  <div className={`
                    absolute top-4 right-6 text-[4rem] md:text-[5rem] lg:text-[7rem] font-display font-bold leading-none select-none transition-all duration-700
                    ${isDarkPhase ? 'text-white/[0.05] group-hover:text-white/[0.1]' : ''}
                    ${isMidPhase ? 'text-white/[0.1] group-hover:text-white/[0.2]' : ''}
                    ${isLightPhase ? 'text-black/[0.05] group-hover:text-brand-dark/10' : ''}
                  `}>
                    0{step.number}
                  </div>

                  {/* Marker */}
                  <div className={`w-1.5 h-1.5 rounded-full mb-10 md:mb-16 ${isLightPhase ? 'bg-brand-dark' : 'bg-brand-gold'} shadow-[0_0_15px_currentColor]`}></div>

                  <div className="relative z-10">
                    <h3 className={`
                        text-2xl md:text-3xl font-display font-bold mb-6 transition-colors duration-500
                        ${isLightPhase ? 'text-brand-dark group-hover:text-brand-emerald' : 'text-white group-hover:text-brand-gold'}
                    `}>
                        {step.title}
                    </h3>
                    
                    <p className={`
                        font-sans font-light text-base md:text-lg leading-relaxed max-w-xs
                        ${isDarkPhase ? 'text-gray-400' : ''}
                        ${isMidPhase ? 'text-gray-300' : ''}
                        ${isLightPhase ? 'text-gray-600' : ''}
                    `}>
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom Glow for cinematic effect */}
                   <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isLightPhase ? 'hidden' : ''}`}></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;