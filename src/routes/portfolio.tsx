import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Search,
  Sparkles,
  User,
  X,
  Share2,
  Quote,
} from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";

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

const title = "Real Wedding Stories & Shoot Journal — CMC FILMS";
const description =
  "Behind-the-lens wedding shoot diaries, traditional heritage ceremonies, arranged marriage love tales, and destination shoot stories written by CMC FILMS.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: WeddingStoriesPage,
});

export interface WeddingStory {
  id: string;
  slug: string;
  title: string;
  couple: string;
  subtitle: string;
  category: "Traditional Heritage" | "Arranged Marriage" | "Destination & Beach" | "Intimate & Eco";
  location: string;
  venue: string;
  date: string;
  readTime: string;
  coverImage: string;
  gallery: string[];
  excerpt: string;
  content: {
    vibe: string;
    behindTheLens: string;
    highlights: string[];
    photographerQuote: string;
  };
}

const weddingStories: WeddingStory[] = [
  // ── TRADITIONAL & ROYAL HERITAGE ──
  {
    id: "s1",
    slug: "saba-usman-udaipur-nikah",
    title: "Saba & Usman's Royal Nikah in Udaipur",
    couple: "Saba & Usman",
    subtitle: "A royal palace affair with velvet tones, heritage courtyards, and golden hour vows.",
    category: "Traditional Heritage",
    location: "Udaipur, Rajasthan",
    venue: "City Palace Courtyard",
    date: "January 2026",
    readTime: "5 min read",
    coverImage: luxuryEditorial,
    gallery: [luxuryEditorial, cat1, story1],
    excerpt:
      "A grand three-day royal wedding documenting ancient heritage palace rituals, flower showers, and quiet emotional portraits.",
    content: {
      vibe: "Regal, timeless, and deeply rooted in royal Rajasthani heritage with rich velvet hues and candlelight ambiance.",
      behindTheLens:
        "Documenting Saba & Usman's wedding felt like stepping into a royal era. We captured unscripted glances through marble arches and sunset light casting shadows across the palace courtyard.",
      highlights: [
        "Traditional Nikah ceremony under a 200-year-old marble canopy",
        "Sufi music night under starry Udaipur skies",
        "Grand royal portraits at Lake Pichola golden hour",
      ],
      photographerQuote:
        "True luxury in wedding photography is preserving authentic emotion without interrupting the sacred flow of royal rituals.",
    },
  },
  {
    id: "s2",
    slug: "devendra-ishita-jodhpur-pheras",
    title: "Devendra & Ishita's Heritage Pheras",
    couple: "Devendra & Ishita",
    subtitle: "Folk music, ancient fort walls, and traditional Marwari wedding customs.",
    category: "Traditional Heritage",
    location: "Jodhpur, Rajasthan",
    venue: "Mehrangarh Fort Courtyard",
    date: "December 2025",
    readTime: "6 min read",
    coverImage: story3,
    gallery: [story3, story2, haldi],
    excerpt:
      "Rich red lehengas, royal turban ceremonies, and traditional pheras surrounded by 500-year-old fort ramparts.",
    content: {
      vibe: "Pure royal tradition with vibrant orange marigolds, classical Shehnai tunes, and authentic heritage dignity.",
      behindTheLens:
        "The wind sweeping across Mehrangarh Fort added a dramatic cinematic touch to every frame. We focused on raw family emotions and the sacred pheras around the sacred fire.",
      highlights: [
        "Vintage royal procession with traditional Manganiyar musicians",
        "Pheras ceremony during peak golden hour sunset",
        "Intimate family blessing rituals passed down across generations",
      ],
      photographerQuote:
        "Heritage weddings require reverence for tradition — our camera was simply a quiet witness to timeless sacred vows.",
    },
  },
  {
    id: "s3",
    slug: "vivan-radhika-jaipur-rajwadi",
    title: "Vivan & Radhika's Rajwadi Wedding",
    couple: "Vivan & Radhika",
    subtitle: "Marwari traditions, heirloom jewelry, and lavish flower petals rain.",
    category: "Traditional Heritage",
    location: "Jaipur, Rajasthan",
    venue: "Amer Haveli Palace",
    date: "February 2026",
    readTime: "4 min read",
    coverImage: heroImg,
    gallery: [heroImg, cat2, story1],
    excerpt:
      "A classical Jaipur wedding featuring intricate zardozi royal attire, marigold garlands, and majestic haveli courtyards.",
    content: {
      vibe: "Opulent, traditional, and warm with golden sunset glow falling over carved stone architecture.",
      behindTheLens:
        "Radhika's bridal entry was bathed in pure natural light. We captured the quiet breath before she stepped into the mandap, creating raw heirloom images.",
      highlights: [
        "Flower petal rain during the Varmala exchange",
        "Handcrafted Shekhawati royal mandap styling",
        "Emotional Vidai ceremony under morning dawn light",
      ],
      photographerQuote:
        "Every marigold petal and carved stone arch tells a story of heritage that will be cherished for generations.",
    },
  },

  // ── ARRANGED MARRIAGE TALES ──
  {
    id: "s4",
    slug: "aarav-meera-arranged-love",
    title: "Aarav & Meera: Arranged by Families, Bound by Soulmates",
    couple: "Aarav & Meera",
    subtitle: "An arranged match in Delhi that blossomed into a breathtaking, deep love story.",
    category: "Arranged Marriage",
    location: "Udaipur & Paris",
    venue: "Leela Palace, Udaipur",
    date: "January 2026",
    readTime: "5 min read",
    coverImage: story1,
    gallery: [story1, coastal, cat3],
    excerpt:
      "Their families introduced them over a cup of chai in Delhi. Within months, their arranged match transformed into pure romance.",
    content: {
      vibe: "Intimate, warm, emotional, and filled with quiet romantic chemistry that developed effortlessly.",
      behindTheLens:
        "What struck us most about Aarav & Meera was how naturally they fit into each other's world. During their portrait session, there was zero pretense — just pure genuine love.",
      highlights: [
        "First meeting story shared during the emotional Sangeet speeches",
        "Intimate lakefront vows under warm fairy lights",
        "Surprise love letter reading written by Aarav for Meera",
      ],
      photographerQuote:
        "Arranged marriages have a unique magic — watching two souls discover that their families found their exact missing piece.",
    },
  },
  {
    id: "s5",
    slug: "karan-ananya-two-families-one-heart",
    title: "Karan & Ananya: Two Families, One Heart",
    couple: "Karan & Ananya",
    subtitle: "From formal tea meetings to dancing together on the Sangeet stage.",
    category: "Arranged Marriage",
    location: "New Delhi",
    venue: "Taj Palace, New Delhi",
    date: "November 2025",
    readTime: "4 min read",
    coverImage: cat3,
    gallery: [cat3, story2, featured],
    excerpt:
      "A modern arranged marriage journey connecting two traditional Punjabi families into one vibrant celebration.",
    content: {
      vibe: "High-energy, joyous, laughter-filled, and deeply family-oriented.",
      behindTheLens:
        "We documented the shy glances between Karan & Ananya during the initial ceremonies, which quickly turned into unstoppable laughter during the Sangeet.",
      highlights: [
        "Grand Sangeet performance choreographed by family cousins",
        "Heartfelt Anand Karaj ceremony at sunrise",
        "Candid unscripted moments during the family brunch",
      ],
      photographerQuote:
        "When two families come together in celebration, every frame radiates warmth and collective joy.",
    },
  },
  {
    id: "s6",
    slug: "rohan-priyal-modern-arranged-romance",
    title: "Rohan & Priyal: Modern Arranged Match",
    couple: "Rohan & Priyal",
    subtitle: "A classic arranged marriage where respect turned into unconditional love.",
    category: "Arranged Marriage",
    location: "Jaipur, Rajasthan",
    venue: "Rambagh Palace",
    date: "February 2026",
    readTime: "5 min read",
    coverImage: cat2,
    gallery: [cat2, haldi, heroImg],
    excerpt:
      "How two traditional families brought together two soulmates for an unforgettable 4-day heritage festival.",
    content: {
      vibe: "Elegant, serene, respectful, and blossoming into beautiful romance.",
      behindTheLens:
        "Our focus was capturing their unspoken bond. The way Rohan held Priyal's hand during the pheras spoke volumes about their commitment.",
      highlights: [
        "Traditional Haldi turmeric ceremony filled with marigold madness",
        "Royal courtyard dinner with live sitar melodies",
        "Candlelit night portraits in the palace gardens",
      ],
      photographerQuote:
        "Love doesn't always begin with lightning strikes; sometimes it blooms softly in the sanctuary of family blessings.",
    },
  },

  // ── DESTINATION & COASTAL BEACH ──
  {
    id: "s7",
    slug: "aneesh-maitri-goa-beachfront",
    title: "Aneesh & Maitri at Taj Cidade De Goa",
    couple: "Aneesh & Maitri",
    subtitle: "Beachfront sunset vows, sea mist romance, and golden shoreline celebration.",
    category: "Destination & Beach",
    location: "Goa Beachfront",
    venue: "Taj Cidade De Goa",
    date: "January 2026",
    readTime: "4 min read",
    coverImage: coastal,
    gallery: [coastal, cat1, featured],
    excerpt:
      "There's something magical about a wedding by the sea, especially when the setting sun casts a golden glow over coastal vows.",
    content: {
      vibe: "Breezy, coastal, bohemian-chic, and relaxed luxury by the ocean waves.",
      behindTheLens:
        "The coastal light in Goa is a photographer's dream. We utilized natural ocean reflections and sunset breezes to capture dreamy, weightless portraits.",
      highlights: [
        "Sunset beach wedding mandap overlooking open ocean waters",
        "Barefoot cocktail party on sandy shores under palm trees",
        "Spontaneous after-party dip in the ocean at midnight",
      ],
      photographerQuote:
        "The ocean provided the soundtrack; we simply framed the raw beauty of two souls making promises to the tide.",
    },
  },
  {
    id: "s8",
    slug: "kabir-rhea-dubai-desert-nikah",
    title: "Kabir & Rhea's 3-Day Dubai Desert Story",
    couple: "Kabir & Rhea",
    subtitle: "Golden sand dunes sunset portraits and an ultra-luxury beachfront reception.",
    category: "Destination & Beach",
    location: "Dubai, UAE",
    venue: "Al Maha Desert Resort & Jumeirah",
    date: "December 2025",
    readTime: "6 min read",
    coverImage: cat1,
    gallery: [cat1, luxuryEditorial, story3],
    excerpt:
      "A spectacular 3-day destination shoot combining dramatic desert sand dunes with high-fashion beachfront luxury.",
    content: {
      vibe: "High-fashion, cosmopolitan, dramatic desert sunsets, and luxury grandeur.",
      behindTheLens:
        "Shooting in the Dubai desert required precise golden hour timing. The contrast between warm red dunes and white wedding silks created breathtaking editorial imagery.",
      highlights: [
        "Pre-wedding shoot in Thar & Arabian desert dunes at golden hour",
        "Glamorous beachfront reception with skyline views",
        "Private yacht sunset portraits with close friends",
      ],
      photographerQuote:
        "Destination weddings allow us to paint love stories on global canvases — from desert sands to city skylines.",
    },
  },

  // ── INTIMATE & ECO-LUXURY ──
  {
    id: "s9",
    slug: "dhruv-pippa-karjat-oleander-farms",
    title: "Dhruv & Pippa at Oleander Farms, Karjat",
    couple: "Dhruv & Pippa",
    subtitle: "An eco-luxury two-day wedding surrounded by marigolds & lush tropical greenery.",
    category: "Intimate & Eco",
    location: "Karjat, Maharashtra",
    venue: "Oleander Farms",
    date: "February 2026",
    readTime: "5 min read",
    coverImage: haldi,
    gallery: [haldi, story2, coastal],
    excerpt:
      "In the serene green hills of Karjat, Dhruv & Pippa celebrated their enchanting intimate wedding surrounded by rustic charm.",
    content: {
      vibe: "Rustic, eco-friendly, organic, intimate, and bursting with yellow marigold joy.",
      behindTheLens:
        "With only 80 close guests, this wedding allowed us to capture deeply personal micro-moments — laughter over morning tea, unscripted hugs, and pure unhurried joy.",
      highlights: [
        "Open-air Haldi ceremony with marigold petal bath",
        "Organic farm-to-table candlelit wedding dinner",
        "Intimate acoustic guitar bonfire session under starry skies",
      ],
      photographerQuote:
        "Intimate weddings remind us that the heart of celebration is not the scale, but the depth of presence and love.",
    },
  },
];

