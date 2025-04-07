"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon, ArrowRight, BookOpen, PenToolIcon as Tool, Lightbulb, History, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"

// Define the structure for search results
interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

// Define the structure for instant answers
interface InstantAnswer {
  keywords: string[]
  title: string
  content: string
  url: string
}

// Sample content data for search
const siteContent: SearchResult[] = [
  {
    title: "Mga Pagkakakilanlan",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may iba't ibang pagkakakilanlan na nabuo sa loob ng maraming taon.",
    url: "/pagkakakilanlan",
    category: "Kultura",
  },
  {
    title: "Gawi",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may mayayamang tradisyon at gawi na nagpapakita ng kanilang natatanging kultura.",
    url: "/gawi",
    category: "Kultura",
  },
  {
    title: "Paniniwala",
    description:
      "Ang mga paniniwala ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay nagpapakita ng kanilang malalim na koneksyon sa kalikasan at sa mundo ng espiritu.",
    url: "/paniniwala",
    category: "Kultura",
  },
  {
    title: "Pamamaraan",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay gumagamit ng iba't ibang pamamaraan sa paghahanap, pagkuha, at pagproseso ng ginto.",
    url: "/pamamaraan",
    category: "Teknikal",
  },
  {
    title: "Kagamitan",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay gumagamit ng iba't ibang kagamitan para sa paghahanap, pagkuha, at pagproseso ng ginto.",
    url: "/kagamitan",
    category: "Teknikal",
  },
  {
    title: "Proseso",
    description:
      "Ang proseso ng pagmimina at pagproseso ng ginto sa Jose Panganiban ay kinabibilangan ng ilang hakbang, mula sa paghahanap ng potensyal na lugar hanggang sa paglilinis at pagbebenta ng ginto.",
    url: "/proseso",
    category: "Teknikal",
  },
  {
    title: "Mga Wika",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may sariling bokabularyo at terminolohiya na ginagamit sa kanilang pang-araw-araw na gawain.",
    url: "/mga-wika",
    category: "Wika",
  },
  {
    title: "Mga Kwento ng Impormants",
    description:
      "Ang mga sumusunod na kwento at karanasan ay mula sa mga impormant na nagbahagi ng kanilang kaalaman at karanasan sa pagmimina ng ginto sa Jose Panganiban.",
    url: "/mga-kwento",
    category: "Kwento",
  },
  {
    title: "Dokumentasyon",
    description:
      "Ang E-Gintolao ay isang proyekto ng dokumentasyon na naglalayong mapreserba at maipasa sa susunod na henerasyon ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban, Camarines Norte.",
    url: "/dokumentasyon",
    category: "Proyekto",
  },
  {
    title: "Tungkol sa Mananaliksik",
    description:
      "Ang E-Gintolao ay isang proyekto ng isang grupo ng mga mananaliksik na naglalayong mapreserba at maipasa sa susunod na henerasyon ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban, Camarines Norte.",
    url: "/tungkol-sa-mananaliksik",
    category: "Proyekto",
  },
  {
    title: "Interactive Learning",
    description:
      "Subukan ang iba't ibang interactive na aktibidad upang mas maunawaan ang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban.",
    url: "/interactive",
    category: "Interactive",
  },
  // Add more content from the site
  {
    title: "Terminolohiya sa Pagmimina",
    description: "Mga salita at termino na ginagamit sa pagmimina ng ginto sa Jose Panganiban.",
    url: "/mga-wika",
    category: "Wika",
  },
  {
    title: "Alay",
    description: "Ito ay maaring puting manok o baboy at ito ay ginagawa tuwing Martes o Biyernes ng gabi.",
    url: "/mga-wika?term=alay",
    category: "Terminolohiya",
  },
  {
    title: "Kabod",
    description: "Ang pagmimina o proseso ng paghukay ng lupa at pagkuha ng yamang mineral partikular ang ginto.",
    url: "/mga-wika?term=kabod",
    category: "Terminolohiya",
  },
  {
    title: "Alpombra",
    description: "Inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto.",
    url: "/mga-wika?term=alpombra",
    category: "Terminolohiya",
  },
  {
    title: "Asoge",
    description: "Tumutulong sa pagbuo ng amalgam sa ginto.",
    url: "/mga-wika?term=asoge",
    category: "Terminolohiya",
  },
  {
    title: "Barena",
    description:
      "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita.",
    url: "/kagamitan?term=barena",
    category: "Kagamitan",
  },
  // Mining processes
  {
    title: "Pagpapanning",
    description:
      "Isang simpleng pamamaraan ng pagkuha ng ginto mula sa buhangin o lupa gamit ang isang kawali o batya.",
    url: "/pamamaraan?process=pagpapanning",
    category: "Pamamaraan",
  },
  {
    title: "Chemical Processing",
    description:
      "Isang pamamaraan na gumagamit ng mga kemikal, tulad ng mercury o cyanide, upang mahiwalay ang ginto mula sa iba pang materyales.",
    url: "/pamamaraan?process=chemical",
    category: "Pamamaraan",
  },
  // Beliefs and traditions
  {
    title: "Mga Bantay ng Ginto",
    description: "Ang paniniwala na may mga espiritu o nilalang na nagbabantay sa mga deposito ng ginto.",
    url: "/paniniwala?belief=bantay",
    category: "Paniniwala",
  },
  {
    title: "Paghahandog sa mga Espiritu",
    description:
      "Bago magsimula ang pagmimina, ang mga minero ay naghahandog ng pagkain, inumin, o iba pang alay sa mga espiritu ng bundok o lupa.",
    url: "/paniniwala?ritual=paghahandog",
    category: "Ritwal",
  },
]

