import React from "react";
import { Award, Users, Briefcase } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Professional = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      className="py-20 md:py-24 bg-emerald-900 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="scroll-hidden-left text-center lg:text-left order-2 lg:order-1">
              <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4 block">
                Responsável Técnico
              </span>

              <h2 className="font-manrope text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                Conheça quem lidera sua
                <span className="block mt-1 text-yellow-400 drop-shadow-md">
                  estratégia digital
                </span>
              </h2>

              <div className="mb-6">
                <h3 className="font-manrope text-2xl font-bold text-white mb-1">
                  Carlos Eduardo Silva
                </h3>
                <p className="font-inter text-white/50 text-sm md:text-base">
                  Especialista em Marketing Digital & Growth
                </p>
              </div>

              <p className="font-inter text-white/60 mb-8 md:mb-10 leading-relaxed text-sm">
                Com mais de 8 anos de experiência no mercado digital, Carlos é
                especialista em estratégias de crescimento e otimização de
                conversões. Formado em Marketing Digital e certificado Google
                Ads e Facebook Ads, já ajudou mais de 200 empresas a alcançarem
                seus objetivos online.
              </p>

              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
                    value: "Certificado",
                    label: "Google & Meta",
                  },
                  {
                    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
                    value: "200+",
                    label: "Clientes",
                  },
                  {
                    icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
                    value: "8 Anos",
                    label: "Exp.",
                  },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-yellow-400 mb-2 flex justify-center lg:justify-start">
                      {stat.icon}
                    </div>
                    <div className="text-white font-manrope font-bold text-xs md:text-sm whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-[10px] md:text-xs font-inter">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-hidden-right flex justify-center order-1 lg:order-2">
              <div className="relative inline-block">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500 transform-gpu [backface-visibility:hidden] outline outline-1 outline-transparent">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Carlos Eduardo Silva"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-yellow-500 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="text-emerald-900 w-5 h-5 md:w-6 md:h-6" />
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
