import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowRight, ArrowDown, Clock, Calendar, User, X, BookOpen, Sparkles, Send, CheckCircle2 } from "lucide-react";
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
import clientPortrait from "@/assets/client-portrait.jpg";

const pageTitle = "Wedding Stories & Journal — CMC FILMS";
const pageDescription =
  "Real weddings, editorial advice, pre-wedding shoot guides, and luxury wedding photography stories by CMC FILMS.";

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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Real Wedding Stories" | "Pre-Wedding & Couple Shoots" | "Bridal Guide & Tips" | "Destination Venues";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      image?: string;
      quote?: string;
    }[];
    conclusion: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "winter-wedding-in-jaipur-aarav-meera",
    title: "A Winter Wedding in Jaipur: Traditions, Emotions & Royal Heritage",
    category: "Real Wedding Stories",
    date: "14 Feb 2026",
    readTime: "6 min read",
    author: {
      name: "Sahil Sharma",
      role: "Lead Creative Director",
      avatar: clientPortrait,
    },
    coverImage: luxuryEditorial,
    excerpt:
      "Step inside Amer Haveli as yellow marigold petals shower balconies and dusk illuminates pink sandstone arches for Aarav & Meera's royal nuptials.",
    content: {
      intro:
        "They did not meet in college, nor was there a dramatic movie moment. Introduced gently by their families over a quiet Sunday cup of tea in Delhi, their love story unfolded with understated grace.",
      sections: [
        {
          heading: "The Pre-Wedding Rituals at Amer Haveli",
          body: "In the ancestral courtyard of Amer Haveli, yellow marigold petals showered from balconies while classical musicians filled the morning air with raags. The golden lighting of Jaipur at 4 PM creates a rich, painterly backdrop for royal bridal portraits.",
          image: haldi,
          quote: "We barely noticed the cameras. Every frame feels authentic to our true emotions.",
        },
        {
          heading: "Vedic Pheras Under Sandstone Arches",
          body: "Sacred Vedic chants echoed around the holy fire as dusk illuminated ancient pink sandstone arches. Our cinema crew utilized ultra-low-light prime lenses to capture the subtle tears and laughter without distracting heat lamps.",
          image: heroImg,
        },
        {
          heading: "Editorial Photography Insights",
          body: "When documenting high-heritage Rajasthani weddings, preserving raw skin tones against rich crimson bridal lehengas and gold zari embroidery requires careful dynamic range management.",
          image: story1,
        },
      ],
      conclusion:
        "A wedding is more than a single day; it is a priceless heritage archive passed down through generations. Preserving how it felt is our lifelong commitment.",
    },
  },
  {
    id: "b2",
    slug: "why-pre-wedding-couple-shoots-matter",
    title: "Why Pre-Wedding Couple Shoots Are Essential for Modern Couples",
    category: "Pre-Wedding & Couple Shoots",
    date: "02 Feb 2026",
    readTime: "5 min read",
    author: {
      name: "CMC Editorial Team",
      role: "Visual Storytellers",
      avatar: cat2,
    },
    coverImage: coastal,
    excerpt:
      "Beyond beautiful sunset portraits, a pre-wedding shoot builds camera confidence, uncovers your candid comfort zone, and captures timeless romantic chemistry.",
    content: {
      intro:
        "Many couples tell us, 'We are camera-shy and don't know how to pose.' A pre-wedding shoot is the perfect low-pressure space to erase camera anxiety before your big wedding days.",
      sections: [
        {
          heading: "Building Trust & Comfort with Your Photographer",
          body: "A pre-wedding shoot allows you to spend a relaxed afternoon with your creative crew. By the time your wedding sangeet arrives, having the camera near feels as natural as having a friend in the room.",
          image: maternity,
          quote: "By min 15, we completely forgot about the camera lens and just enjoyed the sunset.",
        },
        {
          heading: "Choosing Locations That Hold Personal Meaning",
          body: "Whether it's the quiet lakefront of Lake Pichola at dawn or a coastal cliff in Goa, select a landscape that aligns with your personal romance story rather than cliché tourist spots.",
          image: cat1,
        },
      ],
      conclusion:
        "Invest in memories that represent who you are when nobody else is watching.",
    },
  },
  {
    id: "b3",
    slug: "complete-wedding-photography-timeline-guide",
    title: "The Ultimate Photography Timeline Guide for a Stress-Free Wedding Day",
    category: "Bridal Guide & Tips",
    date: "20 Jan 2026",
    readTime: "8 min read",
    author: {
      name: "Sahil Sharma",
      role: "Lead Creative Director",
      avatar: clientPortrait,
    },
    coverImage: featured,
    excerpt:
      "Avoid rushed portraits and missed candid moments with our master timeline blueprint tailored for Indian & Destination wedding schedules.",
    content: {
      intro:
        "The biggest enemy of breathtaking wedding photography is a rushed schedule. Here is how to plan makeup finish times, golden hour light windows, and family group portraits seamlessly.",
      sections: [
        {
          heading: "1. The Bridal Getting-Ready Window (90 Mins)",
          body: "Ensure your MUA finishes makeup 45 minutes before the Baraat arrives. This leaves a calm, uncluttered window for solo bridal portraits, detail shots of jewelry, and family blessings.",
          image: story3,
          quote: "Timely makeup completion is the secret to serene, luminous bridal portraits.",
        },
        {
          heading: "2. The Golden Hour Couple Portrait Session (45 Mins)",
          body: "Schedule 30-45 minutes immediately before sunset for your first look or couple portraits. Golden light softens skin, enhances warm attire, and produces magical cinematic flares.",
          image: cat3,
        },
      ],
      conclusion:
        "A well-planned timeline ensures you remain present in every celebration while we document every unrepeatable memory.",
    },
  },
  {
    id: "b4",
    slug: "destination-nikah-in-dubai-saba-usman",
    title: "Destination Nikah in Dubai: Sunset Light, Desert Mist & Elegance",
    category: "Destination Venues",
    date: "10 Jan 2026",
    readTime: "7 min read",
    author: {
      name: "CMC Editorial Team",
      role: "Visual Storytellers",
      avatar: story2,
    },
    coverImage: cat1,
    excerpt:
      "A three-day luxury celebration in Dubai connecting families across London, Dubai, and Mumbai under Arabian desert skies and mirror canopies.",
    content: {
      intro:
        "Standing amid red desert sands as the sun melted into the dunes, Saba's ivory veil caught the desert breeze in an unforgettable moment of quiet luxury.",
      sections: [
        {
          heading: "Desert Dunes Sunset Portrait Session",
          body: "Capturing romance in the Arabian desert requires understanding how light reflects off sweeping sand ridges. Contrast between deep black menswear and soft cream silk attire created timeless editorial warmth.",
          image: luxuryEditorial,
          quote: "The photos captured the quiet dignity and grandeur of our desert Nikah.",
        },
        {
          heading: "Waterfront Canopy Ceremony",
          body: "Under a mirror and floral canopy overlooking the Gulf skyline, sacred promises were spoken in quiet beauty as family members looked on with tears of happiness.",
          image: story1,
        },
      ],
      conclusion:
        "Destination celebrations thrive when local geography and architecture are woven directly into the visual film narrative.",
    },
  },
  {
    id: "b5",
    slug: "intimate-vs-royal-grand-weddings",
    title: "Intimate vs. Grand Royal Weddings: Finding Your Signature Visual Style",
    category: "Bridal Guide & Tips",
    date: "28 Dec 2025",
    readTime: "4 min read",
    author: {
      name: "Sahil Sharma",
      role: "Lead Creative Director",
      avatar: clientPortrait,
    },
    coverImage: haldi,
    excerpt:
      "Whether hosting an 80-guest eco-farmhouse gathering or a 1,000-guest palace extravaganza, discover how visual storytelling adapts to your scale.",
    content: {
      intro:
        "Every scale of wedding possesses a unique emotional frequency. Intimate gatherings highlight conversation and warmth, while grand palace weddings showcase majestic heritage scale.",
      sections: [
        {
          heading: "The Intimate Celebration: Depth over Scale",
          body: "At 80 guests, photographers have the luxury of documenting every single attendee in candid emotional detail. Small weddings allow unhurried storytelling and spontaneous moments.",
          image: cat2,
        },
      ],
      conclusion:
        "Regardless of guest count, authentic emotion is the golden thread that unifies extraordinary wedding films.",
    },
  },
  {
    id: "b6",
    slug: "royal-palace-weddings-in-udaipur",
    title: "The Magic of Lake Pichola: Royal Palace Weddings in Udaipur",
    category: "Destination Venues",
    date: "15 Dec 2025",
    readTime: "6 min read",
    author: {
      name: "CMC Editorial Team",
      role: "Visual Storytellers",
      avatar: cat3,
    },
    coverImage: story3,
    excerpt:
      "Floating oil lamps on Lake Pichola, ancient ivory mandaps, and midnight sitar sessions in palace gardens — documenting love in India's City of Lakes.",
    content: {
      intro:
        "Udaipur remains the undisputed capital of romantic heritage cinema. Lake Pichola's serene waters reflect centuries of royal architecture and timeless elegance.",
      sections: [
        {
          heading: "Capturing Reflections on Water",
          body: "Boat processions across Lake Pichola offer breathtaking wide-angle cinematography. Timing the arrival of the groom with twilight torches creates unmatched cinematic drama.",
          image: featured,
          quote: "Udaipur at night feels like stepping directly inside a vintage Indian cinema masterpiece.",
        },
      ],
      conclusion:
        "Palace heritage photography requires balancing architectural majesty with private human intimacy.",
    },
  },
];

