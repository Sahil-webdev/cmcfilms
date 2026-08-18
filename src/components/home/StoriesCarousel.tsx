import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";

type StoryCategory = LightboxItem & {
  id: string;
  no: string;
  name: string;
  location: string;
};

const storyCategories: StoryCategory[] = [
  {
    id: "sc-1",
    no: "01",
    name: "Royal Destination Weddings",
    location: "Udaipur & Jaipur",
    src: luxuryEditorial,
    alt: "Royal destination wedding ceremony at golden hour",
    title: "Royal Destination Weddings",
    category: "Destinations",
    year: "2026",
  },
  {
    id: "sc-2",
    no: "02",
    name: "Sacred Pheras & Rituals",
    location: "Heritage Palaces",
    src: haldi,
    alt: "Joyful haldi ceremony with flower shower",
    title: "Sacred Pheras & Rituals",
    category: "Weddings",
    year: "2026",
  },
  {
    id: "sc-3",
    no: "03",
    name: "Intimate Pre-Weddings",
    location: "Goa & Jaisalmer",
    src: coastal,
    alt: "Couple walking on beach at sunset",
    title: "Intimate Pre-Weddings",
    category: "Pre-Weddings",
    year: "2026",
  },
  {
    id: "sc-4",
    no: "04",
    name: "Bridal Couture & Portraits",
    location: "Amer Fort Studio",
    src: story1,
    alt: "Bridal portrait in soft natural lighting",
    title: "Bridal Couture & Portraits",
    category: "Editorial",
    year: "2026",
  },
  {
    id: "sc-5",
    no: "05",
    name: "Grand Sangeet & Celebrations",
    location: "Goa Beachfront",
    src: cat1,
    alt: "Celebration dancing under fairy lights",
    title: "Grand Sangeet & Celebrations",
    category: "Celebrations",
    year: "2026",
  },
  {
    id: "sc-6",
    no: "06",
    name: "Monochrome Soulmates",
    location: "Archive Studio",
    src: cat3,
    alt: "Intimate monochrome couple portrait",
    title: "Monochrome Soulmates",
    category: "Couples",
    year: "2026",
  },
];

export function StoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = scrollRef.current.clientWidth * 0.65;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="grain relative bg-[#F3F0E6] py-14 text-[#261E1E] md:py-20 overflow-hidden border-y border-[#8E171E]/15">
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          {/* ── Compact Header Row with Controls ── */}
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8E171E]" />
                <span className="label-xs uppercase tracking-[0.25em] text-[#8E171E] font-mono text-[10px] font-bold">
                  Stories We Tell
                </span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1] text-[#261E1E]">
                Every celebration{" "}
                <em className="font-editorial italic text-[#8E171E] font-normal">
                  has its own rhythm.
                </em>
              </h2>
            </div>

            {/* Compact Prev / Next Arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous Stories"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#8E171E]/30 bg-white/60 text-[#8E171E] backdrop-blur-md transition-all duration-300 hover:border-[#8E171E] hover:bg-[#8E171E] hover:text-white active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next Stories"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#8E171E]/30 bg-white/60 text-[#8E171E] backdrop-blur-md transition-all duration-300 hover:border-[#8E171E] hover:bg-[#8E171E] hover:text-white active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* ── Compact Attractive Photo Carousel ── */}
        <div
          ref={scrollRef}
          className="no-bar relative mt-8 flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2 md:gap-5 cursor-grab active:cursor-grabbing"
        >
          {storyCategories.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-[23vw] cursor-pointer"
            >
              {/* Sleek aspect ratio card */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm bg-cinema/80 shadow-lg border border-ivory/15 transition-all duration-500 group-hover:border-[#E5CA92]/80 group-hover:shadow-2xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                />

                {/* Cinematic Vignette Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/90 via-cinema/20 to-transparent transition-opacity duration-300" />

                {/* Number Badge Top Left */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="font-mono text-[10px] tracking-wider text-[#E5CA92] bg-cinema/70 px-2 py-0.5 rounded-xs border border-[#E5CA92]/30 backdrop-blur-sm">
                    {item.no}
                  </span>
                </div>

                {/* Arrow Icon Top Right on Hover */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5CA92] text-[#27231F] shadow-md">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Clean Bottom Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 text-ivory">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#E5CA92]/90">
                    {item.location}
                  </p>
                  <h3 className="mt-0.5 font-display text-base sm:text-lg font-light leading-snug text-[#FAF8F3] truncate">
                    {item.name}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal on Click */}
      <Lightbox
        items={storyCategories}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
