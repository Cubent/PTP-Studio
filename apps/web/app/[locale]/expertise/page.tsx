"use client"

import { Header } from "@/components/header"
import Link from "next/link"

export default function ExpertisePage() {
  const buildServices = [
    {
      title: "Web Design",
      description: "We can improve your existing website or build you one from scratch. We create visually stunning websites, with a UX focus that deliver conversions.",
      tags: ["User Experience (UX) Design", "User Interface (UI) Design", "Design Systems", "Prototypes", "User Journey Mapping", "Sitemaps", "User Testing", "WordPress", "Figma", "Elementor", "Motion and Animation"]
    },
    {
      title: "Web Development",
      description: "We can build on the vision you have for your site. We can create custom plugins, bespoke web apps and third party integrations that are remarkable yet functional.",
      tags: ["Bespoke WordPress Themes", "WordPress Plugins", "On-site SEO", "CRM Integration", "APIs", "3rd Party Integrations"]
    },
    {
      title: "eCommerce",
      description: "We build powerful online stores that convert visitors into customers. From product catalogs to secure checkout systems, we create seamless shopping experiences.",
      tags: ["WooCommerce", "Shopify", "Payment Gateways", "Inventory Management", "Product Catalogs", "Shopping Cart Optimization"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      tags: ["React Native", "iOS Development", "Android Development", "App Store Optimization", "Push Notifications", "Offline Functionality"]
    }
  ]

  const maintainServices = [
    {
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates, security patches, and performance optimization.",
      tags: ["Security Updates", "Plugin Updates", "Performance Monitoring", "Backup Management", "Uptime Monitoring"]
    },
    {
      title: "Technical Support",
      description: "Ongoing technical support to ensure your digital products continue to perform at their best.",
      tags: ["Bug Fixes", "Technical Troubleshooting", "Content Updates", "Database Optimization", "Server Management"]
    }
  ]

  const growServices = [
    {
      title: "SEO & Marketing",
      description: "Increase your online visibility and drive more traffic to your website with our comprehensive SEO and digital marketing services.",
      tags: ["Search Engine Optimization", "Content Strategy", "Google Analytics", "Conversion Rate Optimization", "Email Marketing", "Social Media Integration"]
    },
    {
      title: "Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics and reporting that help you understand your audience and improve performance.",
      tags: ["Google Analytics Setup", "Custom Dashboards", "A/B Testing", "User Behavior Analysis", "Performance Metrics"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16" data-section="hero-light">
        <div className="max-w-7xl mx-auto">
          <div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 leading-[0.95] tracking-tight">
              Our <span className="italic font-light">Expertise</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Our expertise speaks for us and what we love to do. We tell the story of what we know, what we love to create, and describe the path from strategic thinking to outputs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className="py-20 px-8 lg:px-16 bg-[#1a1a1a]" data-section="build">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-white mb-16">Build</h2>
          
          <div className="space-y-16">
            {buildServices.map((service, index) => (
              <div key={index} className="border-t border-gray-700 pt-8">
                <h3 className="text-3xl font-normal text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-6 max-w-3xl">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 rounded-full border border-gray-600 text-gray-300 text-sm hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintain Section */}
      <section className="py-20 px-8 lg:px-16 bg-white" data-section="maintain">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-black mb-16">Maintain</h2>
          
          <div className="space-y-16">
            {maintainServices.map((service, index) => (
              <div key={index} className="border-t border-gray-300 pt-8">
                <h3 className="text-3xl font-normal text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6 max-w-3xl">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 rounded-full border border-gray-300 text-black text-sm hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grow Section */}
      <section className="py-20 px-8 lg:px-16 bg-[#1a1a1a]" data-section="grow">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-white mb-16">Grow</h2>
          
          <div className="space-y-16">
            {growServices.map((service, index) => (
              <div key={index} className="border-t border-gray-700 pt-8">
                <h3 className="text-3xl font-normal text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-6 max-w-3xl">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 rounded-full border border-gray-600 text-gray-300 text-sm hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 lg:px-16 bg-[#1a1a1a]" data-section="cta-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 PushToProd Studio. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
