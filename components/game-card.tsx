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
import { Heart, Star } from "lucide-react"
import { useState } from "react"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const imageUrl = game.thumb || game.image
    ? (game.thumb || game.image).startsWith("http")
      ? game.thumb || game.image
      : `https://www.atmhtml5games.com${game.thumb || game.image}`
    : "/placeholder.svg"

  return (
    <Link href={`/game/${game.id}`} className="block w-44 min-w-44 snap-start sm:w-[190px] sm:min-w-[190px] md:w-52 md:min-w-52">
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#181c2b] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#ff8063]/60 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-[#242838]">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${game.title || game.name} - Play Free Online Game`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg"
            }}
          />

          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorited(!isFavorited)
            }}
            className="absolute right-2 top-2 z-10 rounded-full border border-white/15 bg-background/75 p-2 text-white/70 shadow-sm backdrop-blur transition hover:bg-primary hover:text-[#17131b]"
            aria-label={isFavorited ? `Remove ${game.title || game.name} from favorites` : `Add ${game.title || game.name} to favorites`}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${isFavorited ? "fill-current text-[#ff8063]" : ""
                }`}
            />
          </button>
        </div>

        <div className="p-3">
          <h3 className="truncate text-sm font-bold text-white transition-colors group-hover:text-[#ff8063]">
            {game.title || game.name}
          </h3>
          <div className="mt-2 flex items-center justify-between text-[11px] text-[#9da4b9]">
            <span className="flex items-center gap-1 text-[#ffca63]">
              <Star className="h-3 w-3 fill-current" />
              {game.manualRating ?? "4.5"}
            </span>
            <span>{game.totalPlayed ? `${(game.totalPlayed / 1000).toFixed(0)}K plays` : "New game"}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}