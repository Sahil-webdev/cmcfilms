import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Youtube, MessageCircle, Mail, MapPin, Sparkles, Calendar, ArrowUpRight } from "lucide-react";
import { navLinks, studio } from "@/lib/site-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="grain relative overflow-hidden bg-[#0A0C0E] text-ivory border-t border-white/10">
      {/* ── Ambient Background Glows ── */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#E5CA92]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[500px] w-[500px] rounded-full bg-[#015287]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 pt-20 pb-12 md:px-10 md:pt-28 md:pb-16">
        {/* ── Top Header Section: Headline & Back to Top ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#E5CA92] animate-pulse" />
              <span className="label-xs text-[#E5CA92] tracking-[0.25em] uppercase font-mono text-[10px]">
                Luxury Wedding Photography &amp; Cinema
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-light text-[#FAF8F3]">
              Let's Preserve Your Story <br />
              <em className="font-editorial italic text-[#E5CA92] font-normal">In Timeless Motion.</em>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="label-xs bg-gradient-to-r from-[#E5CA92] to-[#DFC184] text-[#0A0C0E] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:brightness-110 shadow-lg shadow-[#E5CA92]/15 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Dates</span>
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="h-12 w-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-[#E5CA92] text-white hover:text-[#E5CA92] flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── Middle Grid: Navigation, Services, Contact & Socials ── */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-white/10">
          {/* Brand Info & Motto */}
          <div className="lg:col-span-4">
            <Link to="/" className="font-display text-2xl tracking-[0.3em] font-light text-white block mb-4">
              CMC FILMS
            </Link>
            <p className="text-sm text-white/65 leading-relaxed font-sans max-w-sm font-light">
              A boutique visual storytelling studio documenting grand weddings, intimate vows, and emotional legacies across Rajasthan and worldwide.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/20 text-xs transition-all backdrop-blur-md"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <p className="label-xs text-[#E5CA92] uppercase tracking-[0.2em] font-mono text-[10px] mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-base text-white/80 hover:text-[#E5CA92] font-display transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {l.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#E5CA92]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Services */}
          <div className="lg:col-span-2">
            <p className="label-xs text-[#E5CA92] uppercase tracking-[0.2em] font-mono text-[10px] mb-5">
              Craft
            </p>
            <ul className="space-y-3 text-sm text-white/70 font-sans font-light">
              <li className="hover:text-white transition-colors">4K Cinematic Films</li>
              <li className="hover:text-white transition-colors">Candid Photography</li>
              <li className="hover:text-white transition-colors">Destination Weddings</li>
              <li className="hover:text-white transition-colors">Royal Palaces</li>
              <li className="hover:text-white transition-colors">Pre-Wedding Shoots</li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="lg:col-span-3">
            <p className="label-xs text-[#E5CA92] uppercase tracking-[0.2em] font-mono text-[10px] mb-5">
              Connect
            </p>
            <div className="space-y-3 text-sm text-white/80 font-sans font-light">
              <a
                href={`mailto:${studio.email}`}
                className="flex items-center gap-2 hover:text-[#E5CA92] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E5CA92]" />
                <span>{studio.email}</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#E5CA92]" />
                <span>{studio.city}, Worldwide</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={studio.socials[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-[#E5CA92] text-white hover:text-[#E5CA92] flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={studio.socials[1]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-[#E5CA92] text-white hover:text-[#E5CA92] flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-[#E5CA92] text-white hover:text-[#E5CA92] flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Giant Architectural Brand Watermark ── */}
        <div className="my-8 text-center overflow-hidden">
          <p className="font-display text-[clamp(4.5rem,17vw,15rem)] font-light leading-none tracking-[0.25em] text-white/[0.04] select-none pointer-events-none uppercase">
            CMC FILMS
          </p>
        </div>

        {/* ── Bottom Bar: Copyright & Legal ── */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} CMC FILMS. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#E5CA92] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E5CA92] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
