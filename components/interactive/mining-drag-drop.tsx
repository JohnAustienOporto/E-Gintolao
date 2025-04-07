"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, CheckCircle, HelpCircle, RefreshCw } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Define the structure for terms
interface Term {
  id: string
  term: string
  definition: string
  isPlaced: boolean
}

// Mining terminology data
const miningTerms: Term[] = [
  {
    id: "term1",
    term: "KAHON",
    definition: "Salaan ng mga ginto at dito binubuhos ang pinong buhangin",
    isPlaced: false,
  },
  {
    id: "term2",
    term: "ALAY",
    definition: "Puting manok o baboy na iniaalay tuwing Martes o Biyernes ng gabi",
    isPlaced: false,
  },
  {
    id: "term3",
    term: "BARENA",
    definition: "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita",
    isPlaced: false,
  },
  {
    id: "term4",
    term: "GINTO",
    definition: "Mahalagang mineral na kinukuha mula sa lupa sa pamamagitan ng pagmimina",
    isPlaced: false,
  },
  {
    id: "term5",
    term: "BLOWER",
    definition: "Nagbibigay ng hangin sa mga tao sa ilalim upang hindi malason",
    isPlaced: false,
  },
  {
    id: "term6",
    term: "KABOD",
    definition: "Ang proseso ng paghukay ng lupa at pagkuha ng yamang mineral",
    isPlaced: false,
  },
  {
    id: "term7",
    term: "ASOGE",
    definition: "Tumutulong sa pagbuo ng amalgam sa ginto",
    isPlaced: false,
  },
  {
    id: "term8",
    term: "BITA",
    definition: "Isang linya sa apad na siyang sinususugan para makakita ng ginto",
    isPlaced: false,
  },
]

