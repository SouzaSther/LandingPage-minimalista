import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços.', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-manrope text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme Seu
            <span className="text-yellow-400 block">Negócio Digital</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Soluções completas em marketing digital para acelerar seus resultados e aumentar suas vendas online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openWhatsApp}
              className="bg-yellow-500 hover:bg-yellow-600 text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </button>
            
            <button
              onClick={scrollToNext}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Conhecer Serviços
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-white/80">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-white/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;