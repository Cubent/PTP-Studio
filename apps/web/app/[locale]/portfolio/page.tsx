'use client';

import Link from 'next/link';

export default function PortfolioPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black mb-6 italic tracking-tight" style={{ fontFamily: 'serif' }}>
              I Nostri Lavori Più Recenti
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Collaborazioni con i più grandi brand internazionali
            </p>
          </div>
        </div>
      </div>

      {/* Magazine showcase removed as requested */}

      {/* Projects with improved layout */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Issey Miyake with image */}
            <article className="group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://eu.isseymiyake.com/cdn/shop/articles/HP_SS26_03_250625.jpg?v=1751362330"
                      alt="Issey Miyake – Spring/Summer 2026 Womenswear"
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-light italic text-black leading-tight" style={{ fontFamily: 'serif' }}>
                    Issey Miyake
                  </h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Spring/Summer 2026 Womenswear
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 Parigi</span>
                    <span>•</span>
                    <span>👤 Satoshi Kondo</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Un'esperienza avanguardista che unisce linee architettoniche e tessuti sperimentali. I nostri modelli hanno contribuito a valorizzare la visione innovativa di Issey Miyake, portando in scena uno stile etereo e dinamico.
                  </p>
                </div>
              </div>
            </article>

            {/* Rick Owens */}
            <article className="border-t border-gray-200 pt-16 group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-light italic text-black leading-tight" style={{ fontFamily: 'serif' }}>
                    Rick Owens
                  </h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Spring/Summer 2026 Womenswear
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 Parigi</span>
                    <span>•</span>
                    <span>👤 Rick Owens</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Un'estetica drammatica e potente, con silhouette scolpite e un'atmosfera visionaria. I nostri talenti hanno incarnato perfettamente lo spirito dark e sofisticato della collezione.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://assets.vogue.com/photos/685dbee16439abbd6f4e210f/master/w_1280%2Cc_limit/00001-rick-owens-spring-2026-menswear-credit-owenscorp.jpg"
                      alt="Rick Owens – Spring/Summer 2026 Womenswear"
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* Louis Vuitton */}
            <article className="border-t border-gray-200 pt-16 group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod/images/gyg3252-683017fe6131a.jpeg?resize=2048:*"
                      alt="Louis Vuitton – Spring/Summer 2026 Womenswear"
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-light italic text-black leading-tight" style={{ fontFamily: 'serif' }}>
                    Louis Vuitton
                  </h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Spring/Summer 2026 Womenswear
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 Parigi</span>
                    <span>•</span>
                    <span>👤 Nicolas Ghesquière</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Una passerella iconica che fonde tradizione e futuro. La nostra agenzia è stata parte di un momento chiave nella settimana della moda di Parigi, con look che celebrano l'eleganza senza tempo della maison.
                  </p>
                </div>
              </div>
            </article>

            {/* Bottega Veneta */}
            <article className="border-t border-gray-200 pt-16 group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-light italic text-black leading-tight" style={{ fontFamily: 'serif' }}>
                    Bottega Veneta
                  </h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Spring/Summer 2026
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 Milano</span>
                    <span>•</span>
                    <span>👤 Louise Trotter</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Minimalismo sofisticato e artigianalità italiana. I nostri modelli hanno interpretato una collezione che esalta l'equilibrio tra modernità e tradizione.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2025/09/28123912/download-25-1-800x1200.jpeg"
                      alt="Bottega Veneta – Spring/Summer 2026"
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* Vaquera */}
            <article className="border-t border-gray-200 pt-16 group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://assets.vogue.com/photos/68dae0ee32ba37d24efbe387/master/w_2560%2Cc_limit/00005-vaquera-spring-2026-ready-to-wear-credit-gorunway.jpg"
                      alt="Vaquera – Spring/Summer 2026 Womenswear"
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-light italic text-black leading-tight" style={{ fontFamily: 'serif' }}>
                    Vaquera
                  </h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Spring/Summer 2026 Womenswear
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 Parigi</span>
                    <span>•</span>
                    <span>👤 Patric DiCaprio & Bryn Taubensee</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Un progetto sperimentale e ribelle che rompe i canoni convenzionali della moda. I nostri talenti hanno dato volto a una visione giovane e anticonformista.
                  </p>
                </div>
              </div>
            </article>

            {/* Ferrari */}
            <article className="border-t border-gray-200 pt-16 group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-light italic text-black leading-tight" style={{ fontFamily: 'serif' }}>
                    Ferrari
                  </h3>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Spring/Summer 2026
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 Milano</span>
                    <span>•</span>
                    <span>👤 Rocco Iannone</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Eleganza sportiva e innovazione high-tech. I nostri modelli hanno interpretato l'anima dinamica e lussuosa di un brand simbolo dell'Italia nel mondo.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://vmagazine.com/wp-content/uploads/2025/09/Ferrari_LOOK_035.jpg"
                      alt="Ferrari – Spring/Summer 2026"
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* Closing statement */}
            <div className="border-t border-gray-200 pt-16">
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl italic" style={{ fontFamily: 'serif' }}>
                ✨ Ogni collaborazione è un tassello della nostra identità: creatività, professionalità e internazionalità. La nostra missione è dare vita alle visioni dei designer con volti e personalità uniche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
