"use client"

import { Footer } from "@/components/footer"
import { ClickableImage } from "@/components/image-viewer"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Search, PenToolIcon as Tool, Wrench } from "lucide-react"
import { useState } from "react"

export default function KagamitanPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Array of tools with their descriptions and images
  const tools = [
    {
      name: "Batya o Kawali",
      description:
        "Isang mababaw na lalagyan na ginagamit sa pagpapanning ng ginto. Ito ay ginagamit upang mahiwalay ang ginto mula sa buhangin o lupa.",
      image: "/images/tools/kawali.jpg",
    },
    {
      name: "Taga-pabirik",
      description:
        "Taong gumagamit ng pabirik para sa pagproseso ng ginto. Sila ay responsable sa paghahalo at pagsala ng materyal upang makuha ang ginto.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Taga-pabirik.jpg-HnCkvxKW4sPLhK9w7CUuyo3lR3Oawz.jpeg",
    },
    {
      name: "Rad",
      description: "Mga solid na mahabang bakal, ito ay sinasama sa pagsalang ng mga bato para mabilis na madurog.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rad.jpg-bHF57rRmkVtgpfEM7mCA7cbiqjwwPe.jpeg",
    },
    {
      name: "Palayok",
      description: "Isang maliliit na palayok at dito niluluto ang ginto na may kasamang asoge.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Palayok_.jpg-MT1p4mDRNQ10seNQB95IfvUnkBYETX.jpeg",
    },
    {
      name: "Sakada",
      description: "Ang tawag sa lupa o bato na kinukuha mula sa butas o tunnel na maaaring naglalaman ng ginto.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sakada.jpg-jo1KJosGj98tSLl96wfVTL4jgQ7624.jpeg",
    },
    {
      name: "Kutsara sa Ginto",
      description:
        "Espesyal na kutsara na ginagamit para sa maingat na paghahawak at paglilipat ng ginto sa proseso ng pagproseso nito.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kutsara%20or%20kutsara%20sa%20ginto.jpg-2sgGNkTSFvbNQh0IZwNr5ga5SeN0Q6.jpeg",
    },
    {
      name: "Taga-patnaw",
      description:
        "Taong responsable sa pagsala at paghihiwalay ng ginto mula sa iba pang materyales gamit ang tubig at mga espesyal na kagamitan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Taga-patnaw.jpg-cPcCxK2RaXLUFBmQk3fmXwJpeL4WfE.jpeg",
    },
    {
      name: "Payer/Lutoan o Bugahan",
      description:
        "Kagamitan na ginagamit para sa pagpapainit o pagluluto ng ginto kasama ang mga kemikal para sa pagproseso nito.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Payer%20_labasan%20ng%20apoy%20_%20lutoan%20o%20bugahan.jpg-6gYjteev3MCjD2oSqMUmu28qNopY25.jpeg",
    },
    {
      name: "Locker",
      description:
        "Isang uri ng metal na tubo na ginagamit sa pagmimina, maaaring bahagi ng sistema ng suporta o kagamitan para sa pagbubutas.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locker.jpg-zAJFSHlq6cj5wATF38XslLHUee0t6a.jpeg",
    },
    {
      name: "Tailings",
      description:
        "Ang mga natitirang materyales pagkatapos ng proseso ng pagkuha ng ginto, karaniwang lupa o putik na may kemikal.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tailings_.jpg-RymglTGTRIin5Qx0OKVdYhESaXxrFC.jpeg",
    },
    {
      name: "Compressor",
      description:
        "Makina na ginagamit sa pagsisid ng mga bosero. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig.",
      image: "/images/tools/compressor.png",
    },
    {
      name: "Drum Belt",
      description: "Bahagi ng drum na nagpapaikot sa mga bato o sakada para maging pinong buhangin.",
      image: "/images/tools/drum-belt.png",
    },
    {
      name: "Bareta/Barita",
      description: "Mahabang bakal na patulis ang dulo at lapad; ginagamit panghukay upang makagawa ng butas.",
      image: "/images/tools/bareta.png",
    },
    {
      name: "Pabirik",
      description:
        "Isang uri ng maliit na kagamitan na ginagamit sa pagkuha ng mga mineral, partikular na sa pagproseso ng ginto.",
      image: "/images/tools/pabirik.png",
    },
    {
      name: "Garagad",
      description: "Isang suporta sa paghila ng lubid mula sa ilalim para mapagaan ang trabaho ng magkakabud.",
      image: "/images/tools/garagad.png",
    },
    {
      name: "Bao/Bau",
      description:
        "May dalawang uri ito, isa ay kahoy at isa ay bakal. Ginagamit ng mga magkakabod sa ilalim ng butas para pangkalay ng lupa para ang kanilang mga kamay ay hindi masugatan.",
      image: "/images/tools/bao-bao.png",
    },
    {
      name: "Baral",
      description:
        "Tali na may maliliit na kahoy. Ito ang ginagamit para hilahin ang lupa na galing sa ilalim ng butas.",
      image: "/images/tools/baral.png",
    },
    {
      name: "Laput",
      description:
        "Ito ay tinunaw na putik para ibuhos sa butas. Ito ang nag sisilbing patibay sa mga singit singit sa butas para hindi ito bumagsak.",
      image: "/images/tools/laput.png",
    },
    {
      name: "Belt",
      description:
        "Sariling gawang sinturon na gawa sa goma upang maiwasan na matanggal ang kanilang shorts sa pagsisid.",
      image: "/images/tools/belt.png",
    },
    {
      name: "Pala",
      description: "Isang kagamitan na ginagamit upang hukayin o maglipat ng lupa.",
      image: "/images/tools/pala.png",
    },
    {
      name: "Blower",
      description: "Ito ay nagbibigay at nagsisilbing hangin ng mga tao sa ilalim upang hindi malason.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Bulmilan",
      description: "Makina na ginagamit na pandurog sa mga bato na mayroong ginto.",
      image: "/images/tools/bulmihan.jpg",
    },
    {
      name: "Kahon",
      description:
        "Ginagamit pangkuha ng ginto. Ito ay salaan ng mga ginto at dito binubuhos ang pinong buhangin habang sa ilalim nito ay may mga barani na nagsasalo sa ginto.",
      image: "/images/tools/kahon.png",
    },
    {
      name: "Kawali",
      description: "Ginagamit na kasangkapan upang durugin ang ginto at asoge upang maghalo ito.",
      image: "/images/tools/kawali.jpg",
    },
    {
      name: "Maso",
      description: "Isang bakal na ginagamit na pamukpok sa mowel at pangdurog sa mga malalaking bato.",
      image: "/images/tools/maso.png",
    },
    {
      name: "Mowel",
      description: "Isang bakal na patulis na ginagamit na pantipak sa mga apad.",
      image: "/images/tools/mowel.png",
    },
    {
      name: "Gasolinahan",
      description: "Makina na gumagamit ng gasolina para sa pagpapatakbo ng iba pang kagamitan sa pagmimina.",
      image: "/images/tools/gasolinahan.png",
    },
    {
      name: "Patnawan sa Ragmilan",
      description: "Lugar kung saan isinasagawa ang pagsala at paghihiwalay ng ginto mula sa iba pang materyales.",
      image: "/images/tools/patnawan-sa-ragmilan.png",
    },
    {
      name: "Drum",
      description:
        "Dalawang bilok na bakal, dito sinasalang ang mga bato o sakada na galing sa butas para gawing pinong buhangin.",
      image: "/images/tools/drum.png",
    },
    {
      name: "Patnawan",
      description: "Lugar o kagamitan na ginagamit para sa pagsala at paghihiwalay ng ginto.",
      image: "/images/tools/patnawan.png",
    },
    {
      name: "Isterahan",
      description: "Lugar o kagamitan na ginagamit para sa pag-iimbak o pagtatago ng mga kagamitan o materyales.",
      image: "/images/tools/isterahan.png",
    },
    {
      name: "Portal",
      description: "Pasukan o labasan ng tunnel o butas sa pagmimina.",
      image: "/images/tools/portal.png",
    },
    {
      name: "Podong",
      description:
        "Isang uri ng kagamitan na ginagamit sa pagmimina, maaaring para sa pagsusukat o pagtatakda ng direksyon.",
      image: "/images/tools/podong.png",
    },
    {
      name: "Bato ng Kawali",
      description: "Bato na ginagamit kasama ng kawali para sa pagdurog o paghahalo ng mga materyales.",
      image: "/images/tools/bato-ng-kawali.png",
    },
    {
      name: "Asido",
      description: "Kemikal na ginagamit sa pagproseso ng ginto para matunaw ang iba pang materyales.",
      image: "/images/tools/asido.png",
    },
    {
      name: "Cap Lock",
      description: "Kagamitan na ginagamit sa pagpapaputok o pagpapasabog ng dinamita.",
      image: "/images/tools/cap-lock.png",
    },
    {
      name: "Sum",
      description:
        "Isang uri ng kagamitan na ginagamit sa pagmimina, maaaring para sa pagsusukat o pagtatakda ng direksyon.",
      image: "/images/tools/sum.png",
    },
    {
      name: "Baro-baro",
      description:
        "Isang uri ng kagamitan o teknik na ginagamit sa pagmimina, madalas na batay sa karanasan o tradisyonal na kaalaman.",
      image: "/images/tools/baro-baro.png",
    },
    {
      name: "Square",
      description: "Kagamitan na ginagamit para sa pagsusukat o pagtitiyak ng tamang anggulo sa pagmimina.",
      image: "/images/tools/square.png",
    },
    {
      name: "Taga-estera",
      description: "Taong gumagawa o naglalagay ng estera, isang uri ng sapin na ginagamit sa pagmimina.",
      image: "/images/tools/taga-estera.png",
    },
    {
      name: "Sako",
      description: "Lalagyan ng mga bato, lupa, o iba pang materyales na kinukuha mula sa butas o tunnel.",
      image: "/images/tools/sako.png",
    },
    {
      name: "Boraks",
      description: "Pulbos na ginagamit para hindi maghiwa-hiwalay ang ginto kapag niluluto.",
      image: "/images/tools/boraks.png",
    },
    {
      name: "Asidohan",
      description: "Dito isinasagawa ang paglalagay ng asido sa hindi magagandang klase o mapuputlang ginto.",
      image: "/images/tools/asidohan.png",
    },
    {
      name: "Drum-Belt",
      description: "Ginagamit upang umikot ang drum mula sa denamo papunta sa drum wheel.",
      image: "/images/tools/drum-belt.png",
    },
  ]

  // Filter tools based on search query
  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
                <Tool className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Mga Kagamitan
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay gumagamit ng iba't ibang kagamitan para
                sa paghahanap, pagkuha, at pagproseso ng ginto.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up">
            <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold text-gold-light flex items-center">
                  <Wrench className="h-6 w-6 mr-2" />
                  Mga Kagamitan sa Pagmimina
                </h2>

                {/* Search input */}
                <div className="relative max-w-xs w-full">
                  <input
                    type="text"
                    placeholder="Maghanap ng kagamitan..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gold/30 bg-charcoal-dark/50 text-slate focus:outline-none focus:ring-2 focus:ring-gold/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold/50" />
                </div>
              </div>

              <p className="text-slate/80">
                Ang mga sumusunod ay ang mga kagamitan na ginagamit ng mga minero sa Jose Panganiban para sa pagmimina
                ng ginto. Ang mga kagamitang ito ay nagpapakita ng kanilang kakayahan at kaalaman sa pagkuha ng
                mahalagang mineral na ito.
              </p>
            </div>
          </ScrollAnimation>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="overflow-hidden border-gold/20 bg-white backdrop-blur-sm hover:border-gold/30 transition-all duration-300 h-full shadow-md hover:shadow-[0_5px_20px_rgba(166,142,87,0.15)]">
                  <div className="relative h-48 w-full overflow-hidden">
                    <ClickableImage
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.name}
                      fill
                      className="object-contain p-2 transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gold-dark mb-2">{tool.name}</h3>
                    <p className="text-sm text-gold/80">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate/60">Walang nahanap na kagamitan para sa "{searchQuery}"</p>
            </div>
          )}

          <ScrollAnimation animation="fade-in-up" delay={300}>
            <div className="max-w-6xl mx-auto mt-12">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold text-gold-light mb-6 flex items-center">
                  <Wrench className="h-6 w-6 mr-3 text-gold" />
                  Kahalagahan ng mga Kagamitan
                </h2>
                <p className="text-slate/80 mb-4">
                  Ang mga kagamitang ito ay hindi lamang simpleng kasangkapan kundi nagpapakita rin ng mayamang kultura
                  at tradisyon ng mga minero sa Jose Panganiban. Ang bawat kagamitan ay may sariling kahalagahan at
                  gamit sa proseso ng pagmimina.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {[
                    "Ang mga kagamitang ito ay nagpapakita ng kakayahan ng mga minero na umangkop sa iba't ibang kondisyon at hamon sa pagmimina.",
                    "Ang mga kagamitang ito ay nagpapahusay ng kahusayan at kaligtasan ng mga minero sa kanilang trabaho.",
                    "Ang mga kagamitang ito ay nagpapakita ng malalim na kaalaman ng mga minero sa proseso ng pagmimina.",
                    "Ang mga kagamitang ito ay bahagi ng mayamang kultural na pamana ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban.",
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10 flex items-start"
                    >
                      <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-light flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-slate/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <Footer />
    </main>
  )
}

