import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.png";
import coastal from "@/assets/coastal.jpg";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

// ── Slanted Sloppy Curved Top Edge SVG (Starts low on Left, Rises UP on Right) ──
function SloppySlantedTopCurve() {
  return (
    <div className="relative w-full overflow-hidden leading-none pointer-events-none -mb-1 select-none z-20">
      <svg
        className="relative block w-full h-[70px] sm:h-[100px] md:h-[130px]"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,95 C450,105 900,45 1440,12 L1440,130 L0,130 Z"
          fill="#1E1225"
        />
        <path
          d="M0,95 C450,105 900,45 1440,12"
          fill="none"
          stroke="#C5A16A"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

export function FooterOption7() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#FAF8F5] font-sans text-[#F4EEE8] selection:bg-[#C5A16A] selection:text-[#1E1225] overflow-hidden">
      
      {/* ── SLANTED SLOPPY TOP EDGE TRANSITION (Low on Left, High / Rising on Right) ── */}
      <div className="relative">
        <SloppySlantedTopCurve />
      </div>

      {/* ── MAIN DARK PLUM CONTAINER (#1E1225) ── */}
      <div className="relative bg-[#1E1225] pt-2 md:pt-6 pb-8 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden">
        
        {/* MAIN ASYMMETRIC GRID CONTENT */}
        <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-10 border-b border-white/5">
          
          {/* ── COLUMN 1 (Left 3 Cols): Logo, Studio Info, Phone & Gold CTA ── */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="inline-block transition-opacity hover:opacity-85">
              <img
                src={logoImg}
                alt="CMC FILMS - Wedding Storytellers"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]"
              />
            </Link>

            <div className="space-y-1 text-xs font-mono text-[#A79EA4]">
              <p className="text-[#F4EEE8] font-semibold">Wedding Photography &amp; Cinematic Films Studio</p>
              <p className="pt-1">Jaipur &amp; Delhi NCR, India</p>
              <p>Worldwide Destination Coverage</p>
            </div>

            <div className="text-xs font-mono text-[#F4EEE8] space-y-0.5 pt-1">
              <p className="text-[#F4EEE8] font-bold">+91 99999 99999</p>
              <p><a href="mailto:hello@cmcfilms.studio" className="hover:text-[#C5A16A] transition-colors">hello@cmcfilms.studio</a></p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#C5A16A] font-bold hover:text-[#F4EEE8] transition-colors"
              >
                <span>ENQUIRE / CONTACT US</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ── VERTICAL LINE DETAIL WITH "EST. 2008" (Divider as shown in image) ── */}
          <div className="hidden lg:flex flex-col items-center justify-center self-stretch px-2 text-[10px] font-mono text-[#A79EA4]/60">
            <div className="h-full w-[1px] bg-white/10 relative my-2">
              <span className="absolute top-1/2 -translate-y-1/2 -left-3 bg-[#1E1225] py-2 tracking-widest rotate-90 block whitespace-nowrap">
                EST. 2008
              </span>
            </div>
          </div>

          {/* ── COLUMN 2 (Center-Left 2.5 Cols): EXPLORE (All 8 Links) ── */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#C5A16A] block font-bold">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#F4EEE8]/85 font-light">
              <li><Link to="/portfolio" className="hover:text-[#C5A16A] transition-colors">Wedding Photography</Link></li>
              <li><Link to="/films" className="hover:text-[#C5A16A] transition-colors">Wedding Films</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C5A16A] transition-colors">Real Wedding Stories</Link></li>
              <li><Link to="/about" className="hover:text-[#C5A16A] transition-colors">The CMC Experience</Link></li>
              <li><Link to="/about" className="hover:text-[#C5A16A] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A16A] transition-colors text-[#C5A16A] font-medium inline-flex items-center gap-1"><span>Work With Us</span></Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A16A] transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A16A] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 3 (Center-Right 3 Cols): SERVICES (Compact 2-Column Grid as in image) ── */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#C5A16A] block font-bold">
              SERVICES
            </span>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs font-sans text-[#A79EA4] font-light">
              <Link to="/portfolio" className="hover:text-[#F4EEE8] transition-colors">Wedding</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">Maternity Shoot</Link>
              <Link to="/couples" className="hover:text-[#F4EEE8] transition-colors">Pre-wedding</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">New Born Baby Shoot</Link>
              <Link to="/couples" className="hover:text-[#F4EEE8] transition-colors">Engagement</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">Birthday Party</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">Baby Shower</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">Kitty Party</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">Product Shoot</Link>
              <Link to="/contact" className="hover:text-[#F4EEE8] transition-colors">Corporate</Link>
            </div>
          </div>

          {/* ── COLUMN 4 (Right 3.5 Cols): Headline, Email, Social & Join Our Crew ── */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Headline & Large Email CTA */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#C5A16A] uppercase tracking-widest block font-bold">
                LET'S CREATE SOMETHING BEAUTIFUL
              </span>
              <a
                href="mailto:hello@cmcfilms.studio"
                className="font-editorial text-xl sm:text-2xl text-[#F4EEE8] hover:text-[#C5A16A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>hello@cmcfilms.studio</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A16A]" />
              </a>
            </div>

            {/* Typographic Social Links */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-[#C5A16A] uppercase tracking-widest block font-bold">
                CONNECT
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-[#F4EEE8]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A16A] transition-colors">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A16A] transition-colors">YouTube</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A16A] transition-colors">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A16A] transition-colors">LinkedIn</a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A16A] transition-colors text-emerald-400 font-semibold inline-flex items-center gap-1">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Join Our Crew & Rounded Input Pill Form (As shown in image) */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-[#C5A16A] uppercase tracking-widest block font-bold">
                JOIN OUR CREW
              </span>
              <p className="text-[11px] text-[#A79EA4] font-sans font-light leading-snug">
                We are constantly seeking passionate cinematographers, editors &amp; storytellers.
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center border border-white/20 focus-within:border-[#C5A16A] rounded-full px-4 py-1.5 transition-colors bg-white/5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#F4EEE8] placeholder-[#A79EA4]/60 focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="text-[#C5A16A] hover:text-[#F4EEE8] transition-colors p-1 cursor-pointer"
                >
                  {subscribed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
