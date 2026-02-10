import React from 'react';
import { Search, Target, Rocket, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Process = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  const steps = [
    {
      icon: <Search size={28} />,
      title: 'Análise & Diagnóstico',
      description: 'Analisamos seu negócio, concorrência e oportunidades de mercado para criar a estratégia ideal.'
    },
    {
      icon: <Target size={28} />,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos um plano de ação customizado com objetivos claros e métricas definidas.'
    },
    {
      icon: <Rocket size={28} />,
      title: 'Execução & Implementação',
      description: 'Colocamos a estratégia em prática com nossa equipe especializada e ferramentas avançadas.'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Monitoramento & Otimização',
      description: 'Acompanhamos os resultados e otimizamos continuamente para maximizar o desempenho.'
    }
  ];

  return (
    <section className="py-24 bg-emerald-900 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4 block">
            Nosso Processo
          </span>
          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-white mb-6">
            Como Trabalhamos
          </h2>
          <p className="scroll-hidden stagger-3 font-inter text-lg text-white/60 max-w-2xl mx-auto">
            Nosso processo comprovado em 4 etapas para garantir o sucesso do seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`scroll-hidden stagger-${index + 1} text-center relative group`}>
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              )}

              <div className="relative inline-block mb-6">
                <div className="bg-white/10 backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-yellow-500 transition-all duration-300">
                  <div className="text-white group-hover:text-emerald-900 transition-colors">
                    {step.icon}
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 w-8 h-8 rounded-full flex items-center justify-center font-manrope font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-manrope text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
