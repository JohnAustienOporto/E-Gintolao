"use client"

import { motion } from "framer-motion"
import { Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-slate border-t border-gold/10 bg-charcoal-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-lg font-bold mb-4 text-gold-light">E-Gintolao</h3>
            <p className="text-sm text-slate">
              Dokumentasyon ng mga wika at kultural na gawain ng mga komunidad na nagpapanning ng ginto sa Jose
              Panganiban, Camarines Norte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gold-light">Mga Link</h3>
            <ul className="space-y-2">
              {[
                { name: "Mga Pagkakakilanlan", path: "/pagkakakilanlan" },
                { name: "Gawi", path: "/gawi" },
                { name: "Mga Wika", path: "/mga-wika" },
                { name: "Dokumentasyon", path: "/dokumentasyon" },
                { name: "Tungkol sa Mananaliksik", path: "/tungkol-sa-mananaliksik" },
              ].map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={item.path} className="text-sm hover:underline hover:text-teal-light transition-colors">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 rounded-lg bg-charcoal-light border border-gold/10 shadow-md"
          >
            <h3 className="text-lg font-bold mb-4 text-gold-light">Makipag-ugnayan</h3>
            <p className="text-sm mb-4 text-slate">Para sa mga katanungan o komento, makipag-ugnayan sa amin.</p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a 
                  href="https://www.facebook.com/manilyn.clores.90#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-light transition-colors block"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gold/10 mt-8 pt-8 text-center text-sm text-slate/60">
          <p>&copy; {currentYear} E-Gintolao. Lahat ng karapatan ay nakalaan.</p>
        </div>
      </div>
    </footer>
  )
}