const categorySections = [
  {
    id: "Traditional Heritage",
    title: "Traditional & Royal Heritage Weddings",
    subtitle: "Grand palace courtyards, ancient fort pheras, Marwari customs & royal heirloom rituals.",
    badge: "Royal Heritage",
    icon: "🏛️",
  },
  {
    id: "Arranged Marriage",
    title: "Arranged Marriage Tales & Love Stories",
    subtitle: "From formal family meetings to discovering soulmates — heartwarming true romance.",
    badge: "Arranged & True Love",
    icon: "💖",
  },
  {
    id: "Destination & Beach",
    title: "Destination & Coastal Beach Celebrations",
    subtitle: "Sunset beach vows in Goa, Arabian desert dunes in Dubai & tropical retreats.",
    badge: "Destination Vows",
    icon: "🌴",
  },
  {
    id: "Intimate & Eco",
    title: "Intimate & Eco-Luxury Celebrations",
    subtitle: "Farmhouse greenery, marigold petal showers & personal micro-wedding gatherings.",
    badge: "Intimate Gatherings",
    icon: "🌾",
  },
];

function WeddingStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBlogStory, setActiveBlogStory] = useState<WeddingStory | null>(null);

  // Filter logic
  const filteredStories = useMemo(() => {
    return weddingStories.filter((story) => {
      const matchesCategory =
        selectedCategory === "All" || story.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.couple.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.venue.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-[#FAF8F5] min-h-screen text-espresso">
      {/* ── HERO HEADER SECTION ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-5 md:px-10 border-b border-espresso/15 bg-white">
        <div className="mx-auto max-w-[1600px] text-center max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-espresso/5 border border-espresso/10 label-xs text-gold">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Wedding Shoot Journals &amp; Diaries</span>
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] font-light text-espresso">
              Stories Written in{" "}
              <em className="font-editorial italic text-gold border-b-2 border-gold/40 pb-1">
                Silk, Sunset &amp; Vows
              </em>
            </h1>

            <p className="mt-5 text-sm md:text-base text-taupe font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Behind-the-lens shoot journals, traditional wedding rituals, arranged marriage love stories, and destination shoot diaries written by CMC FILMS.
            </p>
          </Reveal>

          {/* Search & Filter Bar */}
          <Reveal className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe/60" />
              <input
                type="text"
                placeholder="Search couple, city or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAF8F5] border border-espresso/15 text-xs text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-gold transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-espresso"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {["All", "Traditional Heritage", "Arranged Marriage", "Destination & Beach", "Intimate & Eco"].map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`label-xs px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border ${
                      selectedCategory === cat
                        ? "bg-espresso text-ivory border-espresso shadow-md"
                        : "bg-white text-espresso/70 border-espresso/15 hover:border-gold hover:text-espresso"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED MASTERPIECE STORY BANNER ── */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="px-5 md:px-10 py-12">
          <div className="mx-auto max-w-[1600px]">
            <Reveal className="relative overflow-hidden rounded-3xl bg-[#0C0D10] text-ivory border border-white/10 shadow-2xl group cursor-pointer" onClick={() => setActiveBlogStory(weddingStories[0])}>
              <div className="grid lg:grid-cols-12 min-h-[460px]">
                {/* Image Side */}
                <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[460px] overflow-hidden">
                  <img
                    src={weddingStories[0].coverImage}
                    alt={weddingStories[0].title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0C0D10]" />
                  <span className="absolute top-4 left-4 label-xs bg-gold text-cinema px-3.5 py-1 rounded-full font-semibold shadow-md">
                    Featured Masterpiece Story
                  </span>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-gold font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {weddingStories[0].location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {weddingStories[0].readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl text-ivory font-light leading-snug group-hover:text-gold transition-colors duration-300">
                      {weddingStories[0].title}
                    </h2>

                    <p className="text-sm text-ivory/70 font-sans font-light leading-relaxed">
                      "{weddingStories[0].excerpt}"
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-cinema hover:bg-white text-xs font-mono font-semibold transition-all duration-300 shadow-md"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read Complete Story Journal</span>
                    </button>
                    <span className="text-xs text-ivory/50 font-mono">
                      {weddingStories[0].date}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── THEMATIC CATEGORIZED SECTIONS ── */}
      {selectedCategory === "All" && searchQuery === "" ? (
        // RENDER ALL CATEGORY SECTIONS WITH HEADINGS
        <div className="space-y-20 py-10 px-5 md:px-10">
          {categorySections.map((sec) => {
            const storiesInSec = weddingStories.filter(
              (s) => s.category === sec.id
            );
            if (storiesInSec.length === 0) return null;

            return (
              <section key={sec.id} className="mx-auto max-w-[1600px]">
                {/* Section Title Header */}
                <Reveal className="border-b border-espresso/15 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-widest mb-1">
                      <span>{sec.icon}</span>
                      <span>{sec.badge}</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl text-espresso font-light">
                      {sec.title}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-taupe font-sans font-light">
                      {sec.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(sec.id)}
                    className="label-xs text-gold hover:text-espresso transition-colors font-mono inline-flex items-center gap-1"
                  >
                    <span>View all {sec.badge} stories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Reveal>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {storiesInSec.map((story) => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      onOpen={() => setActiveBlogStory(story)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        // RENDER FILTERED SEARCH / CATEGORY RESULTS GRID
        <section className="mx-auto max-w-[1600px] px-5 md:px-10 py-12">
          <div className="mb-8 flex items-center justify-between border-b border-espresso/15 pb-4">
            <h2 className="font-display text-2xl text-espresso">
              Found {filteredStories.length} Wedding Stories
            </h2>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-mono text-gold hover:underline"
            >
              Reset Filters
            </button>
          </div>

          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onOpen={() => setActiveBlogStory(story)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-espresso/10 p-8">
              <p className="font-display text-2xl text-espresso">
                No wedding stories match your search.
              </p>
              <p className="mt-2 text-xs text-taupe">
                Try searching for "Udaipur", "Beach", "Heritage" or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-espresso text-ivory text-xs font-mono"
              >
                Show All Stories
              </button>
            </div>
          )}
        </section>
      )}

      {/* ── CLIENT JOURNAL SUBMISSION BANNER ── */}
      <section className="mt-20 px-5 md:px-10 pb-24">
        <div className="mx-auto max-w-[1400px] rounded-3xl bg-[#0C0D10] text-[#FAF8F3] p-8 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="label-xs text-gold uppercase tracking-widest font-mono">
              Have A Unique Love Story?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
              Let's Document Your <em className="font-editorial italic text-gold">Wedding Legacy</em>
            </h2>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              Whether a grand traditional royal palace wedding or an intimate arranged match celebration, we capture your memories with timeless cinema devotion.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-white text-cinema font-medium text-sm transition-all duration-300 shadow-lg active:scale-95"
              >
                <span>Check Date Availability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL BLOG STORY READER MODAL ── */}
      {activeBlogStory && (
        <BlogStoryModal
          story={activeBlogStory}
          onClose={() => setActiveBlogStory(null)}
        />
      )}
    </main>
  );
}

// ── INDIVIDUAL STORY CARD COMPONENT ──
function StoryCard({
  story,
  onOpen,
}: {
  story: WeddingStory;
  onOpen: () => void;
}) {
  return (
    <Reveal className="group bg-white rounded-2xl border border-espresso/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer" onClick={onOpen}>
      <div>
        {/* Cover Image Frame */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-beige">
          <img
            src={story.coverImage}
            alt={story.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 label-xs text-gold bg-[#0C0D10]/85 border border-gold/30 px-3 py-1 rounded-full text-[10px] backdrop-blur-md">
            {story.category}
          </span>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-[11px] text-taupe font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold shrink-0" />
              <span>{story.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gold shrink-0" />
              <span>{story.readTime}</span>
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal leading-snug group-hover:text-gold transition-colors duration-300">
            {story.title}
          </h3>

          <p className="text-xs sm:text-sm text-taupe font-sans font-light leading-relaxed line-clamp-3">
            {story.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="p-6 pt-0 border-t border-espresso/10 mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C0D10] text-[#FAF8F3] hover:bg-gold hover:text-cinema text-xs font-mono transition-all duration-300 active:scale-95 shadow-md"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read Story Journal</span>
        </button>

        <span className="text-[11px] font-mono text-taupe/60">
          {story.date}
        </span>
      </div>
    </Reveal>
  );
}

// ── LUXURY FULL-SCREEN BLOG STORY READER MODAL ──
function BlogStoryModal({
  story,
  onClose,
}: {
  story: WeddingStory;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl text-espresso max-h-[92vh] flex flex-col my-auto border border-white/20">
        
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close story reader"
          className="absolute top-4 right-4 z-30 h-11 w-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Blog Header Cover */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-beige">
            <img
              src={story.coverImage}
              alt={story.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="label-xs text-gold bg-black/60 px-3 py-1 rounded-full w-fit mb-2">
                {story.category}
              </span>
              <h1 className="font-display text-2xl sm:text-4xl text-white font-normal leading-tight">
                {story.title}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/80 font-mono flex items-center gap-3">
                <span>📍 {story.venue}, {story.location}</span>
                <span>•</span>
                <span>📅 {story.date}</span>
              </p>
            </div>
          </div>

          {/* Subtitle Intro */}
          <div className="border-l-4 border-gold pl-5 py-2">
            <p className="font-display text-xl text-espresso italic font-light">
              "{story.subtitle}"
            </p>
          </div>

          {/* Section 1: The Vibe & Setting */}
          <div className="space-y-3">
            <h3 className="font-display text-2xl text-espresso font-normal flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <span>The Vibe &amp; Atmosphere</span>
            </h3>
            <p className="text-sm text-taupe font-sans leading-relaxed">
              {story.content.vibe}
            </p>
          </div>

          {/* Section 2: Behind The Lens Notes */}
          <div className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-espresso/10">
            <h3 className="font-display text-2xl text-espresso font-normal flex items-center gap-2">
              <Camera className="w-5 h-5 text-gold" />
              <span>Behind The Lens Notes by CMC FILMS</span>
            </h3>
            <p className="text-sm text-espresso/85 font-sans leading-relaxed">
              {story.content.behindTheLens}
            </p>
          </div>

          {/* Photographer Quote */}
          <div className="p-6 rounded-2xl bg-[#0C0D10] text-ivory relative overflow-hidden space-y-3">
            <Quote className="w-8 h-8 text-gold opacity-40 absolute top-4 right-4" />
            <p className="font-editorial text-lg sm:text-xl italic text-gold">
              "{story.content.photographerQuote}"
            </p>
            <p className="text-xs font-mono text-ivory/60">
              — Lead Cinematographer, CMC FILMS
            </p>
          </div>

          {/* Section 3: Ritual & Story Highlights */}
          <div className="space-y-3">
            <h3 className="font-display text-2xl text-espresso font-normal">
              Key Ceremony Highlights
            </h3>
            <ul className="space-y-2.5">
              {story.content.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-taupe font-sans">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo Gallery Grid */}
          <div className="space-y-3 pt-4 border-t border-espresso/10">
            <h3 className="font-display text-xl text-espresso">
              Photoblog Gallery Snapshots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {story.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-beige">
                  <img
                    src={img}
                    alt={`${story.title} snapshot ${i + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-espresso/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-taupe font-mono">
              Documented with care by <strong>CMC FILMS</strong>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-gold text-cinema hover:bg-espresso hover:text-ivory text-xs font-mono font-semibold transition-all shadow-md"
              >
                Book Your Wedding Story
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
