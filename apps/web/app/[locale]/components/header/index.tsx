'use client';

import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import type { Dictionary } from '@repo/internationalization';

type HeaderProps = {
  dictionary: Dictionary;
};

export const Header = ({ dictionary }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Search functionality
  useEffect(() => {
    const searchModels = async () => {
      if (searchQuery.trim()) {
        try {
          const response = await fetch(`/api/models?search=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(searchModels, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <>
      <div className="relative bg-white py-8 px-4">
        {/* Top Left Hamburger Menu */}
        <div className="absolute top-4 left-8 z-20 flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-gray-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="text-black text-xl font-normal hover:text-gray-600 transition-colors duration-300">
            Velgance Models
          </Link>
        </div>

        {/* Top Right Buttons */}
        <div className="absolute top-4 right-8 z-20 flex items-center gap-1 sm:gap-4">
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-black hover:text-gray-600 transition-colors duration-300 p-2"
          >
            <Search className="w-5 h-5" />
          </button>
          
          {/* Get Scouted Button */}
          <Link 
            href="/models/application" 
            className="text-black px-2 sm:px-4 py-2 text-sm font-medium hover:text-gray-600 transition-colors duration-300"
          >
            Get Scouted
          </Link>
        </div>

        {/* Sidebar Menu - Smaller and closer to right */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="mb-8">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              >
                X
              </button>
            </div>
            
            <nav className="space-y-4">
              {/* Models with Submenu */}
              <div>
                <div className="text-lg font-light text-black">
                  Models
                </div>
                
                {/* Models Submenu */}
                <div className="ml-3 mt-2 space-y-2">
                  {/* Men Submenu */}
                  <div>
                    <div className="text-base font-light text-gray-700">
                      Men
                    </div>
                    <div className="ml-3 mt-1 space-y-1">
                      <Link 
                        href="/models/men/mainboard" 
                        className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Mainboard
                      </Link>
                      <Link 
                        href="/models/men/new-faces" 
                        className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        New Faces
                      </Link>
                    </div>
                  </div>
                  
                  {/* Women Submenu */}
                  <div>
                    <div className="text-base font-light text-gray-700">
                      Women
                    </div>
                    <div className="ml-3 mt-1 space-y-1">
                      <Link 
                        href="/models/women/mainboard" 
                        className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Mainboard
                      </Link>
                      <Link 
                        href="/models/women/new-faces" 
                        className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        New Faces
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Links */}
              <Link 
                href="/creators" 
                className="block text-lg font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Creators
              </Link>
              
              <Link 
                href="/chi-siamo" 
                className="block text-lg font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              <Link 
                href="/portfolio" 
                className="block text-lg font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              
              <Link 
                href="/contact" 
                className="block text-lg font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className="border-t border-gray-200 mt-8 pt-4">
            </div>
            <div className="mt-3">
              <div className="inline-flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-lg">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="text-xs text-gray-800 font-medium">
                  CEST {new Date().toLocaleString('en-US', { timeZone: 'Europe/Rome', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-page Search Dropdown */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-white z-50">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-light text-black">Search Models</h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-2xl font-light text-black hover:text-gray-600 transition-colors duration-300"
                >
                  X
                </button>
              </div>
              
              {/* Search Input */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search for models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-b border-black focus:outline-none focus:border-gray-400 bg-transparent text-black"
                  autoFocus
                />
              </div>
              
              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery && searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((model) => (
                      <Link
                        key={model.id}
                        href={`/models/${model.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <img
                          src={model.image}
                          alt={`${model.firstName} ${model.lastName}`}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-lg text-black">
                            {model.firstName} {model.lastName}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {model.age && `${model.age} years old`}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No models found</p>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Start typing to search for models</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};