import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  Camera,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Search,
  Sparkles,
  X,
  Play,
  Share2,
  Quote as QuoteIcon,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";

// Image Assets
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

const pageTitle = "Wedding Stories & Editorial Journal — CMC FILMS";
const pageDescription =
  "An editorial collection of real wedding stories, heritage palace ceremonies, arranged love diaries, and destination celebrations documented by CMC FILMS.";

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
export interface WeddingStory {
  id: string;
  slug: string;
  couple: string;
  subtitle: string;
  category:
    | "Traditional"
    | "Arranged Marriage"
    | "Destination"
    | "Royal"
    | "Intimate"
    | "Cultural"
    | "Intercultural"
    | "International";
  culture:
    | "Rajasthani"
    | "Punjabi"
    | "Gujarati"
    | "South Indian"
    | "Bengali"
    | "Sikh"
    | "Muslim"
    | "Christian"
    | "Intercultural";
  location: string;
  country: string;
  coordinates?: string;
  venue: string;
  date: string;
  readTime: string;
  coverImage: string;
  secondaryImages: string[];
  excerpt: string;
  introText: string;
  relationshipJourney?: {
    type: string;
    quote: string;
  };
  chapters: {
    number: string;
    title: string;
    content: string;
    image?: string;
  }[];
  videoPoster?: string;
  coupleQuote: string;
  vendors: {
    photography: string;
    cinematography: string;
    venue: string;
    planner: string;
    decor: string;
  };
  isFeatured?: boolean;
  isEditorsPick?: boolean;
}

