import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Paintbrush as Pinterest } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16">
      {/* Curved top divider */}
      <div className="relative pt-8 overflow-hidden">
        <svg className="w-full h-24 fill-blue-600" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-blue-600 text-white px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white">
                  <img src="/Logo.png" alt="Logo" />
                </div>
                <h3 className="text-2xl font-bold">PikaShowGames</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                PikaShowGames is your ultimate gaming destination. Play thousands of free online games instantly without
                download or registration on desktop, mobile, tablets, and iPads.
              </p>
            </div>

            {/* About section */}
            <div>
              <h4 className="text-lg font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-blue-100 hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Games section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Games</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/categories?category=sports" className="text-blue-100 hover:text-white transition-colors">
                    Sports Games
                  </Link>
                </li>
                <li>
                  <Link href="/categories?category=action" className="text-blue-100 hover:text-white transition-colors">
                    Action Games
                  </Link>
                </li>
                <li>
                  <Link href="/categories?category=puzzle" className="text-blue-100 hover:text-white transition-colors">
                    Puzzle Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories?category=adventure"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Adventure Games
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="text-blue-100 hover:text-white transition-colors">
                    Trending Games
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Pinterest className="w-5 h-5" />
                  <span>Pinterest</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-500 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
              <p>Copyright © PikaShowGames 2025</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms and conditions
                </Link>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
