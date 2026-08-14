import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Youtube, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { studio } from "@/lib/site-data";
import canonCamera from "@/assets/canon_camera.png";

// Large organic, asymmetrical, flowing contour line SVG pattern spanning entire footer background
function TopographicContourBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full opacity-35"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
    >
      <path
        d="M-100,80 C150,20 350,180 600,100 C850,20 1100,160 1300,60 C1450,-10 1550,80 1600,120"
        fill="none"
        stroke="#454A54"
        strokeWidth="1.2"
        strokeDasharray="6 3"
      />
      <path
        d="M-50,200 C200,120 400,280 700,190 C1000,100 1200,290 1500,180"
        fill="none"
        stroke="#3A3F47"
        strokeWidth="1.2"
      />
      <path
        d="M-80,320 C100,240 320,400 580,310 C840,220 1080,410 1380,300 C1520,250 1600,340 1650,380"
        fill="none"
        stroke="#343840"
        strokeWidth="1.2"
      />
      <path
        d="M-120,440 C80,380 280,510 520,430 C760,350 980,530 1260,420 C1420,360 1540,480 1600,520"
        fill="none"
        stroke="#3A3F47"
        strokeWidth="1.2"
      />
      <path
        d="M50,40 C300,140 500,-20 800,80 C1100,180 1300,10 1500,90"
        fill="none"
        stroke="#343840"
        strokeWidth="1.2"
      />
      <path
        d="M-60,550 C180,470 380,590 680,500 C980,410 1180,580 1480,490"
        fill="none"
        stroke="#2E323A"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <div className="relative bg-[#FAF8F5] pt-16 md:pt-24">
      {/* ── Main Horizontal Footer Section (Large Rounded Top Corners Only) ── */}
      <footer className="relative rounded-t-[44px] md:rounded-t-[64px] rounded-b-none bg-[#0C0D10] text-[#FAF8F3] pt-24 sm:pt-28 md:pt-36 pb-8 border-t border-emerald-500/20 shadow-[0_-25px_60px_rgba(0,0,0,0.5)] overflow-visible">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-t-[44px] md:rounded-t-[64px] bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_65%)]" />
        
        {/* Large Asymmetrical Organic Contour Line Pattern */}
        <TopographicContourBackground />

        {/* ── USER CANON CAMERA IMAGE ON TOP BORDER (CENTER ALIGNED, HIGH Z-INDEX z-[40]) ── */}
        <div className="absolute -top-16 sm:-top-20 md:-top-24 lg:-top-28 left-1/2 -translate-x-1/2 z-[40] pointer-events-none flex justify-center items-center w-full">
          <img
            src={canonCamera}
            alt="Canon Cinema Camera Emblem"
            className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
          />
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
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0C0D10] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={studio.socials[1]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0C0D10] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0C0D10] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0C0D10] text-white flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ── CENTER SECTION: Brand Name, Tagline & Dual Pill CTAs ── */}
            <div className="lg:col-span-4 text-center flex flex-col items-center justify-center space-y-4 pt-6 sm:pt-8 lg:pt-0 order-1 lg:order-2">
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
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#0C0D10] font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all duration-300 active:scale-95"
                >
                  <span>Book Your Shoot</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0C0D10] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
