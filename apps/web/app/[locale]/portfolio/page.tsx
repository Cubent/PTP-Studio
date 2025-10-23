import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Velgance Agency',
  description: 'Scopri il nostro portfolio di modelli e talenti rappresentati da Velgance Agency.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-xl font-medium text-black mb-3" style={{ fontFamily: 'serif' }}>
              Portfolio
            </h1>
            <p className="text-sm text-gray-600">
              Scopri le più recenti collaborazioni
            </p>
          </div>
        </div>
      </div>

      {/* Main Video Section */}
      <div className="py-16 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dbr1nfgbr&public_id=6c6b45acdd46a3ee_1_wthyel&profile=cld-looping&controls=false"
              width="640"
              height="360" 
              style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Additional Videos Grid */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Video 1 */}
            <div className="border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbr1nfgbr&public_id=9a03151d5c1286bd_1_qgavy0&profile=cld-looping&controls=false"
                width="100%"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '16/9' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-black">VIVIENNE WESTWOOD</h3>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbr1nfgbr&public_id=90d4fd9ecdf6bcbf_xhi9jx&profile=cld-looping&controls=false"
                width="100%"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '16/9' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-black">PRADA</h3>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbr1nfgbr&public_id=8200793bb684c596_cgdnfz&profile=cld-looping&controls=false"
                width="100%"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '16/9' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-black">MIU MIU</h3>
              </div>
            </div>
            
            {/* Video 4 */}
            <div className="border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbr1nfgbr&public_id=bfee11d76a218ee9_o85sa5&profile=cld-looping&controls=false"
                width="100%"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '16/9' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-black">MIU MIU | NOBODY HOME</h3>
              </div>
            </div>
            
            {/* Video 5 */}
            <div className="border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbr1nfgbr&public_id=a9449f34cae8a97e_io0ou3&profile=cld-looping&controls=false"
                width="100%"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '16/9' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-black">PRADA | JIA LING</h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
