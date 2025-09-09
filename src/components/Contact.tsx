import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Me chamo ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações.', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
            Entre em Contato
          </h2>
          <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
            Estamos prontos para transformar seu negócio. Fale conosco agora mesmo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-manrope text-2xl font-semibold text-emerald-800 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-inter text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-inter text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto e objetivos..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={20} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-manrope text-2xl font-semibold text-emerald-800 mb-6">
                Fale Conosco Diretamente
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-800 p-3 rounded-full">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Telefone</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-800 p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Email</p>
                    <p className="text-gray-600">contato@digitalpro.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-800 p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Localização</p>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800 p-8 rounded-2xl text-white text-center">
              <h4 className="font-manrope text-xl font-semibold mb-4">
                Resposta Rápida no WhatsApp
              </h4>
              <p className="mb-6 text-white/90">
                Tire suas dúvidas instantaneamente e receba uma proposta personalizada
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-yellow-500 hover:bg-yellow-600 text-emerald-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors"
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </button>
            </div>

            <div className="text-center">
              <p className="font-inter text-gray-700 mb-4">Siga-nos nas redes sociais</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/digitalpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <MessageCircle className="text-white" size={24} />
                </a>
                <a
                  href="mailto:contato@digitalpro.com.br"
                  className="bg-blue-500 p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Mail className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="font-inter text-gray-600">
            © 2024 DigitalPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;