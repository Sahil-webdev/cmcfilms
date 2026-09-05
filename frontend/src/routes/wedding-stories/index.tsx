import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, X, Sparkles, Calendar, Clock } from "lucide-react";
import { useHeroMedia } from "@/hooks/useHeroMedia";

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

export const Route = createFileRoute("/wedding-stories/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/wedding-stories" },
    ],
    links: [{ rel: "canonical", href: "/wedding-stories" }],
  }),
  component: WeddingStoriesPage,
});

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Real Weddings" | "Couple Shoots" | "Bridal Guides" | "Destinations";
  date: string;
  readTime: string;
  author: {
    name: string;
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
  htmlContent?: string;
  featured?: boolean;
}

export const getStorySlug = (post: Pick<BlogPost, "id" | "title">) => {
  const toSegment = (value: string) => value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${toSegment(post.title) || "wedding-story"}-${toSegment(String(post.id)) || "story"}`;
};

export const toPublishedStoryPost = (story: any): BlogPost => ({
  id: String(story.id),
  slug: String(story.id),
  title: String(story.title || 'Wedding Story'),
  category: (story.category as any) || 'Real Weddings',
  date: String(story.date || ''),
  readTime: '5 min read',
  author: { name: String(story.couple || 'CMC FILMS'), avatar: '' },
  coverImage: String(story.coverImage || featured),
  excerpt: String(story.subtitle || story.excerpt || story.location || 'A beautiful wedding story by CMC FILMS.'),
  htmlContent: String(story.content || ''),
  content: { intro: '', sections: [], conclusion: '' },
  featured: Boolean(story.featured),
});

export const dedupePostsById = (items: BlogPost[]) => {
  const byId = new Map<string, BlogPost>();
  items.forEach((item) => byId.set(item.id, item));
  return [...byId.values()];
};

const legacyBlogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "winter-wedding-in-jaipur-aarav-meera",
    title: "A Winter Wedding in Jaipur: Traditions & Royal Heritage",
    category: "Real Weddings",
    date: "14 Feb 2026",
    readTime: "6 min read",
    author: {
      name: "Sahil Sharma",
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
      ],
      conclusion:
        "A wedding is more than a single day; it is a priceless heritage archive passed down through generations. Preserving how it felt is our lifelong commitment.",
    },
    featured: true,
  },
  {
    id: "b2",
    slug: "why-pre-wedding-couple-shoots-matter",
    title: "Why Pre-Wedding Couple Shoots Are Essential for Modern Couples",
    category: "Couple Shoots",
    date: "02 Feb 2026",
    readTime: "5 min read",
    author: {
      name: "CMC Editorial Team",
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
    category: "Bridal Guides",
    date: "20 Jan 2026",
    readTime: "8 min read",
    author: {
      name: "Sahil Sharma",
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
    title: "Destination Nikah in Dubai: Sunset Light & Desert Romance",
    category: "Destinations",
    date: "10 Jan 2026",
    readTime: "7 min read",
    author: {
      name: "CMC Editorial Team",
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
      ],
      conclusion:
        "Destination celebrations thrive when local geography and architecture are woven directly into the visual film narrative.",
    },
  },
  {
    id: "b5",
    slug: "intimate-vs-royal-grand-weddings",
    title: "Intimate vs. Royal Weddings: Finding Your Visual Style",
    category: "Bridal Guides",
    date: "28 Dec 2025",
    readTime: "4 min read",
    author: {
      name: "Sahil Sharma",
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
    category: "Destinations",
    date: "15 Dec 2025",
    readTime: "6 min read",
    author: {
      name: "CMC Editorial Team",
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

export const blogPosts: BlogPost[] = legacyBlogPosts;

export function WeddingStoriesPage() {
  const heroMedia = useHeroMedia('portfolio', featured);
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  // ── Load published CMS stories from localStorage & backend API ──
  useEffect(() => {
    const loadStories = () => {
      let localStories: BlogPost[] = [];
      try {
        const stored = localStorage.getItem('cmc_stories');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            localStories = parsed
              .filter((s: any) => s.status !== 'Draft' && s.title)
              .map(toPublishedStoryPost);
          }
        }
      } catch {}

      if (localStories.length > 0) {
        setPosts(dedupePostsById([...localStories, ...legacyBlogPosts]));
      }
    };

    loadStories();
    window.addEventListener('storage', loadStories);

    const controller = new AbortController();
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/stories`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        if (!Array.isArray(payload?.data?.stories)) return;
        const publishedStories = payload.data.stories
          .filter((story: any) => story.status !== 'Draft' && story.title)
          .map(toPublishedStoryPost);
        if (publishedStories.length > 0) {
          setPosts((prev) => dedupePostsById([...publishedStories, ...prev]));
        }
      })
      .catch(() => undefined);

    return () => {
      window.removeEventListener('storage', loadStories);
      controller.abort();
    };
  }, []);

  const openStory = (post: BlogPost) => {
    navigate({ to: '/wedding-stories/$slug', params: { slug: getStorySlug(post) } });
  };

  // Featured post = story marked featured by admin, or first post
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <main className="bg-[#FAF8F5] text-[#261E1E] font-sans selection:bg-[#93191E]/20 relative overflow-hidden">
      
      {/* ── 1. CLEAN HERO IMAGE ── */}
      <section className="relative z-10 h-[100svh] min-h-[640px] w-full overflow-hidden border-b border-black/5">
        <img
          src={heroMedia}
          alt="Wedding Stories"
          className="h-full w-full object-cover object-center"
        />
      </section>

      {/* ── 2. FEATURED STORY BANNER SECTION ── */}
      {featuredPost && (
        <section className="relative z-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-[1700px] mx-auto border-b border-black/5">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#93191E]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#93191E] uppercase">
                Featured Story
              </span>
            </div>
            <span className="text-xs font-mono text-[#261E1E]/50 hidden sm:inline-block uppercase tracking-wider">
              Real Weddings & Editorial Journal
            </span>
          </div>

          {/* 2-Column Luxury Split Magazine Card */}
          <div
            onClick={() => openStory(featuredPost)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-[#F7F4EF] border border-[#E5DEC3]/80 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Left Column: Full Photo (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden bg-black/10">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 lg:hidden" />
              
              {/* Badge Overlay */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-mono font-medium tracking-wider border border-white/20 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                  <span>Spotlight Edition</span>
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Text (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-[#F7F4EF]">
              <div className="space-y-4 sm:space-y-5">
                {/* Meta Badge & Date */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#93191E] font-semibold tracking-wider uppercase flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#93191E]/10 border border-[#93191E]/20 text-[#93191E]">
                    {featuredPost.category}
                  </span>
                  {featuredPost.date && (
                    <span className="text-[#261E1E]/60 font-normal flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#93191E]" />
                      {featuredPost.date}
                    </span>
                  )}
                </div>

                {/* Main Story Title */}
                <h2 className="font-serif text-2.5xl sm:text-3xl lg:text-[2.4rem] font-normal text-[#1A1817] leading-[1.2] tracking-tight group-hover:text-[#93191E] transition-colors">
                  "{featuredPost.title}"
                </h2>

                {/* Couple Subtitle */}
                {featuredPost.author?.name && (
                  <div className="flex items-center gap-3 pt-0.5">
                    <span className="h-px w-6 bg-[#93191E]/50" />
                    <p className="font-serif italic text-base sm:text-lg text-[#7A6B63]">
                      Featuring {featuredPost.author.name}
                    </p>
                  </div>
                )}

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#4A423D] font-sans font-light leading-relaxed line-clamp-4 pt-1">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Bottom CTA Bar */}
              <div className="pt-5 border-t border-[#E2DCCE] flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#93191E] text-white text-xs font-mono font-bold tracking-wider uppercase group-hover:bg-[#7a1418] transition-colors shadow-md">
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                {featuredPost.readTime && (
                  <span className="text-xs font-mono text-[#261E1E]/50 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#93191E]" />
                    {featuredPost.readTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 3. BLOG JOURNAL SECTION ── */}
      <section className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24 px-6 md:px-14 max-w-[1750px] mx-auto space-y-10">
        
        {/* Minimal Header */}
        <div className="text-center max-w-none mx-auto space-y-4">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#261E1E]">
            Stories, Wisdom & <span className="text-[#93191E]">Wedding Inspiration</span>
          </h2>

        </div>

        {/* 4-Column Story Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => openStory(post)}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* 1. Crisp Image */}
                <div className="aspect-[16/11] w-full overflow-hidden bg-[#EFECE6] rounded-xl shadow-sm">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* 2. Centered Title */}
                <h3 className="font-poppins text-base sm:text-lg font-normal text-[#261E1E] text-center leading-snug transition-colors group-hover:text-[#93191E]">
                  {post.title}
                </h3>

                {/* 3. Centered Description */}
                <p className="text-xs sm:text-sm text-[#8A8072] font-poppins font-normal text-center leading-relaxed line-clamp-3 px-1">
                  {post.excerpt}
                </p>
              </div>

              {/* 4. Centered Dark Pill Read More Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  className="bg-[#383330] group-hover:bg-[#93191E] text-white font-sans text-xs px-6 py-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

// ── CLEAN BLOG READER OVERLAY MODAL ──
export function CleanBlogReaderModal({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#FAF8F5] text-[#261E1E] overflow-y-auto animate-in fade-in duration-300">
      
      {/* Top Floating Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/10">
        <span className="text-xs font-mono text-[#93191E] uppercase tracking-widest font-semibold">
          CMC JOURNAL · {post.category}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#261E1E] text-white hover:bg-[#93191E] text-xs font-mono transition-all cursor-pointer shadow-md"
        >
          <span>Close</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Reading Container */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        
        {/* Post Title & Category Header */}
        <div className="space-y-3 border-b border-black/10 pb-6">
          <span className="text-xs font-mono text-[#93191E] uppercase tracking-wider font-semibold">
            {post.category} · {post.date}
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-light text-[#261E1E] leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Cover Photo */}
        <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#EFECE6] shadow-sm">
          <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
        </div>

        {post.htmlContent ? (
          <div className="story-rich-content text-sm sm:text-base leading-relaxed text-[#261E1E]/85" dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
        ) : <>
          <p className="font-editorial text-2xl text-[#261E1E] font-light leading-relaxed italic border-l-3 border-[#93191E] pl-5">"{post.content.intro}"</p>

        {/* Story Sections */}
        {post.content.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4 pt-2">
            <h2 className="font-display text-2xl font-light text-[#261E1E]">
              {sec.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#261E1E]/85 font-sans font-light leading-relaxed">
              {sec.body}
            </p>

            {sec.quote && (
              <blockquote className="my-5 p-5 rounded-xl bg-white border border-black/5 font-editorial italic text-lg text-[#93191E]">
                "{sec.quote}"
              </blockquote>
            )}

            {sec.image && (
              <div className="my-5 aspect-[16/10] overflow-hidden rounded-xl bg-[#EFECE6]">
                <img src={sec.image} alt={sec.heading} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        ))}

        {/* Conclusion */}
        <div className="pt-6 border-t border-black/10 space-y-2">
          <h3 className="font-display text-xl font-light text-[#261E1E]">Final Thoughts</h3>
          <p className="text-sm sm:text-base text-[#261E1E]/85 font-sans font-light leading-relaxed">
            {post.content.conclusion}
          </p>
        </div></>}

        {/* Close Button at End */}
        <div className="pt-8 text-center">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 rounded-full bg-[#93191E] text-white hover:bg-[#261E1E] text-xs font-mono font-semibold transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>Back to Journal</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  );
}
