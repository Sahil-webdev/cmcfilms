import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import featuredImg from "@/assets/featured.jpg";
import coupleImg from "@/assets/couples-hero-custom.jpg";
import { useHeroImages } from "@/hooks/useHeroMedia";

export function Hero() {
  const heroImages = useHeroImages("home", [heroImg, featuredImg, coupleImg]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((current) => (current - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    setActiveSlide(0);
  }, [heroImages.join("|")]);

  // Autoplay carousel timer
  useEffect(() => {
    if (
      heroImages.length < 2 ||
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const timer = window.setInterval(nextSlide, 5000);
    return () => window.clearInterval(timer);
  }, [heroImages.length, isPaused, nextSlide]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-10 w-full pt-16 lg:pt-[68px] bg-[#FAF8F5]"
    >
      <div className="relative w-full h-[calc(100vh-4rem)] min-h-[480px] max-h-[820px] overflow-hidden bg-black shadow-2xl">
        {/* ── Pure Photo Carousel with Optimal Framing ── */}
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
                className="h-full w-full object-cover object-[center_25%] transition-transform duration-1000 ease-out"
              />
              {/* Subtle Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            </div>
          );
        })}

        {/* ── Minimalist Prev / Next Navigation Arrows ── */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all hover:scale-110 flex items-center justify-center group shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all hover:scale-110 flex items-center justify-center group shadow-lg"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </>
        )}

        {/* ── Minimalist Bottom Dots Indicator ── */}
        {heroImages.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
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
      </div>
    </section>
  );
}
