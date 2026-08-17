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
      <div className="pointer-events-none select-none absolute -bottom-4 inset-x-0 overflow-hidden opacity-[0.05] z-0 flex items-center justify-center">
        <span
          className="uppercase tracking-tighter text-white whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 0.8, fontFamily: "'Anton', sans-serif" }}
        >
          CMC FILMS
        </span>
      </div>

      {/* ── MAIN COMPACT FOOTER CONTAINER ── */}
      <div className="relative z-10 py-8 sm:py-12 px-6 sm:px-12 max-w-[1400px] mx-auto space-y-10">
        
        {/* TOP COMPACT BRAND & ACTION STRIP */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-block transition-opacity hover:opacity-85">
              <img
                src={logoImg}
                alt="CMC FILMS - Wedding Storytellers"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
              />
            </Link>
            <span className="hidden md:inline-block text-sm text-white/80 font-light border-l border-white/20 pl-4">
              Wedding Photography &amp; Cinematic Films • Jaipur &amp; Delhi NCR
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4C3A3] text-[#25322A] hover:bg-white hover:text-[#4A6254] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer self-start sm:self-auto"
          >
            <span>Enquire Date</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MIDDLE ROW: 4-COLUMN NAVIGATION (INCREASED FONT SIZE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* COL 1 (3 Cols): EXPLORE */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#D4C3A3] font-bold block">
              EXPLORE
            </span>

            <ul className="space-y-2 text-sm sm:text-[15px] font-light text-white/90">
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
                  <ArrowUpRight className="w-3.5 h-3.5" />
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

          {/* COL 2 (3.5 Cols): OUR SERVICES */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#D4C3A3] font-bold block">
              OUR SERVICES
            </span>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:text-[15px] font-light text-white/90">
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

          {/* COL 3 (3 Cols): STUDIO */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#D4C3A3] font-bold block">
              STUDIO
            </span>

            <div className="space-y-2 text-sm sm:text-[15px] text-white/90 font-light leading-relaxed">
              <p className="font-semibold text-white text-base">CMC Films Studio</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4C3A3] shrink-0 mt-0.5" />
                <span>Jaipur &amp; Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4C3A3] shrink-0" />
                <a href="tel:+919999999999" className="hover:text-[#D4C3A3] transition-colors font-mono">+91 99999 99999</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4C3A3] shrink-0" />
                <a href="mailto:hello@cmcfilms.studio" className="hover:text-[#D4C3A3] transition-colors font-mono">hello@cmcfilms.studio</a>
              </div>
              <div className="pt-1">
                <Link to="/contact" className="text-[#D4C3A3] font-mono text-xs uppercase tracking-wider font-semibold hover:underline inline-flex items-center gap-1">
                  <span>Enquire / Contact us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* COL 4 (2.5 Cols): CONNECT */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#D4C3A3] font-bold block">
              CONNECT
            </span>

            <div className="flex flex-col gap-2 text-sm sm:text-[15px] font-light text-white/90">
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
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT BAR */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono text-white/80">
          <p>© {new Date().getFullYear()} CMC FILMS. All rights reserved.</p>
          
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
