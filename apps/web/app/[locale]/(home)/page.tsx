'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { LuminaInteractiveList } from '@repo/design-system';
import { Testimonial } from '@/components/testimonial';
import { CTASection } from '@/components/cta-section';
import { ExpertiseSection } from '@/components/expertise-section';
import { FAQSection } from '@/components/faq-section';
import { Header } from '@/components/header';

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

const Home = ({ params }: HomeProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showNoticePopup, setShowNoticePopup] = useState(false);

  // Check if this is the first visit
  useEffect(() => {
    const hasSeenNotice = localStorage.getItem('velgance-notice-seen');
    if (!hasSeenNotice) {
      setShowNoticePopup(true);
    }
  }, []);

  const handleCloseNotice = () => {
    setShowNoticePopup(false);
    localStorage.setItem('velgance-notice-seen', 'true');
  };

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
        
        .services-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .projects-scroll::-webkit-scrollbar {
          display: none;
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
        
        .homepage-text .typing-animation {
          border-right: none !important;
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
            top: 1.5rem !important;
            left: 1rem !important;
          }
          
          .homepage-right-button {
            top: 1.5rem !important;
            right: 0.5rem !important;
          }
          
          .homepage-right-button a {
            font-size: 0.75rem !important;
            padding: 0.5rem 0.75rem !important;
          }
        }
      `}</style>
      <div className="min-h-screen">
      {/* New Header Component */}
      <Header />
      
      {/* Lumina Interactive List */}
      <div className="relative">
        <LuminaInteractiveList />
      </div>

      {/* Services Section */}
      <div className="bg-[#1a1a1a] py-20" data-section="services">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-sans font-normal text-white mb-4">
              <span className="font-bold">Web Agency</span>,
              <br />
              <span className="font-bold">Marketing</span> & <span className="font-bold">Communication</span>
            </h2>
            <p className="text-gray-400 text-base">
              A global web agency delivering cutting-edge digital solutions to clients worldwide.
            </p>
          </div>
          
          {/* Horizontal Scrollable Cards */}
          <div className="overflow-x-auto overflow-y-hidden services-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-6 pb-4">
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">UI & UX</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">Websites</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">Full Stack Apps</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">Mobile Apps</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">E-Commerce</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">API Development</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">Cloud Solutions</h3>
              </div>
              <div className="flex-shrink-0 w-80 h-48 border-2 border-white rounded-2xl flex items-center justify-center bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-white text-2xl font-medium">AI Integration</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growing Synergies Section */}
      <div className="bg-[#f5f5f5] py-20" data-section="synergies">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">GROWING SYNERGIES</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-black mb-6 leading-tight">
                Building digital products that drive real business growth.
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                We design and develop custom web applications, mobile apps, and digital platforms. From initial concept to launch and beyond, we partner with businesses to create scalable solutions that solve real problems and deliver measurable results.
              </p>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-300">
                Contact Us
              </button>
            </div>

            {/* Right Images Stacked with Offset */}
            <div className="space-y-6 relative">
              <div className="rounded-lg overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1684139517679-032b7213ad2e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Digital workspace"
                  className="w-full h-auto object-cover max-h-64"
                />
              </div>
              <div className="rounded-lg overflow-hidden relative -mt-12 ml-12">
                <img 
                  src="https://images.unsplash.com/photo-1758043323593-d4511bcf82a1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Creative workspace"
                  className="w-full h-auto object-cover max-h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Latest Work Section */}
      <div className="bg-[#f5f5f5] py-16" id="latest-work" data-section="work">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-black leading-tight">
              Our Latest Work
            </h2>
          </div>
          
          {/* Horizontal Scrollable Layout */}
          <div className="overflow-x-auto overflow-y-hidden bg-[#f5f5f5] projects-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex space-x-8 pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {/* Comza Project */}
              <div className="flex-shrink-0" style={{ width: '400px' }}>
                <div className="group cursor-pointer">
                  {/* Title and Subtitle Above Image */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-1">Comza</h3>
                    <p className="text-gray-600 text-base">International Calling Platform</p>
                  </div>
                  
                  <div className="relative overflow-hidden transition-all duration-300 rounded-lg bg-white border-2 border-gray-200">
                    {/* Browser Bar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-center relative">
                      <div className="absolute left-4 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-600">
                        https://comza.org/
                      </div>
                    </div>
                    <img 
                      src="/New Website Instagram Post (1).png"
                      alt="Comza - International Calling Platform"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Visit Button */}
                  <a 
                    href="https://comza.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Visit Comza
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6">
                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        A browser-based international calling platform that enables users to make affordable calls worldwide without apps or subscriptions.
                      </p>
                      
                      {/* Expandable Tech Details */}
                      <details className="group">
                        <summary className="cursor-pointer text-black font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Tech Stack & Details
                        </summary>
                        <div className="mt-3 ml-6 space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Tech Stack:</span>
                            <span className="text-gray-600">Next.js, React, WebRTC, Stripe, PostgreSQL</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Features:</span>
                            <span className="text-gray-600">Browser calling, Credit system, Global coverage</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Timeline:</span>
                            <span className="text-gray-600">3 weeks</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Results:</span>
                            <span className="text-gray-600">200+ countries, 99.9% uptime</span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beitha Project */}
              <div className="flex-shrink-0" style={{ width: '400px' }}>
                <div className="group cursor-pointer">
                  {/* Title and Subtitle Above Image */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-1">Beitha</h3>
                    <p className="text-gray-600 text-base">AI Browser Extension</p>
                  </div>
                  
                  <div className="relative overflow-hidden transition-all duration-300 rounded-lg bg-white border-2 border-gray-200">
                    {/* Browser Bar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-center relative">
                      <div className="absolute left-4 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-600">
                        https://beitha.org/
                      </div>
                    </div>
                    <img 
                      src="/New Website Instagram Post (2).png"
                      alt="Beitha - AI Browser Extension"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Visit Button */}
                  <a 
                    href="https://beitha.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Visit Beitha
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6">
                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        AI-powered browser extension that understands, organizes, and helps you achieve more—right where you work.
                      </p>
                      
                      {/* Expandable Tech Details */}
                      <details className="group">
                        <summary className="cursor-pointer text-black font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Tech Stack & Details
                        </summary>
                        <div className="mt-3 ml-6 space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Tech Stack:</span>
                            <span className="text-gray-600">Chrome Extension, AI/ML, JavaScript</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Features:</span>
                            <span className="text-gray-600">Tab organization, Email drafting, Smart shopping</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Timeline:</span>
                            <span className="text-gray-600">4 weeks</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Privacy:</span>
                            <span className="text-gray-600">Privacy-first, no data collection</span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travira Project */}
              <div className="flex-shrink-0" style={{ width: '400px' }}>
                <div className="group cursor-pointer">
                  {/* Title and Subtitle Above Image */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-1">Travira</h3>
                    <p className="text-gray-600 text-base">Flight Deal Alerts Platform</p>
                  </div>
                  
                  <div className="relative overflow-hidden transition-all duration-300 rounded-lg bg-white border-2 border-gray-200">
                    {/* Browser Bar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-center relative">
                      <div className="absolute left-4 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-600">
                        https://travira.org/
                      </div>
                    </div>
                    <img 
                      src="/travira-project.png"
                      alt="Travira - Flight Deal Alerts"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Visit Button */}
                  <a 
                    href="https://travira.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Visit Travira
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6">
                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Never miss a great flight deal again. Get alerts when airlines publish flights 50-90% off regular price from your airport.
                      </p>
                      
                      {/* Expandable Tech Details */}
                      <details className="group">
                        <summary className="cursor-pointer text-black font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Tech Stack & Details
                        </summary>
                        <div className="mt-3 ml-6 space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Tech Stack:</span>
                            <span className="text-gray-600">Next.js, React, Node.js, MongoDB</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Features:</span>
                            <span className="text-gray-600">Price alerts, Deal tracking, Email notifications</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Timeline:</span>
                            <span className="text-gray-600">3 weeks</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Savings:</span>
                            <span className="text-gray-600">Up to 90% off regular prices</span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* MREI Project */}
              <div className="flex-shrink-0" style={{ width: '400px' }}>
                <div className="group cursor-pointer">
                  {/* Title and Subtitle Above Image */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-1">MREI</h3>
                    <p className="text-gray-600 text-base">Real Estate Education Platform</p>
                  </div>
                  
                  <div className="relative overflow-hidden transition-all duration-300 rounded-lg bg-white border-2 border-gray-200">
                    {/* Browser Bar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-center relative">
                      <div className="absolute left-4 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-600">
                        https://www.mrei.co.uk/
                      </div>
                    </div>
                    <img 
                      src="/newproject.png"
                      alt="MREI - Real Estate Education"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Visit Button */}
                  <a 
                    href="https://www.mrei.co.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Visit MREI
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6">
                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The membership body for real estate and finance professionals. Build your career with an international standard of excellence.
                      </p>
                      
                      {/* Expandable Tech Details */}
                      <details className="group">
                        <summary className="cursor-pointer text-black font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Tech Stack & Details
                        </summary>
                        <div className="mt-3 ml-6 space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Tech Stack:</span>
                            <span className="text-gray-600">Next.js, React, LMS Platform, Blockchain</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Features:</span>
                            <span className="text-gray-600">42+ Courses, CPE Credits, Certifications</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Timeline:</span>
                            <span className="text-gray-600">8 weeks</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Members:</span>
                            <span className="text-gray-600">30,000+ across 40+ countries</span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cubent Project */}
              <div className="flex-shrink-0" style={{ width: '400px' }}>
                <div className="group cursor-pointer">
                  {/* Title and Subtitle Above Image */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-1">Cubent</h3>
                    <p className="text-gray-600 text-base">AI Coding Assistant</p>
                  </div>
                  
                  <div className="relative overflow-hidden transition-all duration-300 rounded-lg bg-white border-2 border-gray-200">
                    {/* Browser Bar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-center relative">
                      <div className="absolute left-4 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-600">
                        https://cubent.dev/
                      </div>
                    </div>
                    <img 
                      src="/cubent-project.png"
                      alt="Cubent - AI Coding Assistant"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Visit Button */}
                  <a 
                    href="https://cubent.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Visit Cubent
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6">
                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Your AI coding partner inside the editor. Generate code, solve bugs, document faster, and build smarter with simple language.
                      </p>
                      
                      {/* Expandable Tech Details */}
                      <details className="group">
                        <summary className="cursor-pointer text-black font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Tech Stack & Details
                        </summary>
                        <div className="mt-3 ml-6 space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Tech Stack:</span>
                            <span className="text-gray-600">VS Code Extension, AI/ML, TypeScript</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Features:</span>
                            <span className="text-gray-600">Code generation, Bug fixing, Auto-complete</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Timeline:</span>
                            <span className="text-gray-600">6 weeks</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Models:</span>
                            <span className="text-gray-600">GPT-5, Claude 4.5, Gemini</span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Velgance Agency Project */}
              <div className="flex-shrink-0" style={{ width: '400px' }}>
                <div className="group cursor-pointer">
                  {/* Title and Subtitle Above Image */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-1">Velgance Agency</h3>
                    <p className="text-gray-600 text-base">Model & Influencer Agency</p>
                  </div>
                  
                  <div className="relative overflow-hidden transition-all duration-300 rounded-lg bg-white border-2 border-gray-200">
                    {/* Browser Bar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-center relative">
                      <div className="absolute left-4 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-600">
                        https://velgance.com/
                      </div>
                    </div>
                    <img 
                      src="/cubent-project (1).png"
                      alt="Velgance Agency - Model & Influencer Agency"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Visit Button */}
                  <a 
                    href="https://velgance.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Visit Velgance
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6">
                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Europe's leading agency for models, influencers, and brand partnerships. Creating high-impact campaigns and exceptional industry opportunities.
                      </p>
                      
                      {/* Expandable Tech Details */}
                      <details className="group">
                        <summary className="cursor-pointer text-black font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Tech Stack & Details
                        </summary>
                        <div className="mt-3 ml-6 space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Tech Stack:</span>
                            <span className="text-gray-600">Next.js, React, PostgreSQL, Cloudinary</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Features:</span>
                            <span className="text-gray-600">Model portfolios, Booking system, Editorial work</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Timeline:</span>
                            <span className="text-gray-600">10 weeks</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-black font-medium min-w-[90px]">Reach:</span>
                            <span className="text-gray-600">500+ models, Global campaigns</span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <Testimonial />
      </div>

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section - Scrollable */}
      <div className="homepage-footer bg-white">
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

      {/* Important Notice Popup */}
      {showNoticePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-black bg-opacity-95 rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={handleCloseNotice}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6">
                Important Notice
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-white">@velgancemodels</strong> and <strong className="text-white">@velgancescouting</strong> are our only official profiles.
                </p>
                
                <p>
                  Please be aware that there are individuals online falsely representing themselves as agents and model scouts for Velgance Models.
                </p>
                
                <p>
                  For your safety, please do not engage with anyone claiming to work for Velgance Models unless you have verified their identity directly with us.
                </p>
                
                <p>
                  You can contact Velgance Models by emailing{' '}
                  <a href="mailto:info@velgance.com" className="text-white hover:underline font-medium">
                    info@velgance.com
                  </a>
                </p>
              </div>
            </div>
            
            <button
              onClick={handleCloseNotice}
              className="w-full bg-white text-black py-3 px-6 rounded-lg font-light hover:bg-gray-100 transition-colors"
            >
              I Understand
            </button>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default Home;