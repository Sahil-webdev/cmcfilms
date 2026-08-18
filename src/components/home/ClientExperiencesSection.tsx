import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";

// Image Imports for Couple Avatars
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

interface ClientReview {
  id: string;
  coupleName: string;
  weddingLocation: string;
  rating: number;
  reviewTitle: string;
  reviewText: string;
  avatar: string;
}

const clientReviews: ClientReview[] = [
  {
    id: "r1",
    coupleName: "Saba & Usman",
    weddingLocation: "Destination Nikah, Dubai",
    rating: 5,
    reviewTitle: "Captured moments we didn't even realize were happening!",
    reviewText:
      "Working with CMC FILMS was the single best decision for our Dubai wedding. The team captured quiet glances and sunset tears effortlessly. Our family gets emotional looking at our album.",
    avatar: cat1,
  },
  {
    id: "r2",
    coupleName: "Aditi & Arjun",
    weddingLocation: "City Palace, Jaipur",
    rating: 5,
    reviewTitle: "Pure editorial magic with deep emotional truth",
    reviewText:
      "They didn't just take pictures — they captured the soul of our Rajasthani wedding. Every single frame looks like a still from a high-fashion luxury film.",
    avatar: story1,
  },
  {
    id: "r3",
    coupleName: "Aneesh & Maitri",
    weddingLocation: "Taj Cidade De Goa",
    rating: 5,
    reviewTitle: "Extremely seamless & comfortable experience",
    reviewText:
      "We are camera-shy, but the team made us feel natural during our coastal sunset shoot. They guided us gently without making anything feel staged. 100% recommended!",
    avatar: cat2,
  },
];

const infiniteReviews = [...clientReviews, ...clientReviews, ...clientReviews];

export function ClientExperiencesSection() {
  const [currentIndex, setCurrentIndex] = useState(clientReviews.length);
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

  // Automatic Step Carousel Timer (3s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (currentIndex >= clientReviews.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(clientReviews.length);
    } else if (currentIndex < clientReviews.length) {
      setIsTransitioning(false);
      setCurrentIndex(clientReviews.length * 2 - 1);
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

  const activeDotIndex = currentIndex % clientReviews.length;

  return (
    <section className="bg-[#9DA1C1] text-[#261E1E] py-12 md:py-16 overflow-hidden border-b border-[#93191E]/15">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#261E1E]">
            Experiences That{" "}
            <em className="font-editorial italic text-[#93191E] font-normal">Speak for Themselves</em>
          </h2>
        </div>

        {/* ── CAROUSEL CONTAINER ── */}
        <div
          className="relative px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-1 md:-left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/70 hover:bg-[#93191E] text-[#93191E] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-1 md:-right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/70 hover:bg-[#93191E] text-[#93191E] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Carousel Sliding Track */}
          <div className="overflow-hidden py-1">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${isDesktop ? "gap-5" : ""} ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  : "transition-none"
              }`}
              style={{
                transform: isDesktop
                  ? `translateX(-${currentIndex * (340 + 20)}px)`
                  : `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {infiniteReviews.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className={`${isDesktop ? "w-[340px]" : "w-full"} shrink-0 rounded-2xl bg-[#FAF8F5] border border-[#93191E]/15 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-[#93191E]/40 transition-all duration-300 gap-4`}
                >
                  <div className="space-y-3">
                    {/* 1. TOP PROFILE HEADER */}
                    <div className="flex items-center gap-3 overflow-hidden">
                      <img
                        src={review.avatar}
                        alt={review.coupleName}
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover border border-[#93191E]/30 shrink-0"
                      />
                      <div className="overflow-hidden">
                        <h4 className="font-display text-sm sm:text-base text-[#261E1E] font-medium leading-tight">
                          {review.coupleName}
                        </h4>
                        <p className="text-[10px] font-mono text-[#261E1E]/70 truncate mt-0.5">
                          {review.weddingLocation}
                        </p>
                      </div>
                    </div>

                    {/* 2. REVIEW TITLE & EXCERPT */}
                    <div className="space-y-2 pt-1">
                      <h3 className="font-display text-base font-normal text-[#261E1E] leading-snug">
                        "{review.reviewTitle}"
                      </h3>

                      <p className="text-xs text-[#261E1E]/80 font-sans font-light leading-relaxed line-clamp-3">
                        {review.reviewText}
                      </p>
                    </div>
                  </div>

                  {/* 3. BOTTOM RIGHT STARS */}
                  <div className="flex justify-end items-center gap-0.5 text-[#93191E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#93191E] text-[#93191E]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {clientReviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(clientReviews.length + idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeDotIndex ? "w-6 bg-[#93191E]" : "w-1.5 bg-[#261E1E]/20"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
