import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Menu from './components/Menu';
import Home from './views/Home';
import Agenda from './views/Agenda';
import Dicas from './views/Dicas';
import Galeria from './views/Galeria';
import PracticalInfo from './views/PracticalInfo';
import ComplementaryContent from './views/ComplementaryContent';
import Contacts from './views/Contacts';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top immediately on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Render the correct tab view
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'agenda':
        return <Agenda />;
      case 'dicas':
        return <Dicas />;
      case 'galeria':
        return <Galeria />;
      case 'practicalInfo':
        return <PracticalInfo />;
      case 'complementaryContent':
        return <ComplementaryContent />;
      case 'contatos':
        return <Contacts />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      {/* Top Application Bar */}
      <Header onMenuClick={handleMenuClick} onLogoClick={() => setActiveTab('home')} />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-md md:max-w-4xl mx-auto relative px-4 md:px-8">
        {renderView()}
      </main>

      {/* Bottom Floating Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Full-Screen liquid-glass drawer menu */}
      <Menu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
}

export default App;

