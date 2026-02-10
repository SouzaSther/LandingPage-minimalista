import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FinalCTA = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero acelerar meus resultados digitais.', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-6 block">
            Comece Agora
          </span>

          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para acelerar seus
            <span className="text-gradient block mt-1">resultados digitais?</span>
          </h2>

          <p className="scroll-hidden stagger-3 font-inter text-lg text-white/60 mb-12 leading-relaxed max-w-xl mx-auto">
            Não perca mais tempo. Transforme seu negócio hoje mesmo e comece a ver
            resultados reais em poucos dias.
          </p>

          <div className="scroll-hidden stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openWhatsApp}
              className="group bg-yellow-500 hover:bg-yellow-400 text-emerald-900 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
            >
              <MessageCircle size={22} />
              Quero Começar Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="scroll-hidden stagger-5 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/40 text-sm font-inter">
            {['Consulta Gratuita', 'Sem Compromisso', 'Resultado Rápido'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
