'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function PartnersPage() {
  const [gridColumns, setGridColumns] = useState('repeat(2, minmax(0, 1fr))');

  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth >= 768) {
        setGridColumns('repeat(5, minmax(0, 1fr))');
      } else {
        setGridColumns('repeat(2, minmax(0, 1fr))');
      }
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <>
      <Head>
        <title>Partners - Velgance Agency</title>
        <meta name="description" content="I nostri partner e collaborazioni nel settore della moda e dell'intrattenimento." />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-2xl font-medium text-black mb-3" style={{ fontFamily: 'serif' }}>
              Clienti
            </h1>
            <p className="text-sm text-gray-600">
              Fidati da oltre 200+ marchi di moda europei e case di moda internazionali
            </p>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-2">
          <div 
            className="grid gap-0 partners-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: gridColumns,
              gap: '0px'
            }}
          >
            {/* Generate multiple rows - 2 columns on mobile, 5 on desktop */}
            {Array.from({ length: 40 }, (_, index) => (
              <div 
                key={index} 
                className="border border-gray-300 min-h-[150px] bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                style={{ minHeight: '150px', height: '150px' }}
              >
                {index === 0 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-640x400.png" 
                    alt="Gucci" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 1 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/04/Louis-Vuitton-logo-768x432.png" 
                    alt="Louis Vuitton" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 2 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2016/11/Chanel-logo-640x360.png" 
                    alt="Chanel" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 3 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2018/10/Hublot-logo-768x432.png" 
                    alt="Hublot" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 4 && (
                  <img 
                    src="https://www.motocrossaddiction.com/wp-content/uploads/2017/02/rai_sport_riola_sardo.jpg" 
                    alt="RAI Sport" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 5 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2019/08/New-York-Times-Logo-1857%E2%80%93now-640x362.jpg" 
                    alt="New York Times" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 6 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2022/08/Zara-log%D0%BE-768x432.png" 
                    alt="Zara" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 7 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/05/Miu-Miu-logo-768x432.png" 
                    alt="Miu Miu" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 8 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/03/Audi-logo-768x576.png" 
                    alt="Audi" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 9 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/04/Under-Armour-logo-768x484.png" 
                    alt="Under Armour" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 10 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2016/11/Coach-logo-640x267.png" 
                    alt="Coach" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 11 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2016/10/ACDC-Logo-640x400.png" 
                    alt="AC/DC" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 12 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/02/Dolce-Gabbana-Logo-768x432.png" 
                    alt="Dolce & Gabbana" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 13 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2022/06/Logo-Giorgio-Armani-768x432.png" 
                    alt="Giorgio Armani" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 14 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/02/MINI-Logo-768x432.png" 
                    alt="MINI" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 15 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/03/Columbia-logo-640x384.png" 
                    alt="Columbia" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 16 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/09/James-bond-Logo-640x400.png" 
                    alt="James Bond" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 17 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2023/10/X-Logo-500x281.png" 
                    alt="X (Twitter)" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 18 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/07/Black-Flag-Logo-768x483.png" 
                    alt="Black Flag" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 19 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo-640x400.png" 
                    alt="Logitech" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 20 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/04/Vertu-Logo-640x360.png" 
                    alt="Vertu" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 21 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/09/Belkin-Logo-640x400.png" 
                    alt="Belkin" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 22 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2017/05/Playboy-Logo-768x704.png" 
                    alt="Playboy" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 23 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo-640x360.png" 
                    alt="Reebok" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 24 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo-666x333.png" 
                    alt="Puma" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 25 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-768x432.png" 
                    alt="Nike" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 26 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/03/Bad-Bunny-Logo-640x400.png" 
                    alt="Bad Bunny" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 27 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/11/logo-Converse-768x432.png" 
                    alt="Converse" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 28 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2017/02/HP-Log%D0%BE-768x432.png" 
                    alt="HP" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 29 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/04/Gillette-Logo-640x360.png" 
                    alt="Gillette" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 30 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/03/Rode-Logo-768x432.png" 
                    alt="Rode" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 31 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/11/Hugo-Boss-Logo-768x432.png" 
                    alt="Hugo Boss" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 32 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2020/03/nissan-logo-768x513.png" 
                    alt="Nissan" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 33 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/05/Bose-logo-768x469.png" 
                    alt="Bose" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 34 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/05/Air-Jordan-Jumpman-logo-768x432.png" 
                    alt="Air Jordan" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 35 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2018/09/Apple-Logo-768x432.png" 
                    alt="Apple" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 36 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2022/11/Tecate-Logo-768x432.png" 
                    alt="Tecate" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 37 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2018/03/BAPE-Logo-768x432.png" 
                    alt="BAPE" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 38 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/02/Peugeot-logo-768x512.png" 
                    alt="Peugeot" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
                {index === 39 && (
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2021/04/WWF-logo-768x432.png" 
                    alt="WWF" 
                    className="max-w-[100px] max-h-[80px] object-contain"
                    style={{ maxWidth: '100px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
