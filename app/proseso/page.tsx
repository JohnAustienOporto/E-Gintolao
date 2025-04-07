"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import {
  Anchor,
  ChevronDown,
  ChevronRight,
  Coins,
  FlaskConical,
  Info,
  Package,
  Shovel,
  Sparkles,
  TreePine,
  Workflow,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ProsesoPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  // Process steps for the flowchart
  const processSteps = [
    {
      id: 1,
      label: "Una",
      title: "Pagkuha ng Kahoy",
      description:
        "Mangongorte o kukuha ng mga kahoy mula sa bundok at ito ay bubuhatin patungo sa kabodan upang gawing mga lapad na kahoy o pang timber na magsisilbing pangprotekta sa butas.",
      icon: TreePine,
      color: "from-gold-light to-gold",
    },
    {
      id: 2,
      label: "Sunod",
      title: "Paghukay at Pagporma",
      description:
        "Magsisimula ng maghukay tapos maporma muna, pag sinabing porma mahukay hanggang dibdib. Tapos pag na pormahan na malagay na ng tubig at sisisidin na ng mga bosero.",
      icon: Shovel,
      color: "from-teal-light to-teal",
    },
    {
      id: 3,
      label: "Pagkatapos",
      title: "Pagpapalalim",
      description:
        "Papalalimin hangang 3 lampos o kung gaano kalalim ang isang butas, kung saan bawat lalim ay maglalagay ng lapot.",
      icon: Anchor,
      color: "from-lavender to-purple-600",
    },
    {
      id: 4,
      label: "Sunod",
      title: "Pagsakada",
      description:
        "Magsisimula ng magsakada roon at ipapaangat ang mga nasakada sa ibabaw gamit ang lasdok na nilalagyan ng sakada at baral na man ay ang kasama ng lubid para mahila ng tagabantun o taga-angat.",
      icon: Package,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 5,
      label: "Mula Roon",
      title: "Pagbirik at Pagsuri",
      description:
        "Papabirikin naman iyon ng mga nasa ibabaw at titingnan nila kung may ginto o wala. Kapag may ginto dadalhin naman ito sa ragmilan isang lugar na kung saan isinasalang ang sakada at sisimulan ng lutuin gamit ang asoge at ang burax.",
      icon: FlaskConical,
      color: "from-amber-400 to-amber-600",
    },
    {
      id: 6,
      label: "Panghuli",
      title: "Pagluto at Pagbenta",
      description: "Lulutuin ang ginto sa palayok at maaari ng ibenta ibenta o ipagbili.",
      icon: Coins,
      color: "from-gold-light to-gold-dark",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
                <Workflow className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Proseso ng Pagmimina
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang proseso ng pagmimina at pagproseso ng ginto sa Jose Panganiban ay kinabibilangan ng ilang hakbang,
                mula sa paghahanap ng potensyal na lugar hanggang sa paglilinis at pagbebenta ng ginto.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-12">
                <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2" />
                  Proseso ng Pagkakabod
                </h2>

                {/* Flowchart */}
                <motion.div className="mt-8 relative" variants={containerVariants} initial="hidden" animate="visible">
                  {/* Desktop Flowchart (3x2 Grid) */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-3 gap-6 relative">
                      {/* Connector Lines */}
                      <div className="absolute top-24 left-[16%] w-[25%] h-1 bg-gradient-to-r from-gold via-teal to-lavender"></div>
                      <div className="absolute top-24 left-[58%] w-[25%] h-1 bg-gradient-to-r from-teal via-lavender to-blue-400"></div>
                      <div className="absolute top-[calc(50%+3rem)] left-[16%] w-[25%] h-1 bg-gradient-to-r from-blue-400 via-amber-400 to-gold-dark"></div>
                      <div className="absolute top-[calc(50%+3rem)] left-[58%] w-[25%] h-1 bg-gradient-to-r from-amber-400 via-gold-dark to-gold-light"></div>

                      {/* Vertical Connectors */}
                      <div className="absolute left-[16.5%] top-24 h-[calc(50%-3rem)] w-1 bg-gradient-to-b from-lavender to-blue-400"></div>
                      <div className="absolute left-[83%] top-24 h-[calc(50%-3rem)] w-1 bg-gradient-to-b from-blue-400 to-gold-dark"></div>

                      {processSteps.slice(0, 3).map((step, index) => (
                        <motion.div
                          key={step.id}
                          className="relative z-10"
                          variants={itemVariants}
                          transition={{ duration: 0.5 }}
                          onMouseEnter={() => setHoveredStep(step.id)}
                          onMouseLeave={() => setHoveredStep(null)}
                        >
                          {/* Step Number */}
                          <motion.div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg relative z-20`}
                            whileHover={{ scale: 1.1 }}
                            animate={{
                              boxShadow:
                                hoveredStep === step.id
                                  ? "0 0 25px rgba(166, 142, 87, 0.7)"
                                  : "0 0 10px rgba(166, 142, 87, 0.3)",
                            }}
                          >
                            <step.icon className="h-6 w-6 text-white" />
                          </motion.div>

                          {/* Connector */}
                          {index < 2 && (
                            <motion.div
                              className="absolute top-6 -right-4 transform rotate-[-30deg] text-gold-light"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity:
                                  hoveredStep === step.id || hoveredStep === processSteps[index + 1].id ? 1 : 0.3,
                              }}
                            >
                              <ChevronRight className="h-6 w-6" />
                            </motion.div>
                          )}

                          {/* Step Content */}
                          <motion.div
                            className="bg-white p-4 rounded-lg border border-gold/20 h-[280px] shadow-md flex flex-col overflow-hidden"
                            whileHover={{ y: -5 }}
                            animate={{
                              borderColor:
                                hoveredStep === step.id ? "rgba(166, 142, 87, 0.5)" : "rgba(166, 142, 87, 0.2)",
                              boxShadow:
                                hoveredStep === step.id
                                  ? "0 10px 25px rgba(166, 142, 87, 0.2)"
                                  : "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <div className="text-base font-semibold text-gold-dark mb-1">{step.label}</div>
                            <h3 className="text-xl font-bold text-gold-dark mb-2">{step.title}</h3>
                            <p className="text-base text-gold-dark/90 flex-grow overflow-y-auto">{step.description}</p>
                          </motion.div>
                        </motion.div>
                      ))}

                      {processSteps.slice(3).map((step, index) => (
                        <motion.div
                          key={step.id}
                          className="relative z-10 mt-12"
                          variants={itemVariants}
                          transition={{ duration: 0.5 }}
                          onMouseEnter={() => setHoveredStep(step.id)}
                          onMouseLeave={() => setHoveredStep(null)}
                        >
                          {/* Step Number */}
                          <motion.div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg relative z-20`}
                            whileHover={{ scale: 1.1 }}
                            animate={{
                              boxShadow:
                                hoveredStep === step.id
                                  ? "0 0 25px rgba(166, 142, 87, 0.7)"
                                  : "0 0 10px rgba(166, 142, 87, 0.3)",
                            }}
                          >
                            <step.icon className="h-6 w-6 text-white" />
                          </motion.div>

                          {/* Connector */}
                          {index < 2 && (
                            <motion.div
                              className="absolute top-6 -right-4 transform rotate-[-30deg] text-gold-light"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity:
                                  hoveredStep === step.id || hoveredStep === processSteps[index + 4].id ? 1 : 0.3,
                              }}
                            >
                              <ChevronRight className="h-6 w-6" />
                            </motion.div>
                          )}

                          {/* Step Content */}
                          <motion.div
                            className="bg-white p-4 rounded-lg border border-gold/20 h-[280px] shadow-md flex flex-col overflow-hidden"
                            whileHover={{ y: -5 }}
                            animate={{
                              borderColor:
                                hoveredStep === step.id ? "rgba(166, 142, 87, 0.5)" : "rgba(166, 142, 87, 0.2)",
                              boxShadow:
                                hoveredStep === step.id
                                  ? "0 10px 25px rgba(166, 142, 87, 0.2)"
                                  : "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <div className="text-base font-semibold text-gold-dark mb-1">{step.label}</div>
                            <h3 className="text-xl font-bold text-gold-dark mb-2">{step.title}</h3>
                            <p className="text-base text-gold-dark/90 flex-grow overflow-y-auto">{step.description}</p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Flowchart (Vertical) */}
                  <div className="md:hidden">
                    <div className="relative">
                      {/* Vertical Connector Line */}
                      <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-gold via-teal to-lavender"></div>

                      {processSteps.map((step, index) => (
                        <motion.div
                          key={step.id}
                          className="flex mb-8 relative"
                          variants={itemVariants}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Step Number */}
                          <motion.div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-20 flex-shrink-0`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <step.icon className="h-6 w-6 text-white" />
                          </motion.div>

                          {/* Connector */}
                          {index < processSteps.length - 1 && (
                            <motion.div
                              className="absolute -bottom-4 left-6 transform translate-x-[-50%] text-gold-light"
                              initial={{ opacity: 0.3 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                            >
                              <ChevronDown className="h-6 w-6" />
                            </motion.div>
                          )}

                          {/* Step Content - Updated with white background and darker gold text */}
                          <motion.div
                            className="bg-white p-4 rounded-lg border border-gold/20 ml-4 flex-1 shadow-md min-h-[120px] flex flex-col"
                            whileHover={{ x: 5 }}
                            whileTap={{ x: 0 }}
                            animate={{
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <div className="text-base font-semibold text-gold-dark mb-1">{step.label}</div>
                            <h3 className="text-2xl font-bold text-gold-dark mb-2">{step.title}</h3>
                            <p className="text-lg text-gold-dark/90 flex-grow">{step.description}</p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>

            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-12">
              <Image
                src="/images/proseso.png"
                alt="Proseso ng pagmimina sa Jose Panganiban"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-3xl font-bold text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Mga Hakbang sa Proseso
                </h2>
                <p className="text-slate-50 max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Ang proseso ng pagkakabod ay nangangailangan ng maraming hakbang at kasanayan upang maging matagumpay.
                </p>
              </div>
            </div>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <h3 className="text-xl font-semibold text-gold-light mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Mga Tradisyonal na Proseso
                  </h3>
                  <p className="text-slate/80">
                    Ang mga tradisyonal na proseso ng pagmimina ng ginto sa Jose Panganiban ay nagmula pa sa mga
                    sinaunang panahon at ipinasa mula sa isang henerasyon patungo sa susunod. Kabilang dito ang simpleng
                    pagpapanning gamit ang batya, na nangangailangan ng matinding pasensya at kasanayan upang maging
                    epektibo.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <h3 className="text-xl font-semibold text-gold-light mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Mga Makabagong Proseso
                  </h3>
                  <p className="text-slate/80">
                    Sa kasalukuyan, ang mga minero sa Jose Panganiban ay gumagamit na rin ng mas makabagong proseso at
                    teknolohiya upang mapabilis at mapahusay ang kanilang operasyon. Ang paggamit ng mga ito ay
                    nagpapakita ng kakayahan ng mga minero na umangkop sa mga pagbabago sa teknolohiya.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="max-w-6xl mx-auto mt-12">
                <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                    <Info className="h-6 w-6 mr-3 text-gold" />
                    Mga Konsiderasyon sa Kapaligiran at Kalusugan
                  </h2>
                  <p className="text-slate/80 mb-6">
                    Ang proseso ng pagmimina ng ginto ay maaaring magdulot ng mga panganib sa kapaligiran at kalusugan,
                    lalo na kung gumagamit ng mga nakakalasong kemikal o hindi maayos na pamamaraan.
                  </p>
                  <p className="text-slate/80 mb-4">
                    Dahil dito, may mga pagsisikap na isulong ang mas sustainable at ligtas na proseso ng pagmimina,
                    tulad ng:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      "Paggamit ng mga alternatibong pamamaraan na hindi gumagamit ng mga nakakalasong kemikal",
                      "Pagsusuot ng mga protective gear upang maprotektahan ang sarili mula sa mga panganib",
                      "Tamang pagtatapon ng mga waste materials upang maiwasan ang kontaminasyon ng kapaligiran",
                      "Regular na pagsusuri ng kalusugan para sa mga minero",
                    ].map((practice, index) => (
                      <div
                        key={index}
                        className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10 flex items-start"
                      >
                        <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-light flex items-center justify-center mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-slate/80">{practice}</span>
                      </div>
                    ))}
                  </div>
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

