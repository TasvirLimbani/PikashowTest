"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { CategoryFilter } from "@/components/category-filter"
import { Footer } from "@/components/footer"
import type { Category } from "@/lib/types"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HorizontalAd from "@/components/AdsComponents/HorizontalAd"
import { GameGrid } from "@/components/game-grid"

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("category") || ""

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories")
        const data = await res.json()
        setCategories(data)
      } catch (error) {
        console.log("[v0] Failed to fetch categories:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      {/* <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} /> */}

      <main className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{categoryId ? "Category Games" : "Browse Categories"}</h1>
          <p className="text-slate-400">{categoryId ? "Explore more games in this category" : "Explore games by category and find your favorite genre"}</p>
        </div>
        <HorizontalAd />

        {categoryId ? (
          <GameGrid category={categoryId} />
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-slate-800 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories?category=${category.id}`}>
                <div className="group cursor-pointer rounded-lg border border-purple-500/20 bg-linear-to-br from-slate-800 to-slate-900 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                  <img
                    src={`https://images.atmegame.com/cat/${category.slug}.png`}
                    alt={category.name}
                    className="w-10 h-10 object-contain"
                  /> <div className="flex items-center justify-between mb-4">

                    <h3 className="text-xl font-bold text-white capitalize">{category.name}</h3>
                    <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <p className="text-slate-400 text-sm">Browse all {category.name} games</p>
                </div>
              </Link>
            ))}
            {/* <HorizontalAd /> */}

          </div>

        )}
      </main>

      <Footer />
    </div>
  )
}
