"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
  life: number
  maxLife: number
}

interface ParticleEffectsProps {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  speed?: number
  className?: string
}

export function ParticleEffects({
  count = 50,
  colors = ["#ffffff", "#f5f5f5", "#e0e0e0", "#2c2c34", "#3a3a48"],
  minSize = 2,
  maxSize = 6,
  speed = 0.5,
  className = "",
}: ParticleEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationRef = useRef<number>(0)

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    setDimensions({ width, height })

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Create initial particles
    const initialParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      initialParticles.push(createParticle(width, height, colors, minSize, maxSize, speed))
    }
    setParticles(initialParticles)

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return
      const canvas = canvasRef.current
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      setDimensions({ width, height })
      canvas.width = width
      canvas.height = height

      // Adjust particles to new dimensions
      setParticles((prevParticles) =>
        prevParticles.map((p) => ({
          ...p,
          x: (p.x / dimensions.width) * width,
          y: (p.y / dimensions.height) * height,
        })),
      )
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [count, colors, minSize, maxSize, speed])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      const updatedParticles = particles.map((p) => {
        // Update position
        const newX = p.x + p.vx
        const newY = p.y + p.vy

        // Bounce off walls or wrap around
        let x = newX
        let y = newY
        let vx = p.vx
        let vy = p.vy

        if (newX < 0 || newX > dimensions.width) {
          vx = -p.vx
          x = newX < 0 ? 0 : dimensions.width
        }

        if (newY < 0 || newY > dimensions.height) {
          vy = -p.vy
          y = newY < 0 ? 0 : dimensions.height
        }

        // Update life
        const life = p.life - 1

        // Draw particle
        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor((life / p.maxLife) * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Return updated particle or create new one if life is over
        if (life <= 0) {
          return createParticle(dimensions.width, dimensions.height, colors, minSize, maxSize, speed)
        }

        return { ...p, x, y, vx, vy, life }
      })

      setParticles(updatedParticles)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [particles, dimensions, colors, minSize, maxSize, speed])

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`} />
}

// Helper function to create a particle
function createParticle(
  width: number,
  height: number,
  colors: string[],
  minSize: number,
  maxSize: number,
  speed: number,
): Particle {
  const size = Math.random() * (maxSize - minSize) + minSize
  const color = colors[Math.floor(Math.random() * colors.length)]

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size,
    color,
    vx: (Math.random() - 0.5) * speed,
    vy: (Math.random() - 0.5) * speed,
    life: Math.random() * 200 + 50,
    maxLife: 250,
  }
}

