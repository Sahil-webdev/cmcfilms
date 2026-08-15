import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowDown, BookOpen, Clock, MapPin, X, Quote as QuoteIcon } from "lucide-react";
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

const pageTitle = "Wedding Stories Journal — CMC FILMS";
const pageDescription =
  "Behind-the-lens wedding shoot diaries, real stories, and wedding journal articles written by CMC FILMS.";

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

export interface WeddingBlogPost {
  id: string;
  title: string;
  couple: string;
  category: string;
  location: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  secondaryImages: string[];
  intro: string[];
  chapters: {
    num: string;
    title: string;
    text: string;
    img?: string;
  }[];
  quote: string;
}

const blogStories: WeddingBlogPost[] = [
  {
    id: "b1",
    title: "Saba & Usman's stunning Nikah in Dubai",
    couple: "Saba & Usman",
    category: "Destination Weddings",
    location: "Dubai, UAE",
    date: "14 Dec 2025",
    readTime: "5 min read",
    excerpt:
      "A wedding full of grace, tradition, and quiet elegance—Saba and Usman's three-day celebration in Dubai was the perfect blend of emotion and beauty.",
    image: cat1,
    secondaryImages: [luxuryEditorial, heroImg, story3],
    intro: [
      "Three days in Dubai.",
      "Connecting families from London, Dubai, and Mumbai under Arabian desert skies.",
    ],
    chapters: [
      {
        num: "01",
        title: "The Desert Dunes Shoot",
        text: "Standing amid red desert sands as the sun melted away, Saba's ivory veil caught the desert breeze in cinematic grace.",
        img: cat1,
      },
      {
        num: "02",
        title: "The Waterfront Nikah",
        text: "Under a mirror and floral canopy overlooking the Gulf skyline, sacred promises were spoken in quiet beauty.",
        img: luxuryEditorial,
      },
    ],
    quote: "CMC FILMS documented our destination wedding with the aesthetic care of a high-fashion magazine.",
  },
  {
    id: "b2",
    title: "Wedding at Oleander Farms, Karjat",
    couple: "Dhruv & Pippa",
    category: "Intimate & Eco",
    location: "Karjat, Maharashtra",
    date: "04 Feb 2026",
    readTime: "4 min read",
    excerpt:
      "In the serene setting of Oleander Farms, Karjat, Dhruv & Pippa celebrated their enchanting two-day wedding surrounded by marigold petals & lush greenery.",
    image: haldi,
    secondaryImages: [story2, coastal],
    intro: [
      "Eighty guests.",
      "Green Karjat hills.",
      "No rush. No pretense. Just pure family presence.",
    ],
    chapters: [
      {
        num: "01",
        title: "Marigold Rain Haldi",
        text: "An open-air Haldi ceremony filled with yellow blooms, spontaneous music jams, and farm-to-table dinners under starry skies.",
        img: haldi,
      },
    ],
    quote: "Small weddings have a big soul. Looking at these photos brings back every laugh and tear.",
  },
  {
    id: "b3",
    title: "Aneesh & Maitri, Taj Cidade De Goa",
    couple: "Aneesh & Maitri",
    category: "Destination Weddings",
    location: "Goa Beachfront",
    date: "22 Jan 2026",
    readTime: "4 min read",
    excerpt:
      "There's something undeniably magical about a wedding by the sea, especially when the setting sun casts its golden glow over the entire shoreline.",
    image: coastal,
    secondaryImages: [cat1, story2],
    intro: [
      "There is something magical about a wedding by the sea.",
      "Especially when the setting sun casts a golden glow over barefoot vows on sandy shores.",
    ],
    chapters: [
      {
        num: "01",
        title: "Barefoot Shore Vows",
        text: "Exchanging oceanfront promises with ocean waves rustling just yards away under warm palm trees.",
        img: coastal,
      },
    ],
    quote: "We wanted ocean air, laughter, and authentic photos — and that's exactly what we received.",
  },
  {
    id: "b4",
    title: "Royal Courtyard Pheras in Udaipur",
    couple: "Rhea & Kabir",
    category: "Royal Celebrations",
    location: "Udaipur, Rajasthan",
    date: "08 Jan 2026",
    readTime: "6 min read",
    excerpt:
      "A royal heritage celebration at City Palace Udaipur filled with grand architecture, traditional music, and golden hour ceremonies.",
    image: luxuryEditorial,
    secondaryImages: [story3, cat1],
    intro: [
      "Rhea and Kabir's love story spans ten years — from college lectures in Mumbai to a floating island mandap on Lake Pichola.",
    ],
    chapters: [
      {
        num: "01",
        title: "The Floating Lake Mandap",
        text: "Floating oil lamps drifted on Lake Pichola as vows were exchanged beneath an ivory silk mandap.",
        img: featured,
      },
    ],
    quote: "Every single photograph captured by CMC FILMS feels like a scene from a film we get to keep forever.",
  },
  {
    id: "b5",
    title: "Aarav & Meera: A Winter Wedding in Jaipur",
    couple: "Aarav & Meera",
    category: "Traditional Weddings",
    location: "Jaipur, Rajasthan",
    date: "12 Dec 2026",
    readTime: "5 min read",
    excerpt:
      "A grand winter wedding in the Pink City blending Rajwadi traditions, ancestral marigold rituals, and dusk courtyard ceremonies.",
    image: heroImg,
    secondaryImages: [haldi, cat2, story1],
    intro: [
      "Some weddings begin with years of friendship. Others begin with a conversation between two families.",
    ],
    chapters: [
      {
        num: "01",
        title: "Amer Haveli Pheras",
        text: "Sacred Vedic pheras around the holy fire as dusk illuminated ancient pink sandstone arches.",
        img: heroImg,
      },
    ],
    quote: "We barely remember posing for the photographs. But somehow, every photograph feels like us.",
  },
  {
    id: "b6",
    title: "Devendra & Ishita: Heritage Fort Pheras",
    couple: "Devendra & Ishita",
    category: "Traditional Weddings",
    location: "Jodhpur, Rajasthan",
    date: "18 Nov 2025",
    readTime: "5 min read",
    excerpt:
      "Ancient fort ramparts, traditional Manganiyar folk tunes, and sacred pheras under Jodhpur skies.",
    image: story3,
    secondaryImages: [story1, luxuryEditorial],
    intro: [
      "Jodhpur's golden sandstone walls provided an unforgettable backdrop for Devendra & Ishita's royal desert wedding.",
    ],
    chapters: [
      {
        num: "01",
        title: "Mehrangarh Fort Ramparts",
        text: "Folk musicians led the royal procession through 500-year-old fort courtyards as golden hour illuminated the wedding veil.",
        img: story3,
      },
    ],
    quote: "Our cameras were simply quiet witnesses to sacred timeless vows.",
  },
];

