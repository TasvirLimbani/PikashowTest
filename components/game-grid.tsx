// "use client"

// import { useEffect, useRef, useState } from "react"
// import type { Game } from "@/lib/types"
// import { GameCard } from "./game-card"

// interface GameGridProps {
//   category: string
// }

// export function GameGrid({ category }: GameGridProps) {
//   const [games, setGames] = useState<Game[]>([])
//   const [page, setPage] = useState(0)
//   const [isLoading, setIsLoading] = useState(false)
//   const [hasMore, setHasMore] = useState(true)
//   const observerTarget = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     setGames([])
//     setPage(0)
//     setHasMore(true)
//   }, [category])

//   const loadMoreGames = async (pageToLoad) => {
//     if (isLoading) return

//     setIsLoading(true)

//     try {
//       const params = new URLSearchParams({
//         page: pageToLoad.toString(),
//         limit: "20",
//         category,
//       })

//       const res = await fetch(`/api/games?${params}`)
//       const data = await res.json()
//       console.log("API RESPONSE:", data)

//       // ✅ SAFETY FILTER ADDED HERE
//       setGames((prev) => {
//         const newGames = data.games.filter(
//           (newGame) => !prev.some((g) => g.id === newGame.id)
//         )
//         return [...prev, ...newGames]
//       })

//       setHasMore(data.hasMore)

//     } catch (error) {
//       console.error("Failed to load games:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     // if (!hasMore || isLoading) return

//     loadMoreGames(page)
//   }, [page, category])

//   return (
//     <>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

//         {games.map((game) => (
//           <GameCard key={game.id} game={game} />
//         ))}

//         {/* 🔥 Skeleton Loader */}
//         {isLoading &&
//           [...Array(6)].map((_, i) => (
//             <div
//               key={`skeleton-${i}`}
//               className="h-32 bg-slate-800 rounded-lg animate-pulse"
//             />
//           ))}

//       </div>

//       {hasMore && !isLoading && (
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => setPage((prev) => prev + 1)}
//             disabled={isLoading}
//             className="px-6 py-2 mt-20 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 font-bold text-lg transition-colors"
//           >
//             {"Load More"}
//           </button>
//         </div>
//       )}
//     </>
//   )
// }





"use client"

import { useEffect, useState } from "react"
import type { Game } from "@/lib/types"
import { GameCard } from "./game-card"

interface GameGridProps {
  category: string
  searchQuery?: string
  layout?: "rail" | "grid"
  showLoadMore?: boolean
}

export function GameGrid({ category, searchQuery = "", layout = "rail", showLoadMore = true }: GameGridProps) {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  const loadGames = async (pageToLoad: number, replace = false) => {
    if (isLoading) return

    setIsLoading(true)
    setError("")

    try {
      const params = new URLSearchParams({
        page: String(pageToLoad),
        limit: category === "all" ? "50" : "20",
      })
      const categoryId = Number.parseInt(category, 10)
      if (!Number.isNaN(categoryId) && categoryId > 0) params.set("category", String(categoryId))
      if (searchQuery.trim()) params.set("name", searchQuery.trim())

      const res = await fetch(`/api/games?${params}`, { cache: "no-store" })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to fetch games")

      const incomingGames = Array.isArray(data?.games) ? data.games : []

      setGames((prev) => {
        const newGames = incomingGames.filter(
          (newGame: Game) => !prev.some((g) => g.id === newGame.id)
        )
        return replace ? newGames : [...prev, ...newGames]
      })
      setPage(pageToLoad)
      setHasMore(Boolean(data?.hasMore))
    } catch (error) {
      console.error("Failed to load games:", error)
      setError(error instanceof Error ? error.message : "Games could not be loaded right now.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setGames([])
    setPage(1)
    setHasMore(false)
    void loadGames(1, true)
  }, [category, searchQuery])

  const isEmpty = !isLoading && !error && games.length === 0

  return (
    <>
      {/* ✅ GAME GRID */}
      <div className={layout === "grid" ? "grid grid-cols-2 gap-3 pb-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "flex snap-x gap-3 overflow-x-auto pb-2 scrollbar-hide"}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {error && <p className="py-4 text-center text-sm text-[#ff9d88]">{error}</p>}
      {isEmpty && <p className="py-4 text-center text-sm text-[#9da4b9]">No games found.</p>}

      {isLoading && (
        <div className="mt-5 flex h-5 items-center justify-center">
          <div className="flex gap-2">
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary delay-100" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary delay-200" />
          </div>
        </div>
      )}

      {showLoadMore && hasMore && !isLoading && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => void loadGames(page + 1)}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white transition hover:border-primary hover:bg-white/10"
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}