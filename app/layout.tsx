import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "E-Gintolao | Wika at Kulturang Ginto",
  description:
    "Dokumentasyon ng mga wika at kultural na gawain ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban, Camarines Norte",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',        // Standard favicon
    shortcut: '/favicon.ico',     // Alternative for older browsers
    apple: '/apple-touch-icon.png', // For iOS devices (180x180px)
    other: {
      rel: 'icon',
      url: '/images/logo1.png',  // 32x32px PNG version
      sizes: '32x32'
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fil" suppressHydrationWarning>
      <body className="bg-charcoal">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}