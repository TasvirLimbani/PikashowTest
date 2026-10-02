import { GameMonetizeError, searchGames } from "@/lib/gamemonetize"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("name") || searchParams.get("q") || ""
    const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1"))
    const limit = Math.max(1, Number.parseInt(searchParams.get("limit") || searchParams.get("num") || "20"))
    const categoryValue = Number.parseInt(searchParams.get("category") || "")

    if (!query.trim()) {
      return Response.json({ results: [], total: 0, page, limit, hasMore: false })
    }

    const result = await searchGames(
      query,
      page,
      limit,
      Number.isNaN(categoryValue) ? undefined : categoryValue,
    )

    return Response.json({ results: result.games, ...result })
  } catch (error) {
    console.error("GameMonetize search proxy failed:", error)
    if (error instanceof GameMonetizeError) {
      return Response.json(
        { error: error.status === 429 ? "Search is temporarily busy. Please try again shortly." : "Search is unavailable." },
        { status: error.status === 429 ? 429 : 502, headers: error.retryAfter ? { "Retry-After": error.retryAfter } : undefined },
      )
    }
    return Response.json({ error: "Search failed" }, { status: 500 })
  }
}
