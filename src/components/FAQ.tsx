import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
              Perguntas Frequentes
            </h2>
            <p className="font-inter text-lg text-gray-700">
              Tire suas dúvidas sobre nossos serviços e processo de trabalho
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-manrope text-lg font-semibold text-emerald-800 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-yellow-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-yellow-600 flex-shrink-0" size={24} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="font-inter text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;