import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Youtube, Calendar, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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
            ? "bg-white/15 border-white/25 text-white backdrop-blur-xl shadow-lg"
            : scrolled
              ? "bg-ivory/90 border-espresso/15 text-espresso shadow-md backdrop-blur-md"
              : "bg-black/30 border-white/20 text-white backdrop-blur-md drop-shadow-md",
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
          "fixed inset-0 z-[80] bg-black/60 backdrop-blur-md transition-opacity duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      />

      {/* 2. Redesigned Ultra-Glassmorphism Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[85] w-[88%] max-w-[380px] bg-[#12100E]/80 backdrop-blur-3xl border-l border-white/15 text-ivory shadow-[-25px_0_60px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col justify-between p-6 overflow-y-auto",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Ambient Glass Glow Circles in Drawer Background */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E5CA92]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 -left-20 h-56 w-56 rounded-full bg-[#015287]/20 blur-3xl" />

        {/* Top Header of Sidebar */}
        <div className="relative z-10 pt-2 pb-6 border-b border-white/10 flex items-center justify-between pr-14">
          <div>
            <span className="font-display text-xl tracking-[0.25em] text-white font-light">CMC FILMS</span>
            <p className="label-xs text-[#E5CA92] text-[9px] uppercase tracking-widest mt-0.5 flex items-center gap-1.5 font-mono">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Visual Storytelling</span>
            </p>
          </div>
        </div>

        {/* Navigation Glass Cards */}
        <div className="relative z-10 my-auto py-6 flex flex-col gap-2.5">
          <span className="label-xs text-white/50 uppercase tracking-[0.2em] px-2 text-[10px] mb-1 font-mono">
            Directory
          </span>
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group relative flex items-center justify-between px-4 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-[#E5CA92]/40 backdrop-blur-xl transition-all duration-300"
              activeProps={{
                className: "bg-white/[0.12] border-[#E5CA92]/50 shadow-[0_0_20px_rgba(229,202,146,0.15)]",
              }}
              style={{
                transitionDelay: `${open ? 60 + i * 35 : 0}ms`,
              }}
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-[11px] text-[#E5CA92]/80 tracking-wider">
                  0{i + 1}
                </span>
                <span className="font-display text-2xl tracking-wide text-white group-hover:text-[#E5CA92] transition-colors font-light">
                  {l.label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}

          {/* Book Experience Luxury Button */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-gradient-to-r from-[#E5CA92] to-[#DFC184] text-[#27231F] font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E5CA92]/20 active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Experience</span>
          </Link>
        </div>

        {/* Bottom Social & Studio Info */}
        <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col gap-3.5">
          <div className="grid grid-cols-3 gap-2">
            <a
              href={studio.socials[0]?.href}
              aria-label="Instagram"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E5CA92]/40 hover:bg-white/[0.1] text-white/80 hover:text-[#E5CA92] backdrop-blur-md transition-all text-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={studio.socials[1]?.href}
              aria-label="YouTube"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E5CA92]/40 hover:bg-white/[0.1] text-white/80 hover:text-[#E5CA92] backdrop-blur-md transition-all text-xs"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919999999999"
              aria-label="WhatsApp"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E5CA92]/40 hover:bg-white/[0.1] text-white/80 hover:text-[#E5CA92] backdrop-blur-md transition-all text-xs"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center pt-1">
            <p className="label-xs text-white/40 text-[10px] font-mono">{studio.email}</p>
            <p className="label-xs text-[#E5CA92]/80 text-[10px] mt-0.5">Rajasthan, India &amp; Worldwide</p>
          </div>
        </div>
      </aside>
    </>
  );
}
