"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/logo.png" alt="Background pattern" fill className="object-cover" priority />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          E-Gintolao
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gold-light max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dokumentasyon ng Kulturang Pagmimina ng Ginto sa Jose Panganiban, Camarines Norte
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="default"
            className="bg-gold hover:bg-gold-light text-charcoal hover:text-charcoal-dark"
            onClick={() => router.push("/dokumentasyon")}
          >
            Tingnan ang Dokumentasyon
          </Button>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10"
            onClick={() => router.push("/interactive")}
          >
            Mga Aktibidad
          </Button>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gold flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-gold rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </div>
  )
}

