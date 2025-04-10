"use client"

import { Footer } from "@/components/footer"
import { ClickableImage } from "@/components/image-viewer"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import { ArrowRight, Info, Sparkles } from "lucide-react"
import { useState } from "react"

export default function PaniniwalPage() {
  const [activeBeliefIndex, setActiveBeliefIndex] = useState<number | null>(null)

  // Array of beliefs with their descriptions and images
  const beliefs = [
    {
      number: 1,
      title: "Pangunguros Bago Pumasok sa Balon",
      description: "Ugaliing manguros bago pumasok sa balon o butas upang mailayo sa kapahamakan.",
      image: "/images/paniniwala/manguros.jpg",
      explanation:
        "Ang pangunguros ay isang paraan ng paghingi ng proteksyon at pagpapakita ng paggalang.",
    },
    {
      number: 2,
      title: "Pagbabawal sa Asin",
      description: "Bawal magdala ng asin sa loob ng butas sapagkat maaaring mawala ang mga ginto.",
      image: "/images/paniniwala/asin.jpg",
      explanation:
        "Ang asin ay simbolo ng pagpapalayas o pagpapaalis, kaya pinaniniwalaan na maaari nitong itaboy ang ginto o ang mga espiritung nagbabantay dito.",
    },
    {
      number: 3,
      title: "Pagbabawal sa Pagkain",
      description: "Bawal magdala ng pagkain sapagkat maaaring maitaboy ang ginto.",
      image: "/images/paniniwala/pagkain.jpg",
      explanation:
        "Katulad ng asin, ang pagkain ay maaaring magdulot nang pagkawala ng ginto.",
    },
    {
      number: 4,
      title: "Pag-aalay Tuwing Martes",
      description:
        "Tuwing Martes magsasagawa ng pag-aalay ng manok, baboy o kambing bilang tanda ng respeto sa mga nilalang na hindi nakikita.",
        image: "/images/paniniwala/manok.jpg",
        explanation:
        "Ang pag-aalay ay isang paraan ng pagbibigay-galang at paghingi ng pahintulot sa mga espiritu ng bundok o lupa upang payagan ang mga minero na kumuha ng ginto.",
    },
    {
      number: 5,
      title: "Pagpapadugo Tuwing Biyernes",
      description: "Tuwing Biyernes magpapadugo upang magkaroon ng ginto ang matigas na parte ng lupa.",
      image: "/images/paniniwala/magpapadugo.jpg",
      explanation:
        "Ang pagpapadugo ay isang ritwal na pinaniniwalaan na nagpapahintulot sa mga minero na makakuha ng ginto mula sa matitigas na bahagi ng lupa.",
    },
  ]

  const handleBeliefClick = (index: number) => {
    setActiveBeliefIndex(activeBeliefIndex === index ? null : index)
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
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4"
              >
                <Sparkles className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Mga Paniniwala sa Pagkakabod
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang mga sumusunod ay ilan sa mga tradisyonal na paniniwala at pamahiin na sinusunod ng mga minero sa
                proseso ng pagkakabod o pagmimina ng ginto sa Jose Panganiban.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto">
            {/* Beliefs cards */}
            <div className="space-y-12 mb-16">
              {beliefs.map((belief, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <motion.div
                    className={`rounded-xl overflow-hidden border border-gold/20 transition-all duration-500 ${
                      activeBeliefIndex === index
                        ? "bg-white shadow-[0_10px_30px_rgba(166,142,87,0.2)]"
                        : "bg-white hover:bg-white shadow-md hover:shadow-[0_5px_20px_rgba(166,142,87,0.15)]"
                    }`}
                    whileHover={{ y: -5 }}
                    onClick={() => handleBeliefClick(index)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image section */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <ClickableImage
                          src={belief.image || "/placeholder.svg"}
                          alt={belief.title}
                          fill
                          className={`object-cover transition-all duration-700 ${
                            activeBeliefIndex === index ? "scale-105" : "hover:scale-105"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10 pointer-events-none">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-charcoal-dark font-bold text-lg">
                              {belief.number}
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              {belief.title}
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <p className="text-gold-dark/80 text-lg mb-6">{belief.description}</p>

                        {/* Explanation section - visible when active */}
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: activeBeliefIndex === index ? 1 : 0,
                            height: activeBeliefIndex === index ? "auto" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gold/10">
                            <div className="flex items-start gap-3">
                              <Info className="h-5 w-5 text-teal-light flex-shrink-0 mt-0.5" />
                              <div>
                                <h3 className="text-sm font-medium text-gold mb-2">Kahalagahan:</h3>
                                <p className="text-sm text-gold/70">{belief.explanation}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Call to action */}
                        <div
                          className={`mt-4 text-sm text-teal-light flex items-center ${
                            activeBeliefIndex === index ? "opacity-0" : "opacity-100"
                          } transition-opacity duration-300`}
                        >
                          <span>I-click para sa karagdagang impormasyon</span>
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Summary section */}
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 p-8 rounded-xl border border-gold/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
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

            {/* Call to action */}
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="mt-12 text-center">
               {/* <Button
                  asChild
                  className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal-dark font-semibold px-8 py-6 text-lg shadow-[0_5px_20px_rgba(166,142,87,0.3)] hover:shadow-[0_5px_30px_rgba(166,142,87,0.5)]"
                >
                  <Link href="/paniniwala/mga-paniniwala-sa-pagkakabod">
                    <span className="flex items-center">
                      Alamin ang Higit Pa Tungkol sa mga Paniniwala
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button> */}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