// ── COMPREHENSIVE EDITORIAL STORIES DATA ──
const weddingStories: WeddingStory[] = [
  {
    id: "ws-1",
    slug: "aditi-arjun-jaipur",
    couple: "Aditi & Arjun",
    subtitle: "A winter wedding beneath the ancient arches of Jaipur",
    category: "Royal",
    culture: "Rajasthani",
    location: "Jaipur, Rajasthan",
    country: "India",
    coordinates: "26.9124° N, 75.7873° E",
    venue: "City Palace & Amer Haveli",
    date: "December 2026",
    readTime: "7 min read",
    coverImage: luxuryEditorial,
    secondaryImages: [heroImg, cat2, story1, haldi],
    excerpt:
      "A grand winter wedding in the Pink City blending Rajwadi traditions, ancestral marigold rituals, and dusk courtyard ceremonies.",
    introText:
      "Some weddings begin with years of friendship. Others begin with a conversation between two families. Aditi and Arjun's story began somewhere between the two — under the golden shadows of a Pink City winter.",
    relationshipJourney: {
      type: "Arranged Marriage Story",
      quote:
        "They met for the first time because their families introduced them over tea in Delhi. Six months later, we photographed their royal wedding.",
    },
    chapters: [
      {
        number: "01",
        title: "How They Met",
        content:
          "It started as a quiet family meeting at a quiet tea lounge. There was no instant thunder, just a deep, comforting ease that felt like coming home after years away.",
        image: cat2,
      },
      {
        number: "02",
        title: "The Haldi Petal Rain",
        content:
          "In the open haveli courtyard, five hundred kilograms of fresh yellow marigolds showered the bride. Laugher echoed off 200-year-old carved stone walls as traditional folk singers sang ancestral wedding blessing hymns.",
        image: haldi,
      },
      {
        number: "03",
        title: "The Royal Night Pheras",
        content:
          "As dusk faded into a starry desert sky, Aditi walked down a candlelit corridor wearing heirloom zardozi silk. The pheras around the sacred fire were held in solemn, quiet dignity.",
        image: story1,
      },
      {
        number: "04",
        title: "The Moments Between Moments",
        content:
          "Beyond the grand decor and fanfare, the truest frames were the silent ones — Arjun holding Aditi's hand under the dining table, her father wiping a hidden tear behind the mandap.",
        image: heroImg,
      },
    ],
    videoPoster: luxuryEditorial,
    coupleQuote:
      "When we look at these photographs, we don't just remember how the day looked. We remember exactly how it felt.",
    vendors: {
      photography: "CMC FILMS Editorial Team",
      cinematography: "CMC FILMS Cinema Unit",
      venue: "City Palace & Amer Haveli, Jaipur",
      planner: "Royal Heritage Weddings",
      decor: "Botanical Palace Design Studio",
    },
    isFeatured: true,
    isEditorsPick: true,
  },

  {
    id: "ws-2",
    slug: "rhea-kabir-udaipur",
    couple: "Rhea & Kabir",
    subtitle: "A regal palace celebration overlooking Lake Pichola",
    category: "Traditional",
    culture: "Rajasthani",
    location: "Udaipur, Rajasthan",
    country: "India",
    coordinates: "24.5854° N, 73.6826° E",
    venue: "Lake Palace & Jagmandir Island",
    date: "January 2026",
    readTime: "8 min read",
    coverImage: featured,
    secondaryImages: [story3, cat1, luxuryEditorial],
    excerpt:
      "Lakefront vows, candlelit boat processions, and heirloom Marwari pheras under the stars of Lake Pichola.",
    introText:
      "Rhea and Kabir's love story spans ten years — from college library study dates in Mumbai to a breathtaking palace celebration surrounded by lake mist in Udaipur.",
    relationshipJourney: {
      type: "College Sweethearts",
      quote:
        "They sat next to each other in a college lecture hall ten years ago. Today, their families joined them on an island in the middle of Lake Pichola.",
    },
    chapters: [
      {
        number: "01",
        title: "Ten Years in the Making",
        content:
          "From shared city train rides to global long-distance years, Rhea and Kabir built a foundation of unwavering trust before standing at the mandap.",
        image: story3,
      },
      {
        number: "02",
        title: "The Lake Mandap",
        content:
          "A floating pavilion constructed on the water's edge, draped in ivory silk and lit by hundreds of floating oil diyas as the sun dipped behind the Aravali hills.",
        image: featured,
      },
      {
        number: "03",
        title: "The Midnight Sangeet",
        content:
          "Folk dancers, royal sitarists, and non-stop family performances turned the palace lawns into an unforgettable festival of joy.",
        image: cat1,
      },
    ],
    videoPoster: featured,
    coupleQuote:
      "Every single photo captured by CMC FILMS feels like a still from a romantic movie we get to keep forever.",
    vendors: {
      photography: "CMC FILMS",
      cinematography: "CMC FILMS",
      venue: "Jagmandir Island Palace, Udaipur",
      planner: "Udaipur Luxury Events",
      decor: "Floral Art Rajasthan",
    },
    isFeatured: false,
    isEditorsPick: true,
  },

  {
    id: "ws-3",
    slug: "aneesh-maitri-goa",
    couple: "Aneesh & Maitri",
    subtitle: "Barefoot coastal vows and sea mist romance",
    category: "Destination",
    culture: "Intercultural",
    location: "Goa Beachfront",
    country: "India",
    coordinates: "15.2993° N, 73.9242° E",
    venue: "Taj Cidade De Goa",
    date: "January 2026",
    readTime: "5 min read",
    coverImage: coastal,
    secondaryImages: [cat1, story2, haldi],
    excerpt:
      "A coastal dream filled with ocean breeze, sunset cocktails, and unscripted laughter by the shoreline.",
    introText:
      "There's something undeniably magical about a wedding by the sea, especially when the setting sun casts its golden glow over barefoot vows on sandy shores.",
    relationshipJourney: {
      type: "Intercultural Love Story",
      quote:
        "He grew up in South India; she grew up in Punjab. Their coastal wedding brought two distinct cultures together under the warm Goa sun.",
    },
    chapters: [
      {
        number: "01",
        title: "Two Cultures, One Shoreline",
        content:
          "Combining traditional Punjabi Dhol beats with serene South Indian nadaswaram melodies, Aneesh and Maitri created a celebratory fusion of rituals.",
        image: coastal,
      },
      {
        number: "02",
        title: "Barefoot Sunset Vows",
        content:
          "With the Arabian Sea rustling gently just yards away, they exchanged handwritten promises while ocean spray caught the evening light.",
        image: cat1,
      },
    ],
    videoPoster: coastal,
    coupleQuote:
      "We didn't want a stiff, formal wedding. We wanted ocean air, laughter, and authentic photos — and that's exactly what we received.",
    vendors: {
      photography: "CMC FILMS",
      cinematography: "CMC FILMS",
      venue: "Taj Cidade De Goa",
      planner: "Goa Coastal Weddings",
      decor: "Boho Beach Design Co.",
    },
    isFeatured: false,
    isEditorsPick: true,
  },

  {
    id: "ws-4",
    slug: "saba-usman-dubai",
    couple: "Saba & Usman",
    subtitle: "Arabian desert dunes and cosmopolitan coastal Nikah",
    category: "International",
    culture: "Muslim",
    location: "Dubai",
    country: "UAE",
    coordinates: "25.2048° N, 55.2708° E",
    venue: "Al Maha Desert Resort & Jumeirah",
    date: "December 2025",
    readTime: "6 min read",
    coverImage: cat1,
    secondaryImages: [luxuryEditorial, heroImg, story3],
    excerpt:
      "A three-day high-fashion desert celebration in Dubai with sunset sand dunes shoot and luxury coastal Nikah.",
    introText:
      "Saba and Usman's international celebration brought guests from London, Dubai, and Mumbai for a magnificent three-day desert and coastal affair.",
    relationshipJourney: {
      type: "International Love Story",
      quote:
        "They lived in two different continents for three years before deciding to build a lifetime together in Dubai.",
    },
    chapters: [
      {
        number: "01",
        title: "Desert Sunset Portraits",
        content:
          "Standing amid golden sands as the sun melted over the Dubai desert dunes, Saba's ivory veil caught the desert breeze in effortless cinematic grace.",
        image: cat1,
      },
      {
        number: "02",
        title: "The Grand Waterfront Nikah",
        content:
          "Under an ornate mirror-and-flower canopy overlooking the Gulf skyline, sacred promises were made in quiet, reverent beauty.",
        image: luxuryEditorial,
      },
    ],
    videoPoster: cat1,
    coupleQuote:
      "CMC FILMS documented our destination wedding with the aesthetic care of a luxury fashion magazine.",
    vendors: {
      photography: "CMC FILMS",
      cinematography: "CMC FILMS",
      venue: "Al Maha Resort & Jumeirah Dubai",
      planner: "Dubai Luxury Destination Weddings",
      decor: "Emirates Floral Couture",
    },
    isFeatured: false,
    isEditorsPick: true,
  },

  {
    id: "ws-5",
    slug: "dhruv-pippa-karjat",
    couple: "Dhruv & Pippa",
    subtitle: "Eco-luxury farmhouse vows surrounded by tropical greenery",
    category: "Intimate",
    culture: "Intercultural",
    location: "Karjat, Maharashtra",
    country: "India",
    coordinates: "18.9102° N, 73.3283° E",
    venue: "Oleander Farms",
    date: "February 2026",
    readTime: "5 min read",
    coverImage: haldi,
    secondaryImages: [story2, coastal, heroImg],
    excerpt:
      "An intimate eco-luxury wedding with 80 close family members, marigold petal showers, and open-air candlelit dinners.",
    introText:
      "In the serene green hills of Karjat, Dhruv and Pippa celebrated their enchanting two-day wedding surrounded by nature, rustic charm, and unhurried joy.",
    relationshipJourney: {
      type: "Intimate & Eco-Luxury",
      quote:
        "With only 80 guests present, every conversation was meaningful and every single photograph radiated pure family closeness.",
    },
    chapters: [
      {
        number: "01",
        title: "Marigold Petal Shower",
        content:
          "An open-air Haldi ceremony bathed in yellow blooms, laughter, and spontaneous music jamming under tropical farm trees.",
        image: haldi,
      },
      {
        number: "02",
        title: "Candlelit Farm Dinner",
        content:
          "Long wooden banquets set under fairy lights with farm-to-table cuisine and acoustic guitar songs beneath the stars.",
        image: story2,
      },
    ],
    videoPoster: haldi,
    coupleQuote:
      "Small weddings have a big soul. Looking at these photos brings back every laugh and happy tears.",
    vendors: {
      photography: "CMC FILMS",
      cinematography: "CMC FILMS",
      venue: "Oleander Farms, Karjat",
      planner: "Organic Wedding Collective",
      decor: "Earthy Flora Karjat",
    },
    isFeatured: false,
    isEditorsPick: false,
  },

  {
    id: "ws-6",
    slug: "vivan-radhika-jaisalmer",
    couple: "Vivan & Radhika",
    subtitle: "Golden fort pheras and desert twilight romance",
    category: "Cultural",
    culture: "Rajasthani",
    location: "Jaisalmer, Rajasthan",
    country: "India",
    coordinates: "26.9157° N, 70.9083° E",
    venue: "Suryagarh Palace, Jaisalmer",
    date: "February 2026",
    readTime: "6 min read",
    coverImage: cat2,
    secondaryImages: [heroImg, luxuryEditorial, cat3],
    excerpt:
      "Thar desert horizon portraits, traditional Manganiyar folk tunes, and golden sandstone fort celebrations.",
    introText:
      "Jaisalmer's golden sandstone walls provided an unforgettable backdrop for Vivan & Radhika's four-day royal desert wedding.",
    relationshipJourney: {
      type: "Childhood Love Story",
      quote:
        "They grew up in the same neighborhood in Jaipur. Fifteen years later, they celebrated their wedding in the golden fort of Jaisalmer.",
    },
    chapters: [
      {
        number: "01",
        title: "Dunes Shoot at Dawn",
        content:
          "Walking into the quiet morning light of the Thar desert, wrapped in traditional silk and silver embroidery.",
        image: cat2,
      },
      {
        number: "02",
        title: "Fort Courtyard Ceremony",
        content:
          "Sacred pheras surrounded by oil torches and traditional Rajasthani folk chants echoing through sandstone arches.",
        image: heroImg,
      },
    ],
    videoPoster: cat2,
    coupleQuote:
      "The golden city of Jaisalmer was captured with unmatched warmth and artistic perfection by the CMC FILMS team.",
    vendors: {
      photography: "CMC FILMS",
      cinematography: "CMC FILMS",
      venue: "Suryagarh Palace, Jaisalmer",
      planner: "Desert Royal Weddings",
      decor: "Sandstone Atelier",
    },
    isFeatured: false,
    isEditorsPick: false,
  },
];

