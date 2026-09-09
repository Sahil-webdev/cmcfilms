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
    <section className="relative z-10 w-full h-[85vh] sm:h-[88vh] md:h-[92vh] min-h-[520px] max-h-[900px] overflow-hidden bg-black">
      {/* ── Pure Photo Auto Carousel (No Overlays, Buttons, or Indicators) ── */}
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
    </section>
  );
}