// Instant answers for common queries
const instantAnswers: InstantAnswer[] = [
  {
    keywords: ["alay", "offering", "ritual"],
    title: "Alay - Ritwal sa Pagmimina",
    content:
      "Ang Alay ay isang ritwal na ginagawa ng mga minero tuwing Martes o Biyernes ng gabi. Ito ay maaaring puting manok o baboy na iniaalay sa mga espiritu ng bundok o lupa upang humingi ng pahintulot at proteksyon.",
    url: "/mga-wika?term=alay",
  },
  {
    keywords: ["ginto", "gold", "mineral"],
    title: "Ginto - Mahalagang Mineral",
    content:
      "Ang ginto ay isang mahalagang mineral na kinukuha mula sa lupa sa pamamagitan ng iba't ibang pamamaraan ng pagmimina. Sa Jose Panganiban, ito ay may espirituwal na kahulugan at hindi lamang isang materyal na kayamanan.",
    url: "/mga-wika?term=ginto",
  },
  {
    keywords: ["pagpapanning", "panning", "traditional"],
    title: "Pagpapanning - Tradisyonal na Pamamaraan",
    content:
      "Ang pagpapanning ay isang simpleng pamamaraan ng pagkuha ng ginto mula sa buhangin o lupa gamit ang isang kawali o batya. Ito ay isa sa mga pinakalumang pamamaraan ng pagmimina ng ginto.",
    url: "/pamamaraan?process=pagpapanning",
  },
  {
    keywords: ["barena", "tool", "drill"],
    title: "Barena - Kagamitan sa Pagmimina",
    content:
      "Ang barena ay ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita. Ito ay mahalagang kagamitan sa proseso ng pagmimina.",
    url: "/kagamitan?term=barena",
  },
  {
    keywords: ["bantay", "guardian", "spirit"],
    title: "Mga Bantay ng Ginto - Paniniwala",
    content:
      "Ang mga bantay ng ginto ay mga espiritu o nilalang na naniniwala ang mga minero na nagbabantay sa mga deposito ng ginto. Ayon sa paniniwala, kailangan silang igalang at hingan ng pahintulot bago magsimula ng pagmimina.",
    url: "/paniniwala?belief=bantay",
  },
]

