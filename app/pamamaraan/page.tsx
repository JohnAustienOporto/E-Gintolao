"use client"

import { Footer } from "@/components/footer"
import { ClickableImage } from "@/components/image-viewer"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import { Hammer, Info, Sparkles } from "lucide-react"
import { useState } from "react"

export default function PamamaraanPage() {
  const [activeMethodIndex, setActiveMethodIndex] = useState<number | null>(null)

  // Array of mining methods with their descriptions and images
  const miningMethods = [
    {
      number: 1,
      title: "Paggamit ng bareta at pala",
      description: "Paggamit ng bareta at pala upang mas mapabilis ang paghukay ng butas.",
      image: "/images/tools/bareta.png",
      details:
        "Ang bareta at pala ay mga pangunahing kagamitan sa pagmimina. Ang bareta, na may matalas na dulo, ay ginagamit para sa pagbasag ng matitigas na bato at lupa, habang ang pala ay ginagamit para sa paghukay at pagkolekta ng lupa o buhangin na maaaring naglalaman ng ginto. Ang kombinasyon ng dalawang kagamitang ito ay nagbibigay-daan sa mga minero na mas mabilis at mas epektibong makapaghukay ng butas.",
      secondaryImage: "/images/tools/pala.png",
    },
    {
      number: 2,
      title: "Paggamit ng compressor",
      description: "Paggamit ng compressor upang masa mapadali ang kanilang pagtratrabaho.",
      image: "/images/tools/compressor.png",
      details:
        "Ang compressor ay isang makina na ginagamit sa pagsisid ng mga bosero sa proseso ng pagmimina. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig habang nagtatrabaho. Ang kagamitang ito ay napakahalaga lalo na sa mga lugar na may tubig o sa mga malalim na butas na may tubig, dahil nagbibigay ito ng kakayahan sa mga minero na manatili sa ilalim ng tubig nang mas matagal at mas ligtas.",
      secondaryImage: null,
    },
    {
      number: 3,
      title: "Pagsasagawa ng pag-sample",
      description: "Pagsasagawa ng pag sample sa isang lupa upang malaman kung may ginto ba o ito wala.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0871e5ac-c73d-487b-aa70-8046b6a6ee7a.jpg-DPRAkpDEgmpy4DmJFiwwWY2D3qKLru.jpeg",
      details:
        "Ang pag-sample ng lupa ay isang mahalagang hakbang bago magsimula ng malakihang operasyon ng pagmimina. Sa pamamagitan nito, malalaman ng mga minero kung ang isang lugar ay may potensyal na deposito ng ginto o wala. Ang prosesong ito ay karaniwang kinabibilangan ng pagkuha ng maliit na halaga ng lupa o bato mula sa iba't ibang bahagi ng lugar, at pagkatapos ay susuriin ito gamit ang iba't ibang pamamaraan tulad ng pagpapanning o paggamit ng mga kemikal upang matukoy ang presensya ng ginto.",
      secondaryImage: null,
    },
    {
      number: 4,
      title: "Paggamit ng putok",
      description: "Paggamit ng putok upang mas mapabilis ang pagbungkal ng lupang matigas.",
      image: "/images/blast.jpg",
      details:
        "Ang putok o explosives ay ginagamit upang mapabilis ang pagbungkal o pagbasag ng matitigas na bato at lupa. Ito ay partikular na kapaki-pakinabang sa mga lugar na may matitigas na geological formation na mahirap basagin gamit ang mga manual na kagamitan. Gayunpaman, ang paggamit ng putok ay nangangailangan ng espesyal na kaalaman at pag-iingat upang matiyak ang kaligtasan ng mga minero at ang minimal na epekto sa kapaligiran.",
      secondaryImage: null,
    },
  ]

  // Toggle active method
  const handleMethodClick = (index: number) => {
    setActiveMethodIndex(activeMethodIndex === index ? null : index)
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
                <Hammer className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Mga Pamamaraan
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay gumagamit ng iba't ibang pamamaraan sa
                paghahanap, pagkuha, at pagproseso ng ginto.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-8">
                <h2 className="text-2xl font-bold text-gold-light mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2" />
                  Mga Pangunahing Pamamaraan
                </h2>
                <p className="text-slate/80">
                  Ang mga sumusunod ay ang mga pangunahing pamamaraan na ginagamit ng mga minero sa Jose Panganiban para
                  sa mas mabilis at epektibong pagmimina ng ginto. Ang mga pamamaraang ito ay nagpapakita ng kakayahan
                  ng mga minero na umangkop sa iba't ibang kondisyon at hamon sa pagmimina.
                </p>
              </div>
            </ScrollAnimation>

            <motion.div className="space-y-12 mb-16" variants={containerVariants} initial="hidden" animate="visible">
              {miningMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl overflow-hidden border border-gold/20 transition-all duration-500 ${
                    activeMethodIndex === index
                      ? "bg-white shadow-[0_10px_30px_rgba(166,142,87,0.2)]"
                      : "bg-white hover:bg-white shadow-md hover:shadow-[0_5px_20px_rgba(166,142,87,0.15)]"
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => handleMethodClick(index)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image section */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <ClickableImage
                        src={method.image || "/placeholder.svg"}
                        alt={method.title}
                        fill
                        className={`object-contain p-4 transition-all duration-700 ${
                          activeMethodIndex === index ? "scale-105" : "hover:scale-105"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 p-6 z-10 pointer-events-none">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-charcoal-dark font-bold text-lg">
                            {method.number}
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {method.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <p className="text-gold-dark/80 text-lg mb-6">{method.description}</p>

                      {/* Details section - visible when active */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeMethodIndex === index ? 1 : 0,
                          height: activeMethodIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gold/10">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                              <Info className="h-5 w-5 text-teal-light flex-shrink-0 mt-0.5" />
                              <div>
                                <h3 className="text-sm font-medium text-gold mb-2">Detalye:</h3>
                                <p className="text-sm text-gold/70">{method.details}</p>
                              </div>
                            </div>

                            {/* Secondary image if available */}
                            {method.secondaryImage && (
                              <div className="mt-4 relative h-40 w-full rounded-lg overflow-hidden">
                                <ClickableImage
                                  src={method.secondaryImage}
                                  alt={`${method.title} - secondary image`}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Call to action */}
                      <div
                        className={`mt-4 text-sm text-teal-light flex items-center justify-end ${
                          activeMethodIndex === index ? "opacity-0" : "opacity-100"
                        } transition-opacity duration-300`}
                      >
                        <span>I-click para sa karagdagang impormasyon</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Summary section */}
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 p-8 rounded-xl border border-gold/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 mr-3 text-gold" />
                  Kahalagahan ng mga Pamamaraan
                </h2>
                <div className="prose prose-sm max-w-none text-slate/80">
                  <p>
                    Ang mga pamamaraang ito ay hindi lamang nagpapabilis at nagpapahusay ng proseso ng pagmimina, kundi
                    nagpapakita rin ng kakayahan ng mga minero na umangkop sa iba't ibang kondisyon at hamon. Ang mga
                    sumusunod ay ilan sa mga dahilan kung bakit mahalaga ang mga pamamaraang ito:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Kahusayan</strong> - Ang mga pamamaraang ito ay
                      nagbibigay-daan sa mas mabilis at mas mahusay na pagmimina, na nagreresulta sa mas maraming output
                      at mas mataas na kita para sa mga minero.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Kaligtasan</strong> - Ang tamang paggamit ng mga pamamaraang
                      ito, lalo na ang paggamit ng compressor at putok, ay nakakatulong sa pagbabawas ng mga aksidente
                      at panganib sa pagmimina.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagtitipid ng Oras at Lakas</strong> - Ang mga pamamaraang ito
                      ay nakakatulong sa pagtitipid ng oras at lakas ng mga minero, na nagbibigay-daan sa kanila na
                      magtrabaho nang mas mahaba at mas produktibo.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Adaptability</strong> - Ang mga pamamaraang ito ay nagpapakita
                      ng kakayahan ng mga minero na umangkop sa iba't ibang kondisyon at hamon sa pagmimina, na
                      nagpapakita ng kanilang kaalaman at kasanayan.
                    </li>
                  </ul>
                  <p className="mt-6">
                    Sa kabila ng mga benepisyo, mahalagang tandaan na ang mga pamamaraang ito ay dapat gamitin nang may
                    pag-iingat at pagsasaalang-alang sa kapaligiran at kaligtasan ng mga minero at ng komunidad.
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

