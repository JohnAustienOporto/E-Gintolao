"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import { BookOpen, Coins, Gift, Heart, Shield, Sparkles, UserCheck, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function GawiPage() {
  const [activeCustomIndex, setActiveCustomIndex] = useState<number | null>(null)

  // Array of customs with their descriptions, icons, and images
  const customs = [
    {
      number: 1,
      title: "Pamimigay ng Ginto",
      description:
        "Mamigay ng ginto sa mga taong nagkukulipaw o humihingi ng ginto kapalit ang ilang bagay tulad ng isda, pagkain at iba pa.",
      icon: Gift,
      image: "/images/gawi/pamimigay.jpg", // Add specific image for this custom
      details:
        "Ang pamimigay ng ginto sa mga taong nagkukulipaw o humihingi nito ay isang mahalagang bahagi ng kultura ng mga minero sa Jose Panganiban. Ito ay nagpapakita ng kanilang kagandahang-loob at pagiging bukas-palad sa kabila ng kanilang sariling pangangailangan. Ang gawaing ito ay nagpapalakas din ng ugnayan sa komunidad at nagtataguyod ng diwa ng pagbabayanihan at pagtutulong-tulong.",
    },
    {
      number: 2,
      title: "Paglalagay ng Palapot",
      description: "Maglagay ng palapot sa paligad ng butas ng kabodan upang maiwasan ang aksidente.",
      icon: Shield,
      image: "/images/gawi/paglalagay.jpg", // Add specific image for this custom
      details:
        "Ang paglalagay ng palapot sa paligid ng butas ng kabodan ay isang mahalagang gawi para sa kaligtasan ng mga minero. Ang palapot ay nagsisilbing proteksyon upang maiwasan ang mga aksidente tulad ng pagguho ng lupa o pagbagsak ng mga tao sa butas. Ito ay nagpapakita ng pagpapahalaga ng mga minero sa kaligtasan at kalusugan ng bawat isa, pati na rin ang kanilang responsibilidad sa komunidad.",
    },
    {
      number: 3,
      title: "Pagpapamana ng Pagkakabod",
      description: "Nakagawian na nilang ipamana ang pagkakabod sa kanilang mga anak.",
      icon: Users,
      image: "/images/gawi/pagpapamana.jpg", // Add specific image for this custom
      details:
        "Ang pagpapamana ng pagkakabod sa mga anak ay isang tradisyon na nagpapatuloy sa loob ng maraming henerasyon. Ito ay hindi lamang tungkol sa pagpapasa ng hanapbuhay, kundi pati na rin ang pagpapasa ng kaalaman, kasanayan, at mga sekreto ng kalakalan. Sa pamamagitan nito, ang mayamang kultura at tradisyon ng pagmimina ay nananatiling buhay at patuloy na umuunlad sa kabila ng modernisasyon at pagbabago.",
    },
    {
      number: 4,
      title: "Paggastos ng Kita",
      description:
        "Sa tuwing ang isang magkakabod ay paldo o maraming pera dulot ng ginto nakasanayan na nilang bumili ng mga pangangailangan sa bahay ay pumunta sa sugalan pagkatapos.",
      icon: Coins,
      image: "/images/gawi/paggastos.jpg", // Add specific image for this custom
      details:
        "Ang paggastos ng kita mula sa pagmimina ay may kakaibang pattern sa mga minero sa Jose Panganiban. Kapag sila ay 'paldo' o may malaking kita mula sa ginto, una nilang binibili ang mga pangangailangan sa bahay upang matiyak na may sapat na pagkain at iba pang pangunahing pangangailangan ang kanilang pamilya. Pagkatapos nito, karaniwan na silang pumupunta sa sugalan, na nagpapakita ng balanse sa pagitan ng responsibilidad sa pamilya at personal na kasiyahan o libangan.",
    },
  ]

  // Toggle active custom
  const handleCustomClick = (index: number) => {
    setActiveCustomIndex(activeCustomIndex === index ? null : index)
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[100px] pointer-events-none"></div>

      <Navbar />

      <div className="flex-grow pt-28 md:pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4"
              >
                <Heart className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Mga Gawi at Tradisyon
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may mayayamang gawi at tradisyon na
                nagpapakita ng kanilang natatanging kultura.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-8">
                <h2 className="text-2xl font-bold text-gold-light mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2" />
                  Mga Karaniwang Gawi
                </h2>
                <p className="text-slate/80">
                  Ang mga sumusunod ay ang mga karaniwang gawi at kaugalian ng mga minero sa Jose Panganiban. Ang mga
                  gawaing ito ay nagpapakita ng kanilang kultura, tradisyon, at pamumuhay bilang mga manggagawa sa
                  industriya ng pagmimina ng ginto.
                </p>
              </div>
            </ScrollAnimation>

            <motion.div className="space-y-8 mb-16" variants={containerVariants} initial="hidden" animate="visible">
              {customs.map((custom, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl overflow-hidden border border-gold/20 transition-all duration-500 ${
                    activeCustomIndex === index
                      ? "bg-white shadow-[0_10px_30px_rgba(166,142,87,0.2)]"
                      : "bg-white hover:bg-white shadow-md hover:shadow-[0_5px_20px_rgba(166,142,87,0.15)]"
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon section */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          boxShadow:
                            activeCustomIndex === index
                              ? "0 0 25px rgba(166, 142, 87, 0.7)"
                              : "0 0 10px rgba(166, 142, 87, 0.3)",
                        }}
                      >
                        <custom.icon className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content section */}
                    <div className="flex-grow cursor-pointer" onClick={() => handleCustomClick(index)}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal-dark font-bold text-lg">
                          {custom.number}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gold-dark">{custom.title}</h3>
                      </div>
                      <p className="text-lg text-gold-dark/90 mb-4">{custom.description}</p>

                      {/* Image section */}
                      <div className="mb-4">
                        <Image
                          src={custom.image}
                          alt={custom.title}
                          width={500}
                          height={300}
                          className="w-full object-cover rounded-xl max-w-[400px] max-h-[250px]" // Adjusted max-width and max-height
                        />
                      </div>

                      {/* Details section - visible when active */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeCustomIndex === index ? 1 : 0,
                          height: activeCustomIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gold/10">
                          <div className="flex items-start gap-3">
                            <BookOpen className="h-5 w-5 text-teal-light flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium text-gold-dark mb-2">Kahalagahan:</h4>
                              <p className="text-sm text-gold-dark/90">{custom.details}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Call to action */}
                      <div
                        className={`mt-4 text-sm text-teal-light flex items-center ${
                          activeCustomIndex === index ? "opacity-0" : "opacity-100"
                        } transition-opacity duration-300`}
                      >
                        <span>I-click para sa karagdagang impormasyon</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-12">
              <Image
                src="/images/gawi.jpg"
                alt="Mga gawi at tradisyon ng mga minero sa Jose Panganiban"
                fill
                className="object-cover max-w-[100%] max-h-[300px]" // Adjusted max-width and max-height
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-3xl font-bold text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Mayamang Kultural na Pamana
                </h2>
                <p className="text-slate-50 max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Ang mga gawi at tradisyon ng mga minero ay nagpapakita ng kanilang malalim na koneksyon sa lupa, sa
                  isa't isa, at sa mga espiritung nananalig nilang nagbabantay sa kanilang kabuhayan.
                </p>
              </div>
            </div>

            {/* Summary section */}
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 p-8 rounded-xl border border-gold/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                  <UserCheck className="h-6 w-6 mr-3 text-gold" />
                  Kahalagahan ng mga Gawi at Tradisyon
                </h2>
                <div className="prose prose-sm max-w-none text-slate/80">
                  <p>
                    Ang mga gawi at tradisyong ito ay hindi lamang simple ritwal kundi nagpapakita ng malalim na
                    koneksyon sa kultura at pagkakakilanlan ng komunidad. Ang mga sumusunod ay ilan sa mga dahilan kung
                    bakit mahalaga ang mga gawi at tradisyong ito:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapanatili ng Kultura</strong> - Ang mga gawi at tradisyon
                      ay tumutulong sa pagpapanatili ng mayamang kultura ng mga komunidad na nagpapanning ng ginto sa
                      Jose Panganiban.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapalakas ng Komunidad</strong> - Ang mga ritwal at
                      seremonya ay nagbibigay ng pagkakataon para sa mga minero na magtipon at magpalakas ng kanilang
                      pagkakaisa bilang isang komunidad.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapasa ng Kaalaman</strong> - Ang mga tradisyon ay
                      naglalaman ng mahahalagang kaalaman at kasanayan na ipinasa mula sa isang henerasyon patungo sa
                      susunod.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Espirituwal na Kapanatagan</strong> - Ang mga ritual at
                      paniniwala ay nagbibigay ng espirituwal na kapanatagan at direksiyon sa mga minero sa kanilang
                      mapanganib na trabaho.
                    </li>
                  </ul>
                  <p className="mt-6">
                    Sa kabila ng modernisasyon at pagbabago sa industriya ng pagmimina, marami pa ring minero ang
                    patuloy na sumusunod sa mga tradisyonal na gawi at paniniwala, na nagpapakita ng kanilang
                    kahalagahan sa kultura at pagkakakilanlan ng mga komunidad na ito.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
