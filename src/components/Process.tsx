import React from 'react';
import { Search, Target, Rocket, BarChart3 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search size={40} />,
      title: 'Análise & Diagnóstico',
      description: 'Analisamos seu negócio, concorrência e oportunidades de mercado para criar a estratégia ideal.'
    },
    {
      icon: <Target size={40} />,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos um plano de ação customizado com objetivos claros e métricas definidas.'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Execução & Implementação',
      description: 'Colocamos a estratégia em prática com nossa equipe especializada e ferramentas avançadas.'
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Monitoramento & Otimização',
      description: 'Acompanhamos os resultados e otimizamos continuamente para maximizar o desempenho.'
    }
  ];

  return (
    <section className="py-20 bg-emerald-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-white mb-8">
            Como Trabalhamos
          </h2>
          <p className="font-inter text-lg text-white/90 max-w-2xl mx-auto">
            Nosso processo comprovado em 4 etapas para garantir o sucesso do seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white/10 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-yellow-500 transition-colors duration-300 group">
                <div className="text-white group-hover:text-emerald-800">
                  {step.icon}
                </div>
              </div>
              
              <div className="absolute -top-2 -left-2 bg-yellow-500 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="font-manrope text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="font-inter text-white/80 leading-relaxed">
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