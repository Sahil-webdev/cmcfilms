import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Youtube, Calendar, ArrowUpRight, MessageCircle } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Desktop Website Header (Untouched & Pristine) ── */}
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
          {/* Desktop Left Brand Logo */}
          <BrandLogo
            variant="custom"
            textClassName={cn(
              "font-display font-medium tracking-[0.34em] transition-all duration-300",
              scrolled ? "text-[#261E1E] text-lg sm:text-xl md:text-2xl" : "text-white text-xl sm:text-2xl md:text-[25px] drop-shadow-md"
            )}
          />

          {/* Desktop Right Navigation Links (Animated Gold Underline Active Highlight) */}
          <nav className="hidden items-center gap-5 md:gap-7 lg:flex" role="navigation" aria-label="Main Navigation">
            {navLinks.map((l) => {
              const isActive =
                l.to === "/"
                  ? location.pathname === "/"
                  : location.pathname === l.to;

              return (
                <Link
                  key={l.label}
                  to={l.to}
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

      {/* 2. Sleek Blurry Transparent Glass Drawer (No heavy box borders or extra clutter) */}
      <aside
        id="mobile-sidebar-drawer"
        role="navigation"
        aria-label="Mobile Navigation Sidebar"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[85] h-[100dvh] w-[82%] max-w-[360px] bg-black/35 backdrop-blur-2xl text-white rounded-l-[24px] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.36,1)] lg:hidden flex flex-col justify-between p-7 pt-20 overflow-y-auto overflow-x-hidden",
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        {/* Ambient Glow in Background */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#E5CA92]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -left-16 h-48 w-48 rounded-full bg-[#015287]/25 blur-3xl" />

        {/* ── Top Header / Brand Mark ── */}
        <div className="relative z-10 pb-4 border-b border-white/10">
          <BrandLogo
            variant="light"
            textClassName="text-lg sm:text-xl font-display font-medium tracking-[0.32em]"
          />
          <span className="label-xs text-[#E5CA92] text-[10px] uppercase tracking-widest block mt-2 font-mono">
            Stories for love • Told forever
          </span>
        </div>

        {/* ── Clean Animated Text Navigation Links (No Boxed Buttons / Borders) ── */}
        <div className="relative z-10 py-6 my-auto flex flex-col gap-5">
          {navLinks.map((l, i) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between transition-all duration-300 py-1"
                style={{
                  transitionDelay: `${open ? 60 + i * 40 : 0}ms`,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#E5CA92]/80 group-hover:text-[#E5CA92] transition-colors">
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "font-display text-3xl md:text-4xl tracking-wide font-light transition-all duration-300 group-hover:translate-x-2",
                      isActive
                        ? "text-[#E5CA92] font-normal drop-shadow-[0_2px_10px_rgba(229,202,146,0.3)]"
                        : "text-white/90 group-hover:text-[#E5CA92]",
                    )}
                  >
                    {l.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#E5CA92] shadow-[0_0_10px_#E5CA92] animate-pulse" />
                  )}
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </Link>
            );
          })}

          {/* Book Experience Text Link */}
          <Link
            to="/packages"
            onClick={() => setOpen(false)}
            className="group relative flex items-center justify-between transition-all duration-300 py-1 mt-2"
            style={{
              transitionDelay: `${open ? 60 + navLinks.length * 40 : 0}ms`,
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#E5CA92]/80 group-hover:text-[#E5CA92] transition-colors">
                06
              </span>
              <span className="font-display text-3xl md:text-4xl tracking-wide font-light text-white/90 group-hover:text-[#E5CA92] group-hover:translate-x-2 transition-all duration-300">
                Book Experience
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </Link>
        </div>

        {/* ── Minimalist Bottom Social Links (Clean Text Row, No Extra Box Clutter) ── */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
          <a
            href={studio.socials[0]?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E5CA92] transition-colors"
          >
            Instagram
          </a>
          <span className="text-white/20">•</span>
          <a
            href={studio.socials[1]?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E5CA92] transition-colors"
          >
            YouTube
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E5CA92] transition-colors flex items-center gap-1"
          >
            <MessageCircle className="w-3 h-3 text-[#E5CA92]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
