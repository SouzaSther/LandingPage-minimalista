import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Portfolio = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  const projects = [
    {
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'E-commerce Fashion',
      category: 'Desenvolvimento Web',
      description: 'Aumento de 300% nas conversões'
    },
    {
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Startup FinTech',
      category: 'Marketing Digital',
      description: 'Crescimento de 250% em leads'
    },
    {
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Restaurante Premium',
      category: 'Redes Sociais',
      description: '500% de aumento no engajamento'
    },
    {
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Clínica Médica',
      category: 'SEO & Google Ads',
      description: 'Primeira página do Google'
    },
    {
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Tech Company',
      category: 'Identidade Visual',
      description: 'Rebranding completo'
    },
    {
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Escola Online',
      category: 'Conteúdo Digital',
      description: '1M+ de visualizações'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-4 block">
            Portfólio
          </span>
          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Projetos que transformam
          </h2>
          <p className="scroll-hidden stagger-3 font-inter text-lg text-gray-500 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`scroll-hidden stagger-${(index % 3) + 1} bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-1 group`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white font-inter text-sm">
                    <ExternalLink size={16} />
                    Ver Projeto
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block font-inter text-xs font-semibold tracking-wider uppercase text-yellow-600 mb-2">
                  {project.category}
                </span>
                <h3 className="font-manrope text-lg font-bold text-emerald-800 mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-500 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
