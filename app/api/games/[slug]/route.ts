import { GameMonetizeError, getGameById, getGames } from "@/lib/gamemonetize"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const game = await getGameById(slug)

    if (!game) {
      return Response.json({ error: "Game not found" }, { status: 404 })
    }

    let relatedGames = []
    try {
      const related = await getGames(1, 10)
      relatedGames = related.games.filter((relatedGame) => relatedGame.id !== game.id).slice(0, 5)
    } catch (relatedError) {
      console.warn("Related GameMonetize games unavailable:", relatedError)
    }

    return Response.json({ ...game, relatedGames })
  } catch (error) {
    console.error("GameMonetize details proxy failed:", error)
    if (error instanceof GameMonetizeError) {
      return Response.json(
        { error: error.status === 429 ? "Game details are temporarily busy. Please try again shortly." : "Game details are unavailable." },
        { status: error.status === 429 ? 429 : 502, headers: error.retryAfter ? { "Retry-After": error.retryAfter } : undefined },
      )
    }
    return Response.json(
      { error: "Failed to fetch game" },
      { status: 500 }
    )
  }
}