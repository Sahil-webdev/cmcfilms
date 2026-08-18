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
import clientPortrait from "@/assets/client-portrait.jpg";

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
  // SLIDE 1 (Reviews 1..4)
  {
    id: "r1",
    coupleName: "Kanha Vaishanav",
    weddingLocation: "Destination Nikah, Dubai",
    rating: 5,
    reviewTitle: "Impactful, genuine & masterfully crafted wedding memories",
    reviewText:
      "A wedding photographer should highlight their positive qualities, specific examples of their work, and how they impacted the overall wedding experience. It should be detailed, specific, and genuine, reflecting the couple's true feelings about the photographer's work and their contribution to the wedding day.",
    avatar: clientPortrait,
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
    coupleName: "Radhika & Siddharth",
    weddingLocation: "Jagmandir Island Palace, Udaipur",
    rating: 5,
    reviewTitle: "Cinematic grandeur captured with heart and precision",
    reviewText:
      "From our royal sangeet to the intimate pheras at dawn, CMC Films crafted a breathtaking cinematic masterpiece that our whole family treasures forever.",
    avatar: cat3,
  },

  // SLIDE 2 (Reviews 5..8)
  {
    id: "r5",
    coupleName: "Meera & Devansh",
    weddingLocation: "Umaid Bhawan Palace, Jodhpur",
    rating: 5,
    reviewTitle: "Emotional depth and royal visual storytelling",
    reviewText:
      "Their vision, color grading, and candid storytelling are unparalleled. Watching our wedding film gave us goosebumps and happy tears all over again.",
    avatar: story2,
  },
  {
    id: "r6",
    coupleName: "Sanjana & Rohan",
    weddingLocation: "The Leela Palace, Udaipur",
    rating: 5,
    reviewTitle: "Professionalism at its finest",
    reviewText:
      "The crew blended in effortlessly and captured genuine emotions without interrupting a single special ritual. Outstanding dedication and warmth!",
    avatar: story3,
  },
  {
    id: "r7",
    coupleName: "Priyanka & Kabir",
    weddingLocation: "Fairmont, Jaipur",
    rating: 5,
    reviewTitle: "Every picture is a timeless piece of art",
    reviewText:
      "The lighting, composition, and editorial aesthetics in our portrait series exceeded all our highest expectations. Truly an extraordinary experience.",
    avatar: cat1,
  },
  {
    id: "r8",
    coupleName: "Taniya & Vikram",
    weddingLocation: "Ananta Resort, Udaipur",
    rating: 5,
    reviewTitle: "Unforgettable celebration beautifully immortalized",
    reviewText:
      "CMC FILMS turned our dream wedding into an absolute visual film. They captured raw happiness, joyful tears, and all the energetic dancing.",
    avatar: cat2,
  },

  // SLIDE 3 (Reviews 9..12)
  {
    id: "r9",
    coupleName: "Ishita & Varun",
    weddingLocation: "Raffles, Udaipur",
    rating: 5,
    reviewTitle: "Masterful lighting and sunset romance",
    reviewText:
      "Extremely warm, punctual, and creative team. They knew exactly how to capture the golden hour light over the lake for our couple portraits.",
    avatar: story1,
  },
  {
    id: "r10",
    coupleName: "Natasha & Karan",
    weddingLocation: "Alila Fort Bishangarh",
    rating: 5,
    reviewTitle: "High-fashion movie-like wedding trailer",
    reviewText:
      "The editorial aesthetics and movie-like trailer they delivered left all our friends and guests completely speechless. Unbelievable artistry!",
    avatar: story2,
  },
  {
    id: "r11",
    coupleName: "Riya & Shlok",
    weddingLocation: "ITC Grand Bharat, Gurgaon",
    rating: 5,
    reviewTitle: "Attentive to every delicate ritual and detail",
    reviewText:
      "They paid immense attention to every subtle detail — from the intricate bridal lehenga work to the heartfelt laughter of our grandparents.",
    avatar: cat3,
  },
  {
    id: "r12",
    coupleName: "Simran & Samar",
    weddingLocation: "Grand Hyatt, Goa",
    rating: 5,
    reviewTitle: "Best decision for our wedding legacy",
    reviewText:
      "Choosing CMC FILMS was the best investment of our entire wedding planning! The emotion and passion in their work shines through every photograph.",
    avatar: story3,
  },
];

export function ClientExperiencesSection() {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setViewport("desktop");
      } else if (w >= 768) {
        setViewport("tablet");
      } else {
        setViewport("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Items per page based on viewport (Desktop: 4, Tablet: 2, Mobile: 1)
  const itemsPerPage = viewport === "desktop" ? 4 : viewport === "tablet" ? 2 : 1;
  const totalPages = Math.ceil(clientReviews.length / itemsPerPage);

  // Current page state for loop
  const [currentPage, setCurrentPage] = useState(totalPages);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Triple pages for seamless infinite loop
  const infiniteReviews = [...clientReviews, ...clientReviews, ...clientReviews];

  // Automatic Step Carousel Timer (4s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (currentPage >= totalPages * 2) {
      setIsTransitioning(false);
      setCurrentPage(totalPages);
    } else if (currentPage < totalPages) {
      setIsTransitioning(false);
      setCurrentPage(totalPages * 2 - 1);
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
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const activeDotIndex = currentPage % totalPages;

  const getTransformStyle = () => {
    if (viewport === "desktop") {
      // Each page step shifts 4 items + 4 gaps (100% width + 16px)
      return `calc(-${currentPage} * (100% + 16px))`;
    }
    if (viewport === "tablet") {
      return `calc(-${currentPage} * (100% + 16px))`;
    }
    return `calc(-${currentPage} * (100% + 16px))`;
  };

  return (
    <section className="bg-[#9DA1C1] text-[#261E1E] py-12 md:py-16 overflow-hidden border-b border-[#93191E]/15">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#261E1E]">
            Experiences That{" "}
            <em className="font-editorial italic text-[#93191E] font-normal">Speak for Themselves</em>
          </h2>
        </div>

        {/* ── CAROUSEL CONTAINER ── */}
        <div
          className="relative px-6 sm:px-8 md:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous page of reviews"
            className="absolute left-0 md:left-1 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/80 hover:bg-[#93191E] text-[#93191E] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next page of reviews"
            className="absolute right-0 md:right-1 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/80 hover:bg-[#93191E] text-[#93191E] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Carousel Sliding Track */}
          <div className="overflow-hidden py-1">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-4 ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(${getTransformStyle()})`,
              }}
            >
              {infiniteReviews.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="w-full md:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)] shrink-0 rounded-2xl bg-[#FAF8F5] border border-[#93191E]/15 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-[#93191E]/40 transition-all duration-300 gap-4"
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

                    {/* 2. SINGLE UNIFIED REVIEW PARAGRAPH (Serif Display Font) */}
                    <div className="pt-1">
                      <p className="font-display text-sm sm:text-[15px] font-normal text-[#261E1E] leading-relaxed">
                        "{review.reviewText}"
                      </p>
                    </div>
                  </div>

                  {/* 3. BOTTOM RIGHT STARS (Golden #FFC21E) */}
                  <div className="flex justify-end items-center gap-0.5 text-[#FFC21E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFC21E] text-[#FFC21E]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator for Pages */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(totalPages + idx)}
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
