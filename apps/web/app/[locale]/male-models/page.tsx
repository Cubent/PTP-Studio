'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// Define Model type locally
interface Model {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  igProfileLink?: string;
  image: string;
  height?: string;
  weight?: string;
  location?: string;
  gender: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function MaleModelsPage() {
  const [models, setModels] = useState<Model[]>([]);
  const [allModels, setAllModels] = useState<Model[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [showStats, setShowStats] = useState<string | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      setIsLoading(true);
      const urlParams = new URLSearchParams(window.location.search);
      const search = urlParams.get('search');
      
      try {
        const url = search ? `/api/models?search=${encodeURIComponent(search)}&gender=male` : '/api/models?gender=male';
        const response = await fetch(url);
        
        if (response.ok) {
          const data = await response.json();
          setModels(data);
          setAllModels(data);
          if (search) {
            setSearchQuery(search);
          }
        } else {
          console.error('Failed to fetch models');
        }
      } catch (error) {
        console.error('Error loading models:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadModels();
  }, []);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    try {
      const url = query.trim() ? `/api/models?search=${encodeURIComponent(query)}&gender=male` : '/api/models?gender=male';
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setModels(data);
        setAllModels(data);
      } else {
        console.error('Failed to search models');
      }
    } catch (error) {
      console.error('Error searching models:', error);
    }
  };

  const handleLetterFilter = (letter: string) => {
    setSelectedLetter(letter);
    if (letter === '') {
      setModels(allModels);
    } else {
      const filtered = allModels.filter(model => 
        model.firstName.toLowerCase().startsWith(letter.toLowerCase())
      );
      setModels(filtered);
    }
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://static.wixstatic.com/media/4da6c5_63ff0dc055b0479c9c85dbc2af0b9a3d~mv2.png)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Talento Maschile
            </h1>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
              Scopri i talenti maschili della nostra agenzia
            </p>
          </div>
        </div>
      </div>

      {/* Letter Filter */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <button
              onClick={() => handleLetterFilter('')}
              className={`px-2 py-1 text-sm font-light transition-all duration-200 ${
                selectedLetter === '' 
                  ? 'text-black font-medium' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Tutti
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => handleLetterFilter(letter)}
                className={`px-2 py-1 text-sm font-light transition-all duration-200 ${
                  selectedLetter === letter 
                    ? 'text-black font-medium' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Models Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
            </div>
          ) : models.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nessun modello maschile trovato</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
              {models.map((model) => (
                <Link
                  key={model.id}
                  href={`/models/${model.id}`}
                  className="cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-3">
                    <img
                      src={model.image}
                      alt={`${model.firstName} ${model.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-light text-gray-600 text-left italic" style={{ fontFamily: 'serif' }}>
                      {model.firstName} {model.lastName}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowStats(showStats === model.id ? null : model.id);
                      }}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  {showStats === model.id && (
                    <div className="mb-2 p-3 bg-gray-50 rounded text-sm text-gray-600">
                      <div className="space-y-1">
                        {model.height && <div><span className="font-medium">Altezza:</span> {model.height}</div>}
                        {model.weight && <div><span className="font-medium">Peso:</span> {model.weight}</div>}
                        {model.location && <div><span className="font-medium">Località:</span> {model.location}</div>}
                        {model.igProfileLink && (
                          <div>
                            <span className="font-medium">Instagram:</span>{' '}
                            <a href={model.igProfileLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                              @{model.igProfileLink.split('/').pop()}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="w-full h-px bg-gray-200"></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
