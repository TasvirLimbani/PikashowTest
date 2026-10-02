"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { LogOut, Menu, UserCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const { user } = useAuth()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    await signOut(auth)
    setIsOpen(false)
    router.push("/login")
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-background shadow-2xl shadow-black/30 md:hidden">
          <div className="space-y-2 px-4 py-4">
            <div className="space-y-2">
              {user ? (
                <>
                  <Link href="/profile" onClick={() => setIsOpen(false)} className="block">
                    <Button className="w-full justify-start gap-2 border-white/10 bg-white/5 text-sm text-white hover:border-white/20 hover:bg-white/10">
                      <UserCircle className="h-4 w-4" />
                      Profile
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    className="w-full justify-start gap-2 bg-primary text-sm text-[#17131b] hover:bg-[#ff8063]"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block">
                    <Button variant="outline" className="w-full justify-start border-white/10 bg-white/5 text-sm text-white hover:border-white/20 hover:bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)} className="block">
                    <Button className="w-full justify-start bg-primary text-sm text-[#17131b] hover:bg-[#ff8063]">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
