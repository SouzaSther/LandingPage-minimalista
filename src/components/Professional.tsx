import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

const Professional = () => {
  return (
    <section className="py-20 bg-emerald-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-manrope text-4xl md:text-5xl font-bold text-white mb-8">
                Responsável Técnico
              </h2>
              
              <div className="mb-6">
                <h3 className="font-manrope text-2xl font-semibold text-yellow-400 mb-2">
                  Carlos Eduardo Silva
                </h3>
                <p className="font-inter text-white/90 text-lg">
                  Especialista em Marketing Digital & Growth
                </p>
              </div>

              <p className="font-inter text-white/80 mb-8 leading-relaxed">
                Com mais de 8 anos de experiência no mercado digital, Carlos é especialista 
                em estratégias de crescimento e otimização de conversões. Formado em Marketing 
                Digital e certificado Google Ads e Facebook Ads, já ajudou mais de 200 empresas 
                a alcançarem seus objetivos online.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <Award className="text-yellow-400 mx-auto mb-2" size={32} />
                  <div className="text-white font-semibold">Certificado</div>
                  <div className="text-white/70 text-sm">Google & Meta</div>
                </div>
                <div className="text-center">
                  <Users className="text-yellow-400 mx-auto mb-2" size={32} />
                  <div className="text-white font-semibold">200+</div>
                  <div className="text-white/70 text-sm">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <Briefcase className="text-yellow-400 mx-auto mb-2" size={32} />
                  <div className="text-white font-semibold">8 Anos</div>
                  <div className="text-white/70 text-sm">Experiência</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Carlos Eduardo Silva"
                  className="w-80 h-80 rounded-full object-cover mx-auto shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center">
                  <Award className="text-emerald-800" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;