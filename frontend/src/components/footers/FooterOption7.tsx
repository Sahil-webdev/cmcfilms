import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Instagram, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "../BrandLogo";

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
    <footer className="relative bg-[#D4DDD8] text-[#AE171E] font-sans selection:bg-[#AE171E] selection:text-white border-t border-[#AE171E]/20 overflow-hidden">
      
      {/* ── MAIN COMPACT & CLEAN FOOTER CONTAINER ── */}
      <div className="relative z-10 py-10 sm:py-14 px-6 sm:px-10 md:px-14 xl:px-20 max-w-[1750px] mx-auto space-y-10">
        
        {/* Four equal-width columns with consistent spacing on desktop. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 xl:gap-12 items-start">
          
          {/* COL 1 (3 Cols): BRAND IDENTITY & TAGLINE */}
          <div className="space-y-4">
            <BrandLogo
              variant="custom"
              textClassName="text-xl sm:text-2xl font-display font-medium tracking-[0.34em] text-[#AE171E]"
            />

            <p className="text-xs sm:text-sm text-[#AE171E]/90 font-normal leading-relaxed max-w-xs" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Capturing unscripted love stories, genuine emotions, and timeless cinema across India &amp; worldwide.
            </p>

            {/* Clean Inline Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#AE171E]/20 text-[#AE171E] hover:bg-[#AE171E] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#AE171E]/20 text-[#AE171E] hover:bg-[#AE171E] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#AE171E]/20 text-[#AE171E] hover:bg-[#AE171E] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917425940636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#AE171E]/20 text-[#AE171E] hover:bg-[#AE171E] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COL 2 (2 Cols): EXPLORE */}
          <div className="space-y-3">
            <span
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#AE171E] font-bold block mb-3 h-6 flex items-center"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              EXPLORE
            </span>

            <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-[#AE171E]/90" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              <li>
                <Link to="/portfolio" className="hover:underline transition-all inline-block py-0.5">Wedding Stories</Link>
              </li>
              <li>
                <Link to="/films" className="hover:underline transition-all inline-block py-0.5">Wedding Films</Link>
              </li>
              <li>
                <Link to="/couples" className="hover:underline transition-all inline-block py-0.5">Couple Shoots</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline transition-all inline-block py-0.5">About Studio</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:underline transition-all font-medium inline-flex items-center gap-1 py-0.5">
                  <span>Packages</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE171E]" />
                </Link>
              </li>
            </ul>

            <Link
              to="/contact"
              hash="enquiry-form"
              className="inline-flex items-center gap-2 border border-[#AE171E]/45 px-3.5 py-2 text-xs font-medium text-[#AE171E] transition-colors hover:bg-[#AE171E] hover:text-white"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* COL 3 (4 Cols): SERVICES (Single Vertical Column List) */}
          <div className="space-y-3">
            <span
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#AE171E] font-bold block mb-3 h-6 flex items-center"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              SERVICES
            </span>

            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-normal text-[#AE171E]/90" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              <li>
                <Link to="/packages" className="hover:underline transition-all inline-block py-0.5">Wedding Photography</Link>
              </li>
              <li>
                <Link to="/couples" className="hover:underline transition-all inline-block py-0.5">Pre-Wedding Photography</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:underline transition-all inline-block py-0.5">Destination Wedding Photography</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline transition-all inline-block py-0.5">Event Photography</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline transition-all inline-block py-0.5">Commercial &amp; Brand Photography</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline transition-all inline-block py-0.5">Fashion &amp; Lifestyle Photography</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline transition-all inline-block py-0.5">Product &amp; Food Photography</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline transition-all inline-block py-0.5">Hotel, Resort &amp; Property Photography</Link>
              </li>
            </ul>
          </div>

          {/* COL 4 (3 Cols): CONTACT & ENQUIRE */}
          <div className="space-y-3">
            <span
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#AE171E] font-bold block mb-3 h-6 flex items-center"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              GET IN TOUCH
            </span>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#AE171E] font-normal leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              {/* Branch 1 (Sukher - Links directly to Urban Square Mall Google Maps) */}
              <a
                href="https://www.google.com/maps/place/Urban+Square+Mall+Udaipur/@24.6317049,73.7099062,906m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3967e4454c5665ed:0x6ac6da1ef58461b8!2sUrban+Square+Mall+Udaipur!8m2!3d24.6320909!4d73.7126013!16s%2Fg%2F11bzvydvr7!3m5!1s0x3967e4454c5665ed:0x6ac6da1ef58461b8!8m2!3d24.6320909!4d73.7126013!16s%2Fg%2F11bzvydvr7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-1 block group/b1 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#AE171E] group-hover/b1:underline">
                  <MapPin className="w-3.5 h-3.5 text-[#AE171E] shrink-0" />
                  <span>BRANCH 1</span>
                </div>
                <p className="pl-5 text-[#AE171E]/90 text-xs leading-normal group-hover/b1:underline">
                  Urban Square Mall, Sukher, Udaipur, Rajasthan – 313001
                </p>
              </a>

              {/* Branch 2 (Fatehnagar - Links to Google Maps Search) */}
              <a
                href="https://www.google.com/maps/search/Intali+Road,+Chungi+Naka,+Fatehnagar,+Udaipur,+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-1 pt-0.5 block group/b2 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#AE171E] group-hover/b2:underline">
                  <MapPin className="w-3.5 h-3.5 text-[#AE171E] shrink-0" />
                  <span>BRANCH 2</span>
                </div>
                <p className="pl-5 text-[#AE171E]/90 text-xs leading-normal group-hover/b2:underline">
                  Intali Road, Chungi Naka, Fatehnagar, Udaipur, Rajasthan
                </p>
              </a>

              {/* Contact Info */}
              <div className="pt-2.5 border-t border-[#AE171E]/15 space-y-2">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#AE171E] shrink-0" />
                  <a href="mailto:cmcfilms771@gmail.com" className="hover:underline transition-all">cmcfilms771@gmail.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#AE171E] shrink-0" />
                  <a href="tel:+917425940636" className="hover:underline transition-all">+91 74259 40636</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#AE171E] shrink-0" />
                  <a href="tel:+917014940636" className="hover:underline transition-all">+91 70149 40636</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM CLEAN COPYRIGHT BAR */}
        <div className="pt-4 border-t border-[#AE171E]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-[#AE171E]/80" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          <p>© {new Date().getFullYear()} CMC FILMS. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:underline transition-all">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:underline transition-all">Terms of Service</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
