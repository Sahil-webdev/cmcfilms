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
    <footer className="relative bg-[#BD444C] text-[#FAF8F5] font-sans selection:bg-white selection:text-[#BD444C] border-t border-white/20 overflow-hidden">
      
      {/* ── BACKGROUND BRAND WATERMARK ── */}
      <div className="pointer-events-none select-none absolute -bottom-6 inset-x-0 overflow-hidden opacity-[0.08] z-0 flex items-center justify-center">
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/20 pb-12">
          
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#171717] text-white hover:bg-white hover:text-[#BD444C] text-xs font-mono font-semibold uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Enquire For Your Date</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* MIDDLE ROW: 4-COLUMN STRUCTURED NAVIGATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COL 1 (4 Cols): Contact Info & Studio Location */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FDEBEB] font-bold block">
              STUDIO LOCATION
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Jaipur &amp; Delhi NCR, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:+919999999999" className="hover:text-white transition-colors font-mono">+91 99999 99999</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href="mailto:hello@cmcfilms.studio" className="hover:text-white transition-colors font-mono">hello@cmcfilms.studio</a>
              </div>
            </div>

            {/* Direct WhatsApp Chat Link */}
            <div className="pt-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-xs font-mono font-semibold hover:bg-white hover:text-[#BD444C] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COL 2 (2.5 Cols): Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FDEBEB] font-bold block">
              NAVIGATION
            </span>

            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/85">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Wedding Stories</Link>
              </li>
              <li>
                <Link to="/films" className="hover:text-white transition-colors">Wedding Films</Link>
              </li>
              <li>
                <Link to="/couples" className="hover:text-white transition-colors">Couple Shoots</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* COL 3 (2.5 Cols): Services */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FDEBEB] font-bold block">
              SERVICES
            </span>

            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/85">
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Wedding Films</Link>
              </li>
              <li>
                <Link to="/couples" className="hover:text-white transition-colors">Pre-Wedding Shoots</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Candid Photography</Link>
              </li>
              <li>
                <Link to="/couples" className="hover:text-white transition-colors">Couple Sessions</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Destination Weddings</Link>
              </li>
            </ul>
          </div>

          {/* COL 4 (3 Cols): Newsletter & Social Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FDEBEB] font-bold block">
              STAY CONNECTED
            </span>

            <p className="text-xs text-white/80 font-light leading-relaxed">
              Subscribe to receive wedding inspiration and newly released couple stories.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-white/10 border border-white/25 focus-within:border-white rounded-full px-4 py-2 transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder-white/60 focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="text-white hover:text-[#171717] transition-colors p-1 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-white font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>

            {/* Social Icons Bar */}
            <div className="pt-2 flex items-center gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#BD444C] flex items-center justify-center transition-all cursor-pointer border border-white/20"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#BD444C] flex items-center justify-center transition-all cursor-pointer border border-white/20"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#BD444C] flex items-center justify-center transition-all cursor-pointer border border-white/20"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
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
