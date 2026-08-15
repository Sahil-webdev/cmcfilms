import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.png";
import coastal from "@/assets/coastal.jpg";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

// ── Controlled Asymmetric Curved Top Edge (50-80px Height) ──
function CompactTopCurve() {
  return (
    <div className="relative w-full overflow-hidden leading-none pointer-events-none -mt-1 select-none z-20">
      <svg
        className="relative block w-full h-[45px] sm:h-[65px] md:h-[80px]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C480,95 960,10 1440,55 L1440,100 L0,100 Z"
          fill="#21132B"
        />
        <path
          d="M0,40 C480,95 960,10 1440,55"
          fill="none"
          stroke="#C7A46A"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

export function FooterOption4() {
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
    <footer className="relative bg-[#F4EFE8] text-[#F4EFE8] font-sans selection:bg-[#C7A46A] selection:text-[#180E20] overflow-hidden">
      
      {/* ── TOP CREATIVE ASYMMETRIC CURVED TRANSITION ── */}
      <CompactTopCurve />

      {/* ── MAIN COMPACT CONTAINER (520px–650px Target Height) ── */}
      <div className="relative bg-[#21132B] pt-4 md:pt-8 pb-8 overflow-hidden border-t border-white/5">

        {/* ── CROPPED BACKGROUND WATERMARK TYPOGRAPHY (Does NOT add height!) ── */}
        <div
          className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center text-[clamp(5rem,14vw,140px)] font-editorial font-normal leading-none text-[#725787]/[0.05] select-none tracking-tight whitespace-nowrap z-0"
          aria-hidden="true"
        >
          CMC FILMS
        </div>

        {/* ── ONE PRIMARY ASYMMETRIC CONTENT SECTION (30% / 42% / 28%) ── */}
        <div className="relative z-10 py-8 px-6 sm:px-10 md:px-12 lg:px-16 max-w-[1550px] mx-auto border-b border-[#F4EFE8]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* ── BLOCK 1 (Left 30% / 4 Cols): Brand Identity & Small Photo Detail ── */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-block transition-opacity hover:opacity-85">
                <img
                  src={logoImg}
                  alt="CMC FILMS - Wedding Storytellers"
                  className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]"
                />
              </Link>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#C7A46A] uppercase tracking-[0.2em] block font-bold">
                  WEDDING STORYTELLERS
                </span>
                <span className="text-xs font-mono text-[#AFA4AE] block">
                  Wedding Photography &amp; Cinematic Films Studio
                </span>
                <span className="text-[11px] font-mono text-[#AFA4AE]/80 block">
                  Jaipur &amp; Delhi NCR, India · Worldwide Destination Coverage
                </span>
              </div>

              <p className="text-xs text-[#AFA4AE] font-sans font-light leading-relaxed max-w-xs">
                Stories captured with emotion. Films created to be remembered.
              </p>

              {/* Optional Small Photo Detail (160px x 210px Crop) */}
              <div className="pt-1 hidden sm:block">
                <div className="w-[150px] h-[100px] overflow-hidden rounded-[2px] border border-[#C7A46A]/30 shadow-md">
                  <img src={coastal} alt="Small photo detail" className="h-full w-full object-cover opacity-85" />
                </div>
              </div>
            </div>

            {/* ── BLOCK 2 (Center 42% / 5 Cols): Compact Explore & Services 2-Column Grid ── */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* EXPLORE LINKS */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A46A] block font-bold">
                  EXPLORE
                </span>
                <ul className="space-y-2 text-xs font-sans text-[#F4EFE8]/85 font-light">
                  <li><Link to="/portfolio" className="hover:text-[#C7A46A] transition-colors flex items-center justify-between group"><span>Wedding Photography</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7A46A]" /></Link></li>
                  <li><Link to="/films" className="hover:text-[#C7A46A] transition-colors flex items-center justify-between group"><span>Wedding Films</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7A46A]" /></Link></li>
                  <li><Link to="/portfolio" className="hover:text-[#C7A46A] transition-colors flex items-center justify-between group"><span>Real Wedding Stories</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7A46A]" /></Link></li>
                  <li><Link to="/about" className="hover:text-[#C7A46A] transition-colors flex items-center justify-between group"><span>The CMC Experience</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7A46A]" /></Link></li>
                  <li><Link to="/about" className="hover:text-[#C7A46A] transition-colors flex items-center justify-between group"><span>About Us</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7A46A]" /></Link></li>
                  <li><Link to="/contact" className="hover:text-[#C7A46A] transition-colors text-[#C7A46A] font-medium flex items-center justify-between"><span>Work With Us</span><ArrowUpRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/contact" className="hover:text-[#C7A46A] transition-colors">FAQs</Link></li>
                  <li><Link to="/contact" className="hover:text-[#C7A46A] transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* OUR SERVICES COMPACT 2-COLUMN MINI-GRID */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A46A] block font-bold">
                  OUR SERVICES
                </span>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs font-sans text-[#AFA4AE] font-light">
                  <Link to="/portfolio" className="hover:text-[#F4EFE8] transition-colors">Wedding</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">Baby Shower</Link>
                  <Link to="/couples" className="hover:text-[#F4EFE8] transition-colors">Pre-wedding</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">Maternity</Link>
                  <Link to="/couples" className="hover:text-[#F4EFE8] transition-colors">Engagement</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">New Born</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">Birthday</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">Product Shoot</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">Kitty Party</Link>
                  <Link to="/contact" className="hover:text-[#F4EFE8] transition-colors">Corporate</Link>
                </div>
              </div>

            </div>

            {/* ── BLOCK 3 (Right 28% / 3 Cols): Combined Contact, Connect & Crew ── */}
            <div className="lg:col-span-3 space-y-5">
              
              {/* Contact & Prominent CTA */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A46A] block font-bold">
                  CONTACT
                </span>
                <div className="text-xs font-mono text-[#F4EFE8]">
                  <p>+91 99999 99999</p>
                  <p><a href="mailto:hello@cmcfilms.studio" className="hover:text-[#C7A46A] transition-colors">hello@cmcfilms.studio</a></p>
                </div>
                <div className="pt-1">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#C7A46A] hover:text-[#F4EFE8] transition-colors border-b border-[#C7A46A] pb-0.5"
                  >
                    <span>ENQUIRE / CONTACT US</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Compact Typographic Social Links */}
              <div className="space-y-1.5 pt-2 border-t border-[#F4EFE8]/10">
                <span className="text-[10px] font-mono text-[#C7A46A] uppercase tracking-widest block font-bold">
                  CONNECT
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-[#F4EFE8]">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A46A] transition-colors inline-flex items-center gap-1">Instagram<ArrowUpRight className="w-3 h-3 text-[#C7A46A]" /></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A46A] transition-colors inline-flex items-center gap-1">YouTube<ArrowUpRight className="w-3 h-3 text-[#C7A46A]" /></a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A46A] transition-colors inline-flex items-center gap-1">Facebook<ArrowUpRight className="w-3 h-3 text-[#C7A46A]" /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A46A] transition-colors inline-flex items-center gap-1">LinkedIn<ArrowUpRight className="w-3 h-3 text-[#C7A46A]" /></a>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7A46A] transition-colors inline-flex items-center gap-1 text-emerald-400 font-semibold"><WhatsAppIcon className="w-3.5 h-3.5" />WhatsApp Direct<ArrowUpRight className="w-3 h-3" /></a>
                </div>
              </div>

              {/* Compact Join Our Crew & Email Field */}
              <div className="space-y-2 pt-2 border-t border-[#F4EFE8]/10">
                <span className="text-[10px] font-mono text-[#C7A46A] uppercase tracking-widest block font-bold">
                  JOIN OUR CREW
                </span>
                <p className="text-[11px] text-[#AFA4AE] font-sans font-light leading-snug">
                  We’re seeking passionate cinematographers, editors &amp; storytellers.
                </p>
                <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#F4EFE8]/30 focus-within:border-[#C7A46A] transition-colors pb-0.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-[#F4EFE8] placeholder-[#AFA4AE]/60 focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="text-[#C7A46A] hover:text-[#F4EFE8] transition-colors p-1 cursor-pointer"
                  >
                    {subscribed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>

        {/* ── COMPACT FOOTER BOTTOM BAR ── */}
        <div className="relative z-10 pt-6 pb-2 px-6 sm:px-10 md:px-12 lg:px-16 max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#AFA4AE] font-mono font-light">
          
          {/* Left: Identifier & Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span className="text-[#C7A46A] font-semibold">
              [ FOOTER 04 / COMPACT CINEMATIC EDITORIAL EDITION ]
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>© 2008–2026 CMC Films Studio by Sahil Sharma. Award-winning wedding photography &amp; films, Jaipur, Delhi NCR &amp; worldwide.</span>
          </div>

          {/* Right: Privacy, Terms & Integrated Back To Top */}
          <div className="flex items-center gap-4 shrink-0 text-[#F4EFE8]">
            <Link to="/contact" className="hover:text-[#C7A46A] transition-colors">Privacy</Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-[#C7A46A] transition-colors">Terms</Link>
            <span className="text-white/20">•</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group inline-flex items-center gap-1 hover:text-[#C7A46A] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C7A46A] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