// ── CATEGORY UNIVERSES DATA ──
const categoryUniverses = [
  {
    title: "Traditional Weddings",
    count: "14 Stories",
    image: story3,
    description: "Sacred mandaps, heirloom rituals & ancestral blessing ceremonies.",
  },
  {
    title: "Arranged Love Stories",
    count: "09 Stories",
    image: story1,
    description: "From formal chai meetings to discovering soulmates across families.",
  },
  {
    title: "Destination Weddings",
    count: "18 Stories",
    image: coastal,
    description: "Coastal beach vows, sea mist romance & exotic retreats worldwide.",
  },
  {
    title: "Royal & Heritage Weddings",
    count: "12 Stories",
    image: luxuryEditorial,
    description: "Grand palace courtyards, ancient fort ramparts & Rajwadi grandeur.",
  },
  {
    title: "Intimate Weddings",
    count: "07 Stories",
    image: haldi,
    description: "Micro gatherings, farm-to-table dinners & unhurried family moments.",
  },
  {
    title: "Cultural Weddings",
    count: "11 Stories",
    image: heroImg,
    description: "Authentic regional rituals, traditional attire & folk music soul.",
  },
  {
    title: "Intercultural Weddings",
    count: "08 Stories",
    image: cat2,
    description: "Two cultures, two families, and one beautiful harmonious union.",
  },
  {
    title: "International Weddings",
    count: "06 Stories",
    image: cat1,
    description: "Dubai desert dunes, Italian lakes & global love stories.",
  },
];

