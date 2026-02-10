import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  const features = [
    {
      icon: <Target className="text-white" size={28} />,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é desenvolvida com métricas claras e objetivos mensuráveis para garantir o ROI.',
    },
    {
      icon: <Users className="text-white" size={28} />,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados em cada área do marketing digital para entregar excelência.',
    },
    {
      icon: <Award className="text-white" size={28} />,
      title: 'Qualidade Comprovada',
      description: 'Mais de 500 projetos entregues com 98% de aprovação dos nossos clientes.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="scroll-hidden stagger-1">
            <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-4 block">
              Quem Somos
            </span>
          </div>

          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-6 leading-tight">
            Parceiros na sua jornada de
            <span className="text-yellow-600"> crescimento digital</span>
          </h2>

          <p className="scroll-hidden stagger-3 font-inter text-lg text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto">
            Somos uma agência especializada em transformar negócios através do marketing digital.
            Com mais de 5 anos de experiência, desenvolvemos estratégias personalizadas que geram
            resultados reais para nossos clientes, desde pequenas empresas até grandes corporações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`scroll-hidden stagger-${index + 4} text-center group`}>
                <div className="bg-emerald-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-emerald-800/20">
                  {feature.icon}
                </div>
                <h3 className="font-manrope text-lg font-bold text-emerald-800 mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
