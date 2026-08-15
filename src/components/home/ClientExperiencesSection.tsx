import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Star, Quote, Heart } from "lucide-react";
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
  weddingDate: string;
  rating: number;
  reviewTitle: string;
  reviewText: string;
  avatar: string;
  tag: string;
}

const clientReviews: ClientReview[] = [
  {
    id: "r1",
    coupleName: "Saba & Usman",
    weddingLocation: "Destination Wedding, Dubai",
    weddingDate: "Jan 2026",
    rating: 5,
    reviewTitle: "Captured moments we didn't even realize were happening!",
    reviewText:
      "Working with CMC FILMS was the single best decision we made for our Dubai wedding. The team was so invisible yet present for every quiet glance, tears during Nikah, and sunset laugh. Our family still gets emotional looking at our wedding photos.",
    avatar: cat1,
    tag: "Dubai Nikah",
  },
  {
    id: "r2",
    coupleName: "Aditi & Arjun",
    weddingLocation: "City Palace, Jaipur",
    weddingDate: "Dec 2025",
    rating: 5,
    reviewTitle: "Pure editorial magic with deep emotional truth",
    reviewText:
      "They didn't just take pictures — they captured the soul of our Rajasthani wedding. Every single frame looks like a still from a high-fashion luxury film. Everyone who sees our album asks who our photographer was!",
    avatar: story1,
    tag: "Heritage Palace",
  },
  {
    id: "r3",
    coupleName: "Aneesh & Maitri",
    weddingLocation: "Taj Cidade De Goa",
    weddingDate: "Jan 2026",
    rating: 5,
    reviewTitle: "Extremely seamless & comfortable experience",
    reviewText:
      "We are both camera-shy people, but the CMC team made us feel so effortless and natural during our coastal sunset shoot. They guided us gently without making anything feel staged. 100% recommended!",
    avatar: cat2,
    tag: "Beach Romance",
  },
  {
    id: "r4",
    coupleName: "Devendra & Ishita",
    weddingLocation: "Mehrangarh Fort, Jodhpur",
    weddingDate: "Nov 2025",
    rating: 5,
    reviewTitle: "Heirloom photography that we will cherish for life",
    reviewText:
      "From our Haldi petal rain to midnight pheras, CMC FILMS treated our wedding rituals with such dignity and artistic mastery. Their attention to lighting and candid emotions is unparalleled.",
    avatar: story3,
    tag: "Royal Fort Pheras",
  },
  {
    id: "r5",
    coupleName: "Dhruv & Pippa",
    weddingLocation: "Oleander Farms, Karjat",
    weddingDate: "Feb 2026",
    rating: 5,
    reviewTitle: "Handpicked moments of pure intimacy and joy",
    reviewText:
      "Our micro-wedding felt like a warm dream. The team caught every unscripted hug, morning tea smile, and late-night guitar jam under the stars. They feel like family to us now!",
    avatar: story2,
    tag: "Eco-Luxury Farm",
  },
];

// Duplicate for infinite carousel loop
const infiniteReviews = [...clientReviews, ...clientReviews, ...clientReviews];

export function ClientExperiencesSection() {
  const [currentIndex, setCurrentIndex] = useState(clientReviews.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic Step Carousel Timer (3 seconds for smooth reading)
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
    <section className="relative bg-[#0C0D10] text-ivory py-20 md:py-32 overflow-hidden border-b border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38167A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 md:px-10">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <SectionLabel>Client Words &amp; Feedback</SectionLabel>
          <h2 className="mt-3 font-display text-[clamp(2.3rem,5.5vw,4.5rem)] leading-tight font-light text-ivory">
            Experiences That{" "}
            <em className="font-editorial italic text-gold border-b-2 border-gold/40 pb-1">
              Speak for Themselves
            </em>
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ivory/70 font-sans font-light leading-relaxed max-w-xl">
            Our couples share honest reviews, real stories, and trusted feedback from their wedding journeys. Your happiness is our highest craft.
          </p>
        </Reveal>

        {/* ── CAROUSEL CONTAINER ── */}
        <div
          className="relative px-2 md:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Navigation Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white/10 hover:bg-gold text-white hover:text-cinema border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white/10 hover:bg-gold text-white hover:text-cinema border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Carousel Sliding Track */}
          <div className="overflow-hidden py-4 px-1">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-6 md:gap-8 ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(-${currentIndex * (380 + 24)}px)`,
              }}
            >
              {infiniteReviews.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="w-[310px] sm:w-[350px] md:w-[380px] shrink-0 group rounded-3xl bg-[#14151C] border border-white/10 p-7 md:p-8 flex flex-col justify-between shadow-lg hover:border-gold/50 hover:shadow-2xl transition-all duration-500 relative"
                >
                  <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />

                  <div className="space-y-4">
                    {/* Top Row: 5 Gold Stars & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gold">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <span className="label-xs text-gold/80 bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded-full text-[10px]">
                        {review.tag}
                      </span>
                    </div>

                    {/* Review Title */}
                    <h3 className="font-display text-lg sm:text-xl text-ivory font-normal leading-snug group-hover:text-gold transition-colors duration-300">
                      "{review.reviewTitle}"
                    </h3>

                    {/* Review Body */}
                    <p className="text-xs sm:text-sm text-ivory/75 font-sans font-light leading-relaxed line-clamp-4">
                      {review.reviewText}
                    </p>
                  </div>

                  {/* Bottom Couple Profile Info */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3.5">
                    {/* Profile Avatar */}
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-gold/40 shrink-0 bg-white/5">
                      <img
                        src={review.avatar}
                        alt={review.coupleName}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="font-display text-base text-ivory font-medium tracking-wide">
                        {review.coupleName}
                      </h4>
                      <p className="text-[11px] font-mono text-ivory/60 truncate">
                        {review.weddingLocation}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Dots & View All CTA Row */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            {/* Carousel Dots */}
            <div className="flex items-center gap-2">
              {clientReviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(clientReviews.length + idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeDotIndex ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* View All Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-cinema hover:bg-white text-xs font-mono font-semibold transition-all duration-300 shadow-lg active:scale-95"
            >
              <span>Share Your Story / Enquire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
