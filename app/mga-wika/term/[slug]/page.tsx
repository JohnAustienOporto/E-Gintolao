import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Volume2 } from "lucide-react"
import Link from "next/link"
import { ClickableImage } from "@/components/image-viewer"

// Sample term data
const termData = {
  alay: {
    title: "Alay",
    definition: "Ito ay maaring puting manok o baboy at ito ay ginagawa tuwing Martes o Biyernes ng gabi.",
    longDefinition:
      "Ang Alay ay isang mahalagang ritwal sa pagmimina ng ginto sa Jose Panganiban. Ito ay isang pag-aalay ng puting manok o baboy sa mga espiritu ng bundok o lupa, na isinasagawa tuwing Martes o Biyernes ng gabi. Ang ritwal na ito ay ginagawa upang humingi ng pahintulot at proteksyon mula sa mga espiritu bago magsimula ng operasyon ng pagmimina.",
    category: "Ritwal",
    relatedTerms: ["Paghahandog", "Bantay ng Ginto", "Espiritu"],
    examples: [
      "Bago kami nagsimula ng bagong butas, nag-alay muna kami ng puting manok sa bundok.",
      "Tuwing Biyernes ng gabi, nagsasagawa ng alay ang mga minero para sa kanilang kaligtasan.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  kabod: {
    title: "Kabod",
    definition: "Ang pagmimina o proseso ng paghukay ng lupa at pagkuha ng yamang mineral partikular ang ginto.",
    longDefinition:
      "Ang Kabod ay tumutukoy sa proseso ng pagmimina o paghukay ng lupa at pagkuha ng yamang mineral, partikular ang ginto, sa Jose Panganiban. Ito ay isang komprehensibong termino na sumasaklaw sa lahat ng aspeto ng pagmimina, mula sa paghukay hanggang sa pagproseso ng ginto.",
    category: "Proseso",
    relatedTerms: ["Mangkakabod", "Kabudan", "Butas"],
    examples: [
      "Ang kabod ay nangangailangan ng maraming lakas at tiyaga.",
      "Maraming taon na siyang nagkakabod sa bundok.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  alpombra: {
    title: "Alpombra",
    definition: "Inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto.",
    longDefinition:
      "Ang Alpombra ay isang materyal na inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa paghihiwalay ng ginto mula sa iba pang materyales tulad ng buhangin at bato.",
    category: "Kagamitan",
    relatedTerms: ["Kahon", "Salaan", "Barani"],
    examples: [
      "Kailangan palitan ang alpombra dahil hindi na masyadong nakakahuli ng ginto.",
      "Ang magandang alpombra ay nakakatulong sa mas mabisang pagkuha ng ginto.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  asoge: {
    title: "Asoge",
    definition: "Tumutulong sa pagbuo ng amalgam sa ginto.",
    longDefinition:
      "Ang Asoge, o mercury sa Ingles, ay isang kemikal na tumutulong sa pagbuo ng amalgam sa ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay ginagamit upang mahiwalay ang ginto mula sa iba pang materyales. Gayunpaman, ito ay isang nakakalasong kemikal at may mga panganib sa kalusugan at kapaligiran kung hindi maayos na gagamitin.",
    category: "Kemikal",
    relatedTerms: ["Amalgam", "Kawali", "Palayok"],
    examples: [
      "Kailangan mag-ingat sa paggamit ng asoge dahil ito ay nakakalason.",
      "Ginagamit ang asoge para mahiwalay ang ginto mula sa iba pang materyales.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  barena: {
    title: "Barena",
    definition:
      "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita.",
    longDefinition:
      "Ang Barena ay isang kagamitan na ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang kagamitan sa underground mining.",
    category: "Kagamitan",
    relatedTerms: ["Apad", "Bita", "Barenador", "Putok"],
    examples: [
      "Kailangan ng matalas na barena para makapagbutas sa matigas na bato.",
      "Ang barenador ay gumagamit ng barena para gumawa ng butas para sa dinamita.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
}

export default function TermDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const term = termData[slug as keyof typeof termData]

  if (!term) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-28 md:pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-lavender mb-6">Hindi Natagpuan ang Terminolohiya</h1>
              <p className="text-muted-foreground mb-8">
                Ang terminolohiyang "{slug}" ay hindi natagpuan sa aming database.
              </p>
              <Link href="/mga-wika">
                <Button className="bg-teal hover:bg-teal-dark text-white shadow-button hover:shadow-button-hover">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Bumalik sa Mga Wika
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-28 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <Link href="/mga-wika" className="inline-flex items-center text-teal hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Bumalik sa Mga Wika
              </Link>
            </div>

            <div className="bg-offwhite rounded-lg shadow-card overflow-hidden mb-8">
              <div className="relative h-64 w-full">
                <ClickableImage src={term.image} alt={term.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-lavender">{term.title}</h1>
                  {term.hasAudio && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 border-teal/30 hover:bg-teal/10"
                    >
                      <Volume2 className="h-5 w-5 text-teal" />
                      <span className="sr-only">Pakinggan</span>
                    </Button>
                  )}
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-cream text-slate-dark text-sm mb-4">
                  {term.category}
                </span>
                <p className="text-lg text-slate mb-6">{term.longDefinition}</p>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-lavender mb-4">Mga Halimbawa</h2>
                  <ul className="space-y-2">
                    {term.examples.map((example, index) => (
                      <li key={index} className="bg-cream/30 p-3 rounded-md text-slate">
                        "{example}"
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-lavender mb-4">Kaugnay na mga Terminolohiya</h2>
                  <div className="flex flex-wrap gap-2">
                    {term.relatedTerms.map((relatedTerm, index) => (
                      <Link
                        key={index}
                        href={`/mga-wika/term/${relatedTerm.toLowerCase()}`}
                        className="px-3 py-1 bg-cream/50 hover:bg-cream text-slate rounded-full text-sm transition-colors"
                      >
                        {relatedTerm}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-lavender mb-4">Pinagmulan</h2>
                  <p className="text-sm text-muted-foreground">
                    Ang impormasyong ito ay nakalap mula sa pananaliksik nina Clores, Narciso, Nisola, Nonoy, at Solver
                    (2024) tungkol sa mga terminolohiya sa pagmimina sa Bayan ng Jose Panganiban bilang kultural na
                    pagkakakilanlan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

