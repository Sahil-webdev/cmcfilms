import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import featuredImg from "@/assets/featured.jpg";
import coupleImg from "@/assets/couples-hero-custom.jpg";
import { useHeroImages } from "@/hooks/useHeroMedia";

const slideInfo = [
  {
    tag: "LUXURY WEDDING STORYTELLERS",
    title: "Capturing Eternal Love & Royal Heritage",
    subtitle: "Jaipur • Udaipur • International Destinations",
    link: "/films",
    linkText: "Watch Wedding Films",
  },
  {
    tag: "CINEMATIC STORIES",
    title: "Moments Between Seconds, Preserved Forever",
    subtitle: "Real Royal Weddings & Editorial Couple Shoots",
    link: "/wedding-stories",
    linkText: "Read Wedding Stories",
  },
  {
    tag: "EST. WEDDING FILMING STUDIO",
    title: "Crafting Timeless Cinematic Masterpieces",
    subtitle: "Bespoke Photography & Film Production",
    link: "/couples",
    linkText: "Explore Couple Shoots",
  },
];

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

    const timer = window.setInterval(nextSlide, 5500);
    return () => window.clearInterval(timer);
  }, [heroImages.length, isPaused, nextSlide]);

  const currentInfo = slideInfo[activeSlide % slideInfo.length] || slideInfo[0];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-10 w-full h-[100svh] min-h-[640px] max-h-[1080px] overflow-hidden bg-black text-white pt-16 lg:pt-[68px]"
    >
      {/* ── Carousel Images with Ken-Burns Zoom Effect ── */}
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
              className={`h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>
        );
      })}

      {/* ── Main Content Overlay ── */}
      <div className="relative z-20 h-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28 text-center items-center">
        
        {/* Dynamic Badge */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold tracking-widest uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
            <span>{currentInfo.tag}</span>
          </span>
        </div>

        {/* Dynamic Title */}
        <h1
          key={`title-${activeSlide}`}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.15] max-w-5xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] transition-all duration-700"
        >
          {currentInfo.title}
        </h1>

        {/* Dynamic Subtitle */}
        <p
          key={`sub-${activeSlide}`}
          className="mt-3 sm:mt-4 font-sans text-sm sm:text-base lg:text-lg text-white/80 font-light tracking-wide max-w-2xl drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] transition-all duration-700"
        >
          {currentInfo.subtitle}
        </p>

        {/* CTA Action Buttons */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to={currentInfo.link}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#93191E] hover:bg-[#b01f25] text-white text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase shadow-xl hover:shadow-rose-900/50 hover:scale-[1.03] transition-all"
          >
            <span>{currentInfo.linkText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase shadow-lg hover:scale-[1.03] transition-all"
          >
            <span>Book Consultation</span>
          </Link>
        </div>
      </div>

      {/* ── Carousel Left/Right Navigation Arrows ── */}
      {heroImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all hover:scale-110 hidden sm:flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all hover:scale-110 hidden sm:flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </>
      )}

      {/* ── Bottom Slide Progress Indicators / Dots & Counter ── */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/15">
          <span className="text-xs font-mono text-amber-400 font-semibold tracking-widest">
            0{activeSlide + 1}
          </span>

          <div className="flex items-center gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? "w-8 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                    : "w-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono text-white/50 tracking-widest">
            0{heroImages.length}
          </span>
        </div>
      )}
    </section>
  );
}
