import React from 'react';
import Reveal from '../UI/Reveal';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    name: "Ana María G.",
    text: "Llevaba años con ansiedad. Entender que era un mecanismo de defensa heredado cambió mi vida.",
    rating: 5
  },
  {
    name: "Carlos R.",
    text: "Pepe no te dice lo que quieres oír, te muestra lo que necesitas ver. Muy profesional.",
    rating: 5
  },
  {
    name: "Laura S.",
    text: "Mis conflictos de pareja eran un patrón. Romperlo fue liberador.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-brand-dark/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-brand-dark mb-16 text-center">Historias Reales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/60 transition-colors border border-white/50 shadow-sm">
                <div className="flex gap-1 mb-6 text-brand-gold text-sm">
                  {[...Array(t.rating)].map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 font-light italic mb-8 text-lg font-serif leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-brand-dark font-bold text-sm uppercase tracking-wide font-sans">
                    {t.name}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;