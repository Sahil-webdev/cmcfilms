import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import featured from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import heroImg from "@/assets/hero.jpg";

type GalleryWallItem = LightboxItem & {
  id: string;
  categoryTag: string;
  aspectRatio: string;
};

// Mixed Portrait & Landscape Editorial Gallery Wall (KnotsByAmp Style Mosaic)
const wallItems: GalleryWallItem[] = [
  {
    id: "w1",
    src: featured,
    alt: "Grand wedding ceremony under mandap with flower petal shower",
    title: "Lakeside Mandap & Petal Shower",
    category: "Weddings",
    categoryTag: "Weddings",
    location: "Udaipur, Rajasthan",
    year: "2026",
    aspectRatio: "aspect-[16/9]", // Landscape
  },
  {
    id: "w2",
    src: luxuryEditorial,
    alt: "Royal bride and groom at sunset in palace courtyard",
    title: "Royal Sunset at Udaipur Palace",
    category: "Couples",
    categoryTag: "Couples",
    location: "Udaipur Palace",
    year: "2026",
    aspectRatio: "aspect-[2/3]", // Tall Portrait (Key Reference Item)
  },
  {
    id: "w3",
    src: haldi,
    alt: "Joyful haldi ceremony with yellow marigold petals raining down",
    title: "Vibrant Haldi Petal Shower",
    category: "Ceremonies",
    categoryTag: "Ceremonies",
    location: "Jaipur Heritage",
    year: "2026",
    aspectRatio: "aspect-[4/3]", // Medium Landscape
  },
  {
    id: "w4",
    src: story3,
    alt: "Joyful pheras ritual and family celebration",
    title: "Sacred Pheras & Family Joy",
    category: "Weddings",
    categoryTag: "Weddings",
    location: "Udaipur Fort",
    year: "2026",
    aspectRatio: "aspect-[3/4]", // Portrait
  },
  {
    id: "w5",
    src: cat1,
    alt: "Pre-wedding romantic shoot at coastal resort at dusk",
    title: "Sunset Serenade by the Sea",
    category: "Pre-Wedding",
    categoryTag: "Pre-Wedding",
    location: "Goa Coast",
    year: "2026",
    aspectRatio: "aspect-[16/9]", // Wide Landscape
  },
  {
    id: "w6",
    src: story1,
    alt: "Royal bride in bridal lehenga adjusting her veil",
    title: "The Regal Bridal Portrait",
    category: "Bridal",
    categoryTag: "Bridal",
    location: "Jaipur Palace",
    year: "2026",
    aspectRatio: "aspect-[2/3]", // Tall Portrait
  },
  {
    id: "w7",
    src: coastal,
    alt: "Bride and groom walking on beach at sunset",
    title: "Coastal Sunset Romance",
    category: "Pre-Wedding",
    categoryTag: "Pre-Wedding",
    location: "Goa Beachfront",
    year: "2026",
    aspectRatio: "aspect-[4/3]", // Landscape
  },
  {
    id: "w8",
    src: cat3,
    alt: "Intimate portrait of couple laughing together",
    title: "Monochrome Soulmate Portrait",
    category: "Couples",
    categoryTag: "Couples",
    location: "Studio Archive",
    year: "2026",
    aspectRatio: "aspect-[3/4]", // Portrait
  },
  {
    id: "w9",
    src: story2,
    alt: "Detail of bridal mehndi and ring ritual",
    title: "Intricate Henna Traditions",
    category: "Ceremonies",
    categoryTag: "Ceremonies",
    location: "Jodhpur",
    year: "2026",
    aspectRatio: "aspect-[1/1]", // Square
  },
  {
    id: "w10",
    src: cat2,
    alt: "Couple walking in misty desert dunes at dawn",
    title: "Misty Desert Horizon",
    category: "Pre-Wedding",
    categoryTag: "Pre-Wedding",
    location: "Jaisalmer Thar",
    year: "2026",
    aspectRatio: "aspect-[2/3]", // Tall Portrait
  },
  {
    id: "w11",
    src: heroImg,
    alt: "Bride and groom in courtyard at golden hour",
    title: "Golden Hour Courtyard",
    category: "Couples",
    categoryTag: "Couples",
    location: "Ranthambore",
    year: "2026",
    aspectRatio: "aspect-[16/9]", // Wide Landscape
  },
];

const categoryTabs = ["All Stories", "Weddings", "Bridal", "Pre-Wedding", "Couples", "Ceremonies"];

export function PortfolioEditorial() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === "All Stories"
    ? wallItems
    : wallItems.filter((item) => item.categoryTag === activeTab);

  return (
    <section className="bg-background px-4 py-10 md:px-8 md:py-24 border-b border-espresso/10">
      <div className="mx-auto max-w-[1750px]">
        {/* Clean Header Title */}
        <Reveal className="border-b border-[#261E1E]/15 pb-4 mb-6 md:pb-6 md:mb-8 text-left">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-tight font-light text-[#261E1E]">
            The Visual <em className="font-editorial italic text-[#93191E] font-normal">Editorial Masonry</em>
          </h2>
        </Reveal>

        {/* ── MASONRY COLUMNS GRID (Pure Clean Images, No Hover Effects, Tight Gap) ── */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-1 sm:gap-1.5 md:gap-2 space-y-1 sm:space-y-1.5 md:space-y-2">
          {filtered.map((item, idx) => (
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

        {/* Footer Link */}
        <Reveal className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="label-xs border border-espresso bg-espresso px-9 py-4 text-ivory transition-all duration-300 hover:bg-gold hover:border-gold hover:text-cinema shadow-md flex items-center gap-3"
          >
            <span>Explore Complete Archive Portfolio</span>
            <span>→</span>
          </Link>
        </Reveal>
      </div>

      {/* Full-Screen Dark Lightbox Modal */}
      <Lightbox
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
