import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight, ArrowDown, Play, X, Heart, MapPin, Sparkles, Camera } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
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
import cat1 from "@/assets/cat-1.jpg";

const title = "Couple Shoots & Pre-Weddings — CMC FILMS";
const description =
  "Two People. One Place. Their Own Story. Real couple shoots, pre-wedding sessions & post-wedding stories by CMC FILMS.";

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
  shootType: "PRE-WEDDING" | "POST-WEDDING" | "ENGAGEMENT" | "JUST BECAUSE";
  mood: "ROMANTIC" | "FUN" | "CINEMATIC" | "MINIMAL" | "ADVENTUROUS" | "TIMELESS";
  isInternational?: boolean;
  year: string;
  hook: string;
  coverImage: string;
  secondaryImages: string[];
  candidImages: string[];
  introText: string[];
  placeNote: string;
  shootDetails: {
    locationsCount: string;
    season: string;
    timing: string;
    looksCount: string;
  };
  quote: string;
  videoUrl?: string;
}

const coupleStoriesList: CoupleStoryItem[] = [
  {
    id: "cs-01",
    couple: "Aarav + Meera",
    title: "A Slow Morning in Jaipur",
    location: "Jaipur, Rajasthan",
    city: "JAIPUR",
    country: "INDIA",
    shootType: "PRE-WEDDING",
    mood: "ROMANTIC",
    year: "2026",
    hook: "Old streets, winter light and a day with nowhere else to be.",
    coverImage: luxuryEditorial,
    secondaryImages: [heroImg, haldi, cat2],
    candidImages: [story1, story3, cat3, coastal],
    introText: [
      "Aarav and Meera didn't want posed portraits in stiff heavy attire.",
      "They wanted to walk through quiet dawn lanes in Amer, drinking morning chai from clay cups while winter sun hit pink haveli walls.",
      "We spent six hours walking together — no rush, no artificial lights, just two people falling deeper in love with their city.",
    ],
    placeNote: "The ancient lanes of Amer and the calm courtyards of Pink City allowed the winter morning light to wrap around them with effortless warmth.",
    shootDetails: {
      locationsCount: "2 Locations",
      season: "Winter",
      timing: "Sunrise + Morning",
      looksCount: "2 Looks",
    },
    quote: "We forgot there was a camera around after the first twenty minutes.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "cs-02",
    couple: "Riya + Kabir",
    title: "An Evening by Lake Pichola",
    location: "Udaipur, Rajasthan",
    city: "UDAIPUR",
    country: "INDIA",
    shootType: "PRE-WEDDING",
    mood: "CINEMATIC",
    year: "2026",
    hook: "Mirror reflections on calm lake water as golden hour turned into twilight.",
    coverImage: heroImg,
    secondaryImages: [featured, story2, cat1],
    candidImages: [coastal, haldi, cat2, luxuryEditorial],
    introText: [
      "Riya and Kabir shared ten years of city memories before stepping onto a wooden lakeboat in Udaipur.",
      "As dusk descended over Aravalli hills, quiet laughter filled the water.",
    ],
    placeNote: "Lake Pichola offers an unmatched calm where water, ancient stone ghats and sky meet in quiet harmony.",
    shootDetails: {
      locationsCount: "3 Locations",
      season: "Autumn",
      timing: "Late Afternoon + Sunset",
      looksCount: "2 Looks",
    },
    quote: "Looking at these photos feels like rewatching our favorite memory in slow motion.",
  },
  {
    id: "cs-03",
    couple: "Aditi + Arjun",
    title: "Barefoot Sunset Vows in Goa",
    location: "Goa Beachfront",
    city: "GOA",
    country: "INDIA",
    shootType: "POST-WEDDING",
    mood: "FUN",
    year: "2026",
    hook: "Warm ocean sea-breeze, wet sand tracks and spontaneous ocean splashes.",
    coverImage: coastal,
    secondaryImages: [cat1, story3, haldi],
    candidImages: [cat2, story1, heroImg, f3],
    introText: [
      "Two weeks after their grand traditional wedding in Mumbai, Aditi and Arjun escaped to southern Goa shores.",
      "No schedules, no heavy jewellery — just barefoot ocean walks as evening waves rustled beside them.",
    ],
    placeNote: "The secluded palm groves of South Goa gave them space to breathe and reconnect after their wedding days.",
    shootDetails: {
      locationsCount: "1 Beach",
      season: "Winter",
      timing: "Sunset",
      looksCount: "1 Relaxed Look",
    },
    quote: "The easiest, most fun day we spent together all year.",
  },
  {
    id: "cs-04",
    couple: "Saba + Usman",
    title: "Red Sands of Dubai Dunes",
    location: "Dubai, UAE",
    city: "DUBAI",
    country: "UAE",
    shootType: "PRE-WEDDING",
    mood: "ADVENTUROUS",
    isInternational: true,
    year: "2025",
    hook: "Wind-swept desert dunes under warm twilight Arabian skies.",
    coverImage: cat1,
    secondaryImages: [luxuryEditorial, f2, cat3],
    candidImages: [story2, haldi, heroImg, coastal],
    introText: [
      "Standing amidst endless desert dunes as sunset painted the horizon in rose gold tones.",
      "Saba's flowing silk dress caught the desert breeze in effortless beauty.",
    ],
    placeNote: "Lahbab desert dunes offer vast open horizons that make every couple feel like the only two souls on earth.",
    shootDetails: {
      locationsCount: "Desert + Skyline",
      season: "Winter",
      timing: "Golden Hour",
      looksCount: "2 Outfits",
    },
    quote: "The desert wind and sunset light made everything feel surreal and magical.",
  },
  {
    id: "cs-05",
    couple: "Neha + Kunal",
    title: "Misty Mountain Pines",
    location: "Manali, Himachal Pradesh",
    city: "MOUNTAINS",
    country: "INDIA",
    shootType: "POST-WEDDING",
    mood: "MINIMAL",
    year: "2025",
    hook: "Tall pine trees, morning fog and quiet walks in mountain air.",
    coverImage: f3,
    secondaryImages: [story3, cat2, haldi],
    candidImages: [heroImg, coastal, f2, luxuryEditorial],
    introText: [
      "Quiet mountain trails surrounded by towering pine trees and soft morning mist.",
    ],
    placeNote: "High elevation mountain valleys provide a calm, intimate canopy far away from urban noise.",
    shootDetails: {
      locationsCount: "Pine Forest",
      season: "Monsoon",
      timing: "Early Morning",
      looksCount: "1 Look",
    },
    quote: "Pure silence, green trees and just the two of us.",
  },
];

