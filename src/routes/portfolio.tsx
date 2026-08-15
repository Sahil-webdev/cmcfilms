import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  Camera,
  Clock,
  MapPin,
  Search,
  X,
  ChevronRight,
  Sparkles,
  Quote as QuoteIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import featured from "@/assets/featured.jpg";
import heroImg from "@/assets/hero.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";
import maternity from "@/assets/maternity.jpg";

const pageTitle = "Wedding Stories — CMC FILMS";
const pageDescription =
  "Every wedding has a story. Real people, real emotions, and the wedding moments that stayed with us forever.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: WeddingStoriesPage,
});

// ── TYPES ──
export interface SimpleWeddingStory {
  id: string;
  couple: string;
  title: string;
  category: "Traditional" | "Arranged Love" | "Destination" | "Royal" | "Intimate" | "Cultural";
  location: string;
  date: string;
  readTime: string;
  aspect: "portrait" | "landscape";
  coverImage: string;
  secondaryImages: string[];
  intro: string;
  hook?: string;
  chapters?: {
    num: string;
    heading: string;
    text: string;
    img?: string;
  }[];
  quote?: string;
}

// ── DATA DEFINITION ──
const weddingStoriesData: SimpleWeddingStory[] = [
  {
    id: "s1",
    couple: "Aarav & Meera",
    title: "A Winter Wedding in Jaipur",
    category: "Traditional",
    location: "Jaipur, Rajasthan",
    date: "12 DEC 2026",
    readTime: "5 min read",
    aspect: "portrait",
    coverImage: luxuryEditorial,
    secondaryImages: [heroImg, haldi, cat2],
    intro:
      "Some weddings begin with years of friendship. Others begin with a conversation between two families. Aarav and Meera's story began somewhere between the two under the winter sky of Jaipur.",
    hook: "They met because their families introduced them over tea in Delhi. The rest happened naturally.",
    chapters: [
      {
        num: "01 — How It Began",
        heading: "The Chai Meeting",
        text: "There was no loud spark, just an effortless calm. By the second hour, both knew that what their parents arranged was meant to be.",
        img: cat2,
      },
      {
        num: "02 — The Wedding Day",
        heading: "Marigold Rain & Palace Pheras",
        text: "In the central courtyard of Amer Haveli, yellow petals showered from ancient balconies as sacred Vedic mantras echoed in the evening air.",
        img: haldi,
      },
      {
        num: "03 — The Moments Between",
        heading: "Silent Glances",
        text: "The frames that mattered most weren't posed mandap portraits, but the quiet hand squeeze beneath the silk veil.",
        img: heroImg,
      },
    ],
    quote: "When we look at these photographs, we don't just remember how the day looked. We remember exactly how it felt.",
  },
  {
    id: "s2",
    couple: "Rhea & Kabir",
    title: "A Royal Celebration in Udaipur",
    category: "Royal",
    location: "Udaipur, Rajasthan",
    date: "08 JAN 2026",
    readTime: "6 min read",
    aspect: "landscape",
    coverImage: featured,
    secondaryImages: [story3, cat1],
    intro:
      "Rhea and Kabir's love story spans ten years — from college lectures in Mumbai to a floating island mandap on Lake Pichola.",
    hook: "Ten years after sitting next to each other in class, they said their vows surrounded by lake mist.",
    chapters: [
      {
        num: "01 — How It Began",
        heading: "A Decade of Soulmates",
        text: "Ten years of shared city train rides, long-distance years, and quiet support culminated on the calm waters of Lake Pichola.",
        img: story3,
      },
      {
        num: "02 — The Wedding Day",
        heading: "Floating Mandap at Dusk",
        text: "As dusk settled over the Aravali hills, floating oil lamps illuminated the water while vows were spoken in quiet reverence.",
        img: featured,
      },
    ],
    quote: "Every photograph captured by CMC FILMS feels like a timeless memory preserved forever.",
  },
  {
    id: "s3",
    couple: "Aneesh & Maitri",
    title: "Barefoot Sunset Vows in Goa",
    category: "Destination",
    location: "Goa Beachfront",
    date: "22 JAN 2026",
    readTime: "4 min read",
    aspect: "landscape",
    coverImage: coastal,
    secondaryImages: [cat1, story2],
    intro:
      "There's something magical about a wedding by the sea, especially when the setting sun casts a warm golden glow over shoreline promises.",
    hook: "Two continents, endless flight miles, and one forever promise on the Goa coast.",
    chapters: [
      {
        num: "01 — How It Began",
        heading: "Coastal Ocean Mist",
        text: "He grew up in South India; she grew up in Punjab. Their wedding brought two distinct cultures together on the Goa sand.",
        img: coastal,
      },
      {
        num: "02 — The Wedding Day",
        heading: "Barefoot Shore Vows",
        text: "With waves rustling yards away, they exchanged handwritten promises while sunset ocean light illuminated their smiles.",
        img: cat1,
      },
    ],
    quote: "We wanted ocean air, laughter, and authentic photos — and that's exactly what we received.",
  },
  {
    id: "s4",
    couple: "Saba & Usman",
    title: "Arabian Desert Dunes Story",
    category: "Arranged Love",
    location: "Dubai, UAE",
    date: "14 DEC 2025",
    readTime: "5 min read",
    aspect: "portrait",
    coverImage: cat1,
    secondaryImages: [luxuryEditorial, heroImg],
    excerpt:
      "A three-day high-fashion desert celebration in Dubai with sand dunes shoot and luxury coastal Nikah.",
    intro:
      "Saba and Usman's international celebration brought family together from London, Dubai, and Mumbai for a magnificent sand dunes affair.",
    hook: "They met because their families introduced them. The rest happened naturally.",
    chapters: [
      {
        num: "01 — The Beginning",
        heading: "Desert Sands at Dusk",
        text: "Standing amid golden desert dunes as the sun melted away, Saba's veil caught the breeze in cinematic grace.",
        img: cat1,
      },
      {
        num: "02 — The Nikah",
        heading: "Sacred Promises",
        text: "Under a mirror and flower canopy, sacred promises were spoken in quiet dignity.",
        img: luxuryEditorial,
      },
    ],
    quote: "CMC FILMS documented our destination wedding with the aesthetic care of a luxury editorial magazine.",
  },
  {
    id: "s5",
    couple: "Dhruv & Pippa",
    title: "Eco-Luxury Farm Vows",
    category: "Intimate",
    location: "Karjat, Maharashtra",
    date: "04 FEB 2026",
    readTime: "4 min read",
    aspect: "portrait",
    coverImage: haldi,
    secondaryImages: [story2, coastal],
    intro:
      "In the green hills of Karjat, Dhruv and Pippa celebrated their intimate two-day wedding surrounded by rustic charm and close family.",
    hook: "With only 80 guests present, every single photograph radiated pure family closeness.",
    chapters: [
      {
        num: "01 — The Vibe",
        heading: "Marigold Rain",
        text: "An open-air Haldi ceremony filled with yellow blooms, spontaneous music jams, and deep family warmth.",
        img: haldi,
      },
    ],
    quote: "Small weddings have a big soul. Looking at these photos brings back every laugh and tear.",
  },
  {
    id: "s6",
    couple: "Devendra & Ishita",
    title: "Heritage Fort Pheras",
    category: "Cultural",
    location: "Jodhpur, Rajasthan",
    date: "18 NOV 2025",
    readTime: "5 min read",
    aspect: "landscape",
    coverImage: story3,
    secondaryImages: [story1, luxuryEditorial],
    intro:
      "Ancient fort ramparts, traditional Manganiyar folk tunes, and sacred pheras under Jodhpur skies.",
    hook: "Folk music, ancient fort walls, and traditional Marwari wedding customs.",
    chapters: [
      {
        num: "01 — The Heritage",
        heading: "Fort Ramparts at Dusk",
        text: "Folk musicians led the royal procession through 500-year-old fort courtyards as golden hour illuminated the wedding veil.",
        img: story3,
      },
    ],
    quote: "Our cameras were simply quiet witnesses to sacred timeless vows.",
  },
];

