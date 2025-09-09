import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
            Quem Somos
          </h2>
          
          <p className="font-inter text-lg text-gray-700 mb-12 leading-relaxed">
            Somos uma agência especializada em transformar negócios através do marketing digital. 
            Com mais de 5 anos de experiência, desenvolvemos estratégias personalizadas que geram 
            resultados reais para nossos clientes, desde pequenas empresas até grandes corporações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="font-manrope text-xl font-semibold text-emerald-800 mb-3">
                Foco em Resultados
              </h3>
              <p className="font-inter text-gray-600">
                Cada estratégia é desenvolvida com métricas claras e objetivos mensuráveis para garantir o ROI.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-manrope text-xl font-semibold text-emerald-800 mb-3">
                Equipe Especializada
              </h3>
              <p className="font-inter text-gray-600">
                Profissionais certificados em cada área do marketing digital para entregar excelência.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-manrope text-xl font-semibold text-emerald-800 mb-3">
                Qualidade Comprovada
              </h3>
              <p className="font-inter text-gray-600">
                Mais de 500 projetos entregues com 98% de aprovação dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;