const moodDataMap: Record<
  string,
  { label: string; image: string; caption: string }
> = {
  ROMANTIC: {
    label: "ROMANTIC",
    image: luxuryEditorial,
    caption: "Soft golden light, gentle touches and quiet winter mornings.",
  },
  FUN: {
    label: "FUN",
    image: coastal,
    caption: "Spontaneous laughter, barefoot sea walks and unscripted joy.",
  },
  CINEMATIC: {
    label: "CINEMATIC",
    image: heroImg,
    caption: "Deep shadows, ancient stone arches and movie-like compositions.",
  },
  MINIMAL: {
    label: "MINIMAL",
    image: cat3,
    caption: "Clean lines, uncluttered space and true human focus.",
  },
  ADVENTUROUS: {
    label: "ADVENTUROUS",
    image: cat1,
    caption: "Desert dunes, mountain slopes and open horizons.",
  },
  TIMELESS: {
    label: "TIMELESS",
    image: story2,
    caption: "Classic portraiture that will feel just as moving fifty years from now.",
  },
};

const locationDataMap: Record<
  string,
  { count: string; image: string }
> = {
  JAIPUR: { count: "12 STORIES", image: luxuryEditorial },
  UDAIPUR: { count: "09 STORIES", image: heroImg },
  GOA: { count: "15 STORIES", image: coastal },
  MUMBAI: { count: "08 STORIES", image: story2 },
  MOUNTAINS: { count: "06 STORIES", image: f3 },
  DUBAI: { count: "07 STORIES", image: cat1 },
  INTERNATIONAL: { count: "05 STORIES", image: cat2 },
};

