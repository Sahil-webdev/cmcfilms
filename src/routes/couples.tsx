import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight, ArrowDown, X, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";

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
  "Two people. A little time. A story of their own. A visual showcase of real couple shoots, pre-wedding sessions & post-wedding stories by CMC FILMS.";

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
  title: string;
  location: string;
  city: string;
  country: string;
  shootType: "PRE-WEDDING" | "COUPLE SESSION" | "POST-WEDDING" | "ENGAGEMENT";
  mood: "ROMANTIC" | "PLAYFUL" | "CINEMATIC" | "ADVENTUROUS";
  isInternational?: boolean;
  year: string;
  hook: string;
  heroImage: string;
  secondaryImages: string[];
  candidImages: string[];
  introText: string[];
  placeNote: string;
  quote: string;
  videoUrl?: string;
}

const coupleStoriesList: CoupleStoryItem[] = [
  {
    id: "cs-01",
    couple: "Aarav + Meera",
    title: "A Quiet Winter Morning in Amer",
    location: "Jaipur, Rajasthan",
    city: "JAIPUR",
    country: "INDIA",
    shootType: "PRE-WEDDING",
    mood: "ROMANTIC",
    year: "2026",
    hook: "Old pink haveli lanes, winter dawn light and a day with nowhere else to be.",
    heroImage: luxuryEditorial,
    secondaryImages: [heroImg, haldi, cat2],
    candidImages: [story1, story3, cat3, coastal],
    introText: [
      "They wanted nothing elaborate.",
      "Just Jaipur before the streets became busy, some winter light, and enough time to forget about the camera.",
      "We spent dawn walking together — drinking morning chai from clay cups as early sun touched pink stone walls.",
    ],
    placeNote: "The ancient lanes of Amer allowed the winter morning light to wrap around them with effortless warmth.",
    quote: "We thought we would feel awkward. After ten minutes, it just felt like us.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "cs-02",
    couple: "Riya + Kabir",
    title: "Twilight Water Reflections",
    location: "Udaipur, Rajasthan",
    city: "UDAIPUR",
    country: "INDIA",
    shootType: "COUPLE SESSION",
    mood: "CINEMATIC",
    year: "2026",
    hook: "Wooden boat rides across calm Lake Pichola as golden hour turned into dusk.",
    heroImage: heroImg,
    secondaryImages: [featured, story2, cat1],
    candidImages: [coastal, haldi, cat2, luxuryEditorial],
    introText: [
      "Riya and Kabir shared ten years of city memories before stepping onto a wooden lakeboat.",
      "As dusk descended over Aravalli hills, quiet laughter filled the water.",
    ],
    placeNote: "Lake Pichola offers an unmatched calm where water, stone ghats and sky meet in quiet harmony.",
    quote: "Looking at these photos feels like rewatching our favorite memory in slow motion.",
  },
  {
    id: "cs-03",
    couple: "Ishita + Arjun",
    title: "Barefoot Sunset Vows",
    location: "Goa Beachfront",
    city: "GOA",
    country: "INDIA",
    shootType: "PRE-WEDDING",
    mood: "PLAYFUL",
    year: "2026",
    hook: "Warm ocean sea-breeze, wet sand tracks and spontaneous ocean splashes.",
    heroImage: coastal,
    secondaryImages: [cat1, story3, haldi],
    candidImages: [cat2, story1, heroImg, cat3],
    introText: [
      "Two weeks after their grand celebration, Ishita and Arjun escaped to southern Goa shores.",
      "No schedules, no heavy outfits — just barefoot ocean walks as evening waves rustled beside them.",
    ],
    placeNote: "The secluded palm groves of South Goa gave them space to breathe and reconnect.",
    quote: "The easiest, most fun day we spent together all year.",
  },
  {
    id: "cs-04",
    couple: "Saba + Usman",
    title: "Red Sands Horizon",
    location: "Dubai, UAE",
    city: "DUBAI",
    country: "UAE",
    shootType: "PRE-WEDDING",
    mood: "ADVENTUROUS",
    isInternational: true,
    year: "2025",
    hook: "Wind-swept desert dunes under warm twilight Arabian skies.",
    heroImage: cat1,
    secondaryImages: [luxuryEditorial, cat2, cat3],
    candidImages: [story2, haldi, heroImg, coastal],
    introText: [
      "Standing amidst endless desert dunes as sunset painted the horizon in rose gold tones.",
      "Saba's flowing dress caught the desert breeze in effortless motion.",
    ],
    placeNote: "Lahbab desert dunes offer vast open horizons that make every couple feel like the only two souls on earth.",
    quote: "The desert wind and sunset light made everything feel surreal.",
  },
  {
    id: "cs-05",
    couple: "Neha + Kunal",
    title: "Misty Mountain Pines",
    location: "Manali, Himachal Pradesh",
    city: "MOUNTAINS",
    country: "INDIA",
    shootType: "POST-WEDDING",
    mood: "ROMANTIC",
    year: "2025",
    hook: "Tall pine trees, morning fog and quiet walks in mountain air.",
    heroImage: cat3,
    secondaryImages: [story3, cat2, haldi],
    candidImages: [heroImg, coastal, cat1, luxuryEditorial],
    introText: [
      "Quiet mountain trails surrounded by towering pine trees and soft morning mist.",
    ],
    placeNote: "High elevation mountain valleys provide a calm, intimate canopy far away from urban noise.",
    quote: "Pure silence, green trees and just the two of us.",
  },
];

