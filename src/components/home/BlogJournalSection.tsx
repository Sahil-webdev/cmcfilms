import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Clock, MapPin } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import cat1 from "@/assets/cat-1.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import maternity from "@/assets/maternity.jpg";

interface BlogPost {
  id: string;
  title: string;
  location: string;
  date: string;
  readTime: string;
  tag: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Saba & Usman's Royal Nikah in Dubai",
    location: "Dubai, UAE",
    date: "Jan 2026",
    readTime: "4 min read",
    tag: "Destination Journal",
    excerpt:
      "A three-day grand celebration filled with grace, tradition, quiet elegance, and desert golden hour sunset portraits.",
    image: cat1,
  },
  {
    id: "b2",
    title: "Wedding at Oleander Farms, Karjat",
    location: "Karjat, Maharashtra",
    date: "Feb 2026",
    readTime: "5 min read",
    tag: "Farmhouse Wedding",
    excerpt:
      "An enchanting two-day eco-luxury wedding surrounded by lush greenery, yellow marigold petals & rustic minimalist charm.",
    image: haldi,
  },
  {
    id: "b3",
    title: "Aneesh & Maitri at Taj Cidade De Goa",
    location: "Goa Beachfront",
    date: "Jan 2026",
    readTime: "3 min read",
    tag: "Beach Romance",
    excerpt:
      "Coastal sunset breeze, sea mist romance, and golden glow over the entire shoreline at the iconic Taj Cidade De Goa.",
    image: coastal,
  },
  {
    id: "b4",
    title: "Royal Courtyard Pheras at City Palace, Udaipur",
    location: "Udaipur, Rajasthan",
    date: "Dec 2025",
    readTime: "6 min read",
    tag: "Palace Heritage",
    excerpt:
      "Documenting heritage palace rituals, golden hour vows and lakeside fireworks under starry Rajasthan skies.",
    image: luxuryEditorial,
  },
  {
    id: "b5",
    title: "Maternity Story: Sunset Serenade in Jaipur",
    location: "Jaipur, Rajasthan",
    date: "Feb 2026",
    readTime: "4 min read",
    tag: "Fine Art Maternity",
    excerpt:
      "A fine-art maternity portrait session in golden hour silk gown amid blooming wild meadows.",
    image: maternity,
  },
];

export function BlogJournalSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Automatic Step-by-Step Carousel Loop (2 Second Interval)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 2000); // 2-second automatic step duration requested by user

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section className="bg-[#FAF8F5] py-16 md:py-28 overflow-hidden border-b border-espresso/10">
      <div className="mx-auto max-w-[1700px] px-5 md:px-10">
        
        {/* Section Header (KnotsByAmp Style Title) */}
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionLabel>Shoot Journal &amp; Stories</SectionLabel>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] font-light text-espresso">
            Tying the Knot,{" "}
            <em className="font-editorial italic text-gold border-b-2 border-gold/40 pb-1">
              One Story at a Time
            </em>
          </h2>
          <p className="mt-4 text-sm md:text-base text-taupe font-sans font-light leading-relaxed">
            Behind the lens shoot diaries, destination travel stories &amp; wedding planning journals written by CMC FILMS.
          </p>
        </Reveal>

        {/* ── AUTOMATIC STEP-BY-STEP CAROUSEL CONTAINER (2 Sec Duration) ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Floating Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous story"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-[#0C0D10]/80 hover:bg-[#0C0D10] text-ivory border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next story"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-[#0C0D10]/80 hover:bg-[#0C0D10] text-ivory border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Carousel Track */}
          <div ref={containerRef} className="overflow-hidden py-4 px-2">
            <div
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (380 + 24)}px)`,
              }}
            >
              {blogPosts.map((post, idx) => (
                <div
                  key={post.id}
                  className={`w-[320px] sm:w-[360px] md:w-[380px] shrink-0 group rounded-2xl bg-white border border-espresso/10 p-4 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between ${
                    idx === currentIndex ? "ring-2 ring-gold/40" : ""
                  }`}
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-beige">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      
                      {/* Tag Badge */}
                      <span className="absolute top-3 left-3 label-xs text-gold bg-[#0C0D10]/85 border border-gold/30 px-3 py-1 rounded-full text-[10px] backdrop-blur-md">
                        {post.tag}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="pt-5 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-taupe font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gold shrink-0" />
                          <span>{post.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold shrink-0" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl text-espresso font-normal leading-snug group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-xs md:text-sm text-taupe font-sans font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Row with Read More Button */}
                  <div className="pt-6 mt-4 border-t border-espresso/10 flex items-center justify-between">
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C0D10] text-[#FAF8F3] hover:bg-gold hover:text-cinema text-xs font-mono transition-all duration-300 active:scale-95 shadow-md"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Story</span>
                    </Link>

                    <span className="text-[11px] font-mono text-taupe/60">
                      {post.date}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Carousel Step Progress Dots */}
          <div className="mt-8 flex justify-center items-center gap-2">
            {blogPosts.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-espresso/20 hover:bg-espresso/50"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