const shootTypeDescriptions = [
  {
    code: "01",
    type: "PRE-WEDDING",
    heading: "Pre-Wedding",
    desc: "An entire day that feels more like a date than a photoshoot.",
  },
  {
    code: "02",
    type: "POST-WEDDING",
    heading: "Post-Wedding",
    desc: "No timelines. No wedding-day rush. Just quiet togetherness after the pheras.",
  },
  {
    code: "03",
    type: "ENGAGEMENT",
    heading: "Engagement",
    desc: "The beginning deserves photographs too.",
  },
  {
    code: "04",
    type: "JUST BECAUSE",
    heading: "Just Because",
    desc: "No occasion necessary. Celebrate love right now.",
  },
];

export function CoupleShootsPage() {
  const [selectedMood, setSelectedMood] = useState("ROMANTIC");
  const [hoveredLocation, setHoveredLocation] = useState("JAIPUR");
  const [activeShootTypeFilter, setActiveShootTypeFilter] = useState("PRE-WEDDING");
  const [activeArchiveCategory, setActiveArchiveCategory] = useState("ALL");
  const [activeStoryModal, setActiveStoryModal] = useState<CoupleStoryItem | null>(null);

  // Story Pair Expand state
  const [expandedSide, setExpandedSide] = useState<"left" | "right" | null>(null);

  const activeMoodInfo = useMemo(() => {
    return moodDataMap[selectedMood] || moodDataMap["ROMANTIC"];
  }, [selectedMood]);

  const featuredStory = useMemo(() => {
    return coupleStoriesList[0];
  }, []);

  const storyPairLeft = useMemo(() => coupleStoriesList[0], []);
  const storyPairRight = useMemo(() => coupleStoriesList[1], []);

  const filteredArchiveStories = useMemo(() => {
    if (activeArchiveCategory === "ALL") return coupleStoriesList;
    if (activeArchiveCategory === "INDIA") return coupleStoriesList.filter((s) => !s.isInternational);
    if (activeArchiveCategory === "INTERNATIONAL") return coupleStoriesList.filter((s) => s.isInternational);
    return coupleStoriesList.filter((s) => s.shootType === activeArchiveCategory);
  }, [activeArchiveCategory]);

  return (
    <main className="bg-[#F4F0E8] text-[#1D1B19] font-sans selection:bg-[#DDD4C8] selection:text-[#1D1B19] min-h-screen relative overflow-hidden">
      
      {/* ── 1. HERO SECTION (Asymmetric Layered Composition) ── */}
      <section className="relative min-h-[85vh] flex flex-col justify-between p-6 sm:p-10 md:p-16 border-b border-black/10">
        
        {/* Top Header Tag */}
        <div className="pt-16 md:pt-8 flex justify-between items-center">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A67B2E]">
            COUPLE STORIES
          </span>
          <span className="text-xs font-mono text-[#1D1B19]/50 hidden sm:block">
            PRE-WEDDING · COUPLE SESSIONS · POST-WEDDING
          </span>
        </div>

        {/* Hero Main Content */}
        <div className="my-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-[1600px] mx-auto w-full">
          
          {/* Left Large Heading & Subtitle */}
          <div className="md:col-span-6 space-y-6">
            <Reveal>
              <h1 className="font-display text-[clamp(4.2rem,11.5vw,9rem)] leading-[0.82] font-light text-[#1D1B19] tracking-tight">
                COUPLE <br />
                <em className="font-editorial italic text-[#A67B2E] font-normal">
                  STORIES
                </em>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-sm sm:text-base text-[#1D1B19]/75 font-sans font-light leading-relaxed max-w-sm">
                “Before the celebrations begin, there's just the two of you.”
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-xs font-mono text-[#1D1B19]/60 flex flex-wrap gap-2 pt-2">
                <span>Pre-Wedding</span> · <span>Couple Sessions</span> · <span>Post-Wedding</span>
              </div>
            </Reveal>
          </div>

          {/* Right Layered Photography Composition (3 Real Photos) */}
          <Reveal delay={250} className="md:col-span-6 relative flex justify-center md:justify-end">
            {/* 1. Large Vertical Image */}
            <div className="w-[260px] sm:w-[320px] aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl bg-[#DDD4C8] border border-black/5">
              <img
                src={luxuryEditorial}
                alt="Couple Shoot Main"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* 2. Smaller Landscape Image (Overlapping Left) */}
            <div className="absolute -left-2 sm:left-4 top-1/4 w-[180px] sm:w-[220px] aspect-[16/10] overflow-hidden rounded-[2px] shadow-xl border-2 border-[#F4F0E8] hidden sm:block">
              <img
                src={coastal}
                alt="Landscape couple moment"
                className="h-full w-full object-cover"
              />
            </div>

            {/* 3. Small Candid Image (Overlapping Bottom Right) */}
            <div className="absolute -bottom-6 right-2 w-28 aspect-square overflow-hidden rounded-[2px] shadow-lg border-2 border-[#F4F0E8] hidden sm:block">
              <img
                src={haldi}
                alt="Candid laugh"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

        </div>

        {/* Bottom Scroll Indicator */}
        <div className="flex justify-between items-end text-xs font-mono text-[#1D1B19]/50 border-t border-black/5 pt-4">
          <span>TWO PEOPLE. ONE PLACE. THEIR OWN STORY.</span>
          <span className="flex items-center gap-2 text-[#1D1B19]">
            Explore the Stories <ArrowDown className="w-3.5 h-3.5 text-[#A67B2E] animate-bounce" />
          </span>
        </div>

      </section>

      {/* ── 2. INTRODUCTION SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-b border-black/10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Serif Statement */}
          <Reveal className="md:col-span-7 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#1D1B19] leading-tight">
              “No rituals. No crowd. No schedule. <br />
              <em className="font-editorial italic text-[#A67B2E]">Just two people being themselves.</em>”
            </h2>
          </Reveal>

          {/* Right Small Candid Photo + 3-Line Paragraph */}
          <Reveal delay={150} className="md:col-span-5 space-y-5">
            <div className="w-24 aspect-[4/3] overflow-hidden rounded-[2px] shadow-md border border-black/5">
              <img src={cat2} alt="Candid couple" className="h-full w-full object-cover" />
            </div>
            <p className="text-sm text-[#1D1B19]/80 font-sans font-light leading-relaxed">
              Couple sessions are uncluttered, quiet and personal. We pick a location that holds meaning or quiet light, and simply walk alongside you as moments unfold naturally.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ── 3. FEATURED COUPLE STORY ── */}
      <section className="py-24 md:py-36 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto">
        <div className="space-y-6">
          <span className="label-xs text-[#A67B2E] font-mono tracking-widest uppercase px-2">
            FEATURED STORY
          </span>

          {/* Huge Landscape Image with Floating Info Panel */}
          <div
            onClick={() => setActiveStoryModal(featuredStory)}
            className="relative mx-auto w-full md:w-[94%] aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[4px] bg-[#DDD4C8] shadow-2xl cursor-pointer group border border-black/5"
          >
            <img
              src={featuredStory.coverImage}
              alt={featuredStory.couple}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            {/* Overlapping Info Panel */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono text-[#A67B2E] uppercase">
                  {featuredStory.shootType} · {featuredStory.location}
                </span>
                <h3 className="font-display text-4xl sm:text-6xl font-light text-white">
                  {featuredStory.couple}
                </h3>
                <p className="font-editorial text-xl italic text-white/90">
                  "{featuredStory.title}"
                </p>
                <p className="text-xs text-white/70 font-sans font-light">
                  "{featuredStory.hook}"
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveStoryModal(featuredStory)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1D1B19] text-[#F4F0E8] font-mono text-xs hover:bg-[#A67B2E] transition-all shadow-lg active:scale-95 w-fit shrink-0"
              >
                <span>VIEW THEIR STORY</span>
                <ArrowUpRight className="w-4 h-4 text-[#A67B2E]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. EXPLORE BY MOOD (Signature Interactive Discovery) ── */}
      <section className="py-24 md:py-36 px-6 md:px-16 border-b border-black/10 max-w-[1700px] mx-auto space-y-12">
        <div className="space-y-1">
          <span className="label-xs text-[#A67B2E] font-mono uppercase tracking-widest">
            MOOD DISCOVERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-[#1D1B19]">
            Find Your Kind of <em className="font-editorial italic text-[#A67B2E]">Shoot</em>
          </h2>
        </div>

        {/* Large Typographic Mood List (Left) + Changing Preview Image (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-white p-8 md:p-12 rounded-[4px] border border-black/5 shadow-sm">
          
          {/* Left Column: Typographic Mood Words */}
          <div className="md:col-span-6 space-y-3">
            {Object.keys(moodDataMap).map((moodKey) => {
              const isSelected = selectedMood === moodKey;
              return (
                <div
                  key={moodKey}
                  onMouseEnter={() => setSelectedMood(moodKey)}
                  onClick={() => setSelectedMood(moodKey)}
                  className={`group py-2.5 px-4 rounded-[2px] cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "text-[#A67B2E] font-medium tracking-wider"
                      : "text-[#1D1B19]/50 hover:text-[#1D1B19]"
                  }`}
                >
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
                    {moodKey}
                  </span>
                  <span className={`text-xs font-mono ${isSelected ? "opacity-100" : "opacity-0"}`}>
                    Explore →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Image */}
          <div className="md:col-span-6 space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-md relative">
              <img
                src={activeMoodInfo.image}
                alt={activeMoodInfo.label}
                className="h-full w-full object-cover transition-all duration-700"
              />
              <span className="absolute bottom-3 left-3 text-xs font-mono text-white bg-black/60 px-3 py-1 rounded-[2px]">
                {activeMoodInfo.label} MOOD
              </span>
            </div>
            <p className="text-xs text-[#1D1B19]/70 font-mono italic">
              "{activeMoodInfo.caption}"
            </p>
          </div>

        </div>
      </section>

      {/* ── 5. RECENT COUPLE STORIES (Asymmetric Visual Feed) ── */}
      <section className="py-24 md:py-36 px-6 md:px-16 border-b border-black/10 max-w-[1700px] mx-auto space-y-16">
        <Reveal className="border-b border-black/10 pb-6">
          <span className="label-xs text-[#A67B2E] font-mono uppercase tracking-widest">
            FEED
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-light text-[#1D1B19]">
            Recent <em className="font-editorial italic text-[#A67B2E]">Stories</em>
          </h2>
        </Reveal>

        {/* Asymmetric Visual Layout */}
        <div className="space-y-20">
          
          {/* Story 01: Large Vertical Photograph + Riya + Kabir */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div
              onClick={() => setActiveStoryModal(coupleStoriesList[1])}
              className="md:col-span-7 aspect-[3/4] max-h-[700px] overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-xl cursor-pointer group border border-black/5"
            >
              <img
                src={coupleStoriesList[1].coverImage}
                alt={coupleStoriesList[1].couple}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#A67B2E]">01</span>
              <h3 className="font-display text-4xl sm:text-6xl font-light text-[#1D1B19]">
                {coupleStoriesList[1].couple}
              </h3>
              <p className="font-editorial text-xl italic text-[#1D1B19]/80">
                "{coupleStoriesList[1].title}"
              </p>
              <p className="text-xs font-mono text-[#1D1B19]/60">
                {coupleStoriesList[1].location} · {coupleStoriesList[1].shootType}
              </p>
              <button
                type="button"
                onClick={() => setActiveStoryModal(coupleStoriesList[1])}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#1D1B19] hover:text-[#A67B2E] transition-colors pt-2"
              >
                <span>View Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#A67B2E]" />
              </button>
            </div>
          </div>

          {/* Story 02: Wide Landscape Photograph */}
          <div className="space-y-4">
            <div
              onClick={() => setActiveStoryModal(coupleStoriesList[2])}
              className="aspect-[21/9] w-full overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-xl cursor-pointer group border border-black/5"
            >
              <img
                src={coupleStoriesList[2].coverImage}
                alt={coupleStoriesList[2].couple}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-4xl font-light text-[#1D1B19]">
                  {coupleStoriesList[2].couple}
                </h3>
                <p className="font-editorial text-lg italic text-[#1D1B19]/80">
                  "{coupleStoriesList[2].title}" — {coupleStoriesList[2].location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveStoryModal(coupleStoriesList[2])}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#1D1B19] hover:text-[#A67B2E] transition-colors"
              >
                <span>View Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#A67B2E]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. LOCATION DISCOVERY ── */}
      <section className="py-24 md:py-36 px-6 md:px-16 border-b border-black/10 max-w-[1700px] mx-auto space-y-12">
        <div className="space-y-1">
          <span className="label-xs text-[#A67B2E] font-mono uppercase tracking-widest">
            LOCATIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-[#1D1B19]">
            Stories From <em className="font-editorial italic text-[#A67B2E]">Places We Love</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-[#DDD4C8]/40 p-8 md:p-12 rounded-[4px] border border-black/5">
          {/* Left: Large Location Image */}
          <div className="md:col-span-7 aspect-[16/10] overflow-hidden rounded-[2px] bg-[#DDD4C8] relative shadow-md">
            <img
              src={locationDataMap[hoveredLocation]?.image || luxuryEditorial}
              alt={hoveredLocation}
              className="h-full w-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <h3 className="font-display text-4xl font-light">{hoveredLocation}</h3>
              <p className="text-xs font-mono text-[#A67B2E] mt-1">
                {locationDataMap[hoveredLocation]?.count}
              </p>
            </div>
          </div>

          {/* Right: Vertical Location List */}
          <div className="md:col-span-5 space-y-2">
            {Object.keys(locationDataMap).map((loc) => {
              const isSelected = hoveredLocation === loc;
              return (
                <div
                  key={loc}
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onClick={() => setHoveredLocation(loc)}
                  className={`group py-3 px-4 rounded-[2px] cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "bg-[#1D1B19] text-[#F4F0E8]"
                      : "text-[#1D1B19]/60 hover:text-[#1D1B19] hover:bg-white/50"
                  }`}
                >
                  <span className="font-display text-2xl font-light">{loc}</span>
                  <span className={`text-xs font-mono ${isSelected ? "text-[#A67B2E]" : "opacity-0"}`}>
                    Explore {loc} →
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. VISUAL LOCATION MOMENT (#1D1B19 Warm Charcoal Break) ── */}
      <section className="relative py-36 md:py-48 bg-[#1D1B19] text-[#F4F0E8] text-center border-b border-white/10 overflow-hidden">
        <img
          src={featured}
          alt="Distance from home"
          className="absolute inset-0 h-full w-full object-cover opacity-25 scale-105"
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-6">
          <p className="font-display text-4xl sm:text-6xl md:text-7xl font-light leading-tight tracking-wide">
            SOME STORIES <br />
            <em className="font-editorial italic text-[#A67B2E]">NEED A LITTLE</em> <br />
            DISTANCE FROM HOME.
          </p>
        </div>
      </section>

      {/* ── 8. SHOOT TYPES ── */}
      <section className="py-24 md:py-36 px-6 md:px-16 border-b border-black/10 max-w-[1600px] mx-auto space-y-12">
        <div className="space-y-1">
          <span className="label-xs text-[#A67B2E] font-mono uppercase tracking-widest">
            OUR FORMATS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-[#1D1B19]">
            Ways We <em className="font-editorial italic text-[#A67B2E]">Shoot</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shootTypeDescriptions.map((st) => (
            <div
              key={st.code}
              onClick={() => setActiveShootTypeFilter(st.type)}
              className="bg-white p-6 rounded-[2px] border border-black/5 space-y-4 cursor-pointer hover:border-[#A67B2E] transition-all shadow-sm"
            >
              <span className="text-xs font-mono text-[#A67B2E] font-bold">{st.code}</span>
              <h3 className="font-display text-2xl font-light text-[#1D1B19]">{st.heading}</h3>
              <p className="text-xs text-[#1D1B19]/70 font-sans font-light leading-relaxed">
                "{st.desc}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. STORY PAIRS SECTION (Interactive Split Screen) ── */}
      <section className="py-24 md:py-36 px-4 md:px-10 border-b border-black/10 max-w-[1700px] mx-auto space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="label-xs text-[#A67B2E] font-mono uppercase tracking-widest">
            STORY PAIRS
          </span>
          <h2 className="font-display text-3xl font-light">Two Couples. Two Cities.</h2>
        </div>

        {/* Vertically Split Screen */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
          {/* Left Couple */}
          <div
            onMouseEnter={() => setExpandedSide("left")}
            onMouseLeave={() => setExpandedSide(null)}
            onClick={() => setActiveStoryModal(storyPairLeft)}
            className={`relative overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-lg cursor-pointer transition-all duration-700 ${
              expandedSide === "left" ? "md:w-[65%]" : expandedSide === "right" ? "md:w-[35%]" : "md:w-1/2"
            }`}
          >
            <img
              src={storyPairLeft.coverImage}
              alt={storyPairLeft.couple}
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-mono text-[#A67B2E]">{storyPairLeft.location}</span>
              <h3 className="font-display text-4xl font-light">{storyPairLeft.couple}</h3>
              <span className="text-xs font-mono text-white/80 mt-2">View Their Story →</span>
            </div>
          </div>

          {/* Right Couple */}
          <div
            onMouseEnter={() => setExpandedSide("right")}
            onMouseLeave={() => setExpandedSide(null)}
            onClick={() => setActiveStoryModal(storyPairRight)}
            className={`relative overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-lg cursor-pointer transition-all duration-700 ${
              expandedSide === "right" ? "md:w-[65%]" : expandedSide === "left" ? "md:w-[35%]" : "md:w-1/2"
            }`}
          >
            <img
              src={storyPairRight.coverImage}
              alt={storyPairRight.couple}
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-mono text-[#A67B2E]">{storyPairRight.location}</span>
              <h3 className="font-display text-4xl font-light">{storyPairRight.couple}</h3>
              <span className="text-xs font-mono text-white/80 mt-2">View Their Story →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. ALL COUPLE STORIES & ARCHIVE ── */}
      <section className="py-24 md:py-36 px-6 md:px-16 border-b border-black/10 max-w-[1600px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div className="space-y-1">
            <span className="label-xs text-[#A67B2E] font-mono uppercase tracking-widest">
              ARCHIVE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#1D1B19]">
              All Couple <em className="font-editorial italic text-[#A67B2E]">Stories</em>
            </h2>
          </div>

          {/* Text-Only Filter Bar */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {["ALL", "PRE-WEDDING", "POST-WEDDING", "ENGAGEMENT", "INDIA", "INTERNATIONAL"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveArchiveCategory(cat)}
                className={`pb-1 transition-all cursor-pointer ${
                  activeArchiveCategory === cat
                    ? "text-[#1D1B19] border-b-2 border-[#A67B2E] font-bold"
                    : "text-[#1D1B19]/50 hover:text-[#1D1B19]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredArchiveStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              className="group space-y-4 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-sm">
                <img
                  src={story.coverImage}
                  alt={story.couple}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-3xl font-light text-[#1D1B19] group-hover:text-[#A67B2E] transition-colors">
                    {story.couple}
                  </h3>
                  <p className="text-xs font-mono text-[#1D1B19]/60">
                    {story.location} · {story.shootType} · {story.year}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#A67B2E] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Story</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A67B2E]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section className="py-36 md:py-48 px-6 text-center bg-[#F4F0E8]">
        <div className="max-w-2xl mx-auto space-y-6">
          
          <div className="mx-auto w-40 aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-black/5">
            <img src={haldi} alt="Plan your shoot" className="h-full w-full object-cover" />
          </div>

          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
            YOUR TURN
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-light text-[#1D1B19]">
            “Let’s make a day out of it.”
          </h2>

          <p className="text-xs sm:text-sm text-[#1D1B19]/70 font-sans font-light">
            “No forced poses. No complicated ideas. Just something that feels like you.”
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1D1B19] text-[#F4F0E8] hover:bg-[#A67B2E] font-mono text-xs font-semibold transition-all shadow-xl active:scale-95"
            >
              <span>PLAN YOUR COUPLE SHOOT →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 12. INDIVIDUAL COUPLE STORY DEDICATED MODAL ── */}
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

// ── INDIVIDUAL COUPLE STORY DEDICATED MODAL ──
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
    <div className="fixed inset-0 z-[100] bg-[#F4F0E8] text-[#1D1B19] overflow-y-auto animate-in fade-in duration-300">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F4F0E8]/90 backdrop-blur-md border-b border-black/10">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          COUPLE STORY · CMC FILMS
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1D1B19] text-[#F4F0E8] hover:bg-[#A67B2E] text-xs font-mono transition-all cursor-pointer"
        >
          <span>CLOSE STORY</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Story Hero */}
      <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden bg-[#1D1B19] text-[#F4F0E8] flex flex-col justify-end p-6 md:p-14">
        <img
          src={story.coverImage}
          alt={story.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[#A67B2E] uppercase">
            {story.shootType} · {story.location} · {story.country}
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
            {story.couple}
          </h1>
          <p className="font-editorial text-2xl italic text-[#A67B2E]">{story.title}</p>
          <p className="text-xs font-mono text-white/60 pt-2">SCROLL ↓</p>
        </div>
      </section>

      {/* Story Intro */}
      <section className="py-16 px-6 max-w-2xl mx-auto space-y-4">
        {story.introText.map((p, i) => (
          <p key={i} className="font-editorial text-2xl sm:text-3xl text-[#1D1B19] font-light leading-relaxed italic border-l-4 border-[#A67B2E] pl-6">
            "{p}"
          </p>
        ))}
      </section>

      {/* Photo Narrative */}
      <section className="py-8 px-6 max-w-4xl mx-auto space-y-12">
        
        {/* Full-width Photo */}
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-md">
          <img src={story.secondaryImages[0] || story.coverImage} alt="Story visual" className="h-full w-full object-cover" />
        </div>

        {/* Two Vertical Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {story.secondaryImages.slice(1, 3).map((img, i) => (
            <div key={i} className="aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-[#DDD4C8] shadow-sm">
              <img src={img} alt="Portrait" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Little Things Chapter */}
        <div className="py-8 space-y-6">
          <span className="text-xs font-mono text-[#A67B2E] uppercase font-bold tracking-widest block">
            THE LITTLE THINGS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {story.candidImages.slice(0, 4).map((candid, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-[2px] bg-[#DDD4C8]">
                <img src={candid} alt="Candid moment" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Place Note & Behind The Shoot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-t border-b border-black/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#A67B2E] font-bold">THE PLACE</span>
            <h4 className="font-display text-2xl font-light">{story.location}</h4>
            <p className="text-xs text-[#1D1B19]/80 font-sans font-light leading-relaxed">
              "{story.placeNote}"
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#A67B2E] font-bold">THE SHOOT</span>
            <div className="text-xs font-mono text-[#1D1B19]/80 space-y-1">
              <p>{story.shootDetails.locationsCount}</p>
              <p>{story.shootDetails.season}</p>
              <p>{story.shootDetails.timing}</p>
              <p>{story.shootDetails.looksCount}</p>
            </div>
          </div>
        </div>

        {/* Couple Quote */}
        <div className="py-12 text-center space-y-3">
          <p className="font-editorial text-3xl italic text-[#1D1B19] font-light">
            "{story.quote}"
          </p>
          <p className="text-xs font-mono text-[#1D1B19]/60">— {story.couple}</p>
        </div>

      </section>

      {/* Next Story Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="relative h-[65vh] min-h-[400px] w-full overflow-hidden bg-[#1D1B19] text-[#F4F0E8] flex flex-col justify-center items-center text-center p-6 cursor-pointer group"
      >
        <img
          src={nextStory.coverImage}
          alt={nextStory.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-3 max-w-xl">
          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">NEXT STORY</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white font-light group-hover:text-[#A67B2E] transition-colors">
            {nextStory.couple}
          </h2>
          <p className="font-editorial text-base italic text-white/80">{nextStory.title}</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A67B2E] text-[#1D1B19] text-xs font-mono font-semibold pt-2">
            <span>View Next Story →</span>
          </span>
        </div>
      </section>

    </div>
  );
}
