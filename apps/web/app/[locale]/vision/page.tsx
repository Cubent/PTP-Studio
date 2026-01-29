'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function VisionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Left - Logo and Title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img 
              src="/Agency Logo Black.svg" 
              alt="PushToProd Studio Logo" 
              className="h-10 w-auto"
            />
            <span className="text-black text-xl font-medium">
              PushToProd Studio
            </span>
          </Link>

          {/* Right - Navigation */}
          <div className="flex items-center gap-6">
            <Link 
              href="/#latest-work" 
              className="text-black font-medium hover:text-gray-600 transition-colors duration-300 hidden md:block"
            >
              Projects
            </Link>
            <Link 
              href="/vision" 
              className="text-black font-medium hover:text-gray-600 transition-colors duration-300 hidden md:block"
            >
              Our Vision
            </Link>
            <Link 
              href="/contact" 
              className="text-black font-medium hover:text-gray-600 transition-colors duration-300 hidden md:block"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8">
          <div className="mb-12">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-light text-black hover:text-gray-600 transition-colors duration-300"
            >
              X
            </button>
          </div>
          
          <nav className="space-y-6">
            <Link 
              href="/creators" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Creators
            </Link>
            
            <Link 
              href="/partners" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            
            <Link 
              href="/portfolio" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            
            <Link 
              href="/contact" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              href="/vision" 
              className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Vision
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content - Add padding top for fixed header */}
      <div className="pt-20">
      {/* Introduction Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 100 }}>
            <span style={{ backgroundColor: '#fef08a', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>Since 2024</span> we transform ideas into digital reality. We are a professional web agency specialized in full-stack applications, mobile apps, and digital platforms, connecting innovative solutions with businesses worldwide.
          </h2>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>50+</div>
              <div className="text-gray-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>30+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>100%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-2" style={{ fontFamily: 'serif' }}>24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Web Development */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
                    Web Development
                  </h3>
                </div>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mobile Apps"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
                    Mobile Apps
                  </h3>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="UI/UX Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
                    UI/UX Design
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 100 }}>
                Our team consists of passionate developers and designers with years of <span style={{ backgroundColor: '#fef08a', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>experience in web development, mobile apps, and digital innovation.</span> Each member brings unique skills and a shared dedication 
                to excellence and the success of our clients.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}