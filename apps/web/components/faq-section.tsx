"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      number: "01",
      question: "How much does a website design cost?",
      answer: "Website design pricing typically ranges from $500 to $4,000 depending on the complexity, number of pages, and custom features required. A simple landing page starts around $500, while a comprehensive multi-page website with custom animations and interactions can go up to $4,000. We'll provide a detailed quote after understanding your specific needs."
    },
    {
      number: "02",
      question: "What's the cost of a full website development?",
      answer: "Full website development ranges from $1,000 to $5,000. This includes design, development, responsive implementation, and basic SEO setup. Simple brochure websites start at $1,000, while complex websites with custom functionality, CMS integration, and advanced features can reach $5,000. The final cost depends on your requirements and timeline."
    },
    {
      number: "03",
      question: "How much does a full-stack application cost?",
      answer: "Full-stack applications range from $4,000 to $30,000+ depending on complexity and development time. A basic app with standard features starts around $4,000, while enterprise-level applications with complex databases, API integrations, user authentication, payment systems, and custom features can exceed $30,000. We break down projects into phases to manage costs effectively."
    },
    {
      number: "04",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope. A simple website design takes 1-2 weeks, a full website development takes 3-6 weeks, and complex applications typically take 1-3 months depending on features and requirements. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      number: "05",
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects. Typically, we require 50% upfront to begin work and 50% upon completion. For projects over $10,000, we can arrange milestone-based payments to make the investment more manageable for your business."
    },
    {
      number: "06",
      question: "What's included in your maintenance packages?",
      answer: "Our maintenance packages include regular updates, security patches, performance optimization, content updates, bug fixes, and technical support. Packages start at $200/month for basic maintenance and scale based on your needs. We also offer one-time maintenance services if you prefer."
    },
    {
      number: "07",
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines to ensure consistency across all your digital touchpoints. If you don't have established guidelines, we can help create them as part of our brand identity service."
    },
    {
      number: "08",
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can handle hosting and domain setup for you, or work with your existing providers. We recommend reliable hosting solutions based on your project needs and can manage the technical setup so you don't have to worry about it."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side - Title */}
          <div className="lg:col-span-4">
            <p className="text-sm text-gray-500 mb-4">/ Frequently Asked</p>
            <h2 className="text-4xl sm:text-5xl font-light text-black leading-tight">
              Questions we get asked.
            </h2>
          </div>

          {/* Right side - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-6"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start gap-6 text-left group"
                  >
                    {/* Number */}
                    <span className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500 group-hover:border-black group-hover:text-black transition-colors">
                      {faq.number}
                    </span>

                    {/* Question */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-normal text-black mb-2 group-hover:text-gray-600 transition-colors">
                        {faq.question}
                      </h3>
                      
                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-black" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
