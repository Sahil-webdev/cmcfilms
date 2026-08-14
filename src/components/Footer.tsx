import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Youtube, Facebook, Linkedin, Mail, Phone, MapPin, Camera } from "lucide-react";
import { studio } from "@/lib/site-data";
import cameraEmblem from "@/assets/camera_emblem.jpg";

export function Footer() {
  return (
    <div className="relative bg-[#FAF8F5] pt-12 md:pt-16">
      {/* ── Main Horizontal Footer Section (Large Rounded Top Corners Only) ── */}
      <footer className="relative rounded-t-[36px] md:rounded-t-[56px] lg:rounded-t-[64px] rounded-b-none bg-[#0E1013] text-[#FAF8F3] pt-20 md:pt-24 pb-8 border-t border-emerald-500/20 shadow-[0_-20px_50px_rgba(0,0,0,0.4)] overflow-visible">
        
        {/* ── Subtle Abstract Topographic / Contour Line Texture ── */}
        <div className="pointer-events-none absolute inset-0 rounded-t-[36px] md:rounded-t-[56px] lg:rounded-t-[64px] bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.14),transparent_65%)]" />
        <div className="circuit-background pointer-events-none absolute inset-0 opacity-10 rounded-t-[36px] md:rounded-t-[56px] lg:rounded-t-[64px]" />

        {/* ── CENTER CREATIVE HERO EMBLEM (Real Cinema Camera PNG, Half Outside / Half Inside Top Edge) ── */}
        <div className="absolute -top-14 md:-top-20 left-1/2 -translate-x-1/2 z-30">
          <div className="group relative h-28 w-28 md:h-40 md:w-40 rounded-full border-4 border-[#0E1013] bg-[#14171C] shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden p-1 flex items-center justify-center transition-transform duration-500 hover:scale-105">
            {/* Emerald Glowing Ring Highlight */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/30 group-hover:border-emerald-400/60 transition-colors" />
            
            {/* Camera Asset PNG */}
            <img
              src={cameraEmblem}
              alt="CMC Films Cinema Camera emblem"
              className="h-full w-full object-cover rounded-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* ── Main 3-Column Footer Layout ── */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center pb-12 border-b border-white/10">
            
            {/* ── LEFT SECTION: Contact Info & Social Icons ── */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-5 text-left order-2 lg:order-1">
              <div>
                <span className="label-xs text-emerald-400 font-mono tracking-[0.25em] text-[11px] uppercase block mb-3">
                  Contact
                </span>
                <h3 className="font-display text-2xl text-[#FAF8F3] font-bold tracking-wide">
                  CMC FILMS
                </h3>
              </div>

              <div className="space-y-2 text-sm text-white/70 font-sans font-light leading-relaxed">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rajasthan, India &amp; Worldwide</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{studio.phone}</span>
                </p>
                <a
                  href={`mailto:${studio.email}`}
                  className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="underline underline-offset-4">{studio.email}</span>
                </a>
              </div>

              {/* Social Icons Strip (Instagram, YouTube, Facebook, LinkedIn) */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={studio.socials[0]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0E1013] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={studio.socials[1]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0E1013] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0E1013] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0E1013] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ── CENTER SECTION: Brand Name, Tagline & Dual Pill CTAs ── */}
            <div className="lg:col-span-4 text-center flex flex-col items-center justify-center space-y-4 pt-4 lg:pt-0 order-1 lg:order-2">
              <Link
                to="/"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.18em] text-[#FAF8F3] uppercase block hover:opacity-90 transition-opacity"
              >
                CMC FILMS
              </Link>
              
              <p className="font-editorial italic text-lg sm:text-xl text-emerald-400 font-normal tracking-wide">
                Premium Wedding Storytelling
              </p>

              {/* Dual Rounded Pill CTA Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#0E1013] font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all duration-300 active:scale-95"
                >
                  <span>Book Your Shoot</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0E1013] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FAF8F3] font-medium text-sm transition-all duration-300 active:scale-95"
                >
                  <span>View Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FAF8F3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT SECTION: Quick Links & Specialties ── */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-left lg:text-right order-3">
              <div>
                <span className="label-xs text-emerald-400 font-mono tracking-[0.25em] text-[11px] uppercase block mb-3">
                  Quick Links
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80 font-sans font-light">
                <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                <Link to="/portfolio" className="hover:text-emerald-400 transition-colors">Destination Weddings</Link>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                <Link to="/portfolio" className="hover:text-emerald-400 transition-colors">Pre-Wedding Shoots</Link>
                <Link to="/films" className="hover:text-emerald-400 transition-colors">Wedding Films</Link>
                <Link to="/portfolio" className="hover:text-emerald-400 transition-colors">Bridal Stories</Link>
                <Link to="/portfolio" className="hover:text-emerald-400 transition-colors">Photography</Link>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
              </div>
            </div>

          </div>

          {/* ── BOTTOM BAR: Copyright & Legal ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
            <p>© 2025 CMC FILMS. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
