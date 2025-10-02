'use client';

import Link from 'next/link';

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Introduction Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 100 }}>
            <span style={{ backgroundColor: '#fef08a', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>Dal 1998</span> trasformiamo il talento in opportunità. Siamo un'agenzia di modelli professionisti specializzata in sfilate, shooting, video commerciali e eventi aziendali, che connette volti unici con i più grandi brand internazionali.
          </h2>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1635776062360-af423602aff3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion background"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>25+</div>
              <div className="text-gray-200">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>500+</div>
              <div className="text-gray-200">Talenti Rappresentati</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>1000+</div>
              <div className="text-gray-200">Progetti Realizzati</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>50+</div>
              <div className="text-gray-200">Brand Partner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Offices Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Amsterdam */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                <img
                  src="https://image.parool.nl/169800417/width/2480/de-fashion-week-vorig-jaar"
                  alt="Amsterdam Fashion Week"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
                    Amsterdam
                  </h3>
                </div>
              </div>
            </div>

            {/* Milano */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                <img
                  src="https://fashionweekonline.com/wp-content/uploads/event-manager-uploads/event_banner/2025/04/PP6-2.jpg"
                  alt="Milano Fashion Week"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
                    Milano
                  </h3>
                </div>
              </div>
            </div>

            {/* London */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                <img
                  src="https://media.voguebusiness.com/photos/68ca88ec08e125dc4689a733/2:3/w_2560%2Cc_limit/LFW-cheatsheet-vogue-business-story.jpg"
                  alt="London Fashion Week"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
                    London
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 100 }}>
                Il nostro team è composto da professionisti appassionati con anni di <span style={{ backgroundColor: '#fef08a', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>esperienza nel settore della moda, dello spettacolo e degli eventi.</span> Ogni membro porta competenze uniche e una dedizione condivisa 
                verso l'eccellenza e il successo dei nostri talenti.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Entra in Contatto
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