// Category Details
const categoriesList = [
  {
    name: "Traditional",
    desc: "Families, rituals and traditions that turn one day into a memory for generations.",
    img: story3,
  },
  {
    name: "Arranged Love",
    desc: "Two souls introduced by families who discovered their exact missing piece.",
    img: cat2,
  },
  {
    name: "Destination",
    desc: "Coastal ocean vows, sea mist romance and exotic locales around the world.",
    img: coastal,
  },
  {
    name: "Royal",
    desc: "Grand palace courtyards, ancient sandstone forts and Rajwadi grandeur.",
    img: luxuryEditorial,
  },
  {
    name: "Intimate",
    desc: "Micro-gatherings, open-air farm suppers and unhurried family moments.",
    img: haldi,
  },
  {
    name: "Cultural",
    desc: "Authentic regional heritage, traditional attire, and folk music soul.",
    img: heroImg,
  },
];

// Destinations
const destinationTiles = [
  { city: "Jaipur", image: heroImg },
  { city: "Udaipur", image: luxuryEditorial },
  { city: "Jaisalmer", image: cat2 },
  { city: "Goa", image: coastal },
  { city: "Dubai", image: cat1 },
  { city: "Bali", image: featured },
];

export function WeddingStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Traditional");
  const [activeStoryModal, setActiveStoryModal] = useState<SimpleWeddingStory | null>(null);
  const [hoveredJournalIndex, setHoveredJournalIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeCategoryData = useMemo(() => {
    return categoriesList.find((c) => c.name === selectedCategory) || categoriesList[0];
  }, [selectedCategory]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-[#FAF8F5] text-espresso font-sans selection:bg-gold/20 relative overflow-hidden"
    >
      {/* ── SUBTLE BACKGROUND GRAIN & OVERSIZED FADED TYPOGRAPHY ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {/* Soft Grain & Light Patches */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px]" />
      </div>

      {/* ── HERO SECTION (Split Composition with Overlapping Photos & Faded Background Word) ── */}
      <section className="relative z-10 pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-14 max-w-[1700px] mx-auto border-b border-espresso/10 overflow-hidden">
        {/* Faded Background Word: STORIES */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-editorial text-[20vw] leading-none text-espresso/[0.04] font-bold select-none pointer-events-none tracking-widest hidden lg:block z-0">
          STORIES
        </span>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Side: Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                <span>CMC FILMS JOURNAL</span>
              </div>

              <h1 className="mt-4 font-display text-[clamp(3rem,6.8vw,5.5rem)] leading-[0.96] font-light text-espresso tracking-tight">
                Stories We Were <br />
                <em className="font-editorial italic text-gold font-light">
                  Lucky Enough To Witness.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-base sm:text-lg text-taupe font-sans font-light leading-relaxed max-w-md">
                Real weddings, real people, and the moments that stayed with us.
              </p>
            </Reveal>

            <Reveal delay={250} className="pt-4">
              <a
                href="#category-section"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-espresso hover:text-gold transition-colors duration-300 group"
              >
                <span className="border-b border-espresso/40 pb-0.5 group-hover:border-gold">Explore Stories</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold" />
              </a>
            </Reveal>
          </div>

          {/* Right Side: Creative Overlapping Images Composition */}
          <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[520px] flex items-center justify-center pt-4">
            {/* Background Narrow Image Frame (Tilt -rotate-6) */}
            <div className="absolute top-2 left-4 w-[48%] aspect-[3/4] overflow-hidden rounded-2xl opacity-40 -rotate-6 transition-transform duration-700 hover:rotate-0 border border-espresso/10 shadow-md">
              <img
                src={story1}
                alt="Background story frame"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Base Main Vertical Image Frame (Tilt -rotate-2) */}
            <div className="w-[62%] aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border-4 border-white relative z-10 -rotate-2 hover:rotate-0 transition-transform duration-700 bg-beige">
              <img
                src={luxuryEditorial}
                alt="Main story portrait"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#0C0D10]/80 backdrop-blur-md border border-gold/30 text-gold px-3 py-1 rounded-full label-xs text-[10px] font-mono">
                Jaipur Palace • Dec 2026
              </div>
            </div>

            {/* Overlapping Smaller Image (Bottom-Right, Tilt rotate-3) */}
            <div className="absolute bottom-4 right-2 sm:right-6 w-[52%] aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border-4 border-white z-20 rotate-3 hover:rotate-0 transition-transform duration-700 bg-beige">
              <img
                src={haldi}
                alt="Overlapping haldi detail"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md text-espresso px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium shadow-sm">
                Haldi Petal Rain
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY CATEGORY SECTION (Find Your Kind of Story) ── */}
      <section id="category-section" className="relative z-10 py-20 md:py-28 px-6 md:px-14 border-b border-espresso/10 max-w-[1700px] mx-auto">
        <Reveal className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-espresso">
            Find Your Kind of <em className="font-editorial italic text-gold">Story</em>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-taupe font-sans font-light">
            Every wedding begins differently.
          </p>
        </Reveal>

        {/* Clean Horizontal Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCategory(cat.name)}
                className={`label-xs px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-espresso text-ivory border-espresso shadow-md"
                    : "bg-white text-espresso/70 border-espresso/15 hover:border-gold hover:text-espresso"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Category Side-by-Side Transition Panel */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-espresso/10 shadow-sm">
          <div className="md:col-span-7 aspect-[16/10] overflow-hidden rounded-2xl bg-beige">
            <img
              src={activeCategoryData.img}
              alt={activeCategoryData.name}
              className="h-full w-full object-cover transition-all duration-700"
            />
          </div>

          <div className="md:col-span-5 space-y-5">
            <span className="label-xs text-gold uppercase tracking-widest font-mono">
              {activeCategoryData.name} Stories
            </span>
            
            <h3 className="font-display text-3xl sm:text-4xl text-espresso font-light">
              {activeCategoryData.name} Weddings
            </h3>

            <p className="text-sm text-taupe font-sans font-light leading-relaxed">
              "{activeCategoryData.desc}"
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  const story = weddingStoriesData.find((s) => s.category.includes(selectedCategory.split(" ")[0])) || weddingStoriesData[0];
                  setActiveStoryModal(story);
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-espresso text-ivory hover:bg-gold hover:text-cinema text-xs font-mono transition-all duration-300"
              >
                <span>Explore {activeCategoryData.name} Stories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED STORY (Large Horizontal Image + Floating Information Panel) ── */}
      <section className="relative z-10 py-20 md:py-28 px-4 md:px-10 max-w-[1700px] mx-auto border-b border-espresso/10">
        <div className="relative mx-auto w-full md:w-[92%]">
          {/* Large Horizontal Image (80-90% width) */}
          <div
            onClick={() => setActiveStoryModal(weddingStoriesData[0])}
            className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl cursor-pointer bg-beige shadow-lg group"
          >
            <img
              src={weddingStoriesData[0].coverImage}
              alt={weddingStoriesData[0].couple}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Floating Information Panel (Warm Off-White Overlapping Box) */}
          <div
            onClick={() => setActiveStoryModal(weddingStoriesData[0])}
            className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 md:max-w-md bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-xl cursor-pointer hover:border-gold transition-all space-y-3 z-20"
          >
            <span className="label-xs text-gold uppercase tracking-widest font-mono">
              FEATURED STORY
            </span>
            
            <h3 className="font-display text-3xl text-espresso font-light">
              {weddingStoriesData[0].couple}
            </h3>

            <p className="font-editorial text-base italic text-gold font-light">
              "{weddingStoriesData[0].title}"
            </p>

            <p className="text-xs font-mono text-taupe">
              {weddingStoriesData[0].category} Wedding · {weddingStoriesData[0].location}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-espresso hover:text-gold transition-colors">
                <span>Read Their Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY GRID (Recent Stories — 2-Column Alternating Proportions) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 max-w-[1700px] mx-auto border-b border-espresso/10">
        <Reveal className="mb-14 flex items-end justify-between border-b border-espresso/10 pb-6">
          <div>
            <span className="label-xs text-gold uppercase font-mono tracking-widest">
              Curated Grid
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-light text-espresso">
              Recent <em className="font-editorial italic text-gold">Stories</em>
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Grid with Alternating Image Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {weddingStoriesData.map((story, idx) => {
            // Alternate aspect ratio: Even rows = left tall / right wide; Odd rows = left wide / right tall
            const isTall = idx % 2 === 0;

            return (
              <div
                key={story.id}
                onClick={() => setActiveStoryModal(story)}
                className="group space-y-4 cursor-pointer"
              >
                {/* Image (No Cards, Image DOMINATES) */}
                <div
                  className={`w-full overflow-hidden rounded-2xl bg-beige shadow-sm ${
                    isTall ? "aspect-[3/4]" : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={story.coverImage}
                    alt={story.couple}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                {/* Minimal Info */}
                <div className="space-y-1 pt-1 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal group-hover:text-gold transition-colors">
                    {story.couple}
                  </h3>
                  
                  <p className="font-editorial text-base italic text-taupe font-light">
                    "{story.title}"
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-mono text-taupe/80">
                      {story.category} · {story.location}
                    </span>

                    <span className="text-xs font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── LOVE STORY TYPE SECTION (How It Began - Warm Muted Sand Background) ── */}
      <section className="relative z-10 py-20 md:py-32 px-6 md:px-14 bg-[#F5F1EB] border-b border-espresso/10 overflow-hidden">
        {/* Faded Background Text: HOW IT BEGAN */}
        <span className="absolute left-1/2 -translate-x-1/2 top-10 font-display text-[14vw] leading-none text-espresso/5 font-extrabold select-none pointer-events-none tracking-widest whitespace-nowrap">
          HOW IT BEGAN
        </span>

        <div className="relative z-10 max-w-[1700px] mx-auto space-y-14">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="label-xs text-gold font-mono uppercase tracking-widest">
              Relationship Journeys
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-light text-espresso">
              Different Beginnings. <em className="font-editorial italic text-gold">Beautiful Endings.</em>
            </h2>
          </Reveal>

          {/* 3 Simple Story Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingStoriesData.slice(0, 3).map((s) => (
              <div
                key={s.id}
                onClick={() => setActiveStoryModal(s)}
                className="group space-y-4 bg-[#FAF8F5] p-6 rounded-2xl border border-espresso/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige">
                  <img
                    src={s.coverImage}
                    alt={s.couple}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-2">
                  <span className="label-xs text-gold bg-gold/10 px-3 py-1 rounded-full text-[10px]">
                    {s.category}
                  </span>
                  
                  <h3 className="font-display text-2xl text-espresso font-normal">
                    {s.couple}
                  </h3>

                  <p className="text-xs text-taupe font-sans font-light leading-relaxed">
                    "{s.hook}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATION STORIES (Horizontal Image Strip with City Overlay) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 border-b border-espresso/10 max-w-[1700px] mx-auto">
        <Reveal className="mb-12">
          <span className="label-xs text-gold font-mono uppercase tracking-widest">
            Photographer's Travel Log
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-light text-espresso">
            Stories From <em className="font-editorial italic text-gold">Different Places</em>
          </h2>
        </Reveal>

        {/* Photography Tile Strip */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-none snap-x snap-mandatory">
          {destinationTiles.map((dest, idx) => (
            <div
              key={idx}
              className="w-[220px] sm:w-[260px] md:w-[280px] shrink-0 snap-start group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0C0D10] text-ivory cursor-pointer shadow-md"
            >
              <img
                src={dest.image}
                alt={dest.city}
                loading="lazy"
                className="h-full w-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-display text-3xl font-light text-ivory group-hover:text-gold transition-colors">
                  {dest.city}
                </h3>
                <span className="text-xs font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  View Stories →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIMPLE JOURNAL SECTION (Minimal List with Thin Separators) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 border-b border-espresso/10 max-w-[1600px] mx-auto">
        <Reveal className="mb-12">
          <span className="label-xs text-gold font-mono uppercase tracking-widest">
            Dispatches
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-espresso">
            From The <em className="font-editorial italic text-gold">Journal</em>
          </h2>
        </Reveal>

        {/* Floating Image Preview Beside Cursor on Hover */}
        {hoveredJournalIndex !== null && (
          <div
            className="fixed pointer-events-none z-50 w-48 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-white transition-opacity duration-300 hidden md:block"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y - 60}px`,
            }}
          >
            <img
              src={weddingStoriesData[hoveredJournalIndex].coverImage}
              alt="Journal preview"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Minimal Row List */}
        <div className="divide-y divide-espresso/15 border-t border-b border-espresso/15">
          {weddingStoriesData.map((story, idx) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              onMouseEnter={() => setHoveredJournalIndex(idx)}
              onMouseLeave={() => setHoveredJournalIndex(null)}
              className="group py-5 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/80 transition-colors cursor-pointer"
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className="text-xs font-mono text-taupe/70 shrink-0 w-24">
                  {story.date}
                </span>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal group-hover:text-gold transition-colors">
                    {story.couple}
                  </h3>
                  <p className="text-xs text-taupe font-light">
                    {story.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 justify-between md:justify-end">
                <span className="text-xs font-mono text-taupe/80">
                  {story.category}
                </span>
                <span className="text-base text-espresso group-hover:text-gold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL SECTION (Full-Width Wedding Photo Banner) ── */}
      <section className="relative z-10 py-28 md:py-44 px-6 text-center text-ivory bg-[#0C0D10] overflow-hidden">
        <img
          src={featured}
          alt="Every frame holds a story"
          className="absolute inset-0 h-full w-full object-cover opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="label-xs text-gold uppercase tracking-[0.25em] font-mono">
            EVERY FRAME HOLDS A STORY
          </span>
          <h2 className="font-display text-[clamp(2.3rem,5.5vw,4.5rem)] font-light leading-tight text-ivory">
            “Some days pass. <em className="font-editorial italic text-gold">Some stay with you forever.</em>”
          </h2>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-cinema hover:bg-white text-xs font-mono font-semibold transition-all shadow-lg active:scale-95"
            >
              <span>View All Wedding Stories &amp; Enquire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL SIMPLE STORY PAGE READER MODAL ── */}
      {activeStoryModal && (
        <SimpleStoryReaderModal
          story={activeStoryModal}
          onClose={() => setActiveStoryModal(null)}
          onNextStory={(nextS) => setActiveStoryModal(nextS)}
        />
      )}
    </main>
  );
}

// ── INDIVIDUAL SIMPLE STORY READER MODAL ──
function SimpleStoryReaderModal({
  story,
  onClose,
  onNextStory,
}: {
  story: SimpleWeddingStory;
  onClose: () => void;
  onNextStory: (nextS: SimpleWeddingStory) => void;
}) {
  const currentIndex = weddingStoriesData.findIndex((s) => s.id === story.id);
  const nextStory = weddingStoriesData[(currentIndex + 1) % weddingStoriesData.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#FAF8F5] text-espresso overflow-y-auto animate-in fade-in duration-300">
      
      {/* Simple Sticky Navbar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-espresso/10">
        <span className="label-xs text-gold font-mono uppercase tracking-widest">
          {story.couple} — Story Journal
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-espresso text-ivory hover:bg-gold hover:text-cinema text-xs font-mono transition-all"
        >
          <span>Close Story</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 1. Full-Width Hero Image */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-end p-6 md:p-14">
        <img
          src={story.coverImage}
          alt={story.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="label-xs text-gold bg-black/60 px-3 py-1 rounded-full w-fit">
            {story.category} Wedding · {story.location} · {story.date}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light text-white">
            {story.couple}
          </h1>
          <p className="font-editorial text-xl italic text-gold font-light">
            "{story.title}"
          </p>
        </div>
      </section>

      {/* 2. Short Introduction */}
      <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto space-y-6">
        <p className="font-editorial text-2xl sm:text-3xl text-espresso font-light leading-relaxed italic border-l-4 border-gold pl-6">
          "{story.intro}"
        </p>
      </section>

      {/* 3. Flowing Story Content */}
      <section className="py-8 px-6 max-w-4xl mx-auto space-y-16">
        {story.chapters?.map((ch, i) => (
          <div key={i} className="space-y-4">
            <span className="text-xs font-mono text-gold font-bold">{ch.num}</span>
            <h3 className="font-display text-3xl text-espresso font-light">{ch.heading}</h3>
            <p className="text-base text-taupe font-sans font-light leading-relaxed">{ch.text}</p>
            {ch.img && (
              <div className="my-6 aspect-[16/10] overflow-hidden rounded-2xl bg-beige">
                <img src={ch.img} alt={ch.heading} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        ))}

        {story.quote && (
          <div className="py-10 text-center space-y-3">
            <QuoteIcon className="w-8 h-8 text-gold mx-auto opacity-50" />
            <p className="font-editorial text-2xl italic text-espresso">"{story.quote}"</p>
            <p className="text-xs font-mono text-taupe">— {story.couple}</p>
          </div>
        )}

        {/* Secondary Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          {story.secondaryImages.map((img, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-xl bg-beige">
              <img src={img} alt="Story photo" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Next Story Continuation */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-center items-center text-center p-6 cursor-pointer group"
      >
        <img
          src={nextStory.coverImage}
          alt={nextStory.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-3 max-w-xl">
          <span className="label-xs text-gold uppercase tracking-widest font-mono">NEXT STORY</span>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-light group-hover:text-gold transition-colors">
            {nextStory.couple}
          </h2>
          <p className="font-editorial text-base italic text-white/80">"{nextStory.title}"</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold text-cinema text-xs font-mono font-semibold pt-2">
            <span>Read Next Story</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </section>

    </div>
  );
}
