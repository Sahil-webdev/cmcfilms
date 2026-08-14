import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Film, Camera } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import featured from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";

type StoryCategory = LightboxItem & {
  id: string;
  no: string;
  name: string;
  tagline: string;
  medium: string;
  location: string;
  icon: "camera" | "film";
};

const storyCategories: StoryCategory[] = [
  {
    id: "sc-1",
    no: "01",
    name: "Royal Destination Weddings",
    tagline: "Palaces, lakeside vows & regal heritage courtyards",
    medium: "Editorial 35mm",
    location: "Udaipur & Jaipur",
    src: luxuryEditorial,
    alt: "Royal destination wedding ceremony at golden hour",
    title: "Royal Destination Weddings",
    category: "Destinations",
    year: "2026",
    icon: "camera",
  },
  {
    id: "sc-2",
    no: "02",
    name: "Sacred Pheras & Rituals",
    tagline: "Haldi marigold showers, timeless vows & family tears",
    medium: "Cinematic 4K",
    location: "Heritage Palaces",
    src: haldi,
    alt: "Joyful haldi ceremony with flower shower",
    title: "Sacred Pheras & Rituals",
    category: "Weddings",
    year: "2026",
    icon: "film",
  },
  {
    id: "sc-3",
    no: "03",
    name: "Intimate Pre-Weddings",
    tagline: "Golden hour dunes, breezy coastal shores & unhurried quiet",
    medium: "Fine Art Photo",
    location: "Goa & Jaisalmer",
    src: coastal,
    alt: "Couple walking on beach at sunset",
    title: "Intimate Pre-Weddings",
    category: "Pre-Weddings",
    year: "2026",
    icon: "camera",
  },
  {
    id: "sc-4",
    no: "04",
    name: "Bridal Couture & Portraits",
    tagline: "Slow-crafted details, royal jewels & silent heirlooms",
    medium: "Vogue Editorial",
    location: "Amer Fort Studio",
    src: story1,
    alt: "Bridal portrait in soft natural lighting",
    title: "Bridal Couture & Portraits",
    category: "Editorial",
    year: "2026",
    icon: "camera",
  },
  {
    id: "sc-5",
    no: "05",
    name: "Grand Sangeet & Celebrations",
    tagline: "High-energy dance floors, fairy-lit midnight euphoria",
    medium: "Documentary 4K",
    location: "Goa & Delhi",
    src: cat1,
    alt: "Celebration dancing under fairy lights",
    title: "Grand Sangeet & Celebrations",
    category: "Celebrations",
    year: "2026",
    icon: "film",
  },
  {
    id: "sc-6",
    no: "06",
    name: "Monochrome Soulmates",
    tagline: "Intimate shadows, raw laughter & timeless black-and-white",
    medium: "Silver Gelatin",
    location: "Archive Studio",
    src: cat3,
    alt: "Intimate monochrome couple portrait",
    title: "Monochrome Soulmates",
    category: "Couples",
    year: "2026",
    icon: "camera",
  },
];

