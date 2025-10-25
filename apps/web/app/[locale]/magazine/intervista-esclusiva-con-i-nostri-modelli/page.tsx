import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intervista esclusiva con i nostri modelli - Velgance Agency',
  description: 'Le storie personali e i sogni dei talenti che lavorano con Velgance Agency.',
};

export default function IntervistaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1602743297108-4c9061884285?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-white" />
              <span className="text-sm text-white/80 uppercase tracking-wide">Interviste</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Intervista esclusiva con i nostri modelli
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">8 Gennaio 2025</span>
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
            Torna al Magazine
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We met some of our most talented models to discover their 
              stories, their dreams and what it means for them to work in the fashion world.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              The Stories Behind the Faces
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every model has a unique story to tell. From their origins to their 
              aspirations, we discover what drives them to pursue a career in fashion 
              and how Velgance Agency has helped them realize their dreams.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Dreams and Aspirations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our models share their deepest ambitions, from future 
              projects to collaborations they dream of achieving. Each interview 
              reveals the passion and dedication that characterizes them.
            </p>

            <h2 className="text-3xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              The Velgance Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We discover how the agency has influenced their careers, the opportunities 
              they have received and the work environment that surrounds them. The testimonials 
              reveal Velgance's unique approach to supporting talent.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
                The Velgance Family
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These interviews show how Velgance Agency is not just an agency, 
                but a family that supports and nurtures emerging talent, creating 
                unique opportunities in the fashion world.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
