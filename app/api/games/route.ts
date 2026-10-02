// const GAMES_API = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/game.json"
// const CATEGORIES_API = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/category.json"

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const page = Number.parseInt(searchParams.get("page") || "0")
//     const limit = Number.parseInt(searchParams.get("limit") || "20")
//     const category = searchParams.get("category")

//     const gamesRes = await fetch(GAMES_API)
//     const gamesData = await gamesRes.json()
//     let games = gamesData.games || []

//     if (category && category !== "all") {
//       games = games.filter((game: any) => game.slug?.includes(category.toLowerCase()))
//     }

//     const start = page * limit
//     const end = start + limit
//     const paginatedGames = games.slice(start, end)

//     return Response.json({
//       games: paginatedGames,
//       total: games.length,
//       page,
//       limit,
//       hasMore: end < games.length,
//     })
//   } catch (error) {
//     return Response.json({ error: "Failed to fetch games" }, { status: 500 })
//   }
// }


import { GameMonetizeError, getGames, getGamesByCategory, searchGames } from "@/lib/gamemonetize"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1"))
    const limit = Math.max(1, Number.parseInt(searchParams.get("limit") || searchParams.get("num") || "50"))
    const category = Number.parseInt(searchParams.get("category") || "")
    const name = searchParams.get("name") || searchParams.get("q") || ""

    const result = name.trim()
      ? await searchGames(name, page, limit, Number.isNaN(category) ? undefined : category)
      : Number.isNaN(category) || category === 0
        ? await getGames(page, limit)
        : await getGamesByCategory(category, page, limit)

    return Response.json({
      ...result,
    })
  } catch (error) {
    console.error("GameMonetize games proxy failed:", error)
    if (error instanceof GameMonetizeError) {
      return Response.json(
        { error: error.status === 429 ? "The game feed is temporarily busy. Please try again shortly." : "Game feed is unavailable." },
        { status: error.status === 429 ? 429 : 502, headers: error.retryAfter ? { "Retry-After": error.retryAfter } : undefined },
      )
    }
    return Response.json(
      { error: "Failed to fetch games" },
      { status: 500 }
    )
  }
}