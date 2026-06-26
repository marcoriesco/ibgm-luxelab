import React from 'react';

export default function Header({ onMenuClick, onLogoClick }) {
  return (
    <header className="bg-surface/85 backdrop-blur-md sticky top-0 z-40 w-full border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-4 max-w-md md:max-w-4xl mx-auto w-full">
        {/* Left: Luxe Lab Logo */}
        <div 
          onClick={onLogoClick}
          className="flex-1 flex justify-start cursor-pointer active:opacity-80 transition-opacity"
        >
          <img 
            alt="Luxe Lab Logo" 
            className="h-8 w-auto object-contain" 
            src="/luxelab/assets/luxe_lab_horizontal.png" 
          />
        </div>
        
        {/* Right: Menu Icon */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={onMenuClick}
            className="text-on-background hover:text-secondary active:scale-95 transition-all p-1"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
