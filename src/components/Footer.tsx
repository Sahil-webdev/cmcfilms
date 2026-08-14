import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube, MessageCircle, Sparkles, Award } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative bg-[#0A0C0E] text-[#FAF8F3] px-3 md:px-8 pt-16 pb-6 overflow-hidden">
      {/* ── Main Outer Floating Rounded Card (Leeuwarder Style) ── */}
      <div className="relative mx-auto max-w-[1550px] rounded-[32px] md:rounded-[48px] bg-[#151614] border border-white/10 p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Subtle Topographical Contours Background Layer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,202,146,0.12),transparent_70%)]" />
        <div className="circuit-background pointer-events-none absolute inset-0 opacity-15" />

        {/* ── Top Center Emblem Badge ── */}
        <div className="flex justify-center mb-6">
          <div className="h-14 w-14 md:h-16 md:w-16 rounded-[22px] bg-[#E5CA92] text-[#151614] shadow-xl flex items-center justify-center border-4 border-[#151614] transform hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-7 h-7 stroke-[2]" />
          </div>
        </div>

        {/* ── Centered Title, Tagline & Dual Action Pills ── */}
        <div className="relative z-10 text-center max-w-2xl mx-auto pb-14 border-b border-white/10">
          <Link to="/" className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-normal block hover:opacity-90 transition-opacity">
            CMC Films
          </Link>
          <p className="font-editorial italic text-lg sm:text-xl md:text-2xl text-[#E5CA92]/90 mt-2 font-normal">
            Stories for love Told forever
          </p>

          {/* Dual Rounded Action Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5CA92] text-[#151614] font-medium text-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#E5CA92]/20 active:scale-[0.98]"
            >
              <span>Book Experience</span>
              <div className="h-6 w-6 rounded-full bg-[#151614]/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#151614]" />
              </div>
            </Link>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500/20 border border-emerald-400/35 text-emerald-300 hover:bg-emerald-500/30 transition-all duration-300 text-sm font-medium active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
              <div className="h-6 w-6 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </div>
            </a>
          </div>
        </div>

        {/* ── Three Column Content Grid (Contact, Socials & Quick Links) ── */}
        <div className="relative z-10 pt-12 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end justify-between">
          
          {/* Left Column: Contact & Address */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-8">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-white font-medium mb-3">
                  Contact
                </h3>
                <div className="text-sm text-white/70 font-sans space-y-1 font-light leading-relaxed">
                  <p>Rajasthan, India &amp; Worldwide</p>
                  <p>{studio.phone}</p>
                  <a href={`mailto:${studio.email}`} className="text-white hover:text-[#E5CA92] transition-colors underline underline-offset-4 block mt-1">
                    {studio.email}
                  </a>
                </div>
              </div>

              {/* Social Links next to contact */}
              <div className="space-y-2 pt-1 sm:pt-0">
                <a
                  href={studio.socials[0]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-[#E5CA92] font-display transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={studio.socials[1]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-[#E5CA92] font-display transition-colors"
                >
                  <span>YouTube</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-[#E5CA92] font-display transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bottom Left Recognition Badge */}
            <div className="mt-8 pt-4 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>4.9 Studio Score</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/45 font-sans">
                <Award className="w-3.5 h-3.5 text-[#E5CA92]" />
                <span>WedMeGood &amp; Fearless Photographers Winner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links (Snel naar Style) */}
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
                    className="hover:text-[#E5CA92] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-[#E5CA92] transition-colors" />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Right Legal Badge (Leeuwarder Style) */}
            <div className="mt-8 pt-4 flex items-center gap-3">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#FAF8F3] text-[#151614] text-xs font-mono shadow-md">
                <a href="#" className="hover:underline">Cookies policy</a>
                <span className="text-[#151614]/30">•</span>
                <a href="#" className="hover:underline">Privacy policy</a>
                <span className="text-[#151614]/30">•</span>
                <span className="font-semibold">©{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
