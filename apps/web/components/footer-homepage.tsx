"use client"

import Link from "next/link"

export function FooterHomepage() {
  return (
    <footer className="bg-white text-gray-600 py-16 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Large Brand Name */}
        <div className="mb-16">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-200 tracking-tight leading-none">
            <span className="font-extrabold">PUSH</span>
            <span className="font-light">TO</span>
            <span className="font-extrabold">PROD</span>
            <br />
            <span className="font-extrabold">STU</span>
            <span className="font-light">DI</span>
            <span className="font-extrabold">O</span>
          </h2>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* PushToProd Column */}
          <div>
            <h3 className="text-black text-sm font-semibold mb-4">PushToProd</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-sm hover:text-black transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-black transition-colors">
                  Thoughts
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-black transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-black text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Tech & Innovation
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Experience & Design
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Product Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-black text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  IoT Development
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-sm hover:text-black transition-colors">
                  Custom Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-black text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-sm hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-black text-sm font-semibold mb-4">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.linkedin.com/company/pushtoprod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-black transition-colors flex items-center gap-2"
                >
                  LinkedIn
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/pushtoprodstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-black transition-colors flex items-center gap-2"
                >
                  Twitter
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/pushtoprodstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-black transition-colors flex items-center gap-2"
                >
                  Instagram
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © 2025 PushToProd Studio
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
