"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, Clock, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"

interface Tool {
  id: string
  name: string
}

interface Description {
  id: string
  toolId: string
  text: string
}

const tools: Tool[] = [
  { id: "tool1", name: "Batya" },
  { id: "tool2", name: "Kahon" },
  { id: "tool3", name: "Pala" },
  { id: "tool4", name: "Barena" },
  { id: "tool5", name: "Asoge" },
]

const descriptions: Description[] = [
  { id: "desc1", toolId: "tool1", text: "Isang mababaw na lalagyan na ginagamit sa pagpapanning ng ginto" },
  { id: "desc2", toolId: "tool2", text: "Salaan ng mga ginto at dito binubuhos ang pinong buhangin" },
  { id: "desc3", toolId: "tool3", text: "Isang kagamitan na ginagamit upang hukayin o maglipat ng lupa" },
  { id: "desc4", toolId: "tool4", text: "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita" },
  { id: "desc5", toolId: "tool5", text: "Tumutulong sa pagbuo ng amalgam sa ginto" },
]

export function ToolsMatchingGame() {
  const [shuffledDescriptions, setShuffledDescriptions] = useState<Description[]>([])
  const [matches, setMatches] = useState<{ [key: string]: string }>({})
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [showLine, setShowLine] = useState<{ from: string; to: string } | null>(null)

  useEffect(() => {
    shuffleDescriptions()
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && !isComplete) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    } else if (!isActive && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, isComplete])

  const shuffleDescriptions = () => {
    const shuffled = [...descriptions].sort(() => Math.random() - 0.5)
    setShuffledDescriptions(shuffled)
    setMatches({})
    setSelectedTool(null)
    setSelectedDescription(null)
    setIsComplete(false)
    setTimer(0)
    setIsActive(true)
    setShowLine(null)
  }

  const handleToolClick = (toolId: string) => {
    if (isComplete) return

    // If this tool is already matched, do nothing
    if (Object.values(matches).includes(toolId)) return

    setSelectedTool(toolId)
    setShowLine(null)

    // If a description is already selected, try to make a match
    if (selectedDescription) {
      const description = descriptions.find((d) => d.id === selectedDescription)

      if (description && description.toolId === toolId) {
        // Correct match
        const newMatches = { ...matches, [selectedDescription]: toolId }
        setMatches(newMatches)

        // Show connecting line briefly
        setShowLine({
          from: selectedDescription,
          to: toolId,
        })

        setTimeout(() => {
          setShowLine(null)
        }, 1000)

        // Check if all matches are complete
        if (Object.keys(newMatches).length === descriptions.length) {
          setIsComplete(true)
          setIsActive(false)
        }
      }

      // Reset selections
      setTimeout(() => {
        setSelectedTool(null)
        setSelectedDescription(null)
      }, 300)
    }
  }

  const handleDescriptionClick = (descriptionId: string) => {
    if (isComplete) return

    // If this description is already matched, do nothing
    if (matches[descriptionId]) return

    setSelectedDescription(descriptionId)
    setShowLine(null)

    // If a tool is already selected, try to make a match
    if (selectedTool) {
      const description = descriptions.find((d) => d.id === descriptionId)

      if (description && description.toolId === selectedTool) {
        // Correct match
        const newMatches = { ...matches, [descriptionId]: selectedTool }
        setMatches(newMatches)

        // Show connecting line briefly
        setShowLine({
          from: descriptionId,
          to: selectedTool,
        })

        setTimeout(() => {
          setShowLine(null)
        }, 1000)

        // Check if all matches are complete
        if (Object.keys(newMatches).length === descriptions.length) {
          setIsComplete(true)
          setIsActive(false)
        }
      }

      // Reset selections
      setTimeout(() => {
        setSelectedTool(null)
        setSelectedDescription(null)
      }, 300)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card
        className="w-full max-w-5xl mx-auto border-none bg-gradient-to-br from-[#1a1f35] to-[#0f1525] backdrop-blur-lg"
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(126, 181, 189, 0.2)",
          borderImage: "linear-gradient(135deg, rgba(126, 181, 189, 0.3), rgba(158, 141, 173, 0.1)) 1",
        }}
      >
        <CardHeader className="border-b border-teal/10 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl text-teal-light">Pagtatagpo ng mga Kagamitan sa Pagmimina</CardTitle>
              <CardDescription className="text-slate/80">
                Itugma ang bawat kagamitan sa tamang paglalarawan
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2 text-teal-light bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
              <Clock className="h-4 w-4 text-teal-light" />
              <span>{formatTime(timer)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pt-6 relative">
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 bg-teal/5 border border-teal/20 rounded-md mb-4 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-light animate-pulse drop-shadow-[0_0_10px_rgba(126,181,189,0.5)]" />
                  <div>
                    <p className="text-teal-light font-medium">Binabati kita! Nakumpleto mo ang laro!</p>
                    <p className="text-slate/70 text-sm">Oras: {formatTime(timer)}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <h3 className="font-bold text-teal-light mb-4 border-b border-teal/20 pb-2">Mga Kagamitan</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <motion.div
                  key={tool.id}
                  whileHover={!Object.values(matches).includes(tool.id) && !isComplete ? { scale: 1.05, y: -5 } : {}}
                  className={cn(
                    "border rounded-md p-3 flex flex-col items-center text-center cursor-pointer transition-all duration-300 backdrop-blur-sm",
                    selectedTool === tool.id && "border-teal bg-teal/10 shadow-[0_0_15px_rgba(126,181,189,0.3)]",
                    Object.values(matches).includes(tool.id) &&
                      "border-teal-light bg-teal/10 shadow-[0_0_15px_rgba(126,181,189,0.3)]",
                    !Object.values(matches).includes(tool.id) &&
                      !isComplete &&
                      "hover:border-teal hover:bg-teal/5 hover:shadow-[0_0_15px_rgba(126,181,189,0.2)]",
                  )}
                  onClick={() => handleToolClick(tool.id)}
                  id={`tool-${tool.id}`}
                >
                  <p
                    className="text-sm font-medium text-teal-light"
                    style={{ textShadow: "0 0 10px rgba(126, 181, 189, 0.3)" }}
                  >
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-teal-light mb-4 border-b border-teal/20 pb-2">Mga Paglalarawan</h3>
            <div className="space-y-3">
              {shuffledDescriptions.map((desc) => (
                <motion.div
                  key={desc.id}
                  whileHover={!matches[desc.id] && !isComplete ? { scale: 1.02, x: 5 } : {}}
                  className={cn(
                    "border rounded-md p-3 cursor-pointer transition-all duration-300 backdrop-blur-sm",
                    selectedDescription === desc.id && "border-teal bg-teal/10 shadow-[0_0_15px_rgba(126,181,189,0.3)]",
                    matches[desc.id] && "border-teal-light bg-teal/10 shadow-[0_0_15px_rgba(126,181,189,0.3)]",
                    !matches[desc.id] &&
                      !isComplete &&
                      "hover:border-teal hover:bg-teal/5 hover:shadow-[0_0_15px_rgba(126,181,189,0.2)]",
                  )}
                  onClick={() => handleDescriptionClick(desc.id)}
                  id={`desc-${desc.id}`}
                >
                  <p className="text-sm text-slate/80">{desc.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SVG for connection lines */}
          {showLine && (
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#7EB5BD" />
                </marker>
              </defs>
              <ConnectingLine fromId={`desc-${showLine.from}`} toId={`tool-${showLine.to}`} />
            </svg>
          )}
        </CardContent>
        <CardFooter className="pt-2">
          <Button
            onClick={shuffleDescriptions}
            className="w-full bg-gradient-to-r from-teal to-teal-dark hover:from-teal-light hover:to-teal text-white font-semibold transition-all duration-300 group"
            style={{ boxShadow: "0 0 15px rgba(126, 181, 189, 0.3)" }}
          >
            <RefreshCw className="h-4 w-4 mr-2 transition-transform group-hover:rotate-180" />
            Subukan Muli
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function ConnectingLine({ fromId, toId }: { fromId: string; toId: string }) {
  const [line, setLine] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null)

  useEffect(() => {
    const fromElement = document.getElementById(fromId)
    const toElement = document.getElementById(toId)

    if (fromElement && toElement) {
      const fromRect = fromElement.getBoundingClientRect()
      const toRect = toElement.getBoundingClientRect()

      // Calculate center points
      const fromX = fromRect.left + fromRect.width / 2
      const fromY = fromRect.top + fromRect.height / 2
      const toX = toRect.left + toRect.width / 2
      const toY = toRect.top + toRect.height / 2

      // Adjust for scroll position
      const scrollX = window.scrollX
      const scrollY = window.scrollY

      setLine({
        x1: fromX - scrollX,
        y1: fromY - scrollY,
        x2: toX - scrollX,
        y2: toY - scrollY,
      })
    }
  }, [fromId, toId])

  if (!line) return null

  return (
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      d={`M${line.x1},${line.y1} C${(line.x1 + line.x2) / 2},${line.y1} ${(line.x1 + line.x2) / 2},${line.y2} ${line.x2},${line.y2}`}
      stroke="#7EB5BD"
      strokeWidth="2"
      fill="none"
      strokeDasharray="5,5"
      markerEnd="url(#arrowhead)"
      style={{ filter: "drop-shadow(0 0 3px rgba(126, 181, 189, 0.5))" }}
    />
  )
}