'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Model } from '../../../../lib/models';
import { ArrowLeft, Instagram, Mail, MapPin, Ruler, Weight, X } from 'lucide-react';
import PDFGenerator from './pdf-generator';

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

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default function ModelPageClient({ params }: Props) {
  const router = useRouter();
  const [model, setModel] = useState<Model | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modelId, setModelId] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setModelId(resolvedParams.id);
    };
    getParams();
  }, [params]);

  useEffect(() => {
    if (modelId) {
      fetchModel(modelId);
    }
  }, [modelId]);

  const fetchModel = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/models/${id}`);
      if (response.ok) {
        const data = await response.json();
        setModel(data);
      } else {
        console.error('Failed to fetch model');
        router.push('/models');
      }
    } catch (error) {
      console.error('Error loading model:', error);
      router.push('/models');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!model) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-black mb-4" style={{ fontFamily: 'serif' }}>
            Modello non trovato
          </h1>
          <button
            onClick={() => router.push('/models')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Torna ai modelli
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-6 flex items-center justify-between hidden lg:flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/models')}
              className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna ai modelli
            </button>
          </div>
        </div>
      </div>

      {/* Model Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        {/* Mobile Layout - Image First */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Image */}
          <div className="relative w-full overflow-hidden cursor-pointer" onClick={() => {
            console.log('Mobile image clicked');
            setSelectedImage(model.image);
          }}>
            <img
              src={model.image}
              alt={`${model.firstName} ${model.lastName}`}
              className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Mobile Name - After Image */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
              {model.firstName} {model.lastName}
            </h1>
          </div>

          {/* Mobile Stats */}
          <div className="space-y-6 text-center">

            {/* Physical Stats */}
            {(model.height || model.weight || model.location) && (
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-black italic" style={{ fontFamily: 'serif' }}>
                  Dettagli
                </h2>
                
                <div className="space-y-3">
                  {model.height && (
                    <div className="flex items-center justify-center gap-3">
                      <Ruler className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{model.height}</span>
                    </div>
                  )}

                  {model.weight && (
                    <div className="flex items-center justify-center gap-3">
                      <Weight className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{model.weight}</span>
                    </div>
                  )}

                  {model.location && (
                    <div className="flex items-center justify-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{model.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* PDF Download Button */}
            <div className="flex justify-center mt-8">
              <PDFGenerator model={model} />
            </div>

          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left Side - Model Info */}
          <div className="space-y-8">
            {/* Desktop Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
                {model.firstName} {model.lastName}
              </h1>
            </div>


            {/* Physical Stats */}
            {(model.height || model.weight || model.location) && (
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-black italic" style={{ fontFamily: 'serif' }}>
                  Dettagli
                </h2>
                
                <div className="space-y-3">
                  {model.height && (
                    <div className="flex items-center gap-3">
                      <Ruler className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{model.height}</span>
                    </div>
                  )}

                  {model.weight && (
                    <div className="flex items-center gap-3">
                      <Weight className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{model.weight}</span>
                    </div>
                  )}

                  {model.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{model.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* PDF Download Button */}
            <div className="mt-8">
              <PDFGenerator model={model} />
            </div>

          </div>

          {/* Right Side - Model Image */}
          <div className="-mr-8">
            <div className="relative h-full min-h-[600px] overflow-hidden cursor-pointer" onClick={() => {
              console.log('Desktop image clicked');
              setSelectedImage(model.image);
            }}>
              <img
                src={model.image}
                alt={`${model.firstName} ${model.lastName}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          </div>
        </div>

        {/* Bento Grid - More Images - Only show if we have additional images */}
        {model.images && model.images.length > 0 && (
          <div className="mt-20">
            {/* Mobile Layout - No Grid */}
            <div className="block md:hidden space-y-4">
              {model.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden group cursor-pointer border border-gray-200"
                  onClick={() => {
                    console.log('Mobile image clicked:', image);
                    setSelectedImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${model.firstName} ${model.lastName} - Photo ${index + 1}`}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Desktop Layout - Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {model.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden group cursor-pointer border border-gray-200"
                  onClick={() => {
                    console.log('Grid image clicked:', image);
                    setSelectedImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${model.firstName} ${model.lastName} - Photo ${index + 1}`}
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
            console.log('Modal background clicked, closing modal');
            setSelectedImage(null);
          }}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt={`${model.firstName} ${model.lastName}`}
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
