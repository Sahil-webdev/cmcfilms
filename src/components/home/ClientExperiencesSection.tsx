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
  {
    id: "r4",
    coupleName: "Devendra & Ishita",
    weddingLocation: "Mehrangarh Fort, Jodhpur",
    rating: 5,
    reviewTitle: "Heirloom photography that we will cherish for life",
    reviewText:
      "From Haldi petal rain to midnight pheras, CMC FILMS treated our wedding rituals with dignity and artistic mastery. Their attention to candid emotions is unparalleled.",
    avatar: story3,
  },
  {
    id: "r5",
    coupleName: "Dhruv & Pippa",
    weddingLocation: "Oleander Farms, Karjat",
    rating: 5,
    reviewTitle: "Handpicked moments of pure intimacy and joy",
    reviewText:
      "Our micro-wedding felt like a warm dream. The team caught every unscripted hug and late-night bonfire jam under the stars. They feel like family to us now!",
    avatar: story2,
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
    <section className="bg-[#0C0D10] text-ivory py-12 md:py-16 overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <SectionLabel>Client Words</SectionLabel>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-light text-ivory">
            Experiences That{" "}
            <em className="font-editorial italic text-gold">Speak for Themselves</em>
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
            className="absolute left-1 md:-left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-gold text-white hover:text-cinema flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-1 md:-right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-gold text-white hover:text-cinema flex items-center justify-center transition-all cursor-pointer shadow-md"
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
                  className={`${isDesktop ? "w-[340px]" : "w-full"} shrink-0 rounded-2xl bg-[#14151C] border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-gold/40 transition-all duration-300`}
                >
                  <div className="space-y-3">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-base font-normal text-ivory leading-snug">
                      "{review.reviewTitle}"
                    </h3>

                    {/* Text Excerpt */}
                    <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed line-clamp-3">
                      {review.reviewText}
                    </p>
                  </div>

                  {/* Profile Footer */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.coupleName}
                      loading="lazy"
                      className="h-9 w-9 rounded-full object-cover border border-gold/40 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-display text-xs sm:text-sm text-ivory font-medium">
                        {review.coupleName}
                      </h4>
                      <p className="text-[10px] font-mono text-ivory/50 truncate">
                        {review.weddingLocation}
                      </p>
                    </div>
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
                  idx === activeDotIndex ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
