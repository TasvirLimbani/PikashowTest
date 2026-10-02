"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameGrid } from "@/components/game-grid"

function SearchResults() {
    const searchParams = useSearchParams()
    const query = searchParams.get("q")?.trim() || ""

    return (
        <main className="mx-auto w-full max-w-[1680px] flex-1 px-3 py-6 sm:px-5 md:py-8">
            <div className="mb-6 border-b border-white/10 pb-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Search results</p>
                <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    {query ? `Games matching “${query}”` : "Search games"}
                </h1>
            </div>
            {query ? <GameGrid category="all" searchQuery={query} /> : <p className="text-sm text-[#9da4b9]">Enter a game name to search.</p>}
        </main>
    )
}

export default function SearchPage() {
    return (
        <div className="flex min-h-screen flex-col overflow-x-clip bg-background">
            <Header />
            <Suspense fallback={<div className="flex-1 p-8 text-center text-white">Loading...</div>}>
                <SearchResults />
            </Suspense>
            <Footer />
        </div>
    )
}