export function WeddingStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "All Stories",
    "Real Wedding Stories",
    "Pre-Wedding & Couple Shoots",
    "Bridal Guide & Tips",
    "Destination Venues",
  ];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Stories") return blogPosts;
    return blogPosts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <main className="bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-[#C5A880]/20 relative overflow-hidden">
      {/* ── SUBTLE AMBIENT BACKGROUND SYSTEM ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#EFECE6] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-[#F7F2EF] rounded-full blur-[160px]" />
      </div>

      {/* ── 1. HERO SECTION (100% PRESERVED EXACTLY AS IS) ── */}
      <section className="relative z-10 h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col justify-between p-6 md:p-14 border-b border-black/5">
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={featured}
            alt="Wedding Stories Background"
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-[10000ms]"
          />
          {/* Fog Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/75 via-[#FAF8F5]/20 via-20% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent" />
        </div>

        {/* Large Bold High-Contrast Hero Typography */}
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

        {/* Bottom Scroll Indicator */}
        <div className="relative z-10 flex justify-between items-end text-xs font-mono text-[#1A1A1A]/60 border-t border-black/10 pt-4">
          <span>REAL SHOOT DIARIES & JOURNAL</span>
          <span className="flex items-center gap-2">
            Scroll to read journal <ArrowDown className="w-3.5 h-3.5 text-[#A67B2E]" />
          </span>
        </div>
      </section>

      {/* ── 2. FEATURED STORY BANNER (PRESERVED EXACTLY AS IS) ── */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-10 max-w-[1700px] mx-auto border-b border-black/5">
        <div className="relative mx-auto w-full md:w-[92%]">
          {/* Large Cinematic Image */}
          <div
            onClick={() => setActivePost(blogPosts[0])}
            className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl cursor-pointer bg-beige shadow-lg group"
          >
            <img
              src={blogPosts[0].coverImage}
              alt={blogPosts[0].title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Floating Text Panel */}
          <div
            onClick={() => setActivePost(blogPosts[0])}
            className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 md:max-w-md bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-black/10 shadow-xl cursor-pointer hover:border-[#A67B2E] transition-all space-y-3 z-20"
          >
            <span className="label-xs text-[#A67B2E] uppercase tracking-widest font-mono">
              FEATURED STORY
            </span>

            <h3 className="font-display text-2.5xl sm:text-3xl text-[#1A1A1A] font-light">
              Aarav & Meera
            </h3>

            <p className="font-editorial text-base italic text-[#A67B2E] font-light">
              "{blogPosts[0].title}"
            </p>

            <p className="text-xs font-mono text-black/60">
              {blogPosts[0].category} · Jaipur, Rajasthan
            </p>

            <p className="text-xs text-black/80 font-sans font-light leading-relaxed">
              "{blogPosts[0].excerpt}"
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#A67B2E] transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A67B2E]" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WEDDING JOURNAL / BLOG SECTION (NEW EDITORIAL BLOG LAYOUT) ── */}
      <section className="relative z-10 py-16 md:py-24 px-6 md:px-14 max-w-[1700px] mx-auto space-y-12">
        {/* Section Header & Category Filter Pills */}
        <div className="space-y-6 border-b border-black/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-[0.25em]">
                EDITORIAL JOURNAL & GUIDES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mt-1">
                Latest <em className="font-editorial italic text-[#A67B2E] font-normal">Articles & Stories</em>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-sans font-light max-w-md">
              In-depth wedding stories, professional photography guides, location spotlights, and romantic inspirations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-[#1A1A1A] text-white shadow-sm"
                      : "bg-white text-black/70 hover:bg-[#EFECE6] border border-black/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Post Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group bg-white rounded-3xl overflow-hidden border border-black/10 shadow-sm hover:shadow-xl hover:border-[#A67B2E]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-[11px] font-mono text-black/50">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#A67B2E]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#A67B2E]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl text-[#1A1A1A] font-normal leading-snug group-hover:text-[#A67B2E] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-black/70 font-sans font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Author & Read Link */}
              <div className="px-6 pb-6 pt-2 border-t border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#A67B2E]/30"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-medium text-[#1A1A1A]">{post.author.name}</p>
                    <p className="text-[10px] font-mono text-black/50">{post.author.role}</p>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold text-[#A67B2E] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 4. JOURNAL NEWSLETTER / INSPIRATION SUBSCRIBER BANNER ── */}
      <section className="relative z-10 py-16 md:py-24 px-6 md:px-14 bg-[#1A1A1A] text-white border-t border-b border-black/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-[0.25em]">
            STAY INSPIRED
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-light text-white leading-tight">
            Subscribe to Our <em className="font-editorial italic text-[#A67B2E]">Wedding Journal</em>
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Receive monthly real wedding stories, venue highlights, and expert bridal photography advice straight to your inbox. No spam, ever.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A67B2E] text-white text-xs font-mono font-semibold animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Thank you for subscribing to CMC Journal!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-xs focus:outline-none focus:border-[#A67B2E]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#A67B2E] hover:bg-[#8F6623] text-white text-xs font-mono font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Join Journal</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── 5. ARTICLE READER MODAL (FULL BLOG READING EXPERIENCE) ── */}
      {activePost && (
        <BlogReaderModal
          post={activePost}
          onClose={() => setActivePost(null)}
          onSelectPost={(post) => setActivePost(post)}
        />
      )}
    </main>
  );
}

// ── FULL BLOG READER MODAL ──
function BlogReaderModal({
  post,
  onClose,
  onSelectPost,
}: {
  post: BlogPost;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}) {
  const currentIndex = blogPosts.findIndex((b) => b.id === post.id);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#FAF8F5] text-[#1A1A1A] overflow-y-auto animate-in fade-in duration-300">
      {/* Sticky Reader Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-black/10">
        <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
          CMC JOURNAL · {post.category}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1A1A] text-white hover:bg-[#A67B2E] text-xs font-mono transition-all cursor-pointer shadow-md"
        >
          <span>Close Article</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Article Cover Hero */}
      <section className="relative h-[75vh] min-h-[480px] w-full overflow-hidden bg-[#0C0D10] text-white flex flex-col justify-end p-6 md:p-14">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-[#A67B2E]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#A67B2E]"
            />
            <div>
              <p className="text-sm font-medium text-white">{post.author.name}</p>
              <p className="text-xs font-mono text-white/60">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body Content */}
      <article className="py-16 px-6 max-w-3xl mx-auto space-y-10">
        {/* Intro */}
        <p className="font-editorial text-2xl sm:text-3xl text-[#1A1A1A] font-light leading-relaxed italic border-l-4 border-[#A67B2E] pl-6">
          "{post.content.intro}"
        </p>

        {/* Dynamic Sections */}
        {post.content.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4 pt-4">
            <h2 className="font-display text-2xl sm:text-3xl font-light text-[#1A1A1A]">
              {sec.heading}
            </h2>
            <p className="text-sm sm:text-base text-black/80 font-sans font-light leading-relaxed">
              {sec.body}
            </p>

            {sec.quote && (
              <blockquote className="my-6 p-6 rounded-2xl bg-[#EFECE6] font-editorial italic text-xl text-[#1A1A1A] border-l-2 border-[#A67B2E]">
                "{sec.quote}"
              </blockquote>
            )}

            {sec.image && (
              <div className="my-6 aspect-[16/10] overflow-hidden rounded-2xl bg-beige shadow-md">
                <img src={sec.image} alt={sec.heading} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        ))}

        {/* Conclusion */}
        <div className="pt-8 border-t border-black/10 space-y-3">
          <h3 className="font-display text-xl font-light text-[#1A1A1A]">Conclusion</h3>
          <p className="text-sm sm:text-base text-black/80 font-sans font-light leading-relaxed">
            {post.content.conclusion}
          </p>
        </div>
      </article>

      {/* Next Article CTA Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onSelectPost(nextPost);
        }}
        className="relative h-[50vh] min-h-[360px] w-full overflow-hidden bg-[#1A1A1A] text-white flex flex-col justify-center items-center text-center p-6 cursor-pointer group border-t border-black/10"
      >
        <img
          src={nextPost.coverImage}
          alt={nextPost.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-3 max-w-xl">
          <span className="text-xs font-mono text-[#A67B2E] uppercase tracking-widest">
            READ NEXT ARTICLE
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-white font-light group-hover:text-[#A67B2E] transition-colors leading-tight">
            {nextPost.title}
          </h2>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A67B2E] text-white text-xs font-mono font-semibold pt-2 shadow-lg">
            <span>Read Article →</span>
          </span>
        </div>
      </section>
    </div>
  );
}
