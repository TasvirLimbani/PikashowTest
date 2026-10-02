"use client"

import { useAuth } from "@/hooks/use-auth"
import Link from "next/link"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { SearchBar } from "./search-bar"
import { MobileMenu } from "./mobile-menu"
import { LogOut, UserCircle } from "lucide-react"

interface HeaderProps {
  showSearch?: boolean
}

export function Header({ showSearch = true }: HeaderProps) {
  const { user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push("/login")
    window.location.replace("/")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-3 px-3 sm:px-5 md:h-[76px] md:gap-8">
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary p-1.5 shadow-lg shadow-primary/20 transition-transform group-hover:-rotate-6">
            <img src="/Logo.png" alt="PikaShowGames Official Logo" className="w-full h-full object-contain" />
          </div>
          <span className="whitespace-nowrap text-base font-black tracking-[-0.03em] text-white md:text-lg">
            Pika<span className="text-[#ff8063]">Show</span>
          </span>
        </Link>

        {/* Search Bar - Hidden on mobile, shown on md and up */}
        {showSearch && (
          <div className="hidden flex-1 justify-center md:flex">
            <SearchBar />
          </div>
        )}

        {/* Desktop authentication actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          {user ? (
            <>
              <Link href="/profile" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10">
                <UserCircle className="h-4 w-4" />
                Profile
              </Link>
              <Button onClick={handleLogout} className="flex items-center gap-2 bg-primary text-sm text-[#17131b] hover:bg-[#ff8063]">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className="border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/10">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-primary text-[#17131b] hover:bg-[#ff8063]">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu - Shown only on mobile */}
        <MobileMenu />
      </div>

      {/* Mobile Search Bar - Shown only on mobile */}
      {showSearch && (
        <div className="bg-background px-3 pb-3 pt-1 md:hidden">
          <SearchBar />
        </div>
      )}
    </header>
  )
}
