"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, HelpCircle, RefreshCw, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

// Define the word search grid and words
const initialGrid = [
  ["G", "A", "R", "B", "I", "T", "A", "G", "L", "M"],
  ["I", "W", "T", "Y", "U", "I", "O", "P", "A", "Q"],
  ["N", "M", "O", "B", "V", "C", "F", "G", "S", "P"],
  ["T", "A", "R", "G", "M", "Z", "K", "S", "D", "A"],
  ["O", "S", "E", "H", "J", "A", "K", "L", "O", "L"],
  ["H", "O", "S", "O", "K", "E", "S", "I", "K", "A"],
  ["K", "G", "O", "A", "C", "S", "P", "O", "Y", "Y"],
  ["L", "E", "B", "A", "R", "A", "L", "A", "E", "O"],
  ["M", "O", "W", "E", "L", "E", "M", "N", "W", "K"],
  ["D", "W", "S", "A", "K", "A", "D", "A", "P", "H"],
]

const wordList = [
  { word: "GINTO", found: false, description: "Mahalagang mineral na kinukuha mula sa lupa" },
  { word: "LASDOK", found: false, description: "Nilalagyan ng sakada mula sa ilalim ng butas" },
  { word: "ASOGE", found: false, description: "Tumutulong sa pagbuo ng amalgam sa ginto" },
  { word: "BARAL", found: false, description: "Tali na may maliliit na kahoy para hilahin ang lupa" },
  { word: "PALAYOK", found: false, description: "Dito niluluto ang ginto na may kasamang asoge" },
  { word: "BOSERO", found: false, description: "Taong sumusisid sa ilalim ng butas para maghukay" },
  { word: "PALA", found: false, description: "Kagamitan na ginagamit upang hukayin o maglipat ng lupa" },
  { word: "MOWEL", found: false, description: "Bakal na patulis na ginagamit na pantipak sa mga apad" },
  { word: "SAKADA", found: false, description: "Lupa o bato na kinukuha mula sa butas" },
  { word: "BITA", found: false, description: "Linya sa apad na sinususugan para makakita ng ginto" },
]

