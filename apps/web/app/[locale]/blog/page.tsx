import Link from 'next/link';
import { Header } from '@/components/header';
import { FooterHomepage } from '@/components/footer-homepage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Web Design & Development Insights',
  description: 'Take your business in the right digital direction. Expert insights on web design, development, marketing, and business growth.',
  openGraph: {
    title: 'Blog | Web Design & Development Insights',
    description: 'Take your business in the right digital direction. Expert insights on web design, development, marketing, and business growth.',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'website-palette-design-101',
    title: 'Website Palette Design 101',
    excerpt: 'Master the art of choosing the perfect color palette for your website. Learn color theory, psychology, and practical tips for creating stunning designs.',
    date: 'January 30, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470&auto=format&fit=crop',
    readTime: '8 min read'
  }
];

const categories = ['All', 'Design', 'Development', 'Marketing', 'Business'];

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-[#1a1a1a] pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Take your business in the right digital direction.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-8 py-6 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`whitespace-nowrap text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
              >
                <article className="h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <time>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-black font-medium group-hover:gap-2 transition-all">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterHomepage />
    </>
  );
}
