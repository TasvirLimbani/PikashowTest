"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About PikaShowGames</h1>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Welcome to PikaShowGames, your ultimate destination for free online gaming. We believe in making gaming
              accessible to everyone, everywhere, without barriers or limitations.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p>
                Our mission is to provide a platform where gamers of all ages can discover, play, and enjoy thousands of
                free online games without any downloads, registrations, or hidden fees. We're committed to bringing
                quality entertainment directly to your browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Why Choose PikaShowGames?</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Thousands of free games in various categories</li>
                <li>No downloads or installations required</li>
                <li>Play on any device - desktop, mobile, or tablet</li>
                <li>Regular updates with new games</li>
                <li>Track your progress with player stats and achievements</li>
                <li>Safe and secure gaming environment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Games</h2>
              <p>
                We curate a diverse collection of games including action, adventure, puzzle, sports, strategy, and more.
                Whether you're looking for a quick casual game or an immersive experience, PikaShowGames has something for
                everyone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Community</h2>
              <p>
                Join our growing community of gamers from around the world. Compete on leaderboards, unlock
                achievements, and share your gaming experiences with fellow players. PikaShowGames is more than just games -
                it's a community where gamers thrive.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
