"use client"

import { useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  return (
    <div
      ref={containerRef}
      className="relative bg-[#1a1a1a] py-32 px-8 overflow-hidden cursor-none"
      data-section="cta"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom cursor */}
      <motion.div
        className="pointer-events-none absolute z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-white flex items-center justify-center"
          animate={{
            width: isHovered ? 120 : 0,
            height: isHovered ? 120 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-white text-xs font-medium tracking-wider"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Talk To PTP Studio
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Logo */}
      <div className="max-w-7xl mx-auto mb-12">
        <img 
          src="/Agency Logo.svg" 
          alt="PushToProd Studio Logo" 
          className="h-20 w-auto"
        />
      </div>

      {/* Main heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8">
          Ready to talk about
          <br />
          your project?
        </h2>
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto flex justify-end">
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center"
        >
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white flex items-center justify-center transition-colors hover:bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white text-sm font-medium tracking-wider group-hover:text-black transition-colors">
              Talk To PTP Studio
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
