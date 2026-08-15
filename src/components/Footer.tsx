import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { studio } from "@/lib/site-data";

// Custom SVG for WhatsApp Icon (since Lucide doesn't include it by default)
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

// Custom SVG for Pinterest Icon
function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

// ── HERO FEATURE: Multi-Layered Overlapping Organic Wave Top Border SVG (Balanced, Elegant & Realistic Flow) ──
function LayeredWaveTopBorder() {
  return (
    <div className="relative w-full overflow-hidden leading-none pointer-events-none -mt-2">
      <svg
        className="relative block w-full h-[90px] sm:h-[135px] md:h-[175px] lg:h-[210px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Backmost Soft Lavender Wave */}
        <path
          d="M0,110 C320,170 540,50 860,125 C1180,200 1340,75 1440,90 L1440,240 L0,240 Z"
          fill="#6B46AC"
          opacity="0.25"
        />
        {/* Layer 2: Mid-Back Muted Lilac Wave */}
        <path
          d="M0,140 C220,70 500,190 780,105 C1060,20 1300,155 1440,125 L1440,240 L0,240 Z"
          fill="#4E3182"
          opacity="0.45"
        />
        {/* Layer 3: Foreground Soft Violet Wave */}
        <path
          d="M0,75 C380,190 660,55 940,155 C1220,255 1370,105 1440,140 L1440,240 L0,240 Z"
          fill="#371F62"
          opacity="0.7"
        />
        {/* Layer 4: Main Solid Rich Royal Purple Footer Surface Wave */}
        <path
          d="M0,125 C260,55 580,175 900,90 C1220,5 1370,140 1440,110 L1440,240 L0,240 Z"
          fill="#170D2B"
        />
      </svg>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
      {/* ── HERO FEATURE: Layered Organic Wave Top Border ── */}
      <LayeredWaveTopBorder />

      {/* ── Main Rich Royal Purple Footer Container ── */}
      <div className="bg-[#170D2B] pt-4 md:pt-8 pb-10 px-6 sm:px-10 lg:px-16 border-t border-white/5">
        
        {/* ── TOP BRAND IDENTITY BANNER ── */}
        <div className="mx-auto max-w-[1650px] pb-12 mb-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link
              to="/"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.2em] text-white uppercase hover:opacity-90 transition-opacity"
            >
              CMC FILMS
            </Link>
            <p className="font-editorial italic text-base sm:text-lg text-orange-400 font-normal mt-1 tracking-wide">
              Cinematic Wedding Films &amp; Photography • Premium Storytelling
            </p>
          </div>

          {/* Quick Consultation Badge */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-sans font-light text-white/90">
              Bookings Open for {new Date().getFullYear()} &amp; {new Date().getFullYear() + 1} Weddings
            </span>
          </div>
        </div>

        {/* ── 6-COLUMN DESKTOP LAYOUT (2/3 columns on tablet, stacked on mobile) ── */}
        <div className="mx-auto max-w-[1650px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* ── COLUMN 1: About Company & Contact Block ── */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
              About Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans font-light">
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">Our Story</Link></li>
              <li><Link to="/films" className="hover:text-orange-400 transition-colors">Wedding Films</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Photography</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Pre Wedding Shoots</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Destination Weddings</Link></li>
              <li><a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">Careers</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Blog</Link></li>
            </ul>

            {/* Compact Contact Block */}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>+91 98765 43210</span>
              </p>
              <a href="mailto:hello@cmcfilms.in" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>hello@cmcfilms.in</span>
              </a>
            </div>
          </div>

          {/* ── COLUMN 2: Our Services ── */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans font-light">
              <li><Link to="/films" className="hover:text-orange-400 transition-colors">Wedding Cinematography</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Candid Photography</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Traditional Photography</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Pre Wedding Shoots</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Bridal Portraits</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Couple Shoots</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Destination Coverage</Link></li>
              <li><Link to="/films" className="hover:text-orange-400 transition-colors">Reel Editing</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Album Design</Link></li>
              <li><Link to="/films" className="hover:text-orange-400 transition-colors">Event Highlights</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 3: Destinations ── */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
              Destinations
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans font-light">
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Jaipur</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Udaipur</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Jodhpur</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Pushkar</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Delhi</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Goa</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Rishikesh</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Kerala</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Dubai</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">International Shoots</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 4: Packages ── */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
              Packages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans font-light">
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Wedding Packages</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Pre Wedding Packages</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Luxury Couple Shoots</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Bridal Story Packages</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Destination Wedding Plans</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Custom Packages</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 5: Recent Highlights (Blog Style Titles) ── */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
              Recent Highlights
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-sans font-light">
              <li>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors block group">
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    5 Dream Wedding Locations in Rajasthan
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors block group">
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Best Pre Wedding Shoot Ideas
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/films" className="hover:text-orange-400 transition-colors block group">
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    How to Plan a Cinematic Wedding Film
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors block group">
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Top Bridal Photography Trends
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/films" className="hover:text-orange-400 transition-colors block group">
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Moments That Make Wedding Films Emotional
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors block group">
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Why Couples Choose CMC FILMS
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ── COLUMN 6: Let's Stay Connected (Social Badges & Newsletter) ── */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
              Let's Stay Connected
            </h3>

            {/* Social Media Badges (Horizontal Compact Rectangle/Rounded Squares) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={studio.socials[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={studio.socials[1]?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="h-9 w-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Newsletter Subscription Area */}
            <div className="pt-2">
              <p className="text-xs text-white/70 mb-2.5 font-light">
                Subscribe for wedding cinema inspiration &amp; exclusive location guides.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                  {subscribed ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
                </button>
              </form>

              {subscribed && (
                <p className="text-[11px] text-orange-400 mt-1.5 font-mono">
                  Thank you! You're subscribed to CMC FILMS.
                </p>
              )}
            </div>

          </div>

        </div>

        {/* ── BOTTOM STRIP: Copyright, Legal & Payment Trust Badges ── */}
        <div className="mx-auto max-w-[1650px] pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-white/60 font-sans font-light">
          
          {/* Copyright & Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <p>© 2025 CMC FILMS. All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms &amp; Conditions</a>
          </div>

          {/* Payment & Trust Mini Badges (Visa, Mastercard, Amex, UPI) */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/40 mr-1 font-mono uppercase">Accepted:</span>
            <div className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[10px] font-bold text-white tracking-wider">
              VISA
            </div>
            <div className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[10px] font-bold text-white tracking-wider">
              MC
            </div>
            <div className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[10px] font-bold text-white tracking-wider">
              AMEX
            </div>
            <div className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[10px] font-bold text-white tracking-wider">
              UPI
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
