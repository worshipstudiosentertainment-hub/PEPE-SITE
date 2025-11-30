import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-black/5 bg-brand-light text-center relative z-20">
      <p className="text-brand-dark font-display text-2xl mb-4 font-bold tracking-tight">José Alberto Pérez Franco</p>
      <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-sans">© 2025 Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;