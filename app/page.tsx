"use client"

import { AboutSection } from "@/components/about-section"
import { FeaturedSection } from "@/components/featured-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-charcoal"
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 rounded-full border-4 border-charcoal-light border-t-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.p
              className="mt-4 text-xl font-medium text-gold-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              E-Gintolao
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center overflow-x-hidden"
        >
          <Navbar className="absolute top-0 left-0 right-0 z-20 bg-transparent" />
          <div className="w-full">
            {/* Hero section with full width */}
            <HeroSection />

            {/* Center the content sections with max-width */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-charcoal-dark">
              <FeaturedSection />
              <AboutSection />
            </div>
          </div>
          <Footer className="w-full" />
        </motion.main>
      )}
    </AnimatePresence>
  )
}

