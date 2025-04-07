"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import { useState } from "react"
import { Users, Sparkles, Info } from "lucide-react"
import { ClickableImage } from "@/components/image-viewer"

export default function PagkakakilanlanPage() {
  const [activeIdentityIndex, setActiveIdentityIndex] = useState<number | null>(null)

  // Array of identities with their descriptions and images
  const identities = [
    {
      number: 1,
      title: "Matitiyaga",
      description:
        "Ang mga minero ay nagpapakita ng matinding tiyaga sa kanilang trabaho, na kadalasang nangangailangan ng mahabang oras at paulit-ulit na gawain.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matitiyaga.jpg-PvpEu0C2J0nzjl0UYtt6zo4ORK3BsS.jpeg",
      details:
        "Ang pagtitiyaga ay isang mahalagang katangian ng mga minero sa Jose Panganiban. Ang paghahanap at pagkuha ng ginto ay isang proseso na nangangailangan ng matinding pasensya at dedikasyon. Madalas, ang mga minero ay gumagawa ng paulit-ulit na gawain sa loob ng maraming oras, tulad ng pagbubuhos ng tubig sa lupa, pagsala ng buhangin, at paghihintay na makita ang mga piraso ng ginto. Ang katangiang ito ay nagpapakita ng kanilang dedikasyon sa kanilang hanapbuhay at determinasyon na magtagumpay sa kabila ng mga hamon.",
    },
    {
      number: 2,
      title: "Masisipag",
      description:
        "Ang mga minero ay kilala sa kanilang kasipagan, na nagtatrabaho sa mahihirap na kondisyon upang kumita ng kabuhayan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Masisipag.jpg-M6Y1sqqEqYqxVqI8dWwbcaWICeXUag.jpeg",
      details:
        "Ang kasipagan ay isang katangian na lubhang kinakailangan sa industriya ng pagmimina. Ang mga minero sa Jose Panganiban ay nagtatrabaho sa ilalim ng matinding init ng araw o sa malalim na butas sa lupa, madalas sa loob ng maraming oras bawat araw. Ang kanilang trabaho ay pisikal na nakakaubos at nangangailangan ng matinding lakas at determinasyon. Sa kabila nito, patuloy silang nagtatrabaho upang masuportahan ang kanilang mga pamilya at matugunan ang kanilang mga pangangailangan.",
    },
    {
      number: 3,
      title: "Maputik ang buoang katawan",
      description:
        "Ang mga minero ay kadalasang natatakpan ng putik dahil sa kalikasan ng kanilang trabaho sa tubig at lupa.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maputik.jpg-lVLrDECt2lubgp4bTRuBA3h7gkMrQn.jpeg",
      details:
        "Ang pagiging maputik ang buong katawan ay isang karaniwang katangian ng mga minero sa Jose Panganiban. Dahil sa kalikasan ng kanilang trabaho, na kinabibilangan ng paghukay sa lupa at pagtatrabaho sa tubig, ang kanilang mga katawan ay madalas na natatakpan ng putik. Ito ay hindi lamang isang pisikal na katangian kundi isang simbolo rin ng kanilang dedikasyon sa kanilang trabaho at kahandaan na magtrabaho sa mahihirap na kondisyon. Ang putik sa kanilang katawan ay nagsisilbing patunay ng kanilang pagsisikap at paghihirap.",
    },
    {
      number: 4,
      title: "May sout na alahas na ginto",
      description:
        "Maraming minero ang nagsusuot ng alahas na ginto bilang simbolo ng kanilang tagumpay at pagmamalaki sa kanilang hanapbuhay.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maysoutnaalahas.jpg-l3U0PH59yo5aiZNNl0VpMTd8r3ApeJ.jpeg",
      details:
        "Ang pagsusuot ng alahas na ginto ay isang paraan para sa mga minero na ipakita ang kanilang tagumpay at pagmamalaki sa kanilang hanapbuhay. Ang mga alahas na ito ay madalas na gawa mula sa gintong kanilang nahanap at naproseso, na nagbibigay sa mga ito ng espesyal na kahulugan at halaga. Ang pagsusuot ng gintong alahas ay hindi lamang isang simbolo ng kayamanan kundi isang patunay rin ng kanilang kasanayan at tagumpay sa industriya ng pagmimina.",
    },
    {
      number: 5,
      title: "May sout na alahas na silver",
      description:
        "Bukod sa ginto, maraming minero rin ang nagsusuot ng alahas na pilak, na nagpapakita ng kanilang pagpapahalaga sa iba't ibang uri ng metal.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maysoutnaalahaspilak.jpg-Cd63z6tw6ghwbsvtmmXXNJAfT39WGz.jpeg",
      details:
        "Bukod sa ginto, maraming minero sa Jose Panganiban ang nagsusuot din ng alahas na pilak. Ito ay nagpapakita ng kanilang pagpapahalaga sa iba't ibang uri ng metal at ng kanilang kaalaman sa pagkakaiba at halaga ng mga ito. Ang pagsusuot ng alahas na pilak ay maaari ring magpakita ng kanilang koneksyon sa tradisyon at kultura, dahil ang pilak ay matagal nang itinuturing na mahalagang metal sa maraming kultura sa Pilipinas.",
    },
    {
      number: 6,
      title: "Mayroong pagtutulungan",
      description:
        "Ang mga minero ay nagpapakita ng malakas na diwa ng kooperasyon at pagtutulungan sa kanilang trabaho.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayroongpagtutulungan.jpg-oKDh7kXp8HXSraze6Ax302MTmCVDgD.jpeg",
      details:
        "Ang pagtutulungan ay isang mahalagang aspeto ng kultura ng pagmimina sa Jose Panganiban. Dahil sa mapanganib at mahirap na kalikasan ng kanilang trabaho, ang mga minero ay umaasa sa isa't isa para sa tulong, suporta, at kaligtasan. Ang diwa ng kooperasyon ay makikita sa iba't ibang aspeto ng kanilang trabaho, mula sa paghukay ng butas hanggang sa pagproseso ng ginto. Ang pagtutulungang ito ay hindi lamang nagpapahusay ng kanilang produktibidad kundi nagpapalakas din ng kanilang ugnayan bilang isang komunidad.",
    },
    {
      number: 7,
      title: "Nagmula sa iisang pamilya o Pagkakapareho sa Lahi o Pamilya",
      description:
        "Maraming minero ang nagmula sa iisang pamilya o may pagkakapareho sa lahi, na nagpapakita ng pagkakaisa at pagmamana ng tradisyon.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nagmulasaiisangpamilya.jpg-KD9vnZ5mWzK1oBjtIZhsAgBpsZLuXH.jpeg",
      details:
        "Ang pagmimina sa Jose Panganiban ay madalas na isang hanapbuhay na ipinamamana mula sa isang henerasyon patungo sa susunod. Maraming minero ang nagmula sa iisang pamilya o may pagkakapareho sa lahi, na nagpapakita ng pagkakaisa at pagmamana ng tradisyon. Ang pagkakaroon ng maraming miyembro ng pamilya sa industriya ay nagbibigay-daan sa pagpapasa ng kaalaman, kasanayan, at mga sekreto ng kalakalan mula sa mga nakatatanda patungo sa mga nakababata. Ito rin ay nagpapalakas ng ugnayan at suporta sa loob ng komunidad ng mga minero.",
    },
    {
      number: 8,
      title: "Pangunahing Hanapbuhay",
      description:
        "Para sa maraming tao sa Jose Panganiban, ang pagmimina ng ginto ay ang kanilang pangunahing hanapbuhay at pinagkukunan ng kabuhayan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pangunahing%20pamumuhay.jpg-CijM6sQEHbNmGfNxxMw1QWqpvh2tGr.jpeg",
      details:
        "Para sa maraming tao sa Jose Panganiban, ang pagmimina ng ginto ay hindi lamang isang trabaho kundi ang kanilang pangunahing hanapbuhay at pinagkukunan ng kabuhayan. Ito ay isang industriya na nagbibigay ng trabaho sa maraming tao at sumusuporta sa ekonomiya ng lugar. Ang pagmimina ay naging bahagi ng kanilang pang-araw-araw na buhay at kultura, na humuhubog sa kanilang pagkakakilanlan at pamumuhay. Ang dedikasyon nila sa hanapbuhay na ito ay nagpapakita ng kahalagahan nito sa kanilang buhay at sa komunidad.",
    },
  ]

  // Toggle active identity
  const handleIdentityClick = (index: number) => {
    setActiveIdentityIndex(activeIdentityIndex === index ? null : index)
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
                <Users className="h-12 w-12 text-gold-light drop-shadow-[0_0_10px_rgba(166,142,87,0.5)]" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light via-teal-light to-lavender bg-clip-text text-transparent">
                Mga Pagkakakilanlan
              </h1>
              <p className="text-lg text-slate/90 max-w-2xl mx-auto">
                Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may iba't ibang pagkakakilanlan na
                nabuo sa loob ng maraming taon.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-in-up">
              <div className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-dark/80 rounded-xl border border-gold/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-8">
                <h2 className="text-2xl font-bold text-gold-light mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2" />
                  Mga Katangian ng mga Minero
                </h2>
                <p className="text-slate/80">
                  Ang mga sumusunod ay ang mga pangunahing katangian at pagkakakilanlan ng mga minero sa Jose
                  Panganiban. Ang mga katangiang ito ay nagpapakita ng kanilang kultura, tradisyon, at pamumuhay bilang
                  mga manggagawa sa industriya ng pagmimina ng ginto.
                </p>
              </div>
            </ScrollAnimation>

            <motion.div className="space-y-12 mb-16" variants={containerVariants} initial="hidden" animate="visible">
              {identities.map((identity, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl overflow-hidden border border-gold/20 transition-all duration-500 ${
                    activeIdentityIndex === index
                      ? "bg-white shadow-[0_10px_30px_rgba(166,142,87,0.2)]"
                      : "bg-white hover:bg-white shadow-md hover:shadow-[0_5px_20px_rgba(166,142,87,0.15)]"
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image section */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <ClickableImage
                        src={identity.image || "/placeholder.svg"}
                        alt={identity.title}
                        fill
                        className="object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 p-6 z-10 pointer-events-none">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-charcoal-dark font-bold text-lg">
                            {identity.number}
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {identity.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div
                      className="p-6 md:p-8 flex flex-col justify-center cursor-pointer"
                      onClick={() => handleIdentityClick(index)}
                    >
                      <p className="text-gold-dark text-lg mb-6">{identity.description}</p>

                      {/* Details section - visible when active */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeIdentityIndex === index ? 1 : 0,
                          height: activeIdentityIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gold/10">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-teal-light flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium text-gold-dark mb-2">Kahalagahan:</h3>
                              <p className="text-sm text-gold-dark/90">{identity.details}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Call to action */}
                      <div
                        className={`mt-4 text-sm text-teal-light flex items-center justify-end ${
                          activeIdentityIndex === index ? "opacity-0" : "opacity-100"
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
                  Kahalagahan ng Pagkakakilanlan
                </h2>
                <div className="prose prose-sm max-w-none text-slate/80">
                  <p>
                    Ang mga pagkakakilanlan at katangiang ito ay hindi lamang nagpapakita ng pisikal na aspeto ng mga
                    minero kundi nagpapakita rin ng kanilang kultura, tradisyon, at pamumuhay. Ang mga sumusunod ay ilan
                    sa mga dahilan kung bakit mahalaga ang mga pagkakakilanlang ito:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapanatili ng Kultura</strong> - Ang mga pagkakakilanlang
                      ito ay tumutulong sa pagpapanatili ng mayamang kultura ng mga komunidad na nagpapanning ng ginto
                      sa Jose Panganiban.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapalakas ng Komunidad</strong> - Ang mga pagkakakilanlang
                      ito ay nagbibigay ng pagkakataon para sa mga minero na magtipon at magpalakas ng kanilang
                      pagkakaisa bilang isang komunidad.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagpapasa ng Kaalaman</strong> - Ang mga pagkakakilanlang ito
                      ay naglalaman ng mahahalagang kaalaman at kasanayan na ipinasa mula sa isang henerasyon patungo sa
                      susunod.
                    </li>
                    <li className="bg-charcoal-dark/50 p-4 rounded-lg border border-gold/10">
                      <strong className="text-gold-light">Pagkilala sa Kontribusyon</strong> - Ang mga pagkakakilanlang
                      ito ay nagbibigay ng pagkilala sa kontribusyon ng mga minero sa ekonomiya at kultura ng Jose
                      Panganiban.
                    </li>
                  </ul>
                  <p className="mt-6">
                    Sa kabila ng modernisasyon at pagbabago sa industriya ng pagmimina, ang mga pagkakakilanlang ito ay
                    nananatiling mahalagang bahagi ng identidad ng mga minero sa Jose Panganiban, na nagpapakita ng
                    kanilang matatag na koneksyon sa kanilang tradisyon at kultura.
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

