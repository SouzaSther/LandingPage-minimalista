import React from 'react';
import { MessageCircle, ArrowDown, ArrowRight } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
      {/* Background image with better visibility */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-15"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-transparent to-emerald-950/70"></div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }}></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-inter text-sm text-white/80 tracking-wide uppercase">Agência de Marketing Digital</span>
          </div>

          <h1 className="font-manrope text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Transforme Seu
            <span className="text-gradient block mt-2">Negócio Digital</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Soluções completas em marketing digital para acelerar seus resultados e aumentar suas vendas online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={openWhatsApp}
              className="group bg-yellow-500 hover:bg-yellow-400 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToNext}
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Conhecer Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Projetos Entregues' },
              { value: '98%', label: 'Clientes Satisfeitos' },
              { value: '5+', label: 'Anos de Experiência' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-extrabold font-manrope text-white mb-1 group-hover:text-yellow-400 transition-colors">{stat.value}</div>
                <div className="text-sm font-inter text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
