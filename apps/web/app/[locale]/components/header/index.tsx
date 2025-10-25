'use client';

import { Menu, X, Search, Plus, Minus } from 'lucide-react';
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
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);

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
      <style jsx>{`
        .mobile-menu {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          height: 100vh !important;
          width: 320px !important;
          background-color: white !important;
          z-index: 30 !important;
          transform: translateX(-100%) !important;
          transition: transform 0.3s ease-in-out !important;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1) !important;
        }
        
        .mobile-menu.open {
          transform: translateX(0) !important;
        }
        
        .submenu-container {
          margin-left: 0.75rem !important;
          margin-top: 0.5rem !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.5rem !important;
        }
        
        .submenu-section {
          margin-bottom: 1rem !important;
        }
        
        .submenu-section-title {
          font-size: 1rem !important;
          font-weight: 300 !important;
          color: #374151 !important;
          margin-bottom: 0.5rem !important;
        }
        
        .submenu-items {
          margin-left: 0.75rem !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.5rem !important;
        }
        
        .submenu-line {
          position: relative !important;
        }
        
        .mobile-menu-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
          z-index: 20 !important;
        }
        
        .search-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-color: white !important;
          z-index: 50 !important;
        }
        
        .header-container {
          position: relative !important;
          background-color: white !important;
          padding: 2rem 1rem !important;
        }
        
        @media (min-width: 1024px) {
          .header-container {
            padding-bottom: 3rem !important;
          }
        }
        
        .menu-button {
          position: absolute !important;
          top: 1.5rem !important;
          left: 2rem !important;
          z-index: 20 !important;
          display: flex !important;
          align-items: center !important;
          gap: 1rem !important;
        }
        
        .right-buttons {
          position: absolute !important;
          top: 1.25rem !important;
          right: 2rem !important;
          z-index: 20 !important;
          display: flex !important;
          align-items: center !important;
          gap: 0.25rem !important;
        }
        
        @media (max-width: 768px) {
          .menu-button {
            top: 1.25rem !important;
            left: 1rem !important;
            gap: 0.75rem !important;
          }
          
          .right-buttons {
            top: 1rem !important;
            right: 1rem !important;
            gap: 0.25rem !important;
          }
        }
        
        @media (min-width: 640px) {
          .right-buttons {
            gap: 1rem !important;
          }
        }
      `}</style>
      <div className="relative bg-white py-8 px-4 header-container">
        {/* Top Left Hamburger Menu */}
        <div className="menu-button">
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
        <div className="right-buttons">
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

        {/* Sidebar Menu - Like homepage */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="p-8">
            <div className="mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              >
                X
              </button>
            </div>
            
            <nav className="space-y-4">
              {/* Models Dropdown */}
              <div>
                <button
                  onClick={() => setIsModelsOpen(!isModelsOpen)}
                  className="flex items-center justify-between w-full text-lg font-light text-black hover:text-gray-600 transition-colors duration-300 py-2"
                >
                  <span>Models</span>
                  {isModelsOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
              
                {isModelsOpen && (
                  <div className="ml-4 space-y-2">
                    {/* Men Section */}
                    <div>
                      <button
                        onClick={() => setIsMenOpen(!isMenOpen)}
                        className="flex items-center justify-between w-full text-base font-light text-gray-600 hover:text-black transition-colors duration-300 py-1"
                      >
                        <span>Men</span>
                        {isMenOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </button>
                      {isMenOpen && (
                        <div className="ml-4 space-y-1">
                          <Link 
                            href="/models/men/mainboard" 
                            className="block text-sm text-gray-600 hover:text-black transition-colors duration-300 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Mainboard
                          </Link>
                    <Link
                            href="/models/men/new-faces" 
                            className="block text-sm text-gray-600 hover:text-black transition-colors duration-300 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            New Faces
                          </Link>
                        </div>
                      )}
                      </div>
                    
                    {/* Women Section */}
                    <div>
                      <button
                        onClick={() => setIsWomenOpen(!isWomenOpen)}
                        className="flex items-center justify-between w-full text-base font-light text-gray-600 hover:text-black transition-colors duration-300 py-1"
                      >
                        <span>Women</span>
                        {isWomenOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </button>
                      {isWomenOpen && (
                        <div className="ml-4 space-y-1">
                          <Link 
                            href="/models/women/mainboard" 
                            className="block text-sm text-gray-600 hover:text-black transition-colors duration-300 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Mainboard
                    </Link>
                    <Link
                            href="/models/women/new-faces" 
                            className="block text-sm text-gray-600 hover:text-black transition-colors duration-300 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            New Faces
                          </Link>
                        </div>
                      )}
                      </div>
                  </div>
                )}
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
                href="/partners" 
                className="block text-lg font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
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
              
              <Link 
                href="/chi-siamo" 
                className="block text-lg font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
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
          <div className="search-overlay">
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
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};