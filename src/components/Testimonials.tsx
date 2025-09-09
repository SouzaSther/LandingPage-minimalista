import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO, Fashion Store',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Trabalhar com esta equipe foi transformador para nosso negócio. Aumentamos nossas vendas em 400% em apenas 6 meses!',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Diretor, Tech Solutions',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Profissionalismo exemplar e resultados que superam expectativas. Nossa presença digital nunca esteve tão forte.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Proprietária, Restaurante',
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'A estratégia de redes sociais desenvolvida trouxe um fluxo constante de novos clientes. Estamos muito satisfeitos!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
            Depoimentos reais de quem já transformou seu negócio conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="text-yellow-500 mb-4" size={32} />
              
              <p className="font-inter text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-manrope font-semibold text-emerald-800">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-gray-600 text-sm">
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