export function MiningDragDrop() {
  const [terms, setTerms] = useState<Term[]>([])
  const [shuffledDefinitions, setShuffledDefinitions] = useState<Term[]>([])
  const [draggedTerm, setDraggedTerm] = useState<string | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 2

  // Track touch position
  const [touchStartY, setTouchStartY] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [activeTouchId, setActiveTouchId] = useState<number | null>(null)
  const [activeTermElement, setActiveTermElement] = useState<HTMLElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [currentTouchPosition, setCurrentTouchPosition] = useState({ x: 0, y: 0 })

  // Refs for elements
  const termRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const definitionRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  // Initialize the game
  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    // Reset terms
    const resetTerms = miningTerms.map((term) => ({
      ...term,
      isPlaced: false,
    }))

    // Shuffle terms and definitions
    const shuffledTerms = [...resetTerms].sort(() => Math.random() - 0.5)
    const shuffledDefs = [...resetTerms].sort(() => Math.random() - 0.5)

    setTerms(shuffledTerms)
    setShuffledDefinitions(shuffledDefs)
    setMatches({})
    setIsComplete(false)
    setShowHint(false)
    setCurrentStep(1)
    setDraggedTerm(null)
    setIsDragging(false)
    setActiveTermElement(null)
    setActiveTouchId(null)
  }

  // Handle drag start
  const handleDragStart = (e: React.DragEvent, termId: string) => {
    e.dataTransfer.setData("text/plain", termId)
    setDraggedTerm(termId)
  }

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent, termId: string) => {
    if (activeTouchId !== null) return // Already tracking a touch

    const touch = e.touches[0]
    setTouchStartY(touch.clientY)
    setTouchStartX(touch.clientX)
    setCurrentTouchPosition({ x: touch.clientX, y: touch.clientY })
    setActiveTouchId(touch.identifier)
    setDraggedTerm(termId)

    // Get the element being touched
    const element = e.currentTarget as HTMLElement
    setActiveTermElement(element)

    // Don't prevent default here to allow scrolling if user intends to scroll
  }

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (activeTouchId === null) return

    const touch = Array.from(e.touches).find((t) => t.identifier === activeTouchId)
    if (!touch) return

    const moveY = touch.clientY - touchStartY
    const moveX = touch.clientX - touchStartX

    // If we've moved more than 10px, consider it a drag
    if (!isDragging && (Math.abs(moveY) > 10 || Math.abs(moveX) > 10)) {
      setIsDragging(true)
      // Now prevent default to stop scrolling during drag
      e.preventDefault()
    }

    // Update current touch position for the floating element
    setCurrentTouchPosition({ x: touch.clientX, y: touch.clientY })
  }

  // Handle touch end
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (activeTouchId === null || !draggedTerm) {
      // Reset everything
      setActiveTouchId(null)
      setDraggedTerm(null)
      setIsDragging(false)
      setActiveTermElement(null)
      return
    }

    e.preventDefault()

    // Find which definition element the touch ended over
    const { x, y } = currentTouchPosition
    let matchedDefinition: string | null = null

    // Check each definition element to see if the touch ended over it
    definitionRefs.current.forEach((element, defId) => {
      const rect = element.getBoundingClientRect()
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        matchedDefinition = defId
      }
    })

    // If we found a matching definition and it's not already matched
    if (matchedDefinition && !Object.values(matches).includes(matchedDefinition)) {
      // Add the match
      const newMatches = { ...matches, [draggedTerm]: matchedDefinition }
      setMatches(newMatches)

      // Update the term's isPlaced status
      setTerms((prevTerms) => prevTerms.map((term) => (term.id === draggedTerm ? { ...term, isPlaced: true } : term)))

      // Check if all terms are placed
      if (Object.keys(newMatches).length === terms.length) {
        setIsComplete(true)
      }
    }

    // Reset everything
    setActiveTouchId(null)
    setDraggedTerm(null)
    setIsDragging(false)
    setActiveTermElement(null)
  }

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  // Handle drop
  const handleDrop = (e: React.DragEvent, definitionId: string) => {
    e.preventDefault()

    const termId = e.dataTransfer.getData("text/plain")
    if (!termId) return

    // Check if this definition already has a match
    if (Object.values(matches).includes(definitionId)) return

    // Add the match
    const newMatches = { ...matches, [termId]: definitionId }
    setMatches(newMatches)

    // Update the term's isPlaced status
    setTerms((prevTerms) => prevTerms.map((term) => (term.id === termId ? { ...term, isPlaced: true } : term)))

    // Reset dragged term
    setDraggedTerm(null)

    // Check if all terms are placed
    if (Object.keys(newMatches).length === terms.length) {
      setIsComplete(true)
    }
  }

  // Check if a match is correct
  const isMatchCorrect = (termId: string, definitionId: string) => {
    const term = terms.find((t) => t.id === termId)
    const definition = shuffledDefinitions.find((d) => d.id === definitionId)

    if (!term || !definition) return false

    return term.term === definition.term
  }

  // Calculate score
  const calculateScore = () => {
    let score = 0
    Object.entries(matches).forEach(([termId, defId]) => {
      if (isMatchCorrect(termId, defId)) {
        score++
      }
    })
    return score
  }

  // Handle next step
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  // Handle previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Get unplaced terms
  const getUnplacedTerms = () => {
    return terms.filter((term) => !term.isPlaced)
  }

  // Get placed terms
  const getPlacedTerms = () => {
    return terms.filter((term) => term.isPlaced)
  }

  // Render step 1: Drag and Drop
  const renderDragAndDrop = () => {
    return (
      <div className="space-y-8">
        {/* Terms column - Changed to a horizontal scrollable layout */}
        <div>
          <h3 className="font-bold text-teal-light mb-4 border-b border-teal/20 pb-2">Mga Salita</h3>
          <div className="flex flex-wrap gap-3 min-h-[120px]">
            {getUnplacedTerms().map((term) => (
              <motion.div
                key={term.id}
                ref={(el) => {
                  if (el) termRefs.current.set(term.id, el)
                }}
                draggable
                onDragStart={(e) => handleDragStart(e, term.id)}
                onTouchStart={(e) => handleTouchStart(e, term.id)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={cn(
                  "border border-teal/30 bg-teal/5 backdrop-blur-sm rounded-md p-3 cursor-move transition-all duration-300 hover:border-teal hover:bg-teal/10 hover:shadow-[0_0_15px_rgba(126,181,189,0.3)] flex-shrink-0",
                  draggedTerm === term.id && isDragging && "opacity-50",
                )}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textShadow: "0 0 10px rgba(126, 181, 189, 0.3)" }}
              >
                <p className="text-teal-light font-medium text-center">{term.term}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Definitions column - Improved spacing and layout */}
        <div>
          <h3 className="font-bold text-teal-light mb-4 border-b border-teal/20 pb-2">Mga Kahulugan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shuffledDefinitions.map((def) => {
              const matchedTermId = Object.keys(matches).find((key) => matches[key] === def.id)
              const matchedTerm = matchedTermId ? terms.find((t) => t.id === matchedTermId) : null
              const isCorrectMatch = matchedTermId ? isMatchCorrect(matchedTermId, def.id) : false

              return (
                <motion.div
                  key={def.id}
                  ref={(el) => {
                    if (el) definitionRefs.current.set(def.id, el)
                  }}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, def.id)}
                  className={cn(
                    "border rounded-md p-3 min-h-[80px] transition-all duration-300 backdrop-blur-sm",
                    matchedTerm
                      ? showHint || isComplete
                        ? isCorrectMatch
                          ? "border-green-500 bg-green-500/10 shadow-[0_0_15px_rgba(72,187,120,0.3)]"
                          : "border-red-500 bg-red-500/10 shadow-[0_0_15px_rgba(245,101,101,0.3)]"
                        : "border-teal bg-teal/10 shadow-[0_0_15px_rgba(126,181,189,0.3)]"
                      : "border-dashed border-teal/30 hover:border-teal/60 hover:bg-teal/5",
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-slate/80">{def.definition}</p>
                  {matchedTerm && (
                    <div className="mt-2 p-1 bg-charcoal-dark/50 rounded text-center backdrop-blur-sm">
                      <p
                        className="text-teal-light font-medium"
                        style={{ textShadow: "0 0 10px rgba(126, 181, 189, 0.5)" }}
                      >
                        {matchedTerm.term}
                      </p>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            onClick={resetGame}
            variant="outline"
            className="border-teal/30 hover:bg-teal/10 text-teal-light hover-lift transition-all duration-300"
            style={{ boxShadow: "0 0 10px rgba(126, 181, 189, 0.2)" }}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            I-reset
          </Button>

          <div className="space-x-2">
            <Button
              onClick={() => setShowHint(true)}
              variant="outline"
              className="border-teal/30 hover:bg-teal/10 text-teal-light hover-lift transition-all duration-300"
              disabled={showHint}
              style={{ boxShadow: "0 0 10px rgba(126, 181, 189, 0.2)" }}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Ipakita ang Sagot
            </Button>

            {isComplete && (
              <Button
                onClick={handleNextStep}
                className="bg-gradient-to-r from-teal to-teal-dark hover:from-teal-light hover:to-teal text-white font-semibold transition-all duration-300 group"
                style={{ boxShadow: "0 0 15px rgba(126, 181, 189, 0.3)" }}
              >
                <span className="flex items-center">
                  Tingnan ang Resulta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Render step 2: Results
  const renderResults = () => {
    const score = calculateScore()
    const percentage = Math.round((score / terms.length) * 100)

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-8">
          <motion.div
            className="inline-block rounded-full bg-teal/10 p-6 mb-4 border border-teal/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <CheckCircle className="h-16 w-16 text-teal-light drop-shadow-[0_0_10px_rgba(126,181,189,0.5)]" />
          </motion.div>
          <h3 className="text-2xl font-bold text-teal-light mb-2 drop-shadow-[0_0_10px_rgba(126,181,189,0.5)]">
            Resulta
          </h3>
          <p className="text-slate/80 text-lg">
            Nakakuha ka ng {score} sa {terms.length} na mga salita ({percentage}%)
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-teal-light border-b border-teal/20 pb-2">Mga Tamang Sagot</h4>
          {miningTerms.map((term) => (
            <div key={term.id} className="bg-teal/5 p-4 rounded-md border border-teal/20 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <p className="font-medium text-teal-light" style={{ textShadow: "0 0 10px rgba(126, 181, 189, 0.3)" }}>
                  {term.term}
                </p>
                <div className="text-xs px-2 py-1 bg-teal/10 rounded-full text-teal/70 border border-teal/20">
                  {term.id}
                </div>
              </div>
              <p className="text-sm text-slate/80 mt-2">{term.definition}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            onClick={handlePrevStep}
            variant="outline"
            className="border-teal/30 hover:bg-teal/10 text-teal-light hover-lift transition-all duration-300"
            style={{ boxShadow: "0 0 10px rgba(126, 181, 189, 0.2)" }}
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Bumalik
          </Button>

          <Button
            onClick={resetGame}
            className="bg-gradient-to-r from-teal to-teal-dark hover:from-teal-light hover:to-teal text-white font-semibold transition-all duration-300"
            style={{ boxShadow: "0 0 15px rgba(126, 181, 189, 0.3)" }}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Subukan Muli
          </Button>
        </div>
      </motion.div>
    )
  }

  // Render floating term for touch devices
  const renderFloatingTerm = () => {
    if (!isDragging || !draggedTerm || !activeTermElement) return null

    const term = terms.find((t) => t.id === draggedTerm)
    if (!term) return null

    return (
      <div
        className="fixed z-50 pointer-events-none bg-teal/80 text-white px-4 py-2 rounded-md shadow-lg"
        style={{
          left: currentTouchPosition.x - 50,
          top: currentTouchPosition.y - 30,
          transform: "translate(-50%, -50%)",
          opacity: 0.9,
        }}
      >
        {term.term}
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {/* Floating term for touch devices */}
      {renderFloatingTerm()}

      <Card
        className="w-full max-w-5xl mx-auto border-none bg-gradient-to-br from-[#1a1f35] to-[#0f1525] backdrop-blur-lg"
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(126, 181, 189, 0.2)",
          borderImage: "linear-gradient(135deg, rgba(126, 181, 189, 0.3), rgba(158, 141, 173, 0.1)) 1",
        }}
      >
        <CardHeader className="border-b border-teal/10 pb-4">
          <CardTitle className="text-xl text-teal-light">Hila at Bitaw: Mga Terminolohiya sa Pagmimina</CardTitle>
          <CardDescription className="text-slate/80">
            Hilahin ang mga salita at bitawan sa tamang kahulugan
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {renderDragAndDrop()}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {renderResults()}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

