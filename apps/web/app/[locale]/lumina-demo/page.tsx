'use client';

import { LuminaInteractiveList } from '@repo/design-system';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function LuminaDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header overlay on top of the slider */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="text-white text-xl font-light hover:text-gray-300 transition-colors duration-300">
            Velgance Models
          </Link>
        </div>
        
        <Link 
          href="/models/application" 
          className="text-white px-6 py-3 font-medium hover:text-gray-300 transition-colors duration-300"
        >
          Get Scouted
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-screen w-80 bg-white z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl`}>
        <div className="p-8">
          <div className="mb-12">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-light text-black hover:text-gray-600 transition-colors duration-300"
            >
              X
            </button>
          </div>
          
          <nav className="space-y-6">
            <Link 
              href="/" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/models" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Models
            </Link>
            <Link 
              href="/portfolio" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Lumina Interactive List Component */}
      <LuminaInteractiveList />
    </div>
  );
}
