import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magazine - Velgance Agency',
  description: 'Discover the latest trends, stories and inspirations from the fashion world with Velgance Agency.',
};

export default function MagazinePage() {
  const posts = [
    {
      id: 1,
      title: "Fashion trends 2025",
      excerpt: "Discover the new trends that will define next year in the world of fashion and style.",
      category: "Trends",
      date: "January 15, 2025",
      featured: true,
      size: "large",
      image: "https://static.wixstatic.com/media/4da6c5_b0021b2be93045aab30cfecad1c59d94~mv2.png"
    },
    {
      id: 2,
      title: "Backstage: Behind the scenes of a fashion show",
      excerpt: "An exclusive behind the scenes look to discover what happens before models walk the runway.",
      category: "Backstage",
      date: "January 12, 2025",
      featured: false,
      size: "medium",
      image: "https://static.wixstatic.com/media/4da6c5_ae4587d8c26540449360765ceb09ffc7~mv2.png"
    },
    {
      id: 3,
      title: "Sustainability in fashion",
      excerpt: "How the fashion industry is evolving towards more sustainable and responsible practices.",
      category: "Sustainability",
      date: "January 10, 2025",
      featured: false,
      size: "small",
      image: "https://static.wixstatic.com/media/4da6c5_fd1341ccd94b448b8b36a3d114179b79~mv2.png"
    },
    {
      id: 4,
      title: "Exclusive interview with our models",
      excerpt: "The personal stories and dreams of the talents who work with Velgance Agency.",
      category: "Interviews",
      date: "January 8, 2025",
      featured: false,
      size: "medium",
      image: "https://images.unsplash.com/photo-1602743297108-4c9061884285?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Fashion photography: art and technique",
      excerpt: "We explore the art of fashion photography and the techniques that create iconic images.",
      category: "Photography",
      date: "January 5, 2025",
      featured: false,
      size: "small",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Diversity and inclusion in fashion",
      excerpt: "How the fashion world is embracing diversity and promoting inclusivity.",
      category: "Diversity",
      date: "January 3, 2025",
      featured: true,
      size: "large",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div 
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://static.wixstatic.com/media/4da6c5_ba0da4f8723046ce8e7d846616101f35~mv2.png)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic" style={{ fontFamily: 'serif' }}>
              Magazine
            </h1>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
              Discover the latest trends, stories and inspirations from the fashion world
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const getPostSlug = (title: string) => {
                return title
                  .toLowerCase()
                  .replace(/[^a-z0-9\s]/g, '')
                  .replace(/\s+/g, '-')
                  .trim();
              };

              const postSlug = getPostSlug(post.title);
              const postUrl = `/magazine/${postSlug}`;

              return (
                <article
                  key={post.id}
                  className={`group cursor-pointer ${
                    post.size === 'large' ? 'md:col-span-2 lg:col-span-2' : 
                    post.size === 'medium' ? 'md:col-span-1 lg:col-span-1' : 
                    'md:col-span-1 lg:col-span-1'
                  }`}
                >
                  <Link href={postUrl}>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64 lg:h-80 group-hover:shadow-lg transition-shadow duration-300">
                  {post.image ? (
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ 
                        backgroundImage: `url(${post.image})`
                      }}
                    ></div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-500 text-sm">Immagine</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className={`font-light text-black mb-3 group-hover:text-gray-600 transition-colors ${
                    post.size === 'large' ? 'text-2xl lg:text-3xl' : 
                    post.size === 'medium' ? 'text-xl lg:text-2xl' : 
                    'text-lg lg:text-xl'
                  } italic`} style={{ fontFamily: 'serif' }}>
                    {post.title}
                  </h2>
                  
                  <p className={`text-gray-600 leading-relaxed ${
                    post.size === 'large' ? 'text-base lg:text-lg' : 
                    'text-sm lg:text-base'
                  }`}>
                    {post.excerpt}
                  </p>
                  
                  {post.featured && (
                    <div className="mt-4">
                      <span className="inline-block bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                        In Evidenza
                      </span>
                    </div>
                  )}
                </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
            Resta aggiornato
          </h2>
          <p className="text-gray-600 mb-8">
            Iscriviti alla nostra newsletter per ricevere le ultime notizie dal mondo della moda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Iscriviti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
