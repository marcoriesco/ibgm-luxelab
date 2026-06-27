import React from 'react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'agenda', label: 'Agenda', icon: 'event_upcoming' },
    { id: 'dicas', label: 'Cultural', icon: 'auto_awesome' },
    { id: 'galeria', label: 'Galeria', icon: 'photo_library' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-45 bg-surface-container-lowest border-t border-outline-variant/30 flex justify-around items-center pt-2 pb-safe px-2 rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.04)] md:hidden">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-3 w-16 transition-all duration-200 active:scale-90 ${
              isActive 
                ? 'text-secondary font-bold scale-105' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span 
              className="material-symbols-outlined text-[24px] transition-all"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 300"
              }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] mt-0.5 tracking-wider uppercase font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

