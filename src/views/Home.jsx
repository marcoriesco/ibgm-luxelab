import React from 'react';
import { getImageUrl } from '../utils/assets';

export default function Home({ setActiveTab }) {
  const curatedItems = [
    {
      title: "Fundação Louis Vuitton",
      description: 'Exposição Calder Rêver en Équilibre',
      imageUrl: '/assets/curadoriacultural_louisvuitton.jpg',
      colSpan: 'md:col-span-8',
      imageClass: 'sepia',
      paddingClass: 'p-6 md:p-8',
      titleClass: 'font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-2',
      link: 'https://www.fondationlouisvuitton.fr/fr'
    },
    {
      title: 'Fundação Cartier para a Arte Contemporânea',
      description: 'Exposição Générale',
      imageUrl: '/assets/curadoriacultural_cartier.jpg',
      colSpan: 'md:col-span-4',
      imageClass: 'sepia contrast-125',
      paddingClass: 'p-6',
      titleClass: 'font-headline-md text-headline-md mb-2',
      link: 'https://www.fondationcartier.com/'
    },
    {
      title: 'Biblioteca Nacional da França',
      description: '',
      imageUrl: '/assets/curadoriacultural_biblioteca.jpg',
      colSpan: 'md:col-span-12',
      imageClass: 'sepia',
      paddingClass: 'p-6',
      titleClass: 'font-headline-md text-headline-md mb-2',
      link: 'https://www.bnf.fr/fr'
    },
  ];

  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Hero Section: Próximo Compromisso */}
      {/* <section className="relative overflow-hidden h-[500px] -mx-4 md:-mx-8" style={{ width: 'calc(100% + 2rem)' }}>
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
      </section> */}

      {/* Sua Programação Card */}
      <section className="py-4">
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
            <h3 className="font-headline-md text-headline-md mb-2">Programação</h3>
          </div>
        </div>
      </section>

      {/* Curadoria Parisiense Carousel */}
      <section className="py-10">
        <div className="mb-6">
          <h2 className="font-headline-md text-headline-md text-on-background">Curadoria Cultural</h2>
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
                  src={getImageUrl(item.imageUrl)} 
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
            className="relative overflow-hidden group rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 shadow-md cursor-pointer active:scale-[0.98]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url("${getImageUrl('/assets/home_galeria.jpg')}")`, filter: 'sepia(0.3) contrast(1.1) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-white">
              <span className="material-symbols-outlined text-white/90 mb-3">
                photo_library
              </span>
              <h3 className="font-headline-md text-white text-lg leading-tight font-bold">
                Galeria
              </h3>
            </div>
            <p className="relative z-10 font-body-md text-xs text-white/90 leading-snug">
              Explore os momentos mais marcantes da nossa jornada parisiense.
            </p>
          </div>

          {/* Card 2: Conteúdo Complementar */}
          <div 
            onClick={() => setActiveTab('complementaryContent')}
            className="relative overflow-hidden group rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 shadow-md cursor-pointer active:scale-[0.98]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url("${getImageUrl('/assets/home_conteudocomplementar.jpg')}")`, filter: 'sepia(0.3) contrast(1.1) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-white">
              <span className="material-symbols-outlined text-white/90 mb-3">
                menu_book
              </span>
              <h3 className="font-headline-md text-white text-lg leading-tight font-bold">
                Conteúdo Complementar
              </h3>
            </div>
            <p className="relative z-10 font-body-md text-xs text-white/90 leading-snug">
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
              Tudo o que você precisa saber para sua estadia em Paris.
            </p>
          </div> */}

          {/* Card 4: Contatos Úteis */}
          <div 
            onClick={() => setActiveTab('contatos')}
            className="relative overflow-hidden group rounded-lg p-5 flex flex-col justify-between h-48 border border-outline-variant transition-all duration-300 shadow-md cursor-pointer active:scale-[0.98]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url("${getImageUrl('/assets/home_contatosuteis.jpg')}")`, filter: 'sepia(0.3) contrast(1.1) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-white">
              <span className="material-symbols-outlined text-white/90 mb-3">
                support_agent
              </span>
              <h3 className="font-headline-md text-white text-lg leading-tight font-bold">
                Contatos Úteis
              </h3>
            </div>
            <p className="relative z-10 font-body-md text-xs text-white/90 leading-snug">
              Equipe IBGM, Embaixada, Consulado e Polícia.
            </p>
          </div>
        </div>
      </section>

      <footer className="pt-12 pb-28 flex flex-col items-center justify-center gap-4 border-t border-outline-variant bg-surface-container-lowest -mx-4 md:-mx-8" style={{ width: 'calc(100% + 2rem)' }}>
        <img 
          alt="IBGM Logo" 
          className="h-8 w-auto object-contain" 
          src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuD8_YDu2DZkqGqmh-Jht-TpPfS3UWfhWtJVfLL0wR3V2NY0KL6Sgt2unnbHMSrhwWknOQH3Z_I2K7qtx1ZHQFPJ7BqU13JjDyb_MlEH7KMFZ3I2fM0B7F6hPvz75_NVRCuB4aeWGT3OHAIsAdzOXBF6yrH2MLYz5g_e5y-L9bLABXtdpG7baJLDj4HjAEVTyAbfCKGZhpZ9oojMiBgE0enVIkQmKfBDtXZYjYQjKOQHTFHTVZf4x8cjnmUql721tP6B0bsR7vMWP9I")} 
        />
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          Curadoria de Conteúdo
        </p>
      </footer>
    </div>
  );
}