const moodPanelsData = [
  { mood: "ROMANTIC", couple: "Aarav + Meera", image: luxuryEditorial, hoverImage: heroImg },
  { mood: "PLAYFUL", couple: "Ishita + Arjun", image: coastal, hoverImage: haldi },
  { mood: "CINEMATIC", couple: "Riya + Kabir", image: heroImg, hoverImage: featured },
  { mood: "ADVENTUROUS", couple: "Saba + Usman", image: cat1, hoverImage: cat2 },
];

const locationTilesData = [
  { city: "JAIPUR", count: "12 Stories", image: luxuryEditorial },
  { city: "UDAIPUR", count: "08 Stories", image: heroImg },
  { city: "GOA", count: "15 Stories", image: coastal },
  { city: "MUMBAI", count: "07 Stories", image: story2 },
  { city: "DUBAI", count: "06 Stories", image: cat1 },
  { city: "MOUNTAINS", count: "05 Stories", image: cat3 },
];

export function CoupleShootsPage() {
  const [activeArchiveCategory, setActiveArchiveCategory] = useState("ALL");
  const [activeStoryModal, setActiveStoryModal] = useState<CoupleStoryItem | null>(null);
  const [hoveredMood, setHoveredMood] = useState<string | null>(null);

  const featuredStory = coupleStoriesList[0];

  const filteredArchiveStories = useMemo(() => {
    if (activeArchiveCategory === "ALL") return coupleStoriesList;
    if (activeArchiveCategory === "INTERNATIONAL") return coupleStoriesList.filter((s) => s.isInternational);
    return coupleStoriesList.filter((s) => s.shootType === activeArchiveCategory);
  }, [activeArchiveCategory]);

  return (
    <main className="bg-[#F3EFE7] text-[#181614] font-sans selection:bg-[#E8E0D4] selection:text-[#181614] min-h-screen relative overflow-hidden">
      
      {/* ── 1. HERO WITH MULTIPLE COUPLE PHOTOS (Asymmetric Visual Composition) ── */}
      <section className="relative min-h-[90vh] pt-24 pb-16 px-4 md:px-10 flex flex-col justify-between border-b border-black/10">
        
        {/* Top Header Label */}
        <div className="flex justify-between items-center max-w-[1700px] mx-auto w-full">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A67B2E]">
            COUPLE STORIES
          </span>
          <span className="text-xs font-mono text-[#181614]/50 hidden sm:block">
            CMC FILMS · VISUAL ARCHIVE
          </span>
        </div>

        {/* 5-Photo Layered Composition (Center Photo Dominates) */}
        <div className="my-auto py-10 relative max-w-[1600px] mx-auto w-full flex items-center justify-center">
          
          {/* Photo 1: Dominant Center Vertical Image */}
          <div className="relative z-20 w-[280px] sm:w-[360px] md:w-[420px] aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl bg-[#E8E0D4] border border-black/10 group">
            <img
              src={luxuryEditorial}
              alt="Center couple story"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-mono text-[#A67B2E] uppercase">AARAV + MEERA</span>
              <h2 className="font-display text-2xl font-light">Jaipur · Pre-Wedding</h2>
            </div>
          </div>

          {/* Photo 2: Upper-Left Overlapping Wide Photo */}
          <div className="absolute left-2 sm:left-12 md:left-24 top-4 z-10 w-[200px] sm:w-[280px] aspect-[16/10] overflow-hidden rounded-[2px] shadow-xl border-2 border-[#F3EFE7] hidden sm:block">
            <img src={coastal} alt="Couple in Goa" className="h-full w-full object-cover" />
          </div>

          {/* Photo 3: Right Close-up Portrait */}
          <div className="absolute right-2 sm:right-12 md:right-20 top-16 z-30 w-[160px] sm:w-[220px] aspect-[3/4] overflow-hidden rounded-[2px] shadow-xl border-2 border-[#F3EFE7] hidden sm:block">
            <img src={heroImg} alt="Udaipur couple moment" className="h-full w-full object-cover" />
          </div>

          {/* Photo 4: Bottom Candid Photo */}
          <div className="absolute left-1/4 -bottom-6 z-30 w-36 aspect-square overflow-hidden rounded-[2px] shadow-lg border-2 border-[#F3EFE7] hidden md:block">
            <img src={haldi} alt="Candid couple laugh" className="h-full w-full object-cover" />
          </div>

          {/* Photo 5: Narrow Background Accent Frame */}
          <div className="absolute right-1/4 -bottom-4 z-10 w-44 aspect-[2/3] overflow-hidden rounded-[2px] opacity-40 blur-[1px] hidden lg:block">
            <img src={cat2} alt="Background couple framing" className="h-full w-full object-cover" />
          </div>

        </div>

        {/* Minimal Hero Text & Scroll CTA */}
        <div className="max-w-[1700px] mx-auto w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 text-center sm:text-left">
          <div>
            <p className="font-display text-2xl sm:text-3xl font-light text-[#181614]">
              “Two people. A little time. A story of their own.”
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#181614]/70">
            <span>Explore Shoots</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#A67B2E] animate-bounce" />
          </div>
        </div>

      </section>

      {/* ── 2. IMAGE MOSAIC INTRO (Visual 6-8 Photo Grid) ── */}
      <section className="py-20 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-10">
        <div className="text-center">
          <p className="font-editorial text-2xl sm:text-3xl italic text-[#181614]/80 font-light">
            “No two couples look the same together.”
          </p>
        </div>

        {/* Visual Mosaic (6-8 Photos of Mixed Ratios) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-[3/4] overflow-hidden rounded-[2px] shadow-md">
            <img src={cat2} alt="Mosaic frame 1" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[16/10] md:col-span-2 overflow-hidden rounded-[2px] shadow-md">
            <img src={featured} alt="Mosaic frame 2" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2px] shadow-md">
            <img src={cat3} alt="Mosaic frame 3" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-[2px] shadow-md">
            <img src={story1} alt="Mosaic frame 4" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2px] shadow-md">
            <img src={cat1} alt="Mosaic frame 5" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[16/10] md:col-span-2 overflow-hidden rounded-[2px] shadow-md">
            <img src={story3} alt="Mosaic frame 6" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── 3. FEATURED COUPLE STORY (Multiple Photos From Same Shoot) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-black/10 pb-4">
          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
            FEATURED SHOOT
          </span>
          <span className="text-xs font-mono text-[#181614]/50">MINI PHOTO STORY</span>
        </div>

        {/* Multi-Photo Layout (Left Large Vertical + Right Stacked) */}
        <div
          onClick={() => setActiveStoryModal(featuredStory)}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 cursor-pointer group"
        >
          {/* Left: Large Vertical Couple Photo */}
          <div className="md:col-span-7 aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2px] bg-[#E8E0D4] shadow-xl border border-black/5">
            <img
              src={featuredStory.heroImage}
              alt={featuredStory.couple}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Right: 2 Stacked Photos + Minimal Metadata */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-[2px]">
                <img src={heroImg} alt="Supporting photo 1" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[2px]">
                <img src={haldi} alt="Supporting photo 2" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-black/10">
              <h3 className="font-display text-4xl sm:text-5xl font-light text-[#181614]">
                {featuredStory.couple}
              </h3>
              <p className="text-xs font-mono text-[#A67B2E]">
                {featuredStory.location} · {featuredStory.shootType}
              </p>
              <p className="font-editorial text-lg italic text-[#181614]/80">
                "{featuredStory.hook}"
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#181614] group-hover:text-[#A67B2E] transition-colors">
                  <span>View Their Story</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A67B2E]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. COUPLE STORY FEED (Continuous Multi-Photo Layouts) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-24">
        <div className="border-b border-black/10 pb-4">
          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
            STORY FEED
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-[#181614] mt-1">
            Real Couples. <em className="font-editorial italic text-[#A67B2E]">Real Places.</em>
          </h2>
        </div>

        {/* FEED ITEM 01: Aarav + Meera (1 Large Landscape + 2 Portrait Beneath) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[0])}
          className="space-y-4 cursor-pointer group"
        >
          <div className="aspect-[21/9] w-full overflow-hidden rounded-[2px] bg-[#E8E0D4] shadow-md">
            <img
              src={coupleStoriesList[0].heroImage}
              alt={coupleStoriesList[0].couple}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
              <img src={heroImg} alt="Photo frame 2" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
              <img src={haldi} alt="Photo frame 3" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col justify-end p-2 space-y-2">
              <h3 className="font-display text-3xl font-light">{coupleStoriesList[0].couple}</h3>
              <p className="text-xs font-mono text-[#A67B2E]">{coupleStoriesList[0].location} · {coupleStoriesList[0].shootType}</p>
              <span className="text-xs font-mono font-semibold text-[#181614] group-hover:text-[#A67B2E] transition-colors">View Story →</span>
            </div>
          </div>
        </div>

        {/* FEED ITEM 02: Riya + Kabir (1 Large Portrait + 1 Wide Beside + 1 Close-up) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[1])}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 cursor-pointer group"
        >
          <div className="md:col-span-6 aspect-[3/4] overflow-hidden rounded-[2px] bg-[#E8E0D4]">
            <img src={coupleStoriesList[1].heroImage} alt={coupleStoriesList[1].couple} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="aspect-[16/10] overflow-hidden rounded-[2px]">
                <img src={featured} alt="Wide frame" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square w-36 overflow-hidden rounded-[2px]">
                <img src={cat2} alt="Close-up frame" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-4xl font-light">{coupleStoriesList[1].couple}</h3>
              <p className="text-xs font-mono text-[#A67B2E]">{coupleStoriesList[1].location} · {coupleStoriesList[1].shootType}</p>
              <span className="text-xs font-mono font-semibold text-[#181614] group-hover:text-[#A67B2E] transition-colors">View Story →</span>
            </div>
          </div>
        </div>

        {/* FEED ITEM 03: Ishita + Arjun (2 Equal Verticals + 1 Full Landscape Beneath) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[2])}
          className="space-y-6 cursor-pointer group"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
              <img src={coupleStoriesList[2].heroImage} alt={coupleStoriesList[2].couple} className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
              <img src={cat1} alt="Frame B" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 pt-4">
            <div>
              <h3 className="font-display text-3xl font-light">{coupleStoriesList[2].couple}</h3>
              <p className="text-xs font-mono text-[#A67B2E]">{coupleStoriesList[2].location} · {coupleStoriesList[2].shootType}</p>
            </div>
            <span className="text-xs font-mono font-semibold text-[#181614] group-hover:text-[#A67B2E] transition-colors">View Story →</span>
          </div>
        </div>

      </section>

      {/* ── 5. MOOD PHOTO PANELS (Image-Driven Discovery) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-8">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          EXPLORE MOODS
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {moodPanelsData.map((panel) => {
            const isHovered = hoveredMood === panel.mood;
            return (
              <div
                key={panel.mood}
                onMouseEnter={() => setHoveredMood(panel.mood)}
                onMouseLeave={() => setHoveredMood(null)}
                className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-[#E8E0D4] shadow-md group cursor-pointer"
              >
                <img
                  src={isHovered ? panel.hoverImage : panel.image}
                  alt={panel.mood}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                  <h3 className="font-display text-3xl font-light tracking-wider">
                    {panel.mood}
                  </h3>
                  <span className="text-xs font-mono text-[#A67B2E] mt-1">
                    {panel.couple}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 6. FULL-WIDTH COUPLE GALLERY BREAK (Pure Visual Breathing Moment) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1800px] mx-auto space-y-6">
        <div className="flex justify-between items-center text-xs font-mono text-[#181614]/50">
          <span>CMC FILMS · COUPLE STORIES</span>
          <span>8-FRAME COMPOSITION</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="aspect-[16/10] col-span-2 overflow-hidden rounded-[2px]">
            <img src={luxuryEditorial} alt="Gallery 1" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
            <img src={cat2} alt="Gallery 2" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
            <img src={heroImg} alt="Gallery 3" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-[2px]">
            <img src={haldi} alt="Gallery 4" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
            <img src={cat3} alt="Gallery 5" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[16/10] col-span-2 overflow-hidden rounded-[2px]">
            <img src={coastal} alt="Gallery 6" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── 7. LOCATION COUPLE STORIES (Always Couples In Locations) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-8">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          LOCATION STORIES
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {locationTilesData.map((loc) => (
            <div
              key={loc.city}
              className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-[#E8E0D4] group cursor-pointer shadow-sm"
            >
              <img
                src={loc.image}
                alt={loc.city}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end text-white">
                <span className="font-display text-xl font-light">{loc.city}</span>
                <span className="text-[10px] font-mono text-[#A67B2E]">{loc.count}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. DARK CINEMATIC IMAGE MOMENT (#181614 Warm Charcoal) ── */}
      <section className="py-32 px-6 bg-[#181614] text-[#F3EFE7] border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <div className="flex justify-center items-center gap-6">
            <div className="w-28 sm:w-40 aspect-[3/4] overflow-hidden rounded-[2px] opacity-60 hidden sm:block">
              <img src={cat2} alt="Left framing" className="h-full w-full object-cover" />
            </div>
            
            <div className="w-64 sm:w-80 md:w-96 aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-white/20">
              <img src={heroImg} alt="Center emotional portrait" className="h-full w-full object-cover" />
            </div>

            <div className="w-28 sm:w-40 aspect-[3/4] overflow-hidden rounded-[2px] opacity-60 hidden sm:block">
              <img src={featured} alt="Right framing" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <p className="font-display text-2xl sm:text-4xl font-light leading-snug">
              “Some photographs are about the place. <br />
              <em className="font-editorial italic text-[#A67B2E]">The best ones are about the people.</em>”
            </p>
          </div>

        </div>
      </section>

      {/* ── 9. SELECTED COUPLES (2-Column Image-Heavy Layout) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-12">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          SELECTED STORIES
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coupleStoriesList.slice(0, 4).map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              className="space-y-4 cursor-pointer group"
            >
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-[2px] bg-[#E8E0D4]">
                  <img src={story.heroImage} alt={story.couple} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
                  <img src={story.secondaryImages[0] || heroImg} alt="Secondary" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-display text-3xl font-light">{story.couple}</h3>
                  <p className="text-xs font-mono text-[#A67B2E]">{story.location}</p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#181614] group-hover:text-[#A67B2E] transition-colors">View Story →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. ALL COUPLE SHOOTS ARCHIVE (3-Column Desktop Grid) ── */}
      <section className="py-24 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">ARCHIVE</span>
            <h2 className="font-display text-4xl font-light mt-1">All Couple Shoots</h2>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {["ALL", "PRE-WEDDING", "COUPLE SESSION", "POST-WEDDING", "INTERNATIONAL"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveArchiveCategory(cat)}
                className={`pb-1 transition-all cursor-pointer ${
                  activeArchiveCategory === cat
                    ? "text-[#181614] border-b-2 border-[#A67B2E] font-bold"
                    : "text-[#181614]/50 hover:text-[#181614]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArchiveStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              className="space-y-3 cursor-pointer group"
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-[#E8E0D4]">
                <img
                  src={story.heroImage}
                  alt={story.couple}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-light">{story.couple}</h3>
                <p className="text-xs font-mono text-[#A67B2E]">
                  {story.location} · {story.shootType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. FINAL IMAGE CTA (Candid Photo Cover) ── */}
      <section className="relative py-40 px-6 text-center bg-[#F3EFE7] overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="mx-auto w-48 aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-black/10">
            <img src={haldi} alt="Plan your shoot" className="h-full w-full object-cover" />
          </div>

          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
            YOUR STORY
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-light text-[#181614]">
            “Let’s make photographs that feel like you.”
          </h2>

          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#181614] text-[#F3EFE7] hover:bg-[#A67B2E] font-mono text-xs font-semibold transition-all shadow-xl active:scale-95"
            >
              <span>PLAN YOUR COUPLE SHOOT →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. DEDICATED STORY READER MODAL ── */}
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

// ── INDIVIDUAL STORY MODAL (More Photography Than Text) ──
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
    <div className="fixed inset-0 z-[100] bg-[#F3EFE7] text-[#181614] overflow-y-auto animate-in fade-in duration-300">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F3EFE7]/90 backdrop-blur-md border-b border-black/10">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          COUPLE STORY · CMC FILMS
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#181614] text-[#F3EFE7] hover:bg-[#A67B2E] text-xs font-mono transition-all cursor-pointer"
        >
          <span>CLOSE STORY</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Full-Screen Hero */}
      <section className="relative h-[85vh] w-full bg-[#181614] text-white flex flex-col justify-end p-6 md:p-14">
        <img src={story.heroImage} alt={story.couple} className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="text-xs font-mono text-[#A67B2E]">{story.shootType} · {story.location}</span>
          <h1 className="font-display text-5xl sm:text-7xl font-light">{story.couple}</h1>
          <p className="font-editorial text-2xl italic text-[#A67B2E]">{story.title}</p>
          <p className="text-xs font-mono opacity-60 pt-2">SCROLL ↓</p>
        </div>
      </section>

      {/* Opening Photo Sequence */}
      <section className="py-12 px-4 md:px-10 max-w-5xl mx-auto space-y-8">
        <div className="aspect-[3/4] max-w-xl mx-auto overflow-hidden rounded-[2px]">
          <img src={story.secondaryImages[0] || story.heroImage} alt="Opening photo" className="h-full w-full object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
            <img src={story.secondaryImages[1] || heroImg} alt="Opening pair 1" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
            <img src={story.secondaryImages[2] || haldi} alt="Opening pair 2" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Short Text */}
        <div className="py-8 max-w-xl mx-auto space-y-4">
          {story.introText.map((p, i) => (
            <p key={i} className="font-editorial text-2xl text-[#181614] italic font-light leading-relaxed border-l-2 border-[#A67B2E] pl-4">
              "{p}"
            </p>
          ))}
        </div>

        {/* Candid Photo Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {story.candidImages.map((candid, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-[2px]">
              <img src={candid} alt="Candid moment" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Short Quote */}
        <div className="py-12 text-center max-w-lg mx-auto space-y-2">
          <p className="font-editorial text-2xl italic">"{story.quote}"</p>
          <p className="text-xs font-mono text-[#A67B2E]">— {story.couple}</p>
        </div>
      </section>

      {/* Next Story Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="relative h-[60vh] w-full bg-[#181614] text-white flex flex-col justify-center items-center text-center p-6 cursor-pointer group"
      >
        <img src={nextStory.heroImage} alt={nextStory.couple} className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
        <div className="relative z-10 space-y-3">
          <span className="text-xs font-mono text-[#A67B2E] uppercase">NEXT STORY</span>
          <h2 className="font-display text-4xl sm:text-6xl font-light group-hover:text-[#A67B2E] transition-colors">{nextStory.couple}</h2>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A67B2E] text-[#181614] text-xs font-mono font-semibold">
            <span>View Next Story →</span>
          </span>
        </div>
      </section>

    </div>
  );
}
