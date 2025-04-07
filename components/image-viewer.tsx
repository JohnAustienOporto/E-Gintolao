"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ImageViewerProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageViewer({ src, alt, isOpen, onClose }: ImageViewerProps) {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)

  // Reset zoom and rotation when a new image is opened
  useEffect(() => {
    if (isOpen) {
      setScale(1)
      setRotation(0)
    }
  }, [isOpen, src])

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-charcoal-dark border-gold/20">
        <div className="relative w-full h-full flex flex-col">
          {/* Controls */}
          <div className="absolute top-2 right-2 z-10 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-charcoal-dark/70 hover:bg-charcoal-dark text-gold-light"
              onClick={handleZoomIn}
            >
              <ZoomIn className="h-5 w-5" />
              <span className="sr-only">Zoom In</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-charcoal-dark/70 hover:bg-charcoal-dark text-gold-light"
              onClick={handleZoomOut}
            >
              <ZoomOut className="h-5 w-5" />
              <span className="sr-only">Zoom Out</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-charcoal-dark/70 hover:bg-charcoal-dark text-gold-light"
              onClick={handleRotate}
            >
              <RotateCw className="h-5 w-5" />
              <span className="sr-only">Rotate</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-charcoal-dark/70 hover:bg-charcoal-dark text-gold-light"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Image container */}
          <div className="flex-grow overflow-hidden flex items-center justify-center p-4 touch-none">
            <motion.div
              animate={{ scale, rotate: rotation }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.1}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Clickable image component that opens the viewer when clicked
interface ClickableImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
}

export function ClickableImage({ src, alt, width, height, fill = false, className }: ClickableImageProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  return (
    <>
      <div
        className={`relative group cursor-pointer ${fill ? "w-full h-full" : ""} ${className || ""}`}
        onClick={() => setIsViewerOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} image`}
        onKeyDown={(e) => e.key === "Enter" && setIsViewerOpen(true)}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || (fill ? undefined : 500)}
          height={height || (fill ? undefined : 300)}
          fill={fill}
          className={`${fill ? "object-cover" : ""} ${className || ""} transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-charcoal-dark/0 group-hover:bg-charcoal-dark/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <ZoomIn className="h-8 w-8 text-white" />
        </div>
      </div>
      <ImageViewer
        src={src || "/placeholder.svg"}
        alt={alt}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  )
}

