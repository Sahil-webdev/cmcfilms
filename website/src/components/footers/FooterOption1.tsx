import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.png";
import coastal from "@/assets/coastal.jpg";

export function FooterOption1() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#24132D] text-[#F5F0E8] font-sans overflow-hidden border-t border-white/10 selection:bg-[#C7A36B] selection:text-[#110E12]">
      
      {/* ── BACKGROUND WATERMARK TYPOGRAPHY ── */}
      <div
        className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center text-[clamp(6rem,18vw,220px)] font-editorial font-normal leading-none text-[#8A7693]/[0.06] select-none tracking-tighter whitespace-nowrap z-0"
        aria-hidden="true"
      >
        CMC FILMS
      </div>

      {/* ── SECTION 1 — CINEMATIC FOOTER INTRO ── */}
      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1550px] mx-auto border-b border-[#F5F0E8]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Eyebrow, Editorial Heading & CTA */}
          <div className="lg:col-span-8 space-y-8">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#C7A36B] block">
              YOUR STORY DESERVES TO BE REMEMBERED
            </span>

            <h2 className="font-editorial text-[clamp(2.5rem,6.5vw,5.5rem)] font-normal text-[#F5F0E8] leading-[0.95] tracking-tight">
              Let’s create something <br />
              <span className="italic font-light text-[#C7A36B]">worth remembering.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A69A91] font-sans font-light leading-relaxed max-w-[500px]">
              For weddings, celebrations and stories that deserve more than photographs.
            </p>

            {/* Primary Editorial CTA */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 text-sm font-mono uppercase tracking-[0.2em] text-[#F5F0E8] hover:text-[#C7A36B] transition-colors duration-300"
              >
                <span className="border-b border-[#C7A36B]/60 group-hover:border-[#C7A36B] pb-1">
                  START YOUR STORY
                </span>
                <span className="w-10 h-[1px] bg-[#C7A36B] transition-all duration-300 group-hover:w-16" />
                <ArrowUpRight className="w-5 h-5 text-[#C7A36B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Desktop Composed Vertical Photograph (3:4) */}
          <div className="lg:col-span-4 hidden lg:flex justify-end relative">
            <div className="relative w-[280px] aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-white/10 group">
              <img
                src={coastal}
                alt="Cinematic couple story moment"
                className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24132D]/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono text-[#C7A36B] uppercase tracking-widest">
                  GOA · SUNSET DIARIES
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── SECTION 2 & 3 — BRAND MOMENT & ASYMMETRIC NAVIGATION ARCHITECTURE ── */}
      <div className="relative z-10 py-20 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1550px] mx-auto border-b border-[#F5F0E8]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1 (Left 42% / 5 Cols): Brand Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block transition-opacity hover:opacity-85">
              <img
                src={logoImg}
                alt="CMC FILMS - Wedding Storytellers"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]"
              />
            </Link>

            <p className="text-xs font-mono text-[#C7A36B] uppercase tracking-widest">
              Wedding Photography &amp; Cinematic Films · Jaipur · Delhi NCR · Worldwide
            </p>

            <p className="text-xs sm:text-sm text-[#A69A91] font-sans font-light leading-relaxed max-w-sm">
              Stories of love, captured honestly and preserved cinematically. Boutique visual storytelling for quiet glances and grand celebrations.
            </p>

            {/* Newsletter Subscription (Minimal Line Design) */}
            <div className="pt-4 space-y-3 max-w-sm">
              <span className="text-xs font-mono text-[#F5F0E8] uppercase tracking-wider block">
                Stay close to our stories.
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#F5F0E8]/30 focus-within:border-[#C7A36B] transition-colors pb-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#F5F0E8] placeholder-[#A69A91]/60 focus:outline-none py-1.5 font-sans"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="text-[#C7A36B] hover:text-[#F5F0E8] transition-colors p-1 cursor-pointer"
                >
                  {subscribed ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <ArrowUpRight className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] font-mono text-emerald-400 block">
                  Thank you. You're subscribed to our stories.
                </span>
              )}
            </div>
          </div>

          {/* Column 2 (20% / 2 Cols): Explore */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A36B] block">
              EXPLORE
            </span>
            <ul className="space-y-3 text-xs font-sans text-[#F5F0E8]/80 font-light">
              <li>
                <Link to="/portfolio" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1 group">
                  <span>Wedding Stories</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7A36B]" />
                </Link>
              </li>
              <li>
                <Link to="/films" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1 group">
                  <span>Wedding Films</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7A36B]" />
                </Link>
              </li>
              <li>
                <Link to="/couples" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1 group">
                  <span>Couple Shoots</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7A36B]" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1 group">
                  <span>About Studio</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7A36B]" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1 group">
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7A36B]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (20% / 2 Cols): Services */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A36B] block">
              SERVICES
            </span>
            <ul className="space-y-2.5 text-xs font-sans text-[#A69A91] font-light">
              <li><Link to="/portfolio" className="hover:text-[#F5F0E8] transition-colors">Wedding Photography</Link></li>
              <li><Link to="/films" className="hover:text-[#F5F0E8] transition-colors">Cinematic Wedding Films</Link></li>
              <li><Link to="/couples" className="hover:text-[#F5F0E8] transition-colors">Pre-Wedding Shoots</Link></li>
              <li><Link to="/couples" className="hover:text-[#F5F0E8] transition-colors">Engagement Sessions</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#F5F0E8] transition-colors">Destination Weddings</Link></li>
              <li><Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Family &amp; Maternity</Link></li>
            </ul>
          </div>

          {/* Column 4 (Right 25% / 3 Cols): Contact & Instagram */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A36B] block">
                CONTACT &amp; COVERAGE
              </span>
              <p className="text-xs text-[#A69A91] font-sans font-light leading-relaxed">
                Jaipur · Delhi NCR · Udaipur · Goa · Dubai &amp; Worldwide Destination Coverage
              </p>
              <div className="text-xs font-mono text-[#F5F0E8] space-y-1">
                <p>+91 99999 99999</p>
                <p>
                  <a href="mailto:hello@cmcfilms.studio" className="hover:text-[#C7A36B] transition-colors">
                    hello@cmcfilms.studio
                  </a>
                </p>
              </div>
            </div>

            {/* Instagram Callout */}
            <div className="pt-2 border-t border-[#F5F0E8]/10 space-y-1">
              <span className="text-[10px] font-mono text-[#A69A91] uppercase tracking-widest block">
                FOLLOW OUR STORIES
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C7A36B] hover:text-[#F5F0E8] transition-colors"
              >
                <span>@CMCFilms Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── SECTION 4 — REFINED SOCIAL ROW & MINIMAL LEGAL BOTTOM BAR ── */}
      <div className="relative z-10 py-8 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A69A91] font-mono font-light">
        
        {/* Left: Footer Design Identifier Label & Copyright */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-center md:text-left">
          <span className="text-[#C7A36B] font-semibold tracking-wider">
            [ FOOTER 01 / CINEMATIC WINE PLUM EDITION ]
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span>© 2008–{new Date().getFullYear()} CMC FILMS. Crafted for stories that last.</span>
        </div>

        {/* Center: Refined Horizontal Social Row */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#F5F0E8]/90">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1">
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3 text-[#C7A36B]" />
          </a>
          <span className="text-white/20">•</span>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1">
            <span>YouTube</span>
            <ArrowUpRight className="w-3 h-3 text-[#C7A36B]" />
          </a>
          <span className="text-white/20">•</span>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1">
            <span>Pinterest</span>
            <ArrowUpRight className="w-3 h-3 text-[#C7A36B]" />
          </a>
          <span className="text-white/20">•</span>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A36B] transition-colors inline-flex items-center gap-1 text-emerald-400">
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Right: Integrated Back To Top Text Interaction */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F5F0E8] hover:text-[#C7A36B] transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 text-[#C7A36B] group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>

    </footer>
  );
}