// ── DESTINATIONS DATA ──
const destinationDiaries = [
  { name: "Udaipur", count: "16 Stories", coords: "24.5854° N", image: luxuryEditorial },
  { name: "Jaipur", count: "14 Stories", coords: "26.9124° N", image: heroImg },
  { name: "Jaisalmer", count: "08 Stories", coords: "26.9157° N", image: cat2 },
  { name: "Goa", count: "12 Stories", coords: "15.2993° N", image: coastal },
  { name: "Dubai", count: "06 Stories", coords: "25.2048° N", image: cat1 },
  { name: "Italy", count: "04 Stories", coords: "41.8719° N", image: featured },
];

// ── CULTURES DATA ──
const cultureList = [
  { name: "Rajasthani", detail: "Rajwadi attire, Shehnai & Haveli pheras" },
  { name: "Punjabi", detail: "Bhangra energy, Anand Karaj & Sangeet nights" },
  { name: "Gujarati", detail: "Garba nights, Parsi influences & family joy" },
  { name: "South Indian", detail: "Kanjivaram silks, dawn Muhurtham & temple flora" },
  { name: "Bengali", detail: "Subho Drishti, Topor & conch shell blessing" },
  { name: "Sikh", detail: "Golden dawn Gurdwara Anand Karaj ceremonies" },
  { name: "Muslim", detail: "Velvet Nikah canopies, Sufi qawwali & Arsi Mushaf" },
  { name: "Christian", detail: "White lace gowns, church organ vows & veil walk" },
  { name: "Intercultural", detail: "Harmonious fusion of multiple sacred heritage traditions" },
];

