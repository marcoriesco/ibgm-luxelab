import React, { useState } from 'react';
import agendaData from '../data/agenda.json';
import { getImageUrl } from '../utils/assets';

export default function Agenda() {
  const days = Object.keys(agendaData);

  // Default expanded states matching the design:
  // Dia 1, dinner expanded. Dia 2, Almoço, Curso, and Sunday Riley expanded.
  const [expandedEvents, setExpandedEvents] = useState({
    'DIA 1-0': false,  // Jantar de boas-vindas
    'DIA 2-0': false,  // Almoço Exclusivo & Networking
    'DIA 2-1': false,  // Almoço Exclusivo & Networking
    'DIA 2-2': false,  // Almoço Exclusivo & Networking
    'DIA 2-3': false,  // Curso em Sala de Aula
    'DIA 2-4': false,  // Ação da Sunday Riley
    'DIA 2-5': false,  // Ação da Sunday Riley
    'DIA 3-0': false,  // Masterclass - Boucheron
    'DIA 3-1': false,  // Masterclass - Boucheron
    'DIA 3-2': false,  // Masterclass - Boucheron
    'DIA 4-0': false,  // Masterclass - Mad Lords
    'DIA 4-1': false,  // Masterclass - Mad Lords
    'DIA 4-2': false,  // Masterclass - Vever
    'DIA 4-3': false,  // Masterclass - Vever
    'DIA 5-0': false,  // Masterclass - Tiffany & Co.
    'DIA 5-1': false,  // Masterclass - Tiffany & Co.
    'DIA 5-2': false,  // Galerie Dior
    'DIA 5-3': false,  // Dolce & Gabanna
    'DIA 5-4': false,  // Dolce & Gabanna
    'DIA 6-0': false,  // Café/Masterclass Consumo
    'DIA 6-1': false,  // Café/Masterclass Consumo
    'DIA 6-2': false,  // Masterclass Convidado Especial
    'DIA 6-3': false,  // Transfer
    'DIA 6-4': false,  // Transfer
    'DIA 7-0': false   // Tour Champagne
  });

  const toggleEvent = (dayKey, eventIndex) => {
    const key = `${dayKey}-${eventIndex}`;
    setExpandedEvents(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const dayLabels = {
    'DIA 1': 'DIA 1 – 28/06 DOMINGO',
    'DIA 2': 'DIA 2 – 29/06 SEGUNDA-FEIRA',
    'DIA 3': 'DIA 3 – 30/06 TERÇA-FEIRA',
    'DIA 4': 'DIA 4 – 01/07 QUARTA-FEIRA',
    'DIA 5': 'DIA 5 – 02/07 QUINTA-FEIRA',
    'DIA 6': 'DIA 6 – 03/07 SEXTA-FEIRA',
    'DIA 7': 'DIA 7 – 04/07 SÁBADO'
  };

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-8">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="page-title text-on-surface">
          Programação
        </h2>
      </div>

      {/* Sequential Days Timeline */}
      <div className="space-y-12">
        {days.map((dayKey) => {
          const events = agendaData[dayKey] || [];
          const headerLabel = dayLabels[dayKey] || `${dayKey} – PARIS`;

          return (
            <section key={dayKey} className="w-full">
              {/* Day Header with horizontal line */}
              <h3 className="font-serif text-[13px] text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="flex-shrink-0 font-bold">{headerLabel}</span>
                <span className="h-px bg-outline-variant flex-1 opacity-50"></span>
              </h3>

              {/* Day's Events Accordion List */}
              <div className="space-y-4">
                {events.map((event, idx) => {
                  const eventKey = `${dayKey}-${idx}`;
                  const isOpen = !!expandedEvents[eventKey];
                  const hasLocation = event.metadata && event.metadata.length > 0;

                  return (
                    <article
                      key={idx}
                      onClick={() => toggleEvent(dayKey, idx)}
                      className={`bg-surface-container-lowest border rounded-lg p-6 shadow-sm cursor-pointer hover:border-outline-variant transition-colors group ${
                        isOpen ? 'border-outline-variant/60' : 'border-surface-variant'
                      }`}
                    >
                      {/* Event Header Bar */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="font-serif text-[11px] text-secondary mb-1.5 uppercase font-semibold tracking-wider">
                            {event.time || 'Programação'}
                          </div>
                          <h4 className="font-serif text-lg text-on-surface font-bold leading-tight group-hover:text-secondary transition-colors">
                            {event.title}
                          </h4>
                        </div>
                        <span 
                          className={`material-symbols-outlined text-outline group-hover:text-primary transition-transform duration-300 mt-1 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </div>

                      {/* Expandable Accordion Content Panel */}
                      <div
                        className="transition-all duration-300 overflow-hidden"
                        style={{
                          maxHeight: isOpen ? '1000px' : '0px',
                          opacity: isOpen ? 1 : 0,
                          marginTop: isOpen ? '16px' : '0px'
                        }}
                      >
                        {/* Event Image */}
                        {event.imgUrl && (
                          <div className="mb-4 overflow-hidden rounded-lg">
                            {event.mapLink ? (
                              <a 
                                href={event.mapLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // Prevent clicking image from collapsing card
                              >
                                <img 
                                  alt={event.title} 
                                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02]" 
                                  src={getImageUrl(event.imgUrl)}
                                  style={{ filter: 'sepia(0.3) contrast(1.1) brightness(0.9)' }}
                                />
                              </a>
                            ) : (
                              <img 
                                alt={event.title} 
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02]" 
                                src={getImageUrl(event.imgUrl)}
                                style={{ filter: 'sepia(0.3) contrast(1.1) brightness(0.9)' }}
                                onClick={(e) => e.stopPropagation()} // Prevent clicking image from collapsing card
                              />
                            )}
                          </div>
                        )}

                        {/* Location Details */}
                        {hasLocation && (
                          <>
                            <div className="h-px bg-surface-variant w-full my-4"></div>
                            {event.mapLink ? (
                              <a 
                                href={event.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 mb-4 hover:text-secondary group/loc text-on-surface-variant transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover/loc:text-secondary transition-colors">
                                  location_on
                                </span>
                                <span className="font-serif text-xs underline decoration-dotted decoration-outline-variant group-hover/loc:decoration-secondary">
                                  {event.metadata[0]}
                                </span>
                              </a>
                            ) : (
                              <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                                  location_on
                                </span>
                                <span className="font-serif text-xs text-on-surface-variant">
                                  {event.metadata[0]}
                                </span>
                              </div>
                            )}
                          </>
                        )}

                        {/* Event Description */}
                        {event.description && (
                          <p className="font-serif text-xs text-on-surface-variant leading-relaxed whitespace-pre-line">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
