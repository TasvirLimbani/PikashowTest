export interface Category {
  id: number
  name: string
  slug: string
}
export interface CategoryGame {
  _id: string
  name: string
  slug: string
  image: string
  totalPlayed: number
}

export interface Game {
  id: string
  title: string
  description: string
  instructions: string
  url: string
  category: string
  tags: string
  thumb: string
  width: number
  height: number

  // Compatibility fields used by existing profile and presentation components.
  name: string
  slug: string
  image: string
  likes: number
  manualRating: number
  totalPlayed: number
  ownGame: boolean
  addDate: string
  script: string
}

export type GameDetails = Game & {
  releaseDate?: string
}

export interface UserProfile {
  uid: string
  email: string
  displayName?: string
  coins: number
  totalPlayed: number
  totalTimeSpent?: number
  createdAt: Date
  recentlyPlayed: RecentlyPlayedGame[]
  favoriteGames: string[]
}

export interface RecentlyPlayedGame {
  gameSlug: string
  gameName: string
  playedAt: Date
  timeSpent: number
}
