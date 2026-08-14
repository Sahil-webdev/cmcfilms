import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube, MessageCircle, Mail, MapPin, Sparkles, Award } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";

// Custom Vector SVG 3D Cinema Camera Emblem (100% Crisp Vector, 100% Transparent Background)
function CameraEmblem() {
  return (
    <div className="relative group cursor-pointer">
      {/* Soft Emerald Glow Aura behind emblem */}
      <div className="absolute inset-0 rounded-full bg-[#10B981]/25 blur-2xl group-hover:bg-[#10B981]/40 transition-all duration-500" />
      
      {/* 3D Vector Camera Emblem Container */}
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-b from-[#1E2229] via-[#14171C] to-[#0A0B0E] border-2 border-white/20 p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-[#10B981]/60">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Gear Dial Ring */}
          <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Camera Body Silhouette */}
          <rect x="20" y="34" width="60" height="42" rx="7" fill="url(#cameraBodyGrad)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          {/* Viewfinder Top Bump */}
          <path d="M38 34 L43 25 L57 25 L62 34 Z" fill="#252A33" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          {/* Flash & Red Recording Dot */}
          <circle cx="28" cy="42" r="2.5" fill="#EF4444" />
          <rect x="68" y="28" width="6" height="3" rx="1" fill="#E5CA92" />

          {/* Outer Chrome Lens Ring */}
          <circle cx="50" cy="55" r="21" fill="#0E1013" stroke="url(#chromeGrad)" strokeWidth="2.5" />
          
          {/* Inner Emerald Lens Glass */}
          <circle cx="50" cy="55" r="15" fill="url(#lensGlassGrad)" stroke="#10B981" strokeWidth="1" />
          
          {/* Aperture Iris Blades */}
          <circle cx="50" cy="55" r="8" fill="#0A0C0E" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
          
          {/* Lens Glass Reflection Highlights */}
          <ellipse cx="45" cy="50" rx="4" ry="2" fill="white" opacity="0.6" transform="rotate(-30 45 50)" />
          <circle cx="54" cy="60" r="1.5" fill="#10B981" opacity="0.8" />

          {/* Gradients */}
          <defs>
            <linearGradient id="cameraBodyGrad" x1="20" y1="34" x2="80" y2="76" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A2F38" />
              <stop offset="0.5" stopColor="#181B21" />
              <stop offset="1" stopColor="#0F1115" />
            </linearGradient>
            <linearGradient id="chromeGrad" x1="29" y1="34" x2="71" y2="76" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2E8F0" />
              <stop offset="0.5" stopColor="#64748B" />
              <stop offset="1" stopColor="#334155" />
            </linearGradient>

            <radialGradient id="lensGlassGrad" cx="50" cy="55" r="15" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="0.6" stopColor="#042F2E" />
              <stop offset="1" stopColor="#021718" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#090A0C] text-[#FAF8F3] px-3 md:px-8 pt-16 pb-8 overflow-hidden">
      {/* ── Main Floating Rounded Footer Panel ── */}
      <div className="relative mx-auto max-w-[1550px] rounded-[32px] md:rounded-[48px] bg-[#121418] border border-white/10 p-8 md:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Ambient Radial Contour Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" />
        <div className="circuit-background pointer-events-none absolute inset-0 opacity-10" />

        {/* ── Top Center Camera Emblem (Vector SVG 100% Transparent Background) ── */}
        <div className="flex justify-center -mt-16 md:-mt-22 mb-6 relative z-20">
          <CameraEmblem />
        </div>

        {/* ── Centered Header, Title & Action Pills ── */}
        <div className="relative z-10 text-center max-w-2xl mx-auto pb-12 border-b border-white/10">
          <span className="label-xs text-[#10B981] font-mono tracking-[0.25em] text-[10px] uppercase block mb-2">
            CMC FILMS • LUXURY WEDDING CINEMA
          </span>
          
          <Link to="/" className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-normal block hover:opacity-90 transition-opacity">
            CMC Films
          </Link>
          
          <p className="font-editorial italic text-lg sm:text-xl md:text-2xl text-white/80 mt-2 font-normal">
            Stories for love • Told forever
          </p>

          {/* Dual Action Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#10B981] text-[#090A0C] font-semibold text-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#10B981]/20 active:scale-[0.98]"
            >
              <span>Book Experience</span>
              <div className="h-6 w-6 rounded-full bg-[#090A0C]/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#090A0C]" />
              </div>
            </Link>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/25 transition-all duration-300 text-sm font-medium active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
              <div className="h-6 w-6 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </div>
            </a>
          </div>
        </div>

        {/* ── 3-Column Content Grid ── */}
        <div className="relative z-10 pt-12 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end justify-between">
          
          {/* Left Column: Contact & Address */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-8">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-white font-medium mb-3">
                  Contact Studio
                </h3>
                <div className="text-sm text-white/70 font-sans space-y-1 font-light leading-relaxed">
                  <p>Rajasthan, India &amp; Worldwide</p>
                  <p>{studio.phone}</p>
                  <a href={`mailto:${studio.email}`} className="text-white hover:text-[#10B981] transition-colors underline underline-offset-4 block mt-1">
                    {studio.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2 pt-1 sm:pt-0">
                <a
                  href={studio.socials[0]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-[#10B981] font-display transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={studio.socials[1]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-[#10B981] font-display transition-colors"
                >
                  <span>YouTube</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-[#10B981] font-display transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Studio Score Badge */}
            <div className="mt-8 pt-4 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>4.9 Studio Score</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/45 font-sans">
                <Award className="w-3.5 h-3.5 text-[#10B981]" />
                <span>WedMeGood &amp; Fearless Photographers Winner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Navigation */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-white font-medium mb-4">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm text-white/80 font-sans font-light">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="hover:text-[#10B981] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-[#10B981] transition-colors" />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Right Legal Badge */}
            <div className="mt-8 pt-4 flex items-center gap-3">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#FAF8F3] text-[#090A0C] text-xs font-mono shadow-md">
                <a href="#" className="hover:underline">Cookies policy</a>
                <span className="text-[#090A0C]/30">•</span>
                <a href="#" className="hover:underline">Privacy policy</a>
                <span className="text-[#090A0C]/30">•</span>
                <span className="font-semibold">©{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