// Function to get category icon
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "terminolohiya":
    case "wika":
      return <BookOpen className="h-4 w-4" />
    case "kagamitan":
    case "teknikal":
      return <Tool className="h-4 w-4" />
    case "paniniwala":
    case "ritwal":
    case "kultura":
      return <Lightbulb className="h-4 w-4" />
    case "kwento":
      return <MessageSquare className="h-4 w-4" />
    default:
      return <History className="h-4 w-4" />
  }
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [instantAnswer, setInstantAnswer] = useState<InstantAnswer | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [relatedSearches, setRelatedSearches] = useState<string[]>([])

  // Search function
  const performSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      setInstantAnswer(null)
      setRelatedSearches([])
      return
    }

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const searchTermLower = searchTerm.toLowerCase()

      // Check for instant answers
      const matchingAnswer = instantAnswers.find((answer) =>
        answer.keywords.some((keyword) => keyword.toLowerCase().includes(searchTermLower)),
      )
      setInstantAnswer(matchingAnswer || null)

      // Filter content based on search term
      const filteredResults = siteContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTermLower) ||
          item.description.toLowerCase().includes(searchTermLower) ||
          item.category.toLowerCase().includes(searchTermLower),
      )

      setResults(filteredResults)

      // Generate related searches
      if (filteredResults.length > 0) {
        // Extract keywords from results
        const keywords = filteredResults
          .flatMap((item) => item.title.split(" "))
          .filter((word) => word.length > 3)
          .filter((word) => !searchTermLower.includes(word.toLowerCase()))

        // Create related search terms
        const related = [
          `${searchTerm} sa Jose Panganiban`,
          `${searchTerm} terminolohiya`,
          ...keywords.slice(0, 3).map((word) => `${word} ${searchTerm}`),
        ].slice(0, 5)

        setRelatedSearches(related)
      } else {
        setRelatedSearches([])
      }

      setIsSearching(false)
    }, 300)
  }

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    performSearch(searchQuery)
  }

  // Handle related search click
  const handleRelatedSearch = (term: string) => {
    setSearchQuery(term)
    router.push(`/search?q=${encodeURIComponent(term)}`)
    performSearch(term)
  }

  // Perform search when query changes
  useEffect(() => {
    if (query) {
      setSearchQuery(query)
      performSearch(query)
    }
  }, [query])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow content-container">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-area">
            <h1 className="text-3xl md:text-4xl font-bold text-lavender mb-6">Mga Resulta ng Paghahanap</h1>

            <div className="mb-8">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Maghanap..."
                  className="w-full pl-10 pr-4 py-6 rounded-full border-teal/30 focus-visible:ring-teal shadow-card"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal hover:bg-teal-dark text-white shadow-button hover:shadow-button-hover"
                >
                  Hanapin
                </Button>
              </form>
            </div>

            {query && (
              <div className="mb-4 text-muted-foreground">
                {isSearching ? (
                  <p>Naghahanap para sa "{query}"...</p>
                ) : (
                  <p>
                    {results.length} {results.length === 1 ? "resulta" : "mga resulta"} para sa "{query}"
                  </p>
                )}
              </div>
            )}

            <div className="space-y-6">
              {/* Instant Answer */}
              {instantAnswer && !isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-cream/30 rounded-lg p-6 border border-teal/20 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal rounded-full p-3 text-white flex-shrink-0">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-lavender mb-2">{instantAnswer.title}</h2>
                      <p className="text-slate mb-4">{instantAnswer.content}</p>
                      <Link href={instantAnswer.url} className="text-teal flex items-center hover:underline">
                        Basahin ang higit pa <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Search Results */}
              {isSearching ? (
                <div className="flex justify-center py-8">
                  <div className="w-10 h-10 border-4 border-teal/30 border-t-teal rounded-full animate-spin"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-md bg-charcoal-light">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="flex-1">
                              <Link href={result.url} className="block group">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs px-2 py-1 rounded-full bg-gold/20 text-gold-light inline-flex items-center gap-1">
                                    {getCategoryIcon(result.category)}
                                    {result.category}
                                  </span>
                                </div>
                                <h2 className="text-lg font-semibold text-gold-light group-hover:text-teal-light mb-1">
                                  {result.title}
                                </h2>
                                <p className="text-sm text-slate/80 line-clamp-2">{result.description}</p>
                                <p className="text-xs text-teal-light mt-2 group-hover:underline flex items-center">
                                  {result.url} <ArrowRight className="h-3 w-3 ml-1" />
                                </p>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                query && (
                  <div className="text-center py-8">
                    <p className="text-lg text-muted-foreground">Walang nahanap na resulta para sa "{query}"</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Subukang gumamit ng ibang mga salita o termino.
                    </p>
                  </div>
                )
              )}

              {/* Related Searches */}
              {relatedSearches.length > 0 && !isSearching && (
                <div className="mt-8 pt-6 border-t border-teal/10">
                  <h3 className="text-lg font-medium text-lavender mb-4">Kaugnay na Paghahanap</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleRelatedSearch(term)}
                        className="px-4 py-2 bg-cream/50 hover:bg-cream text-slate rounded-full text-sm transition-colors shadow-button"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

