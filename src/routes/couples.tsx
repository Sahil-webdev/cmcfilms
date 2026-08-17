import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, X } from "lucide-react";

// Image Imports
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import coastal from "@/assets/coastal.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import heroImg from "@/assets/hero.jpg";
import haldi from "@/assets/haldi.jpg";
import featured from "@/assets/featured.jpg";

const title = "Couple Shoots & Pre-Weddings — CMC FILMS";
const description =
  "Stories of two people, photographed as they are. Real couple shoots, pre-wedding sessions & editorial love stories by CMC FILMS.";

export const Route = createFileRoute("/couples")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/couples" },
    ],
    links: [{ rel: "canonical", href: "/couples" }],
  }),
  component: CoupleShootsPage,
});

export interface CoupleStoryItem {
  id: string;
  couple: string;
  location: string;
  city: "Jaipur" | "Udaipur" | "Goa" | "Mumbai" | "International";
  shootType: "Pre-Wedding" | "Engagement" | "Couple Session" | "Post-Wedding";
  year: string;
  heroImage: string;
  supportingImage: string;
  galleryImages: string[];
  introText: string;
  credits: {
    location: string;
    photography: string;
    film: string;
    styling: string;
    year: string;
  };
}

const coupleStoriesList: CoupleStoryItem[] = [
  {
    id: "cs-01",
    couple: "Aarav & Meera",
    location: "Jaipur, Rajasthan",
    city: "Jaipur",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: luxuryEditorial,
    supportingImage: heroImg,
    galleryImages: [featured, cat2, haldi, story1, story3, coastal],
    introText:
      "Aarav and Meera wanted nothing elaborate. Just Jaipur before the streets became busy, some winter dawn light, and enough time to forget about the camera. We spent hours walking through Amer and calm haveli courtyards as early sun touched pink stone walls.",
    credits: {
      location: "Amer & City Palace, Jaipur",
      photography: "Sahil Sharma & Team",
      film: "CMC Cinematic Archive",
      styling: "Personal Wardrobe",
      year: "2026",
    },
  },
  {
    id: "cs-02",
    couple: "Riya & Kabir",
    location: "Udaipur, Rajasthan",
    city: "Udaipur",
    shootType: "Couple Session",
    year: "2026",
    heroImage: heroImg,
    supportingImage: featured,
    galleryImages: [cat1, story2, coastal, luxuryEditorial, haldi],
    introText:
      "Riya and Kabir shared ten years of memories before stepping onto a wooden lakeboat in Udaipur. As dusk descended over the Aravalli hills, mirror reflections on Lake Pichola created an unmatched quiet harmony.",
    credits: {
      location: "Lake Pichola & Ghats, Udaipur",
      photography: "Sahil Sharma",
      film: "CMC Studio",
      styling: "Minimal Linen",
      year: "2026",
    },
  },
  {
    id: "cs-03",
    couple: "Ishita & Arjun",
    location: "Goa Beachfront",
    city: "Goa",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: coastal,
    supportingImage: cat1,
    galleryImages: [story3, haldi, cat2, heroImg],
    introText:
      "Two weeks after their celebration, Ishita and Arjun escaped to southern Goa shores. No schedules, no heavy outfits — just barefoot ocean walks as warm sea breeze and evening waves rustled beside them.",
    credits: {
      location: "South Goa Coastline",
      photography: "CMC Films",
      film: "Cinematic Reel",
      styling: "Casual Resort",
      year: "2026",
    },
  },
  {
    id: "cs-04",
    couple: "Saba & Usman",
    location: "Dubai Desert, UAE",
    city: "International",
    shootType: "Pre-Wedding",
    year: "2025",
    heroImage: cat1,
    supportingImage: cat3,
    galleryImages: [luxuryEditorial, cat2, story2, coastal],
    introText:
      "Standing amidst endless wind-swept Lahbab desert dunes as sunset painted the horizon in soft rose gold tones. The vast open dunes allowed them to feel like the only two souls on earth.",
    credits: {
      location: "Lahbab Desert, Dubai",
      photography: "Sahil Sharma",
      film: "CMC Films",
      styling: "Flowing Silk",
      year: "2025",
    },
  },
  {
    id: "cs-05",
    couple: "Neha & Kunal",
    location: "Manali, Himachal Pradesh",
    city: "International",
    shootType: "Post-Wedding",
    year: "2025",
    heroImage: cat3,
    supportingImage: story2,
    galleryImages: [cat2, haldi, heroImg, coastal],
    introText:
      "Quiet mountain trails surrounded by towering pine trees and soft morning mist. High elevation pine forests gave them a calm, intimate canopy far away from urban noise.",
    credits: {
      location: "Solang & Pine Forest, Manali",
      photography: "CMC Studio",
      film: "CMC Films",
      styling: "Winter Knits",
      year: "2025",
    },
  },
];

