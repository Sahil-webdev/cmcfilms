import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Youtube, Calendar, ArrowRight, MessageCircle, Sparkles, Mail, MapPin, PhoneCall } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";
import { cn } from "@/lib/utils";

// Subtle descriptors for each menu item to give high-end editorial feel
const linkSubtitles: Record<string, string> = {
  "/": "The Beginning & Experience",
  "/about": "Philosophy & Cinematic Vision",
  "/portfolio": "Curated Visual Stories",
  "/films": "4K Cinematic Wedding Films",
  "/contact": "Check Availability & Reserve",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Dynamic Navbar (Desktop is untouched & full-width / rounded on scroll) ── */}
      <header
        className={cn(
          "fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "top-3 md:top-4 inset-x-3 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[94%] max-w-[1400px] h-16 md:h-18 rounded-full border border-espresso/15 bg-ivory/92 text-espresso backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
            : "top-0 inset-x-0 h-20 md:h-24 rounded-none border-b border-transparent bg-gradient-to-b from-black/70 via-black/20 to-transparent text-white",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-full items-center justify-between transition-all duration-500",
            scrolled ? "px-4 md:px-8 max-w-full" : "px-5 md:px-10 max-w-[1600px]",
          )}
        >
          {/* Left Navigation (Desktop) */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "label-xs tracking-wider transition-all duration-300",
                  scrolled
                    ? "text-espresso/85 hover:text-espresso hover:opacity-100"
                    : "text-white/90 hover:text-gold hover:opacity-100 drop-shadow-sm",
                )}
                activeProps={{ className: "opacity-100 text-gold font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Centered Brand Title */}
          <Link
            to="/"
            className={cn(
              "font-display tracking-[0.28em] font-normal transition-all duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2",
              scrolled
                ? "text-xl md:text-2xl text-espresso hover:opacity-75"
                : "text-2xl md:text-3xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] hover:opacity-85",
            )}
          >
            CMC FILMS
          </Link>

          {/* Right Actions (Desktop Socials & Book CTA) */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={studio.socials[0]?.href}
              aria-label="Instagram"
              className={cn(
                "transition-all duration-300",
                scrolled
                  ? "text-espresso/70 hover:text-espresso"
                  : "text-white/80 hover:text-gold drop-shadow-sm",
              )}
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={studio.socials[1]?.href}
              aria-label="YouTube"
              className={cn(
                "transition-all duration-300",
                scrolled
                  ? "text-espresso/70 hover:text-espresso"
                  : "text-white/80 hover:text-gold drop-shadow-sm",
              )}
            >
              <Youtube className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <Link
              to="/contact"
              className={cn(
                "label-xs border px-5 py-2.5 transition-all duration-300 flex items-center gap-2 rounded-full",
                scrolled
                  ? "border-espresso bg-espresso text-ivory hover:bg-gold hover:border-gold hover:text-cinema shadow-sm"
                  : "border-white/40 bg-white/10 text-white hover:border-white hover:bg-white hover:text-espresso backdrop-blur-md",
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Experience</span>
            </Link>
          </div>

          {/* Mobile Spacer (Keeps header layout balanced) */}
          <div className="w-8 h-8 lg:hidden" />
        </div>
      </header>

      {/* ── Fixed Mobile Animated Hamburger (Stays persistent & visible on top of everything including sidebar) ── */}
      <label
        className={cn(
          "hamburger flex lg:!hidden items-center justify-center fixed top-4 right-4 z-[95] h-11 w-11 rounded-full transition-all duration-300 cursor-pointer select-none border",
          open
            ? "bg-white/20 border-white/30 text-white backdrop-blur-2xl shadow-xl scale-105"
            : scrolled
              ? "bg-ivory/90 border-espresso/15 text-espresso shadow-md backdrop-blur-md"
              : "bg-black/35 border-white/20 text-white backdrop-blur-md drop-shadow-md",
        )}
        aria-label="Toggle navigation menu"
      >
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen(e.target.checked)}
          aria-label="Toggle mobile menu"
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>

      {/* ── Mobile Glassmorphism Sliding Sidebar ── */}
      {/* 1. Backdrop Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[80] bg-black/40 backdrop-blur-[4px] transition-opacity duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      />

      {/* 2. Ultra-Luxury Frosted Glass Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[85] w-[88%] max-w-[390px] bg-black/45 backdrop-blur-3xl border-l border-white/20 text-ivory shadow-[-20px_0_60px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col justify-between p-6 pt-5 overflow-y-auto overflow-x-hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Soft Ambient Glows in Background */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-60 w-60 rounded-full bg-[#E5CA92]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-52 w-52 rounded-full bg-[#015287]/25 blur-3xl" />

        {/* ── Sidebar Top Brand Header ── */}
        <div className="relative z-10 pb-5 border-b border-white/15 flex items-center justify-between pr-14">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#E5CA92]/30 to-white/10 border border-[#E5CA92]/40 flex items-center justify-center shadow-inner">
              <span className="font-display font-bold text-xs text-[#E5CA92] tracking-wider">CMC</span>
            </div>
            <div>
              <span className="font-display text-lg tracking-[0.2em] text-white font-medium block">
                CMC FILMS
              </span>
              <span className="label-xs text-[#E5CA92] text-[9px] uppercase tracking-widest flex items-center gap-1 font-mono">
                <Sparkles className="w-2.5 h-2.5 text-[#E5CA92]" />
                <span>Luxury Wedding Studio</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── Navigation Directory (Luxury Glass Cards) ── */}
        <div className="relative z-10 py-5 flex flex-col gap-2.5 my-auto">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="label-xs text-white/50 uppercase tracking-[0.25em] text-[10px] font-mono">
              Menu Navigation
            </span>
            <span className="label-xs text-[#E5CA92]/80 text-[10px] font-mono">
              {navLinks.length} Destinations
            </span>
          </div>

          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group relative flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] hover:border-[#E5CA92]/50 backdrop-blur-xl transition-all duration-300 shadow-sm"
              activeProps={{
                className: "bg-white/[0.14] border-[#E5CA92]/60 shadow-[0_0_25px_rgba(229,202,146,0.18)]",
              }}
              style={{
                transitionDelay: `${open ? 60 + i * 35 : 0}ms`,
              }}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] text-[#E5CA92] font-medium tracking-wider">
                    0{i + 1}
                  </span>
                  <span className="font-display text-xl tracking-wide text-white group-hover:text-[#E5CA92] transition-colors font-light">
                    {l.label}
                  </span>
                </div>
                <span className="text-[10px] text-white/45 pl-6 font-sans group-hover:text-white/70 transition-colors">
                  {linkSubtitles[l.to] || "Explore"}
                </span>
              </div>
              <div className="h-7 w-7 rounded-full bg-white/5 group-hover:bg-[#E5CA92]/20 flex items-center justify-center transition-all border border-white/10 group-hover:border-[#E5CA92]/40">
                <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#E5CA92] group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}

          {/* ── Book Experience Luxury CTA Pill ── */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#E5CA92] via-[#DFC184] to-[#C9A96E] text-[#27231F] font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:brightness-110 shadow-[0_4px_20px_rgba(229,202,146,0.3)] active:scale-[0.98]"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#27231F]" />
              <span className="font-medium">Book Your Experience</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#27231F]" />
          </Link>
        </div>

        {/* ── Bottom Concierge & Socials Section ── */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col gap-3">
          {/* Quick WhatsApp Concierge Button */}
          <a
            href="https://wa.me/919999999999?text=Hello%20CMC%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20and%20films."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/25 transition-all backdrop-blur-md text-xs font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct WhatsApp Concierge</span>
            </div>
            <MessageCircle className="w-4 h-4 text-emerald-400" />
          </a>

          {/* Social Icons Strip */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={studio.socials[0]?.href}
              aria-label="Instagram"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E5CA92]/40 hover:bg-white/[0.1] text-white/80 hover:text-[#E5CA92] backdrop-blur-md transition-all text-xs"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px]">Instagram</span>
            </a>
            <a
              href={studio.socials[1]?.href}
              aria-label="YouTube"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E5CA92]/40 hover:bg-white/[0.1] text-white/80 hover:text-[#E5CA92] backdrop-blur-md transition-all text-xs"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px]">YouTube</span>
            </a>
          </div>

          {/* Studio Footer */}
          <div className="text-center pt-1 flex items-center justify-between text-white/40 text-[9px] font-mono px-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-[#E5CA92]/70" />
              <span>Rajasthan &amp; Worldwide</span>
            </span>
            <span className="text-[#E5CA92]/75">cmcfilms.com</span>
          </div>
        </div>
      </aside>
    </>
  );
}
