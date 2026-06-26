import React from 'react';

export default function Home({ setActiveTab }) {
  const curatedItems = [
    {
      category: 'Gastronomia',
      title: 'Gastronomia',
      description: 'Experiências culinárias inesquecíveis nos melhores restaurantes estrelados da cidade luz.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG9Y0CxwDVM8gZeJGrMwKmWVJJWfC5b_Y0G_4nrAl1e-4pHhw9Tu_2RYF6a7JC3LOGN2oWwMBz484Irc2R2naJ97B0LmjgNI2Y4xROMAHIVoMRfV-9PSj0xcnmPYBJJXfhelO7s0QnQH_US2TZ3hLeItMvK9J-hPqtMENANBmbhiks3DeBvsinWseH-uAzIlxa5WFzPN8h07PdbXO71HUHl2ckTq_0agmKS6ik1SFyPHSDrmiiyoZIKWWvpCKqJFnAqTaNNL-6ZSY'
    },
    {
      category: 'Cultura',
      title: 'Cultura',
      description: 'Imersão artística incomparável explorando os acervos dos principais museus e galerias parisienses.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoMUcJJRi7tdW-UMA2JzOz6_Wg4FyxnOlHSkRUakvNq4bd3lFJ_b3Q-w_LNALU8eB3JzwvuZoTtbAV4Y2WqN5Vih9hWe1BGACg7xFQghfBdr7CEtPgea9qCK6fxBlUbxAMxihc508A9DWhRcBCZZkoY4ziDxrjHduiEbLpXvGVhyvFrym4s2nVnIgz4lpdGi2LBXmiA2SqjKaLLICpYtNe68tow6pLPfEVTUpkmiBfEKtA6W9moHToszj2qCm-g0Fewnus4gEIw'
    }
  ];

  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Hero Section: Próximo Compromisso */}
      <section className="relative overflow-hidden h-[500px] -mx-4 md:-mx-8" style={{ width: 'calc(100% + 2rem)' }}>
        <div className="absolute inset-0 w-full h-full">
          <img 
            alt="Tour Eiffel" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDdXgXcsthoFn6eQervkCiHvi5PFuC5WL07AKHMtZJDdsrQwxchQNIUr79SYoi2qxK-RWeGDJ2JSlKe_8S5IIhn8qfizfnefkO89duayxh7N08REoalMvMtQaNtuKuDYzJFnSBhQRxQLZghFkRl5K3CpgGRtivBW1D5h7odTbhWzys-P-vddDydIrA3KnhzikrXoQmF5XeJoBRou-1TiRmh_3YpN8KS_pw-wEdZZm9yXXP6w3XVmmOpjH2ln5zKr-1MLJUAe7H2iM" 
            style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.9)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-margin-mobile text-white">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed mb-2 block">
            Próximo Compromisso
          </span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile mb-4 leading-tight font-bold">
            Jantar de boas-vindas
          </h1>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed">calendar_today</span>
              <p className="font-label-md text-label-md">28/06</p>
              <span className="material-symbols-outlined text-secondary-fixed ml-2">schedule</span>
              <p className="font-label-md text-label-md">20h</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed">location_on</span>
              <p className="font-label-md text-label-md">Port de la Bourdonnais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sua Programação Card */}
      <section className="py-10">
        <div 
          onClick={() => setActiveTab('agenda')}
          className="relative w-full h-96 md:h-[400px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 shadow-md active:scale-[0.98]"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDdXgXcsthoFn6eQervkCiHvi5PFuC5WL07AKHMtZJDdsrQwxchQNIUr79SYoi2qxK-RWeGDJ2JSlKe_8S5IIhn8qfizfnefkO89duayxh7N08REoalMvMtQaNtuKuDYzJFnSBhQRxQLZghFkRl5K3CpgGRtivBW1D5h7odTbhWzys-P-vddDydIrA3KnhzikrXoQmF5XeJoBRou-1TiRmh_3YpN8KS_pw-wEdZZm9yXXP6w3XVmmOpjH2ln5zKr-1MLJUAe7H2iM")', 
              filter: 'sepia(0.3) contrast(1.1) brightness(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 className="font-headline-md text-headline-md mb-2">Sua Programação</h3>
          </div>
        </div>
      </section>

      {/* Curadoria Parisiense Carousel */}
      <section className="py-10">
        <div className="mb-6">
          <h2 className="font-headline-md text-headline-md text-on-background">Curadoria Parisiense</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-8">
          {curatedItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => setActiveTab('dicas')}
              className="flex-none w-[280px] md:w-full snap-center cursor-pointer group"
            >
              <div className="relative w-full rounded-lg overflow-hidden mb-4 h-48 bg-surface-container">
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={item.imgUrl} 
                  style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.9)' }}
                />
              </div>
              <h3 className="font-headline-md text-lg text-on-background mb-1">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1: Galeria */}
          <div 
            onClick={() => setActiveTab('galeria')}
            className="bg-surface-container-low rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 hover:bg-surface-container-high cursor-pointer active:scale-[0.98]"
          >
            <div>
              <span className="material-symbols-outlined text-secondary mb-3">
                photo_library
              </span>
              <h3 className="font-headline-md text-on-background text-lg leading-tight font-bold">
                Galeria
              </h3>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-snug">
              Explore os momentos mais marcantes da nossa jornada parisiense.
            </p>
          </div>

          {/* Card 2: Conteúdo Complementar */}
          <div 
            onClick={() => setActiveTab('complementaryContent')}
            className="bg-surface-container-low rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 hover:bg-surface-container-high cursor-pointer active:scale-[0.98]"
          >
            <div>
              <span className="material-symbols-outlined text-secondary mb-3">
                menu_book
              </span>
              <h3 className="font-headline-md text-on-background text-lg leading-tight font-bold">
                Conteúdo Complementar
              </h3>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-snug">
              Aprofunde-se nos detalhes que tornam cada experiência no Luxe Lab única.
            </p>
          </div>

          {/* Card 3: Informações Práticas */}
          {/* <div 
            onClick={() => setActiveTab('practicalInfo')}
            className="bg-surface-container-low rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 hover:bg-surface-container-high cursor-pointer active:scale-[0.98]"
          >
            <div>
              <span className="material-symbols-outlined text-secondary mb-3">
                info
              </span>
              <h3 className="font-headline-md text-on-background text-lg leading-tight font-bold">
                Informações Práticas
              </h3>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-snug">
              Voltagem, adaptador de tomada, dresscode, aplicativos úteis e segurança.
            </p>
          </div> */}

          {/* Card 4: Contatos Úteis */}
          <div 
            onClick={() => setActiveTab('contatos')}
            className="bg-surface-container-low rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 hover:bg-surface-container-high cursor-pointer active:scale-[0.98]"
          >
            <div>
              <span className="material-symbols-outlined text-secondary mb-3">
                support_agent
              </span>
              <h3 className="font-headline-md text-on-background text-lg leading-tight font-bold">
                Contatos Úteis
              </h3>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-snug">
              Equipe IBGM, Embaixada, Consulado e Polícia.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-28 flex flex-col items-center justify-center gap-4 border-t border-outline-variant bg-surface-container-lowest -mx-4 md:-mx-8" style={{ width: 'calc(100% + 2rem)' }}>
        <img 
          alt="IBGM Logo" 
          className="h-8 w-auto object-contain" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8_YDu2DZkqGqmh-Jht-TpPfS3UWfhWtJVfLL0wR3V2NY0KL6Sgt2unnbHMSrhwWknOQH3Z_I2K7qtx1ZHQFPJ7BqU13JjDyb_MlEH7KMFZ3I2fM0B7F6hPvz75_NVRCuB4aeWGT3OHAIsAdzOXBF6yrH2MLYz5g_e5y-L9bLABXtdpG7baJLDj4HjAEVTyAbfCKGZhpZ9oojMiBgE0enVIkQmKfBDtXZYjYQjKOQHTFHTVZf4x8cjnmUql721tP6B0bsR7vMWP9I" 
        />
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          Curadoria de Conteúdo
        </p>
      </footer>
    </div>
  );
}
