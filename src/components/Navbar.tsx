import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Instagram,
  Youtube,
  Calendar,
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
  Sparkles,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";
import { cn } from "@/lib/utils";

// Submenu items for Services Accordion
const serviceSubmenu = [
  { label: "Cinematic Wedding Films", to: "/films" },
  { label: "Candid Photography & Stills", to: "/portfolio" },
  { label: "Destination Coverage", to: "/portfolio" },
  { label: "Pre-Wedding & Concept Shoots", to: "/portfolio" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
          {/* Desktop Left Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" role="navigation" aria-label="Main Navigation">
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

          {/* Desktop & Mobile Brand Logo */}
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

          {/* Desktop Right Actions */}
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

          {/* ── Mobile Custom Glass Hamburger Button (44px x 44px) ── */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-sidebar-drawer"
            aria-label="Open navigation menu"
            className={cn(
              "flex lg:!hidden items-center justify-center h-11 w-11 rounded-full border transition-all duration-300 cursor-pointer select-none active:scale-95",
              scrolled
                ? "bg-ivory/90 border-espresso/15 text-espresso shadow-md backdrop-blur-md"
                : "bg-white/10 border-white/25 text-white backdrop-blur-md drop-shadow-md hover:bg-white/20",
            )}
          >
            {/* Elegant 2-line custom hamburger lines */}
            <div className="flex flex-col items-center justify-center gap-1.5 w-5">
              <span className="h-[2px] w-5 rounded-full bg-current transition-all" />
              <span className="h-[2px] w-3.5 self-end rounded-full bg-current transition-all" />
            </div>
          </button>
        </div>
      </header>

      {/* ── Mobile Off-Canvas Glass Sidebar Overlay & Panel ── */}

      {/* 1. Dark Translucent Backdrop Overlay (rgba(0,0,0,0.55) + blur 6px) */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[80] bg-black/60 backdrop-blur-[6px] transition-opacity duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
        aria-hidden="true"
      />

      {/* 2. Off-Canvas Panel Drawer (85-90% width, 100dvh height, rounded left corners 28px) */}
      <aside
        id="mobile-sidebar-drawer"
        role="navigation"
        aria-label="Mobile Navigation Sidebar"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[85] h-[100dvh] w-[88%] max-w-[400px] bg-[#0B0D10]/92 backdrop-blur-3xl border-l border-white/[0.08] text-[#F7F7F5] rounded-l-[28px] shadow-[-25px_0_60px_rgba(0,0,0,0.85)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col justify-between overflow-y-auto overflow-x-hidden pt-[env(safe-area-inset-top,20px)] pb-[env(safe-area-inset-bottom,20px)]",
          open
            ? "translate-x-0 scale-100 opacity-100"
            : "translate-x-full scale-[0.985] opacity-0 pointer-events-none",
        )}
      >
        {/* Soft Blurred Ambient Glow in Background */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#E5CA92]/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 -left-20 h-56 w-56 rounded-full bg-[#015287]/15 blur-3xl" />

        {/* ── Sidebar Top Header (px-6 pt-6 pb-3) ── */}
        <div className="relative z-10 px-6 pt-6 pb-3 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#12151A] border border-white/[0.1] flex items-center justify-center shadow-inner">
              <span className="font-display font-bold text-xs text-[#E5CA92] tracking-wider">CMC</span>
            </div>
            <div>
              <span className="font-display text-lg tracking-[0.22em] text-[#F7F7F5] font-light block leading-none">
                CMC FILMS
              </span>
              <span className="label-xs text-[#E5CA92] text-[9px] uppercase tracking-widest flex items-center gap-1 font-mono mt-1">
                <Sparkles className="w-2.5 h-2.5 text-[#E5CA92]" />
                <span>Luxury Wedding Studio</span>
              </span>
            </div>
          </div>

          {/* Premium Circular Close Button (44px x 44px, rotates on hover/tap) */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation sidebar"
            className="flex items-center justify-center h-11 w-11 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/15 text-[#F7F7F5] transition-all duration-300 hover:rotate-90 active:scale-95 cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* ── Middle Scrollable Navigation Content ── */}
        <div className="relative z-10 flex-1 px-6 py-5 overflow-y-auto no-bar flex flex-col justify-between">
          <div>
            {/* Optional Brand Intro Section */}
            <div className="mb-4">
              <span className="label-xs text-[#E5CA92] uppercase tracking-[0.25em] text-[10px] font-mono block">
                NAVIGATION
              </span>
              <p className="text-xs text-white/50 font-sans mt-0.5">
                Discover our work, services and story.
              </p>
            </div>

            {/* Vertically Stacked Navigation Items with Staggered Entrance */}
            <div className="flex flex-col gap-2.5">
              {/* 01. Home */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between px-4 py-3.5 rounded-[14px] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 min-h-[48px]"
                activeProps={{
                  className: "bg-white/[0.08] border-[#E5CA92]/40 shadow-[0_0_20px_rgba(229,202,146,0.12)]",
                }}
                style={{
                  transitionDelay: open ? "60ms" : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-[11px] text-white/40 group-hover:text-[#E5CA92] tracking-wider transition-colors">
                    01
                  </span>
                  <span className="font-display text-[19px] font-medium tracking-wide text-[#F7F7F5] group-hover:translate-x-1 transition-all duration-300">
                    Home
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {location.pathname === "/" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5CA92] animate-pulse" />
                  )}
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>

              {/* 02. About */}
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between px-4 py-3.5 rounded-[14px] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 min-h-[48px]"
                activeProps={{
                  className: "bg-white/[0.08] border-[#E5CA92]/40 shadow-[0_0_20px_rgba(229,202,146,0.12)]",
                }}
                style={{
                  transitionDelay: open ? "105ms" : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-[11px] text-white/40 group-hover:text-[#E5CA92] tracking-wider transition-colors">
                    02
                  </span>
                  <span className="font-display text-[19px] font-medium tracking-wide text-[#F7F7F5] group-hover:translate-x-1 transition-all duration-300">
                    About
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {location.pathname === "/about" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5CA92] animate-pulse" />
                  )}
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>

              {/* 03. Services (Expandable Accordion Menu) */}
              <div
                className="rounded-[14px] bg-white/[0.03] border border-white/[0.06] transition-all duration-300 overflow-hidden"
                style={{
                  transitionDelay: open ? "150ms" : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  aria-expanded={servicesOpen}
                  className="w-full flex items-center justify-between px-4 py-3.5 min-h-[48px] text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-[11px] text-white/40 group-hover:text-[#E5CA92] tracking-wider transition-colors">
                      03
                    </span>
                    <span className="font-display text-[19px] font-medium tracking-wide text-[#F7F7F5] group-hover:translate-x-1 transition-all duration-300">
                      Services
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-white/40 group-hover:text-[#E5CA92] transition-transform duration-300",
                      servicesOpen && "rotate-180 text-[#E5CA92]",
                    )}
                  />
                </button>

                {/* Accordion Submenu Items */}
                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out px-4 overflow-hidden border-t border-white/[0.05]",
                    servicesOpen ? "max-h-60 py-2.5 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none",
                  )}
                >
                  <div className="flex flex-col gap-2 pl-6 border-l border-white/10">
                    {serviceSubmenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        onClick={() => setOpen(false)}
                        className="text-xs text-white/65 hover:text-[#E5CA92] py-1.5 transition-colors flex items-center justify-between"
                      >
                        <span>{sub.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-white/30" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* 04. Portfolio */}
              <Link
                to="/portfolio"
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between px-4 py-3.5 rounded-[14px] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 min-h-[48px]"
                activeProps={{
                  className: "bg-white/[0.08] border-[#E5CA92]/40 shadow-[0_0_20px_rgba(229,202,146,0.12)]",
                }}
                style={{
                  transitionDelay: open ? "195ms" : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-[11px] text-white/40 group-hover:text-[#E5CA92] tracking-wider transition-colors">
                    04
                  </span>
                  <span className="font-display text-[19px] font-medium tracking-wide text-[#F7F7F5] group-hover:translate-x-1 transition-all duration-300">
                    Portfolio
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {location.pathname === "/portfolio" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5CA92] animate-pulse" />
                  )}
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>

              {/* 05. Films */}
              <Link
                to="/films"
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between px-4 py-3.5 rounded-[14px] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 min-h-[48px]"
                activeProps={{
                  className: "bg-white/[0.08] border-[#E5CA92]/40 shadow-[0_0_20px_rgba(229,202,146,0.12)]",
                }}
                style={{
                  transitionDelay: open ? "240ms" : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-[11px] text-white/40 group-hover:text-[#E5CA92] tracking-wider transition-colors">
                    05
                  </span>
                  <span className="font-display text-[19px] font-medium tracking-wide text-[#F7F7F5] group-hover:translate-x-1 transition-all duration-300">
                    Films
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {location.pathname === "/films" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5CA92] animate-pulse" />
                  )}
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>

              {/* 06. Contact */}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between px-4 py-3.5 rounded-[14px] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 min-h-[48px]"
                activeProps={{
                  className: "bg-white/[0.08] border-[#E5CA92]/40 shadow-[0_0_20px_rgba(229,202,146,0.12)]",
                }}
                style={{
                  transitionDelay: open ? "285ms" : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-[11px] text-white/40 group-hover:text-[#E5CA92] tracking-wider transition-colors">
                    06
                  </span>
                  <span className="font-display text-[19px] font-medium tracking-wide text-[#F7F7F5] group-hover:translate-x-1 transition-all duration-300">
                    Contact
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {location.pathname === "/contact" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5CA92] animate-pulse" />
                  )}
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#E5CA92] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>
            </div>
          </div>

          {/* ── Bottom Section: Primary CTA, Contact Info & Minimalist Socials ── */}
          <div
            className="mt-6 pt-4 border-t border-white/[0.07] flex flex-col gap-4"
            style={{
              transitionDelay: open ? "330ms" : "0ms",
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
            }}
          >
            {/* Full-width Primary CTA Button (54px height) */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-6 h-13 rounded-2xl bg-gradient-to-r from-[#E5CA92] via-[#DFC184] to-[#C9A96E] text-[#0B0D10] font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E5CA92]/15 active:scale-[0.98]"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#0B0D10]" />
                <span>Book Your Experience</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#0B0D10]" />
            </Link>

            {/* Compact Contact Information */}
            <div className="flex items-center justify-between text-xs text-white/55 font-mono px-1">
              <a
                href={`mailto:${studio.email}`}
                className="hover:text-[#E5CA92] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3 h-3 text-[#E5CA92]/80" />
                <span>{studio.email}</span>
              </a>
              <span className="text-white/30">•</span>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5CA92] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-[#E5CA92]/80" />
                <span>Inquire</span>
              </a>
            </div>

            {/* Minimalist Social Row with Subtle Dividers */}
            <div className="flex items-center justify-around py-2 border-t border-white/[0.07] text-[11px] font-mono text-white/60">
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
                className="hover:text-[#E5CA92] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
