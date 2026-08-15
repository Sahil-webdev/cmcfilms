import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, MapPin, Heart } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story2 from "@/assets/story-2.jpg";
import coastal from "@/assets/coastal.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import heroImg from "@/assets/hero.jpg";

const title = "Couple Shoots & Pre-Weddings — CMC FILMS";
const description =
  "Fine-art couple portraiture, pre-wedding stories, and intimate love diaries photographed by CMC FILMS in Udaipur, Jaipur, Goa & international destinations.";

export const Route = createFileRoute("/couples")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/couples" },
    ],
    links: [{ rel: "canonical", href: "/couples" }],
  }),
  component: CoupleShootPage,
});

type CoupleMediaItem = LightboxItem & {
  id: string;
  categoryTag: string;
  city: string;
  aspectRatio: string;
};

const couplePortfolio: CoupleMediaItem[] = [
  {
    id: "c1",
    src: luxuryEditorial,
    alt: "Royal couple sunset at Udaipur Palace",
    title: "Royal Palace Dusk Sunset",
    category: "Palace Pre-Wedding",
    categoryTag: "Pre-Wedding",
    city: "Udaipur",
    location: "City Palace, Udaipur",
    year: "2026",
    aspectRatio: "aspect-[2/3]", // Tall Portrait
  },
  {
    id: "c2",
    src: coastal,
    alt: "Bride and groom walking on beach at sunset",
    title: "Coastal Sunset Romance",
    category: "Beach Story",
    categoryTag: "Pre-Wedding",
    city: "Goa",
    location: "Goa Beachfront",
    year: "2026",
    aspectRatio: "aspect-[16/9]", // Landscape
  },
  {
    id: "c3",
    src: cat3,
    alt: "Intimate black and white couple portrait",
    title: "Monochrome Soulmates",
    category: "Fine-Art Portrait",
    categoryTag: "Portraits",
    city: "Delhi",
    location: "Studio Archive, Delhi",
    year: "2026",
    aspectRatio: "aspect-[3/4]", // Portrait
  },
  {
    id: "c4",
    src: cat2,
    alt: "Couple walking in misty desert dunes at dawn",
    title: "Misty Thar Desert Horizon",
    category: "Desert Shoot",
    categoryTag: "Pre-Wedding",
    city: "Jaisalmer",
    location: "Thar Desert, Jaisalmer",
    year: "2026",
    aspectRatio: "aspect-[2/3]", // Tall Portrait
  },
  {
    id: "c5",
    src: story2,
    alt: "Couple sharing quiet moment before ritual",
    title: "Intimate Sunset Embrace",
    category: "Quiet Moments",
    categoryTag: "Portraits",
    city: "Jodhpur",
    location: "Mehrangarh Haveli",
    year: "2026",
    aspectRatio: "aspect-[1/1]", // Square
  },
  {
    id: "c6",
    src: heroImg,
    alt: "Bride and groom in courtyard at golden hour",
    title: "Golden Hour Fort Promenade",
    category: "Sunset Stories",
    categoryTag: "Pre-Wedding",
    city: "Ranthambore",
    location: "Ranthambore Fort",
    year: "2026",
    aspectRatio: "aspect-[16/9]", // Landscape
  },
];

const filters = ["All Shoots", "Pre-Wedding", "Portraits"];

function CoupleShootPage() {
  const [activeFilter, setActiveFilter] = useState("All Shoots");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "All Shoots"
    ? couplePortfolio
    : couplePortfolio.filter((item) => item.categoryTag === activeFilter);

  return (
    <div className="bg-[#FAF8F5] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* ── Page Header ── */}
      <section className="px-5 md:px-10 border-b border-espresso/15 pb-12 mb-12">
        <div className="mx-auto max-w-[1600px] text-center max-w-4xl">
          <Reveal>
            <SectionLabel>Intimate Portraiture</SectionLabel>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] font-light text-espresso">
              Couple Stories &amp;{" "}
              <em className="font-editorial italic text-gold">Pre-Wedding Shoots</em>
            </h1>
            <p className="mt-6 text-sm md:text-base text-taupe font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Unforced, quiet, fine-art couple portraits photographed in Udaipur palaces, Goa coasts, desert dunes and heritage havelis.
            </p>
          </Reveal>

          {/* Category Filter Pills */}
          <Reveal className="mt-8 flex flex-wrap justify-center gap-2.5">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  className={`label-xs px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-espresso text-ivory border-espresso shadow-md"
                      : "bg-transparent text-espresso/70 border-espresso/20 hover:border-gold hover:text-espresso"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Couple Shoot Editorial Gallery Grid ── */}
      <section className="px-4 md:px-10">
        <div className="mx-auto max-w-[1700px]">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1.5 md:gap-2 space-y-1.5 md:space-y-2">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="break-inside-avoid relative overflow-hidden bg-beige cursor-pointer mb-1.5 md:mb-2 shadow-none"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Your Couple Shoot Banner ── */}
      <section className="mt-20 px-5 md:px-10">
        <div className="mx-auto max-w-[1400px] rounded-3xl bg-[#0C0D10] text-[#FAF8F3] p-8 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="label-xs text-gold uppercase tracking-widest font-mono">
              Planning Your Couple Session?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
              Let's Plan Your <em className="font-editorial italic text-gold">Pre-Wedding Story</em>
            </h2>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              Whether on a sunlit beach in Goa or in Rajasthan fort courtyards, we create timeless visual memories of your love story.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-white text-cinema font-medium text-sm transition-all duration-300 shadow-lg active:scale-95"
              >
                <span>Book A Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