// Duplicate array 3x for seamless 360 infinite loop
const infiniteBlogStories = [...blogStories, ...blogStories, ...blogStories];

export function WeddingStoriesPage() {
  const [currentIndex, setCurrentIndex] = useState(blogStories.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All Stories");
  const [activeArticleModal, setActiveArticleModal] = useState<WeddingBlogPost | null>(null);

  // Automatic Step Carousel (1.5 Second Step Interval like Homepage Blog)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless Infinite Loop Reset
  const handleTransitionEnd = () => {
    if (currentIndex >= blogStories.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(blogStories.length);
    } else if (currentIndex < blogStories.length) {
      setIsTransitioning(false);
      setCurrentIndex(blogStories.length * 2 - 1);
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

  const activeDotIndex = currentIndex % blogStories.length;

  const filteredGridStories = useMemo(() => {
    if (activeCategoryFilter === "All Stories") return blogStories;
    return blogStories.filter((s) => s.category.includes(activeCategoryFilter.split(" ")[0]));
  }, [activeCategoryFilter]);

  return (
    <main className="bg-[#FAF8F5] text-espresso font-sans selection:bg-[#C5A880]/20 relative overflow-hidden">
      
      {/* ── 1. HERO SECTION (100% PRESERVED & UNTOUCHED AS REQUESTED) ── */}
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

      {/* ── 2. HOMEPAGE BLOG JOURNAL CAROUSEL SECTION BELOW HERO ── */}
      <section className="bg-[#FAF8F5] py-16 md:py-24 border-b border-espresso/10 overflow-hidden relative z-10">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          
          {/* Simple Clean Header */}
          <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-espresso leading-tight">
              Tying the Knot,{" "}
              <em className="font-editorial italic border-b border-espresso/30 pb-0.5 text-[#A67B2E]">
                One Story at a Time
              </em>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-taupe font-sans font-light">
              Behind-the-lens shoot journals, real couple love stories &amp; wedding diaries.
            </p>
          </Reveal>

          {/* ── INFINITE SEAMLESS LOOP CAROUSEL CONTAINER (1.5-Sec Auto Step) ── */}
          <div
            className="relative px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Circular Navigation Buttons */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous story"
              className="absolute left-0 md:-left-2 top-1/3 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-[#3D3A36]/80 hover:bg-[#3D3A36] text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next story"
              className="absolute right-0 md:-right-2 top-1/3 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-[#3D3A36]/80 hover:bg-[#3D3A36] text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Sliding Track */}
            <div className="overflow-hidden py-2">
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex gap-6 md:gap-8 ${
                  isTransitioning
                    ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    : "transition-none"
                }`}
                style={{
                  transform: `translateX(-${currentIndex * (360 + 24)}px)`,
                }}
              >
                {infiniteBlogStories.map((post, idx) => (
                  <div
                    key={`${post.id}-${idx}`}
                    onClick={() => setActiveArticleModal(post)}
                    className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 flex flex-col justify-between text-center cursor-pointer group"
                  >
                    <div>
                      {/* Clean Simple Image Frame */}
                      <div className="aspect-[4/3] w-full overflow-hidden bg-beige mb-6 rounded-2xl shadow-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal leading-snug mb-3 group-hover:text-[#A67B2E] transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-taupe font-sans font-light leading-relaxed mb-6 px-2 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Simple Read More Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveArticleModal(post)}
                        className="inline-block px-7 py-2.5 rounded-full bg-[#3D3A36] text-white hover:bg-[#A67B2E] text-xs font-mono transition-all duration-300 active:scale-95 shadow-md"
                      >
                        Read More
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Simple Dots Indicator */}
            <div className="mt-10 flex justify-center items-center gap-2">
              {blogStories.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(blogStories.length + idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeDotIndex ? "w-6 bg-[#3D3A36]" : "w-2 bg-espresso/20"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. ALL STORIES BLOG JOURNAL GRID & CATEGORY FILTERS ── */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-white relative z-10 border-b border-espresso/10">
        <div className="mx-auto max-w-[1600px]">
          
          <Reveal className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-espresso/15 pb-6">
            <div>
              <span className="label-xs text-[#A67B2E] uppercase font-mono tracking-widest">
                Full Journal Archive
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-espresso">
                Explore All <em className="font-editorial italic text-[#A67B2E]">Wedding Articles</em>
              </h2>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "All Stories",
                "Traditional Weddings",
                "Destination Weddings",
                "Arranged Love",
                "Royal Celebrations",
                "Intimate & Eco",
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`label-xs px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border ${
                    activeCategoryFilter === cat
                      ? "bg-[#3D3A36] text-white border-[#3D3A36] shadow-md"
                      : "bg-white text-espresso/70 border-espresso/15 hover:border-[#A67B2E] hover:text-espresso"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGridStories.map((post) => (
              <div
                key={post.id}
                onClick={() => setActiveArticleModal(post)}
                className="group bg-[#FAF8F5] p-5 rounded-2xl border border-espresso/10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-taupe font-mono mb-2">
                    <span className="text-[#A67B2E] font-semibold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-espresso font-normal leading-snug mb-3 group-hover:text-[#A67B2E] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-taupe font-sans font-light leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-espresso/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-taupe">{post.location}</span>
                  <button
                    type="button"
                    onClick={() => setActiveArticleModal(post)}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#3D3A36] text-white group-hover:bg-[#A67B2E] text-xs font-mono transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. FULL BLOG READER MODAL ── */}
      {activeArticleModal && (
        <BlogStoryReaderModal
          story={activeArticleModal}
          onClose={() => setActiveArticleModal(null)}
          onNextStory={(nextS) => setActiveArticleModal(nextS)}
        />
      )}
    </main>
  );
}

// ── FULL BLOG STORY READER MODAL ──
function BlogStoryReaderModal({
  story,
  onClose,
  onNextStory,
}: {
  story: WeddingBlogPost;
  onClose: () => void;
  onNextStory: (nextS: WeddingBlogPost) => void;
}) {
  const currentIndex = blogStories.findIndex((s) => s.id === story.id);
  const nextStory = blogStories[(currentIndex + 1) % blogStories.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#FAF8F5] text-espresso overflow-y-auto animate-in fade-in duration-300">
      
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-black/5">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          CMC FILMS BLOG JOURNAL
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3D3A36] text-white hover:bg-[#A67B2E] text-xs font-mono transition-all"
        >
          <span>Close Article</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Article Cover Hero */}
      <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden bg-[#0C0D10] text-ivory flex flex-col justify-end p-6 md:p-14">
        <img
          src={story.image}
          alt={story.title}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[#A67B2E] bg-black/60 px-3 py-1 rounded-full w-fit">
            {story.category} · {story.location} · {story.date}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light text-white leading-tight">
            {story.title}
          </h1>
          <p className="text-xs font-mono text-white/60 pt-2">Scroll ↓</p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 px-6 max-w-2xl mx-auto space-y-4">
        {story.intro.map((p, i) => (
          <p key={i} className="font-editorial text-2xl sm:text-3xl text-espresso font-light leading-relaxed italic border-l-4 border-[#A67B2E] pl-6">
            "{p}"
          </p>
        ))}
      </section>

      {/* Flowing Story Chapters */}
      <section className="py-8 px-6 max-w-3xl mx-auto space-y-16">
        {story.chapters.map((ch, i) => (
          <div key={i} className="space-y-4">
            <span className="text-xs font-mono text-[#A67B2E] font-bold">{ch.num} — {ch.title}</span>
            <p className="text-base text-espresso/80 font-sans font-light leading-relaxed">{ch.text}</p>
            {ch.img && (
              <div className="my-6 aspect-[16/10] overflow-hidden rounded-2xl bg-beige">
                <img src={ch.img} alt={ch.title} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        ))}

        {/* Couple Quote */}
        {story.quote && (
          <div className="py-12 text-center space-y-3 border-t border-b border-black/10">
            <QuoteIcon className="w-8 h-8 text-[#A67B2E] mx-auto opacity-50" />
            <p className="font-editorial text-2xl sm:text-3xl italic text-espresso font-light">
              "{story.quote}"
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
          src={nextStory.image}
          alt={nextStory.title}
          className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-3 max-w-xl">
          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">NEXT ARTICLE</span>
          <h2 className="font-display text-3xl sm:text-5xl text-white font-light group-hover:text-[#A67B2E] transition-colors">
            {nextStory.title}
          </h2>
          <p className="font-editorial text-base italic text-white/80">{nextStory.location}</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A67B2E] text-cinema text-xs font-mono font-semibold pt-2">
            <span>Read Next Article →</span>
          </span>
        </div>
      </section>

    </div>
  );
}
