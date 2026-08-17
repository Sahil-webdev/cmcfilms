import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Instagram, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
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
    <footer className="relative bg-[#4A6254] text-[#FAF8F5] font-sans selection:bg-[#D4C3A3] selection:text-[#25322A] border-t border-white/15 overflow-hidden">
      
      {/* ── BACKGROUND BRAND WATERMARK ── */}
      <div className="pointer-events-none select-none absolute -bottom-6 inset-x-0 overflow-hidden opacity-[0.07] z-0 flex items-center justify-center">
        <span
          className="uppercase tracking-tighter text-white whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 16vw, 15rem)", lineHeight: 0.8, fontFamily: "'Anton', sans-serif" }}
        >
          CMC FILMS
        </span>
      </div>

      {/* ── MAIN FOOTER CONTAINER ── */}
      <div className="relative z-10 pt-16 sm:pt-24 pb-12 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto space-y-16">
        
        {/* TOP ROW: BRAND LOGO + CALL TO ACTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/15 pb-12">
          
          {/* Logo & Tagline */}
          <div className="space-y-3">
            <Link to="/" className="inline-block transition-opacity hover:opacity-85">
              <img
                src={logoImg}
                alt="CMC FILMS - Wedding Storytellers"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]"
              />
            </Link>
            <p className="text-xs sm:text-sm text-white/85 font-light max-w-md">
              Capturing unscripted love stories, genuine emotions, and timeless cinema across India & worldwide destinations.
            </p>
          </div>

          {/* Enquire Action Button */}
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D4C3A3] text-[#25322A] hover:bg-white hover:text-[#4A6254] text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Enquire For Your Date</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* MIDDLE ROW: 4-COLUMN STRUCTURED NAVIGATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COL 1 (3 Cols): EXPLORE */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4C3A3] font-bold block">
              EXPLORE
            </span>

            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/85">
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Wedding Photography</Link>
              </li>
              <li>
                <Link to="/films" className="hover:text-white transition-colors">Wedding Films</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Real Wedding Stories</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">The CMC Experience</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors text-[#D4C3A3] font-medium inline-flex items-center gap-1">
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COL 2 (3.5 Cols): OUR SERVICES (2-Column Grid for clean layout) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4C3A3] font-bold block">
              OUR SERVICES
            </span>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-light text-white/85">
              <Link to="/portfolio" className="hover:text-white transition-colors">Wedding</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Maternity Shoot</Link>
              <Link to="/couples" className="hover:text-white transition-colors">Pre-wedding</Link>
              <Link to="/contact" className="hover:text-white transition-colors">New Born Baby Shoot</Link>
              <Link to="/couples" className="hover:text-white transition-colors">Engagement</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Birthday Party</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Baby Shower</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Kitty Party</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Product Shoot</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Corporate</Link>
            </div>
          </div>

          {/* COL 3 (2.5 Cols): STUDIO */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4C3A3] font-bold block">
              STUDIO
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              <p className="font-semibold text-white">CMC Films Studio</p>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4C3A3] shrink-0 mt-0.5" />
                <span>Jaipur &amp; Delhi NCR, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4C3A3] shrink-0" />
                <a href="tel:+919999999999" className="hover:text-[#D4C3A3] transition-colors font-mono">+91 99999 99999</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4C3A3] shrink-0" />
                <a href="mailto:hello@cmcfilms.studio" className="hover:text-[#D4C3A3] transition-colors font-mono">hello@cmcfilms.studio</a>
              </div>
              <div className="pt-1">
                <Link to="/contact" className="text-[#D4C3A3] font-mono text-xs uppercase tracking-wider font-semibold hover:underline inline-flex items-center gap-1">
                  <span>Enquire / Contact us</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* COL 4 (3 Cols): CONNECT & JOIN CREW */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4C3A3] font-bold block">
              CONNECT
            </span>

            <div className="flex flex-col gap-2 text-xs sm:text-sm font-light text-white/85">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D4C3A3]" />
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Youtube className="w-4 h-4 text-[#D4C3A3]" />
                <span>YouTube</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#D4C3A3]" />
                <span>Facebook</span>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-emerald-300 font-mono font-semibold flex items-center gap-2 pt-1">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-white/10 border border-white/20 focus-within:border-[#D4C3A3] rounded-full px-4 py-2 transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-white placeholder-white/50 focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="text-[#D4C3A3] hover:text-white transition-colors p-1 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {subscribed && (
                  <div className="flex items-center gap-1.5 text-xs text-[#D4C3A3] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thank you for subscribing!</span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <p>© {new Date().getFullYear()} CMC FILMS. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
