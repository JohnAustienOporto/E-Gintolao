"use client"

import { Footer } from "@/components/footer"
import { MiningDragDrop } from "@/components/interactive/mining-drag-drop"
import { TerminologyQuiz } from "@/components/interactive/terminology-quiz"
import { ToolsMatchingGame } from "@/components/interactive/tools-matching-game"
import { WordSearchPuzzle } from "@/components/interactive/word-search-puzzle"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GradientText } from "@/components/text-effects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function InteractivePage() {
  const [activeTab, setActiveTab] = useState("quiz")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-charcoal-dark via-[#0c1220] to-charcoal-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Futuristic grid lines */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        {/* Glowing orbs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px]"
          style={{
            left: mousePosition.x / 5,
            top: mousePosition.y / 5,
            transition: "left 1s ease-out, top 1s ease-out",
          }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-lavender/5 blur-[100px]"
          style={{
            right: mousePosition.x / 8,
            bottom: mousePosition.y / 8,
            transition: "right 1.5s ease-out, bottom 1.5s ease-out",
          }}
        ></div>
      </div>

      <Navbar />

      <div className="flex-grow pt-28 md:pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="fade-in-up">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 backdrop-blur-lg rounded-2xl p-8 border border-teal/20"
                style={{
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 15px rgba(126, 181, 189, 0.2)",
                  background: "linear-gradient(135deg, rgba(30, 30, 40, 0.8), rgba(20, 20, 30, 0.6))",
                }}
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                  <GradientText animate className="bg-gradient-to-r from-teal-light via-lavender to-gold-light">
                    Mga Larong Pang-edukasyon
                  </GradientText>
                </h1>

                <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                  Subukan ang iba't ibang aktibidad upang mas maunawaan ang kultura at wika ng mga
                  komunidad na nagpapanning ng ginto sa Jose Panganiban.
                </p>
              </motion.div>
            </ScrollAnimation>

            <Tabs defaultValue="quiz" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TabsList
                  className="grid w-full grid-cols-4 bg-charcoal-dark/50 backdrop-blur-md rounded-full p-1 mb-8 border border-teal/20"
                  style={{ boxShadow: "0 4px 20px rgba(126, 181, 189, 0.15)" }}
                >
                  {[
                    { value: "quiz", label: "Pagsusulit" },
                    { value: "dragdrop", label: "Hila at Bitaw" },
                    { value: "wordsearch", label: "Hanap-Salita" },
                    { value: "matching", label: "Pagtatambal" },
                  ].map((tab, index) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal/80 data-[state=active]:to-teal-dark/80 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                      style={{
                        textShadow: tab.value === activeTab ? "0 0 10px rgba(126, 181, 189, 0.5)" : "none",
                        boxShadow: tab.value === activeTab ? "0 0 15px rgba(126, 181, 189, 0.3)" : "none",
                      }}
                      onClick={() => setActiveTab(tab.value)}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {tab.label}
                      </motion.span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              <TabsContent value="quiz" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.8 }}
                >
                  <TerminologyQuiz />
                </motion.div>
              </TabsContent>

              <TabsContent value="dragdrop" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.8 }}
                >
                  <MiningDragDrop />
                </motion.div>
              </TabsContent>

              <TabsContent value="wordsearch" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.8 }}
                >
                  <WordSearchPuzzle />
                </motion.div>
              </TabsContent>

              <TabsContent value="matching" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.8 }}
                >
                  <ToolsMatchingGame />
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}