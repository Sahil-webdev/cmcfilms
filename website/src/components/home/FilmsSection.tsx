import { useState, useRef, useEffect } from "react";
import { Play, X, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import poster from "@/assets/featured.jpg";
import t1 from "@/assets/cat-1.jpg";
import t2 from "@/assets/cat-2.jpg";
import t3 from "@/assets/cat-3.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import heroImg from "@/assets/hero.jpg";

interface MoviePosterFilm {
  id: string;
  title: string;
  subTitle: string;
  posterTitle: string;
  tagline: string;
  location: string;
  year: string;
  duration: string;
  image: string;
}

const posterFilms: MoviePosterFilm[] = [
  {
    id: "f1",
    title: "Ananya & Arjun",
    subTitle: "The Royal Pichola Vows",
    posterTitle: "Deewangi",
    tagline: "A CMC FILMS Film",
    location: "Udaipur, Rajasthan",
    year: "2026",
    duration: "06:12",
    image: t1,
  },
  {
    id: "f2",
    title: "Tara & Nikhil",
    subTitle: "Forest Heritage Symphony",
    posterTitle: "Viggotbagged",
    tagline: "A CMC FILMS Film",
    location: "Jaipur, Rajasthan",
    year: "2026",
    duration: "04:48",
    image: t2,
  },
  {
    id: "f3",
    title: "Saira & Aman",
    subTitle: "Intimate Coastal Romance",
    posterTitle: "The AngLou",
    tagline: "A CMC FILMS Film",
    location: "Goa Coast",
    year: "2025",
    duration: "05:20",
    image: t3,
  },
  {
    id: "f4",
    title: "Meera & Kabir",
    subTitle: "Royal Palace Saga",
    posterTitle: "A Saga in Udaipur",
    tagline: "A CMC FILMS Film",
    location: "Udaipur Palace",
    year: "2026",
    duration: "03:55",
    image: luxuryEditorial,
  },
  {
    id: "f5",
    title: "Riya & Dev",
    subTitle: "Misty Horizon Love",
    posterTitle: "Ishqbaazi",
    tagline: "A CMC FILMS Film",
    location: "Jaisalmer Dunes",
    year: "2026",
    duration: "05:10",
    image: poster,
  },
  {
    id: "f6",
    title: "Kavya & Rohan",
    subTitle: "Sunset Palace Serenade",
    posterTitle: "Noor-E-Ishq",
    tagline: "A CMC FILMS Film",
    location: "Jaipur Heritage",
    year: "2026",
    duration: "04:15",
    image: heroImg,
  },
];

export function FilmsSection() {
  const [activeVideo, setActiveVideo] = useState<MoviePosterFilm | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Infinite seamless Right-to-Left auto swipe every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // When approaching the middle of duplicated array, reset scroll position seamlessly so cards always flow Right-to-Left
        if (scrollLeft >= maxScroll - 350) {
          scrollContainerRef.current.scrollLeft = 0;
          scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#E0CDCD] text-[#171717] py-14 sm:py-20 px-4 sm:px-8 relative overflow-hidden border-b border-[#171717]/10 select-none">
      <div className="max-w-[1700px] mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Title */}
        <Reveal className="text-center space-y-2">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#171717] font-light tracking-tight">
            Films That Let You <em className="font-editorial italic font-normal text-[#5C2325]">Feel It Again.</em>
          </h2>
        </Reveal>

        {/* Poster Slider Carousel Wrapper (Auto-swipes every 4 seconds, pauses on hover) */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Poster Cards Row */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-2 no-bar items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...posterFilms, ...posterFilms].map((film, idx) => (
              <a
                key={`${film.id}-${idx}`}
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[260px] sm:w-[300px] md:w-[320px] shrink-0 flex flex-col items-center gap-3.5 group/card cursor-pointer"
              >
                {/* Movie Poster Card */}
                <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-black/40 shadow-xl border border-white/20 transition-all duration-500 group-hover/card:shadow-2xl group-hover/card:scale-[1.02]">
                  {/* Poster Background Image */}
                  <img
                    src={film.image}
                    alt={film.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover/card:scale-105"
                  />
                  
                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                  {/* Poster Title (Positioned at Bottom of Card) */}
                  <div className="absolute bottom-5 sm:bottom-6 inset-x-4 text-center z-10">
                    <h3 className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-white font-normal drop-shadow-lg tracking-wide">
                      {film.posterTitle}
                    </h3>
                  </div>
                </div>

                {/* Bottom Dark Pill Button "Watch Film" (Exact Match to Screenshot) */}
                <span
                  className="bg-[#33302C] group-hover/card:bg-[#171717] text-white font-poppins text-xs font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block"
                >
                  Watch Film
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ── 4K Cinema Video Player Modal ── */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-in fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-[#171717] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/15 bg-[#171717] px-6 py-4">
              <div>
                <span className="text-[10px] font-mono text-[#C47A65] uppercase font-bold tracking-widest">
                  CMC FILMS 4K CINEMA
                </span>
                <h3 className="font-poppins text-lg sm:text-xl text-white font-semibold">
                  {activeVideo.title} — {activeVideo.subTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Element */}
            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
                src="/hero-bg.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
