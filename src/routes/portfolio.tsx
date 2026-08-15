import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Play, X, Quote as QuoteIcon } from "lucide-react";
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
  "Real weddings. Real people. Real memories. Scroll through real wedding stories documented by CMC FILMS.";

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

export interface StoryItem {
  id: string;
  num: string;
  couple: string;
  location: string;
  date: string;
  category: "Traditional" | "Destination" | "Arranged Love" | "Royal" | "Intimate" | "Cultural" | "International";
  quoteHook: string;
  coverImage: string;
  secondaryImages: string[];
  intro: string[];
  chapters: {
    number: string;
    title: string;
    text: string;
    image?: string;
  }[];
  coupleQuote: string;
}

const storiesList: StoryItem[] = [
  {
    id: "s1",
    num: "01",
    couple: "Aarav & Meera",
    location: "Jaipur, Rajasthan",
    date: "December 2026",
    category: "Traditional",
    quoteHook:
      "Two families met. Somewhere between the conversations, two people found each other.",
    coverImage: luxuryEditorial,
    secondaryImages: [heroImg, haldi, cat2, story1],
    intro: [
      "They did not meet in college. There was no dramatic love-at-first-sight moment.",
      "Their families introduced them.",
      "What followed was much quieter. And somehow, much more beautiful.",
    ],
    chapters: [
      {
        number: "01",
        title: "How It Started",
        text: "It began as a quiet Sunday meeting over tea in Delhi. No grand promises — just an instant, unexpected ease that felt like catching up with an old friend.",
        image: cat2,
      },
      {
        number: "02",
        title: "The Days Before",
        text: "In the ancestral courtyard of Amer Haveli, yellow marigold petals showered from balconies as classical musicians filled the air with traditional blessing hymns.",
        image: haldi,
      },
      {
        number: "03",
        title: "The Wedding",
        text: "Sacred Vedic pheras around the holy fire as dusk illuminated ancient pink sandstone arches. A moment frozen in quiet reverence.",
        image: heroImg,
      },
      {
        number: "04",
        title: "What We Remember",
        text: "The silent hand squeeze beneath the silk veil. Her mother's quiet breath before the Vidai.",
        image: story1,
      },
    ],
    coupleQuote:
      "We barely remember posing for the photographs. But somehow, every photograph feels like us.",
  },

  {
    id: "s2",
    num: "02",
    couple: "Rhea & Kabir",
    location: "Udaipur, Rajasthan",
    date: "January 2026",
    category: "Royal",
    quoteHook:
      "Ten years of shared city train rides culminated on a floating lake island.",
    coverImage: featured,
    secondaryImages: [story3, cat1, luxuryEditorial],
    intro: [
      "Ten years ago, they sat next to each other in a college lecture hall.",
      "Ten years later, they stood on Lake Pichola as mist rose over the palace hills.",
    ],
    chapters: [
      {
        number: "01",
        title: "How It Started",
        text: "A decade of quiet trust, long-distance years, and unwavering friendship built the foundation for their lakefront celebration.",
        image: story3,
      },
      {
        number: "02",
        title: "The Wedding",
        text: "Floating oil lamps drifted on Lake Pichola as vows were exchanged beneath an ivory silk mandap.",
        image: featured,
      },
      {
        number: "03",
        title: "What We Remember",
        text: "The laughter that broke out during the midnight sitar session on the palace lawns.",
        image: cat1,
      },
    ],
    coupleQuote:
      "Every single photograph captured by CMC FILMS feels like a scene from a film we get to keep forever.",
  },

  {
    id: "s3",
    num: "03",
    couple: "Aneesh & Maitri",
    location: "Goa Beachfront",
    date: "January 2026",
    category: "Destination",
    quoteHook:
      "Barefoot sunset vows where the Arabian Sea met golden shoreline promises.",
    coverImage: coastal,
    secondaryImages: [cat1, story2, haldi],
    intro: [
      "There is something magical about a wedding by the sea.",
      "Especially when the setting sun casts a golden glow over barefoot vows on sandy shores.",
    ],
    chapters: [
      {
        number: "01",
        title: "How It Started",
        text: "He grew up in South India; she grew up in Punjab. Their coastal celebration brought two vibrant cultures together under the warm Goa sun.",
        image: coastal,
      },
      {
        number: "02",
        title: "The Wedding",
        text: "Exchanging oceanfront promises with ocean waves rustling just yards away.",
        image: cat1,
      },
    ],
    coupleQuote:
      "We didn't want a stiff, formal wedding. We wanted ocean air, laughter, and authentic photos — and that's exactly what we received.",
  },

  {
    id: "s4",
    num: "04",
    couple: "Saba & Usman",
    location: "Dubai, UAE",
    date: "December 2025",
    category: "International",
    quoteHook:
      "Golden desert sand dunes at sunset followed by a waterfront Nikah.",
    coverImage: cat1,
    secondaryImages: [luxuryEditorial, heroImg],
    intro: [
      "Three days in Dubai.",
      "Connecting families from London, Dubai, and Mumbai under Arabian desert skies.",
    ],
    chapters: [
      {
        number: "01",
        title: "The Desert Dunes",
        text: "Standing amid red desert sands as the sun melted into the dunes, Saba's ivory veil caught the desert breeze.",
        image: cat1,
      },
      {
        number: "02",
        title: "The Nikah",
        text: "Under a mirror and floral canopy overlooking the Gulf skyline, sacred promises were spoken in quiet beauty.",
        image: luxuryEditorial,
      },
    ],
    coupleQuote:
      "CMC FILMS documented our destination wedding with the aesthetic care of a high-fashion magazine.",
  },

  {
    id: "s5",
    num: "05",
    couple: "Dhruv & Pippa",
    location: "Karjat, Maharashtra",
    date: "February 2026",
    category: "Intimate",
    quoteHook:
      "An eco-luxury farmhouse wedding with eighty close family members.",
    coverImage: haldi,
    secondaryImages: [story2, coastal],
    intro: [
      "Eighty guests.",
      "Green Karjat hills.",
      "No rush. No pretense. Just pure family presence.",
    ],
    chapters: [
      {
        number: "01",
        title: "The Farmhouse",
        text: "An open-air Haldi ceremony filled with yellow blooms, spontaneous music jams, and farm-to-table dinners under starry skies.",
        image: haldi,
      },
    ],
    coupleQuote:
      "Small weddings have a big soul. Looking at these photos brings back every laugh and tear.",
  },
];

