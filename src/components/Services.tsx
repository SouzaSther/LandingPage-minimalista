import React from 'react';
import { Search, Share2, PenTool, BarChart3, Globe, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  const services = [
    {
      icon: <Search size={24} />,
      title: 'SEO & Google Ads',
      description: 'Otimização para mecanismos de busca e campanhas pagas para aumentar sua visibilidade online.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Redes Sociais',
      description: 'Gestão completa das suas redes sociais com conteúdo estratégico e engajamento.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Design & Identidade',
      description: 'Criação de identidade visual marcante e materiais gráficos profissionais.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analytics & Relatórios',
      description: 'Análise detalhada de dados e relatórios para otimizar suas estratégias.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Desenvolvimento Web',
      description: 'Sites responsivos e otimizados para conversão e experiência do usuário.'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Marketing de Conteúdo',
      description: 'Estratégias de conteúdo que educam, engajam e convertem seus prospects.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Soluções que geram resultados
          </h2>
          <p className="scroll-hidden stagger-3 font-inter text-lg text-gray-500 max-w-2xl mx-auto">
            Oferecemos soluções completas em marketing digital para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-hidden stagger-${(index % 3) + 1} group relative bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-800 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-emerald-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <h3 className="font-manrope text-lg font-bold text-emerald-800 mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
