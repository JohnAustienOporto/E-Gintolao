"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface CategoryCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export function CategoryCard({ title, description, imageSrc, href }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 border-gold/20 bg-charcoal-light group">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent"></div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">
            <motion.span animate={{ color: isHovered ? "#7EB5BD" : "#C2AD7A" }} transition={{ duration: 0.3 }}>
              {title}
            </motion.span>
          </CardTitle>
          <CardDescription className="text-sm text-slate/80">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pb-2">
          <p className="text-xs text-slate/60 line-clamp-2">
            Mag-click para makita ang kumpletong impormasyon tungkol sa {title.toLowerCase()}.
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            asChild
            variant="outline"
            className="w-full border-gold/20 hover:bg-gold/10 hover:text-gold-light hover:border-gold text-sm shadow-sm hover:shadow-gold-glow"
          >
            <Link href={href}>
              <motion.span animate={{ x: isHovered ? 3 : 0 }} transition={{ duration: 0.3 }}>
                Tingnan
              </motion.span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

