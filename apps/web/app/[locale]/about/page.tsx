import { Metadata } from 'next';
import { Header } from '@/components/header';
import { FooterHomepage } from '@/components/footer-homepage';

export const metadata: Metadata = {
  title: 'About Us | PushToProd Studio',
  description: 'Learn about PushToProd Studio - a team of product experts, designers, engineers and leaders who treat client projects as our own.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-black" data-section="dark">
        {/* Hero Section with Large "About us" text */}
        <div className="relative pt-32 pb-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-light text-[#2a2a2a] leading-none tracking-tighter">
              About us
            </h1>
          </div>
        </div>

        {/* Section 1: Who We Are */}
        <div className="relative px-8 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                We care deeply about success
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We're made up of top product experts, designers, engineers and product leaders who treat client projects as if they were our own.
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every line of code, every pixel, every interaction is crafted with precision and purpose. We don't just build products—we build experiences that drive real business results.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Our Approach */}
        <div className="relative px-8 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe in transparency, collaboration, and delivering value at every stage. From initial concept to final deployment, we work alongside you as true partners.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                Partnership over transactions
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your success is our success. We invest time to understand your business, your users, and your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: What We Do */}
        <div className="relative px-8 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                Building the future, one project at a time
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                From startups to enterprises, we've helped businesses transform their ideas into scalable digital products.
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Web applications that scale. Mobile apps that delight. Design systems that empower. AI solutions that innovate.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We combine technical excellence with creative thinking to deliver solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative px-8 pb-32">
          <div className="max-w-7xl mx-auto border-t border-gray-800 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <div className="text-6xl font-light text-white mb-3">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="text-6xl font-light text-white mb-3">30+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</div>
              </div>
              <div>
                <div className="text-6xl font-light text-white mb-3">5+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-6xl font-light text-white mb-3">100%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterHomepage />
    </>
  );
}
