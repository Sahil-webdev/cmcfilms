import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Youtube, Calendar, ArrowRight, MessageCircle } from "lucide-react";
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
      {/* ── Main Navbar ── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "h-16 md:h-20 border-b border-espresso/10 bg-ivory/95 text-espresso backdrop-blur-md shadow-sm"
            : "h-20 md:h-24 border-b border-transparent bg-gradient-to-b from-black/70 via-black/25 to-transparent text-white",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-10">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "label-xs tracking-wider transition-all duration-300",
                  scrolled
                    ? "text-espresso/80 hover:text-espresso"
                    : "text-white/90 hover:text-gold drop-shadow-sm",
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
              "font-display text-2xl md:text-3xl tracking-[0.3em] font-light transition-opacity hover:opacity-80 lg:absolute lg:left-1/2 lg:-translate-x-1/2",
              scrolled ? "text-espresso" : "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]",
            )}
          >
            CMC FILMS
          </Link>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={studio.socials[0]?.href}
              aria-label="Instagram"
              className={cn(
                "transition-all hover:text-gold",
                scrolled ? "text-espresso/75" : "text-white/85",
              )}
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={studio.socials[1]?.href}
              aria-label="YouTube"
              className={cn(
                "transition-all hover:text-gold",
                scrolled ? "text-espresso/75" : "text-white/85",
              )}
            >
              <Youtube className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <Link
              to="/contact"
              className={cn(
                "label-xs border px-6 py-3 transition-all duration-300 flex items-center gap-2 rounded-full",
                scrolled
                  ? "border-espresso bg-espresso text-ivory hover:bg-gold hover:border-gold hover:text-cinema shadow-sm"
                  : "border-white/40 bg-white/10 text-white hover:border-white hover:bg-white hover:text-espresso backdrop-blur-md",
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Experience</span>
            </Link>
          </div>

          {/* ── Mobile Animated Hamburger (Toggles between Hamburger & Cross X) ── */}
          <label
            className={cn(
              "hamburger lg:hidden relative z-[80] p-1.5 rounded-full transition-colors duration-300 cursor-pointer select-none",
              open
                ? "text-white bg-white/15 backdrop-blur-md"
                : scrolled
                  ? "text-espresso hover:bg-espresso/10"
                  : "text-white hover:bg-white/20 drop-shadow-md",
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
        </div>
      </header>

      {/* ── Mobile Glassmorphism Sliding Sidebar ── */}
      {/* 1. Backdrop Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      />

      {/* 2. Glassmorphism Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-[360px] bg-cinema/80 backdrop-blur-2xl border-l border-white/15 text-ivory shadow-[-15px_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col justify-between p-6 pt-24",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Navigation Links inside Glass Cards */}
        <div className="flex flex-col gap-3">
          <p className="label-xs text-gold uppercase tracking-widest px-2 mb-1">Navigation</p>
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 backdrop-blur-md transition-all duration-300"
              style={{
                transitionDelay: `${open ? 80 + i * 40 : 0}ms`,
              }}
            >
              <span className="font-display text-2xl tracking-wide group-hover:text-gold transition-colors">
                {l.label}
              </span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </Link>
          ))}

          {/* Book Experience Button */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-gold text-cinema font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white shadow-lg shadow-gold/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Experience</span>
          </Link>
        </div>

        {/* Bottom Social & Contact Info */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-around gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <a
              href={studio.socials[0]?.href}
              aria-label="Instagram"
              className="p-2 text-white/80 hover:text-gold hover:scale-110 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <div className="h-4 w-px bg-white/15" />
            <a
              href={studio.socials[1]?.href}
              aria-label="YouTube"
              className="p-2 text-white/80 hover:text-gold hover:scale-110 transition-all"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <div className="h-4 w-px bg-white/15" />
            <a
              href="https://wa.me/919999999999"
              aria-label="WhatsApp"
              className="p-2 text-white/80 hover:text-gold hover:scale-110 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="label-xs text-white/50 text-[10px]">{studio.email}</p>
            <p className="label-xs text-gold/80 text-[10px] mt-0.5">Rajasthan, India &amp; Worldwide</p>
          </div>
        </div>
      </aside>
    </>
  );
}
