"\"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1600s",
    title: "Simula ng Pagmimina sa Jose Panganiban",
    description:
      "Nagsimula ang pagmimina ng ginto sa Jose Panganiban (dating kilala bilang Mambulao) noong panahon ng Espanyol. Ang lugar ay kilala sa mayamang deposito ng ginto at iba pang mineral.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: "1800s",
    title: "Pagdating ng mga Dayuhang Minero",
    description:
      "Dumating ang mga dayuhang minero, lalo na ang mga Amerikano, upang magsagawa ng mas malakihang operasyon ng pagmimina sa lugar.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: "1934",
    title: "Pagtatatag ng Jose Panganiban",
    description:
      "Ang bayan ay opisyal na itinayo at pinangalanang Jose Panganiban, bilang pagkilala sa isang kilalang Pilipinong ekonomista at manunulat.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: "1950s",
    title: "Paglago ng Industriya ng Pagmimina",
    description:
      "Lumago ang industriya ng pagmimina sa Jose Panganiban, na naging isa sa mga pangunahing pinagkukunan ng kabuhayan ng mga residente.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: "1980s",
    title: "Pagbabago sa Pamamaraan ng Pagmimina",
    description:
      "Nagkaroon ng mga pagbabago sa pamamaraan ng pagmimina, mula sa tradisyonal na pamamaraan patungo sa mas makabagong teknolohiya.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: "2000s",
    title: "Mga Hamon sa Kapaligiran",
    description:
      "Nagsimulang harapin ng industriya ang mga hamon sa kapaligiran, na nagresulta sa mga pagsisikap na isulong ang mas sustainable na pamamaraan ng pagmimina.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: "Kasalukuyan",
    title: "Pagpreserba ng Kultura at Wika",
    description:
      "Nagkakaroon ng mga pagsisikap na mapreserba ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban, kabilang ang proyektong E-Gintolao.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function MiningTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(timelineEvents[0])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card
        className="w-full max-w-6xl mx-auto border-none bg-gradient-to-br from-[#1a1f35] to-[#0f1525] backdrop-blur-lg"
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(126, 181, 189, 0.2)",
          borderImage: "linear-gradient(135deg, rgba(126, 181, 189, 0.3), rgba(158, 141, 173, 0.1)) 1",
        }}
      >
        <CardHeader className="border-b border-teal/10 pb-4">
          <CardTitle className="text-xl text-teal-light">Timeline ng Pagmimina sa Jose Panganiban</CardTitle>
          <CardDescription className="text-slate/80">
            Tuklasin ang kasaysayan ng pagmimina sa Jose Panganiban
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="relative py-6">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-dark via-teal to-teal-light -translate-y-1/2 rounded-full opacity-50"></div>
            <div className="relative flex justify-between">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center z-10"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <motion.div
                    className={cn(
                      "w-5 h-5 rounded-full cursor-pointer transition-all duration-300",
                      selectedEvent.year === event.year
                        ? "bg-teal shadow-[0_0_15px_rgba(126,181,189,0.7)]"
                        : "bg-charcoal-dark border-2 border-teal/30 hover:border-teal",
                    )}
                    animate={selectedEvent.year === event.year ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  ></motion.div>
                  <motion.div
                    className={cn(
                      "mt-3 text-xs font-medium transition-all duration-300",
                      selectedEvent.year === event.year ? "text-teal-light font-bold" : "text-slate/60",
                    )}
                    animate={selectedEvent.year === event.year ? { y: [0, -3, 0] } : {}}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    style={{
                      textShadow: selectedEvent.year === event.year ? "0 0 10px rgba(126, 181, 189, 0.5)" : "none",
                    }}
                  >
                    {event.year}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl group">
                <Image
                  src={selectedEvent.image || "/placeholder.svg?height=300&width=400"}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent"></div>
                <div className="absolute inset-0 bg-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-xs text-teal-light bg-charcoal-dark/50 backdrop-blur-sm px-2 py-1 rounded-full inline-block border border-teal/20">
                    {selectedEvent.year}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-light via-teal to-lavender bg-clip-text text-transparent">
                  {selectedEvent.title}
                </h3>
                <p className="text-slate/80 leading-relaxed">{selectedEvent.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

