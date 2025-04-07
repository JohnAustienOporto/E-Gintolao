"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorPosition {
  x: number
  y: number
}

export function CursorEffect() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-charcoal-dark z-[9999] pointer-events-none mix-blend-difference"
            animate={{
              x: position.x - 12,
              y: position.y - 12,
              scale: clicked ? 0.8 : isPointer ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.5,
            }}
          />

          {/* Cursor dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-charcoal-dark z-[9999] pointer-events-none mix-blend-difference"
            animate={{
              x: position.x - 4,
              y: position.y - 4,
              opacity: clicked ? 0.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 40,
              stiffness: 400,
            }}
          />

          {/* Cursor trail */}
          <motion.div
            className="fixed top-0 left-0 w-10 h-10 rounded-full bg-charcoal/10 z-[9998] pointer-events-none"
            animate={{
              x: position.x - 20,
              y: position.y - 20,
              scale: clicked ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200,
              mass: 0.8,
              delay: 0.03,
            }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

