"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingText({ text, className, speed = 80, delay = 0 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isTyping])

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {displayText.length < text.length && <span className="border-r-2 border-current animate-blink">&nbsp;</span>}
    </span>
  )
}

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        animate ? "gold-gradient" : "bg-gradient-to-r from-primary via-secondary to-accent",
        className,
      )}
    >
      {children}
    </span>
  )
}

interface MorphingTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function MorphingText({ texts, interval = 5000, className }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsAnimating(false)
      }, 800)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <span
      className={cn(
        "inline-block transition-all duration-800",
        isAnimating ? "opacity-0 transform scale-98" : "opacity-100 transform scale-100",
        className,
      )}
    >
      {texts[currentIndex]}
    </span>
  )
}

