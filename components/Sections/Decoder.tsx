import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, BrainCircuit, RefreshCw } from 'lucide-react';
import { analyzeSymptom } from '../../services/geminiService';
import Reveal from '../UI/Reveal';

const Decoder: React.FC = () => {
  const [symptom, setSymptom] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAnalyze = async () => {
    if (!symptom || symptom.length < 3) {
        setError(true);
        setTimeout(() => setError(false), 1000);
        inputRef.current?.focus();
        return;
    }
    
    setLoading(true);
    setShowResult(false);
    setError(false);

    const startTime = Date.now();
    const result = await analyzeSymptom(symptom);
    const elapsedTime = Date.now() - startTime;
    const minDelay = 1500;
    
    if (elapsedTime < minDelay) {
        await new Promise(resolve => setTimeout(resolve, minDelay - elapsedTime));
    }
    
    setInsight(result);
    setLoading(false);
    setShowResult(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAnalyze();
  };

  const reset = () => {
    setSymptom('');
    setShowResult(false);
    setInsight('');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const whatsappLink = `https://wa.me/523331155895?text=Hola%20Pepe,%20el%20decodificador%20me%20dijo:%20${encodeURIComponent(insight)}%20Quiero%20profundizar%20en%20mi%20s%C3%ADntoma:%20${encodeURIComponent(symptom)}`;

  return (
    <section id="decodificador" className="py-24 md:py-32 relative z-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal className="w-full">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] group/card hover:shadow-[0_30px_80px_-15px_rgba(0,255,157,0.1)] transition-all duration-700">
            
            {/* Header with Indented Typography */}
            <div className="flex flex-col items-center text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-dark/5 bg-white/40 text-[9px] font-bold uppercase tracking-[0.25em] font-sans mb-8 text-gray-600 backdrop-blur-sm">
                    <BrainCircuit size={12} className="text-brand-neon" />
                    <span>Inteligencia Biológica</span>
                </div>
                
                <h3 className="flex flex-col items-center justify-center gap-2">
                    <span className="text-xl md:text-3xl font-display font-black text-brand-dark tracking-tighter uppercase transform -translate-x-4 md:-translate-x-8">
                        Decodificador
                    </span>
                    <span className="font-serif italic font-light text-lg md:text-2xl text-brand-emerald/60 transform translate-x-4 md:translate-x-8">
                        ai
                    </span>
                </h3>
                
                <p className="mt-8 text-gray-600 font-sans font-light text-sm md:text-base max-w-md leading-relaxed">
                    El cuerpo manifiesta lo que la consciencia ignora. <br className="hidden md:block"/> Escribe tu síntoma para revelar su sentido biológico.
                </p>
            </div>

            {/* Input Section */}
            <div className={`relative w-full max-w-xl mx-auto transition-transform duration-300 ${error ? 'translate-x-[-10px]' : ''}`}>
                <div className={`relative overflow-hidden rounded-full bg-white shadow-lg transition-all duration-500 border-2 ${loading ? 'border-brand-neon shadow-[0_0_30px_rgba(0,255,157,0.2)]' : 'border-transparent hover:border-brand-dark/10 focus-within:border-brand-dark focus-within:shadow-xl'}`}>
                    
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ej: Migraña, Ansiedad, Gastritis..." 
                        className="w-full bg-transparent px-8 py-4 md:py-5 text-lg md:text-xl text-brand-dark placeholder-gray-300 focus:outline-none text-center font-display font-bold tracking-tight"
                        disabled={loading}
                    />

                    {/* Action Button */}
                    <div className="absolute right-2 top-2 bottom-2">
                         {showResult ? (
                             <button 
                                onClick={reset}
                                className="h-full aspect-square rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                title="Nueva consulta"
                             >
                                 <RefreshCw size={16} />
                             </button>
                         ) : (
                            <button 
                                onClick={handleAnalyze}
                                disabled={loading}
                                className={`h-full px-6 md:px-8 rounded-full bg-brand-dark text-white text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-all duration-300 ${loading ? 'opacity-80 cursor-wait' : 'hover:bg-brand-emerald hover:scale-105'}`}
                            >
                                <span className="hidden md:inline">{loading ? 'Procesando' : 'Analizar'}</span>
                                <span className="md:hidden">{loading ? '...' : <ArrowRight size={14} />}</span>
                            </button>
                         )}
                    </div>

                    {/* Progress Bar */}
                    {loading && (
                        <div className="absolute bottom-0 left-0 h-[3px] bg-brand-neon w-full animate-shine" />
                    )}
                </div>
                {error && (
                    <p className="absolute -bottom-8 left-0 w-full text-center text-red-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                        Ingresa un síntoma válido
                    </p>
                )}
            </div>

            {/* Result Section */}
            {showResult && (
                <div className="mt-12 w-full max-w-2xl mx-auto animate-[fadeIn_0.8s_ease-out_forwards]">
                    <div className="relative bg-white/80 backdrop-blur-md rounded-[2rem] p-8 border border-brand-gold/20 shadow-xl text-center overflow-hidden">
                        <div className="absolute top-4 left-6 text-5xl font-serif text-brand-gold/10 leading-none">“</div>
                        
                        <div className="relative z-10">
                            <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                <Sparkles size={14} />
                            </div>
                            <p className="text-lg md:text-xl text-brand-emerald font-serif italic leading-relaxed">
                                {insight}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-brand-neon text-[9px] font-bold uppercase tracking-[0.2em] border border-brand-neon hover:bg-brand-neon hover:text-black hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <span>Profundizar en Sesión</span>
                            <ArrowRight size={12} />
                        </a>
                    </div>
                </div>
            )}
            
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Decoder;