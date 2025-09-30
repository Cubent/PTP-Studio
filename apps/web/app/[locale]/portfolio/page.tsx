'use client';

import Link from 'next/link';

export default function PortfolioPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
              I Nostri Lavori Più Recenti
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Scopri i nostri lavori attraverso le riviste di settore e i progetti realizzati con i nostri talenti.
            </p>
          </div>
        </div>
      </div>

      {/* Magazine showcase removed as requested */}

      {/* Projects style list */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <div className="relative overflow-hidden rounded-lg shadow-sm">
                    <img
                      src="https://us.isseymiyake.com/cdn/shop/articles/IM_SS24_26.jpg?v=1730476428"
                      alt="Issey Miyake – Spring/Summer 2026 Womenswear"
                      className="w-full h-[320px] md:h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light italic text-black" style={{ fontFamily: 'serif' }}>Issey Miyake – Spring/Summer 2026 Womenswear</h3>
                  <div className="text-sm text-gray-500 mt-2">📍 Parigi, Collezioni Primavera/Estate 2026 · 👤 Direttore Creativo: Satoshi Kondo</div>
                  <p className="text-gray-700 mt-3">Un’esperienza avanguardista che unisce linee architettoniche e tessuti sperimentali. I nostri modelli hanno contribuito a valorizzare la visione innovativa di Issey Miyake, portando in scena uno stile etereo e dinamico.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-light italic text-black" style={{ fontFamily: 'serif' }}>Rick Owens – Spring/Summer 2026 Womenswear</h3>
              <div className="text-sm text-gray-500 mt-2">📍 Parigi, Collezioni Primavera/Estate 2026 · 👤 Designer: Rick Owens</div>
              <p className="text-gray-700 mt-3">Un’estetica drammatica e potente, con silhouette scolpite e un’atmosfera visionaria. I nostri talenti hanno incarnato perfettamente lo spirito dark e sofisticato della collezione.</p>
            </section>

            <section>
              <h3 className="text-2xl font-light italic text-black" style={{ fontFamily: 'serif' }}>Louis Vuitton – Spring/Summer 2026 Womenswear</h3>
              <div className="text-sm text-gray-500 mt-2">📍 Parigi, Collezioni Primavera/Estate 2026 · 👤 Direttore Creativo: Nicolas Ghesquière</div>
              <p className="text-gray-700 mt-3">Una passerella iconica che fonde tradizione e futuro. La nostra agenzia è stata parte di un momento chiave nella settimana della moda di Parigi, con look che celebrano l’eleganza senza tempo della maison.</p>
            </section>

            <section>
              <h3 className="text-2xl font-light italic text-black" style={{ fontFamily: 'serif' }}>Bottega Veneta – Spring/Summer 2026</h3>
              <div className="text-sm text-gray-500 mt-2">📍 Milano, Collezioni Primavera/Estate 2026 · 👤 Direttore Creativo: Louise Trotter</div>
              <p className="text-gray-700 mt-3">Minimalismo sofisticato e artigianalità italiana. I nostri modelli hanno interpretato una collezione che esalta l’equilibrio tra modernità e tradizione.</p>
            </section>

            <section>
              <h3 className="text-2xl font-light italic text-black" style={{ fontFamily: 'serif' }}>Vaquera – Spring/Summer 2026 Womenswear</h3>
              <div className="text-sm text-gray-500 mt-2">📍 Parigi, Collezioni Primavera/Estate 2026 · 👤 Designers: Patric DiCaprio e Bryn Taubensee</div>
              <p className="text-gray-700 mt-3">Un progetto sperimentale e ribelle che rompe i canoni convenzionali della moda. I nostri talenti hanno dato volto a una visione giovane e anticonformista.</p>
            </section>

            <section>
              <h3 className="text-2xl font-light italic text-black" style={{ fontFamily: 'serif' }}>Ferrari – Spring/Summer 2026</h3>
              <div className="text-sm text-gray-500 mt-2">📍 Milano, Collezioni Primavera/Estate 2026 · 👤 Direttore Creativo: Rocco Iannone</div>
              <p className="text-gray-700 mt-3">Eleganza sportiva e innovazione high-tech. I nostri modelli hanno interpretato l’anima dinamica e lussuosa di un brand simbolo dell’Italia nel mondo.</p>
            </section>

            <p className="text-gray-700 mt-8">✨ Ogni collaborazione è un tassello della nostra identità: creatività, professionalità e internazionalità. La nostra missione è dare vita alle visioni dei designer con volti e personalità uniche.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


