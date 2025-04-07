"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatePresence, motion } from "framer-motion"
import { Book, BookOpen, BookText, MessageSquare, Search, Tag, Volume2, X } from "lucide-react"
import { useRef, useState } from "react"

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

// Floating Terminology Blobs Component
const FloatingTerminologyBlobs = ({ terminologies }: { terminologies: { term: string; definition: string }[] }) => {
  const [selectedTerm, setSelectedTerm] = useState<{ term: string; definition: string } | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Handle audio playback
  const handlePlayAudio = (term: string) => {
    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    
    const audio = new Audio(`/audio/${encodeURIComponent(term)}.mp3`)
    audioRef.current = audio
    audio.play().catch(error => console.error("Error playing audio:", error))
  }

  // Handle blob click
  const handleBlobClick = (term: { term: string; definition: string }) => {
    // If the same term is clicked, close it and stop audio
    if (selectedTerm?.term === term.term) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setSelectedTerm(null)
    } else {
      // New term is clicked: stop old audio
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setSelectedTerm(term)
    }
  }
  

  // Handle close definition
  const handleCloseDefinition = () => {
    // Stop audio when closing the definition
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setSelectedTerm(null)
  }

  // Generate random colors for the blobs
  const getRandomColor = (index: number) => {
    const colors = [
      "from-gold to-gold-dark",
      "from-teal-light to-teal",
      "from-lavender to-purple-600",
      "from-amber-400 to-amber-600",
      "from-blue-400 to-blue-600",
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="relative min-h-[600px] w-full">
      {/* Definition Card - Shows when a blob is clicked */}
      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="max-w-2xl w-full pointer-events-auto">
              <Card className="border-gold/30 bg-white shadow-[0_10px_30px_rgba(166,142,87,0.3)]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gold-dark">{selectedTerm.term}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 hover:bg-gold/10"
                      onClick={handleCloseDefinition}
                    >
                      <X className="h-4 w-4 text-gold-dark" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-gold-dark/80 flex-1">{selectedTerm.definition}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 hover:bg-gold/10"
                      onClick={() => handlePlayAudio(selectedTerm.term)}
                    >
                      <Volume2 className="h-5 w-5 text-gold-dark" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Blobs */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

        {terminologies.length > 0 ? (
          <motion.div
            className="relative w-full flex flex-wrap justify-center gap-4 p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {terminologies.map((term, index) => {
              const color = getRandomColor(index)

              return (
                <motion.div
                  key={index}
                  className="m-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  onClick={() => handleBlobClick(term)}
                >
                  <div
                    className={`cursor-pointer relative px-4 py-2 rounded-full bg-gradient-to-br ${color} text-white font-medium shadow-lg
                      ${selectedTerm?.term === term.term ? "ring-4 ring-gold/50 scale-110" : ""}
                      hover:shadow-[0_5px_15px_rgba(166,142,87,0.4)] transition-all duration-300`}
                  >
                    <span className="relative z-10">{term.term}</span>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-60">
            <p className="text-slate/60">Walang nahanap na terminolohiya. Subukang maghanap ng ibang salita.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MgaWikaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTabValue, setActiveTabValue] = useState("terminolohiya")

  // Array of terminology
  const terminologies = [
    {
      term: "Abon",
      definition: "Ito ay lalagyan ng ginto.",
    },
    {
      term: "Acetylene",
      definition:
        "Ang acetylene ay ginagamit sa mga welding torches upang makagawa ng matinding init na kayang mag-melt ng metal, kaya't maaari itong magamit sa pagmimina upang mag-ayos o magputol ng mga kagamitan, mga estruktura, o mga materyales sa minahan.",
    },
    {
      term: "Alay",
      definition: "Ito ay maaaring puting manok o baboy at ginagawa tuwing Martes o Biyernes ng gabi.",
    },
    {
      term: "Alpombra",
      definition: "Inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto.",
    },
    {
      term: "Asidohan",
      definition: "Dito isinasagawa ang paglalagay ng asido sa hindi magagandang klase o mapuputlang ginto.",
    },
    {
      term: "Asido",
      definition:
        "Karaniwang ginagamit ang mga asido sa mga proseso tulad ng leaching, kung saan ang asido ay tumutulong upang matunaw at ma-extract ang mga metal tulad ng ginto, tanso, at iba pang mga mineral mula sa mga mineral ores.",
    },
    {
      term: "Apad",
      definition: "Isang uri ng bato.",
    },
    {
      term: "Asoge",
      definition: "Tumutulong sa pagbuo ng mga pinong buhangin sa ginto ",
    },
    {
      term: "Baral",
      definition:
        "Tali na may maliliit na kahoy. Ito ang ginagamit para hilahin ang lupa na galing sa ilalim ng butas.",
    },
    {
      term: "Balon",
      definition: "Butas na siyang pinagkakabodan ng mga mangkakabod.",
    },
    {
      term: "Barena",
      definition:
        "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita.",
    },
    {
      term: "Barenador",
      definition: "Mga tao na nagbubutas sa bita ng tunnel para sa pagkabitan o paglagyan ng dinamita.",
    },
    {
      term: "Bareta",
      definition: "Mahabang bakal na patulis ang dulo at lapad; ginagamit panghukay upang makagawa ng butas .",
    },
    {
      term: "Baro-Baro",
      definition: "Pinakapal na tela na idinidikit sa takip ng drum upang maiwasan ang pagtagas ng ginigiling na sakada.",
    },
    {
      term: "Bato sa kawali",
      definition: "Bilog na bato na pinakinis at nakahulma sa kawali na ginagamit na pandikdik sa asoge na may ginto.",
    },
    {
      term: "Bao o Bau",
      definition:
        "May dalawang uri ito, isa ay kahoy at isa ay bakal. Ang bau na ito ay ginagamit ng mga magkakabod sa ilalim ng butas para pangkalaykay ng lupa upang hindi masugatan ang kanilang mga kamay.",
    },
    {
      term: "Belt",
      definition:
        "Sariling gawang sinturon na gawa sa goma upang hindi matanggal ang shorts ng manggagawa sa pagsisid.",
    },
    {
      term: "Bita",
      definition: "Isang linya sa apad na sinusundan upang makakita ng ginto sa tunnel.",
    },
    {
      term: "Blower",
      definition: "Isang linya sa apad na siyang sinususugan para makakita ng ginto sa tunnel.",
    },
    {
      term: "Bomber",
      definition: "Mga taong nagpapasabog ng dinamita sa ilalim ng tunnel.",
    },
    {
      term: "Boraks",
      definition: "Pulbos na ginagamit upang hindi maghiwa-hiwalay ang ginto kapag niluluto.",
    },
    {
      term: "Bosero",
      definition: "Taong sumusisid sa ilalim ng butas para maghukay upang mapalalim ang butas.",
    },
    {
      term: "Bulak",
      definition:
        "Dalawang puting bulak na kasukat ng piso na inilalagay sa tainga upang maiwasan ang pagpasok ng putik.",
    },
    {
      term: "Bulmilan",
      definition: "Makina na ginagamit na pandurog sa mga bato na may ginto.",
    },
    {
      term: "Butas",
      definition: "Malalim na hukay na kinukuhaan ng ginto o sakada sa ilalim ng lupa.",
    },
    {
      term: "Cap lock",
      definition: "Takip sa ilalim ng drum.",
    },
    {
      term: "Crasher",
      definition: "Ang tao o mga taong nagsasagawa ng pag-istera sa mga malalaking bato. .",
    },
    {
      term: "Compressor",
      definition: "Makina na ginagamit sa pagsisid ng mga bosero. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig. ",
    },
    {
      term: "Denamo",
      definition: "Isang makina na nagpapa-ikot sa belt papunta sa drum. ",
    },
    {
      term: "Drum",
      definition:
        "Dalawang bilok na bakal, dito sinasalang ang mga bato o sakada na galing sa butas para gawing pinong buhangin.",
    },
    {
      term: "Drum Lock",
      definition: "Ito ang takip sa ibabaw ng drum na dinidikitan ng baro-baro at ang hugis nito ay square o kwadrado.",
    },
    {
      term: "Drum Belt",
      definition: "Ginagamit upang umikot ang drum mula sa denamo papunta sa drum wheel.",
    },
    {
      term: "Drum Wheel",
      definition: "Pinagkakabitan ng belt at drum.",
    },
    {
      term: "Garagad",
      definition: "Isang suporta sa paghila ng lubid mula sa ilalim para mapagaan ang trabaho ng magkakabod.",
    },
    {
      term: "Gasolinahan",
      definition: "Isang uri ng plastik na bote na nilalagyan ng gasolina sa lutuan ng ginto.",
    },
    {
      term: "Ginto",
      definition:
        "Tumutukoy sa isang mahalagang mineral na kinukuha mula sa lupa sa pamamagitan ng iba't ibang pamamaraan ng pagmimina.",
    },
    {
      term: "Heads",
      definition: "Ito ay kulay itim na pinong buhangin na may halong ginto.",
    },
    {
      term: "High Grade",
      definition: "Tumutukoy sa isang pangyayari o magkakabod na maraming nakukuhang ginto mula sa balon.",
    },
    {
      term: "Ispat",
      definition: "Nagsisilbing liwanag na ginagamit sa loob ng tunnel o tinatawag sa Ingles na “flashlight”. s",
    },
    {
      term: "Isterahan",
      definition: "Ginagawang pukpukan ng mga malalaking bato para lumiit at magging akma sa drum.",
    },
    {
      term: "Kalalawan",
      definition: 'Isang bagay na nilalagyan ng heads na may ginto sa kabodan',
    },
    {
      term: "Kabod",
      definition:
        "Ang pagmimina o proseso ng paghukay ng lupa at pagkuha ng yamang mineral partikular ang ginto.",
    },
    {
      term: "Kabodan",
      definition: "Lugar kung saan nagkakabod ang mga minero para makakuha ng ginto.",
    },
    {
      term: "Kahon",
      definition:
        "Ginagamit pangkuha ng ginto. Ito ay tinawag na kahon dahil sa hugis at itsura nito na parang isang kahon. Ito ay salaan ng mga ginto at dito binubuhos ang pinong buhangin habang sa ilalim nito ay may mga barani na nagsasalo sa ginto.",
    },
    {
      term: "Kawali",
      definition: "Kasangkapan sa pagdurog ng ginto at asoge upang maghalo ito.",
    },
    {
      term: "Kunya",
      definition: "Mga maliliit na kahoy na inilalagay sa mga siwang-siwang sa timber upang maging matibay.",
    },
    {
      term: "Kutsara",
      definition: "Kagamitang ginagamit upang makuha ang ginto sa palayok matapos itong lutuin.",
    },
    {
      term: "Lampos",
      definition:
        "Tumutukoy sa lalim ng isang butas.",
    },
    {
      term: "Laput",
      definition:
        "Ito ay tinunaw na putik para ibuhos sa butas. Ito ang nag sisilbing patibay sa mga singit singit sa butas para hindi ito bumagsak.",
    },
    {
      term: "Lasduk",
      definition: "Ito ang nilalagyan ng sakada mula sa ilalim ng butas pataas sa patnawan ng sakada. Ito ay sako na may may bilog na bakal sa harapan.  ",
    },
    {
      term: "Locker",
      definition: "Ginagamit bilang panghikit sa takip ng drum.",
    },
    {
      term: "Nagkakabod",
      definition: "Tumutukoy sa proseso o sitwasyon ng pagmimina o paghuhukay ng ginto. Sa mas simpleng salita, ito ay maaaring magpahiwatig ng paghahanap, pagkuha, o pagkuha ng ginto mula sa lupa o iba pang mga pinagmumulan ng mineral. ",
    },
    {
      term: "Mack Out",
      definition: "Ito ay tawag sa lupang nilalabas sa lupa na hindi naman sakada.",
    },
    {
      term: "Magkukulipaw",
      definition: "Mga taong humihingi ng kakarampot na ginto mula sa mga mangkakabod.",
    },
    {
      term: "Mangkakabod",
      definition: "Taong  naghuhukay ng lupa at kumukuha ng yamang mineral. ",
    },
    {
      term: "Mask",
      definition: "Pangharang sa mata upang maiwasan ang pagkakaroon ng putik dito.",
    },
    {
      term: "Maso",
      definition: "Isang bakal  na ginagamit na pamukpok sa mowel at pangdurog sa mga malalaking bato",
    },
    {
      term: "Mowel",
      definition: "Isang bakal na patulis na ginagamit na pantipak sa mga apad.",
    },
    {
      term: "Mucker",
      definition: "Taong  naglalabas ng sakada mula sa pinutukan na bita sa ilalim ng tunnel. ",
    },
    {
      term: "Pabirik",
      definition: "Isang uri ng maliit na kagamitan na ginagamit sa pagkuha ng mga mineral, partikular na sa pagproseso ng ginto. ",
    },
    {
      term: "Pala",
      definition: "Isang kagamitan na ginagamit upang hukayin o maglipat ng lupa. ",
    },
    {
      term: "Palayok",
      definition: "Isang maliliit na palayok at dito niluluto ang ginto na may kasamang asoge. ",
    },
    {
      term: "Palaputan",
      definition: "Espasyo sa kabodan na tintambakan ng putik na tinutunaw upang maging lapot.",
    },
    {
      term: "Parabantun",
      definition: "Mga taong nag-aangat ng sakada mula sa ilalim patungo sa ibabaw ng butas gamit ang baral at lubid.",
    },
    {
      term: "Patnawan sa Kabodan",
      definition:
        "Ito ay isang kagamitan na na tumutukoy sa hinating drum o bangka.",
    },
    {
      term: "Patnawan sa Ragmilan",
      definition:
        "Isang kagamitan na nilalagyan ng giniling na sakada para pabirikin at patnawin .",
    },
    {
      term: "Payer",
      definition: "Labasan ng apoy sa lutuan ng ginto.",
    },
    {
      term: "Pangongorte",
      definition: "Termino na tumutukoy sa pangunguha ng mga kahoy na gagamitin para sa timber.",
    },
    {
      term: "Pirates",
      definition: "Tinatawag na pirating ginto. Mga kulay puti na ani mo ay ginto na nakadikit sa bato. ",
    },
    {
      term: "Podong",
      definition: "Ginagawang sombrero ng mga magkakabod upang maiwasan malagyan ng putik ang kanilang ulo.",
    },
    {
      term: "Portal",
      definition: "Ito ay isang bungad ng butas pantungo sa ilalim ng butas o balon.",
    },
    {
      term: "Putok",
      definition: 'Pampasabog sa mga bato ito rin ay tinatawag na “bigas-bigas". ',
    },
    {
      term: "Rad",
      definition: "Mga solid na mahabang bakal, ito ay sinasama sa pagsalang ng mga bato para mabilis ma durog. ",
    },
    {
      term: "Ragmilan",
      definition: "Lugar kulang saan dito nag sasalang ng mga sakada o ng mga bato para ma kuha ang ginto na nakapadikit dito.",
    },
    {
      term: "Sako",
      definition: "Ito ang nagsisilbing lagayan ng mga sakada o ang mga naipon na putik o mga bato.",
    },
    {
      term: "Sample",
      definition: "Isang pmamamaraan na isinasagawa ng mga magkakabod upang malaman ang isang lupa kung may taglay bang ginto o wala.",
    },
    {
      term: "Sayaran",
      definition: "Tumutukoy sa sakada na nasa tubig sa kabodan.",
    },
    {
      term: "Square",
      definition: "Inilalagay sa ibabaw ng butas upang magbigay proteksyon sa mga magkakabod. At ito rin ay pinaghalong fligh wood at kahoy",
    },
    {
      term: "Sum",
      definition: "Dito sinasagawa ang pagpabirik na nagsisilbing tambakan ng tailings dahil naglalampos ito ng kalahati o isang lampos ang lalim.",
    },
    {
      term: "Tagapabirik",
      definition: "Mga taong ang trabaho ay ang paggamit ng pabirik ng sakada.",
    },
    {
      term: "Tagapatnaw",
      definition: "Mga taong nagtatangal ng labo o putik sa sakada.",
    },
    {
      term: "Tailings",
      definition: " Nagmula ito sa isinalang na sakada sa ragmilan na naging pinong buhangin.",
    },
    {
      term: "Timber",
      definition: "Mga nilapad na kahoy na inilalagay sa gilid ng mga lupa upang higit na mas matibay ito at hindi bumagsak.",
    },
    {
      term: "Timber man",
      definition: "Taong nag-iisip at naggagawa kung paano ilalagay ang timber o mga kahoy sa gilid ng butas. ",
    },
    {
      term: "Operator",
      definition: "Sila ang nagpapagana ng tagger hoist upang maitaas lahat ng sakada mula sa ilalim ng tunnel.",
    },
    {
      term: "Water pump",
      definition: "Ginagamit  pang limas kapag malalim ang tubig.",
    },
  ]

  // Filter terminologies based on search term
  const filteredTerminologies = terminologies.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [
    {
      title: "Mga Kagamitan sa Pagmimina",
      items: [
        "Alpombra",
        "Barena",
        "Bareta/Barita",
        "Bao/Bau",
        "Bato sa kawali",
        "Belt",
        "Blower",
        "Bulmilan",
        "Bulak",
        "Denamo",
        "Drum",
      ],
    },
    {
      title: "Mga Trabahador at Tungkulin",
      items: [
        "Barenador",
        "Bomber",
        "Bosero",
        "Crasher",
        "Mangkakabod",
        "Mucker",
        "Tagapabirik",
        "Tagapatnaw",
        "Tagger operator",
      ],
    },
    {
      title: "Mga Lugar at Espasyo",
      items: ["Balon", "Butas", "Kabudan", "Portal", "Ragmilan"],
    },
    {
      title: "Mga Materyales at Kemikal",
      items: ["Acetylene", "Apad", "Asido", "Asoge", "Boraks", "Ginto", "Laput", "Pirates", "Putok", "Timber"],
    },
    {
      title: "Mga Proseso at Gawain",
      items: ["Alay", "Asidohan", "High grade", "Kabod"],
    },
  ]

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
                <Book className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Mga Wika
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may sariling bokabularyo at
                terminolohiya na ginagamit sa kanilang pang-araw-araw na gawain.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-12">
                <p className="text-slate/80">
                  Ayon sa pananaliksik nina Manilyn Clores at Aira Joy Ibañez (2025), ang mga terminolohiyang
                  ito ay hindi lamang teknikal na wika kundi nagsisilbing simbolo ng kasaysayan, kultura, at pagkakaisa
                  ng komunidad. Ang mga terminolohiyang ito ay nagtataguyod ng kaalaman at pagmamalaki sa lokal na
                  yaman, na nagpapalalim sa koneksyon ng mga tao sa kanilang likas na yaman at sa kanilang tradisyon.
                </p>
              </div>
            </ScrollAnimation>

            <Tabs
              defaultValue="terminolohiya"
              className="w-full"
              value={activeTabValue}
              onValueChange={setActiveTabValue}
            >
              <ScrollAnimation animation="fade-in-up">
                <TabsList className="grid w-full grid-cols-3 bg-charcoal-dark/50 backdrop-blur-md rounded-full p-1 mb-8 border border-gold/20">
                  <TabsTrigger
                    value="terminolohiya"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold/80 data-[state=active]:to-gold-dark/80 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                    style={{
                      textShadow: activeTabValue === "terminolohiya" ? "0 0 10px rgba(166, 142, 87, 0.5)" : "none",
                      boxShadow: activeTabValue === "terminolohiya" ? "0 0 15px rgba(166, 142, 87, 0.3)" : "none",
                    }}
                  >
                    Terminolohiya
                  </TabsTrigger>
                  <TabsTrigger
                    value="kategorya"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold/80 data-[state=active]:to-gold-dark/80 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                    style={{
                      textShadow: activeTabValue === "kategorya" ? "0 0 10px rgba(166, 142, 87, 0.5)" : "none",
                      boxShadow: activeTabValue === "kategorya" ? "0 0 15px rgba(166, 142, 87, 0.3)" : "none",
                    }}
                  >
                    Mga Kategorya
                  </TabsTrigger>
                  <TabsTrigger
                    value="konklusyon"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold/80 data-[state=active]:to-gold-dark/80 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                    style={{
                      textShadow: activeTabValue === "konklusyon" ? "0 0 10px rgba(166, 142, 87, 0.5)" : "none",
                      boxShadow: activeTabValue === "konklusyon" ? "0 0 15px rgba(166, 142, 87, 0.3)" : "none",
                    }}
                  >
                    Konklusyon
                  </TabsTrigger>
                </TabsList>
              </ScrollAnimation>

              <TabsContent value="terminolohiya" className="mt-6">
                <ScrollAnimation animation="fade-in-up">
                  <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h2 className="text-2xl font-bold text-gold-light flex items-center">
                        <BookText className="h-6 w-6 mr-2" />
                        Mga Terminolohiya sa Pagmimina
                      </h2>

                      {/* Search input */}
                      <div className="relative max-w-xs w-full">
                        <input
                          type="text"
                          placeholder="Maghanap ng terminolohiya..."
                          className="w-full pl-10 pr-4 py-2 rounded-full border border-gold/30 bg-charcoal-dark/50 text-slate focus:outline-none focus:ring-2 focus:ring-gold/50"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold/50" />
                      </div>
                    </div>

                    <p className="text-slate/80 mb-4">
                      Ang sumusunod na mga terminolohiya ay nakalap mula sa pananaliksik nina Clores, Narciso, Nisola,
                      Nonoy, at Solver (2024) tungkol sa mga terminolohiya sa Narciso, Nisola, Nonoy, at Solver (2024)
                      tungkol sa mga terminolohiya sa pagmimina sa Bayan ng Jose Panganiban bilang kultural na
                      pagkakakilanlan.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Floating Blobs Layout */}
                <FloatingTerminologyBlobs terminologies={filteredTerminologies} />
              </TabsContent>

              <TabsContent value="kategorya" className="mt-6">
                <ScrollAnimation animation="fade-in-up">
                  <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-6">
                    <h2 className="text-2xl font-bold text-gold-light mb-4 flex items-center">
                      <Tag className="h-6 w-6 mr-2" />
                      Mga Kategorya ng Terminolohiya
                    </h2>
                    <p className="text-slate/80">
                      Ang mga terminolohiya sa pagmimina ay maaaring hatiin sa iba't ibang kategorya ayon sa kanilang
                      gamit at kahulugan. Sa pamamagitan ng pag-kategorya, mas madaling maintindihan ang relasyon at
                      gamit ng mga salitang ito sa konteksto ng pagmimina.
                    </p>
                  </div>
                </ScrollAnimation>

                <Accordion type="single" collapsible className="w-full">
                  {categories.map((category, index) => (
                    <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                      <AccordionItem value={`item-${index}`} className="border-b border-gold/10">
                        <AccordionTrigger className="py-4 text-lg font-semibold text-gold-light hover:text-gold hover:no-underline">
                          {category.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                            {category.items.map((item, idx) => (
                              <Card
                                key={idx}
                                className="border-gold/20 bg-white hover:bg-white/90 transition-all duration-300 hover:border-gold/30"
                              >
                                <CardContent className="p-4">
                                  <div className="font-medium text-gold-dark">{item}</div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </ScrollAnimation>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="konklusyon" className="mt-6">
                <ScrollAnimation animation="fade-in-up">
                  <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                      <BookOpen className="h-6 w-6 mr-2" />
                      Konklusyon
                    </h2>
                    <div className="prose prose-sm max-w-none text-slate/80">
                      <p>
                        Ang pag-aaral na ito ay nagpapakita ng kahalagahan ng mga terminolohiyang ginagamit sa pagmimina
                        sa Bayan ng Jose Panganiban, at kung paano ito nakakatulong sa pagpapalakas ng komunidad. Ang
                        mga natuklasang terminolohiya sa pagmimina ay hindi lamang mahalaga para sa mga teknikal na
                        operasyon kundi nagsisilbi ring simbolo ng kultural na pagkakakilanlan ng mga mamamayan ng
                        bayan. Ang wika sa pagmimina ay isang mabisang kasangkapan para sa mas maayos na komunikasyon,
                        pagpapalitan ng kaalaman, at mas pinadaling pagganap ng mga tungkulin ng mga manggagawa.
                      </p>
                      <p>
                        Ang mga terminolohiyang ito ay hindi lamang nakatutok sa mga proseso ng pagmimina, kundi
                        nagiging bahagi rin ng pagpapalaganap at pagpapanatili ng tradisyon at kultura ng komunidad. Sa
                        pamamagitan ng mas malalim na pag-unawa sa mga salitang ito, mapapalakas ang ekonomiya ng bayan
                        at matutulungan ang mga lokal na manggagawa sa kanilang kabuhayan.
                      </p>
                      <p>
                        Sa pangakalahatan, ang wika sa pagmimina ay hindi lamang isang praktikal na gamit, kundi isang
                        susi sa pagpapayaman ng kultural na yaman ng Bayan ng Jose Panganiban. Para sa mga susunod na
                        hakbang, inirerekomenda ang patuloy na pananaliksik upang mapalawak pa ang kaalaman at
                        maitaguyod ang mas mataas na antas ng pag-unlad sa komunidad.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </TabsContent>
            </Tabs>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="mt-12 bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-gold" />
                  Kahalagahan ng mga Terminolohiya
                </h2>
                <div className="prose prose-sm max-w-none text-slate/80">
                  <p>
                    Ayon sa pananaliksik nina Manilyn Clores at Aira Joy Ibañez (2025), ang mga terminolohiyang
                    ito ay may malalim na kahulugan sa kultura at pagkakakilanlan ng mga mamamayan ng Jose Panganiban:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpreserba ng Kultura</strong> - Ang mga terminolohiyang ito
                      ay tumutulong sa pagpreserba ng mayamang kultura at tradisyon ng mga komunidad na nagpapanning ng
                      ginto, na maaaring mawala dahil sa modernisasyon at iba pang salik.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Dokumentasyon ng Wika</strong> - Nagdodokumento ng mga salita,
                      terminolohiya, at ekspresyon na natatangi sa mga komunidad na ito, na nagpapayaman sa ating
                      pag-unawa sa linggwistikong dibersidad ng Pilipinas.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Edukasyon</strong> - Nagbibigay ng mahalagang mapagkukunan
                      para sa mga mag-aaral, mananaliksik, at publiko na interesado sa kultura, wika, at kasaysayan ng
                      mga komunidad na nagpapanning ng ginto.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagkilala sa Kontribusyon</strong> - Nagbibigay ng pagkilala
                      sa mahalagang kontribusyon ng mga komunidad na nagpapanning ng ginto sa ekonomiya, kultura, at
                      kasaysayan ng Pilipinas.
                    </li>
                  </ul>
                  <p className="mt-6 text-sm italic text-slate/60">
                    Pinagmulan:  Manilyn Clores at Aira Joy Ibañez (2025). Mga Terminilohiya
                    sa Pagmimina sa Bayan ng Jose Panganiban bilang Kultural na Pagkakakilanlan. EDFIL 117 - Filipino sa
                    Natatanging Gamit.
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

