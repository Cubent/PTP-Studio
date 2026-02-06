'use client';

import React from 'react';

export function LuminaInteractiveList() {
  return (
    <div className="h-[70vh] lg:h-[80vh] bg-[#f5f5f5] flex flex-col relative pt-16 lg:pt-0 overflow-hidden">
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange blob - left side */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 165, 0, 0.6) 0%, rgba(255, 200, 100, 0.3) 50%, transparent 70%)',
            top: '20%',
            left: '15%',
          }}
        ></div>
        
        {/* Purple blob - right side */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 112, 219, 0.5) 0%, rgba(180, 150, 230, 0.3) 50%, transparent 70%)',
            top: '10%',
            right: '10%',
          }}
        ></div>
        
        {/* Blue blob - bottom right */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(100, 149, 237, 0.4) 0%, rgba(135, 206, 250, 0.2) 50%, transparent 70%)',
            bottom: '5%',
            right: '20%',
          }}
        ></div>
        
        {/* Yellow/Peach blob - center */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-35 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 218, 185, 0.5) 0%, rgba(255, 228, 196, 0.3) 50%, transparent 70%)',
            top: '40%',
            left: '40%',
          }}
        ></div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between px-6 lg:px-16 py-0 lg:py-8 relative z-10">
        {/* Mobile Layout: Vertical Stack */}
        <div className="w-full lg:hidden flex flex-col justify-center gap-10">
          {/* Title */}
          <div className="w-full">
            <h1 className="text-[100px] sm:text-[120px] font-bold leading-none tracking-tight text-black">
              Creative Agency
            </h1>
          </div>

          {/* Tagline and Button */}
          <div className="w-full flex items-center justify-between gap-4">
            <p className="text-base font-normal text-black leading-tight flex-1">
              We design & develop<br />
              digital experiences that<br />
              drive real results.
            </p>
            
            <a
              href="/contact"
              className="bg-black hover:bg-gray-800 text-white font-medium px-4 py-3 rounded-lg text-xs transition-all duration-200 inline-flex items-center gap-2 flex-shrink-0"
            >
              <span className="w-6 h-6 rounded-md bg-[#f4c430] flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              START PROJECT
            </a>
          </div>
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center">
          <h1 className="text-[160px] xl:text-[200px] font-bold leading-none tracking-tight text-black">
            Creative Agency
          </h1>
        </div>

        <div className="hidden lg:flex lg:flex-col items-end gap-8">
          <div className="text-right max-w-md">
            <p className="text-xl lg:text-2xl font-normal text-black leading-tight">
              We design & develop<br />
              digital experiences that<br />
              drive real results.
            </p>
          </div>
          
          <a
            href="/contact"
            className="bg-[#f4c430] hover:bg-[#e5b520] text-black font-semibold px-8 py-6 rounded-lg text-base transition-all duration-200 inline-block"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </div>
  );
}
