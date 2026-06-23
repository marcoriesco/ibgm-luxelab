import React, { useState, useEffect } from 'react';

export default function PracticalInfo() {
  const [notes, setNotes] = useState('');
  const [openSections, setOpenSections] = useState({
    curso: false,
    jantar: false,
    tour: false
  });

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('luxe_lab_travel_notes');
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage on change
  const handleNotesChange = (e) => {
    const text = e.target.value;
    setNotes(text);
    localStorage.setItem('luxe_lab_travel_notes', text);
  };

  // Share notes via WhatsApp
  const handleWhatsAppShare = () => {
    const cleanNotes = notes.trim();
    if (!cleanNotes) {
      alert('Por favor, digite alguma anotação antes de compartilhar.');
      return;
    }
    
    // Generate pre-filled WhatsApp link
    const url = `https://wa.me/?text=${encodeURIComponent(cleanNotes)}`;
    window.open(url, '_blank');
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const apps = [
    {
      name: 'Citymapper',
      desc: 'Melhor app para transporte público e trajetos a pé.'
    },
    {
      name: 'TheFork',
      desc: 'Reservas em restaurantes com descontos exclusivos.'
    },
    {
      name: 'G7 Taxi',
      desc: 'O aplicativo oficial e mais confiável de táxis da cidade.'
    },
    {
      name: 'Translate',
      desc: 'Essencial para cardápios e conversas rápidas.'
    }
  ];

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-4">
      {/* Page Header */}
      <section className="mb-8">
        <span className="page-subtitle text-secondary block mb-1">
          Guia de Viagem
        </span>
        <h2 className="page-title text-primary">
          Informações Práticas
        </h2>
      </section>

      {/* Voltagem & Adaptadores */}
      <div className="space-y-6 mb-12">
        {/* Voltagem Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-lg editorial-shadow">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
              bolt
            </span>
            <h3 className="font-headline-md text-primary">Voltagem</h3>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface">
            A voltagem padrão na França é de <span className="font-bold text-primary">230V com frequência de 50 Hz. </span>
            Certifique-se de que seus aparelhos são bivolt antes de conectá-los.
          </p>
        </div>

        {/* Adaptador Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-lg editorial-shadow">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
              power
            </span>
            <h3 className="font-headline-md text-primary">Adaptador de Tomada</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            As tomadas são do Tipo C (dois pinos redondos) e do Tipo E (dois pinos redondos mais um pino macho de aterramento). 
            Aparelhos brasileiros de dois pinos finos entram facilmente, mas é necessário um adaptador para os de três pinos.
          </p>
        </div>

        {/* Accordion 1: Curso Passaporte Fashionista */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg editorial-shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('curso')} 
            className="w-full flex items-center justify-between p-8 text-left focus:outline-none cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                checkroom
              </span>
              <h3 className="font-headline-md text-primary">
                <div>Curso Passaporte Fashionista e Visitas Não Monitoradas</div>
                <div className="font-normal text-on-surface-variant text-base mt-1">De 29/06 a 04/07</div>
              </h3>
            </div>
            <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${openSections.curso ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          {openSections.curso && (
            <div className="px-8 pb-8 transition-all duration-300">
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <p>A principal recomendação é: priorize o conforto! A programação inclui deslocamentos, caminhadas, visitas técnicas e períodos prolongados em pé.</p>
                <p>Por isso, sugere-se optar por looks de alfaiataria confortável, que conciliam elegância, praticidade e bem-estar ao longo do dia. Também recomenda-se o uso de sapatos baixos e já amaciados, evitando estrear calçados durante a viagem. Tênis discretos, mocassins e sapatilhas confortáveis são excelentes opções.</p>
                <p>Para maior comodidade e segurança, propõe-se o uso de bolsas transversais (crossbody), que permitem manter documentos, celular e itens pessoais sempre próximos ao corpo, especialmente durante os deslocamentos pela cidade.</p>
                <p>Por fim, acompanhe a previsão do tempo nos dias que antecedem a viagem. É verão europeu e as temperaturas podem ser bastante elevadas, com registros que podem superar os 40°C in períodos de onda de calor. Dê preferência a roupas leves e tecidos respiráveis. Uma terceira peça também pode ser útil em ambientes fechados com ar-condicionado.</p>
              </div>
            </div>
          )}
        </div>

        {/* Accordion 2: Jantar */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg editorial-shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('jantar')} 
            className="w-full flex items-center justify-between p-8 text-left focus:outline-none cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                checkroom
              </span>
              <h3 className="font-headline-md text-primary">
                <div>Jantar</div>
                <div className="font-normal text-on-surface-variant text-base mt-1">28/06, às 20h30</div>
              </h3>
            </div>
            <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${openSections.jantar ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          {openSections.jantar && (
            <div className="px-8 pb-8 transition-all duration-300">
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <p>O passeio acontece ocorrerá no início da noite parisiense, ainda com luz natural nesta época do ano. Sugere-se um traje casual elegante (smart casual), com peças de alfaiataria leve, vestidos, camisas, blazers leves ou conjuntos coordenados.</p>
                <p>Não há necessidade de traje formal, salto alto ou gravata. Recomenda-se priorizar o conforto, optando por calçados elegantes e práticos. Para as mulheres, sugere-se sapatos baixos ou salto bloco, evitando salto fino, que pode não ser a opção mais adequada para os deslocamentos e para o embarque e desembarque no barco.</p>
              </div>
            </div>
          )}
        </div>

        {/* Accordion 3: Tour Champagne */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg editorial-shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('tour')} 
            className="w-full flex items-center justify-between p-8 text-left focus:outline-none cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                checkroom
              </span>
              <h3 className="font-headline-md text-primary">
                <div>Tour à região de Champagne</div>
                <div className="font-normal text-on-surface-variant text-base mt-1">04/07</div>
              </h3>
            </div>
            <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${openSections.tour ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          {openSections.tour && (
            <div className="px-8 pb-8 transition-all duration-300">
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <p>Para a programação na região de Champagne, incluindo as visitas à Mercier e à Pommery e o almoço harmonizado, recomendamos produções elegantes e descomplicadas, adequadas a um dia de experiências e degustações em diferentes ambientes. Peças em linho, algodão, seda e alfaiataria leve são excelentes escolhas para a ocasião.</p>
                <p>Como a programação inclui deslocamentos e visitas a áreas internas e externas, o conforto deve prevalecer, especialmente na escolha dos calçados. Tênis discretos, mocassins e sapatilhas são as opções mais indicadas. A região de Champagne combina tradição, história e sofisticação, mas sem formalidades excessivas. A proposta é privilegiar um visual leve, refinado e confortável para aproveitar plenamente o dia.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Useful Apps Section */}
      <section className="mb-12">
        <h3 className="font-headline-md text-primary mb-6">
          Aplicativos úteis em Paris
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {apps.map((app) => (
            <div 
              key={app.name}
              className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center text-center border border-transparent hover:border-outline-variant transition-all"
            >
              <div className="w-12 h-12 mb-3 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  alt={app.name} 
                  className="w-8 h-8 object-contain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjExu9Q6avL_2IJwtn99yuteZEhnRfH65_84PmF8F-0B7pucPq08qewIGPSoFmexxSB91vbqRqI-4EaURIFYzclqp3sioEVmjZDMSKL8IjCQ4ToKsB7yZIewSD8XMOvX1Yr-gvABHhXtAF4jYwTd6dvPA1lig_2g7qUO85BcVA7Nqz_LnPtb2vjN7v2HzFZguyn89-e-0qgbSbF7z92TtqlrJD2xHCUEktr8l3jXs_KJAopddNtQLh4jeP3UYGEZJlBMxHkTWBzV0"
                />
              </div>
              <span className="font-label-md text-label-md text-primary font-bold mb-1">
                {app.name}
              </span>
              <p className="text-[12px] leading-tight text-on-surface-variant">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Tips */}
      <section className="mb-12 bg-primary text-on-primary p-8 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-secondary-fixed">
            shield
          </span>
          <h3 className="font-headline-md text-white">
            Segurança e cuidados
          </h3>
        </div>
        <ul className="space-y-4 font-body-md text-body-md opacity-90">
          <li className="flex gap-3">
            <span className="text-secondary-fixed font-bold">•</span>
            <span>Mantenha sua bolsa ou mochila sempre à frente do corpo em locais turísticos e no metrô.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary-fixed font-bold">•</span>
            <span>Evite aceitar "ajuda" não solicitada em caixas eletrônicos ou máquinas de bilhetes.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary-fixed font-bold">•</span>
            <span>Desconfie de abaixo-assinados ou pessoas pedindo sua atenção nas ruas próximas à Torre Eiffel.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary-fixed font-bold">•</span>
            <span>Mantenha uma cópia digital do seu passaporte e documentos importantes na nuvem.</span>
          </li>
        </ul>
      </section>

      {/* Travel Notes (Integrated Notepad) */}
      <section className="bg-surface-container-lowest border border-outline-variant p-8 rounded-lg editorial-shadow mb-4">
        <h3 className="font-headline-md text-primary font-bold mb-3 text-center">Notas de Viagem</h3>
        <p className="font-body-md text-on-surface-variant text-center mb-4 leading-relaxed">
          Rascunhe seus pensamentos, horários ou notas e compartilhe facilmente com outras pessoas.
        </p>
        <div className="relative mb-5">
          <textarea
            value={notes}
            onChange={handleNotesChange}
            placeholder="O que você mais gostou hoje? Endereços, horários ou rascunhos..."
            className="w-full h-36 bg-surface border border-outline-variant rounded-lg p-4 text-sm font-body focus:outline-none focus:ring-1 focus:ring-secondary/50 shadow-inner resize-none text-on-surface"
          />
          <div className="absolute bottom-3 right-3 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-4xl">edit_note</span>
          </div>
        </div>
        <button
          onClick={handleWhatsAppShare}
          className="w-full bg-secondary text-white py-3 rounded-lg font-label-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Compartilhar via WhatsApp</span>
        </button>
      </section>
    </div>
  );
}

