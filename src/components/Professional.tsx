import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Professional = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="py-24 bg-emerald-900 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-hidden-left text-center lg:text-left">
              <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4 block">
                Responsável Técnico
              </span>

              <h2 className="font-manrope text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Conheça quem lidera sua
                <span className="text-gradient block mt-1">estratégia digital</span>
              </h2>

              <div className="mb-6">
                <h3 className="font-manrope text-2xl font-bold text-white mb-1">
                  Carlos Eduardo Silva
                </h3>
                <p className="font-inter text-white/50">
                  Especialista em Marketing Digital & Growth
                </p>
              </div>

              <p className="font-inter text-white/60 mb-10 leading-relaxed text-sm">
                Com mais de 8 anos de experiência no mercado digital, Carlos é especialista
                em estratégias de crescimento e otimização de conversões. Formado em Marketing
                Digital e certificado Google Ads e Facebook Ads, já ajudou mais de 200 empresas
                a alcançarem seus objetivos online.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: <Award size={22} />, value: 'Certificado', label: 'Google & Meta' },
                  { icon: <Users size={22} />, value: '200+', label: 'Clientes Atendidos' },
                  { icon: <Briefcase size={22} />, value: '8 Anos', label: 'Experiência' },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-yellow-400 mb-2">{stat.icon}</div>
                    <div className="text-white font-manrope font-bold text-sm">{stat.value}</div>
                    <div className="text-white/40 text-xs font-inter">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-hidden-right text-center">
              <div className="relative inline-block">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Carlos Eduardo Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="text-emerald-900" size={22} />
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
