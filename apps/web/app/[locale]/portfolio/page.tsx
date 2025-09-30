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

      {/* Magazine Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Magazine 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://static.wixstatic.com/media/4da6c5_5c9a090c2f5142dfb5b36e14a7c34b86~mv2.png"
                  alt="Magazine 1"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg">Magazine 1</h3>
                  <p className="text-white/80 text-sm">Magazine Feature</p>
                </div>
              </div>
            </div>

            {/* Magazine 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://static.wixstatic.com/media/4da6c5_7153cc635edb443785807d168550e2e5~mv2.png"
                  alt="Magazine 2"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg">Magazine 2</h3>
                  <p className="text-white/80 text-sm">Editorial Spread</p>
                </div>
              </div>
            </div>

            {/* Additional placeholders to showcase a grid */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://static.wixstatic.com/media/4da6c5_eb0d8957ca4140da80d1c51ed53b7d1c~mv2.png"
                  alt="Portfolio Image"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg">Magazine Feature</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/models" className="text-black hover:text-gray-700 transition-colors text-lg">
              Scopri i nostri talenti →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


