import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, MapPin, Phone, Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { studio } from "@/lib/site-data";

// Custom SVG for WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

// ── Multi-Layered Overlapping Organic Wave Top Border SVG ──
function LayeredWaveTopBorder() {
  return (
    <div className="relative w-full overflow-hidden leading-none pointer-events-none -mt-2">
      <svg
        className="relative block w-full h-[90px] sm:h-[135px] md:h-[165px] lg:h-[200px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,110 C320,170 540,50 860,125 C1180,200 1340,75 1440,90 L1440,240 L0,240 Z"
          fill="#8555DF"
          opacity="0.25"
        />
        <path
          d="M0,140 C220,70 500,190 780,105 C1060,20 1300,155 1440,125 L1440,240 L0,240 Z"
          fill="#6737C3"
          opacity="0.45"
        />
        <path
          d="M0,75 C380,190 660,55 940,155 C1220,255 1370,105 1440,140 L1440,240 L0,240 Z"
          fill="#4C239B"
          opacity="0.7"
        />
        <path
          d="M0,125 C260,55 580,175 900,90 C1220,5 1370,140 1440,110 L1440,240 L0,240 Z"
          fill="#38167A"
        />
      </svg>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#FAF8F5] text-white overflow-hidden">
      {/* ── Organic Wave Top Border ── */}
      <LayeredWaveTopBorder />

      {/* ── Main Rich Purple Uncluttered Footer Container ── */}
      <div className="bg-[#38167A] pt-4 md:pt-8 pb-10 px-6 sm:px-12 lg:px-24 border-t border-white/5">
        
        {/* ── SPACIOUS 4-COLUMN UNCLUTTERED LAYOUT (Inspired by Reference) ── */}
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10 pt-4">
          
          {/* ── COLUMN 1: EXPLORE ── */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 font-mono">
              EXPLORE
            </h3>
            <ul className="space-y-3 text-sm text-white/80 font-sans font-light">
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Wedding Photography</Link></li>
              <li><Link to="/films" className="hover:text-orange-400 transition-colors">Wedding Films</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Real Wedding Stories</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">The CMC Experience</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              
              {/* Explicit User Request: "Work With Us" Option */}
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 text-orange-300 font-medium">
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 2: STUDIO ── */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 font-mono">
              STUDIO
            </h3>
            
            <div className="space-y-3 text-sm text-white/80 font-sans font-light leading-relaxed">
              <p className="font-display text-xl text-white font-bold tracking-wider uppercase">
                CMC Films
              </p>
              <p className="text-white/70">
                Jaipur &amp; Delhi NCR, India<br />
                Worldwide Destination Coverage
              </p>
              <p className="text-white/70">
                {studio.phone}<br />
                <a href={`mailto:${studio.email}`} className="text-white hover:text-orange-400 transition-colors underline underline-offset-4">
                  {studio.email}
                </a>
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-white transition-colors border-b border-orange-400/50 pb-0.5"
                >
                  <span>Enquire / Contact us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3: CONNECT ── */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 font-mono">
              CONNECT
            </h3>
            <ul className="space-y-3 text-sm text-white/80 font-sans font-light">
              <li>
                <a href={studio.socials[0]?.href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href={studio.socials[1]?.href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2 text-emerald-400">
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ── COLUMN 4: WORK WITH US & NEWSLETTER ── */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 font-mono">
              JOIN OUR CREW
            </h3>
            <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
              We are constantly seeking passionate cinematographers, editors &amp; storytellers. Explore opportunities to <strong>Work With Us</strong>.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="pt-2 space-y-2">
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                {subscribed ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>

        </div>

        {/* ── BOTTOM BAR (Reference Inspired: Minimal text + Back to Top square button) ── */}
        <div className="mx-auto max-w-[1500px] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans font-light">
          
          {/* Copyright & Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
            <p>© 2008–{new Date().getFullYear()} CMC Films Studio by Sahil Sharma. Award-winning wedding photography &amp; films, Jaipur, Delhi NCR and worldwide.</p>
            <span className="hidden md:inline text-white/20">•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
          </div>

          {/* Reference-Inspired Back-To-Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="h-10 w-10 border border-white/20 hover:border-orange-400 bg-white/5 hover:bg-orange-500 text-white flex items-center justify-center rounded-lg transition-all duration-300 shrink-0 shadow-md group cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
