import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO, Fashion Store',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Trabalhar com esta equipe foi transformador para nosso negócio. Aumentamos nossas vendas em 400% em apenas 6 meses!',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Diretor, Tech Solutions',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Profissionalismo exemplar e resultados que superam expectativas. Nossa presença digital nunca esteve tão forte.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Proprietária, Restaurante',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'A estratégia de redes sociais desenvolvida trouxe um fluxo constante de novos clientes. Estamos muito satisfeitos!',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-4 block">
            Depoimentos
          </span>
          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            O que dizem nossos clientes
          </h2>
          <p className="scroll-hidden stagger-3 font-inter text-lg text-gray-500 max-w-2xl mx-auto">
            Depoimentos reais de quem já transformou seu negócio conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`scroll-hidden stagger-${index + 1} relative bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-5">
                <Quote className="text-yellow-500" size={18} />
              </div>

              <p className="font-inter text-gray-600 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4 gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={14} />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-100"
                />
                <div>
                  <h4 className="font-manrope font-bold text-emerald-800 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-gray-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
