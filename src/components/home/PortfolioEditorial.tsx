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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[3/4]",
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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "w8",
    src: cat3,
    alt: "Black and white intimate portrait of couple",
    title: "Monochrome Soulmate Portrait",
    category: "Couples",
    categoryTag: "Couples",
    location: "Studio Archive",
    year: "2026",
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
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
    aspectRatio: "aspect-[4/3]",
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
      <div className="mx-auto max-w-[1700px]">
        {/* Header Title & Filter Pills */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 border-b border-espresso/15 pb-4 mb-5 md:pb-8 md:mb-8">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-tight font-light text-espresso">
              The Visual <em className="font-editorial italic text-gold">Gallery Wall</em>
            </h2>
            <p className="mt-2 text-xs text-taupe font-sans">
              Click any photo to enlarge and view in high-resolution full-screen mode.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`label-xs px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-espresso text-ivory border-espresso shadow-md"
                      : "bg-transparent text-espresso/70 border-espresso/20 hover:border-espresso hover:text-espresso"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* 4-Column Dense Photo Wall Grid (Exact KnotsByAmp Tight Edge-to-Edge Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {filtered.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={(idx % 4) * 50}
              className="group relative overflow-hidden bg-beige cursor-pointer border border-espresso/10 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div
                onClick={() => setLightboxIndex(idx)}
                className={`relative w-full ${item.aspectRatio} overflow-hidden`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Subtle Hover Dark Overlay */}
                <div className="absolute inset-0 bg-cinema/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="self-end">
                    <span className="label-xs text-ivory bg-cinema/75 border border-ivory/20 px-3 py-1 rounded-full backdrop-blur-md text-[10px]">
                      Click to Enlarge 🔍
                    </span>
                  </div>
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="label-xs text-gold uppercase text-[9px] tracking-widest">{item.category}</span>
                    <h3 className="font-display text-lg text-ivory font-light leading-snug">{item.title}</h3>
                    <p className="text-[11px] font-mono text-ivory/70 mt-0.5">{item.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
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
