import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useInView } from "@/components/Reveal";
import featured from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import story1 from "@/assets/story-1.jpg";
import heroImg from "@/assets/hero.jpg";

const heroSlides = [
  {
    id: "s1",
    src: featured,
    alt: "Lakeside palace wedding ceremony at dusk in Udaipur",
    couple: "Ananya & Arjun",
    location: "Udaipur, Rajasthan",
    year: "2026",
    title: "A Celebration Written",
    highlight: "in Light.",
  },
  {
    id: "s2",
    src: luxuryEditorial,
    alt: "Royal bride and groom at sunset in Udaipur palace courtyard",
    couple: "Devika & Ranveer",
    location: "City Palace, Udaipur",
    year: "2026",
    title: "Timeless Majesty &",
    highlight: "Royal Vows.",
  },
  {
    id: "s3",
    src: coastal,
    alt: "Bride and groom walking on beach at sunset",
    couple: "Rhea & Kabir",
    location: "Goa Beachfront",
    year: "2026",
    title: "Coastal Sunset &",
    highlight: "Ocean Romance.",
  },
  {
    id: "s4",
    src: haldi,
    alt: "Joyful haldi ceremony with yellow marigold petals raining down",
    couple: "Meera & Siddharth",
    location: "Jaipur Heritage",
    year: "2026",
    title: "Vibrant Colors &",
    highlight: "Pure Joy.",
  },
  {
    id: "s5",
    src: story1,
    alt: "Royal bride in bridal lehenga adjusting her veil",
    couple: "Tara & Vikram",
    location: "Amer Fort, Jaipur",
    year: "2026",
    title: "Elegance Captured",
    highlight: "for Eternity.",
  },
  {
    id: "s6",
    src: heroImg,
    alt: "Bride and groom in courtyard at golden hour",
    couple: "Pooja & Ishaan",
    location: "Ranthambore Fort",
    year: "2026",
    title: "The Golden Hour",
    highlight: "Embrace.",
  },
];

export function FeaturedStory() {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Smooth Fade-In / Fade-Out Slideshow Loop (3.2 second fast comfortable duration)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = heroSlides[currentIndex];

  return (
    <section
      ref={ref}
      className="grain relative h-[65svh] min-h-[420px] md:h-[85svh] md:min-h-[540px] overflow-hidden bg-cinema border-y border-ivory/10"
    >
      {/* ── 6 STACKED BACKGROUND IMAGES WITH SMOOTH FADE-IN / FADE-OUT CROSSFADE ── */}
      {heroSlides.map((slide, idx) => (
        <img
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          loading={idx === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-90 z-0" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema via-cinema/40 to-cinema/30 pointer-events-none z-10" />

      {/* Hero Content Area */}
      <div
        className={`relative z-20 flex h-full flex-col justify-end px-5 pb-8 text-ivory md:px-12 md:pb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
              <span className="label-xs text-gold uppercase tracking-widest">Featured Story</span>
            </div>

            <p className="label-xs mt-3 md:mt-4 text-ivory/70 font-mono transition-all duration-500">
              {activeSlide.couple} — {activeSlide.location} <span className="text-gold">/</span> {activeSlide.year}
            </p>

            <h2 className="mt-2 md:mt-4 max-w-4xl font-display text-[clamp(2.2rem,6.5vw,5.5rem)] leading-[0.98] font-light">
              {activeSlide.title} <em className="font-editorial italic text-gold">{activeSlide.highlight}</em>
            </h2>

            <div className="mt-5 md:mt-8 flex items-center gap-4 md:gap-6">
              <Link
                to="/portfolio"
                className="label-xs border border-ivory/40 bg-ivory/10 px-8 py-4 text-ivory transition-all duration-300 hover:bg-ivory hover:text-cinema hover:border-ivory backdrop-blur-md"
              >
                View Full Story →
              </Link>
              <Link
                to="/films"
                className="label-xs link-underline text-ivory/80 hover:text-gold transition-colors"
              >
                Watch Highlight Film
              </Link>
            </div>
          </div>

          {/* 6-Slide Indicator Dots (Pure Fade Indicator, No Swipe) */}
          <div className="flex items-center gap-2 pb-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
