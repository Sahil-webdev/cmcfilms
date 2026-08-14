import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Youtube, Calendar } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/story-1.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      <header
        className={cn(
          "fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "top-3 md:top-4 inset-x-3 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[92%] max-w-[1380px] h-16 md:h-18 rounded-full border border-espresso/15 bg-ivory/92 text-espresso backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.14)]"
            : "top-0 inset-x-0 h-22 md:h-24 rounded-none border-b border-transparent bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-full items-center justify-between transition-all duration-500",
            scrolled ? "px-4 md:px-8 max-w-full" : "px-5 md:px-10 max-w-[1600px]",
          )}
        >
          {/* Left Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "label-xs tracking-wider transition-all duration-300",
                  scrolled
                    ? "text-espresso/80 hover:text-espresso hover:opacity-100"
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
              "font-display tracking-[0.28em] transition-all duration-300 font-normal lg:absolute lg:left-1/2 lg:-translate-x-1/2",
              scrolled
                ? "text-xl md:text-2xl text-espresso hover:opacity-75"
                : "text-2xl md:text-3xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] hover:opacity-85",
            )}
          >
            CMC FILMS
          </Link>

          {/* Right Actions (Socials + Booking CTA) */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "label-xs lg:hidden border px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer",
              scrolled
                ? "border-espresso/30 text-espresso hover:bg-espresso hover:text-ivory"
                : "border-white/40 text-white bg-black/20 backdrop-blur-md hover:bg-white hover:text-black",
            )}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-cinema text-ivory transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-8 border-b border-ivory/10">
            <span className="font-display text-xl tracking-[0.35em]">CMC FILMS</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="label-xs border border-ivory/30 px-4 py-2 rounded-full hover:bg-ivory hover:text-cinema transition-all"
              aria-label="Close menu"
            >
              Close ✕
            </button>
          </div>

          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
            <nav className="flex flex-col justify-center gap-4 px-8">
              {navLinks.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl leading-tight transition-all duration-500 hover:text-gold hover:translate-x-2"
                  style={{
                    transitionDelay: `${60 + i * 50}ms`,
                    transform: open ? "none" : "translateY(20px)",
                    opacity: open ? 1 : 0,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="hidden sm:block p-6">
              <img
                src={heroImg}
                alt="Bride at a window before the ceremony"
                className="h-full w-full object-cover opacity-80 rounded-sm"
                loading="lazy"
              />
            </div>
          </div>

          <div className="label-xs flex flex-wrap gap-x-6 gap-y-2 px-8 py-8 text-taupe border-t border-ivory/10 bg-cinema">
            <a href={studio.socials[0]?.href} className="hover:text-gold">Instagram</a>
            <a href={studio.socials[1]?.href} className="hover:text-gold">YouTube</a>
            <a href={`mailto:${studio.email}`} className="hover:text-gold">{studio.email}</a>
            <span>{studio.city}</span>
          </div>
        </div>
      </div>
    </>
  );
}
