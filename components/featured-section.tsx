"use client"

import { CategoryCard } from "@/components/category-card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useEffect, useState } from "react"

export function FeaturedSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    {
      title: "Mga Pagkakakilanlan",
      description: "Alamin ang iba't ibang pagkakakilanlan ng mga komunidad ng gold panning",
      imageSrc: "/images/pagkakakilanlan.jpg",
      href: "/pagkakakilanlan",
    },
    {
      title: "Gawi",
      description: "Tuklasin ang mga tradisyonal na gawi at kaugalian",
      imageSrc: "/images/gawi.jpg",
      href: "/gawi",
    },
    {
      title: "Paniniwala",
      description: "Pag-aralan ang mga paniniwala at ritwal na may kaugnayan sa pagmimina ng ginto",
      imageSrc: "/images/paniniwala.jpg",
      href: "/paniniwala",
    },
    {
      title: "Pamamaraan",
      description: "Alamin ang mga tradisyonal at makabagong pamamaraan ng pagmimina",
      imageSrc: "/images/pamama.jpg",
      href: "/pamamaraan",
    },
    {
      title: "Kagamitan",
      description: "Kilalanin ang mga kagamitang ginagamit sa pagmimina ng ginto",
      imageSrc: "/images/kagamitan.png",
      href: "/kagamitan",
    },
    {
      title: "Proseso",
      description: "Intindihin ang buong proseso ng pagmimina at pagproseso ng ginto",
      imageSrc: "/images/proseso.png",
      href: "/proseso",
    },
    {
      title: "Mga Wika",
      description: "Pag-aralan ang mga salita at terminolohiyang ginagamit sa industriya",
      imageSrc: "/images/wika1.png",
      href: "/mga-wika",
    },
    {
      title: "Dokumentasyon",
      description: "Alamin ang ilan sa mga hakbang na isinigawa",
      imageSrc: "/images/panayam-1.jpg",
      href: "/dokumentasyon",
    },
  ]

  if (!mounted) return null

  return (
    <section className="py-16 w-full bg-charcoal relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/50 to-charcoal opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      {/* Content container - centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-12 p-8 glass-card shadow-card">
            <h2 className="text-3xl font-bold mb-4 text-lavender">Mga Kategorya</h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Tuklasin ang iba't ibang aspeto ng kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose
              Panganiban
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <CategoryCard
                title={category.title}
                description={category.description}
                imageSrc={category.imageSrc}
                href={category.href}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

