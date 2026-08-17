export function HeroMarqueeStrip() {
  const items = [
    "WEDDINGS",
    "CINEMATIC FILMS",
    "JAIPUR",
    "DELHI NCR",
    "WORLDWIDE",
    "SINCE 2008",
    "PRE-WEDDING",
    "UDAIPUR",
    "GOA",
    "LUXURY STORYTELLERS",
    "DUBAI",
  ];

  // Repeat items multiple times so the infinite scroll animation loops seamlessly
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-[#FAF8F5] py-5 sm:py-6 md:py-7 border-y border-[#171512]/15 overflow-hidden select-none pointer-events-none z-10">
      <style>{`
        @keyframes marquee-hero-strip {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-marquee-track {
          animation: marquee-hero-strip 40s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee-track { animation: none; }
        }
      `}</style>

      <div className="flex items-center overflow-hidden">
        <div className="hero-marquee-track flex items-center gap-6 sm:gap-8 whitespace-nowrap">
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#3D3A36]/80 font-medium">
                {item}
              </span>
              <span className="text-[#A67B2E] text-xs font-semibold select-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
