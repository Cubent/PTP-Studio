'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { FooterHomepage } from '@/components/footer-homepage';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import type { Metadata } from 'next';

export default function WebsitePaletteDesign101() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Website Palette Design 101',
    description: 'Master the art of choosing the perfect color palette for your website. Learn color theory, psychology, and practical tips for creating stunning designs.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470&auto=format&fit=crop',
    datePublished: '2026-01-30',
    dateModified: '2026-01-30',
    author: {
      '@type': 'Organization',
      name: 'PushToProd Studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PushToProd Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pushtoprod.studio/Agency%20Logo.svg',
      },
    },
  };

  return (
    <>
      <style jsx global>{`
        header {
          position: absolute !important;
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgressBar />
      <Header />
      <div className="min-h-screen bg-[#FFFFFF]">
        {/* Hero Section */}
        <div className="bg-[#1a1a1a] pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full">
                Design
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Website Palette Design 101
            </h1>

            <div className="flex items-center gap-4 text-gray-300">
              <time>January 30, 2026</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image - Hidden */}
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470&auto=format&fit=crop"
              alt="Color palette design"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Choosing the right color palette is one of the most critical decisions in web design. Colors evoke emotions, communicate brand identity, and significantly impact user experience. In this comprehensive guide, we'll explore the fundamentals of website palette design and provide practical tips to help you create stunning, effective color schemes.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Understanding Color Theory</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before diving into palette creation, it's essential to understand basic color theory. The color wheel consists of primary colors (red, blue, yellow), secondary colors (green, orange, purple), and tertiary colors (combinations of primary and secondary colors).
            </p>

            <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Color Harmony</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Color harmony refers to the pleasing arrangement of colors. Here are the most common color schemes:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700">
                <strong className="text-black">Monochromatic:</strong> Uses variations of a single color by adjusting saturation and brightness. Perfect for minimalist designs.
              </li>
              <li className="text-gray-700">
                <strong className="text-black">Analogous:</strong> Uses colors that sit next to each other on the color wheel. Creates a harmonious, cohesive look.
              </li>
              <li className="text-gray-700">
                <strong className="text-black">Complementary:</strong> Uses colors opposite each other on the color wheel. Creates high contrast and visual interest.
              </li>
              <li className="text-gray-700">
                <strong className="text-black">Triadic:</strong> Uses three colors evenly spaced on the color wheel. Offers vibrant, balanced designs.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Color Psychology in Web Design</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Colors trigger emotional responses and associations. Understanding color psychology helps you choose palettes that align with your brand message:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-black mb-2">Blue</h4>
                <p className="text-gray-700 text-sm">Trust, professionalism, calm. Popular for corporate and tech brands.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-black mb-2">Red</h4>
                <p className="text-gray-700 text-sm">Energy, passion, urgency. Great for calls-to-action and food brands.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-black mb-2">Green</h4>
                <p className="text-gray-700 text-sm">Growth, health, nature. Perfect for eco-friendly and wellness brands.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-black mb-2">Yellow</h4>
                <p className="text-gray-700 text-sm">Optimism, happiness, attention. Use sparingly for highlights.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-black mb-2">Purple</h4>
                <p className="text-gray-700 text-sm">Luxury, creativity, wisdom. Ideal for premium and creative brands.</p>
              </div>
              <div className="border-l-4 border-gray-500 pl-4">
                <h4 className="font-semibold text-black mb-2">Black & Gray</h4>
                <p className="text-gray-700 text-sm">Sophistication, elegance, neutrality. Essential for modern designs.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Building Your Palette: The 60-30-10 Rule</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Professional designers often use the 60-30-10 rule to create balanced color palettes:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700">
                <strong className="text-black">60% - Dominant Color:</strong> Your primary brand color that covers most of the website (backgrounds, large sections).
              </li>
              <li className="text-gray-700">
                <strong className="text-black">30% - Secondary Color:</strong> Complements the dominant color and adds visual interest (sidebars, secondary sections).
              </li>
              <li className="text-gray-700">
                <strong className="text-black">10% - Accent Color:</strong> Creates focal points and draws attention (buttons, links, highlights).
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Practical Tips for Choosing Colors</h2>

            <h3 className="text-2xl font-semibold text-black mt-8 mb-4">1. Start with Your Brand</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your color palette should reflect your brand identity. Consider your industry, target audience, and brand personality. A law firm might choose conservative blues and grays, while a children's toy store could opt for bright, playful colors.
            </p>

            <h3 className="text-2xl font-semibold text-black mt-8 mb-4">2. Consider Accessibility</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ensure sufficient contrast between text and background colors. The WCAG (Web Content Accessibility Guidelines) recommends a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use tools like WebAIM's Contrast Checker to verify your choices.
            </p>

            <h3 className="text-2xl font-semibold text-black mt-8 mb-4">3. Test on Different Devices</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Colors can appear differently on various screens and devices. Test your palette on multiple devices and in different lighting conditions to ensure consistency.
            </p>

            <h3 className="text-2xl font-semibold text-black mt-8 mb-4">4. Use Color Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Leverage online tools to create and refine your palette:
            </p>

            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">• Adobe Color - Create color schemes based on color theory</li>
              <li className="text-gray-700">• Coolors - Generate random palettes and adjust to your liking</li>
              <li className="text-gray-700">• Paletton - Visualize color combinations in real-time</li>
              <li className="text-gray-700">• Color Hunt - Browse curated color palettes for inspiration</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Common Mistakes to Avoid</h2>

            <div className="bg-gray-50 border-l-4 border-red-500 p-6 my-8">
              <h4 className="font-semibold text-black mb-3">Don't:</h4>
              <ul className="space-y-2">
                <li className="text-gray-700">✗ Use too many colors (stick to 3-5 main colors)</li>
                <li className="text-gray-700">✗ Ignore contrast and readability</li>
                <li className="text-gray-700">✗ Follow trends blindly without considering your brand</li>
                <li className="text-gray-700">✗ Use pure black (#000000) for text - it's too harsh</li>
                <li className="text-gray-700">✗ Forget about color blindness (8% of men have some form)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Real-World Examples</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let's look at some successful website color palettes:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border rounded-lg p-6">
                <h4 className="font-semibold text-black mb-3">Spotify</h4>
                <div className="flex gap-3 mb-3">
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: '#1DB954' }}></div>
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: '#191414' }}></div>
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: '#FFFFFF' }}></div>
                </div>
                <p className="text-gray-700 text-sm">Vibrant green (#1DB954) against dark backgrounds creates energy and focus on content.</p>
              </div>

              <div className="border rounded-lg p-6">
                <h4 className="font-semibold text-black mb-3">Airbnb</h4>
                <div className="flex gap-3 mb-3">
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: '#FF5A5F' }}></div>
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: '#00A699' }}></div>
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: '#FC642D' }}></div>
                </div>
                <p className="text-gray-700 text-sm">Warm, welcoming colors that evoke feelings of home and adventure.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating an effective website color palette is both an art and a science. By understanding color theory, psychology, and following best practices, you can design palettes that not only look beautiful but also enhance user experience and support your brand goals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Remember, there's no one-size-fits-all solution. Experiment with different combinations, test with real users, and don't be afraid to iterate. The perfect palette is one that resonates with your audience and effectively communicates your brand message.
            </p>

            <div className="bg-black text-white rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Design Your Website?</h3>
              <p className="mb-6">Let our team help you create a stunning website with the perfect color palette for your brand.</p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-8">Related Articles</h2>
            <div className="text-center text-gray-600 py-12">
              More articles coming soon...
            </div>
          </div>
        </div>
      </div>
      <FooterHomepage />
    </>
  );
}
