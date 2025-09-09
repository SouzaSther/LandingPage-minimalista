import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'E-commerce Fashion',
      category: 'Desenvolvimento Web',
      description: 'Aumento de 300% nas conversões'
    },
    {
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Startup FinTech',
      category: 'Marketing Digital',
      description: 'Crescimento de 250% em leads'
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Restaurante Premium',
      category: 'Redes Sociais',
      description: '500% de aumento no engajamento'
    },
    {
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Clínica Médica',
      category: 'SEO & Google Ads',
      description: 'Primeira página do Google'
    },
    {
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Tech Company',
      category: 'Identidade Visual',
      description: 'Rebranding completo'
    },
    {
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Escola Online',
      category: 'Conteúdo Digital',
      description: '1M+ de visualizações'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
            Nosso Portfólio
          </h2>
          <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-yellow-600 text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="font-manrope text-xl font-semibold text-emerald-800 mb-3">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-600">
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