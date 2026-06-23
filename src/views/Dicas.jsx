import React from 'react';

export default function Dicas() {
  const tips = [
    {
      category: 'Gastronomia',
      icon: 'restaurant',
      title: "L'Atelier de Joël Robuchon",
      description: 'Uma experiência sensorial única que redefine o conceito de alta gastronomia, escolhido pela sua maestria técnica e ambiente intimista.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVroz-BMaHznW0Z8jZm0tbILcUgrzqHABiolGJUxnQtgVwu7HfGYpPKYSTusVv1PuQa_imhqkYt3NvWnLBK57plkx2R7R3aYbNLCgUOKaSAjdpfUdDGyeUbX-_31jCgQaue1eVIfrP0m3N7Cx5oA-rjT_QRH5c72OuC2o-O519NoWdU2U8pBOLxhprvuFuWqobyetdksuWtav4JAOwNX23cqTkHQfAPN629-KgoVad0sWJpChyyFyt0-Iwdd7aPcOzqwZ_glG9pYg',
      colSpan: 'md:col-span-8',
      imageClass: 'sepia',
      paddingClass: 'p-6 md:p-8',
      titleClass: 'font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-2'
    },
    {
      category: 'Boutiques',
      icon: 'local_mall',
      title: 'Les Suites',
      description: 'Selecionamos este endereço pela exclusividade absoluta e pelo serviço de haute couture personalizado que representa o ápice do luxo parisiense.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi-o-xrjMKtZ6kpOksyRH2FXUCTCQ6CJQU9GDmHBdUxAag5u4kyLcp9qNyGsJbZsg4aVkAdvMCNLz1QydDaCzgb1f6ZK40XDkjY6tuvAS4NiFsfj_Swy3f019s9uBtNCDIKPxPakjz_me37mACP38FUAwJVG0zqLNwLBOStDfpIZKHrgS3YVw8m0pqE0pYaXX-GJ-PNhvI-ss-T9m2CgKOQq8KWJTpL2M6W-eW-O89Pfe0BBuD-3dpNAMpxpsWXpPiFC-Q_OQij5o',
      colSpan: 'md:col-span-4',
      imageClass: 'sepia contrast-125',
      paddingClass: 'p-6',
      titleClass: 'font-headline-md text-headline-md mb-2'
    },
    {
      category: 'Locais Ocultos',
      icon: 'vpn_key',
      title: 'Passage des Panoramas',
      description: 'Um mergulho na história de Paris; escolhido por preservar o charme arquitetônico do século XIX em um refúgio longe das multidões.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHjNWcR2XEJ9ApHsWPMH2jPZbFxkwPQj1aD4uQdXFWXorqsxXwm4L7iR1EszDz4CkoMK3go-LoD9Fk0HY8II49wD_CWp-SYCGYvlNArn0NiRiH4mNPJhmc7Wi86rZfdAyIYXpJMC3Ch32pb0AaBC_NK4sTvFA5HqLu1FV4uRaz26DoiBihlsIxCeH1ohAh-mXcVz9d0A_lXjAH-SOqDmoPFeYecaV4o9UjkYYVeqYapiorEnStQnTENbGRurcaQt8X8z0WT_uuR8c',
      colSpan: 'md:col-span-12',
      imageClass: 'sepia',
      paddingClass: 'p-6',
      titleClass: 'font-headline-md text-headline-md mb-2'
    }
  ];

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-8">
      {/* Page Header */}
      <div className="mb-12 md:mb-20 text-center md:text-left">
        <p className="page-subtitle text-secondary mb-4">
          Curadoria parisiense
        </p>
        <h2 className="page-title text-primary mb-6">
          Dicas
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Uma seleção rigorosa de experiências, gastronomia e savoir-faire parisiense, pensada para o viajante que busca a verdadeira essência do luxo imersivo.
        </p>
      </div>

      {/* Bento Grid Layout for Categories */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
        {tips.map((tip, idx) => (
          <a
            key={idx}
            href="#"
            className={`${tip.colSpan} group relative overflow-hidden bg-surface-container-lowest border border-outline-variant transition-transform duration-300 hover:scale-[1.01] editorial-shadow flex flex-col`}
          >
            {/* Background Cover Image */}
            <div className="absolute inset-0 z-0">
              <img 
                alt={tip.category} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${tip.imageClass}`} 
                src={tip.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content Overlays */}
            <div className={`relative z-10 ${tip.paddingClass} flex-grow flex flex-col justify-end text-white select-none`}>
              <div className="flex items-center gap-2 mb-3">
                <span 
                  className="material-symbols-outlined text-secondary" 
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {tip.icon}
                </span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed">
                  {tip.category}
                </span>
              </div>
              <h3 className={tip.titleClass}>
                {tip.title}
              </h3>
              <p className="font-body-md text-body-md text-surface-container-low max-w-md">
                {tip.description}
              </p>
            </div>

            {/* Camera Indicator Icon in Corner */}
            <div className="absolute top-4 right-4 z-20 text-white/70">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

