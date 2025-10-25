import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backstage: Behind the scenes of a fashion show - Velgance Agency',
  description: 'An exclusive behind the scenes look to discover what happens before models walk the runway.',
};

export default function BackstagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://i.postimg.cc/RCHsRPsS/Full-Body-Picture-5.png)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-white" />
              <span className="text-sm text-white/80 uppercase tracking-wide">Backstage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Backstage: Behind the scenes of a fashion show
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">January 12, 2025</span>
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
              Behind every perfect fashion show lies a world of preparation, coordination and 
              passion. We take you behind the scenes to discover the secrets of a fashion event.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              The Hours Before the Show
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Preparations begin hours before the audience takes their seats. Models arrive 
              well in advance for dress rehearsals, while the styling team works 
              meticulously on every detail. The atmosphere is electric, charged with expectations 
              and adrenaline.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              The Creative Team
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Behind every fashion show there is a team of professionals: stylists, make-up artists, 
              hair stylists, coordinators and assistants. Each has a specific role in 
              creating the perfect atmosphere. Coordination is essential to ensure 
              that everything proceeds smoothly.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Models and Preparation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Models are the beating heart of the fashion show. From walking rehearsals 
              to styling sessions, every moment is dedicated to perfecting the 
              performance. Concentration and professionalism are essential to 
              bring the designer's vision to life.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              The Adrenaline of the Moment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When the lights come on and the music starts, all the preparatory work 
              transforms into magic. Models walk with confidence, garments come 
              to life and the audience remains enchanted. It's the moment when art, fashion and 
              performance merge into a unique experience.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
                The Magic of Backstage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Backstage is where fashion dreams are born. It's a world of creativity, 
                dedication and passion that makes possible the magic we see on the runway. 
                Every detail, every moment of preparation, contributes to creating 
                an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
