import React, { useEffect, useState } from 'react';

export default function Menu({ isOpen, onClose, activeTab, setActiveTab }) {
  const [bgPosition, setBgPosition] = useState('50% 50%');

  // Handle mousemove to create subtle parallax on refraction background
  useEffect(() => {
    if (!isOpen) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setBgPosition(`${50 + x}% ${50 + y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'dicas', label: 'Dicas' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'complementaryContent', label: 'Conteúdo Complementar' },
    { id: 'contatos', label: 'Contatos Úteis' }
  ];

  const handleItemClick = (id) => {
    setActiveTab(id);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col liquid-glass overflow-hidden animate-fade-in-up max-w-md mx-auto w-full"
      style={{ backgroundPosition: bgPosition }}
    >
      {/* Top App Bar within Overlay */}
      <header className="w-full h-16 flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary uppercase tracking-widest">
            Luxe Lab
          </span>
        </div>
        <button 
          onClick={onClose}
          className="close-button-ring w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary">close</span>
        </button>
      </header>

      {/* Main Navigation Links */}
      <nav className="flex-grow flex flex-col justify-center items-center px-4 text-center">
        <ul className="space-y-6">
          {menuItems.map((item, index) => {
            const isActive = activeTab === item.id;
            return (
              <li 
                key={item.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`nav-item-hover text-2xl cursor-pointer inline-block transition-all duration-300 ${
                    isActive 
                      ? 'text-primary font-bold' 
                      : 'text-on-surface-variant font-medium'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Integrated into Menu */}
      <footer className="w-full py-12 px-4 flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="h-px w-16 bg-outline-variant"></div>
        <div className="flex gap-8">
          <a 
            className="text-on-surface-variant hover:text-secondary transition-colors font-medium text-xs uppercase tracking-widest" 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <p className="text-[10px] tracking-widest text-on-surface-variant/60 text-center uppercase">
          L'Immersion Paris © 2024
        </p>
      </footer>

      {/* Background Refraction Sphere (Visual Decor) */}
      <div 
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none" 
        style={{ backgroundColor: 'var(--color-secondary-container)' }}
      />
    </div>
  );
}