export function CoupleShootsPage() {
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>("All");
  const [activeStoryModal, setActiveStoryModal] = useState<CoupleStoryItem | null>(null);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<string | null>(null);

  const featuredCouple = coupleStoriesList[0];

  const collagePhotos = [
    { src: story1, title: "Celebration Dance", alt: "Couple dancing" },
    { src: heroImg, title: "Golden Hour Romance", alt: "Couple romantic veil moment" },
    { src: haldi, title: "Joyful Haldi Vows", alt: "Haldi ceremony portrait" },
    { src: cat2, title: "Confetti Celebration", alt: "Group celebration" },
    { src: cat3, title: "Quiet Companionship", alt: "Outdoor bride portrait" },
    { src: luxuryEditorial, title: "Royal Couple Portrait", alt: "Luxury bridal close up" },
    { src: coastal, title: "Tropical Palms", alt: "Goa beach couple shoot" },
    { src: story2, title: "Heritage Details", alt: "Bridal outfit architecture" },
    { src: cat1, title: "Desert Sunset", alt: "Dubai pre-wedding" },
  ];

  const filteredStories = useMemo(() => {
    if (selectedCityFilter === "All") return coupleStoriesList;
    return coupleStoriesList.filter((s) => s.city === selectedCityFilter);
  }, [selectedCityFilter]);

  return (
    <main className="bg-[#F3F0EA] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── 1. SIGNATURE ARTISTIC HERO (Matching Reference Design) ── */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] overflow-hidden">
        
        {/* Background Scrolling Marquee Text */}
        <style>{`
          @keyframes marquee-couples {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-couples-track {
            animation: marquee-couples 120s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-couples-track { animation: none; }
          }
        `}</style>

        <div
          className="pointer-events-none select-none absolute top-4 inset-x-0 overflow-hidden z-0 flex items-center"
          aria-hidden="true"
        >
          <div className="marquee-couples-track flex items-center gap-16 whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="uppercase tracking-tighter text-[#171717]/[0.06]"
                style={{ fontSize: "clamp(6rem, 15vw, 14rem)", lineHeight: 1, fontFamily: "'Anton', sans-serif" }}
              >
                COUPLE SHOOT
              </span>
            ))}
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 md:pt-12">
          
          {/* Left Column: Straight Real Couple Image Frame */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-2xl shadow-2xl bg-white p-3 sm:p-4 rounded-[4px] border border-black/10">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#D8D3CB]">
                <img
                  src={luxuryEditorial}
                  alt="Real Couple Shoot"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Alex Brush Cursive Title & Editorial Copy */}
          <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">
            {/* Cursive Signature Script Title */}
            <div>
              <h1
                className="text-[#E57368] font-normal leading-[0.9] text-6xl sm:text-7xl md:text-8xl lg:text-9xl -ml-2 drop-shadow-sm select-none"
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Couple Shoots
              </h1>
            </div>

            {/* Subheadline */}
            <h2 className="font-sans font-normal text-xl sm:text-2xl md:text-3xl text-[#3D3A36] tracking-tight leading-snug">
              Artistic Storytelling Celebrating YOU!
            </h2>

            {/* Description Copy */}
            <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#68645E] font-sans font-light leading-relaxed">
              <p>
                Welcome to CMC FILMS, where we infuse magic into your wedding memories turning them into timeless tales of love, romance, and companionship.
              </p>
              <p>
                We are an award-winning premium wedding photography and films brand, known for our artistic, professional, and couple-centric approach.
              </p>
              <p>
                We believe in and exist to showcase the most beautiful and heartfelt stories of your life in their true magnificence.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ── 1.5 PHOTO COLLAGE GRID (3x3 Clean Grid Matching Reference Design) ── */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {collagePhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightboxPhoto(photo.src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-md bg-[#D8D3CB] cursor-pointer border border-black/5"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                  {photo.title} ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Photo Collage */}
      {activeLightboxPhoto && (
        <div
          onClick={() => setActiveLightboxPhoto(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-300"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-[4px] shadow-2xl">
            <img
              src={activeLightboxPhoto}
              alt="Enlarged photo"
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setActiveLightboxPhoto(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black p-2 rounded-full text-xs font-mono"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}





      {/* ── 5. EDITORIAL IMAGE BREAK (Natural Visual Pause 2:1 Wide Photo) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB] space-y-4">
        <div className="aspect-[2/1] w-full overflow-hidden bg-[#D8D3CB]">
          <img
            src={featured}
            alt="Editorial image break"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-end">
          <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
            Jaipur · Winter 2026
          </span>
        </div>
      </section>

      {/* ── 6. LOCATION FILTERED STORIES SLIDER CAROUSEL ── */}
      <CoupleStoriesCarouselSection
        stories={filteredStories}
        selectedCityFilter={selectedCityFilter}
        setSelectedCityFilter={setSelectedCityFilter}
        onSelectStory={setActiveStoryModal}
      />



      {/* ── 8. FINAL CTA (Understated 70% Width Layout) ── */}
      <section className="py-32 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 70% Width Landscape Image (8 Cols) */}
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden bg-[#D8D3CB]">
            <img src={coastal} alt="Planning a shoot" className="h-full w-full object-cover" />
          </div>

          {/* Beside It: Planning Text & Enquire Link */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#68645E] block">
              PLANNING A SHOOT?
            </span>
            <p className="font-editorial text-3xl sm:text-4xl text-[#171717] font-normal leading-tight">
              “Let’s make something that feels like you.”
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#171717] border-b border-[#171717] pb-1 hover:text-[#68645E] hover:border-[#68645E] transition-colors"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 9. DEDICATED COUPLE STORY PAGE MODAL ── */}
      {activeStoryModal && (
        <IndividualCoupleStoryModal
          story={activeStoryModal}
          onClose={() => setActiveStoryModal(null)}
          onNextStory={(nextS) => setActiveStoryModal(nextS)}
        />
      )}
    </main>
  );
}

// ── DEDICATED COUPLE STORY EDITORIAL DETAIL MODAL ──
function IndividualCoupleStoryModal({
  story,
  onClose,
  onNextStory,
}: {
  story: CoupleStoryItem;
  onClose: () => void;
  onNextStory: (nextS: CoupleStoryItem) => void;
}) {
  const currentIndex = coupleStoriesList.findIndex((s) => s.id === story.id);
  const nextStory = coupleStoriesList[(currentIndex + 1) % coupleStoriesList.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#F3F0EA] text-[#171717] overflow-y-auto animate-in fade-in duration-300">
      
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F3F0EA]/95 backdrop-blur-md border-b border-[#D8D3CB]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
          CMC FILMS · EDITORIAL STORY
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#171717] hover:text-[#68645E] transition-colors cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Story Opening */}
      <section className="pt-8 pb-16 px-6 max-w-[1440px] mx-auto space-y-8">
        
        {/* Large Hero Image */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#D8D3CB]">
          <img src={story.heroImage} alt={story.couple} className="h-full w-full object-cover" />
        </div>

        {/* Title & Metadata */}
        <div className="space-y-2 border-b border-[#D8D3CB] pb-8">
          <h1 className="font-editorial text-5xl sm:text-7xl text-[#171717] font-normal">
            {story.couple}
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
            {story.location} · {story.shootType} · {story.year}
          </p>
        </div>

        {/* Short Introduction (120-180 words) */}
        <div className="max-w-2xl py-4">
          <p className="font-sans text-base sm:text-lg text-[#171717] font-light leading-relaxed">
            {story.introText}
          </p>
        </div>
      </section>

      {/* Gallery Flow (Disciplined Grid Rhythm) */}
      <section className="py-12 px-6 max-w-[1440px] mx-auto space-y-16">
        
        {/* 1. Full-Width Image */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[0] || story.heroImage} alt="Gallery 1" className="h-full w-full object-cover" />
        </div>

        {/* 2. Two Portraits Side by Side (4:5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
            <img src={story.galleryImages[1] || heroImg} alt="Gallery 2" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
            <img src={story.galleryImages[2] || cat2} alt="Gallery 3" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* 3. One Landscape Image (3:2) */}
        <div className="aspect-[3/2] max-w-4xl mx-auto overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[3] || haldi} alt="Gallery 4" className="h-full w-full object-cover" />
        </div>

        {/* 4. Short Text Passage */}
        <div className="max-w-xl mx-auto text-center py-6">
          <p className="font-editorial text-2xl sm:text-3xl italic text-[#68645E] font-light">
            “No schedules. No rush. Just moments as they unfolded.”
          </p>
        </div>

        {/* 5. One Vertical Image with Generous Whitespace */}
        <div className="max-w-md mx-auto aspect-[3/4] overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[4] || cat1} alt="Gallery 5" className="h-full w-full object-cover" />
        </div>

        {/* 6. Three-Image Sequence */}
        <div className="grid grid-cols-3 gap-4">
          {story.galleryImages.slice(0, 3).map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-[#D8D3CB]">
              <img src={img} alt="Sequence frame" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* 7. Full-Width Closing Image */}
        <div className="aspect-[2/1] w-full overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[5] || coastal} alt="Closing image" className="h-full w-full object-cover" />
        </div>

      </section>

      {/* Credits Section */}
      <section className="py-16 px-6 max-w-[1440px] mx-auto border-t border-b border-[#D8D3CB]">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-xs font-mono uppercase tracking-widest text-[#68645E]">
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Location</span>
            <span>{story.credits.location}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Photography</span>
            <span>{story.credits.photography}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Film</span>
            <span>{story.credits.film}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Styling</span>
            <span>{story.credits.styling}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Year</span>
            <span>{story.credits.year}</span>
          </div>
        </div>
      </section>

      {/* Next Story Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="py-24 px-6 max-w-[1440px] mx-auto cursor-pointer group space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
          NEXT STORY
        </span>

        <div className="aspect-[16/9] w-full overflow-hidden bg-[#D8D3CB]">
          <img
            src={nextStory.heroImage}
            alt={nextStory.couple}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>

        <div className="flex justify-between items-end pt-2">
          <div>
            <h3 className="font-editorial text-4xl text-[#171717] group-hover:text-[#68645E] transition-colors">
              {nextStory.couple}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">
              {nextStory.location}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717]">
            View Story →
          </span>
        </div>
      </section>

    </div>
  );
}

// ── LOCATION FILTERED COUPLE STORIES CAROUSEL SLIDER ────────────────────
function CoupleStoriesCarouselSection({
  stories,
  selectedCityFilter,
  setSelectedCityFilter,
  onSelectStory,
}: {
  stories: CoupleStoryItem[];
  selectedCityFilter: string;
  setSelectedCityFilter: (city: string) => void;
  onSelectStory: (story: CoupleStoryItem) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(stories.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Triple array for seamless infinite sliding
  const infiniteStories = useMemo(
    () => [...stories, ...stories, ...stories],
    [stories]
  );

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(stories.length);
  }, [stories.length, selectedCityFilter]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  // Auto-play interval (2.5 seconds)
  useEffect(() => {
    if (isPaused || stories.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  // Handle seamless infinite reset
  const handleTransitionEnd = () => {
    if (currentIndex >= stories.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(stories.length);
    } else if (currentIndex < stories.length) {
      setIsTransitioning(false);
      setCurrentIndex(stories.length * 2 - 1);
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

  const activeDotIndex = stories.length > 0 ? currentIndex % stories.length : 0;

  return (
    <section className="py-20 md:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] space-y-12 overflow-hidden">
      
      {/* Horizontal Line Filter Bar */}
      <div className="flex flex-wrap items-center gap-8 border-b border-[#D8D3CB] pb-4 text-xs font-mono uppercase tracking-widest">
        {["All", "Jaipur", "Udaipur", "Goa", "Mumbai"].map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setSelectedCityFilter(loc)}
            className={`pb-1 transition-all cursor-pointer ${
              selectedCityFilter === loc
                ? "text-[#171717] border-b-2 border-[#171717] font-semibold"
                : "text-[#68645E] hover:text-[#171717]"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* ── CAROUSEL CONTAINER ── */}
      <div
        className="relative px-2 sm:px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrow Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous story"
          className="absolute left-1 md:-left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#3D3A36]/80 hover:bg-[#3D3A36] text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next story"
          className="absolute right-1 md:-right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#3D3A36]/80 hover:bg-[#3D3A36] text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Sliding Track Container */}
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
                ? `translateX(-${currentIndex * (420 + 32)}px)`
                : `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {infiniteStories.map((story, idx) => (
              <div
                key={`${story.id}-${idx}`}
                onClick={() => onSelectStory(story)}
                className={`${isDesktop ? "w-[420px]" : "w-full"} shrink-0 cursor-pointer group space-y-4`}
              >
                {/* Photo Frame */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#D8D3CB] rounded-[4px] shadow-md border border-black/5">
                  <img
                    src={story.heroImage}
                    alt={story.couple}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Info */}
                <div className="flex justify-between items-end pt-1">
                  <div>
                    <h3 className="font-editorial text-3xl text-[#171717] group-hover:text-[#68645E] transition-colors">
                      {story.couple}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">
                      {story.shootType} · {story.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717] font-semibold group-hover:translate-x-1 transition-transform">
                    View →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation Bar */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {stories.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(stories.length + idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === activeDotIndex ? "w-6 bg-[#3D3A36]" : "w-2 bg-[#171717]/20"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
