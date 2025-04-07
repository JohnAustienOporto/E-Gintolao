"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface MorphingShapeProps {
  className?: string
  color?: string
  size?: number
  children?: React.ReactNode
  interactive?: boolean
}

export function MorphingShape({
  className,
  color = "bg-charcoal/30",
  size = 200,
  children,
  interactive = false,
}: MorphingShapeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        interactive ? "cursor-pointer" : "",
        className,
      )}
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={cn("absolute inset-0 morph-blob", color, interactive && isHovering ? "animate-none" : "")}
        style={
          interactive && isHovering
            ? {
                borderRadius: `${50 + (mousePosition.y / size) * 50}% ${
                  50 + ((size - mousePosition.x) / size) * 50
                }% ${50 + ((size - mousePosition.y) / size) * 50}% ${50 + (mousePosition.x / size) * 50}%`,
              }
            : {}
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

