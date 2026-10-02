import type { Game } from "./types"

const GAME_MONETIZE_URL = "https://gamemonetize.com/feed.php"
const CACHE_TTL_MS = 60_000

const responseCache = new Map<string, { expiresAt: number; result: GameQueryResult }>()
const pendingRequests = new Map<string, Promise<GameQueryResult>>()

export interface GameQuery {
  page?: number
  limit?: number
  category?: number
  name?: string
  id?: string
}

export interface GameQueryResult {
  games: Game[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export class GameMonetizeError extends Error {
  status: number
  retryAfter?: string

  constructor(status: number, retryAfter?: string) {
    super(`GameMonetize request failed with ${status}`)
    this.name = "GameMonetizeError"
    this.status = status
    this.retryAfter = retryAfter
  }
}

interface GameMonetizeGame {
  id?: string | number
  title?: string
  description?: string
  instructions?: string
  url?: string
  category?: string
  tags?: string
  thumb?: string
  width?: string | number
  height?: string | number
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : value == null ? "" : String(value)
}

function normalizeGame(raw: GameMonetizeGame): Game {
  const title = asText(raw.title)
  const id = asText(raw.id)
  const thumb = asText(raw.thumb)
  const url = asText(raw.url)

  return {
    id,
    title,
    description: asText(raw.description),
    instructions: asText(raw.instructions),
    url,
    category: asText(raw.category),
    tags: asText(raw.tags),
    thumb,
    width: Number(raw.width) || 0,
    height: Number(raw.height) || 0,
    name: title,
    slug: id,
    image: thumb,
    likes: 0,
    manualRating: 0,
    totalPlayed: 0,
    ownGame: false,
    addDate: "",
    script: url,
  }
}

function buildParams(query: GameQuery): URLSearchParams {
  const params = new URLSearchParams({ format: "0" })

  if (query.id) {
    params.set("id", query.id)
    return params
  }

  params.set("num", String(query.limit ?? 20))
  params.set("page", String(query.page ?? 1))

  if (query.category != null) params.set("category", String(query.category))
  if (query.name?.trim()) params.set("name", query.name.trim())
  return params
}

async function requestGames(query: GameQuery): Promise<GameQueryResult> {
  const page = query.page ?? 1
  const limit = query.limit ?? 20
  const queryUrl = `${GAME_MONETIZE_URL}?${buildParams(query)}`
  const cached = responseCache.get(queryUrl)

  if (cached && cached.expiresAt > Date.now()) return cached.result
  if (cached) responseCache.delete(queryUrl)

  const pending = pendingRequests.get(queryUrl)
  if (pending) return pending

  const request = fetch(queryUrl, { cache: "no-store" })
    .then(async (response) => {
      if (!response.ok) {
        throw new GameMonetizeError(response.status, response.headers.get("retry-after") || undefined)
      }

      const payload = (await response.json()) as GameMonetizeGame[] | { value?: GameMonetizeGame[]; Count?: number }
      const rawGames = Array.isArray(payload) ? payload : Array.isArray(payload.value) ? payload.value : []
      const games = rawGames.map(normalizeGame)
      const total = Array.isArray(payload) ? games.length : Number(payload.Count) || games.length
      const result = {
        games,
        total,
        page,
        limit,
        hasMore: page * limit < total || games.length === limit,
      }

      responseCache.set(queryUrl, { expiresAt: Date.now() + CACHE_TTL_MS, result })
      return result
    })
    .finally(() => {
      pendingRequests.delete(queryUrl)
    })

  pendingRequests.set(queryUrl, request)
  return request
}

export function getGames(page = 1, limit = 50): Promise<GameQueryResult> {
  return requestGames({ page, limit })
}

export function getGamesByCategory(category: number, page = 1, limit = 20): Promise<GameQueryResult> {
  return requestGames({ category, page, limit })
}

export function searchGames(name: string, page = 1, limit = 20, category?: number): Promise<GameQueryResult> {
  return requestGames({ name, page, limit, category })
}

export async function getGameById(id: string): Promise<Game | null> {
  const result = await requestGames({ id })
  return result.games[0] ?? null
}