export function StoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="grain relative bg-[#576049] py-24 text-ivory md:py-36 overflow-hidden border-y border-ivory/10">
      {/* ── Background Luxury Lighting Effects ── */}
      <div className="pointer-events-none absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-[#E5CA92]/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-cinema/40 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#E5CA92]/8 blur-[100px]" />

      <div className="relative mx-auto max-w-[1680px] px-5 md:px-10">
        <Reveal>
          {/* ── Top Bar with Gold Badge & Live Stats ── */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory/15 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5CA92]/20 border border-[#E5CA92]/40 text-[#E5CA92]">
                <Sparkles className="h-3 w-3 animate-spin-slow" />
              </span>
              <span className="label-xs uppercase tracking-[0.3em] text-[#E5CA92] font-mono text-[11px]">
                Stories We Tell · Curated Anthology
              </span>
            </div>

            <div className="flex items-center gap-6 text-ivory/70 font-mono text-xs">
              <span className="hidden sm:inline-block">06 Chapters / 250+ Weddings</span>
              <span className="h-3 w-px bg-ivory/20 hidden sm:inline-block" />
              <span className="text-[#E5CA92]">Global &amp; Heritage</span>
            </div>
          </div>

          {/* ── Headline and Navigation Controls Row ── */}
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[0.95] tracking-tight text-[#FAF8F3]">
                Every celebration
                <br />
                <em className="font-editorial italic text-[#E5CA92] font-normal">
                  has its own rhythm.
                </em>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/80 font-sans md:text-base font-light">
                From sunlit palace courtyards to quiet midnight vows, each narrative is captured with timeless cinematic devotion.
              </p>
            </div>

            {/* Prev / Next Custom Gold Arrow Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous Stories"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 bg-ivory/10 backdrop-blur-md transition-all duration-300 hover:border-[#E5CA92] hover:bg-[#E5CA92] hover:text-[#27231F] active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next Stories"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 bg-ivory/10 backdrop-blur-md transition-all duration-300 hover:border-[#E5CA92] hover:bg-[#E5CA92] hover:text-[#27231F] active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Editorial Horizontal Showcase ── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="no-bar relative mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 md:gap-6 md:px-10 cursor-grab active:cursor-grabbing"
      >
        {storyCategories.map((item, idx) => (
          <article
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative w-[82vw] shrink-0 snap-start sm:w-[48vw] lg:w-[28vw] xl:w-[24vw] cursor-pointer"
          >
            {/* Card Frame with Luxury Metallic Border & Glow */}
            <div className="relative aspect-[3/4.6] w-full overflow-hidden bg-cinema/80 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-ivory/15 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:border-[#E5CA92] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
              {/* Image with zoom effect */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108 opacity-90 group-hover:opacity-100"
              />

              {/* Multi-layered Cinematic Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema via-cinema/30 to-cinema/60 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cinema/60 via-transparent to-transparent opacity-80" />

              {/* ── Top Header of Card ── */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-ivory">
                <span className="font-mono text-xs font-medium tracking-widest text-[#E5CA92] bg-cinema/70 px-2.5 py-1 rounded-sm border border-[#E5CA92]/30 backdrop-blur-md">
                  NO. {item.no}
                </span>

                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ivory/80 bg-ivory/10 px-3 py-1 rounded-full border border-ivory/20 backdrop-blur-md">
                  {item.icon === "film" ? (
                    <Film className="h-3 w-3 text-[#E5CA92]" />
                  ) : (
                    <Camera className="h-3 w-3 text-[#E5CA92]" />
                  )}
                  {item.medium}
                </span>
              </div>

              {/* ── Bottom Content of Card ── */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="label-xs text-xs font-mono uppercase tracking-[0.2em] text-[#E5CA92]/90 block mb-1">
                  {item.location}
                </span>

                <h3 className="font-display text-2xl md:text-3xl font-light leading-snug text-[#FAF8F3]">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-ivory/70 line-clamp-2 font-sans font-light">
                  {item.tagline}
                </p>

                {/* Animated Interactive Trigger */}
                <div className="mt-5 flex items-center justify-between border-t border-ivory/15 pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ivory/90 group-hover:text-[#E5CA92] transition-colors duration-300">
                    View Gallery &amp; Film
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory/10 border border-ivory/25 text-ivory transition-all duration-300 group-hover:bg-[#E5CA92] group-hover:border-[#E5CA92] group-hover:text-[#27231F] group-hover:scale-110 shadow-md">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Bottom Progress Bar & Direct Portfolio Route ── */}
      <div className="relative mx-auto max-w-[1680px] px-5 md:px-10 mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ivory/15 pt-6">
          {/* Visual Progress Bar */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="font-mono text-[11px] text-ivory/60">01</span>
            <div className="h-1 w-48 sm:w-64 rounded-full bg-ivory/15 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E5CA92] to-[#FAF8F3] transition-all duration-300 rounded-full"
                style={{ width: `${Math.max(16, scrollProgress)}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-ivory/60">06</span>
          </div>

          {/* Quick CTA to Portfolio */}
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E5CA92] hover:text-[#FAF8F3] transition-colors duration-300"
          >
            Explore Complete Archives
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ── Fullscreen Lightbox Modal for any clicked category card ── */}
      <Lightbox
        items={storyCategories}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