const categoryHoverImages: Record<string, string> = {
  Traditional: story3,
  Destination: coastal,
  "Arranged Love": cat2,
  Royal: luxuryEditorial,
  Intimate: haldi,
  Cultural: heroImg,
  International: cat1,
};

export function WeddingStoriesPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-[#C5A880]/20 relative overflow-hidden"
    >
      {/* ── SUBTLE FILM GRAIN & AMBIENT BACKGROUND SYSTEM ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#EFECE6] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-[#F7F2EF] rounded-full blur-[160px]" />
      </div>

      {/* ── 1. HERO (Full-Screen Background Image with Left Foggy Gradient & WEDDING STORIES Typography) ── */}
      <section className="relative z-10 h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col justify-between p-6 md:p-14 border-b border-black/5">
        {/* Full-Bleed Background Image with Left Subtle Foggy Mist Fade */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={featured}
            alt="Wedding Stories Background"
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-[10000ms]"
          />
          {/* Left Foggy Mist Gradient Fade — Stronger behind text for 100% readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/70 via-transparent to-[#FAF8F5]/30" />
        </div>

        {/* Large Bold High-Contrast Typography Over Foggy Gradient */}
        <div className="relative z-10 my-auto max-w-4xl space-y-6">
          <Reveal>
            <h1 className="font-display text-[clamp(4rem,11.5vw,9.5rem)] leading-[0.85] font-extrabold text-[#0C0D10] tracking-tight select-none drop-shadow-sm">
              WEDDING <br />
              <em className="font-editorial italic text-[#A67B2E] font-bold drop-shadow-sm">
                STORIES
              </em>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A] font-sans font-medium leading-relaxed max-w-xs space-y-1 pt-2">
              <span>Real weddings.</span> <br />
              <span>Real people.</span> <br />
              <span>Real memories.</span>
            </p>
          </Reveal>
        </div>

        {/* Bottom Indicator */}
        <div className="relative z-10 flex justify-between items-end text-xs font-mono text-espresso/50 border-t border-espresso/10 pt-4">
          <span>REAL SHOOT DIARIES</span>
          <span className="flex items-center gap-2">
            Scroll to discover <ArrowDown className="w-3.5 h-3.5 text-[#C5A880]" />
          </span>
        </div>
      </section>

      {/* ── 2. STORY DISCOVERY (Text-Only Categories with Cursor Photo Follow) ── */}
      <section className="relative z-10 py-24 md:py-36 px-6 md:px-16 border-b border-black/5">
        <Reveal className="mb-14">
          <p className="font-editorial text-2xl sm:text-3xl text-espresso/70 font-light italic">
            “Choose a story that feels like yours.”
          </p>
        </Reveal>

        {/* Hover Category Background Photo Follower */}
        {hoveredCategory && categoryHoverImages[hoveredCategory] && (
          <div
            className="fixed pointer-events-none z-40 w-80 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-500 hidden md:block"
            style={{
              left: `${mousePos.x + 30}px`,
              top: `${mousePos.y - 120}px`,
            }}
          >
            <img
              src={categoryHoverImages[hoveredCategory]}
              alt={hoveredCategory}
              className="h-full w-full object-cover animate-in fade-in duration-300"
            />
          </div>
        )}

        {/* Elegant Typography Category List */}
        <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-x-14 md:gap-y-10 items-baseline max-w-5xl">
          {[
            "Traditional",
            "Destination",
            "Arranged Love",
            "Royal",
            "Intimate",
            "Cultural",
            "International",
          ].map((cat) => (
            <span
              key={cat}
              onMouseEnter={() => setHoveredCategory(cat)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => {
                const matched = storiesList.find((s) => s.category.includes(cat.split(" ")[0])) || storiesList[0];
                setActiveStory(matched);
              }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-espresso/40 hover:text-espresso hover:text-[#C5A880] transition-colors duration-300 cursor-pointer select-none"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. MAIN STORY EXPERIENCE (Viewport-Sized Compositional Stories, NO CARDS) ── */}
      <section className="relative z-10 space-y-28 md:space-y-44 py-20">
        
        {/* STORY 01 — Aarav & Meera (Left Image / Right Content) */}
        <div className="px-6 md:px-16 max-w-[1700px] mx-auto min-h-[80vh] flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full">
            <div
              onClick={() => setActiveStory(storiesList[0])}
              className="lg:col-span-7 aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer group shadow-xl"
            >
              <img
                src={storiesList[0].coverImage}
                alt={storiesList[0].couple}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="lg:col-span-5 space-y-6 relative">
              <span className="font-display text-8xl md:text-9xl text-espresso/5 font-extrabold absolute -top-16 -left-4 select-none pointer-events-none">
                01
              </span>

              <div className="space-y-2 relative z-10">
                <h2 className="font-display text-4xl sm:text-6xl font-light text-espresso">
                  {storiesList[0].couple}
                </h2>
                <p className="text-xs font-mono text-espresso/60">
                  {storiesList[0].location} · {storiesList[0].category} Wedding
                </p>
              </div>

              <p className="font-editorial text-xl sm:text-2xl text-espresso/80 font-light italic leading-relaxed pt-2">
                "{storiesList[0].quoteHook}"
              </p>

              <button
                type="button"
                onClick={() => setActiveStory(storiesList[0])}
                className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-espresso hover:text-[#C5A880] transition-colors pt-4 group"
              >
                <span className="border-b border-espresso/40 pb-0.5">Read Their Story</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* INTERLEAVED CATEGORY MOMENT — DESTINATION */}
        <div className="relative py-20 px-6 text-center overflow-hidden bg-[#F5F0EB] border-y border-black/5">
          <span className="absolute inset-0 flex items-center justify-center font-display text-[15vw] leading-none text-espresso/5 font-bold select-none pointer-events-none">
            DESTINATION
          </span>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest">CHAPTER</span>
            <h3 className="font-display text-3xl sm:text-5xl font-light text-espresso">
              “Some stories take us far from home.”
            </h3>
            <button
              type="button"
              onClick={() => setActiveStory(storiesList[2])}
              className="text-xs font-mono text-espresso hover:text-[#C5A880] underline pt-2 inline-block"
            >
              Explore Destination Weddings →
            </button>
          </div>
        </div>

        {/* STORY 02 — Rhea & Kabir (Right Image / Left Content) */}
        <div className="px-6 md:px-16 max-w-[1700px] mx-auto min-h-[80vh] flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full">
            <div className="lg:col-span-5 space-y-6 lg:order-1 order-2 relative">
              <span className="font-display text-8xl md:text-9xl text-espresso/5 font-extrabold absolute -top-16 -left-4 select-none pointer-events-none">
                02
              </span>

              <div className="space-y-2 relative z-10">
                <h2 className="font-display text-4xl sm:text-6xl font-light text-espresso">
                  {storiesList[1].couple}
                </h2>
                <p className="text-xs font-mono text-espresso/60">
                  {storiesList[1].location} · {storiesList[1].category} Wedding
                </p>
              </div>

              <p className="font-editorial text-xl sm:text-2xl text-espresso/80 font-light italic leading-relaxed pt-2">
                "{storiesList[1].quoteHook}"
              </p>

              <button
                type="button"
                onClick={() => setActiveStory(storiesList[1])}
                className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-espresso hover:text-[#C5A880] transition-colors pt-4 group"
              >
                <span className="border-b border-espresso/40 pb-0.5">Read Their Story</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              onClick={() => setActiveStory(storiesList[1])}
              className="lg:col-span-7 aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer group shadow-xl lg:order-2 order-1"
            >
              <img
                src={storiesList[1].coverImage}
                alt={storiesList[1].couple}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* STORY 03 — Aneesh & Maitri (Full-Width Horizontal Image Composition) */}
        <div className="px-6 md:px-16 max-w-[1700px] mx-auto space-y-6">
          <div
            onClick={() => setActiveStory(storiesList[2])}
            className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl cursor-pointer group shadow-xl relative"
          >
            <img
              src={storiesList[2].coverImage}
              alt={storiesList[2].couple}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#C5A880]">03</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso">
                {storiesList[2].couple}
              </h2>
              <p className="text-xs font-mono text-espresso/60">
                {storiesList[2].location} · {storiesList[2].category}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveStory(storiesList[2])}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-espresso hover:text-[#C5A880] transition-colors"
            >
              <span>Read Their Story →</span>
            </button>
          </div>
        </div>

        {/* STORY 04 — Saba & Usman (Diptych Two Vertical Photos Composition) */}
        <div className="px-6 md:px-16 max-w-[1700px] mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              onClick={() => setActiveStory(storiesList[3])}
              className="aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer group shadow-lg"
            >
              <img
                src={storiesList[3].coverImage}
                alt={storiesList[3].couple}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              onClick={() => setActiveStory(storiesList[3])}
              className="aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer group shadow-lg hidden sm:block"
            >
              <img
                src={storiesList[3].secondaryImages[0]}
                alt={storiesList[3].couple}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="flex justify-between items-end border-t border-black/5 pt-6">
            <div>
              <span className="text-xs font-mono text-[#C5A880]">04</span>
              <h2 className="font-display text-3xl font-light text-espresso">
                {storiesList[3].couple}
              </h2>
              <p className="text-xs font-mono text-espresso/60">
                {storiesList[3].location} · {storiesList[3].category}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveStory(storiesList[3])}
              className="text-xs font-mono text-espresso hover:text-[#C5A880]"
            >
              Read Their Story →
            </button>
          </div>
        </div>

      </section>

      {/* ── 5. SIGNATURE SCROLL MOMENT (Deep Charcoal Emotional Highlight) ── */}
      <section className="relative z-10 py-32 md:py-48 px-6 text-center text-ivory bg-[#0C0D10] my-28 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <span className="text-xs font-mono text-[#C5A880] uppercase tracking-[0.3em]">
            THE UNNOTICED MOMENTS
          </span>

          <div className="max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <img
              src={story2}
              alt="Quiet candid moment"
              className="h-full w-full object-cover opacity-80"
            />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="font-editorial text-2xl sm:text-4xl italic text-ivory font-light leading-relaxed">
              “Not every important moment happens at the mandap.”
            </h3>
            <p className="text-xs sm:text-sm font-sans text-ivory/60 font-light">
              Sometimes the story is happening quietly beside it.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. STORY INDEX (Clean Rows with Cursor Image Preview) ── */}
      <section className="relative z-10 py-24 px-6 md:px-16 max-w-[1600px] mx-auto border-b border-black/5">
        <Reveal className="mb-12">
          <h2 className="font-display text-4xl font-light text-espresso">
            All <em className="font-editorial italic text-[#C5A880]">Stories</em>
          </h2>
        </Reveal>

        {/* Hover Floating Photo Preview */}
        {hoveredIndex !== null && (
          <div
            className="fixed pointer-events-none z-50 w-52 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-white transition-opacity duration-300 hidden md:block"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y - 60}px`,
            }}
          >
            <img
              src={storiesList[hoveredIndex].coverImage}
              alt="Story row preview"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {storiesList.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => setActiveStory(s)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group py-5 flex items-center justify-between gap-4 hover:bg-white/80 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6 sm:gap-12">
                <span className="text-xs font-mono text-[#C5A880] shrink-0">{s.num}</span>
                <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal group-hover:text-[#C5A880] transition-colors">
                  {s.couple}
                </h3>
              </div>

              <div className="flex items-center gap-8 text-xs font-mono text-espresso/60">
                <span className="hidden sm:inline">{s.location}</span>
                <span>{s.category}</span>
                <span className="text-espresso group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FINAL SECTION (Full-Width Wedding Photo Banner) ── */}
      <section className="relative z-10 py-32 text-center text-ivory bg-[#0C0D10] overflow-hidden">
        <img
          src={featured}
          alt="Every frame holds a story"
          className="absolute inset-0 h-full w-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 px-6">
          <span className="text-xs font-mono text-[#C5A880] uppercase tracking-[0.25em]">
            EVERY FRAME HOLDS A STORY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white leading-tight">
            “Some days pass. <br />
            <em className="font-editorial italic text-[#C5A880]">Some stay with you forever.</em>”
          </h2>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-cinema hover:bg-white text-xs font-mono font-semibold transition-all shadow-lg active:scale-95"
            >
              <span>View All Wedding Stories &amp; Enquire →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL STORY PAGE MODAL (Seamless Reader Experience) ── */}
      {activeStory && (
        <IndividualStoryReaderModal
          story={activeStory}
          onClose={() => setActiveStory(null)}
          onNextStory={(nextS) => setActiveStory(nextS)}
        />
      )}
    </main>
  );
}

// ── INDIVIDUAL STORY READER MODAL ──
function IndividualStoryReaderModal({
  story,
  onClose,
  onNextStory,
}: {
  story: StoryItem;
  onClose: () => void;
  onNextStory: (nextS: StoryItem) => void;
}) {
  const currentIndex = storiesList.findIndex((s) => s.id === story.id);
  const nextStory = storiesList[(currentIndex + 1) % storiesList.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#FAF8F5] text-espresso overflow-y-auto animate-in fade-in duration-300">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-black/5">
        <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest">
          A STORY BY CMC FILMS
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-espresso text-ivory hover:bg-[#C5A880] hover:text-cinema text-xs font-mono transition-all"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-end p-6 md:p-14">
        <img
          src={story.coverImage}
          alt={story.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[#C5A880] uppercase">
            {story.location} · {story.date}
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
            {story.couple}
          </h1>
          <p className="text-xs font-mono text-white/60">Scroll ↓</p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 px-6 max-w-2xl mx-auto space-y-4">
        {story.intro.map((p, i) => (
          <p key={i} className="font-editorial text-2xl sm:text-3xl text-espresso font-light leading-relaxed italic">
            "{p}"
          </p>
        ))}
      </section>

      {/* Chapters & Flowing Content */}
      <section className="py-8 px-6 max-w-3xl mx-auto space-y-16">
        {story.chapters.map((ch, i) => (
          <div key={i} className="space-y-4">
            <span className="text-xs font-mono text-[#C5A880] font-bold">{ch.number} — {ch.title}</span>
            <p className="text-base text-espresso/80 font-sans font-light leading-relaxed">{ch.text}</p>
            {ch.image && (
              <div className="my-6 aspect-[16/10] overflow-hidden rounded-2xl bg-beige">
                <img src={ch.image} alt={ch.title} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        ))}

        {/* Couple Quote */}
        {story.coupleQuote && (
          <div className="py-12 text-center space-y-3 border-t border-b border-black/10">
            <QuoteIcon className="w-8 h-8 text-[#C5A880] mx-auto opacity-50" />
            <p className="font-editorial text-2xl sm:text-3xl italic text-espresso font-light">
              "{story.coupleQuote}"
            </p>
            <p className="text-xs font-mono text-espresso/60">— {story.couple}</p>
          </div>
        )}

        {/* Secondary Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {story.secondaryImages.map((img, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-xl bg-beige">
              <img src={img} alt="Story snapshot" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Next Story Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="relative h-[65vh] min-h-[400px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-center items-center text-center p-6 cursor-pointer group"
      >
        <img
          src={nextStory.coverImage}
          alt={nextStory.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-3 max-w-xl">
          <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest">NEXT STORY</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white font-light group-hover:text-[#C5A880] transition-colors">
            {nextStory.couple}
          </h2>
          <p className="font-editorial text-base italic text-white/80">{nextStory.location}</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C5A880] text-cinema text-xs font-mono font-semibold pt-2">
            <span>Read Next Story →</span>
          </span>
        </div>
      </section>

    </div>
  );
}
