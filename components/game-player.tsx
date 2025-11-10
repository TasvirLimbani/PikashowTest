"use client"

import { useState } from "react"
import { Play, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GamePlayerProps {
  gameName: string
  gameSlug: string
  gameUrl: string
  gameImage: string
}

export function GamePlayer({ gameName, gameSlug, gameUrl , gameImage}: GamePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const gameEmbedUrl = (gameUrl || "")
    .trim()
    .replace(/\r\n/g, "")
    .replace(/\r/g, "")
    .replace(/\n/g, "")
    .replace(/\t/g, "")

  console.log("[v0] GamePlayer props:", {
    gameName,
    gameSlug,
    rawUrl: gameUrl,
    urlLength: gameUrl?.length || 0,
    processedUrl: gameEmbedUrl,
    processedLength: gameEmbedUrl.length,
    isValidUrl: gameEmbedUrl.startsWith("http"),
  })

  if (!gameEmbedUrl || !gameEmbedUrl.startsWith("http")) {
    return (
      <div className="relative w-full bg-slate-900 rounded-lg overflow-hidden border border-purple-500/20 aspect-video flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Game script not available</p>
          <p className="text-sm text-slate-500">This game will be available soon!</p>
          {gameUrl && <p className="text-xs text-slate-600 mt-4 break-all">Received: {gameUrl.substring(0, 100)}...</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full bg-slate-900 rounded-lg overflow-hidden border border-purple-500/20">
      {!isPlaying ? (
        <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <img
            // src={`/.jpg?key=wjcua&height=400&width=600&query=${gameName} game`}
            src={`https://slides.atmegame.com/slide/${gameImage}_slide.jpg`}
            alt={gameName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <button
            onClick={() => {
              console.log("[v0] Play button clicked, loading iframe with URL:", gameEmbedUrl)
              setIsPlaying(true)
            }}
            className="absolute flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all transform hover:scale-105"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Play Game</span>
          </button>
        </div>
      ) : (
        <div className={`relative ${isFullscreen ? "fixed inset-0 z-50" : "w-full aspect-video"}`}>
          <iframe
            key={gameEmbedUrl}
            src={gameEmbedUrl}
            title={gameName}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; camera; microphone; accelerometer; gyroscope"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation"
            onLoad={() => console.log("[v0] Game iframe loaded successfully from:", gameEmbedUrl)}
            onError={() => console.error("[v0] Game iframe failed to load from:", gameEmbedUrl)}
          />
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="bg-slate-900/80 hover:bg-slate-800 p-2 rounded-lg"
            >
              <Maximize2 className="w-5 h-5" />
            </Button>
            <Button onClick={() => setIsPlaying(false)} className="bg-slate-900/80 hover:bg-slate-800 p-2 rounded-lg">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
