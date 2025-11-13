import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PikaShowGames - Play Free Online Games",
  description:
    "Play thousands of free online games instantly without download. ActionAdventure, Puzzle, Sports games and more on PikaShowGames.",
  keywords: [
    "PikaShowGames",
    "free online games",
    "play games online",
    "browser games",
    "HTML5 games",
    "no download games",
  ],
  openGraph: {
    title: "PikaShowGames – Play Free Online Games Instantly",
    description:
      "Enjoy thousands of free browser games. Play instantly without download on mobile and desktop at PikaShowGames!",
    url: "https://www.pikashowgames.com",
    siteName: "PikaShowGames",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "PikaShowGames Thumbnail",
      },
    ],
  },
  generator: "PikaShowGames",
  icons: {
    icon: [
      {
        url: "/Logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "",
        type: "image/svg+xml",
      },
    ],
    apple: "/Logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
