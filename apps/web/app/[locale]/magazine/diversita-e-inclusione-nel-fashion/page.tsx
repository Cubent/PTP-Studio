import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diversity and inclusion in fashion - Velgance Agency',
  description: 'How the fashion world is embracing diversity and promoting inclusivity.',
};

export default function DiversitaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop&crop=center)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-white" />
              <span className="text-sm text-white/80 uppercase tracking-wide">Diversity</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Diversity and inclusion in fashion
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">January 3, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/magazine"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Magazine
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              The fashion world is finally embracing diversity and inclusivity, 
              creating a more representative and authentic space for everyone.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Authentic Representation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Diversity in fashion is no longer just a trend, but a necessity. 
              Brands are including models of all ages, body types, ethnicities and 
              abilities, reflecting the richness and variety of the real world.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Inclusivity on the Runway
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fashion shows are becoming more inclusive, with designers embracing 
              diversity as a source of inspiration and creativity. Each model brings 
              their own story and personality, enriching the narrative of fashion.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Social Impact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Inclusivity in fashion has a profound impact on society, promoting 
              self-acceptance and celebration of differences. Positive messages 
              reach millions of people, influencing the perception of beauty.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              The Inclusive Future
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The movement towards inclusivity is redefining beauty standards 
              and creating opportunities for talents who were previously excluded. Fashion is 
              becoming a vehicle for positive social change.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
                Fashion for Everyone
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Diversity and inclusivity are transforming fashion into a more 
                representative and authentic industry. Every person deserves to see themselves 
                represented and celebrated in the fashion world, regardless of their background 
                or physical characteristics.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
