import React from 'react';

export default function Galeria() {
  const galleryItems = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvTwjg5zUveyp3HFBfF4MrO6BEys5YzoavwevkoZLtORsj70d-pExDY26hkFCIN7e79rTYJU-hxdNblryRwP6dlh9BUauvUuE7qCL5DK3dhPr5rNzt4FhMsHipsBtHLfnxBnr8lQs7hgqcz586may4_olYegRW16Q1buHP2N03M11Hijv7KnQGJHtmRpP_Gx3vumlc9hIdXJM99-DJ_5JQmScGVrF-9VH3MQW9u5EtAkaUNfXzwpupMfjjaLQF1JscOJivFb3YVpk',
      alt: 'Alta costura em Paris',
      title: 'Dia 1 - 29/06',
      link: 'https://drive.google.com/drive/folders/14ApQFAr8ymyvqyXCynY17BK3XQ-vAnaj?usp=drive_link'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBea8yzIna4LpOJsnpYRDB3-J_H00LU7Fci7_MbjG4C8MQxfrIHPOjy-MCdtVe054RPdf-bG3xqrbP8P7P4xnMzUZi3AW_JWnsPoL_Fcf8NooBThqLCrDxciN6G1wxzNCpMhz5vWcrVpVdx5Dbov9y7sCuUVapV9cDm_j-KhZ10YblTVn9l4pIFUBh9WxF_AZeK1Xe6a0b-_NLsUv7aSswOHXWYVwIBaNVqTgaOoEqN67355OOlfGaNudT06NROnZnihahiwy1sd50',
      alt: 'Coquetel e networking',
      title: 'Dia 2 - 30/06',
      link: 'https://drive.google.com/drive/folders/1IjfykQljdCfKmx7OJtsl5bAXKmniuWo6?usp=drive_link'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8NGvIQgZFyYwxaqDnjl5r5B6wEBtMXhJyzG4gIVBU0zlF7ub8dp_x4pqBi0mxJkRyxtBhRSUECQGLS7H99_CZSomoxFOWyRJNpnMw8izHTs1DTMAWp4IIKwlCnLMs3PIlK7sKJdK5pAxhAZxggOHj6lEkAGQjz2OAD47rnmkxfJJRlJoTHIqMDFr2yJDuHjh0XlnIlyKPQCfATXOdq-DYDzH3IiqyB26WHJ7Z9iO8immPZdMuP_AD3FVhK03tTJ3sP98DSTqJ3Ck',
      alt: 'Arquitetura Haussmanniana',
      title: 'Dia 3 - 01/07',
      link: 'https://drive.google.com/drive/folders/1LFZphcYXh30zg7nzcmW7mXw0mgjQNQ4Q?usp=drive_link'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxjiptkke0O2S5DxfQKF6piK4uZfcA4JI_A5KW0kqJsjiZYbBUNYCbDghrBEWFoIrlWxDve2gNmKiQ-9FO4838FUTk5nrsESMXjzZvzspzek4qolHNggbGvLc44wjpYNAJ2PFKHCS_3lMPqoT46vftabRQCuDcE4ZxSivgoCTw7eo68Z20R4oBRaWoKnaRXnd_oaBClF_hoZ1Kk43O_8f0f6FYSm-3NWpAcjGETNx6mx3zib5xNi086WcOpS0e9lGncKhwaPiLxbY',
      alt: 'Sena e Torre Eiffel ao anoitecer',
      title: 'Dia 4 - 02/07',
      link: 'https://drive.google.com/drive/folders/12m47nkKbDAA2brnOAeyQq3ezNQ1ix4vo?usp=drive_link'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDng6KwJSNE2MqDyX90Ru9uh09wRrQa2ONqceecOIFlC2n3nUDOSnLm46gJwJd1OFysHffqySUpM4om7p7VRNuBxFy-93xaqRCxDY_SBFLOtx_qhrxhE8Q7iV3yxhHyCo5qaANUJNWEsSDzqoVFfxTvgqB5H-bBf-Ma68ZdHIXa281aSLZFkWnz65CBuICj2PHfbdn96s6a7Cqt7UUndCmil7Q1pal2-omBV5qhGDp3BDnmRDbU3xKm9NemhJ_oFRGKVkpbrAoUM6w',
      alt: 'Gastronomia em Paris',
      title: 'Dia 5 - 03/07',
      link: 'https://drive.google.com/drive/folders/1pBH8PBLDoWtsxPKqYHHktimHH3gJ6shL?usp=drive_link'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpTACkBo2Hs6ScwOQuNv9A60tZEvIVBjz9NyO6dG7JNj_4s-li56VZ9mSis7KXOdl3eoXytJi0gHYGJZPPaANjRQSJqwix3fpJ9Hbc9WK7RA_BCDcetnDUznYOkqNKa8kkwwKylzLZAL0Tr0ZjzotKRlmUf13JlK_996Z6oiHIBvWABTR1yMsQ9XYeUf8L2SegdGVUhjTyjiqs1t5v_72k6E_TPBW-4m-DhdyuPaSdVXw6qY_SmI9EQxDbjf9OLfYEZY8CeVSKkNg',
      alt: 'Taças de champagne',
      title: 'Dia 6 - 04/07',
      link: 'https://drive.google.com/drive/folders/1cudsaNrqvneNCV9GgMjvxZT9w5_QErLq?usp=drive_link'
    }
  ];

  return (
    <div className="animate-fade-in-up w-full pb-28 md:pb-16 pt-8">
      {/* Header Section */}
      <section className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div className="max-w-2xl">
          <h1 className="page-title text-primary mb-4">
            Galeria
          </h1>
          <p className="text-sm md:text-base font-serif text-on-surface-variant leading-relaxed">
            Uma coleção curada de momentos do Luxe Lab Paris. Explore a moda, a arquitetura e a gastronomia que definem nossa experiência exclusiva na Cidade Luz.
          </p>
        </div>
        <a 
          className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded border border-primary px-6 py-3 text-xs font-serif uppercase tracking-widest hover:bg-surface hover:text-primary transition-colors whitespace-nowrap active:scale-95 duration-200" 
          href="https://drive.google.com/drive/folders/1pbX3tHmXJbjC_S-q7p7T9EItFFa5NtSI" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 0' }}>
            folder_open
          </span>
          <span>Acessar pasta principal</span>
        </a>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="masonry-grid">
        {galleryItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="masonry-item rounded-lg overflow-hidden border border-outline-variant/30 group relative cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 block"
          >
            <img
              alt={item.alt}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              src={item.url}
              style={{ filter: 'sepia(1)' }}
              loading="lazy"
            />
            {/* Overlay Text and CTA */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 transition-opacity duration-300">
              <h3 className="text-white font-serif text-lg font-bold mb-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-white text-[12px] uppercase tracking-widest font-semibold font-serif">
                <span>Acessar</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
