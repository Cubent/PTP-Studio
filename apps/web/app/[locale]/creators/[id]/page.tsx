'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Instagram, Mail, MapPin, X } from 'lucide-react';

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

// Helper function to extract Instagram username from URL
const getInstagramUsername = (url: string): string => {
  if (!url) return '';
  
  // Remove trailing slash and extract username
  const cleanUrl = url.replace(/\/$/, '');
  const parts = cleanUrl.split('/');
  
  // Find the username (usually the last non-empty part)
  for (let i = parts.length - 1; i >= 0; i--) {
    const part = parts[i];
    if (part && part !== 'instagram.com' && part !== 'www.instagram.com' && part !== 'https:' && part !== 'http:') {
      return part.replace('@', '');
    }
  }
  
  return '';
};

export default function CreatorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [creator, setCreator] = useState<Creator | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadCreator = async () => {
      if (!params.id) return;
      
      setIsLoading(true);
      
      try {
        const response = await fetch(`/api/creators/${params.id}`);
        
        if (response.ok) {
          const data = await response.json();
          setCreator(data);
        } else {
          console.error('Failed to fetch creator');
          router.push('/creators');
        }
      } catch (error) {
        console.error('Error loading creator:', error);
        router.push('/creators');
      } finally {
        setIsLoading(false);
      }
    };

    loadCreator();
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-black mb-4" style={{ fontFamily: 'serif' }}>
            Creator not found
          </h1>
          <button
            onClick={() => router.push('/creators')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Creators
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-6 flex items-center hidden lg:flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-start">
            <button
              onClick={() => router.push('/creators')}
              className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Creators
            </button>
          </div>
        </div>
      </div>

      {/* Creator Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        {/* Mobile Layout - Image First */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Image */}
          <div className="relative w-full overflow-hidden cursor-pointer" onClick={() => {
            setSelectedImage(creator.image);
          }}>
            <img
              src={creator.image}
              alt={`${creator.firstName} ${creator.lastName}`}
              className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Mobile Name - After Image */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
              {creator.firstName} {creator.lastName}
            </h1>
            <p className="text-lg text-gray-600 italic">
              {creator.profession.charAt(0).toUpperCase() + creator.profession.slice(1).replace('-', ' ')}
            </p>
          </div>

          {/* Mobile Details */}
          <div className="space-y-6 text-center">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="space-y-3">
                {creator.email !== 'collabwithsaniya@gmail.com' && (
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{creator.email}</span>
                  </div>
                )}

                {creator.phone && (
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-gray-700">{creator.phone}</span>
                  </div>
                )}

                {creator.location && (
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{creator.location}</span>
                  </div>
                )}

                {creator.igProfileLink && (
                  <div className="flex items-center justify-center gap-3">
                    <Instagram className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">
                      @{getInstagramUsername(creator.igProfileLink)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Experience */}
            {creator.experience && (
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-black italic" style={{ fontFamily: 'serif' }}>
                  Experience
                </h2>
                <p className="text-gray-700">{creator.experience}</p>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8 items-start">
            {/* Left Side - Creator Info */}
            <div className="space-y-8">
              {/* Desktop Name */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
                  {creator.firstName} {creator.lastName}
                </h1>
                <p className="text-lg text-gray-600">
                  {creator.profession.charAt(0).toUpperCase() + creator.profession.slice(1).replace('-', ' ')}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="space-y-3">
                  {creator.email !== 'collabwithsaniya@gmail.com' && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{creator.email}</span>
                    </div>
                  )}

                  {creator.phone && (
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700">{creator.phone}</span>
                    </div>
                  )}

                  {creator.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{creator.location}</span>
                    </div>
                  )}

                  {creator.igProfileLink && (
                    <div className="flex items-center gap-3">
                      <Instagram className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">
                        @{getInstagramUsername(creator.igProfileLink)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Experience */}
              {creator.experience && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-light text-black italic" style={{ fontFamily: 'serif' }}>
                    Experience
                  </h2>
                  <p className="text-gray-700">{creator.experience}</p>
                </div>
              )}
            </div>

            {/* Right Side - Creator Image */}
            <div className="-mr-8">
              <div className="relative h-full min-h-[600px] overflow-hidden cursor-pointer" onClick={() => {
                setSelectedImage(creator.image);
              }}>
                <img
                  src={creator.image}
                  alt={`${creator.firstName} ${creator.lastName}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid - More Images */}
        {creator.portfolio && creator.portfolio.length > 0 && (
          <div className="mt-20">
            {/* Mobile Layout - No Grid */}
            <div className="block md:hidden space-y-4">
              {creator.portfolio.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden group cursor-pointer border border-gray-200"
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${creator.firstName} ${creator.lastName} - Portfolio ${index + 1}`}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Desktop Layout - Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {creator.portfolio.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden group cursor-pointer border border-gray-200"
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${creator.firstName} ${creator.lastName} - Portfolio ${index + 1}`}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Images */}
        {creator.images && creator.images.length > 0 && (
          <div className="mt-20">
            {/* Mobile Layout - No Grid */}
            <div className="block md:hidden space-y-4">
              {creator.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden group cursor-pointer border border-gray-200"
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${creator.firstName} ${creator.lastName} - Gallery ${index + 1}`}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Desktop Layout - Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {creator.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden group cursor-pointer border border-gray-200"
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${creator.firstName} ${creator.lastName} - Gallery ${index + 1}`}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
          }}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt={`${creator.firstName} ${creator.lastName}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
