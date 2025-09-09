import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

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
        {/* Notification Bubble */}
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle size={32} />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;