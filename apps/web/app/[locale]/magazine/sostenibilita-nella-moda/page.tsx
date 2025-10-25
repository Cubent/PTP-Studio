import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability in fashion - Velgance Agency',
  description: 'How the fashion industry is evolving towards more sustainable and responsible practices.',
};

export default function SostenibilitaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://i.postimg.cc/kgzRfyhC/Full-Body-Picture-6.png)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-white" />
              <span className="text-sm text-white/80 uppercase tracking-wide">Sustainability</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Sustainability in fashion
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">January 10, 2025</span>
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
              The fashion industry is undergoing a fundamental transformation, 
              shifting focus towards more sustainable and responsible practices towards 
              the environment and society.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Innovative Materials
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The search for sustainable materials is revolutionizing the industry. Fabrics 
              derived from food waste, biodegradable synthetic fibers and recycled 
              materials are opening new creative possibilities. Technological innovation 
              allows creating beautiful and functional garments without compromising the environment.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Circular Economy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The business model is evolving towards a circular economy where every 
              garment has an extended life cycle. Recycling, repair and 
              resale programs are becoming an integral part of business strategies, 
              reducing waste and maximizing product value.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Transparency and Traceability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Consumers are increasingly demanding transparency in production processes. 
              Blockchain technology and traceability systems allow to 
              follow the entire journey of a garment, from raw material to final 
              product, ensuring ethical and environmental standards.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Consumer Awareness
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Growing consumer awareness is driving change. 
              More and more people choose brands that share their values, 
              prioritizing quality, durability and positive social impact over 
              simple price.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
                The Sustainable Future
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainability in fashion is no longer an option, but a necessity. 
                The industry is proving that it's possible to create beauty and style 
                while respecting the environment and people. The future of fashion is green, 
                ethical and innovative.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
