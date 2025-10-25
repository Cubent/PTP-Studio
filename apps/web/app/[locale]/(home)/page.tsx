'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

const Home = ({ params }: HomeProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelsSubmenuOpen, setIsModelsSubmenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 'essence',
      title: 'ESSENCE for NUMÉRO 255 - DUNES',
      model: '@_essencetaylor',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963889218.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963875943.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963889218.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963875943.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963896663.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963868949.jpg'
      ],
      credits: {
        photographer: '@Julien_Vallon',
        stylist: '@RebeccaBleynie',
        watches: 'Oyster Perpetual by @Rolex',
        hair: '@AnneSofie.Begtrup',
        makeup: '@LiliChoiMakeup',
        dop: '@Clement_de_Hollogne',
        specialThanks: '@ChateaudeBourron'
      }
    },
    {
      id: 'ariub',
      title: 'ARIUB for MANIFESTO Magazine',
      model: '@manifestomedia',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/52039/600/52039_000-3-19-2024-1710866296162.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/52039/600/52039_000-3-19-2024-1710866317505.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/52039/600/52039_000-3-19-2024-1710866296162.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/52039/600/52039_000-3-19-2024-1710866317505.jpg'
      ],
      credits: {
        fashionDirector: '@yeejonathan',
        photographer: 'Brent Chua',
        stylist: '@junglelin',
        hair: '@tomoaki_sato',
        makeup: '@go_ny_go_ny'
      }
    },
    {
      id: 'bethany',
      title: 'Bethany for d la Repubblica',
      model: '@bethany_model',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/6660/600/6660_000-11-14-2024-1731595661715.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/6660/600/6660_000-11-14-2024-1731595650112.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/6660/600/6660_000-11-14-2024-1731595661715.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/6660/600/6660_000-11-14-2024-1731595650112.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/6660/600/6660_000-11-14-2024-1731595655569.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/6660/600/6660_000-11-14-2024-1731595644481.jpg'
      ],
      credits: {
        magazine: 'd la Repubblica',
        photographer: '@caspersejersenstudio',
        stylist: '@leopolda.duchemin',
        eic: '@efarneti',
        casting: '@piergiorgio & @giuliamassullo',
        hair: '@cimmahony',
        makeup: '@minkimmakeup',
        manicure: '@alexfeller',
        setDesign: '@jeannebriand_',
        movementDirector: '@ryanchappell',
        production: '@whitedotproductions'
      }
    },
    {
      id: 'chey',
      title: 'CHEY for BURBERRY BEAUTY',
      model: '@chey_model',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218098631.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218142508.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218098631.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218142508.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218150562.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218126639.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218159500.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/17644/600/17644_000-6-6-2025-1749218135133.jpg'
      ],
      credits: {
        brand: 'BURBERRY BEAUTY',
        photographer: 'Josh Olins @josholins',
        stylist: 'James Campbell @jamesrncampbell',
        casting: 'Shyra Gaillard @shyra.hx',
        hair: '@burberry_hair_team',
        makeup: '@burberry_beauty_team',
        location: 'London',
        agency: 'Velgance Agency'
      }
    },
    {
      id: 'sunty',
      title: 'SUNTY for NIKE AIR MAX',
      model: '@sunty_model',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/48421/600/48421_568072-444-3-31-2025-1743101170875.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/48421/600/48421_000-3-27-2025-1743101417982.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/48421/600/48421_568072-444-3-31-2025-1743101170875.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/48421/600/48421_000-3-27-2025-1743101417982.jpg'
      ],
      credits: {
        brand: 'NIKE AIR MAX',
        photographer: '@nike_official',
        stylist: '@nike_styling',
        hair: '@nike_hair_team',
        makeup: '@nike_beauty_team',
        location: 'Global',
        agency: 'Velgance Agency'
      }
    },
    {
      id: 'houjing',
      title: 'HOUJING for Bottega Veneta 24 Campaign',
      model: '@houjingcui',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/49777/600/49777_000-7-18-2024-1721304466229.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/49777/600/49777_000-7-18-2024-1721304447648.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/49777/600/49777_000-7-18-2024-1721304466229.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/49777/600/49777_000-7-18-2024-1721304447648.jpg'
      ],
      credits: {
        brand: 'Bottega Veneta',
        creativeDirector: '@matthieu_blazy',
        production: 'Red Plus',
        executiveProducer: 'Allan Shen, Jessie Huang',
        headOfProduction: 'Tracy Zhu',
        videoProducer: 'Jing Wen Hao',
        printProducer: 'Li Yue',
        director: 'Dongxun Guo',
        directorOfPhotography: 'Bowie',
        photographer: 'Xiaopeng Yuan',
        castingDirector: 'Summer',
        cast: 'Houjing Cui, Tianqi Zhang',
        hair: 'Li Shuang',
        makeup: 'Taka Lam',
        executiveStylist: 'Wenjun Wu',
        editor: 'Teng',
        musicComposer: 'Sega Bodega',
        agency: 'Velgance Agency'
      }
    },
    {
      id: 'sofia-evi',
      title: 'Sofia Evi for Intimissimi',
      model: '@sofia_evi',
      mainImage: 'https://www.skinsmodels.com/wp_2021/wp-content/uploads/2025/10/sophie-evi-skins-models-amsterdam-1229x1536.jpg',
      hoverImage: 'https://www.skinsmodels.com/wp_2021/wp-content/uploads/2025/10/sophie-evi_skins_models-amsterdam-1-1229x1536.jpg',
      gallery: [
        'https://www.skinsmodels.com/wp_2021/wp-content/uploads/2025/10/sophie-evi-skins-models-amsterdam-1229x1536.jpg',
        'https://www.skinsmodels.com/wp_2021/wp-content/uploads/2025/10/sophie-evi_skins_models-amsterdam-1-1229x1536.jpg',
        'https://www.skinsmodels.com/wp_2021/wp-content/uploads/2025/10/sophie-evi_skins-models-amsterdam-1229x1536.jpg',
        'https://www.skinsmodels.com/wp_2021/wp-content/uploads/2025/10/sophie_evi-skins_models-amsterdam-1229x1536.jpg'
      ],
      credits: {
        brand: 'Intimissimi',
        photographer: '@intimissimi_official',
        stylist: '@intimissimi_styling',
        hair: '@intimissimi_hair',
        makeup: '@intimissimi_beauty',
        location: 'Amsterdam',
        agency: 'Skins Models'
      }
    },
    {
      id: 'sienna',
      title: 'SIENNA for ELLE ITALIA',
      model: '@sienna_model',
      mainImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_000-10-17-2024-1729186392595.jpg',
      hoverImage: 'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_604931-444-10-17-2024-1729185701976.jpg',
      gallery: [
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_000-10-17-2024-1729186392595.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_604931-444-10-17-2024-1729185701976.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_000-10-17-2024-1729186398859.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_000-10-17-2024-1729186420993.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_000-10-17-2024-1729186406360.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_128125-444-10-18-2024-1729185726093.jpg',
        'https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/29338/600/29338_000-10-17-2024-1729185740387.jpg'
      ],
      credits: {
        magazine: 'ELLE ITALIA',
        photographer: '@francoisrotger',
        stylist: '@lauras9226',
        hair: '@elle_hair_team',
        makeup: '@elle_beauty_team',
        location: 'Italy',
        agency: 'Velgance Agency'
      }
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <style jsx>{`
        .typing-animation {
          overflow: hidden !important;
          white-space: nowrap !important;
          border-right: 2px solid white !important;
          animation: typing 2s steps(40, end), blink-caret 0.75s step-end 1 !important;
          animation-fill-mode: both !important;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: white; }
        }
        
        .homepage-menu {
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
        
        .homepage-menu.open {
          transform: translateX(0) !important;
        }
        
        .homepage-menu-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
          z-index: 20 !important;
        }
        
        .homepage-header {
          position: absolute !important;
          top: 2rem !important;
          left: 2rem !important;
          z-index: 20 !important;
          display: flex !important;
          align-items: center !important;
          gap: 1rem !important;
        }
        
        .homepage-right-button {
          position: absolute !important;
          top: 2rem !important;
          right: 2rem !important;
          z-index: 20 !important;
        }
        
        .homepage-submenu-line {
          position: relative !important;
        }
        
        .homepage-submenu-line::before {
          content: '' !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 1px !important;
          background-color: #d1d5db !important;
        }
        
        .homepage-submenu-line::after {
          content: '' !important;
          position: absolute !important;
          left: 0 !important;
          top: 1rem !important;
          width: 1rem !important;
          height: 1px !important;
          background-color: #d1d5db !important;
        }
        
        .homepage-text {
          position: absolute !important;
          bottom: 2rem !important;
          left: 2rem !important;
          z-index: 20 !important;
          color: white !important;
          font-size: 0.875rem !important;
          font-weight: 300 !important;
          max-width: 24rem !important;
        }
        
        .homepage-footer {
          background-color: white !important;
          padding: 4rem 0 !important;
        }
        
        .homepage-footer-content {
          max-width: 80rem !important;
          margin: 0 auto !important;
          padding: 0 1.5rem !important;
        }
        
        .homepage-footer-bottom {
          border-top: 1px solid #e5e7eb !important;
          padding-top: 2rem !important;
        }
        
        .homepage-footer-row {
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
          gap: 1rem !important;
        }
        
        @media (min-width: 1024px) {
          .homepage-footer-row {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
        
        .homepage-footer-links {
          display: flex !important;
          gap: 1.5rem !important;
        }
        
        .homepage-footer-addresses {
          margin-top: 1.5rem !important;
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 1rem !important;
        }
        
        @media (min-width: 768px) {
          .homepage-footer-addresses {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        .homepage-video-container {
          position: relative !important;
          height: 100vh !important;
          overflow: hidden !important;
        }
        
        .homepage-video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
        }
        
        .homepage-video-overlay {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-color: rgba(0, 0, 0, 0.3) !important;
        }
        
        @media (max-width: 768px) {
          .homepage-video-container {
            height: 100vh !important;
            min-height: 100vh !important;
          }
          
          .homepage-video {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center center !important;
          }
          
          .homepage-text {
            bottom: 1rem !important;
            left: 1rem !important;
            right: 1rem !important;
            max-width: none !important;
            font-size: 0.8rem !important;
          }
          
          .homepage-header {
            top: 1rem !important;
            left: 1rem !important;
          }
          
          .homepage-right-button {
            top: 1rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
      <div className="min-h-screen">
      {/* Video Background Section */}
      <div className="homepage-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="homepage-video"
        >
          <source src="https://res.cloudinary.com/dbr1nfgbr/video/upload/v1761335524/3753692-uhd_3840_2160_25fps_q9zr6z.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="homepage-video-overlay"></div>

        {/* Left-aligned services text */}
        <div className="homepage-text">
          <div className="typing-animation">
            <p className="mb-2">
              <span className="relative">
                Europe's Leading
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60 transform -skew-x-12"></span>
              </span>
              <span> Agency for Models,</span>
            </p>
            <p className="mb-2">Influencers, and Brand Partnerships,</p>
            <p className="mb-2">Creating High-Impact Campaigns and</p>
            <p>Exceptional Industry Opportunities.</p>
          </div>
        </div>

        {/* Top Left Hamburger Menu */}
        <div className="homepage-header">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="text-white text-xl font-light hover:text-gray-300 transition-colors duration-300">
            Velgance Models
          </Link>
        </div>

        {/* Top Right Button */}
        <div className="homepage-right-button">
          <Link 
            href="/models/application" 
            className="text-white px-6 py-3 font-medium hover:text-gray-300 transition-colors duration-300"
          >
            Get Scouted
          </Link>
        </div>

        {/* Sidebar Menu */}
        <div className={`homepage-menu ${isMenuOpen ? 'open' : ''}`}>
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
              {/* Models with Submenu */}
              <div>
                <div className="text-xl font-light text-black">
                  Models
                </div>
                
                {/* Models Submenu */}
                <div className="ml-4 mt-2 space-y-3">
                  {/* Men Submenu */}
                  <div>
                    <div className="text-lg font-light text-gray-700">
                      Men
                    </div>
                    <div className="ml-4 mt-2 space-y-2">
                      <div className="homepage-submenu-line">
                        <Link 
                          href="/models/men/mainboard" 
                          className="block text-base text-gray-600 hover:text-black transition-colors duration-300 ml-6"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Mainboard
                        </Link>
                      </div>
                      <div className="homepage-submenu-line">
                        <Link 
                          href="/models/men/new-faces" 
                          className="block text-base text-gray-600 hover:text-black transition-colors duration-300 ml-6"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          New Faces
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Women Submenu */}
                  <div>
                    <div className="text-lg font-light text-gray-700">
                      Women
                    </div>
                    <div className="ml-4 mt-2 space-y-2">
                      <div className="homepage-submenu-line">
                        <Link 
                          href="/models/women/mainboard" 
                          className="block text-base text-gray-600 hover:text-black transition-colors duration-300 ml-6"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Mainboard
                        </Link>
                      </div>
                      <div className="homepage-submenu-line">
                        <Link 
                          href="/models/women/new-faces" 
                          className="block text-base text-gray-600 hover:text-black transition-colors duration-300 ml-6"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          New Faces
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Creators */}
              <Link 
                href="/creators" 
                className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Creators
              </Link>
              
              <Link 
                href="/chi-siamo" 
                className="block text-xl font-light text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
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
            </nav>
            
            <div className="border-t border-gray-200 mt-12 pt-8">
            </div>
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-lg">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="text-xs text-gray-800 font-medium">
                  CEST {new Date().toLocaleString('en-US', { timeZone: 'Europe/Rome', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="homepage-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>

      {/* Our Latest Work Section */}
      <div className="bg-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              Latest Editorial Work
            </h2>
          </div>
          
          {/* Horizontal Scrollable Layout */}
          <div className="overflow-x-auto bg-white" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e5e7eb #ffffff' }}>
            <div className="flex space-x-4 pb-2" style={{ scrollbarWidth: 'thin', msOverflowStyle: 'none' }}>
              {/* ESSENCE Project - First Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[0])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[0].mainImage}
                      alt={projects[0].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[0].hoverImage}
                      alt={`${projects[0].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[0].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[0].credits.photographer}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Photographer:</strong> {projects[0].credits.photographer}</p>
                        <p><strong>Styled by:</strong> {projects[0].credits.stylist}</p>
                        <p><strong>Watches:</strong> {projects[0].credits.watches}</p>
                        <p><strong>Hair:</strong> {projects[0].credits.hair}</p>
                        <p><strong>Make-Up:</strong> {projects[0].credits.makeup}</p>
                        <p><strong>DOP:</strong> {projects[0].credits.dop}</p>
                        <p><strong>Special thanks:</strong> {projects[0].credits.specialThanks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARIUB Project - Second Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[1])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[1].mainImage}
                      alt={projects[1].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[1].hoverImage}
                      alt={`${projects[1].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[1].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[1].credits.photographer}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Fashion Director:</strong> {projects[1].credits.fashionDirector}</p>
                        <p><strong>Photographer:</strong> {projects[1].credits.photographer}</p>
                        <p><strong>Stylist:</strong> {projects[1].credits.stylist}</p>
                        <p><strong>Hair:</strong> {projects[1].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[1].credits.makeup}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bethany Project - Third Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[2])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[2].mainImage}
                      alt={projects[2].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[2].hoverImage}
                      alt={`${projects[2].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[2].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[2].credits.magazine}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Magazine:</strong> {projects[2].credits.magazine}</p>
                        <p><strong>Photographer:</strong> {projects[2].credits.photographer}</p>
                        <p><strong>Stylist:</strong> {projects[2].credits.stylist}</p>
                        <p><strong>EIC:</strong> {projects[2].credits.eic}</p>
                        <p><strong>Casting:</strong> {projects[2].credits.casting}</p>
                        <p><strong>Hair:</strong> {projects[2].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[2].credits.makeup}</p>
                        <p><strong>Production:</strong> {projects[2].credits.production}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CHEY Project - Fourth Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[3])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[3].mainImage}
                      alt={projects[3].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[3].hoverImage}
                      alt={`${projects[3].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[3].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[3].credits.brand}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Brand:</strong> {projects[3].credits.brand}</p>
                        <p><strong>Photographer:</strong> {projects[3].credits.photographer}</p>
                        <p><strong>Stylist:</strong> {projects[3].credits.stylist}</p>
                        <p><strong>Casting:</strong> {projects[3].credits.casting}</p>
                        <p><strong>Hair:</strong> {projects[3].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[3].credits.makeup}</p>
                        <p><strong>Location:</strong> {projects[3].credits.location}</p>
                        <p><strong>Agency:</strong> {projects[3].credits.agency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUNTY Project - Fifth Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[4])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[4].mainImage}
                      alt={projects[4].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[4].hoverImage}
                      alt={`${projects[4].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[4].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[4].credits.brand}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Brand:</strong> {projects[4].credits.brand}</p>
                        <p><strong>Photographer:</strong> {projects[4].credits.photographer}</p>
                        <p><strong>Stylist:</strong> {projects[4].credits.stylist}</p>
                        <p><strong>Hair:</strong> {projects[4].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[4].credits.makeup}</p>
                        <p><strong>Location:</strong> {projects[4].credits.location}</p>
                        <p><strong>Agency:</strong> {projects[4].credits.agency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HOUJING Project - Sixth Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[5])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[5].mainImage}
                      alt={projects[5].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[5].hoverImage}
                      alt={`${projects[5].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[5].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[5].credits.brand}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Brand:</strong> {projects[5].credits.brand}</p>
                        <p><strong>Creative Director:</strong> {projects[5].credits.creativeDirector}</p>
                        <p><strong>Production:</strong> {projects[5].credits.production}</p>
                        <p><strong>Director:</strong> {projects[5].credits.director}</p>
                        <p><strong>Photographer:</strong> {projects[5].credits.photographer}</p>
                        <p><strong>Hair:</strong> {projects[5].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[5].credits.makeup}</p>
                        <p><strong>Agency:</strong> {projects[5].credits.agency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sofia Evi Project - Seventh Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[6])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[6].mainImage}
                      alt={projects[6].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[6].hoverImage}
                      alt={`${projects[6].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[6].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[6].credits.brand}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Brand:</strong> {projects[6].credits.brand}</p>
                        <p><strong>Photographer:</strong> {projects[6].credits.photographer}</p>
                        <p><strong>Stylist:</strong> {projects[6].credits.stylist}</p>
                        <p><strong>Hair:</strong> {projects[6].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[6].credits.makeup}</p>
                        <p><strong>Location:</strong> {projects[6].credits.location}</p>
                        <p><strong>Agency:</strong> {projects[6].credits.agency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SIENNA Project - Eighth Project */}
              <div className="flex-shrink-0 w-80">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(projects[7])}
                >
                  <div className="relative overflow-hidden transition-all duration-300">
                    {/* Default Image */}
                    <img 
                      src={projects[7].mainImage}
                      alt={projects[7].title}
                      className="w-full h-[400px] object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Hover Image */}
                    <img 
                      src={projects[7].hoverImage}
                      alt={`${projects[7].title} - Hover`}
                      className="absolute inset-0 w-full h-[400px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                        </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-black mb-1">{projects[7].title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{projects[7].credits.magazine}</p>
                    
                    {/* Project Details */}
                    <div className="p-2">
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><strong>Magazine:</strong> {projects[7].credits.magazine}</p>
                        <p><strong>Photographer:</strong> {projects[7].credits.photographer}</p>
                        <p><strong>Stylist:</strong> {projects[7].credits.stylist}</p>
                        <p><strong>Hair:</strong> {projects[7].credits.hair}</p>
                        <p><strong>Makeup:</strong> {projects[7].credits.makeup}</p>
                        <p><strong>Location:</strong> {projects[7].credits.location}</p>
                        <p><strong>Agency:</strong> {projects[7].credits.agency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Scrollable */}
      <div className="homepage-footer">
        <div className="homepage-footer-content">
          <div className="homepage-footer-bottom">
            <div className="homepage-footer-row">
              <p className="text-sm text-gray-600">
                © 2025 Velgance Agency. All rights reserved.
              </p>
              <div className="homepage-footer-links">
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e5e7eb #ffffff' }}>
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-light text-black mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-600">{selectedProject.model}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-black text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Image Gallery */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.gallery.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Credits */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-black mb-4">Credits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedProject.credits).map(([key, value]) => (
                    <div key={key} className="flex">
                      <span className="font-medium text-gray-700 capitalize mr-2">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-600">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default Home;