import { useEffect, useState, useCallback } from "react";
import heroImg from "@/assets/hero.jpg";
import featuredImg from "@/assets/featured.jpg";
import coupleImg from "@/assets/couples-hero-custom.jpg";
import { useHeroImages } from "@/hooks/useHeroMedia";

export function Hero() {
  const heroImages = useHeroImages("home", [heroImg, featuredImg, coupleImg]);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    setActiveSlide(0);
  }, [heroImages.join("|")]);

  // Automatic carousel loop timer (4.5s)
  useEffect(() => {
    if (heroImages.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const timer = window.setInterval(nextSlide, 4500);
    return () => window.clearInterval(timer);
  }, [heroImages.length, nextSlide]);

  return (
    <section className="relative z-10 w-full h-[72vh] sm:h-[78vh] md:h-[82vh] min-h-[460px] max-h-[750px] overflow-hidden bg-black">
      {/* ── Well-Proportioned Full-bleed Auto Carousel Images ── */}
      {heroImages.map((image, index) => {
        const isActive = index === activeSlide;
        return (
          <div
            key={image}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={image}
              alt={`CMC FILMS Showcase ${index + 1}`}
              className="h-full w-full object-cover object-[center_30%] transition-transform duration-1000 ease-out"
            />
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
          </div>
        );
      })}

      {/* ── Minimalist Bottom Active Indicators ── */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeSlide
                  ? "w-7 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                  : "w-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
