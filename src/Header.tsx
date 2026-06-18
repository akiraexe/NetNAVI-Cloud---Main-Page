import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO NNetNAVI - 32px alto, máx 1/5 viewport */}
        <div className="h-8 md:h-10 w-auto flex-shrink-0">
          {/*  Coloca: public/logo-nnetnavi.png (recomendado PNG 200x80px) */}
          <img 
            src="/logo-nnetnavi.webp"  // Antes: .png
            alt="NetNAVI - Soporte Técnico Inteligente"
            className="h-full w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-200"
            loading="eager"
          />
        </div>

        {/* Espacio para menú futuro */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-700 hover:text-primary font-medium transition-colors">
            Servicios
          </a>
          <a href="#contact" className="text-gray-700 hover:text-secondary font-medium transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
