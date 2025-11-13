// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

// export default function PrivacyPolicyPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
//       <Header />

//       <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
//         {/* Page Header */}
//         <div className="mb-12">
//           <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
//           <p className="text-slate-400 text-lg">Last updated: November 2024</p>
//         </div>

//         {/* Content Sections */}
//         <div className="space-y-10">
//           {/* Introduction */}
//           <section>
//             <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
//             <p className="text-slate-300 leading-relaxed">
//               PikaShowGames ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
//               we collect, use, disclose, and safeguard your information when you visit our website and use our services.
//             </p>
//           </section>

//           {/* Information We Collect */}
//           <section>
//             <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-purple-400 mb-2">Personal Information</h3>
//                 <ul className="text-slate-300 leading-relaxed space-y-2 ml-4">
//                   <li>• Email address</li>
//                   <li>• Name and username</li>
//                   <li>• Account preferences and settings</li>
//                   <li>• Payment information (processed securely)</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-purple-400 mb-2">Automatically Collected Information</h3>
//                 <ul className="text-slate-300 leading-relaxed space-y-2 ml-4">
//                   <li>• Browser and device information</li>
//                   <li>• IP address and location data</li>
//                   <li>• Cookies and tracking technologies</li>
//                   <li>• Usage patterns and gameplay data</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* How We Use Your Information */}
//           <section>
//             <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
//             <p className="text-slate-300 leading-relaxed mb-4">We use the information we collect to:</p>
//             <ul className="text-slate-300 leading-relaxed space-y-2 ml-4">
//               <li>• Provide, maintain, and improve our services</li>
//               <li>• Process transactions and send related information</li>
//               <li>• Send promotional communications (with your consent)</li>
//               <li>• Prevent fraudulent transactions and enhance security</li>
//               <li>• Comply with legal obligations</li>
//               <li>• Analyze usage patterns to improve user experience</li>
//             </ul>
//           </section>

//           {/* Data Security */}
//           <section>
//             <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
//             <p className="text-slate-300 leading-relaxed">
//               We implement industry-standard security measures to protect your personal information. However, no method
//               of transmission over the internet is 100% secure. While we strive to protect your data, we cannot
//               guarantee absolute security.
//             </p>
//           </section>

//           {/* Your Rights */}
//           <section>
//             <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
//             <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
//             <ul className="text-slate-300 leading-relaxed space-y-2 ml-4">
//               <li>• Access your personal information</li>
//               <li>• Request corrections to inaccurate data</li>
//               <li>• Request deletion of your data (subject to legal requirements)</li>
//               <li>• Opt-out of marketing communications</li>
//               <li>• Withdraw consent at any time</li>
//             </ul>
//           </section>

//           {/* Contact Us */}
//           <section>
//             <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
//             <p className="text-slate-300 leading-relaxed">
//               If you have questions about this Privacy Policy or our privacy practices, please contact us at:
//             </p>
//             <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
//               <p className="text-white font-semibold">PikaShowGames Privacy Team</p>
//               <p className="text-slate-300">Email: privacy@PikaShowGames.com</p>
//               <p className="text-slate-300">Response time: Within 5 business days</p>
//             </div>
//           </section>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }



import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <div className="mb-12 text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-300 text-lg">Your privacy is our priority</p>
            <p className="text-slate-400 text-sm">Last updated: November 2024</p>
          </div>

          {/* Content Sections with Glassmorphism */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-slate-200 leading-relaxed">
                PikaShowGames ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Personal Information
                  </h3>
                  <ul className="text-slate-200 leading-relaxed space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Email address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Name and username</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Account preferences and settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Payment information (processed securely)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Automatically Collected Information
                  </h3>
                  <ul className="text-slate-200 leading-relaxed space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Browser and device information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>IP address and location data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Cookies and tracking technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Usage patterns and gameplay data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-slate-200 leading-relaxed mb-6">We use the information we collect to:</p>
              <ul className="text-slate-200 leading-relaxed space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Send promotional communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Prevent fraudulent transactions and enhance security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Comply with legal obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Analyze usage patterns to improve user experience</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-300/30 rounded-2xl p-8 hover:border-purple-300/50 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">🔐</span>
                Data Security
              </h2>
              <p className="text-slate-200 leading-relaxed">
                We implement industry-standard security measures to protect your personal information. However, no method
                of transmission over the internet is 100% secure. While we strive to protect your data, we cannot
                guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-slate-200 leading-relaxed mb-6">You have the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200 flex items-start gap-2">
                    <span className="text-pink-400 mt-1">→</span>
                    <span>Access your personal information</span>
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200 flex items-start gap-2">
                    <span className="text-pink-400 mt-1">→</span>
                    <span>Request corrections to inaccurate data</span>
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200 flex items-start gap-2">
                    <span className="text-pink-400 mt-1">→</span>
                    <span>Request deletion of your data (subject to legal requirements)</span>
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200 flex items-start gap-2">
                    <span className="text-pink-400 mt-1">→</span>
                    <span>Opt-out of marketing communications</span>
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200 flex items-start gap-2">
                    <span className="text-pink-400 mt-1">→</span>
                    <span>Withdraw consent at any time</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                <p className="text-white font-semibold text-lg">PikaShowGames Privacy Team</p>
                <p className="text-slate-300 flex items-center gap-2">
                  <span className="text-purple-400">📧</span>
                  Email: privacy@PikaShowGames.com
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <span className="text-purple-400">⏱️</span>
                  Response time: Within 5 business days
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>


  )
}
