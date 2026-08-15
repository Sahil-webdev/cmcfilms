import { useState, useEffect } from "react";
import featured from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import story1 from "@/assets/story-1.jpg";
import heroImg from "@/assets/hero.jpg";

const heroSlides = [
  { id: "s1", src: featured, alt: "Lakeside palace wedding ceremony at dusk in Udaipur" },
  { id: "s2", src: luxuryEditorial, alt: "Royal bride and groom at sunset in Udaipur palace courtyard" },
  { id: "s3", src: coastal, alt: "Bride and groom walking on beach at sunset" },
  { id: "s4", src: haldi, alt: "Joyful haldi ceremony with yellow marigold petals raining down" },
  { id: "s5", src: story1, alt: "Royal bride in bridal lehenga adjusting her veil" },
  { id: "s6", src: heroImg, alt: "Bride and groom in courtyard at golden hour" },
];

export function FeaturedStory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Slow & Pure Image Fade-In / Fade-Out Loop (6 seconds per photo, 2s slow crossfade)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[65svh] min-h-[400px] md:h-[85svh] md:min-h-[520px] overflow-hidden bg-cinema">
      {/* ── 6 PURE BACKGROUND IMAGES WITH SLOW SILKY FADE-IN / FADE-OUT CROSSFADE (NO TEXT OVERLAY) ── */}
      {heroSlides.map((slide, idx) => (
        <img
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          loading={idx === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {/* Subtle Bottom Shade Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema/40 via-transparent to-transparent pointer-events-none z-10" />

      {/* Minimal 6-Slide Indicator Dots Bar at Bottom */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
