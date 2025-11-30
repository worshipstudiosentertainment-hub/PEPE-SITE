import React, { useState } from 'react';
import Reveal from '../UI/Reveal';
import { ArrowRight, Check, Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 md:py-24 bg-brand-light relative border-t border-black/5 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <Reveal>
            <div className="flex flex-col items-center text-center">
                 <div className="mb-8 md:mb-10 flex flex-col items-center gap-2 md:gap-3">
                    <span className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold font-sans flex items-center gap-2 opacity-70">
                        <Mail size={12} /> Comunidad
                    </span>
                    <h2 className="flex flex-col text-2xl sm:text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tighter uppercase leading-[0.9] md:leading-[0.8] gap-2 md:gap-3 mt-4">
                        <span className="transform -translate-x-4 md:-translate-x-12 opacity-90 self-start md:self-center">Dosis de</span>
                        <span className="font-serif italic font-normal text-gray-400 transform translate-x-4 md:translate-x-12 self-end md:self-center">Consciencia</span>
                    </h2>
                 </div>
                 
                 <p className="text-gray-500 font-sans font-light text-sm md:text-base max-w-xs md:max-w-sm leading-relaxed mb-8 md:mb-10 mx-auto px-4">
                    Únete y recibe actualizaciones exclusivas sobre talleres, retiros y reflexiones semanales para tu proceso.
                 </p>

                 <form onSubmit={handleSubmit} className="w-full max-w-xs md:max-w-sm mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-emerald/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative overflow-hidden rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-brand-dark/5 flex items-center p-1 focus-within:border-brand-gold/50 transition-colors">
                        <input 
                            type="email" 
                            placeholder="tucorreo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'success' || status === 'loading'}
                            className="flex-1 bg-transparent px-4 md:px-6 py-2.5 md:py-3 text-brand-dark placeholder-gray-300 focus:outline-none font-sans text-sm tracking-wide disabled:opacity-50"
                            required
                        />
                        <button 
                            type="submit"
                            disabled={status === 'success' || status === 'loading'}
                            className={`
                                h-8 md:h-10 px-4 md:px-6 rounded-full flex items-center justify-center transition-all duration-500
                                ${status === 'success' 
                                    ? 'bg-brand-emerald text-white w-8 md:w-10 px-0' 
                                    : 'bg-brand-dark text-white hover:bg-brand-gold w-10 md:w-12 hover:w-12 md:hover:w-16'
                                }
                                disabled:opacity-80
                            `}
                        >
                            {status === 'loading' ? (
                                <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : status === 'success' ? (
                                <Check size={14} className="md:w-4 md:h-4" />
                            ) : (
                                <ArrowRight size={14} className="md:w-4 md:h-4" />
                            )}
                        </button>
                    </div>
                    {status === 'success' && (
                        <p className="absolute -bottom-6 md:-bottom-8 left-0 w-full text-center text-brand-emerald text-[8px] md:text-[9px] font-bold uppercase tracking-widest animate-[fadeIn_0.5s_ease-out]">
                            ¡Suscripción confirmada!
                        </p>
                    )}
                 </form>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Newsletter;