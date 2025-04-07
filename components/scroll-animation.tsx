"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in"
  delay?: number
  threshold?: number
  className?: string
}

const ScrollAnimation = ({
  children,
  animation,
  delay = 0,
  threshold = 0.05, // Reduced from 0.1 to 0.05
  className,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Changed from -100px to -50px
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(animation, isVisible ? "visible" : "", className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "1.2s", // Added explicit duration to override the CSS
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", // Added easing function
      }}
    >
      {children}
    </div>
  )
}

export { ScrollAnimation }

