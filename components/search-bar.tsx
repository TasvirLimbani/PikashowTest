// "use client"

// import { useState, useEffect } from "react"
// import { Search, X } from "lucide-react"
// import type { Game } from "@/lib/types"
// import Link from "next/link"

// interface SearchBarProps {
//   onSearch?: (query: string) => void
// }

// export function SearchBar({ onSearch }: SearchBarProps) {
//   const [query, setQuery] = useState("")
//   const [results, setResults] = useState<Game[]>([])
//   const [isOpen, setIsOpen] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([])
//       return
//     }

//     const timer = setTimeout(async () => {
//       setIsLoading(true)
//       try {
//         const res = await fetch(`/api/games/search?q=${encodeURIComponent(query)}&limit=10`)
//         const data = await res.json()
//         setResults(data.results || [])
//       } catch (error) {
//         console.error("[v0] Search failed:", error)
//         setResults([])
//       } finally {
//         setIsLoading(false)
//       }
//     }, 300)

//     return () => clearTimeout(timer)
//   }, [query])

//   return (
//     <div className="relative w-full max-w-md">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Search games..."
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value)
//             setIsOpen(true)
//           }}
//           onFocus={() => query && setIsOpen(true)}
//           onBlur={() => setTimeout(() => setIsOpen(false), 200)}
//           className="w-full pl-10 pr-10 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-slate-800"
//         />
//         {query && (
//           <button
//             onClick={() => {
//               setQuery("")
//               setResults([])
//             }}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         )}
//       </div>

//       {/* Search Results Dropdown */}
//       {isOpen && query && (
//         <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-purple-500/30 rounded-lg shadow-2xl shadow-purple-900/50 z-50 max-h-96 overflow-y-auto">
//           {isLoading ? (
//             <div className="p-4 text-center text-slate-400">Searching...</div>
//           ) : results.length > 0 ? (
//             <div className="py-1">
//               {results.map((game) => (
//                 <Link key={game.slug} href={`/game/${game.slug}`}>
//                   <div className="px-4 py-2 hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-3">
//                     <img
//                       src={`https://slides.atmegame.com/slide/${game.image}_slide.jpg`}
//                       alt={game.name}
//                       className="w-10 h-10 rounded object-cover"
//                       onError={(e) => {
//                         e.currentTarget.src = "/placeholder.svg"
//                       }}
//                     />
//                     <div className="flex-1 min-w-0">
//                       <p className="text-slate-200 truncate text-sm font-medium">{game.name}</p>
//                       <p className="text-slate-500 text-xs">{(game.totalPlayed / 1000).toFixed(0)}K plays</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="p-4 text-center text-slate-400 text-sm">No games found</div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import type { Game } from "@/lib/types"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Game[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timer = setTimeout(async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/games/search?name=${encodeURIComponent(query)}&limit=10&page=1`)
        const data = await res.json()
        setResults(data.results || [])
      } catch (error) {
        console.error("[v0] Search failed:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="relative w-full max-w-[480px]">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-[#9da4b9]" />
        <input
          type="text"
          placeholder="Search games..."
          aria-label="Search games"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim()) {
              e.preventDefault()
              onSearch?.(query.trim())
              setIsOpen(false)
              router.push(`/search?q=${encodeURIComponent(query.trim())}`)
            }
          }}
          onFocus={() => query && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-10 text-sm text-white placeholder-[#788196] transition focus:border-[#ff8063] focus:bg-white/10 focus:outline-none"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
            }}
            aria-label="Clear search query"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9da4b9] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-white/10 bg-[#181c2b] shadow-2xl">
          {isLoading ? (
            <div className="p-4 text-center text-slate-400 text-sm">Searching...</div>
          ) : results.length > 0 ? (
            <div className="py-1">
              {results.map((game, index) => (
                <Link
                  key={game.id ?? game.slug ?? index}
                  href={`/game/${game.id ?? game.slug}`}
                >
                  <div className="px-4 py-2 hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-3">
                    <img
                      src={game.thumb || game.image || "/placeholder.svg"}
                      alt={game.name}
                      className="h-10 w-10 shrink-0 rounded object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-200 truncate text-sm font-medium">{game.title || game.name}</p>
                      <p className="text-slate-500 text-xs">{game.category || "Game"}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-slate-400 text-sm">No games found</div>
          )}
        </div>
      )}
    </div>
  )
}
