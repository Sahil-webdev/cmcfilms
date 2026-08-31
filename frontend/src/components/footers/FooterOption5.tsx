import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.png";
import coastal from "@/assets/coastal.jpg";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

export function FooterOption5() {
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
    <footer className="relative bg-[#F4EFE8] text-[#21162A] font-sans selection:bg-[#C6A169] selection:text-[#21162A] pt-16 pb-6 overflow-hidden">
      
      {/* ── INSET DARK EDITORIAL PANEL CONTAINER (calc(100% - 80px), max 1450px) ── */}
      <div className="relative w-[calc(100%-28px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-80px)] max-w-[1450px] mx-auto bg-[#21162A] text-[#F6F0EA] rounded-[32px] sm:rounded-[40px] shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 border border-white/10 overflow-hidden">
        
        {/* ── OVERSIZED CROPPED BACKGROUND TYPOGRAPHY (sit partially behind) ── */}
        <div
          className="pointer-events-none absolute bottom-4 left-6 text-[clamp(90px,9vw,155px)] font-editorial font-normal leading-none text-[#796782]/[0.06] select-none tracking-tighter whitespace-nowrap z-0"
          aria-hidden="true"
        >
          CMC FILMS
        </div>

        {/* ── CREATIVE OVERLAPPING ARCHED PHOTO CUTOUT (Upper Right Edge) ── */}
        <div className="absolute -top-10 right-8 sm:right-14 hidden lg:block z-30">
          <div className="relative w-[190px] h-[260px] rounded-t-[95px] rounded-b-[4px] overflow-hidden border-2 border-[#C6A169]/40 shadow-2xl bg-[#17101D] group cursor-pointer">
            <img
              src={coastal}
              alt="A moment, forever"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21162A]/90 via-transparent to-transparent p-4 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#C6A169] uppercase tracking-widest block">
                A MOMENT, FOREVER.
              </span>
              <span className="text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW STORIES ↗
              </span>
            </div>
          </div>
        </div>

        {/* ── ASYMMETRIC GRID LAYOUT (31% / 42% / 27%) ── */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ── LEFT BRAND AREA (31% / 4 Cols) ── */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <Link to="/" className="inline-block transition-opacity hover:opacity-85">
                <img
                  src={logoImg}
                  alt="CMC FILMS - Wedding Storytellers"
                  className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]"
                />
              </Link>
              <span className="text-xs font-mono text-[#C6A169] uppercase tracking-[0.2em] block font-bold">
                WEDDING STORYTELLERS
              </span>
            </div>

            {/* Short 28-34px Serif Brand Statement */}
            <p className="font-editorial text-2xl sm:text-3xl font-normal text-[#F6F0EA] leading-tight max-w-xs">
              Stories of love, <br />
              <span className="italic font-light text-[#C6A169]">told through light &amp; motion.</span>
            </p>

            <div className="space-y-1 text-xs font-mono text-[#AEA2AC] pt-2 border-t border-[#F6F0EA]/10">
              <p>Jaipur &amp; Delhi NCR, India</p>
              <p>Worldwide Destination Coverage</p>
              <p className="text-[#C6A169] pt-1">+91 99999 99999 · hello@cmcfilms.studio</p>
            </div>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#C6A169] hover:text-[#F6F0EA] transition-colors border-b border-[#C6A169] pb-0.5"
              >
                <span>ENQUIRE WITH US</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ── CENTER AREA (42% / 5 Cols): EXPLORE & OUR SERVICES 2-COLUMN LIST ── */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* EXPLORE (All 8 links preserved) */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#C6A169] block font-bold">
                EXPLORE
              </span>
              <ul className="space-y-2 text-xs font-sans text-[#F6F0EA]/85 font-light">
                <li><Link to="/portfolio" className="hover:text-[#C6A169] transition-colors flex items-center justify-between group"><span>Wedding Photography</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A169]" /></Link></li>
                <li><Link to="/films" className="hover:text-[#C6A169] transition-colors flex items-center justify-between group"><span>Wedding Films</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A169]" /></Link></li>
                <li><Link to="/portfolio" className="hover:text-[#C6A169] transition-colors flex items-center justify-between group"><span>Real Wedding Stories</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A169]" /></Link></li>
                <li><Link to="/about" className="hover:text-[#C6A169] transition-colors flex items-center justify-between group"><span>The CMC Experience</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A169]" /></Link></li>
                <li><Link to="/about" className="hover:text-[#C6A169] transition-colors flex items-center justify-between group"><span>About Us</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A169]" /></Link></li>
                <li><Link to="/contact" className="hover:text-[#C6A169] transition-colors text-[#C6A169] font-medium flex items-center justify-between"><span>Work With Us</span><ArrowUpRight className="w-3 h-3" /></Link></li>
                <li><Link to="/contact" className="hover:text-[#C6A169] transition-colors">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-[#C6A169] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* OUR SERVICES (All 10 services preserved in compact 2-column list) */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#C6A169] block font-bold">
                OUR SERVICES
              </span>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs font-sans text-[#AEA2AC] font-light">
                <Link to="/portfolio" className="hover:text-[#F6F0EA] transition-colors">Wedding</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">Maternity</Link>
                <Link to="/couples" className="hover:text-[#F6F0EA] transition-colors">Pre-wedding</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">New Born</Link>
                <Link to="/couples" className="hover:text-[#F6F0EA] transition-colors">Engagement</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">Birthday</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">Baby Shower</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">Kitty Party</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">Product Shoot</Link>
                <Link to="/contact" className="hover:text-[#F6F0EA] transition-colors">Corporate</Link>
              </div>
            </div>

          </div>

          {/* ── RIGHT AREA (27% / 3 Cols): CONNECT & JOIN OUR CREW ── */}
          <div className="lg:col-span-3 space-y-5">
            
            {/* Typographic Social Links */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#C6A169] block font-bold">
                CONNECT
              </span>
              <div className="flex flex-col space-y-1 text-xs font-mono text-[#F6F0EA]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6A169] transition-colors inline-flex items-center justify-between"><span>Instagram</span><ArrowUpRight className="w-3 h-3 text-[#C6A169]" /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6A169] transition-colors inline-flex items-center justify-between"><span>YouTube</span><ArrowUpRight className="w-3 h-3 text-[#C6A169]" /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6A169] transition-colors inline-flex items-center justify-between"><span>Facebook</span><ArrowUpRight className="w-3 h-3 text-[#C6A169]" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6A169] transition-colors inline-flex items-center justify-between"><span>LinkedIn</span><ArrowUpRight className="w-3 h-3 text-[#C6A169]" /></a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6A169] transition-colors inline-flex items-center justify-between text-emerald-400 font-semibold"><span className="inline-flex items-center gap-1"><WhatsAppIcon className="w-3.5 h-3.5" />WhatsApp Direct</span><ArrowUpRight className="w-3 h-3" /></a>
              </div>
            </div>

            {/* Join Our Crew & Transparent Email Field */}
            <div className="space-y-2 pt-3 border-t border-[#F6F0EA]/10">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#C6A169] block font-bold">
                JOIN OUR CREW
              </span>
              <p className="text-[11px] text-[#AEA2AC] font-sans font-light leading-relaxed">
                For cinematographers, editors &amp; storytellers who want to create meaningful work with us.
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#F6F0EA]/30 focus-within:border-[#C6A169] transition-colors pb-0.5">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#F6F0EA] placeholder-[#AEA2AC]/60 focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  aria-label="Submit"
                  className="text-[#C6A169] hover:text-[#F6F0EA] transition-colors p-1 cursor-pointer"
                >
                  {subscribed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* Monogram Detail */}
        <div className="absolute bottom-4 right-6 text-[10px] font-mono text-[#AEA2AC]/60 hidden sm:block">
          EST. 2008 · CMC FILMS
        </div>

      </div>

      {/* ── MINIMAL OUTER IVORY BOTTOM STRIP (Outside Dark Panel, 55px-70px Tall) ── */}
      <div className="max-w-[1450px] mx-auto pt-6 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#21162A]/75 font-mono font-light text-center md:text-left">
        <div>
          © 2008–2026 CMC Films Studio by Sahil Sharma. Award-winning wedding photography &amp; films, Jaipur, Delhi NCR and worldwide.
        </div>

        <div className="flex items-center gap-4 text-[#21162A]">
          <span className="text-[#C6A169] font-semibold">[ FOOTER 05 / INSET EDITORIAL PANEL EDITION ]</span>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#C6A169] transition-colors">Privacy</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#C6A169] transition-colors">Terms</Link>
          <span>•</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-1 hover:text-[#C6A169] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C6A169] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

    </footer>
  );
}
