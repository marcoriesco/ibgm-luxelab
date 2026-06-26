import React, { useState } from 'react';

export default function ComplementaryContent() {
  const [expandedCards, setExpandedCards] = useState({
    0: false,
    1: true,  // Card 2 starts expanded
    2: false
  });

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${import.meta.env.BASE_URL || '/'}${cleanUrl}`;
  };

  const articles = [
    {
      title: "The Luxury Strategy",
      subtitle: "Break the rules of marketing to build luxury brands",
      imageUrl: "/assets/theluxurystrategy.jpg",
      amazonUrl: "https://www.amazon.com.br/Luxury-Strategy-Break-Marketing-Brands/dp/1398624268/ref=asc_df_1398624268?mcid=8a1c5df6fec03ee191453272afacdcb6&tag=googleshopp00-20&linkCode=df0&hvadid=709877915946&hvpos=&hvnetw=g&hvrand=13502785926240947438&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196327&hvtargid=pla-2395686063733&psc=1&hvocijid=13502785926240947438-1398624268-&hvexpln=0&language=pt_BR",
      content: "O valor de uma joia não está apenas nas suas matérias-primas. Esse conceito é particularmente importante para as joalherias que desejam migrar de uma estratégia baseada em produto para uma estratégia baseada em marca, ampliando sua diferenciação no mercado e criando condições para alcançar margens mais elevadas.\n\nÉ justamente essa visão que torna The Luxury Strategy uma das obras mais relevantes para empresários do setor. Considerado um dos livros mais importantes do mercado de luxo, ele demonstra que luxo não é uma categoria de produto, mas um modelo específico de criação de valor e gestão de marca. Para quem atua nos segmentos de joias, relógios e outros artigos ou bens de alto padrão, a leitura oferece uma compreensão mais profunda sobre como construir desejo, exclusividade e valor percebido — pilares essenciais para o fortalecimento de marcas de luxo."
    },
    {
      title: "O Luxo Eterno",
      subtitle: "Da Idade do Sagrado ao Tempo das Marcas",
      imageUrl: "/assets/oluxoeterno.jpg",
      amazonUrl: "https://www.amazon.com.br/luxo-eterno-idade-sagrado-marcas/dp/9724417018",
      content: "O luxo atravessa séculos porque responde a necessidades humanas que vão além da utilidade dos produtos. Desde os símbolos de poder e prestígio das antigas civilizações até as grandes marcas contemporâneas, o luxo sempre esteve associado ao desejo, à distinção e à construção de significado. Compreender essa trajetória é fundamental para empresários que buscam fortalecer o posicionamento de suas marcas em um mercado cada vez mais competitivo.\n\nÉ justamente essa perspectiva que faz de O Luxo Eterno – Da Idade do Sagrado ao Tempo das Marcas, de Gilles Lipovetsky, uma leitura atual e relevante. A obra mostra que, embora os códigos do luxo tenham evoluído ao longo do tempo, seus fundamentos permanecem os mesmos: exclusividade, valor simbólico, experiência e desejo. Para quem atua nos segmentos de joias, relógios, moda, hotelaria de alto padrão ou bens exclusivos, o livro oferece uma compreensão aprofundada sobre o papel cultural e emocional do luxo, contribuindo para a construção de marcas mais fortes, desejadas e alinhadas às expectativas do consumidor contemporâneo."
    },
    {
      title: "French Jewelry of the Nineteenth Century",
      subtitle: "Henri Vever",
      imageUrl: "/assets/FrenchJewelryoftheNineteenthCentury.jpg",
      amazonUrl: "https://www.amazon.com.br/French-Jewelry-Nineteenth-Century-Henri/dp/0500237840",
      content: "A joalheria de excelência é resultado não apenas de técnica e materiais nobres, mas também de referências estéticas, movimentos artísticos e transformações culturais que moldaram o setor ao longo do tempo. Conhecer essa evolução permite compreender a origem de muitos conceitos que ainda influenciam o design, a inovação e a percepção de valor na joalheria contemporânea.\n\nÉ essa riqueza histórica que faz de French Jewelry of the Nineteenth Century, de Henri Vever, uma obra indispensável para profissionais e empresários do segmento. Considerada a principal referência sobre a joalheria francesa do século XIX, a publicação documenta a evolução do setor desde o período napoleônico até a Art Nouveau, movimento do qual o próprio Vever foi um dos grandes defensores. Ao explorar temas como o uso inovador do esmalte, a inspiração em elementos da natureza e a influência da estética japonesa, o livro oferece uma visão aprofundada sobre a construção da joalheria moderna e sobre os fundamentos criativos que continuam inspirando marcas e designers até os dias atuais."
    }
  ];

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-8">
      {/* Section Title */}
      <h1 className="page-title text-primary mb-8 border-b border-secondary/20 pb-4 text-center">
        Conteúdo Complementar
      </h1>

      <div className="space-y-6">
        {articles.map((article, index) => {
          const isOpen = expandedCards[index];
          return (
            <article 
              key={index}
              className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden group"
            >
              {/* Cover Image */}
              <div className="relative h-64 overflow-hidden bg-surface-container-low">
                <img 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={getImageUrl(article.imageUrl)}
                  style={{ filter: 'sepia(0.3) contrast(1.1) brightness(0.9)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-sans text-[10px] text-on-primary bg-secondary px-2.5 py-1 rounded uppercase tracking-widest font-semibold">
                    Leitura Recomendada
                  </span>
                </div>
              </div>

              {/* Title & Accordion Control */}
              <div className="p-6">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-1" 
                  onClick={() => toggleCard(index)}
                >
                  <h2 className="font-serif text-xl font-bold text-primary">
                    {article.title}
                  </h2>
                  <span 
                    className={`material-symbols-outlined transition-transform duration-300 text-outline ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>

                {/* Expandable Content Container */}
                <div 
                  className="transition-all duration-400 overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '1000px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '12px' : '0px'
                  }}
                >
                  <p className="font-serif text-sm text-secondary italic mb-4">
                    {article.subtitle}
                  </p>
                  <div className="font-serif text-xs text-on-surface-variant space-y-4 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                  
                  {/* Share button linking to Amazon */}
                  <div className="mt-6 flex justify-between items-center border-t border-outline-variant/30 pt-4">
                    <div></div>
                    <a 
                      href={article.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Ver na Amazon"
                      className="text-outline hover:text-primary active:scale-95 transition-all p-1 flex items-center justify-center cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-outlined text-[20px]">share</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Quote Banner */}
      <div className="mt-12 p-6 border-l-2 border-secondary bg-surface-container-low italic">
        <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
          "O mais corajoso dos atos ainda é pensar com a própria cabeça." 
          <span className="block mt-2 font-bold not-italic text-secondary">— Coco Chanel</span>
        </p>
      </div>
    </div>
  );
}
