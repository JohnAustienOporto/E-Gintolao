"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { instantAnswers, siteContent } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

// Update the navItems array to include the interactive page
const navItems = [
  { name: "Tahanan", path: "/" },
  { name: "Mga Pagkakakilanlan", path: "/pagkakakilanlan" },
  { name: "Gawi", path: "/gawi" },
  { name: "Paniniwala", path: "/paniniwala" },
  { name: "Pamamaraan", path: "/pamamaraan" },
  { name: "Kagamitan", path: "/kagamitan" },
  { name: "Proseso", path: "/proseso" },
  { name: "Mga Wika", path: "/mga-wika" },
  { name: "Mga Laro", path: "/interactive" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<typeof siteContent>([])
  const [instantAnswer, setInstantAnswer] = useState<(typeof instantAnswers)[0] | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Update search suggestions as user types
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const searchTermLower = searchQuery.toLowerCase()

      // Check for instant answers
      const matchingAnswer = instantAnswers.find((answer) =>
        answer.keywords.some((keyword) => keyword.toLowerCase().includes(searchTermLower)),
      )
      setInstantAnswer(matchingAnswer || null)

      // Filter content for suggestions
      const filteredResults = siteContent
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchTermLower) ||
            item.description.toLowerCase().includes(searchTermLower) ||
            item.category.toLowerCase().includes(searchTermLower),
        )
        .slice(0, 5) // Limit to 5 suggestions

      setSuggestions(filteredResults)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setInstantAnswer(null)
      setShowSuggestions(false)
    }
  }, [searchQuery])

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSuggestions(false)
      setIsOpen(false)
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (url: string) => {
    router.push(url)
    setShowSuggestions(false)
    setSearchQuery("")
  }

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top section with logo and search */}
      <div
        className={cn(
          "w-full transition-all duration-300 py-3",
          isScrolled ? "bg-charcoal shadow-md" : "bg-charcoal/90",
        )}
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  className="relative h-10 w-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >

                </motion.div>
                <span className="text-xl font-bold text-lavender">E-Gintolao</span>
              </Link>

              {/* Search Bar with Suggestions */}
              <div className="hidden sm:block w-full max-w-xs lg:max-w-md relative" ref={searchRef}>
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="search"
                    placeholder="Maghanap..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border-teal/30 focus-visible:ring-teal shadow-button"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.trim().length > 1 && setShowSuggestions(true)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </form>

                {/* Search Suggestions Dropdown */}
                <AnimatePresence>
                  {showSuggestions && searchQuery.trim().length > 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-charcoal-light rounded-lg shadow-md border border-gold/10 overflow-hidden z-50"
                    >
                      {/* Instant Answer */}
                      {instantAnswer && (
                        <div className="p-4 border-b border-gold/10">
                          <div className="flex items-start gap-3">
                            <div className="bg-gold/20 rounded-full p-2 flex-shrink-0">
                              <Search className="h-4 w-4 text-gold" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gold-light">{instantAnswer.title}</h4>
                              <p className="text-sm text-slate mt-1">{instantAnswer.content}</p>
                              <Link
                                href={instantAnswer.url}
                                className="text-xs text-teal-light flex items-center mt-2 hover:underline"
                                onClick={() => setShowSuggestions(false)}
                              >
                                Basahin ang higit pa <ArrowRight className="h-3 w-3 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Suggestions List */}
                      <ul className="max-h-80 overflow-y-auto">
                        {suggestions.map((item, index) => (
                          <li key={index}>
                            <button
                              className="w-full text-left px-4 py-3 hover:bg-gold/10 transition-colors flex items-start gap-3"
                              onClick={() => handleSuggestionClick(item.url)}
                            >
                              <Search className="h-4 w-4 text-slate mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-slate">{item.title}</div>
                                <div className="text-xs text-slate/70 mt-0.5">{item.category}</div>
                              </div>
                            </button>
                          </li>
                        ))}

                        {/* Show all results link */}
                        {suggestions.length > 0 && (
                          <li className="border-t border-gold/10">
                            <button
                              className="w-full text-left px-4 py-3 text-teal-light hover:bg-gold/10 transition-colors flex items-center justify-between"
                              onClick={() => handleSearch({ preventDefault: () => {} } as React.FormEvent)}
                            >
                              <span>Ipakita ang lahat ng resulta para sa "{searchQuery}"</span>
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </li>
                        )}

                        {/* No results */}
                        {suggestions.length === 0 && searchQuery.trim().length > 1 && (
                          <li className="px-4 py-3 text-slate/70 text-center">
                            Walang nahanap na resulta para sa "{searchQuery}"
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-cream/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation bar below logo */}
      <div
        className={cn(
          "w-full hidden md:block transition-all duration-300",
          isScrolled ? "bg-charcoal border-b border-gold/10 shadow-sm" : "bg-charcoal/90",
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors relative hover-lift",
                  pathname === item.path ? "text-teal" : "text-slate hover:text-teal",
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-charcoal pt-4 pb-3 space-y-3 shadow-card"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            {/* Mobile Search with Suggestions */}
            <div className="relative mb-4" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Maghanap..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border-teal/30 focus-visible:ring-teal shadow-button"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim().length > 1 && setShowSuggestions(true)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </form>

              {/* Mobile Search Suggestions */}
              <AnimatePresence>
                {showSuggestions && searchQuery.trim().length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-charcoal-light rounded-lg shadow-md border border-gold/10 overflow-hidden z-50"
                  >
                    {/* Instant Answer */}
                    {instantAnswer && (
                      <div className="p-4 border-b border-gold/10">
                        <div className="flex items-start gap-3">
                          <div className="bg-gold/20 rounded-full p-2 flex-shrink-0">
                            <Search className="h-4 w-4 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gold-light">{instantAnswer.title}</h4>
                            <p className="text-sm text-slate line-clamp-2 mt-1">{instantAnswer.content}</p>
                            <Link
                              href={instantAnswer.url}
                              className="text-xs text-teal-light flex items-center mt-2 hover:underline"
                              onClick={() => {
                                setShowSuggestions(false)
                                setIsOpen(false)
                              }}
                            >
                              Basahin ang higit pa <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Suggestions List */}
                    <ul className="max-h-60 overflow-y-auto">
                      {suggestions.map((item, index) => (
                        <li key={index}>
                          <button
                            className="w-full text-left px-4 py-3 hover:bg-gold/10 transition-colors flex items-start gap-3"
                            onClick={() => {
                              handleSuggestionClick(item.url)
                              setIsOpen(false)
                            }}
                          >
                            <Search className="h-4 w-4 text-slate mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate">{item.title}</div>
                              <div className="text-xs text-slate/70 mt-0.5">{item.category}</div>
                            </div>
                          </button>
                        </li>
                      ))}

                      {/* Show all results link */}
                      {suggestions.length > 0 && (
                        <li className="border-t border-gold/10">
                          <button
                            className="w-full text-left px-4 py-3 text-teal-light hover:bg-gold/10 transition-colors flex items-center justify-between"
                            onClick={() => {
                              handleSearch({ preventDefault: () => {} } as React.FormEvent)
                              setIsOpen(false)
                            }}
                          >
                            <span>Ipakita ang lahat ng resulta para sa "{searchQuery}"</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </li>
                      )}

                      {/* No results */}
                      {suggestions.length === 0 && searchQuery.trim().length > 1 && (
                        <li className="px-4 py-3 text-slate/70 text-center">
                          Walang nahanap na resulta para sa "{searchQuery}"
                        </li>
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm font-medium transition-colors",
                    pathname === item.path
                      ? "bg-teal/10 text-teal"
                      : "hover:bg-gold/10 text-slate hover:text-gold-light",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}

