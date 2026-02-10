import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Vim através do site e gostaria de mais informações.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Ripple */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>

        {/* Notification */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center z-10 ring-2 ring-white">
          1
        </div>

        {/* Button */}
        <button
          onClick={openWhatsApp}
          className="relative bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-110"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle size={26} />
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
