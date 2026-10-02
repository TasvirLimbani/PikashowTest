"use client"

import type React from "react"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameGrid } from "@/components/game-grid"
import { ArrowRight, Flame, Gamepad2, Play } from "lucide-react"
import { GAME_CATEGORIES } from "@/lib/game-categories"

export const dynamic = "force-dynamic"

function HomeInner() {
  return (
    <>
      <nav className="sticky top-[118px] z-40 border-b border-white/10 bg-[#10131f]/95 px-3 shadow-lg shadow-black/10 backdrop-blur-xl md:top-[76px] md:px-5">
        <div className="mx-auto flex max-w-[1680px] items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          {GAME_CATEGORIES.map((category) => (
            <SidebarLink
              key={`${category.id}-${category.name}`}
              href={`/?category=${category.id}`}
              icon={<Gamepad2 />}
              label={category.name}
            />
          ))}
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[1680px] min-w-0 flex-1 px-3 py-5 sm:px-5 md:py-8">
        <section className="relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-[#181c2b] shadow-2xl shadow-black/20 sm:min-h-[350px] md:min-h-[360px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(255,105,74,0.2),transparent_34%),linear-gradient(90deg,#181c2b_12%,rgba(24,28,43,0.92)_42%,rgba(24,28,43,0.12)_100%)]" />
          <div className="absolute inset-y-0 right-0 w-full bg-[url('/Blog_1.jpg')] bg-cover bg-[center_right] opacity-70 sm:w-[68%] md:w-[58%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c2b] via-transparent to-transparent md:bg-gradient-to-r" />
          <div className="relative z-10 flex min-h-[330px] max-w-[660px] flex-col justify-end p-6 pb-8 sm:min-h-[350px] sm:p-9 sm:pb-10 md:min-h-[360px] md:justify-center md:p-14">
            <div className="mb-4 flex flex-wrap items-center gap-2"><span className="rounded-full bg-[#ff694a] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#17131b]">Featured this week</span><span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-[#d1d1df]">Arcade</span></div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8be28b]">Your next high score</p>
            <h1 className="max-w-[520px] text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl">Subway Surfers Bali</h1>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#b3bacb]">Make a run through the island, dodge the trains, and see how far you can get.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4"><a href="#games-grid" className="inline-flex items-center gap-2 rounded-lg bg-[#ff694a] px-5 py-3 text-sm font-bold text-[#17131b] shadow-lg shadow-[#ff694a]/20 transition hover:bg-[#ff8063]"><Play className="h-4 w-4 fill-current" /> Play Now</a><span className="text-sm font-semibold text-white">⭐ 3.7 <span className="font-normal text-[#b8b6d2]">(331,537 plays)</span></span></div>
          </div>
        </section>
        <HomeRail title="Popular Games" icon={<Flame />} category="all" />
        <HomeRail title="Arcade Games" icon={<span>✨</span>} category="5" />
        <HomeRail title="Multiplayer Games" icon={<Gamepad2 />} category="12" />
      </main>
    </>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background">

      <Header />
      <Suspense fallback={<div className="text-white p-8 text-center">Loading...</div>}>
        <HomeInner />
      </Suspense>
      <Footer />
    </div>
  )
}

function SidebarLink({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return <a href={href} className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${active ? "bg-[#20236a] text-[#62a4ff]" : "text-[#a5a5c8] hover:bg-white/10 hover:text-white"}`}><span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>{label}</a>
}

function HomeRail({ title, icon, category }: { title: string; icon: React.ReactNode; category: string }) {
  return <section id={title === "Popular Games" ? "games-grid" : undefined} className="mt-10 md:mt-12"><div className="mb-4 flex items-end justify-between border-b border-white/10 pb-3"><h2 className="flex items-center gap-2 text-xl font-black tracking-tight text-white"><span className="text-[#ff8063] [&>svg]:h-5 [&>svg]:w-5">{icon}</span>{title}</h2><a href={`/trending?category=${category}`} className="inline-flex items-center gap-1 text-xs font-bold text-[#8be28b] transition hover:text-white">See all <ArrowRight className="h-3.5 w-3.5" /></a></div><GameGrid category={category} /></section>
}

