import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, MapPin, Phone, Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { studio } from "@/lib/site-data";
import logoImg from "@/assets/logo.png";

export function FooterLegacy() {
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
      <div className="bg-[#38167A] pt-6 md:pt-10 pb-10 px-6 sm:px-12 lg:px-24 border-t border-white/5">
        <div className="mx-auto max-w-[1650px] pb-8 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
            <img
              src={logoImg}
              alt="CMC FILMS - Wedding Storytellers"
              className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]"
            />
          </Link>
          <span className="text-xs font-mono text-white/70 uppercase tracking-widest">
            Wedding Photography &amp; Cinematic Films Studio
          </span>
        </div>

        <div className="mx-auto max-w-[1650px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10 pt-10">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 font-mono">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans font-light">
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Wedding Photography</Link></li>
              <li><Link to="/films" className="hover:text-orange-400 transition-colors">Wedding Films</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Real Wedding Stories</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans font-light">
          <p>© 2008–{new Date().getFullYear()} CMC Films Studio by Sahil Sharma.</p>
          <button onClick={scrollToTop} className="h-10 w-10 border border-white/20 bg-white/5 flex items-center justify-center rounded-lg">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
