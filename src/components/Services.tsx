import React from 'react';
import { Search, Share2, PenTool, BarChart3, Globe, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: 'SEO & Google Ads',
      description: 'Otimização para mecanismos de busca e campanhas pagas para aumentar sua visibilidade online.'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Redes Sociais',
      description: 'Gestão completa das suas redes sociais com conteúdo estratégico e engajamento.'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Design & Identidade',
      description: 'Criação de identidade visual marcante e materiais gráficos profissionais.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics & Relatórios',
      description: 'Análise detalhada de dados e relatórios para otimizar suas estratégias.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Desenvolvimento Web',
      description: 'Sites responsivos e otimizados para conversão e experiência do usuário.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Marketing de Conteúdo',
      description: 'Estratégias de conteúdo que educam, engajam e convertem seus prospects.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
            Nossos Serviços
          </h2>
          <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
            Oferecemos soluções completas em marketing digital para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-emerald-800 mb-4 group-hover:text-yellow-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-manrope text-xl font-semibold text-emerald-800 mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
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