import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowRight, ArrowDown, Clock, Calendar, X } from "lucide-react";
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
}

const blogPosts: BlogPost[] = [
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

export function WeddingStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "Real Weddings", "Couple Shoots", "Bridal Guides", "Destinations"];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-[#FAF8F5] text-[#261E1E] font-sans selection:bg-[#93191E]/20 relative overflow-hidden">
      
      {/* ── 1. HERO SECTION (100% PRESERVED EXACTLY AS IS) ── */}
      <section className="relative z-10 h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col justify-between p-6 md:p-14 border-b border-black/5">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={featured}
            alt="Wedding Stories Background"
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/75 via-[#FAF8F5]/20 via-20% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 my-auto max-w-4xl space-y-6">
          <Reveal>
            <h1 className="font-display text-[clamp(4rem,11.5vw,9.5rem)] leading-[0.85] font-extrabold text-[#0C0D10] tracking-tight select-none drop-shadow-sm">
              WEDDING <br />
              <em className="font-editorial italic text-[#93191E] font-bold drop-shadow-sm">
                STORIES
              </em>
            </h1>
          </Reveal>

        </div>

        <div className="relative z-10 flex justify-end items-end text-xs font-mono text-[#1A1A1A]/60 border-t border-black/10 pt-4">
          <span className="flex items-center gap-2">
            Scroll to read journal <ArrowDown className="w-3.5 h-3.5 text-[#93191E]" />
          </span>
        </div>
      </section>

      {/* ── 2. FEATURED STORY BANNER (PRESERVED EXACTLY AS IS) ── */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-10 max-w-[1700px] mx-auto border-b border-black/5">
        <div className="relative mx-auto w-full md:w-[92%]">
          <div
            onClick={() => setActivePost(blogPosts[0])}
            className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl cursor-pointer bg-[#EFECE6] shadow-lg group"
          >
            <img
              src={blogPosts[0].coverImage}
              alt={blogPosts[0].title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div
            onClick={() => setActivePost(blogPosts[0])}
            className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 md:max-w-md bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-black/10 shadow-xl cursor-pointer hover:border-[#93191E] transition-all space-y-3 z-20"
          >
            <span className="label-xs text-[#93191E] uppercase tracking-widest font-mono">
              FEATURED STORY
            </span>

            <h3 className="font-display text-2.5xl sm:text-3xl text-[#261E1E] font-light">
              Aarav & Meera
            </h3>

            <p className="font-editorial text-base italic text-[#93191E] font-normal">
              "{blogPosts[0].title}"
            </p>

            <p className="text-xs font-mono text-[#261E1E]/60">
              {blogPosts[0].category} · Jaipur, Rajasthan
            </p>

            <p className="text-xs text-[#261E1E]/80 font-sans font-light leading-relaxed">
              "{blogPosts[0].excerpt}"
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#261E1E] hover:text-[#93191E] transition-colors">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#93191E]" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ELEGANT 2-COLUMN JOURNAL CARDS SECTION (EXACT USER REFERENCE MATCH) ── */}
      <section className="relative z-10 pt-4 pb-16 md:pt-8 md:pb-24 px-6 md:px-14 max-w-[1500px] mx-auto space-y-10">
        
        {/* Minimal Header */}
        <div className="text-center max-w-none mx-auto">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#261E1E] lg:whitespace-nowrap">
            Stories, Wisdom & <span className="text-[#93191E]">Wedding Inspiration</span>
          </h2>
        </div>

        {/* 4-Column Story Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1750px] mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* 1. Crisp Image */}
                <div className="aspect-[16/11] w-full overflow-hidden bg-[#EFECE6]">
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

      {/* ── 4. CLEAN BLOG READER OVERLAY MODAL ── */}
      {activePost && (
        <CleanBlogReaderModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}
    </main>
  );
}

// ── CLEAN BLOG READER OVERLAY MODAL ──
function CleanBlogReaderModal({
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

        {/* Intro */}
        <p className="font-editorial text-2xl text-[#261E1E] font-light leading-relaxed italic border-l-3 border-[#93191E] pl-5">
          "{post.content.intro}"
        </p>

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
        </div>

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
