// "use client"

// import type { Game } from "@/lib/types"
// import Link from "next/link"
// import { Heart } from "lucide-react"
// import { useState } from "react"

// interface GameCardProps {
//   game: Game
// }

// export function GameCard({ game }: GameCardProps) {
//   const [isFavorited, setIsFavorited] = useState(false)

//   const imageUrl = game.image
//     ? `https://www.atmhtml5games.com${game.image}`
//     : "/placeholder.svg"

//   return (
//     <Link href={`/game/${game.id}`}>
//       <div className="group relative bg-slate-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:shadow-purple-500/50">
//         {/* Game Image */}
//         <div className="relative w-full aspect-sq bg-slate-700 overflow-hidden">
//           <img
//             src={imageUrl || "/placeholder.svg"}
//             alt={game.name}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//             onError={(e) => {
//               e.currentTarget.src = "/game-thumbnail.jpg"
//             }}
//           />

//           {/* Favorite Button */}
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               setIsFavorited(!isFavorited)
//             }}
//             className="absolute top-2 right-2 z-10 bg-slate-900/70 p-2 rounded-full hover:bg-slate-800 transition-colors"
//           >
//             <Heart
//               className={`w-5 h-5 transition-colors ${isFavorited ? "fill-pink-500 text-pink-500" : "text-slate-400"}`}
//             />
//           </button>
//         </div>

//         {/* Game Info */}
//         <div className="p-3">
//           <h3 className="font-semibold text-slate-100 truncate group-hover:text-purple-400 transition-colors">
//             {game.name}
//           </h3>
//           <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
//             <span className="flex items-center gap-1">
//               <Heart className="w-3 h-3 text-pink-500" />
//               {game?.likes?.toLocaleString()}
//             </span>
//             <span>⭐ {game.manualRating}</span>
//           </div>
//           <div className="text-xs text-slate-500 mt-1">{(game.totalPlayed / 1000).toFixed(0)}K played</div>
//         </div>
//       </div>
//     </Link>
//   )
// }



"use client"

import type { Game } from "@/lib/types"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const imageUrl = game.image
    ? `https://www.atmhtml5games.com${game.image}`
    : "/placeholder.svg"

  return (
    <Link href={`/game/${game.id}`}>
      <div className="group relative bg-slate-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:shadow-purple-500/50">
        {/* Game Image */}
        <div className="relative w-full aspect-square bg-slate-700 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${game.name} - Play Free Online Game`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg"
            }}
          />

          {/* Hover PLAY NOW CTA overlay */}
          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform group-hover:scale-105 transition-transform">
              ▶ PLAY NOW
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorited(!isFavorited)
            }}
            className="absolute top-2 right-2 z-10 bg-slate-900/70 p-2 rounded-full hover:bg-slate-800 transition-colors"
            aria-label={isFavorited ? `Remove ${game.name} from favorites` : `Add ${game.name} to favorites`}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorited ? "fill-pink-500 text-pink-500" : "text-slate-400"
              }`}
            />
          </button>
        </div>

        {/* Game Info */}
        <div className="p-3">
          <h3 className="font-semibold text-slate-100 truncate group-hover:text-purple-400 transition-colors">
            {game.name}
          </h3>
          <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-pink-500" />
              {(game?.likes ?? 0).toLocaleString()}
            </span>
            <span>⭐ {game.manualRating ?? "4.5"}</span>
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {game.totalPlayed ? `${(game.totalPlayed / 1000).toFixed(0)}K played` : "0 played"}
          </div>
        </div>
      </div>
    </Link>
  )
}