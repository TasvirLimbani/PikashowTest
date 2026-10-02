import { GAME_CATEGORIES } from "@/lib/game-categories"

export async function GET() {
  return Response.json(GAME_CATEGORIES)
}
