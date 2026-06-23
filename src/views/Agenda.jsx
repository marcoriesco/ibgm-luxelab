import React, { useState } from 'react';
import agendaData from '../data/agenda.json';

export default function Agenda() {
  const days = Object.keys(agendaData);

  // Default expanded states matching the design:
  // Dia 1, dinner expanded. Dia 2, Almoço, Curso, and Sunday Riley expanded.
  const [expandedEvents, setExpandedEvents] = useState({
    'DIA 1-0': true,
    'DIA 2-1': true,
    'DIA 2-3': true,
    'DIA 2-4': true,
    'DIA 6-0': true // Dia 6 tour starts expanded
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
    'DIA 3': 'DIA 3 – 01/07 QUARTA-FEIRA',
    'DIA 4': 'DIA 4 – 02/07 QUINTA-FEIRA',
    'DIA 5': 'DIA 5 – 03/07 SEXTA-FEIRA',
    'DIA 6': 'DIA 6 – 04/07 SÁBADO'
  };

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-8">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="page-title text-on-surface">
          Sua Programação
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
                            <img 
                              alt={event.title} 
                              className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02]" 
                              src={event.imgUrl}
                              style={{ filter: 'sepia(0.3) contrast(1.1) brightness(0.9)' }}
                              onClick={(e) => e.stopPropagation()} // Prevent clicking image from collapsing card
                            />
                          </div>
                        )}

                        {/* Location Details */}
                        {hasLocation && (
                          <>
                            <div className="h-px bg-surface-variant w-full my-4"></div>
                            <div className="flex items-center gap-2 mb-4">
                              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                                location_on
                              </span>
                              <span className="font-serif text-xs text-on-surface-variant">
                                {event.metadata[0]}
                              </span>
                            </div>
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
