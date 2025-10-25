'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Define Creator type locally
interface Creator {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  igProfileLink?: string;
  image: string;
  images: string[];
  profession: string;
  location?: string;
  experience?: string;
  portfolio: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function CreatorsPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [allCreators, setAllCreators] = useState<Creator[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [selectedProfession, setSelectedProfession] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [showStats, setShowStats] = useState<string | null>(null);

  useEffect(() => {
    const loadCreators = async () => {
      setIsLoading(true);
      const urlParams = new URLSearchParams(window.location.search);
      const search = urlParams.get('search');
      const profession = urlParams.get('profession');
      
      try {
        let url = '/api/creators';
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (profession) params.append('profession', profession);
        if (params.toString()) url += `?${params.toString()}`;
        
        const response = await fetch(url);
        
        if (response.ok) {
          const data = await response.json();
          setCreators(data);
          setAllCreators(data);
          if (search) {
            setSearchQuery(search);
          }
          if (profession) {
            setSelectedProfession(profession);
          }
        } else {
          console.error('Failed to fetch creators');
        }
      } catch (error) {
        console.error('Error loading creators:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCreators();
  }, []);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    try {
      let url = '/api/creators';
      const params = new URLSearchParams();
      if (query.trim()) params.append('search', query.trim());
      if (selectedProfession) params.append('profession', selectedProfession);
      if (params.toString()) url += `?${params.toString()}`;
      
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setCreators(data);
        setAllCreators(data);
      } else {
        console.error('Failed to search creators');
      }
    } catch (error) {
      console.error('Error searching creators:', error);
    }
  };

  const handleProfessionFilter = async (profession: string) => {
    setSelectedProfession(profession);
    try {
      let url = '/api/creators';
      const params = new URLSearchParams();
      if (searchQuery) params.append('search', searchQuery);
      if (profession) params.append('profession', profession);
      if (params.toString()) url += `?${params.toString()}`;
      
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setCreators(data);
        setAllCreators(data);
      } else {
        console.error('Failed to filter creators');
      }
    } catch (error) {
      console.error('Error filtering creators:', error);
    }
  };

  const handleLetterFilter = (letter: string) => {
    setSelectedLetter(letter);
    if (letter === '') {
      setCreators(allCreators);
    } else {
      const filtered = allCreators.filter(creator => 
        creator.firstName.toLowerCase().startsWith(letter.toLowerCase())
      );
      setCreators(filtered);
    }
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Get available letters (letters that have creators)
  const getAvailableLetters = () => {
    const availableLetters = new Set<string>();
    allCreators.forEach(creator => {
      const firstLetter = creator.firstName.charAt(0).toUpperCase();
      availableLetters.add(firstLetter);
    });
    return availableLetters;
  };

  // Get unique professions
  const getUniqueProfessions = () => {
    const professions = new Set<string>();
    allCreators.forEach(creator => {
      professions.add(creator.profession);
    });
    return Array.from(professions).sort();
  };

  const availableLetters = getAvailableLetters();
  const uniqueProfessions = getUniqueProfessions();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://static.wixstatic.com/media/4da6c5_36a1f433840c4d4097756971e9198e5a~mv2.png)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Creators
            </h1>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
              Discover our talented creators and professionals
            </p>
          </div>
        </div>
      </div>

      {/* Profession Filter */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => handleProfessionFilter('')}
              className={`px-3 py-1 text-sm font-light transition-all duration-200 ${
                selectedProfession === '' 
                  ? 'text-black font-medium border-b border-black' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              All
            </button>
            {uniqueProfessions.map((profession) => (
              <button
                key={profession}
                onClick={() => handleProfessionFilter(profession)}
                className={`px-3 py-1 text-sm font-light transition-all duration-200 ${
                  selectedProfession === profession 
                    ? 'text-black font-medium border-b border-black' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {profession.charAt(0).toUpperCase() + profession.slice(1).replace('-', ' ')}
              </button>
            ))}
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
              All
            </button>
            {alphabet.map((letter) => {
              const isAvailable = availableLetters.has(letter);
              return (
                <button
                  key={letter}
                  onClick={() => isAvailable ? handleLetterFilter(letter) : null}
                  disabled={!isAvailable}
                  className={`px-2 py-1 text-sm font-light transition-all duration-200 ${
                    !isAvailable 
                      ? 'text-gray-200 cursor-not-allowed' 
                      : selectedLetter === letter 
                        ? 'text-black font-medium' 
                        : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Creators Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
            </div>
          ) : creators.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No creators found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
              {creators.map((creator) => (
                <Link
                  key={creator.id}
                  href={`/creators/${creator.id}`}
                  className="cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-3">
                    <img
                      src={creator.image}
                      alt={`${creator.firstName} ${creator.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-light text-gray-600 text-left italic" style={{ fontFamily: 'serif' }}>
                      {creator.firstName} {creator.lastName}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowStats(showStats === creator.id ? null : creator.id);
                      }}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-2">
                    {/* Mobile: Separate lines */}
                    <div className="block sm:hidden">
                      <p className="text-sm text-gray-500 italic">
                        {creator.profession.charAt(0).toUpperCase() + creator.profession.slice(1).replace('-', ' ')}
                      </p>
                      {creator.igProfileLink && (
                        <p className="text-sm text-gray-400 mt-1">
                          {creator.igProfileLink.split('/').pop()}
                        </p>
                      )}
                    </div>
                    
                    {/* Desktop: Same line */}
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-500 italic">
                        {creator.profession.charAt(0).toUpperCase() + creator.profession.slice(1).replace('-', ' ')}
                        {creator.igProfileLink && (
                          <span className="ml-2 text-gray-400">
                            • {creator.igProfileLink.split('/').pop()}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  {showStats === creator.id && (
                    <div className="mb-2 p-3 bg-gray-50 rounded text-sm text-gray-600">
                      <div className="space-y-1">
                        {creator.location && <div><span className="font-medium">Location:</span> {creator.location}</div>}
                        {creator.experience && <div><span className="font-medium">Experience:</span> {creator.experience}</div>}
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

      {/* Footer Spacing */}
      <div className="h-16"></div>
    </div>
  );
}
