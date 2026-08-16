import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import cat1 from "@/assets/cat-1.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import maternity from "@/assets/maternity.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Saba & Usman's stunning Nikah in Dubai",
    excerpt:
      "A wedding full of grace, tradition, and quiet elegance—Saba and Usman's three-day celebration in Dubai was the perfect blend of emotion and beauty.",
    image: cat1,
  },
  {
    id: "b2",
    title: "Wedding at Oleander Farms, Karjat",
    excerpt:
      "In the serene setting of Oleander Farms, Karjat, Dhruv & Pippa celebrated their enchanting two-day wedding surrounded by marigold petals & lush greenery.",
    image: haldi,
  },
  {
    id: "b3",
    title: "Aneesh & Maitri, Taj Cidade De Goa",
    excerpt:
      "There's something undeniably magical about a wedding by the sea, especially when the setting sun casts its golden glow over the entire shoreline.",
    image: coastal,
  },
  {
    id: "b4",
    title: "Royal Courtyard Pheras in Udaipur",
    excerpt:
      "A royal heritage celebration at City Palace Udaipur filled with grand architecture, traditional music, and golden hour ceremonies.",
    image: luxuryEditorial,
  },
  {
    id: "b5",
    title: "Fine Art Maternity Session in Jaipur",
    excerpt:
      "Capturing grace, glow and quiet emotion amid blooming wild meadows in golden sunset light.",
    image: maternity,
  },
];

// Duplicate array 3x for seamless 360 infinite loop
const infiniteBlogPosts = [...blogPosts, ...blogPosts, ...blogPosts];

export function BlogJournalSection() {
  const [currentIndex, setCurrentIndex] = useState(blogPosts.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  // Automatic Step Carousel (1.5 Second Slightly Faster Interval)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless Infinite Loop Reset at boundary
  const handleTransitionEnd = () => {
    if (currentIndex >= blogPosts.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(blogPosts.length);
    } else if (currentIndex < blogPosts.length) {
      setIsTransitioning(false);
      setCurrentIndex(blogPosts.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const activeDotIndex = currentIndex % blogPosts.length;

  return (
    <section className="bg-[#FAF8F5] py-16 md:py-24 overflow-hidden relative">

      {/* ── SCROLLING MARQUEE BACKGROUND TEXT (Right to Left, Behind Everything) ── */}
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-rtl 160s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div
        className="pointer-events-none select-none absolute inset-x-0 overflow-hidden z-0 flex items-center"
        style={{ top: 0, height: "35%" }}
        aria-hidden="true"
      >
        <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
          {/* Repeat the phrase enough times so it seamlessly loops — 12 copies (6 visible + 6 hidden) */}
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-black uppercase tracking-tighter text-[#3D3A36]/[0.09]"
              style={{ fontSize: "clamp(7rem, 16vw, 15rem)", lineHeight: 1 }}
            >
              WEDDING STORIES
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Simple Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-espresso leading-tight">
            Tying the Knot,{" "}
            <em className="font-editorial italic border-b border-espresso/30 pb-0.5">
              One Story at a Time
            </em>
          </h2>
        </div>

        {/* ── INFINITE SEAMLESS LOOP CAROUSEL CONTAINER (2-Sec Auto Step) ── */}
        <div
          className="relative px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Navigation Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous story"
          className="absolute left-1 md:-left-2 top-1/3 -translate-y-1/2 z-20 h-9 w-9 md:h-11 md:w-11 rounded-full bg-[#3D3A36]/80 hover:bg-[#3D3A36] text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next story"
          className="absolute right-1 md:-right-2 top-1/3 -translate-y-1/2 z-20 h-9 w-9 md:h-11 md:w-11 rounded-full bg-[#3D3A36]/80 hover:bg-[#3D3A36] text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden py-2">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${isDesktop ? "gap-8" : ""} ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  : "transition-none"
              }`}
              style={{
                transform: isDesktop
                  ? `translateX(-${currentIndex * (360 + 32)}px)`
                  : `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {infiniteBlogPosts.map((post, idx) => (
                <div
                  key={`${post.id}-${idx}`}
                  className={`${isDesktop ? "w-[360px]" : "w-full"} shrink-0 flex flex-col justify-between text-center`}
                >
                  <div>
                    {/* Clean Simple Image Frame */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-beige mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal leading-snug mb-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-taupe font-sans font-light leading-relaxed mb-6 px-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Simple Read More Button */}
                  <div className="pt-2">
                    <Link
                      to="/portfolio"
                      className="inline-block px-7 py-2.5 rounded-full bg-[#3D3A36] text-white hover:bg-espresso text-xs font-mono transition-all duration-300 active:scale-95"
                    >
                      Read More
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Simple Dots Indicator */}
          <div className="mt-10 flex justify-center items-center gap-2">
            {blogPosts.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(blogPosts.length + idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === activeDotIndex ? "w-6 bg-[#3D3A36]" : "w-2 bg-espresso/20"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
