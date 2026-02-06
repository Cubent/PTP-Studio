"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false) // Changed default to false (light background)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Logo gets bigger after scrolling past 50px
      setScrolled(scrollPosition > 50)

      // Check if we're on a dark or light background
      const sections = document.querySelectorAll('[data-section]')
      let isDark = false // Default to light (dark text) for hero
      
      // If we're at the very top (hero section), use dark text
      if (scrollPosition < viewportHeight * 0.7) {
        isDark = false // Light background, dark text
      } else {
        // Check if we're at specific sections
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top
          const sectionBottom = rect.bottom
          
          // If header is within this section (checking top 100px of viewport)
          if (sectionTop <= 100 && sectionBottom >= 100) {
            const sectionDataAttr = section.getAttribute('data-section')
            const bgColor = window.getComputedStyle(section).backgroundColor
            
            // Check if data-section explicitly says "dark" or if background is dark
            if (sectionDataAttr === 'dark' || bgColor.includes('26, 26, 26') || bgColor.includes('22, 22, 22') || bgColor.includes('16, 16, 16') || bgColor.includes('0, 0, 0') || bgColor === 'rgb(0, 0, 0)') {
              isDark = true
            } else if (sectionDataAttr === 'light' || bgColor.includes('255, 255, 255')) {
              // Light background
              isDark = false
            }
          }
        })
        
        // Also check if we're past the services section (after the dark section)
        const servicesSection = document.querySelector('[data-section="services"]')
        if (servicesSection) {
          const servicesRect = servicesSection.getBoundingClientRect()
          // If we've scrolled past the services section
          if (servicesRect.bottom < 100) {
            isDark = false
          }
        }
      }
      
      setIsDarkBackground(isDark)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoColor = isDarkBackground ? "white" : "black"
  const textColor = isDarkBackground ? "text-white" : "text-black"
  const borderColor = isDarkBackground ? "border-white" : "border-black"

  return (
    <>
      {/* Header */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-50 px-8 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Not Fixed */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div>
              <img
                src={isDarkBackground ? "/Agency Logo.svg" : "/Agency Logo Black.svg"}
                alt="PushToProd Studio Logo"
                className="h-10 w-auto transition-all duration-300"
              />
            </div>
            <span className={`text-xl font-medium transition-colors duration-300 ${textColor}`}>
              <span className="font-bold">Push</span>
              <span className="font-light">To</span>
              <span className="font-bold">Prod</span>
              {" "}
              <span className="font-bold">Stu</span>
              <span className="font-light">di</span>
              <span className="font-bold">o</span>
            </span>
          </Link>

          {/* Menu Button - Fixed */}
          <div className="fixed top-6 right-8 z-50">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`group relative transition-colors duration-300 ${textColor}`}
            >
              <div className={`w-20 h-20 rounded-full border ${borderColor} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                <div className="flex flex-col gap-2">
                  <div className={`w-8 h-0.5 ${isDarkBackground ? 'bg-white' : 'bg-black'} transition-all duration-300`}></div>
                  <div className={`w-8 h-0.5 ${isDarkBackground ? 'bg-white' : 'bg-black'} transition-all duration-300`}></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Page Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#161616]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6">
                <Link
                  href="/"
                  className="hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="/Agency Logo.svg"
                    alt="PushToProd Studio Logo"
                    className="h-16 w-auto"
                  />
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative text-white"
                >
                  <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">
                    <span className="text-sm font-medium">Close</span>
                  </div>
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 flex items-center px-8 lg:px-16">
                <nav className="w-full max-w-4xl">
                  <motion.div
                    className="space-y-4"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                      },
                      closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                      }
                    }}
                  >
                    {[
                      { label: "Work", href: "#latest-work" },
                      { label: "Expertise", href: "/expertise" },
                      { label: "Blog", href: "/blog" },
                      { label: "Contact", href: "/contact" },
                      { label: "About", href: "/about" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 }
                            }
                          },
                          closed: {
                            y: 50,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 }
                            }
                          }
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-5xl sm:text-6xl lg:text-7xl font-light text-white hover:text-gray-400 transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 flex items-center justify-between">
                <div className="flex gap-8 text-sm text-gray-400">
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Join Us
                  </Link>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </div>

                <Link
                  href="/contact"
                  className="group relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="px-6 py-3 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                    Talk to PTP Studio
                    <svg
                      className="w-4 h-4"
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
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
