import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.png";

// Image Imports for Film Ribbon
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import heroImg from "@/assets/hero.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import featured from "@/assets/featured.jpg";
import cat2 from "@/assets/cat-2.jpg";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

const filmFrames = [
  { id: 1, src: luxuryEditorial, tag: "JAIPUR · 2026", rotate: "-rotate-2", aspect: "aspect-[3/4]" },
  { id: 2, src: heroImg, tag: "UDAIPUR · PALACE", rotate: "rotate-1", aspect: "aspect-[16/10]" },
  { id: 3, src: coastal, tag: "GOA · SUNSET", rotate: "-rotate-1", aspect: "aspect-[3/4]" },
  { id: 4, src: haldi, tag: "HALDI · RITUALS", rotate: "rotate-2", aspect: "aspect-square" },
  { id: 5, src: featured, tag: "WEDDING STORY", rotate: "-rotate-2", aspect: "aspect-[16/10]" },
  { id: 6, src: cat2, tag: "DESERT · JAISALMER", rotate: "rotate-1", aspect: "aspect-[3/4]" },
];

export function FooterOption3() {
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
    <footer className="relative bg-[#1B1121] text-[#F3EEE7] font-sans selection:bg-[#C4A36D] selection:text-[#1B1121] overflow-hidden border-t border-white/10">
      
      {/* ── ACT 01 — PHOTOGRAPHIC CINEMATIC FILM RIBBON (Top Transition) ── */}
      <div className="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-[#25152D] to-[#1B1121] border-b border-[#F3EEE7]/10">
        
        {/* Top Minimal Label */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 flex justify-between items-center mb-6 text-xs font-mono text-[#C4A36D] uppercase tracking-[0.25em]">
          <span>CINEMATIC ARCHIVE RIBBON</span>
          <span>SELECT FRAMES · 2026</span>
        </div>

        {/* Continuous Flowing Film Ribbon (6 Frames across the screen) */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-6 sm:px-12 pb-4 scroll-smooth">
          {filmFrames.map((frame) => (
            <div
              key={frame.id}
              className={`relative shrink-0 w-[220px] sm:w-[280px] md:w-[320px] ${frame.aspect} overflow-hidden rounded-[2px] border border-[#F3EEE7]/30 shadow-2xl bg-[#25152D] transform ${frame.rotate} transition-all duration-500 hover:scale-[1.03] hover:rotate-0 hover:z-30 hover:border-[#C4A36D] cursor-pointer group`}
            >
              <img
                src={frame.src}
                alt={frame.tag}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-[#C4A36D] uppercase tracking-widest">
                  {frame.tag}
                </span>
                <span className="text-xs font-mono text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW STORY ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ACT 02 — PRIMARY FOOTER CONTENT (Asymmetric 45/55 Layout) ── */}
      <div className="relative z-10 py-20 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1600px] mx-auto border-b border-[#F3EEE7]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT BRAND AREA (45% / 5 Cols): Logo, Statement & Contact CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#C4A36D] uppercase tracking-[0.25em] block">
                WEDDING STORYTELLERS
              </span>
              <Link to="/" className="inline-block transition-opacity hover:opacity-85">
                <img
                  src={logoImg}
                  alt="CMC FILMS - Wedding Storytellers"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]"
                />
              </Link>
            </div>

            {/* Large Editorial Statement */}
            <h2 className="font-editorial text-[clamp(2.4rem,5.5vw,4.5rem)] font-normal text-[#F3EEE7] leading-[1.02] tracking-tight max-w-[620px]">
              We don’t just capture <br />
              how it looked. <br />
              We preserve <em className="italic font-light text-[#C4A36D]">how it felt.</em>
            </h2>

            {/* Brand Meta Information */}
            <div className="space-y-2 text-xs font-mono text-[#AFA4AC] pt-2 border-t border-[#F3EEE7]/10">
              <p className="text-[#F3EEE7]">Wedding Photography &amp; Cinematic Films Studio</p>
              <p>Jaipur &amp; Delhi NCR, India · Worldwide Destination Coverage</p>
              <p className="text-[#C4A36D] pt-1">+91 99999 99999 · hello@cmcfilms.studio</p>
            </div>

            {/* Elegant Text CTA */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#F3EEE7] hover:text-[#C4A36D] transition-colors"
              >
                <span>ENQUIRE / CONTACT US</span>
                <span className="w-12 sm:w-20 h-[1px] bg-[#C4A36D] transition-all duration-300 group-hover:w-28" />
                <ArrowUpRight className="w-4 h-4 text-[#C4A36D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT AREA (55% / 6 Cols): Editorial Matrix */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Top Row: EXPLORE & OUR SERVICES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* EXPLORE (ALL REQUIRED LINKS) */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A36D] block font-bold">
                  EXPLORE
                </span>
                <ul className="space-y-2.5 text-xs font-sans text-[#F3EEE7]/85 font-light">
                  <li><Link to="/portfolio" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>Wedding Photography</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                  <li><Link to="/films" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>Wedding Films</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                  <li><Link to="/portfolio" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>Real Wedding Stories</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                  <li><Link to="/about" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>The CMC Experience</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                  <li><Link to="/about" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>About Us</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                  <li><Link to="/contact" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between text-[#C4A36D]"><span>Work With Us</span><ArrowUpRight className="w-3 h-3" /></Link></li>
                  <li><Link to="/contact" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>FAQs</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                  <li><Link to="/contact" className="hover:text-[#C4A36D] transition-colors flex items-center justify-between group"><span>Contact</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C4A36D]" /></Link></li>
                </ul>
              </div>

              {/* OUR SERVICES (ALL 10 REQUIRED SERVICES) */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A36D] block font-bold">
                  OUR SERVICES
                </span>
                <ul className="space-y-2 text-xs font-sans text-[#AFA4AC] font-light">
                  <li><Link to="/portfolio" className="hover:text-[#F3EEE7] transition-colors">Wedding</Link></li>
                  <li><Link to="/couples" className="hover:text-[#F3EEE7] transition-colors">Pre-wedding</Link></li>
                  <li><Link to="/couples" className="hover:text-[#F3EEE7] transition-colors">Engagement</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">Baby Shower</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">Maternity Shoot</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">New Born Baby Shoot</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">Birthday Party</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">Kitty Party</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">Product Shoot</Link></li>
                  <li><Link to="/contact" className="hover:text-[#F3EEE7] transition-colors">Corporate</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Row: CONNECT & JOIN OUR CREW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#F3EEE7]/10">
              
              {/* CONNECT (TYPOGRAPHIC SOCIAL LINKS) */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A36D] block font-bold">
                  CONNECT
                </span>
                <ul className="space-y-2.5 text-xs font-mono text-[#F3EEE7]">
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A36D] transition-colors flex items-center gap-1">
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C4A36D]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A36D] transition-colors flex items-center gap-1">
                      <span>YouTube</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C4A36D]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A36D] transition-colors flex items-center gap-1">
                      <span>Facebook</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C4A36D]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A36D] transition-colors flex items-center gap-1">
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C4A36D]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A36D] transition-colors flex items-center gap-1 text-emerald-400 font-semibold">
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* JOIN OUR CREW (EDITORIAL EMAIL FIELD) */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A36D] block font-bold">
                  JOIN OUR CREW
                </span>
                <p className="text-xs text-[#AFA4AC] font-sans font-light leading-relaxed">
                  We are constantly seeking passionate cinematographers, editors &amp; storytellers.
                </p>
                <form onSubmit={handleSubscribe} className="pt-2 space-y-2">
                  <div className="flex items-center border-b border-[#F3EEE7]/30 focus-within:border-[#C4A36D] transition-colors pb-1">
                    <input
                      type="email"
                      required
                      placeholder="YOUR EMAIL ADDRESS"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-xs text-[#F3EEE7] placeholder-[#AFA4AC]/60 focus:outline-none font-mono uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="text-[#C4A36D] hover:text-[#F3EEE7] transition-colors p-1 cursor-pointer"
                    >
                      {subscribed ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <ArrowUpRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
                {subscribed && (
                  <span className="text-[11px] font-mono text-emerald-400 block">
                    Thank you. We will be in touch!
                  </span>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── CREATIVE TYPOGRAPHY DIVIDER ── */}
      <div className="relative py-12 text-center border-b border-[#F3EEE7]/10 overflow-hidden select-none">
        <span className="font-editorial text-[clamp(4rem,14vw,180px)] font-normal text-[#6D557A]/15 tracking-tight leading-none uppercase block whitespace-nowrap">
          LOVE, FRAME BY FRAME.
        </span>
      </div>

      {/* ── ACT 03 — SIGNATURE ENDING & MASSIVE BRAND TYPOGRAPHY ── */}
      <div className="relative z-10 py-12 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1600px] mx-auto space-y-8 text-xs text-[#AFA4AC] font-mono font-light">
        
        {/* Top Horizontal Row: Logo, Statement & Back To Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#F3EEE7]/10">
          <div className="flex items-center gap-3">
            <span className="text-[#C4A36D] font-bold text-sm">CMC FILMS</span>
            <span className="text-white/20">•</span>
            <span>FRAME 24 / 24 · JAIPUR · INDIA · EST. 2008</span>
          </div>

          <div className="text-center md:text-right text-[#F3EEE7]">
            WEDDING PHOTOGRAPHY · CINEMATIC FILMS · WORLDWIDE
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F3EEE7] hover:text-[#C4A36D] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#C4A36D] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* MASSIVE BRAND WATERMARK TYPOGRAPHY (160px-260px) */}
        <div className="text-center py-4 select-none">
          <span className="font-editorial text-[clamp(6rem,22vw,260px)] font-normal leading-none text-[#F3EEE7]/[0.08] tracking-tighter uppercase block whitespace-nowrap">
            CMC FILMS
          </span>
        </div>

        {/* Copyright & Privacy Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F3EEE7]/10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="text-[#C4A36D] font-semibold">
              [ FOOTER 03 / CINEMATIC FILM RIBBON EDITION ]
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>© 2008–2026 CMC Films Studio by Sahil Sharma. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[#F3EEE7]">
            <Link to="/contact" className="hover:text-[#C4A36D] transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-[#C4A36D] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
