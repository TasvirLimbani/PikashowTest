"use client"

import { Suspense, useEffect, useState } from "react"
import { Header } from "@/components/header"
import { CategoryFilter } from "@/components/category-filter"
import { GameGrid } from "@/components/game-grid"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"
import HorizontalAd from "@/components/AdsComponents/HorizontalAd"

export const dynamic = "force-dynamic"

function HomeInner() {
  const searchParams = useSearchParams()
  const categoryFromURL = searchParams.get("category") || "all"
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL)

  useEffect(() => {
    setSelectedCategory(categoryFromURL)
  }, [categoryFromURL])

  return (
    <>
      {/* <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} /> */}
      <HorizontalAd />
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex-1 w-full">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Play Free{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Online Browser Games
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-6">
            Welcome to PikaShowGames! Explore over 1,000+ free online games available instantly on your desktop, mobile phone, or tablet. Enjoy top action, puzzle, arcade, shooting, and sports games with zero downloads or registration required.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a
              href="#games-grid"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              🎮 Play Free Games Now
            </a>
            <span className="text-slate-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              100% Free • Instant Play
            </span>
          </div>
        </div>

        <section id="games-grid" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Featured Free Online Games
            </h2>
          </div>
          <GameGrid category={selectedCategory} />
        </section>
      </main>
    </>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">

      <Header />
      <Suspense fallback={<div className="text-white p-8 text-center">Loading...</div>}>
        <HomeInner />
      </Suspense>
      <Footer />
    </div>
  )
}