// ── MAIN PAGE COMPONENT ──
function WeddingStoriesPage() {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStory, setActiveStory] = useState<WeddingStory | null>(null);

  // Filtered stories for Section 10 Archive
  const filteredArchiveStories = useMemo(() => {
    return weddingStories.filter((story) => {
      const matchesCategory =
        selectedCategoryFilter === "All" ||
        story.category === selectedCategoryFilter;
      const matchesSearch =
        searchQuery.trim() === "" ||
        story.couple.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.venue.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryFilter, searchQuery]);

  return (
    <main className="bg-[#FAF8F5] text-espresso font-sans selection:bg-gold/20">
      
      {/* ── SECTION 1 — CINEMATIC HERO ── */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-between p-6 md:p-14">
        {/* Background Full-Bleed Photograph with Slow Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={luxuryEditorial}
            alt="Cinematic Wedding Stories Hero"
            className="h-full w-full object-cover opacity-60 scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/40 to-[#0C0D10]/60" />
        </div>

        {/* Top Header Tag */}
        <div className="relative z-10 pt-16 md:pt-12 flex justify-between items-center">
          <span className="label-xs text-gold uppercase tracking-[0.25em] font-mono">
            CMC FILMS Journal
          </span>
          <span className="text-xs text-ivory/50 font-mono hidden sm:block">
            Vol. VI — Real Stories
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl space-y-6 pb-12">
          <Reveal>
            <span className="label-xs text-gold font-mono uppercase tracking-widest block mb-2">
              Every Wedding Has A Story
            </span>
            <h1 className="font-display text-[clamp(3.2rem,8.5vw,7.5rem)] leading-[0.92] font-light text-ivory tracking-tight">
              Stories Worth <br />
              <em className="font-editorial italic text-gold">Remembering</em>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-base sm:text-lg md:text-xl text-ivory/80 font-sans font-light leading-relaxed max-w-2xl">
              Real people. Real emotions. Weddings we were fortunate enough to witness.
            </p>
          </Reveal>

          {/* Editorial Link Interaction */}
          <Reveal delay={250} className="pt-4">
            <a
              href="#story-universes"
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-gold hover:text-white transition-colors duration-300 group"
            >
              <span>Explore the Stories</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Reveal>
        </div>

        {/* Bottom Bar Info */}
        <div className="relative z-10 hidden sm:flex justify-between items-end text-xs text-ivory/50 font-mono border-t border-white/10 pt-4">
          <span>Rajasthan • Goa • Dubai • Worldwide</span>
          <span>Scroll to Discover</span>
        </div>
      </section>

      {/* ── SECTION 2 — STORY UNIVERSES (Category Exploration) ── */}
      <section id="story-universes" className="py-20 md:py-32 px-5 md:px-12 border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <SectionLabel>Story Universes</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
              Every Love Story <em className="font-editorial italic text-gold">Feels Different</em>
            </h2>
            <p className="mt-3 text-sm text-taupe font-light">
              Explore wedding diaries categorized by culture, setting and emotional narrative.
            </p>
          </Reveal>

          {/* Vertical Photography Panels Grid (Horizontal Swipe on Mobile) */}
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 scrollbar-none snap-x snap-mandatory">
            {categoryUniverses.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedCategoryFilter(
                    cat.title.includes("Traditional")
                      ? "Traditional"
                      : cat.title.includes("Arranged")
                      ? "Arranged Marriage"
                      : cat.title.includes("Destination")
                      ? "Destination"
                      : cat.title.includes("Royal")
                      ? "Royal"
                      : cat.title.includes("Intimate")
                      ? "Intimate"
                      : cat.title.includes("Cultural")
                      ? "Cultural"
                      : cat.title.includes("Intercultural")
                      ? "Intercultural"
                      : "International"
                  );
                  const el = document.getElementById("story-archive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0C0D10] text-ivory cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-75 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-center">
                    <span className="label-xs text-gold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {cat.count}
                    </span>
                  </div>

                  <div className="space-y-2 transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-display text-2xl font-normal leading-snug group-hover:text-gold transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-ivory/70 font-light leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                      <span>Explore Chapter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — FEATURED WEDDING STORY (Asymmetric Magazine Layout) ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 bg-white border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-8">
            <SectionLabel>Featured Masterpiece Story</SectionLabel>
          </Reveal>

          {/* 65% Photo / 35% Text Magazine Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* 65% Photography Side */}
            <div
              onClick={() => setActiveStory(weddingStories[0])}
              className="lg:col-span-8 group relative aspect-[16/10] overflow-hidden rounded-3xl cursor-pointer bg-beige shadow-lg"
            >
              <img
                src={weddingStories[0].coverImage}
                alt={weddingStories[0].couple}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <span className="absolute top-6 left-6 label-xs bg-gold text-cinema px-4 py-1.5 rounded-full font-semibold shadow-md">
                Featured Story of the Month
              </span>
            </div>

            {/* 35% Editorial Text Side */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-taupe">
                <span className="flex items-center gap-1 text-gold">
                  <MapPin className="w-3.5 h-3.5" />
                  {weddingStories[0].location}
                </span>
                <span>•</span>
                <span>{weddingStories[0].date}</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight text-espresso">
                {weddingStories[0].couple}
              </h2>

              <p className="font-editorial text-lg italic text-gold font-light">
                "{weddingStories[0].subtitle}"
              </p>

              <p className="text-sm text-taupe font-light leading-relaxed">
                {weddingStories[0].excerpt}
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setActiveStory(weddingStories[0])}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-espresso text-ivory hover:bg-gold hover:text-cinema text-xs font-mono transition-all duration-300 active:scale-95 shadow-md"
                >
                  <span>Read Their Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — EDITOR'S PICKS (Vogue/Kinfolk Style Asymmetric Grid) ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>Curated Selection</SectionLabel>
              <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
                Stories We Keep <em className="font-editorial italic text-gold">Coming Back To</em>
              </h2>
            </div>
            <span className="text-xs font-mono text-taupe">Editorial Magazine Grid</span>
          </Reveal>

          {/* Vogue Style Asymmetric Varied Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Story 1: Large Vertical Portrait (Span 5) */}
            <div
              onClick={() => setActiveStory(weddingStories[1])}
              className="md:col-span-5 group relative aspect-[3/4] overflow-hidden rounded-2xl bg-beige cursor-pointer shadow-md"
            >
              <img
                src={weddingStories[1].coverImage}
                alt={weddingStories[1].couple}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-ivory">
                <span className="label-xs text-gold">{weddingStories[1].category}</span>
                <h3 className="font-display text-3xl font-light mt-1">{weddingStories[1].couple}</h3>
                <p className="text-xs text-ivory/70 font-mono mt-1">{weddingStories[1].location}</p>
                <span className="mt-4 text-xs font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read the Story →
                </span>
              </div>
            </div>

            {/* Right Column Stack (Span 7) */}
            <div className="md:col-span-7 space-y-6">
              {/* Wide Landscape Image */}
              <div
                onClick={() => setActiveStory(weddingStories[2])}
                className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-beige cursor-pointer shadow-md"
              >
                <img
                  src={weddingStories[2].coverImage}
                  alt={weddingStories[2].couple}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-ivory">
                  <span className="label-xs text-gold">{weddingStories[2].category}</span>
                  <h3 className="font-display text-2xl font-light mt-1">{weddingStories[2].couple}</h3>
                  <p className="text-xs text-ivory/70 font-mono mt-1">{weddingStories[2].location}</p>
                  <span className="mt-2 text-xs font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read the Story →
                  </span>
                </div>
              </div>

              {/* 2 Small Diptych Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {weddingStories.slice(3, 5).map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setActiveStory(s)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-beige cursor-pointer shadow-md"
                  >
                    <img
                      src={s.coverImage}
                      alt={s.couple}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-ivory">
                      <span className="label-xs text-gold">{s.category}</span>
                      <h4 className="font-display text-xl font-light mt-1">{s.couple}</h4>
                      <p className="text-[11px] text-ivory/70 font-mono">{s.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5 — LOVE BEYOND TRADITIONS (Relationship Journey Panels) ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 bg-white border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Human Stories &amp; Journeys</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
              Different Beginnings. <em className="font-editorial italic text-gold">The Same Promise.</em>
            </h2>
            <p className="mt-2 text-sm text-taupe font-light">
              Whether meeting through arranged family tea, high school romance, or international long distance.
            </p>
          </Reveal>

          {/* Horizontal Storytelling Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingStories.slice(0, 3).map((s, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStory(s)}
                className="group p-8 rounded-3xl bg-[#FAF8F5] border border-espresso/10 flex flex-col justify-between hover:border-gold transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <span className="label-xs text-gold bg-gold/10 px-3 py-1 rounded-full w-fit">
                    {s.relationshipJourney?.type || "Love Story"}
                  </span>
                  
                  <p className="font-display text-xl sm:text-2xl text-espresso font-light leading-relaxed italic">
                    "{s.relationshipJourney?.quote || s.excerpt}"
                  </p>
                </div>

                <div className="pt-8 border-t border-espresso/10 mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-lg text-espresso font-normal">{s.couple}</h4>
                    <p className="text-xs font-mono text-taupe">{s.location}</p>
                  </div>
                  <span className="text-xs font-mono text-gold group-hover:translate-x-1 transition-transform">
                    Read Story →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — DESTINATION DIARIES (Travel Diary Aesthetic) ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-14 text-center max-w-2xl mx-auto">
            <SectionLabel>Photographer's Travel Log</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
              Stories From Places <em className="font-editorial italic text-gold">We'll Never Forget</em>
            </h2>
          </Reveal>

          {/* Destination Photography Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {destinationDiaries.map((dest, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSearchQuery(dest.name);
                  const el = document.getElementById("story-archive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0C0D10] text-ivory cursor-pointer shadow-md"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                  <span className="text-[10px] font-mono text-ivory/50">{dest.coords}</span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-light text-ivory group-hover:text-gold transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-[11px] font-mono text-gold">{dest.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — CULTURES & TRADITIONS ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 bg-white border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Cultural Spectrum</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
              Traditions Told <em className="font-editorial italic text-gold">Through Photographs</em>
            </h2>
            <p className="mt-2 text-sm text-taupe font-light">
              Click any tradition to filter wedding journals documented by ritual &amp; culture.
            </p>
          </Reveal>

          {/* Cultural Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cultureList.map((cult, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSearchQuery(cult.name);
                  const el = document.getElementById("story-archive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-espresso/10 hover:border-gold hover:bg-white transition-all cursor-pointer group"
              >
                <h3 className="font-display text-xl text-espresso group-hover:text-gold transition-colors">
                  {cult.name} Weddings
                </h3>
                <p className="text-xs text-taupe font-light mt-1">
                  {cult.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — LATEST FROM THE JOURNAL ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 border-b border-espresso/10">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>Recent Dispatches</SectionLabel>
              <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
                Latest <em className="font-editorial italic text-gold">Stories</em>
              </h2>
            </div>
            <a
              href="#story-archive"
              className="text-xs font-mono text-gold hover:underline flex items-center gap-1"
            >
              <span>View All Archive Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>

          {/* Clean Editorial List Entries */}
          <div className="space-y-8">
            {weddingStories.slice(0, 4).map((story) => (
              <div
                key={story.id}
                onClick={() => setActiveStory(story)}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 items-center p-6 rounded-3xl bg-white border border-espresso/10 hover:border-gold transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="md:col-span-4 aspect-[16/10] overflow-hidden rounded-2xl bg-beige">
                  <img
                    src={story.coverImage}
                    alt={story.couple}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-taupe">
                    <span className="text-gold font-semibold">{story.category}</span>
                    <span>•</span>
                    <span>{story.location}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal group-hover:text-gold transition-colors">
                    {story.couple} — {story.subtitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-xs font-mono text-espresso font-semibold group-hover:text-gold transition-colors pt-2">
                    <span>Read Full Story Journal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — EMOTIONAL QUOTE BREAK (Cinematic Parallax) ── */}
      <section className="relative py-28 md:py-44 px-6 text-center text-ivory bg-[#0C0D10] overflow-hidden">
        <img
          src={featured}
          alt="Emotional Wedding Quote Background"
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <QuoteIcon className="w-12 h-12 text-gold mx-auto opacity-50" />
          <h2 className="font-display text-[clamp(2rem,5vw,4.2rem)] font-light leading-tight text-ivory">
            “Years later, photographs become the places where <em className="font-editorial italic text-gold">memories continue to live.</em>”
          </h2>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-ivory/60">
            — CMC FILMS Studio Philosophy
          </p>
        </div>
      </section>

      {/* ── SECTION 10 — ADVANCED STORY ARCHIVE & SEARCH ── */}
      <section id="story-archive" className="py-20 md:py-32 px-5 md:px-12 bg-white">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="mb-10 max-w-3xl">
            <SectionLabel>Complete Archive</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight font-light">
              Explore All <em className="font-editorial italic text-gold">Wedding Journals</em>
            </h2>
          </Reveal>

          {/* Search & Filter Control Bar */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-espresso/15 pb-8">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe/60" />
              <input
                type="text"
                placeholder="Search a couple, location or story..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-[#FAF8F5] border border-espresso/15 text-xs text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-gold transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-taupe hover:text-espresso"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "All",
                "Traditional",
                "Arranged Marriage",
                "Destination",
                "Royal",
                "Intimate",
                "Cultural",
                "Intercultural",
                "International",
              ].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(f)}
                  className={`label-xs px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border ${
                    selectedCategoryFilter === f
                      ? "bg-espresso text-ivory border-espresso shadow-md"
                      : "bg-white text-espresso/70 border-espresso/15 hover:border-gold hover:text-espresso"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Archive Grid */}
          {filteredArchiveStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArchiveStories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => setActiveStory(story)}
                  className="group bg-[#FAF8F5] rounded-2xl border border-espresso/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-beige">
                      <img
                        src={story.coverImage}
                        alt={story.couple}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 label-xs text-gold bg-[#0C0D10]/85 border border-gold/30 px-3 py-1 rounded-full text-[10px] backdrop-blur-md">
                        {story.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-taupe font-mono">
                        <span>📍 {story.location}</span>
                        <span>•</span>
                        <span>⏱️ {story.readTime}</span>
                      </div>

                      <h3 className="font-display text-2xl text-espresso font-normal group-hover:text-gold transition-colors">
                        {story.couple}
                      </h3>

                      <p className="text-xs text-taupe font-light leading-relaxed line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-espresso/10 mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C0D10] text-[#FAF8F3] group-hover:bg-gold group-hover:text-cinema text-xs font-mono transition-all duration-300 shadow-md">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Story</span>
                    </span>
                    <span className="text-[11px] font-mono text-taupe/60">
                      {story.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#FAF8F5] rounded-3xl border border-espresso/10 p-8">
              <p className="font-display text-2xl text-espresso">
                No stories match your filter query.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryFilter("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-espresso text-ivory text-xs font-mono"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── INDIVIDUAL WEDDING STORY PAGE (EDITORIAL READER MODAL) ── */}
      {activeStory && (
        <IndividualWeddingStoryPage
          story={activeStory}
          onClose={() => setActiveStory(null)}
          onNextStory={(nextS) => setActiveStory(nextS)}
        />
      )}
    </main>
  );
}

// ── INDIVIDUAL EDITORIAL STORY READER COMPONENT ──
function IndividualWeddingStoryPage({
  story,
  onClose,
  onNextStory,
}: {
  story: WeddingStory;
  onClose: () => void;
  onNextStory: (nextS: WeddingStory) => void;
}) {
  // Find next story for "Continue Reading" footer
  const currentIndex = weddingStories.findIndex((s) => s.id === story.id);
  const nextStory = weddingStories[(currentIndex + 1) % weddingStories.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#FAF8F5] text-espresso overflow-y-auto animate-in fade-in duration-500">
      
      {/* Fixed Close Navigation Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-espresso/10">
        <div className="flex items-center gap-3">
          <span className="label-xs text-gold font-mono uppercase tracking-widest">
            {story.category} Story Journal
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close story"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-espresso text-ivory hover:bg-gold hover:text-cinema text-xs font-mono transition-all cursor-pointer shadow-md"
        >
          <span>Close Story</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* ── STORY HERO ── */}
      <section className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-end p-6 md:p-16">
        <img
          src={story.coverImage}
          alt={story.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/30 to-transparent" />

        <div className="relative z-10 max-w-4xl space-y-4 pb-8">
          <span className="label-xs text-gold bg-black/60 px-3.5 py-1 rounded-full backdrop-blur-md">
            {story.culture} Wedding • {story.location}
          </span>
          
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.95] text-ivory">
            {story.couple}
          </h1>

          <p className="font-editorial text-xl sm:text-2xl italic text-gold font-light">
            "{story.subtitle}"
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ivory/70 pt-2 border-t border-white/15">
            <span>📍 {story.venue}</span>
            <span>•</span>
            <span>📅 {story.date}</span>
            <span>•</span>
            <span>⏱️ {story.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── STORY INTRODUCTION (Generous Editorial Typography) ── */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-3xl mx-auto">
        <p className="font-editorial text-2xl sm:text-3xl text-espresso font-light leading-relaxed border-l-4 border-gold pl-6 py-2 italic">
          "{story.introText}"
        </p>
      </section>

      {/* ── STORY NARRATIVE CHAPTERS ── */}
      <section className="py-10 px-6 md:px-16 max-w-5xl mx-auto space-y-20">
        {story.chapters.map((ch, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-gold font-bold">{ch.number}</span>
              <h2 className="font-display text-3xl sm:text-4xl text-espresso font-light">
                {ch.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-taupe font-sans font-light leading-relaxed">
              {ch.content}
            </p>

            {ch.image && (
              <div className="my-8 aspect-[16/10] overflow-hidden rounded-2xl bg-beige shadow-md">
                <img
                  src={ch.image}
                  alt={ch.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ── CINEMATIC VIDEO MOMENT ── */}
      {story.videoPoster && (
        <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#0C0D10] border border-white/10 shadow-2xl group cursor-pointer">
            <img
              src={story.videoPoster}
              alt="Cinematic Wedding Film"
              className="h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="h-20 w-20 rounded-full bg-gold/90 hover:bg-white text-cinema flex items-center justify-center transition-all shadow-xl group-hover:scale-110">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <span className="label-xs text-gold uppercase tracking-widest font-mono">
                Watch Their Wedding Film
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white font-light">
                {story.couple}'s Official Cinema Highlight
              </h3>
            </div>
          </div>
        </section>
      )}

      {/* ── COUPLE QUOTE ── */}
      <section className="py-16 px-6 md:px-16 max-w-4xl mx-auto text-center space-y-4">
        <QuoteIcon className="w-10 h-10 text-gold mx-auto opacity-50" />
        <blockquote className="font-editorial text-2xl sm:text-4xl italic text-espresso font-light leading-snug">
          "{story.coupleQuote}"
        </blockquote>
        <p className="text-xs font-mono text-taupe uppercase tracking-widest">
          — {story.couple}
        </p>
      </section>

      {/* ── SECONDARY GALLERY COLLAGE ── */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto space-y-4 border-t border-espresso/10">
        <h3 className="font-display text-2xl text-espresso mb-6">
          Photographic Archive Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {story.secondaryImages.map((img, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-2xl bg-beige">
              <img
                src={img}
                alt={`${story.couple} highlight ${idx + 1}`}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── TASTEFUL VENDOR CREDITS ── */}
      <section className="py-12 px-6 md:px-16 max-w-4xl mx-auto border-t border-espresso/10 text-xs font-mono text-taupe">
        <h4 className="label-xs text-gold uppercase tracking-widest mb-4">
          Wedding Credits &amp; Details
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <span className="text-espresso/50">Photography</span>
            <p className="text-espresso font-medium">{story.vendors.photography}</p>
          </div>
          <div>
            <span className="text-espresso/50">Cinematography</span>
            <p className="text-espresso font-medium">{story.vendors.cinematography}</p>
          </div>
          <div>
            <span className="text-espresso/50">Venue</span>
            <p className="text-espresso font-medium">{story.vendors.venue}</p>
          </div>
          <div>
            <span className="text-espresso/50">Wedding Planner</span>
            <p className="text-espresso font-medium">{story.vendors.planner}</p>
          </div>
          <div>
            <span className="text-espresso/50">Decor</span>
            <p className="text-espresso font-medium">{story.vendors.decor}</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STORY CONTINUATION EXPERIENCE ── */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="relative h-[65vh] min-h-[450px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-center items-center text-center p-6 cursor-pointer group"
      >
        <img
          src={nextStory.coverImage}
          alt={nextStory.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="label-xs text-gold uppercase tracking-[0.25em] font-mono">
            Continue Reading Next Story
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white font-light group-hover:text-gold transition-colors">
            {nextStory.couple}
          </h2>
          <p className="font-editorial text-lg italic text-white/80 font-light">
            "{nextStory.subtitle}"
          </p>
          <span className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-cinema text-xs font-mono font-semibold pt-3 shadow-lg">
            <span>Read Next Story Journal</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </section>

    </div>
  );
}
