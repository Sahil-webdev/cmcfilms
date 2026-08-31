import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.png";
import coastal from "@/assets/coastal.jpg";

// Custom SVG for WhatsApp Icon
function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

// ── Fluid Sculpted Top Contour Transition SVG ──
function SculptedTopContour() {
  return (
    <div className="relative w-full overflow-hidden leading-none pointer-events-none -mt-1 select-none z-20">
      <svg
        className="relative block w-full h-[60px] sm:h-[100px] md:h-[140px] lg:h-[170px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 C320,160 640,10 960,110 C1200,185 1360,50 1440,65 L1440,200 L0,200 Z"
          fill="#32174D"
          opacity="0.3"
        />
        <path
          d="M0,110 C280,30 580,170 880,85 C1180,0 1340,140 1440,105 L1440,200 L0,200 Z"
          fill="#180F22"
          opacity="0.7"
        />
        <path
          d="M0,60 C380,170 700,40 1020,135 C1260,210 1380,80 1440,95 L1440,200 L0,200 Z"
          fill="#24132D"
        />
        {/* Delicate Champagne Gold Top Contour Line */}
        <path
          d="M0,60 C380,170 700,40 1020,135 C1260,210 1380,80 1440,95"
          fill="none"
          stroke="#C9A46A"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export function FooterOption2() {
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
    <footer className="relative bg-[#F3F0EA] text-[#F5F0E8] font-sans selection:bg-[#C9A46A] selection:text-[#180F22] overflow-hidden">
      
      {/* ── TOP CREATIVE SCULPTED CONTOUR ── */}
      <SculptedTopContour />

      {/* ── MAIN DEEP WINE PLUM CONTAINER ── */}
      <div className="relative bg-[#24132D] pt-8 md:pt-16 pb-12 overflow-hidden border-t border-white/5">

        {/* ── OVERSIZED BACKGROUND WATERMARK TYPOGRAPHY ── */}
        <div
          className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center text-[clamp(7rem,20vw,240px)] font-editorial font-normal leading-none text-[#8D79A8]/[0.05] select-none tracking-tight whitespace-nowrap z-0"
          aria-hidden="true"
        >
          CMC FILMS
        </div>

        {/* ── SECTION 1 — CREATIVE INTRO & CINEMATIC CTA ── */}
        <div className="relative z-10 pt-8 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1600px] mx-auto border-b border-[#F5F0E8]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Elegant CTA */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#C9A46A] block">
                WEDDING PHOTOGRAPHY &amp; CINEMATIC FILMS STUDIO
              </span>

              <h2 className="font-editorial text-[clamp(2.5rem,6.5vw,5.5rem)] font-normal text-[#F5F0E8] leading-[0.95] tracking-tight">
                Let’s turn your moments <br />
                <span className="italic font-light text-[#C9A46A]">into a timeless story.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#B8ACA4] font-sans font-light leading-relaxed max-w-[540px]">
                From weddings to celebrations, we craft photographs and films that feel honest, intimate and unforgettable.
              </p>

              {/* Slim Gold-Accent Outlined Pill CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C9A46A]/60 bg-[#C9A46A]/10 hover:bg-[#C9A46A] text-[#F5F0E8] hover:text-[#180F22] font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg active:scale-95"
                >
                  <span>TELL US YOUR STORY</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9A46A] group-hover:text-[#180F22] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Creative Curved Frame Image Panel */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="relative w-[300px] aspect-[4/5] overflow-hidden rounded-t-[120px] rounded-b-[4px] shadow-2xl border border-[#C9A46A]/30 group">
                <img
                  src={coastal}
                  alt="Editorial couple moment"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24132D]/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-[#C9A46A] uppercase tracking-widest">
                    STORYTELLING IN LIGHT
                  </span>
                  <p className="text-xs text-[#F5F0E8]/90 font-editorial italic mt-1">
                    "Every frame captured forever."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── SECTION 2 — CREATIVE INFORMATION COMPOSITION ── */}
        <div className="relative z-10 py-20 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1600px] mx-auto border-b border-[#F5F0E8]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* COLUMN 1 (Left 4 Cols): Large Brand Presence & Statement */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block transition-opacity hover:opacity-85">
                <img
                  src={logoImg}
                  alt="CMC FILMS - Wedding Storytellers"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]"
                />
              </Link>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#C9A46A] uppercase tracking-widest block font-semibold">
                  Wedding Storytellers
                </span>
                <span className="text-xs font-mono text-[#B8ACA4] block">
                  Jaipur &amp; Delhi NCR, India · Worldwide Destination Coverage
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#B8ACA4] font-sans font-light leading-relaxed max-w-sm">
                Stories captured with emotion, framed with elegance, and remembered for a lifetime. Boutique studio for weddings, couples and fine-art films.
              </p>

              {/* Prominent Contact Block CTA */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9A46A] border-b border-[#C9A46A] pb-1 hover:text-[#F5F0E8] hover:border-[#F5F0E8] transition-colors"
                >
                  <span>ENQUIRE / CONTACT US</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* COLUMN 2 (2 Cols): Explore Links (EVERY SINGLE LINK) */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A46A] block font-bold">
                EXPLORE
              </span>
              <ul className="space-y-2.5 text-xs font-sans text-[#F5F0E8]/85 font-light">
                <li><Link to="/portfolio" className="hover:text-[#C9A46A] transition-colors">Wedding Photography</Link></li>
                <li><Link to="/films" className="hover:text-[#C9A46A] transition-colors">Wedding Films</Link></li>
                <li><Link to="/portfolio" className="hover:text-[#C9A46A] transition-colors">Real Wedding Stories</Link></li>
                <li><Link to="/about" className="hover:text-[#C9A46A] transition-colors">The CMC Experience</Link></li>
                <li><Link to="/about" className="hover:text-[#C9A46A] transition-colors">About Us</Link></li>
                <li>
                  <Link to="/contact" className="hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1 text-[#C9A46A] font-medium">
                    <span>Work With Us</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li><Link to="/contact" className="hover:text-[#C9A46A] transition-colors">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-[#C9A46A] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* COLUMN 3 (3 Cols): Our Services (EVERY SINGLE SERVICE) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A46A] block font-bold">
                OUR SERVICES
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-sans text-[#B8ACA4] font-light">
                <Link to="/portfolio" className="hover:text-[#F5F0E8] transition-colors">Wedding</Link>
                <Link to="/couples" className="hover:text-[#F5F0E8] transition-colors">Pre-wedding</Link>
                <Link to="/couples" className="hover:text-[#F5F0E8] transition-colors">Engagement</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Baby Shower</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Maternity Shoot</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">New Born Baby</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Birthday Party</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Kitty Party</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Product Shoot</Link>
                <Link to="/contact" className="hover:text-[#F5F0E8] transition-colors">Corporate</Link>
              </div>
            </div>

            {/* COLUMN 4 (3 Cols): Join Our Crew & Connect */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Join Our Crew Newsletter */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A46A] block font-bold">
                  JOIN OUR CREW
                </span>
                <p className="text-xs text-[#B8ACA4] font-sans font-light leading-relaxed">
                  We’re always looking for passionate cinematographers, editors and storytellers to create meaningful work with us.
                </p>
                <form onSubmit={handleSubscribe} className="flex items-center bg-[#180F22]/80 border border-[#F5F0E8]/20 focus-within:border-[#C9A46A] rounded-[2px] px-3 py-1.5 transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-[#F5F0E8] placeholder-[#B8ACA4]/60 focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="text-[#C9A46A] hover:text-[#F5F0E8] transition-colors p-1 cursor-pointer"
                  >
                    {subscribed ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
                {subscribed && (
                  <span className="text-[11px] font-mono text-emerald-400 block">
                    Thank you. We'll be in touch soon!
                  </span>
                )}
              </div>

              {/* Refined Connect / Social Links */}
              <div className="space-y-3 pt-2 border-t border-[#F5F0E8]/10">
                <span className="text-[10px] font-mono text-[#C9A46A] uppercase tracking-widest block font-bold">
                  CONNECT WITH US
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#F5F0E8]">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1">
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C9A46A]" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1">
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C9A46A]" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1">
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C9A46A]" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C9A46A]" />
                  </a>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1 text-emerald-400 font-semibold">
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── SECTION 3 — REFINED LEGAL BOTTOM BAR & CREATIVE BACK-TO-TOP ── */}
        <div className="relative z-10 pt-8 pb-4 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#B8ACA4] font-mono font-light">
          
          {/* Left: Footer Design Identifier & Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-center md:text-left">
            <span className="text-[#C9A46A] font-semibold tracking-wider">
              [ FOOTER 02 / CREATIVE CINEMATIC CURVED SCULPT EDITION ]
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>© 2008–2026 CMC Films Studio by Sahil Sharma. Award-winning wedding photography &amp; films, Jaipur, Delhi NCR and worldwide.</span>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-[#C9A46A] transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-[#C9A46A] transition-colors">Terms</Link>
          </div>

          {/* Right: Creative Ghost Circle Back-To-Top Control */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5F0E8]/20 hover:border-[#C9A46A] bg-[#180F22] hover:bg-[#C9A46A] text-[#F5F0E8] hover:text-[#180F22] text-xs font-mono transition-all duration-300 cursor-pointer shadow-md shrink-0"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>

    </footer>
  );
}
