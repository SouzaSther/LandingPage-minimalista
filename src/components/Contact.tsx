import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, Send, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const sectionRef = useScrollReveal<HTMLElement>();

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
    <section id="contato" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="scroll-hidden stagger-1 font-inter text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-4 block">
            Contato
          </span>
          <h2 className="scroll-hidden stagger-2 font-manrope text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Vamos conversar?
          </h2>
          <p className="scroll-hidden stagger-3 font-inter text-lg text-gray-500 max-w-2xl mx-auto">
            Estamos prontos para transformar seu negócio. Fale conosco agora mesmo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="scroll-hidden-left bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-2xl">
            <h3 className="font-manrope text-xl font-bold text-emerald-800 mb-8">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-600 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-inter text-sm font-medium text-gray-600 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-600 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm resize-none outline-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3.5 px-6 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20"
              >
                <Send size={16} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="scroll-hidden-right space-y-6">
            <div>
              <h3 className="font-manrope text-xl font-bold text-emerald-800 mb-8">
                Fale Conosco Diretamente
              </h3>

              <div className="space-y-4">
                {[
                  { icon: <Phone size={18} />, title: 'Telefone', info: '(11) 99999-9999' },
                  { icon: <Mail size={18} />, title: 'Email', info: 'contato@digitalpro.com.br' },
                  { icon: <MapPin size={18} />, title: 'Localização', info: 'São Paulo, SP - Brasil' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div>
                      <p className="font-manrope font-bold text-emerald-800 text-sm">{item.title}</p>
                      <p className="font-inter text-gray-500 text-sm">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="font-manrope text-lg font-bold text-white mb-3">
                  Resposta Rápida no WhatsApp
                </h4>
                <p className="font-inter text-sm text-white/50 mb-6">
                  Tire suas dúvidas instantaneamente e receba uma proposta personalizada
                </p>
                <button
                  onClick={openWhatsApp}
                  className="group bg-yellow-500 hover:bg-yellow-400 text-emerald-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="font-inter text-gray-400 text-sm mb-4">Siga-nos nas redes</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://instagram.com/digitalpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/20"
                >
                  <Instagram className="text-white" size={18} />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="text-white" size={18} />
                </a>
                <a
                  href="mailto:contato@digitalpro.com.br"
                  className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"
                >
                  <Mail className="text-white" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              <span className="font-manrope text-emerald-800">Digital</span>
              <span className="text-yellow-500">Pro</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'Sobre', 'Serviços', 'Portfólio', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const id = item.toLowerCase()
                      .replace('í', 'i')
                      .replace('ç', 'c');
                    const el = document.getElementById(
                      id === 'servicos' ? 'servicos' : id === 'portfolio' ? 'portfolio' : id
                    );
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-inter text-sm text-gray-400 hover:text-emerald-800 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="font-inter text-sm text-gray-400">
              &copy; 2024 DigitalPro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
