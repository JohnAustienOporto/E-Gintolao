"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Info, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

export default function MgaPaniniwalaSaPagkakabodPage() {
  const [activeBeliefIndex, setActiveBeliefIndex] = useState<number | null>(0)

  // Array of beliefs with their descriptions and images
  const beliefs = [
    {
      number: 1,
      title: "Panguguros Bago Pumasok sa Balon",
      description: "Ugaliing manguros bago pumasok sa balon o butas upang mailayo sa kapahamakan.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manguros.jpg-AH1iH9pfrwFUCtDJb6ce501rPXAIaq.jpeg",
      explanation:
        "Ang panguguros ay isang paraan ng paghingi ng proteksyon at pagpapakita ng paggalang sa mga espiritu ng bundok o lupa. Ito ay isang gawain na nagpapakita ng malalim na paniniwala ng mga minero sa presensya ng mga espiritu at sa kahalagahan ng paghingi ng kanilang basbas bago pumasok sa kanilang teritoryo.",
      practices: [
        "Paggawa ng tanda ng krus bago pumasok sa butas",
        "Pagdarasal ng maikling panalangin para sa kaligtasan",
        "Paghingi ng pahintulot sa mga espiritu ng bundok",
      ],
    },
    {
      number: 2,
      title: "Pagbabawal sa Asin",
      description: "Bawal magdala ng asin sa loob ng butas sapagkat maaaring mawala ang mga ginto.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asin.jpg-w5nZOhr2afCemwN4lSKuJ5RFi01fAE.jpeg",
      explanation:
        "Ang asin ay simbolo ng pagpapalayas o pagpapaalis, kaya pinaniniwalaan na maaari nitong itaboy ang ginto o ang mga espiritung nagbabantay dito. Sa maraming kultura, ang asin ay ginagamit para itaboy ang masasamang espiritu, kaya sa konteksto ng pagmimina, iniiwasan ito para hindi matakot ang mga espiritung nagbabantay sa ginto.",
      practices: [
        "Pag-iwan ng asin sa labas ng butas",
        "Paghuhugas ng kamay kung nakahawak ng asin bago pumasok",
        "Pagbibigay ng kapalit na alay kung nakapasok ng asin sa butas",
      ],
    },
    {
      number: 3,
      title: "Pagbabawal sa Pagkain",
      description: "Bawal magdala ng pagkain sapagkat maaaring maitaboy ang ginto.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pagkain.jpg-flwZrUMzIlER5zPXlH9CqxoQ0x54Le.jpeg",
      explanation:
        "Katulad ng asin, ang pagkain ay maaaring magdulot ng pagkagalit ng mga espiritu o maaaring maging dahilan ng pagkawala ng ginto. Ang amoy at presensya ng pagkain ay maaaring makagambala sa mga espiritung nagbabantay sa ginto, o maaari ring makaakit ng ibang mga espiritu na maaaring maging sanhi ng kaguluhan sa loob ng minahan.",
      practices: [
        "Pagkain muna bago pumasok sa butas",
        "Paglilinis ng mga kamay at bibig pagkatapos kumain",
        "Pag-aalay ng pagkain sa labas ng butas para sa mga espiritu",
      ],
    },
    {
      number: 4,
      title: "Pag-aalay Tuwing Martes",
      description:
        "Tuwing Martes magsasagawa ng pag-aalay ng manok, baboy o kambing bilang tanda ng respeto sa mga nilalang na hindi nakikita.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manok.jpg-TKHPLDiNu92Y9CTsc5vYBsCQHvC5Qj.jpeg",
      explanation:
        "Ang pag-aalay ay isang paraan ng pagbibigay-galang at paghingi ng pahintulot sa mga espiritu ng bundok o lupa upang payagan ang mga minero na kumuha ng ginto. Ang Martes ay itinuturing na espesyal na araw para sa mga espiritu, kaya sa araw na ito isinasagawa ang mga pag-aalay upang matiyak ang kanilang kooperasyon at proteksyon.",
      practices: [
        "Pag-aalay ng puting manok o baboy",
        "Pagdarasal at pagbibigkas ng mga espesyal na salita",
        "Pagsasagawa ng seremonya sa pasukan ng butas",
        "Pagpapahid ng dugo ng inalay na hayop sa mga kagamitan",
      ],
    },
    {
      number: 5,
      title: "Pagpapadugo Tuwing Biyernes",
      description: "Tuwing Biyernes magpapadugo upang magkaroon ng ginto ang matigas na parte ng lupa.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magpapadugo.jpg-T2keCfqgsu7R92IjuhxSaWO81937kq.jpeg",
      explanation:
        "Ang pagpapadugo ay isang ritwal na pinaniniwalaan na nagpapahintulot sa mga minero na makakuha ng ginto mula sa matitigas na bahagi ng lupa. Ang dugo ay itinuturing na may kapangyarihang magpalambot ng lupa at magbukas ng daan para sa ginto. Ang Biyernes ay itinuturing na araw ng sakripisyo, kaya sa araw na ito isinasagawa ang ritwal na ito.",
      practices: [
        "Pagpapadugo ng hayop sa mismong lugar na hinuhukay",
        "Pagbibigkas ng mga espesyal na dasal o orasyon",
        "Pagsasagawa ng seremonya kasama ang buong grupo ng mga minero",
        "Pag-iwan ng mga alay kasama ang dugo",
      ],
    },
  ]

  const handleBeliefClick = (index: number) => {
    setActiveBeliefIndex(index)
  }

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
          <div className="max-w-7xl mx-auto">
            {/* Header with back button */}
            <div className="mb-8">
              <Link
                href="/paniniwala"
                className="inline-flex items-center text-teal hover:text-teal-light transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Bumalik sa Mga Paniniwala</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left sidebar - Belief navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden">
                    <div className="p-6 border-b border-gold/10">
                      <h2 className="text-xl font-bold text-gold-light flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-gold" />
                        Mga Paniniwala
                      </h2>
                    </div>
                    <div className="p-4">
                      <motion.ul className="space-y-2" variants={containerVariants} initial="hidden" animate="visible">
                        {beliefs.map((belief, index) => (
                          <motion.li key={index} variants={itemVariants}>
                            <button
                              className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center ${
                                activeBeliefIndex === index
                                  ? "bg-gold/20 text-gold-light shadow-[0_0_10px_rgba(166,142,87,0.2)]"
                                  : "hover:bg-charcoal-dark/50 text-slate/80 hover:text-slate"
                              }`}
                              onClick={() => handleBeliefClick(index)}
                            >
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                  activeBeliefIndex === index
                                    ? "bg-gold text-charcoal-dark"
                                    : "bg-charcoal-dark text-slate/80"
                                }`}
                              >
                                {belief.number}
                              </div>
                              <span className="line-clamp-1">{belief.title}</span>
                            </button>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="lg:col-span-2">
                {activeBeliefIndex !== null && (
                  <motion.div
                    key={activeBeliefIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden">
                      {/* Image header */}
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={beliefs[activeBeliefIndex].image || "/placeholder.svg"}
                          alt={beliefs[activeBeliefIndex].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-charcoal-dark font-bold text-xl">
                              {beliefs[activeBeliefIndex].number}
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              {beliefs[activeBeliefIndex].title}
                            </h1>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <p className="text-slate/90 text-lg mb-8 border-b border-gold/10 pb-6">
                          {beliefs[activeBeliefIndex].description}
                        </p>

                        <div className="space-y-8">
                          {/* Explanation section */}
                          <div>
                            <h2 className="text-xl font-semibold text-gold-light mb-4 flex items-center">
                              <Info className="h-5 w-5 mr-2" />
                              Kahulugan at Kahalagahan
                            </h2>
                            <p className="text-slate/80">{beliefs[activeBeliefIndex].explanation}</p>
                          </div>

                          {/* Practices section */}
                          <div>
                            <h2 className="text-xl font-semibold text-gold-light mb-4">Mga Kasanayan</h2>
                            <ul className="space-y-3">
                              {beliefs[activeBeliefIndex].practices.map((practice, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10"
                                >
                                  <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-light flex items-center justify-center mr-3 flex-shrink-0">
                                    {idx + 1}
                                  </span>
                                  <span className="text-slate/80">{practice}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Navigation buttons */}
                          <div className="flex justify-between pt-6 border-t border-gold/10 mt-8">
                            <Button
                              variant="outline"
                              className="border-gold/30 hover:bg-gold/10 text-gold-light"
                              onClick={() =>
                                handleBeliefClick((activeBeliefIndex - 1 + beliefs.length) % beliefs.length)
                              }
                              disabled={beliefs.length <= 1}
                            >
                              <ArrowLeft className="h-4 w-4 mr-2" />
                              Nakaraang Paniniwala
                            </Button>
                            <Button
                              variant="outline"
                              className="border-gold/30 hover:bg-gold/10 text-gold-light"
                              onClick={() => handleBeliefClick((activeBeliefIndex + 1) % beliefs.length)}
                              disabled={beliefs.length <= 1}
                            >
                              Susunod na Paniniwala
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Summary section */}
            <ScrollAnimation animation="fade-in-up">
              <div className="mt-12 bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 p-8 rounded-xl border border-gold/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 mr-3 text-gold" />
                  Kahalagahan ng mga Paniniwala
                </h2>
                <div className="prose prose-sm max-w-none text-slate/80">
                  <p>
                    Ang mga paniniwalang ito ay hindi lamang simpleng pamahiin kundi nagpapakita ng malalim na koneksyon
                    ng mga minero sa kalikasan at sa mundo ng espiritu. Ang mga sumusunod ay ilan sa mga dahilan kung
                    bakit mahalaga ang mga paniniwalang ito:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Kaligtasan</strong> - Marami sa mga paniniwalang ito ay
                      naglalayong matiyak ang kaligtasan ng mga minero sa kanilang mapanganib na trabaho.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapanatili ng Disiplina</strong> - Ang mga paniniwala at
                      ritwal ay nagsisilbing paraan upang mapanatili ang disiplina at kaayusan sa loob ng minahan.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapalakas ng Komunidad</strong> - Ang mga ritwal at
                      seremonya ay nagbibigay ng pagkakataon para sa mga minero na magtipon at magpalakas ng kanilang
                      pagkakaisa bilang isang komunidad.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapanatili ng Kultura</strong> - Ang mga paniniwalang ito
                      ay bahagi ng mayamang kultural na pamana ng mga komunidad na nagpapanning ng ginto sa Jose
                      Panganiban.
                    </li>
                  </ul>
                  <p className="mt-6">
                    Sa kabila ng modernisasyon at pagbabago sa industriya ng pagmimina, marami pa ring minero ang
                    patuloy na sumusunod sa mga tradisyonal na paniniwalang ito, na nagpapakita ng kanilang kahalagahan
                    sa kultura at pagkakakilanlan ng mga komunidad na ito.
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

