import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero acelerar meus resultados digitais.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto para Acelerar Seus 
            <span className="text-yellow-400 block">Resultados Digitais?</span>
          </h2>
          
          <p className="font-inter text-xl text-white/90 mb-12 leading-relaxed">
            Não perca mais tempo. Transforme seu negócio hoje mesmo e comece a ver 
            resultados reais em poucos dias. Nossa equipe está pronta para ajudar você!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openWhatsApp}
              className="bg-yellow-500 hover:bg-yellow-600 text-emerald-900 px-8 py-4 rounded-full font-bold text-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <MessageCircle size={28} />
              Quero Começar Agora
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Consulta Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Resultado Rápido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;