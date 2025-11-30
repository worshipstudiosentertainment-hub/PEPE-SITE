import React from 'react';
import Reveal from '../UI/Reveal';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 relative overflow-hidden">
       {/* Typographic Decoration - Responsive Size */}
       <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 text-[12vw] md:text-[10rem] lg:text-[15rem] font-display font-black text-gray-100 opacity-40 -z-10 leading-none select-none pointer-events-none whitespace-nowrap">
         SOBRE
       </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-12 md:gap-24 items-center">
        <Reveal threshold={0.2} className="space-y-10 md:space-y-16 flex flex-col items-center text-center">
          <div className="flex flex-col gap-2 md:gap-4 items-center">
             <span className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold font-sans">
              El Facilitador
            </span>
            <h2 className="flex flex-col items-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-dark tracking-tighter leading-[0.9] gap-1 md:gap-2">
              <span className="transform -translate-x-6 md:-translate-x-12">Sobre</span>
              <span className="font-serif italic font-light transform translate-x-6 md:translate-x-12">Mí</span>
            </h2>
          </div>
          
          <div className="relative flex flex-col items-center gap-2 md:gap-4">
             <h3 className="flex flex-col items-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-brand-dark font-serif leading-tight">
               <span className="transform -translate-x-4 md:-translate-x-6">José Alberto</span>
               <span className="font-sans font-bold text-base sm:text-xl md:text-3xl tracking-[0.15em] md:tracking-[0.2em] uppercase text-brand-emerald transform translate-x-4 md:translate-x-6 mt-1 md:mt-2">Pérez Franco</span>
             </h3>
             <div className="h-[2px] w-20 md:w-32 bg-brand-gold mt-6 md:mt-10 mb-4 md:mb-8"></div>
          </div>

          <p className="text-gray-600 text-base md:text-xl leading-relaxed md:leading-loose font-sans font-light max-w-3xl px-2 md:px-6">
            Creo profundamente en la capacidad inherente que todos tenemos para sanar. Mi labor no es curarte, sino ofrecerte el espejo donde puedas ver el origen emocional de tus experiencias.
          </p>
          
          <div className="relative py-4 md:py-8 max-w-2xl px-4 md:px-6">
             <p className="text-brand-dark font-display font-medium text-lg md:text-3xl leading-snug">
              “Acompaño procesos de toma de conciencia desde la <span className="text-brand-emerald underline decoration-brand-gold/50 underline-offset-4">empatía radical</span>.”
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-2 md:pt-4">
            <div className="px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs text-gray-800 uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold font-sans bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 border border-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-shine transition-transform"></div>
              Enric Corbera Institute
            </div>
            <div className="px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs text-gray-800 uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold font-sans bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 border border-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-shine transition-transform"></div>
              Master Certificado
            </div>
          </div>

          {/* Image centered below text */}
          <div className="relative group max-w-[18rem] md:max-w-md w-full mt-8 md:mt-12 px-4 md:px-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold to-brand-emerald rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 z-10"></div>
            <div className="bg-white/60 backdrop-blur-md p-2 rounded-[2.5rem] md:rounded-[3rem] relative aspect-[4/5] overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-700 shadow-2xl z-20">
                <img 
                src="https://i.ibb.co/PGVLbLwB/Subject-disruptive-ultra-202511291228.jpg" 
                className="w-full h-full object-cover rounded-[2.2rem] md:rounded-[2.8rem] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out contrast-110" 
                alt="Consulta Pepe Pérez" 
                />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;