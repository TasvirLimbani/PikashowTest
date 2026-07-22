import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { AdBlockDetector } from "@/components/AdBlockDetector"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pikashowgames.com"),
  alternates: {
    canonical: "./",
  },
  title: "Free Online Games - Play 1,000+ Browser Games | PikaShowGames",
  description:
    "Play 1,000+ free online games instantly with no downloads or installs required! Action, puzzle, sports & arcade browser games ready on PikaShowGames.",
  keywords: [
    "PikaShowGames",
    "free online games",
    "play games online",
    "browser games",
    "HTML5 games",
    "no download games",
  ],
  openGraph: {
    title: "Free Online Games - Play 1,000+ Browser Games | PikaShowGames",
    description:
      "Play 1,000+ free online games instantly with no downloads or installs required! Action, puzzle, sports & arcade browser games ready on PikaShowGames.",
    url: "https://www.pikashowgames.com",
    siteName: "PikaShowGames",
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "PikaShowGames Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Games - Play 1,000+ Browser Games | PikaShowGames",
    description:
      "Play 1,000+ free online games instantly with no downloads or installs required! Action, puzzle, sports & arcade browser games ready on PikaShowGames.",
    images: ["/Logo.png"],
  },
  generator: "PikaShowGames",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
}

const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.pikashowgames.com/#organization",
    "name": "PikaShowGames",
    "url": "https://www.pikashowgames.com",
    "logo": "https://www.pikashowgames.com/Logo.png",
    "sameAs": [
      "https://www.instagram.com/the.circuit.club/",
      "https://www.facebook.com/pikashowgames"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.pikashowgames.com/#website",
    "url": "https://www.pikashowgames.com",
    "name": "PikaShowGames",
    "publisher": {
      "@id": "https://www.pikashowgames.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.pikashowgames.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Script
          id="global-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemas) }}
        />

        {/* 🔒 AdBlock Detection ADDED */}
        <AdBlockDetector>
          {children}
        </AdBlockDetector>
        
        <Analytics />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3990057144186847"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