// Define the word locations in the grid
const wordLocations = {
  GINTO: [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
    { row: 3, col: 0 },
    { row: 4, col: 0 },
  ],
  LASDOK: [
    { row: 0, col: 8 },
    { row: 1, col: 8 },
    { row: 2, col: 8 },
    { row: 3, col: 8 },
    { row: 4, col: 8 },
    { row: 5, col: 8 },
  ],
  ASOGE: [
    { row: 4, col: 2 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
    { row: 5, col: 5 },
    { row: 5, col: 6 },
  ],
  BARAL: [
    { row: 7, col: 2 },
    { row: 7, col: 3 },
    { row: 7, col: 4 },
    { row: 7, col: 5 },
    { row: 7, col: 6 },
  ],
  PALAYOK: [
    { row: 3, col: 9 },
    { row: 4, col: 9 },
    { row: 5, col: 9 },
    { row: 6, col: 9 },
    { row: 7, col: 9 },
    { row: 8, col: 9 },
    { row: 9, col: 9 },
  ],
  BOSERO: [
    { row: 5, col: 0 },
    { row: 5, col: 1 },
    { row: 5, col: 2 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
    { row: 5, col: 5 },
  ],
  PALA: [
    { row: 7, col: 7 },
    { row: 7, col: 6 },
    { row: 7, col: 5 },
    { row: 7, col: 4 },
  ],
  MOWEL: [
    { row: 8, col: 0 },
    { row: 8, col: 1 },
    { row: 8, col: 2 },
    { row: 8, col: 3 },
    { row: 8, col: 4 },
  ],
  SAKADA: [
    { row: 9, col: 2 },
    { row: 9, col: 3 },
    { row: 9, col: 4 },
    { row: 9, col: 5 },
    { row: 9, col: 6 },
    { row: 9, col: 7 },
  ],
  BITA: [
    { row: 0, col: 5 },
    { row: 0, col: 6 },
    { row: 0, col: 7 },
    { row: 0, col: 8 },
  ],
}

interface CellState {
  letter: string
  selected: boolean
  highlighted: boolean
  foundWord: string | null
}

export function WordSearchPuzzle() {
  const [grid, setGrid] = useState<CellState[][]>([])
  const [words, setWords] = useState([...wordList])
  const [selectionStart, setSelectionStart] = useState<{ row: number; col: number } | null>(null)
  const [selectionEnd, setSelectionEnd] = useState<{ row: number; col: number } | null>(null)
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectedCells, setSelectedCells] = useState<{ row: number; col: number }[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [showAllWords, setShowAllWords] = useState(false)

  // Initialize the grid
  useEffect(() => {
    initializeGrid()
  }, [])

  // Check if the game is complete
  useEffect(() => {
    if (words.every((word) => word.found)) {
      setIsComplete(true)
    }
  }, [words])

  const initializeGrid = () => {
    const newGrid: CellState[][] = initialGrid.map((row) =>
      row.map((letter) => ({
        letter,
        selected: false,
        highlighted: false,
        foundWord: null,
      })),
    )

    setGrid(newGrid)
    setWords([...wordList].map((word) => ({ ...word, found: false })))
    setSelectionStart(null)
    setSelectionEnd(null)
    setIsSelecting(false)
    setSelectedCells([])
    setIsComplete(false)
    setShowAllWords(false)
  }

  // Handle mouse down on a cell
  const handleMouseDown = (row: number, col: number) => {
    if (isComplete) return

    // Start selection
    setIsSelecting(true)
    setSelectionStart({ row, col })
    setSelectionEnd({ row, col })

    // Update selected cells
    const newSelectedCells = [{ row, col }]
    setSelectedCells(newSelectedCells)

    // Update grid
    const newGrid = [...grid]
    newGrid[row][col].selected = true
    setGrid(newGrid)
  }

  // Handle mouse enter on a cell during selection
  const handleMouseEnter = (row: number, col: number) => {
    if (!isSelecting || isComplete) return

    setSelectionEnd({ row, col })

    // Calculate cells in the selection line
    if (selectionStart) {
      const cells = getCellsInLine(selectionStart.row, selectionStart.col, row, col)
      setSelectedCells(cells)

      // Update grid
      const newGrid = grid.map((gridRow, r) =>
        gridRow.map((cell, c) => ({
          ...cell,
          selected: cells.some((selectedCell) => selectedCell.row === r && selectedCell.col === c),
        })),
      )
      setGrid(newGrid)
    }
  }

  // Handle mouse up to complete selection
  const handleMouseUp = () => {
    if (!isSelecting || isComplete) return

    setIsSelecting(false)

    // Check if the selection matches any word
    checkSelection()
  }

  // Get cells in a straight line (horizontal, vertical, or diagonal)
  const getCellsInLine = (startRow: number, startCol: number, endRow: number, endCol: number) => {
    const cells: { row: number; col: number }[] = []

    // Horizontal line
    if (startRow === endRow) {
      const row = startRow
      const start = Math.min(startCol, endCol)
      const end = Math.max(startCol, endCol)

      for (let col = start; col <= end; col++) {
        cells.push({ row, col })
      }
    }
    // Vertical line
    else if (startCol === endCol) {
      const col = startCol
      const start = Math.min(startRow, endRow)
      const end = Math.max(startRow, endRow)

      for (let row = start; row <= end; row++) {
        cells.push({ row, col })
      }
    }
    // Diagonal line (if the absolute differences in row and col are the same)
    else if (Math.abs(endRow - startRow) === Math.abs(endCol - startCol)) {
      const rowStep = endRow > startRow ? 1 : -1
      const colStep = endCol > startCol ? 1 : -1
      const steps = Math.abs(endRow - startRow)

      for (let i = 0; i <= steps; i++) {
        cells.push({
          row: startRow + i * rowStep,
          col: startCol + i * colStep,
        })
      }
    }
    // If not a straight line, just return the start and end cells
    else {
      cells.push({ row: startRow, col: startCol })
      cells.push({ row: endRow, col: endCol })
    }

    return cells
  }

  // Check if the current selection matches any word
  const checkSelection = () => {
    if (!selectionStart || !selectionEnd) return

    // Get the selected word
    const selectedWord = selectedCells.map((cell) => grid[cell.row][cell.col].letter).join("")

    // Check if it matches any word in the list (forward or backward)
    const matchingWordIndex = words.findIndex(
      (word) => word.word === selectedWord || word.word === selectedWord.split("").reverse().join(""),
    )

    if (matchingWordIndex !== -1 && !words[matchingWordIndex].found) {
      // Word found!
      const wordName = words[matchingWordIndex].word

      // Update words list
      const newWords = [...words]
      newWords[matchingWordIndex].found = true
      setWords(newWords)

      // Update grid to highlight the found word
      const newGrid = [...grid]
      selectedCells.forEach((cell) => {
        newGrid[cell.row][cell.col].highlighted = true
        newGrid[cell.row][cell.col].foundWord = wordName
      })
      setGrid(newGrid)
    }

    // Clear selection
    const newGrid = grid.map((row) =>
      row.map((cell) => ({
        ...cell,
        selected: false,
      })),
    )
    setGrid(newGrid)
    setSelectedCells([])
  }

  // Show all words (hint)
  const handleShowAllWords = () => {
    setShowAllWords(true)

    // Update grid to highlight all words
    const newGrid = [...grid]
    const newWords = [...words]

    Object.entries(wordLocations).forEach(([word, locations]) => {
      // Find the word in the list
      const wordIndex = newWords.findIndex((w) => w.word === word)
      if (wordIndex !== -1) {
        newWords[wordIndex].found = true

        // Highlight the word in the grid
        locations.forEach((location) => {
          newGrid[location.row][location.col].highlighted = true
          newGrid[location.row][location.col].foundWord = word
        })
      }
    })

    setGrid(newGrid)
    setWords(newWords)
    setIsComplete(true)
  }

  // Get color for a cell based on its state
  const getCellColor = (cell: CellState) => {
    if (cell.highlighted) {
      // Different colors for different found words
      const wordIndex = words.findIndex((w) => w.word === cell.foundWord)
      const hue = (wordIndex * 36) % 360 // Distribute colors around the hue circle
      return `hsla(${hue}, 80%, 65%, 0.7)`
    }
    if (cell.selected) {
      return "rgba(126, 181, 189, 0.4)" // Teal color for selection
    }
    return "rgba(20, 30, 50, 0.3)" // Dark background with transparency
  }

  // Get border color for a cell based on its state
  const getCellBorderColor = (cell: CellState) => {
    if (cell.highlighted) {
      return "rgba(126, 181, 189, 0.8)" // Teal border for highlighted cells
    }
    if (cell.selected) {
      return "rgba(126, 181, 189, 1)" // Solid teal for selected cells
    }
    return "rgba(126, 181, 189, 0.2)" // Transparent teal for normal cells
  }

  // Add touch event handlers to the component
  const handleTouchStart = (rowIndex: number, colIndex: number) => {
    if (isComplete) return

    // Start selection
    setIsSelecting(true)
    setSelectionStart({ row: rowIndex, col: colIndex })
    setSelectionEnd({ row: rowIndex, col: colIndex })

    // Update selected cells
    const newSelectedCells = [{ row: rowIndex, col: colIndex }]
    setSelectedCells(newSelectedCells)

    // Update grid
    const newGrid = [...grid]
    newGrid[rowIndex][colIndex].selected = true
    setGrid(newGrid)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSelecting || isComplete) return
    e.preventDefault() // Prevent scrolling while selecting

    // Get touch position relative to the grid
    const touch = e.touches[0]
    const gridElement = document.querySelector(".grid-cols-10")
    if (!gridElement) return

    const gridRect = gridElement.getBoundingClientRect()
    const touchX = touch.clientX - gridRect.left
    const touchY = touch.clientY - gridRect.top

    // Calculate which cell the touch is over
    const cellWidth = gridRect.width / 10
    const cellHeight = cellWidth // Assuming square cells
    const colIndex = Math.floor(touchX / cellWidth)
    const rowIndex = Math.floor(touchY / cellHeight)

    // Make sure we're within grid bounds
    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 10) {
      setSelectionEnd({ row: rowIndex, col: colIndex })

      // Calculate cells in the selection line
      if (selectionStart) {
        const cells = getCellsInLine(selectionStart.row, selectionStart.col, rowIndex, colIndex)
        setSelectedCells(cells)

        // Update grid
        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((cell, c) => ({
            ...cell,
            selected: cells.some((selectedCell) => selectedCell.row === r && selectedCell.col === c),
          })),
        )
        setGrid(newGrid)
      }
    }
  }

  const handleTouchEnd = () => {
    if (!isSelecting || isComplete) return

    setIsSelecting(false)

    // Check if the selection matches any word
    checkSelection()
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
          <CardTitle className="text-xl text-teal-light">Hanap Salita: Mga Terminolohiya sa Pagkakabod</CardTitle>
          <CardDescription className="text-slate/80">
            Hanapin ang mga salita sa loob ng kahon na may kinalaman sa mga terminolohiyang ginagamit sa pagkakabod
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Word search grid */}
            <div>
              <div
                className="grid grid-cols-10 gap-0.5 bg-charcoal-dark/50 p-2 rounded-lg backdrop-blur-sm touch-none"
                style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.3)" }}
                onMouseLeave={() => {
                  if (isSelecting) {
                    setIsSelecting(false)
                    checkSelection()
                  }
                }}
              >
                {grid.map((row, rowIndex) => (
                  <React.Fragment key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                      <motion.div
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer select-none"
                        style={{
                          backgroundColor: getCellColor(cell),
                          border: `1px solid ${getCellBorderColor(cell)}`,
                          borderRadius: "4px",
                          transition: "all 0.2s ease",
                          boxShadow: cell.highlighted ? "0 0 10px rgba(126, 181, 189, 0.5)" : "none",
                          textShadow: cell.highlighted ? "0 0 10px rgba(126, 181, 189, 0.8)" : "none",
                        }}
                        whileHover={{ scale: 1.05 }}
                        onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                        onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                        onMouseUp={handleMouseUp}
                        onTouchStart={() => handleTouchStart(rowIndex, colIndex)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: (rowIndex * 10 + colIndex) * 0.005 }}
                      >
                        <span
                          className={`font-bold text-sm sm:text-base ${cell.highlighted ? "text-white" : "text-teal-light"}`}
                        >
                          {cell.letter}
                        </span>
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Word list */}
            <div>
              <h3 className="font-bold text-teal-light mb-4 border-b border-teal/20 pb-2">Mga Salitang Hahanapin</h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {words.map((word, index) => (
                  <motion.div
                    key={word.word}
                    className={cn(
                      "p-2 rounded-md transition-all duration-300 backdrop-blur-sm",
                      word.found ? "bg-teal/10 border border-teal/30" : "border border-teal/10",
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{
                      boxShadow: word.found ? "0 0 15px rgba(126, 181, 189, 0.2)" : "none",
                    }}
                  >
                    <div className="flex items-center">
                      <span
                        className={cn("font-medium", word.found ? "text-teal-light line-through" : "text-slate/80")}
                        style={{
                          textShadow: word.found ? "0 0 10px rgba(126, 181, 189, 0.5)" : "none",
                        }}
                      >
                        {word.word}
                      </span>
                      {word.found && <CheckCircle className="h-4 w-4 text-teal-light ml-2" />}
                    </div>
                    {word.found && <p className="text-xs text-slate/70 mt-1">{word.description}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-md backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-teal-light animate-pulse drop-shadow-[0_0_10px_rgba(126,181,189,0.5)]" />
                  <div>
                    <p className="text-teal-light font-medium">Binabati kita! Nakita mo na ang lahat ng mga salita!</p>
                    <p className="text-slate/70 text-sm">
                      Napakahusay! Ikaw ay isang eksperto sa mga terminolohiya ng pagkakabod.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="pt-2">
          <div className="flex justify-between w-full">
            <Button
              onClick={initializeGrid}
              variant="outline"
              className="border-teal/30 hover:bg-teal/10 text-teal-light hover-lift transition-all duration-300"
              style={{ boxShadow: "0 0 10px rgba(126, 181, 189, 0.2)" }}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              I-reset
            </Button>

            <Button
              onClick={handleShowAllWords}
              variant="outline"
              className="border-teal/30 hover:bg-teal/10 text-teal-light hover-lift transition-all duration-300"
              disabled={showAllWords || isComplete}
              style={{ boxShadow: "0 0 10px rgba(126, 181, 189, 0.2)" }}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Ipakita ang Lahat
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

