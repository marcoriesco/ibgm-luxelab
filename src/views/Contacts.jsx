import React, { useState } from 'react';

export default function Contacts() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const ibgmContacts = [
    {
      name: 'Roseli Duque',
      role: 'Presidente do Conselho de Administração',
      phone: '+55 11 98461-4000',
      wa: '5511984614000'
    },
    {
      name: 'Henrique Costa',
      role: 'Diretor de Marketing',
      phone: '+55 21 98168-4710',
      wa: '5521981684710'
    },
    {
      name: 'Erica Mendes',
      role: 'Gerente de Comunicação & Marketing',
      phone: '+55 11 99177-4193',
      wa: '5511991774193'
    }
  ];

  const emergencyNumbers = [
    { label: 'Emergência Geral Europeia', desc: 'Central de socorro rápido', tel: '112' },
    { label: 'Polícia Nacional Francesa', desc: 'Segurança pública', tel: '17' },
    { label: 'SAMU (Emergências Médicas)', desc: 'Ambulância e médicos', tel: '15' },
    { label: 'Bombeiros (Sapeurs-Pompiers)', desc: 'Combate a incêndio e resgate', tel: '18' }
  ];

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="page-title text-primary">Contatos Úteis</h2>
        <div className="w-12 h-0.5 bg-secondary mx-auto mt-3"></div>
      </div>

      <div className="space-y-4">
        {/* Accordion 1: IBGM e Autoridades */}
        <div className="border border-outline-variant/30 rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
          <button 
            onClick={() => toggleAccordion(0)}
            className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none"
          >
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Contatos IBGM e Autoridades
            </span>
            <span 
              className="material-symbols-outlined transition-transform duration-300"
              style={{ transform: activeAccordion === 0 ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              expand_more
            </span>
          </button>
          
          <div 
            className="transition-all duration-300 overflow-hidden"
            style={{
              maxHeight: activeAccordion === 0 ? '1200px' : '0px',
              opacity: activeAccordion === 0 ? 1 : 0
            }}
          >
            <div className="px-5 pb-6 pt-2 space-y-6">
              {/* IBGM Team */}
              <div className="border-b border-outline-variant/10 pb-5">
                <span className="text-[10px] font-label font-bold uppercase text-secondary tracking-wider block mb-3">
                  Equipe IBGM
                </span>
                <div className="space-y-4 mt-2">
                  {ibgmContacts.map((contact) => (
                    <div key={contact.name} className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span className="text-xs font-headline font-bold text-primary">{contact.name}</span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant ml-5 leading-tight">{contact.role}</span>
                      <a 
                        className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1.5 ml-5 mt-1" 
                        href={`https://wa.me/${contact.wa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[14px]">chat</span> 
                        <span>{contact.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passaporte Fashionista */}
              <div className="border-b border-outline-variant/10 pb-5">
                <span className="text-[10px] font-label font-bold uppercase text-secondary tracking-wider block mb-2">
                  Equipe Passaporte Fashionista
                </span>
                <a 
                  className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1.5 mt-1" 
                  href="mailto:contato@passaportefashionista.com"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span> 
                  <span>contato@passaportefashionista.com</span>
                </a>
              </div>

              {/* Estúdio Ruan Maranhão */}
              <div className="border-b border-outline-variant/10 pb-5">
                <span className="text-[10px] font-label font-bold uppercase text-secondary tracking-wider block mb-2">
                  Estúdio Ruan Maranhão
                </span>
                <div className="space-y-2 mt-1">
                  <a 
                    className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1.5" 
                    href="https://wa.me/5581981187001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span> 
                    <span>+55 81 98118-7001</span>
                  </a>
                  <a 
                    className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1.5" 
                    href="https://www.instagram.com/ruamaranhao/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">public</span> 
                    <span>@ruamaranhao</span>
                  </a>
                </div>
              </div>

              {/* Embaixada do Brasil */}
              <div className="border-b border-outline-variant/10 pb-5">
                <span className="text-[10px] font-label font-bold uppercase text-secondary tracking-wider block mb-1">
                  Embaixada do Brasil na França
                </span>
                <span className="text-[11px] text-on-surface-variant block leading-tight mb-2">
                  34, Cours Albert 1er, 75008 Paris
                </span>
                <a 
                  className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1.5" 
                  href="tel:+33145616300"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span> 
                  <span>+33 (0) 1 45 61 63 00</span>
                </a>
              </div>

              {/* Consulado-Geral */}
              <div className="border-b border-outline-variant/10 pb-5">
                <span className="text-[10px] font-label font-bold uppercase text-secondary tracking-wider block mb-1">
                  Consulado-Geral do Brasil em Paris
                </span>
                <div className="space-y-1.5 text-[11px] text-on-surface-variant leading-tight">
                  <p>65 Avenue Franklin Delano Roosevelt, 75008 Paris</p>
                  <p>Segunda a sexta, das 10h às 16h</p>
                  <p>Metrô: Saint-Philippe-du-Roule (linha 9)</p>
                </div>
                <div className="flex flex-col gap-1.5 mt-2.5">
                  <a className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1.5" href="mailto:consulat.cgparis@itamaraty.gov.br">
                    <span className="material-symbols-outlined text-[14px]">mail</span> 
                    <span>consulat.cgparis@itamaraty.gov.br</span>
                  </a>
                </div>
              </div>

              {/* Plantão Consular */}
              <div>
                <span className="text-[10px] font-label font-bold uppercase text-secondary tracking-wider block mb-1">
                  Plantão Consular Governo Brasileiro
                </span>
                <p className="text-[11px] text-on-surface-variant italic leading-relaxed mb-3">
                  Salve na agenda para emergências migratórias, acidentes ou perdas graves no exterior.
                </p>
                <a 
                  className="inline-flex items-center gap-1.5 bg-primary text-on-primary px-4 py-2 rounded text-xs font-label uppercase tracking-widest font-semibold hover:opacity-90 active:scale-95 transition-all" 
                  href="https://wa.me/5561982600610"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[14px]">chat</span>
                  <span>+55 61 98260-0610</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion 2: Números Locais (França) */}
        <div className="border border-outline-variant/30 rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
          <button 
            onClick={() => toggleAccordion(1)}
            className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none"
          >
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Números Locais (França)
            </span>
            <span 
              className="material-symbols-outlined transition-transform duration-300"
              style={{ transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              expand_more
            </span>
          </button>
          
          <div 
            className="transition-all duration-300 overflow-hidden"
            style={{
              maxHeight: activeAccordion === 1 ? '500px' : '0px',
              opacity: activeAccordion === 1 ? 1 : 0
            }}
          >
            <div className="px-5 pb-6 pt-2 space-y-4">
              {emergencyNumbers.map((item) => (
                <div 
                  key={item.tel} 
                  className="flex justify-between items-center border-b border-outline-variant/10 pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <span className="text-[10px] font-label font-bold uppercase text-secondary block">
                      {item.label}
                    </span>
                    <span className="text-xs text-on-surface-variant leading-tight block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                  <a 
                    className="bg-primary text-on-primary w-11 h-11 flex items-center justify-center rounded-lg active:scale-90 hover:opacity-95 transition-all text-sm font-bold font-label" 
                    href={`tel:${item.tel}`}
                  >
                    {item.tel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
