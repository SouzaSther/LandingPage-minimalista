import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  const faqs = [
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Os primeiros resultados podem ser vistos em 30-60 dias, dependendo da estratégia. Resultados mais significativos geralmente aparecem entre 3-6 meses de trabalho consistente.'
    },
    {
      question: 'Vocês trabalham com que tipo de empresa?',
      answer: 'Trabalhamos com empresas de todos os portes, desde pequenos negócios locais até grandes corporações. Nosso foco é adaptar as estratégias às necessidades específicas de cada cliente.'
    },
    {
      question: 'Como funciona o processo de contratação?',
      answer: 'Primeiro, fazemos uma consulta gratuita para entender suas necessidades. Depois, apresentamos uma proposta personalizada. Após aprovação, iniciamos com análise completa e desenvolvimento da estratégia.'
    },
    {
      question: 'Quais métricas vocês acompanham?',
      answer: 'Acompanhamos diversas métricas como ROI, CPC, conversões, tráfego orgânico, engajamento, leads gerados e vendas. Fornecemos relatórios detalhados mensalmente.'
    },
    {
      question: 'Oferecem garantia de resultados?',
      answer: 'Garantimos dedicação total e estratégias comprovadas. Embora não possamos garantir resultados específicos devido a variáveis de mercado, temos histórico de 98% de sucesso com nossos clientes.'
    },
    {
      question: 'Como é feita a comunicação durante o projeto?',
      answer: 'Mantemos comunicação constante via WhatsApp, email e reuniões mensais. Você terá acesso a um gerente dedicado e relatórios em tempo real através de nossa plataforma.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-4 block">
              FAQ
            </span>
            <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="scroll-hidden stagger-3 font-inter text-lg text-gray-500">
              Tire suas dúvidas sobre nossos serviços e processo de trabalho
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`scroll-hidden stagger-${Math.min(index + 1, 6)} bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-lg shadow-emerald-900/5' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-manrope text-base font-bold text-emerald-800">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-yellow-500 rotate-180' : ''
                  }`}>
                    <ChevronDown
                      className={`transition-colors ${openIndex === index ? 'text-white' : 'text-emerald-800'}`}
                      size={16}
                    />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="font-inter text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
