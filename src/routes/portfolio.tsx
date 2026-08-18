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
  title: string;
  location: string;
  date: string;
  category: string;
  quoteHook: string;
  aspect: "tall" | "wide";
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
    title: "A Winter Wedding in Jaipur",
    location: "Jaipur, Rajasthan",
    date: "12 Dec 2026",
    category: "Traditional Wedding",
    quoteHook:
      "Two families met. Somewhere between the conversations, two people found each other.",
    aspect: "tall",
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
        title: "How It Began",
        text: "It started as a quiet Sunday meeting over tea in Delhi. No grand promises — just an instant, unexpected ease that felt like coming home.",
        image: cat2,
      },
      {
        number: "02",
        title: "The Days Before",
        text: "In the ancestral courtyard of Amer Haveli, yellow marigold petals showered from balconies as classical musicians filled the air.",
        image: haldi,
      },
      {
        number: "03",
        title: "The Wedding Day",
        text: "Sacred Vedic pheras around the holy fire as dusk illuminated ancient pink sandstone arches.",
        image: heroImg,
      },
      {
        number: "04",
        title: "The Moments Between",
        text: "The silent hand squeeze beneath the silk veil. Her mother's quiet breath before the Vidai.",
        image: story1,
      },
      {
        number: "05",
        title: "What We Remember",
        text: "Every laughter that echoed across Rajasthan courtyards as two families became one.",
        image: luxuryEditorial,
      },
    ],
    coupleQuote:
      "We barely remember posing for the photographs. But somehow, every photograph feels like us.",
  },

  {
    id: "s2",
    num: "02",
    couple: "Rhea & Kabir",
    title: "A Royal Celebration in Udaipur",
    location: "Udaipur, Rajasthan",
    date: "08 Jan 2026",
    category: "Royal Wedding",
    quoteHook:
      "Ten years of shared city train rides culminated on a floating lake island.",
    aspect: "wide",
    coverImage: featured,
    secondaryImages: [story3, cat1, luxuryEditorial],
    intro: [
      "Ten years ago, they sat next to each other in a college lecture hall.",
      "Ten years later, they stood on Lake Pichola as mist rose over the palace hills.",
    ],
    chapters: [
      {
        number: "01",
        title: "How It Began",
        text: "A decade of quiet trust, long-distance years, and unwavering friendship built the foundation for their lakefront celebration.",
        image: story3,
      },
      {
        number: "02",
        title: "The Wedding Day",
        text: "Floating oil lamps drifted on Lake Pichola as vows were exchanged beneath an ivory silk mandap.",
        image: featured,
      },
      {
        number: "03",
        title: "What We Remember",
        text: "The unscripted laughter that broke out during the midnight sitar session on the palace lawns.",
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
    title: "Barefoot Sunset Vows in Goa",
    location: "Goa Beachfront",
    date: "22 Jan 2026",
    category: "Destination Wedding",
    quoteHook:
      "Barefoot sunset vows where the Arabian Sea met golden shoreline promises.",
    aspect: "wide",
    coverImage: coastal,
    secondaryImages: [cat1, story2, haldi],
    intro: [
      "There is something magical about a wedding by the sea.",
      "Especially when the setting sun casts a golden glow over barefoot vows on sandy shores.",
    ],
    chapters: [
      {
        number: "01",
        title: "How It Began",
        text: "He grew up in South India; she grew up in Punjab. Their coastal celebration brought two vibrant cultures together under the warm Goa sun.",
        image: coastal,
      },
      {
        number: "02",
        title: "The Wedding Day",
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
    title: "Arabian Desert Dunes Story",
    location: "Dubai, UAE",
    date: "14 Dec 2025",
    category: "International Wedding",
    quoteHook:
      "Golden desert sand dunes at sunset followed by a waterfront Nikah.",
    aspect: "tall",
    coverImage: cat1,
    secondaryImages: [luxuryEditorial, heroImg],
    intro: [
      "Three days in Dubai.",
      "Connecting families from London, Dubai, and Mumbai under Arabian desert skies.",
    ],
    chapters: [
      {
        number: "01",
        title: "How It Began",
        text: "Standing amid red desert sands as the sun melted into the dunes, Saba's ivory veil caught the desert breeze.",
        image: cat1,
      },
      {
        number: "02",
        title: "The Wedding Day",
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
    title: "Eco-Luxury Farm Vows",
    location: "Karjat, Maharashtra",
    date: "04 Feb 2026",
    category: "Intimate Wedding",
    quoteHook:
      "An eco-luxury farmhouse wedding with eighty close family members.",
    aspect: "tall",
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
        title: "How It Began",
        text: "An open-air Haldi ceremony filled with yellow blooms, spontaneous music jams, and farm-to-table dinners under starry skies.",
        image: haldi,
      },
    ],
    coupleQuote:
      "Small weddings have a big soul. Looking at these photos brings back every laugh and tear.",
  },
];

const categoryDataMap: Record<
  string,
  { title: string; desc: string; image: string }
> = {
  "Traditional Weddings": {
    title: "Traditional Weddings",
    desc: "Families, sacred rituals and ancestral traditions that turn one day into a memory for generations.",
    image: story3,
  },
  "Arranged Love Stories": {
    title: "Arranged Love Stories",
    desc: "Two souls introduced by families who discovered their exact missing piece.",
    image: cat2,
  },
  "Destination Weddings": {
    title: "Destination Weddings",
    desc: "Coastal ocean vows, sea mist romance and exotic locales around the world.",
    image: coastal,
  },
  "Royal Weddings": {
    title: "Royal Weddings",
    desc: "Grand palace courtyards, ancient sandstone forts and Rajwadi grandeur.",
    image: luxuryEditorial,
  },
  "Intimate Weddings": {
    title: "Intimate Weddings",
    desc: "Micro-gatherings, open-air farm suppers and unhurried family closeness.",
    image: haldi,
  },
  "Cultural Weddings": {
    title: "Cultural Weddings",
    desc: "Authentic regional heritage, traditional attire, and folk music soul.",
    image: heroImg,
  },
  "International Weddings": {
    title: "International Weddings",
    desc: "Dubai desert dunes, Italian lakes and global love stories across continents.",
    image: cat1,
  },
};

const destinationTiles = [
  { city: "Jaipur", image: heroImg },
  { city: "Udaipur", image: luxuryEditorial },
  { city: "Jaisalmer", image: cat2 },
  { city: "Goa", image: coastal },
  { city: "Dubai", image: cat1 },
  { city: "Bali", image: featured },
];

const loveStoryTypes = [
  {
    category: "Arranged Love",
    hook: "Two families met first. The story followed quietly after.",
    image: cat2,
  },
  {
    category: "College Sweethearts",
    hook: "Ten years after sitting next to each other in class, they said their vows.",
    image: story3,
  },
  {
    category: "Long Distance",
    hook: "Two continents, endless flight miles, and one forever promise.",
    image: coastal,
  },
  {
    category: "Family Introduced",
    hook: "Introduced over a Sunday cup of tea in Delhi, bound by soulmates.",
    image: luxuryEditorial,
  },
];

export function WeddingStoriesPage() {
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

      {/* ── 1. HERO (PRESERVED 100% UNCHANGED AS REQUESTED BY USER) ── */}
      <section className="relative z-10 h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col justify-between p-6 md:p-14 border-b border-black/5">
        {/* Full-Bleed Background Image with Left Subtle Foggy Mist Fade */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={featured}
            alt="Wedding Stories Background"
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-[10000ms]"
          />
          {/* Minimal Fog Gradient — Keeps full background image sharp and vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/75 via-[#FAF8F5]/20 via-20% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent" />
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





      {/* ── SECTION 3: FEATURED STORY (Cinematic Large Image + Floating Panel) ── */}
      <section className="relative z-10 py-20 md:py-28 px-4 md:px-10 max-w-[1700px] mx-auto border-b border-black/5">
        <div className="relative mx-auto w-full md:w-[92%]">
          {/* Large Cinematic Image */}
          <div
            onClick={() => setActiveStory(storiesList[0])}
            className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl cursor-pointer bg-beige shadow-lg group"
          >
            <img
              src={storiesList[0].coverImage}
              alt={storiesList[0].couple}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Floating Text Panel */}
          <div
            onClick={() => setActiveStory(storiesList[0])}
            className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 md:max-w-md bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-xl cursor-pointer hover:border-[#C5A880] transition-all space-y-3 z-20"
          >
            <span className="label-xs text-[#C5A880] uppercase tracking-widest font-mono">
              FEATURED STORY
            </span>

            <h3 className="font-display text-3xl text-espresso font-light">
              {storiesList[0].couple}
            </h3>

            <p className="font-editorial text-base italic text-[#C5A880] font-light">
              "{storiesList[0].title}"
            </p>

            <p className="text-xs font-mono text-taupe">
              {storiesList[0].category} · {storiesList[0].location}
            </p>

            <p className="text-xs text-taupe/90 font-sans font-light leading-relaxed">
              "{storiesList[0].quoteHook}"
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-espresso hover:text-[#C5A880] transition-colors">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: RECENT STORIES LAYOUT (Mixed-Layout Gallery) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 max-w-[1700px] mx-auto border-b border-black/5 space-y-12">
        <Reveal className="border-b border-black/5 pb-4">
          <span className="label-xs text-[#C5A880] uppercase font-mono tracking-widest">
            Dispatches
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-espresso">
            Recent <em className="font-editorial italic text-[#C5A880]">Stories</em>
          </h2>
        </Reveal>

        {/* Mixed-Layout Gallery (Row 1: Tall + Wide, Row 2: Wide + Tall) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {storiesList.slice(0, 4).map((story, idx) => {
            const isTall = idx % 3 === 0;

            return (
              <div
                key={story.id}
                onClick={() => setActiveStory(story)}
                className="group space-y-4 cursor-pointer"
              >
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

                <div className="space-y-1 pt-1 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal group-hover:text-[#C5A880] transition-colors">
                    {story.couple}
                  </h3>

                  <p className="font-editorial text-base italic text-taupe font-light">
                    "{story.title}"
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-mono text-taupe/80">
                      {story.category} · {story.location}
                    </span>

                    <span className="text-xs font-mono text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
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

      {/* ── SECTION 5: STORY TYPE HIGHLIGHT SECTION (Different Beginnings) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 bg-[#F5F1EB] border-b border-black/5 space-y-12">
        <Reveal className="text-center max-w-2xl mx-auto space-y-2">
          <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
            Relationships
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-espresso">
            Different Beginnings. <em className="font-editorial italic text-[#C5A880]">Beautiful Endings.</em>
          </h2>
        </Reveal>

        {/* 4 Story Type Highlight Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1700px] mx-auto">
          {loveStoryTypes.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStory(storiesList[idx % storiesList.length])}
              className="group bg-[#FAF8F5] p-5 rounded-2xl border border-espresso/10 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige">
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-xl text-espresso font-normal group-hover:text-[#C5A880] transition-colors">
                  {item.category}
                </h3>
                <p className="text-xs text-taupe font-sans font-light leading-relaxed">
                  "{item.hook}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: DESTINATION STORIES (Location-Based Image Strip) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 border-b border-black/5 max-w-[1700px] mx-auto space-y-10">
        <Reveal>
          <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
            Photographer's Travel Log
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-espresso">
            Stories From <em className="font-editorial italic text-[#C5A880]">Different Places</em>
          </h2>
        </Reveal>

        {/* Clean Photography Tile Strip */}
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
                className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-display text-3xl font-light text-ivory group-hover:text-[#C5A880] transition-colors">
                  {dest.city}
                </h3>
                <span className="text-xs font-mono text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  View Stories →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: SIMPLE STORY ARCHIVE OR JOURNAL LIST (With Floating Hover Image) ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-14 max-w-[1600px] mx-auto border-b border-black/5 space-y-10">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-espresso">
            All <em className="font-editorial italic text-[#C5A880]">Wedding Stories</em>
          </h2>
        </Reveal>

        {/* Floating Image Preview Beside Cursor on Hover */}
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
              alt="Archive row preview"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Clean Row List */}
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {storiesList.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => setActiveStory(s)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group py-5 flex items-center justify-between gap-4 hover:bg-white/80 transition-colors cursor-pointer px-2"
            >
              <div className="flex items-center gap-6 sm:gap-12">
                <span className="text-xs font-mono text-taupe/70 shrink-0 w-24">
                  {s.date}
                </span>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal group-hover:text-[#C5A880] transition-colors">
                    {s.couple}
                  </h3>
                  <p className="text-xs text-taupe font-light">
                    {s.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 justify-between md:justify-end">
                <span className="text-xs font-mono text-taupe/80 hidden sm:inline">
                  {s.category}
                </span>
                <span className="text-xs font-mono text-taupe/60">
                  {s.location}
                </span>
                <span className="text-base text-espresso group-hover:text-[#C5A880] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── INDIVIDUAL STORY PAGE MODAL (Seamless Reader Experience) ── */}
      {activeStory && (
        <IndividualStoryPageModal
          story={activeStory}
          onClose={() => setActiveStory(null)}
          onNextStory={(nextS) => setActiveStory(nextS)}
        />
      )}
    </main>
  );
}

// ── INDIVIDUAL STORY PAGE MODAL ──
function IndividualStoryPageModal({
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
          <span>Close Story</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Hero Image */}
      <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-end p-6 md:p-14">
        <img
          src={story.coverImage}
          alt={story.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[#C5A880] uppercase">
            {story.category} · {story.location} · {story.date}
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
            {story.couple}
          </h1>
          <p className="font-editorial text-xl italic text-gold">{story.title}</p>
          <p className="text-xs font-mono text-white/60 pt-2">Scroll ↓</p>
        </div>
      </section>

      {/* Short Introduction */}
      <section className="py-16 px-6 max-w-2xl mx-auto space-y-4">
        {story.intro.map((p, i) => (
          <p key={i} className="font-editorial text-2xl sm:text-3xl text-espresso font-light leading-relaxed italic border-l-4 border-[#C5A880] pl-6">
            "{p}"
          </p>
        ))}
      </section>

      {/* Flowing Story Chapters */}
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
              <img src={img} alt="Story photo" className="h-full w-full object-cover" />
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
          <p className="font-editorial text-base italic text-white/80">{nextStory.title}</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C5A880] text-cinema text-xs font-mono font-semibold pt-2">
            <span>Read Next Story →</span>
          </span>
        </div>
      </section>

    </div>
  );
}
