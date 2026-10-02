export interface GameCategory {
  id: number
  name: string
  slug: string
}

export const GAME_CATEGORIES: GameCategory[] = [
  { id: 0, name: "All", slug: "all" },
  { id: 1, name: ".IO", slug: "io" },
  { id: 2, name: "2 Player", slug: "2-player" },
  { id: 3, name: "3D", slug: "3d" },
  { id: 4, name: "Adventure", slug: "adventure" },
  { id: 5, name: "Arcade", slug: "arcade" },
  { id: 6, name: "Bejeweled", slug: "bejeweled" },
  { id: 7, name: "Boys", slug: "boys" },
  { id: 8, name: "Clicker", slug: "clicker" },
  { id: 9, name: "Cooking", slug: "cooking" },
  { id: 10, name: "Girls", slug: "girls" },
  { id: 11, name: "Hypercasual", slug: "hypercasual" },
  { id: 12, name: "Multiplayer", slug: "multiplayer" },
  { id: 13, name: "Puzzle", slug: "puzzle" },
  { id: 14, name: "Racing", slug: "racing" },
  { id: 15, name: "Shooting", slug: "shooting" },
  { id: 16, name: "Soccer", slug: "soccer" },
  { id: 17, name: "Sports", slug: "sports" },
  { id: 18, name: "Stickman", slug: "stickman" },
  { id: 19, name: "Baby Hazel", slug: "baby-hazel" },
  { id: 20, name: "AI", slug: "ai" },
]

export function getCategoryBySlug(slug: string): GameCategory | undefined {
  return GAME_CATEGORIES.find((category) => category.slug === slug)
}
