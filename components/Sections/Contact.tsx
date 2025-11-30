import React from 'react';
import Reveal from '../UI/Reveal';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6">
        <Reveal>
          <div className="bg-brand-dark text-white p-6 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[3rem] border border-brand-gold/30 relative overflow-hidden shadow-2xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald to-black z-0 opacity-80"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="flex flex-col justify-between items-center text-center">
                 <div className="w-full">
                    <span className="inline-block py-1.5 px-4 md:py-2 md:px-6 rounded-full border border-brand-gold/50 text-brand-gold text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 bg-brand-gold/10">
                      Agenda 2025
                    </span>
                    <h2 className="flex flex-col items-center text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] md:leading-[0.8] gap-2 md:gap-4">
                      <span className="transform -translate-x-4 md:-translate-x-12">Tu Nueva</span>
                      <span className="font-serif italic font-thin text-brand-neon transform translate-x-4 md:translate-x-12">Realidad.</span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-400 font-light max-w-md mx-auto font-sans leading-relaxed mt-8 md:mt-12 px-4">
                      Si sientes que estás listo para mirar dentro, será un honor acompañarte en este viaje de autodescubrimiento.
                    </p>
                 </div>
                 
                 <div className="mt-10 md:mt-16">
                    <p className="text-brand-gold text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">Sígueme</p>
                    <div className="flex gap-6 md:gap-8 justify-center">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"><Instagram size={24} className="md:w-7 md:h-7" /></a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"><Facebook size={24} className="md:w-7 md:h-7" /></a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"><Linkedin size={24} className="md:w-7 md:h-7" /></a>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col justify-center space-y-8 md:space-y-12 bg-white/5 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 backdrop-blur-sm w-full">
                  {/* Whatsapp Option */}
                  <div className="text-center">
                       <a 
                        href="https://wa.me/523331155895" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-brand-neon text-black border border-brand-neon hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] px-6 md:px-10 py-5 md:py-8 rounded-full flex items-center justify-center gap-3 md:gap-4 text-base md:text-xl font-bold tracking-[0.1em] w-full group uppercase font-display"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.916-.446-.445 0-.965.174-1.46.719-1.22 1.341-1.01 2.454 1.393 5.471 2.923 3.669 4.887 4.542 7.039 4.316 1.054-.111 2.378-1.156 2.668-2.19.227-.806.131-1.498-.063-1.815-.197-.322-.533-.483-.996-.709z"/></svg>
                        <span>WhatsApp Directo</span>
                    </a>
                      <p className="text-gray-500 text-[9px] md:text-[10px] mt-4 md:mt-6 font-sans uppercase tracking-[0.2em] md:tracking-[0.3em]">Respuesta inmediata</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/20">
                     <div className="h-[1px] w-full bg-white/20"></div>
                     <span className="uppercase text-[9px] md:text-[10px] tracking-widest">O</span>
                     <div className="h-[1px] w-full bg-white/20"></div>
                  </div>

                  {/* Form Option */}
                  <form className="w-full space-y-4" action="https://formsubmit.co/asesoria@pepeperez.mx" method="POST">
                        <input type="text" name="name" placeholder="NOMBRE" required className="w-full bg-transparent border-b border-white/20 px-4 py-3 md:py-4 text-sm md:text-lg text-white placeholder-white/30 focus:border-brand-neon outline-none transition-colors font-display uppercase tracking-widest text-center" />
                        <input type="email" name="email" placeholder="EMAIL" required className="w-full bg-transparent border-b border-white/20 px-4 py-3 md:py-4 text-sm md:text-lg text-white placeholder-white/30 focus:border-brand-neon outline-none transition-colors font-display uppercase tracking-widest text-center" />
                        <input type="hidden" name="_next" value="https://bioneuro-pepe.netlify.app/" />
                        <input type="hidden" name="_captcha" value="false" />
                        <button type="submit" className="w-full py-4 md:py-5 mt-4 bg-white/5 hover:bg-white text-white hover:text-black rounded-lg font-bold transition-all font-sans tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs border border-white/10 uppercase">
                            Enviar Mensaje
                        </button>
                  </form>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;