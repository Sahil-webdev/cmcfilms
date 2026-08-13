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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "h-18 border-b border-espresso/10 bg-ivory/90 text-espresso backdrop-blur-lg shadow-sm"
            : "h-24 border-b border-transparent bg-gradient-to-b from-cinema/60 to-transparent text-ivory",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-10">
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="label-xs link-underline opacity-85 transition-all hover:opacity-100 hover:text-gold"
                activeProps={{ className: "opacity-100 text-gold font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="font-display text-2xl tracking-[0.35em] transition-opacity hover:opacity-75 lg:absolute lg:left-1/2 lg:-translate-x-1/2 font-light"
          >
            CMC FILMS
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={studio.socials[0]?.href}
              aria-label="Instagram"
              className="opacity-75 hover:opacity-100 hover:text-gold transition-all"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={studio.socials[1]?.href}
              aria-label="YouTube"
              className="opacity-75 hover:opacity-100 hover:text-gold transition-all"
            >
              <Youtube className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <Link
              to="/contact"
              className={cn(
                "label-xs border px-6 py-3 transition-all duration-300 flex items-center gap-2 rounded-full",
                scrolled
                  ? "border-espresso bg-espresso text-ivory hover:bg-gold hover:border-gold hover:text-cinema shadow-sm"
                  : "border-ivory/40 bg-cinema/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso backdrop-blur-md",
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Experience</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="label-xs lg:hidden border border-current px-4 py-2 rounded-full"
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
