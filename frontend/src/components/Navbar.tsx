import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Home,
  BookOpen,
  Film,
  Heart,
  Star,
  Tag,
  Info,
  Calendar,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

const getNavIcon = (label: string) => {
  switch (label) {
    case "Home":
      return Home;
    case "Wedding Stories":
      return BookOpen;
    case "Wedding Films":
      return Film;
    case "Couple Shoot":
      return Heart;
    case "Testimonials":
      return Star;
    case "Packages":
      return Tag;
    case "About":
      return Info;
    default:
      return Sparkles;
  }
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const scrollHomeToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  };

  // Scroll listener for sticky header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll & handle Escape key when sidebar is active
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[70] transition-all duration-500",
          scrolled
            ? "bg-ivory/85 backdrop-blur-md shadow-sm border-b border-espresso/10 py-3"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5",
        )}
      >
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          <Link
            to="/"
            resetScroll
            onClick={scrollHomeToTop}
            className="flex items-center gap-3 group"
          >
            <BrandLogo
              variant={scrolled ? "dark" : "light"}
              textClassName="text-xl sm:text-2xl font-display font-black tracking-[0.25em] transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  resetScroll={l.to === "/"}
                  onClick={l.to === "/" ? scrollHomeToTop : undefined}
                  className={cn(
                    "relative py-1 text-xs md:text-[13px] font-poppins uppercase tracking-wider font-semibold transition-all duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300",
                    isActive
                      ? "text-gold after:w-full font-bold"
                      : "after:w-0 hover:after:w-full",
                    scrolled
                      ? isActive
                        ? "text-gold"
                        : "text-espresso/85 hover:text-espresso"
                      : isActive
                        ? "text-gold"
                        : "text-white/95 hover:text-gold drop-shadow-sm",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Spacer (Keeps header layout balanced) */}
          <div className="w-8 h-8 lg:hidden" />
        </div>
      </header>

      {/* ── Persistent Animated Hamburger Toggle (Stays visible on mobile at top-right z-[95]) ── */}
      <label
        className={cn(
          "hamburger flex lg:!hidden items-center justify-center fixed top-4 right-4 z-[95] p-1.5 rounded-full transition-all duration-300 cursor-pointer select-none border",
          open
            ? "text-white bg-white/20 border-white/30 backdrop-blur-2xl shadow-lg"
            : scrolled
              ? "text-espresso bg-ivory/90 border-espresso/15 shadow-md backdrop-blur-md"
              : "text-white bg-black/30 border-white/20 backdrop-blur-md drop-shadow-md",
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

      {/* ── Mobile Blurry Transparent Glass Sidebar ── */}
      {/* 1. Backdrop Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[80] bg-black/40 backdrop-blur-[5px] transition-opacity duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
        aria-hidden="true"
      />

      {/* 2. Sleek Minimal Glassmorphism Sidebar Drawer (With left active indicator & icons) */}
      <aside
        id="mobile-sidebar-drawer"
        role="navigation"
        aria-label="Mobile Navigation Sidebar"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[85] h-[100dvh] w-[82%] max-w-[320px] bg-black/55 backdrop-blur-2xl text-white rounded-l-3xl border-l border-white/15 shadow-[-20px_0_50px_rgba(0,0,0,0.7)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.36,1)] lg:hidden flex flex-col justify-between p-6 pt-16 overflow-y-auto overflow-x-hidden",
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        {/* Subtle Ambient Background Glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#93191E]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -left-16 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

        {/* ── Top Header / Brand Mark ── */}
        <div className="relative z-10 pb-5 border-b border-white/10">
          <BrandLogo
            variant="light"
            textClassName="text-lg font-bold tracking-[0.25em] text-white"
          />
          <span className="text-[10px] text-amber-400/90 uppercase tracking-widest block mt-1 font-mono">
            Cinematic Wedding Films
          </span>
        </div>

        {/* ── Icon-based Menu Items (Matching user requested minimal list + glassmorphism) ── */}
        <div className="relative z-10 py-6 my-auto flex flex-col gap-1.5">
          {navLinks.map((l, i) => {
            const isActive = location.pathname === l.to;
            const IconComponent = getNavIcon(l.label);

            return (
              <Link
                key={l.label}
                to={l.to}
                resetScroll
                onClick={() => {
                  setOpen(false);
                  scrollHomeToTop();
                }}
                className={cn(
                  "group relative flex items-center gap-3.5 px-4.5 py-3.5 rounded-xl transition-all duration-200 overflow-hidden",
                  isActive
                    ? "bg-white/15 text-white font-semibold shadow-sm"
                    : "text-white/75 hover:text-white hover:bg-white/5",
                )}
                style={{
                  transitionDelay: `${open ? 40 + i * 30 : 0}ms`,
                  transform: open ? "translateY(0)" : "translateY(8px)",
                  opacity: open ? 1 : 0,
                }}
              >
                {/* Left Active Edge Accent Bar */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#93191E] rounded-r-full shadow-[0_0_8px_#93191E]" />
                )}

                {/* Left Icon */}
                <IconComponent
                  className={cn(
                    "w-5 h-5 transition-colors duration-200 shrink-0",
                    isActive
                      ? "text-amber-400"
                      : "text-white/60 group-hover:text-white",
                  )}
                />

                {/* Text Label */}
                <span className="font-sans text-base font-medium tracking-wide">
                  {l.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* ── Bottom Actions & Social Links ── */}
        <div className="relative z-10 pt-5 border-t border-white/10 space-y-4">
          <Link
            to="/contact"
            resetScroll
            onClick={() => {
              setOpen(false);
              scrollHomeToTop();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#93191E] to-[#b82329] text-white text-xs font-mono font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-rose-900/40 transition-all active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </Link>

          <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-1 px-1">
            <a
              href={studio.socials[0]?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-white/20">•</span>
            <a
              href={studio.socials[1]?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              YouTube
            </a>
            <span className="text-white/20">•</span>
            <a
              href="https://wa.me/917425940636"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
