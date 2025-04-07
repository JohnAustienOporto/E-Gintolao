"use client"
import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ClickableImage } from "@/components/image-viewer"

export function AboutSection() {
  return (
    <ScrollAnimation animation="fade-in-up">
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gold-light"
            >
              Tungkol sa E-Gintolao
            </motion.h2>
            <p className="text-lg text-slate/90 max-w-2xl mx-auto">
              Ang E-Gintolao ay isang proyekto ng dokumentasyon na naglalayong mapreserba at maipasa sa susunod na
              henerasyon ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban,
              Camarines Norte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <ClickableImage
                src="/images/jpang.jpg"
                alt="Jose Panganiban, Camarines Norte"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-gold-light">
              <p>
                Ang proyektong ito ay naglalayong mapanatili ang mga tradisyon at kaalaman ng mga komunidad na ito sa
                pamamagitan ng pagkolekta at pag-iimbak ng mga impormasyon tungkol sa kanilang kultura, wika, at
                pamamaraan ng pagmimina.
              </p>
              <p>
                Sa pamamagitan ng proyektong ito, inaasahan naming makatulong sa pagpapalaganap ng kamalayan tungkol sa
                mayamang kultura ng mga komunidad na ito at sa pagpapanatili ng kanilang pagkakakilanlan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

