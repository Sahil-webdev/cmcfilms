import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Grid3X3, LayoutGrid, ImageIcon, Camera } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import featured from "@/assets/featured.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import heroImg from "@/assets/hero.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";

const title = "Portfolio — Wedding Photography & Cinema by CMC FILMS";
const description =
  "An art-directed selection of luxury Indian weddings, pre-weddings, couple portraits and destination celebrations photographed by CMC FILMS.";

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
  component: Portfolio,
});

const filters = [
  { label: "All Work", value: "All", count: 12 },
  { label: "Weddings", value: "Weddings", count: 4 },
  { label: "Pre-Weddings", value: "Pre-Weddings", count: 2 },
  { label: "Couples", value: "Couples", count: 2 },
  { label: "Destinations", value: "Destinations", count: 2 },
  { label: "Editorial", value: "Editorial", count: 2 },
];

type PortfolioMediaItem = LightboxItem & {
  id: string;
  categoryTag: string;
  city: string;
  colSpan?: string;
};

const fullPortfolio: PortfolioMediaItem[] = [
  {
    id: "p1",
    src: luxuryEditorial,
    alt: "Royal Indian couple at Udaipur Palace at sunset golden hour",
    title: "A Royal Sunset at Udaipur Palace",
    category: "Destinations",
    categoryTag: "Destinations",
    city: "Udaipur",
    location: "City Palace, Udaipur",
    year: "2026",
    colSpan: "md:col-span-2",
  },
  {
    id: "p2",
    src: story1,
    alt: "Bridal portrait in soft window light",
    title: "The Regal Veil",
    category: "Editorial",
    categoryTag: "Editorial",
    city: "Jaipur",
    location: "Jaipur Palace",
    year: "2026",
  },
  {
    id: "p3",
    src: haldi,
    alt: "Joyful haldi ceremony with marigold flowers",
    title: "Vibrant Haldi Celebrations",
    category: "Weddings",
    categoryTag: "Weddings",
    city: "Jaipur",
    location: "Heritage Resort, Jaipur",
    year: "2026",
  },
  {
    id: "p4",
    src: featured,
    alt: "Destination wedding lakeside ceremony at dusk",
    title: "Lakeside Vows at Dusk",
    category: "Weddings",
    categoryTag: "Weddings",
    city: "Udaipur",
    location: "Lake Pichola, Udaipur",
    year: "2026",
  },
  {
    id: "p5",
    src: coastal,
    alt: "Bride and groom walking on beach at sunset",
    title: "Coastal Sunset Romance",
    category: "Pre-Weddings",
    categoryTag: "Pre-Weddings",
    city: "Goa",
    location: "Goa Beachfront",
    year: "2026",
    colSpan: "md:col-span-2",
  },
  {
    id: "p6",
    src: cat3,
    alt: "Intimate black and white couple portrait",
    title: "Monochrome Soulmates",
    category: "Couples",
    categoryTag: "Couples",
    city: "Delhi",
    location: "Studio Archive, Delhi",
    year: "2026",
  },
  {
    id: "p7",
    src: story2,
    alt: "Pre-wedding henna and jewelry detail",
    title: "Intricate Henna Traditions",
    category: "Pre-Weddings",
    categoryTag: "Pre-Weddings",
    city: "Jodhpur",
    location: "Jodhpur Haveli",
    year: "2026",
  },
  {
    id: "p8",
    src: story3,
    alt: "Laughing bride during pheras ritual",
    title: "Pheras of Pure Joy",
    category: "Weddings",
    categoryTag: "Weddings",
    city: "Udaipur",
    location: "Udaipur Fort",
    year: "2026",
  },
  {
    id: "p9",
    src: cat1,
    alt: "Reception dance under fairy lights",
    title: "Coastal Night Sangeet",
    category: "Destinations",
    categoryTag: "Destinations",
    city: "Goa",
    location: "Beach Resort, Goa",
    year: "2026",
    colSpan: "md:col-span-2",
  },
  {
    id: "p10",
    src: cat2,
    alt: "Couple walking through misty desert dunes at dawn",
    title: "Desert Horizon at Dawn",
    category: "Couples",
    categoryTag: "Couples",
    city: "Jaisalmer",
    location: "Thar Desert, Jaisalmer",
    year: "2026",
  },
  {
    id: "p11",
    src: heroImg,
    alt: "Golden hour in Rajasthan palace courtyard",
    title: "Palace Courtyard Dusk",
    category: "Editorial",
    categoryTag: "Editorial",
    city: "Jaipur",
    location: "Amer Fort, Jaipur",
    year: "2026",
  },
  {
    id: "p12",
    src: cat3,
    alt: "Candid laughter at the wedding ceremony",
    title: "Unscripted Laughter",
    category: "Weddings",
    categoryTag: "Weddings",
    city: "Mumbai",
    location: "Taj Hotel, Mumbai",
    year: "2026",
  },
];

const stats = [
  { number: "250+", label: "Weddings Documented" },
  { number: "18+", label: "Global Destinations" },
  { number: "5+", label: "Awards Won" },
  { number: "12+", label: "Years of Craft" },
];

function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [view, setView] = useState<"grid" | "masonry">("masonry");

  const shown = useMemo(
    () =>
      active === "All"
        ? fullPortfolio
        : fullPortfolio.filter((i) => i.categoryTag === active),
    [active]
  );

  return (
    <main className="bg-background min-h-screen">
      {/* ── Cinematic Portfolio Hero Header ── */}
      <section className="grain relative h-[55vh] min-h-[460px] overflow-hidden bg-cinema border-b border-ivory/10">
        <img
          src={luxuryEditorial}
          alt="CMC FILMS portfolio hero"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cinema/80 via-cinema/50 to-cinema/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema/60 via-transparent to-cinema/40" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-16 md:px-14 md:pb-20 max-w-[1700px] mx-auto">
          <div className="flex items-center gap-3">
            <Camera className="w-4 h-4 text-gold" />
            <span className="label-xs text-gold uppercase tracking-widest">Visual Archive</span>
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-light text-ivory">
            The Complete <em className="font-editorial italic text-gold">Portfolio</em>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/75 font-sans">
            An art-directed archive of luxury Indian weddings, destination stories, couple portraits and editorial frames — each captured with quiet cinematic devotion.
          </p>

          {/* Stats Strip */}
          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-ivory/20 pt-6">
            {stats.map((s, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-gold font-light leading-none">{s.number}</span>
                <span className="label-xs text-ivory/60 font-mono text-[10px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Content ── */}
      <div className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1700px]">

          {/* Filter + View Toggle Row */}
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-espresso/15 pb-6 mb-10">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2 md:gap-2.5">
              {filters.map((f) => {
                const isActive = active === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setActive(f.value)}
                    className={`label-xs px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border flex items-center gap-1.5 ${
                      isActive
                        ? "bg-espresso text-ivory border-espresso shadow-lg"
                        : "bg-transparent text-espresso/70 border-espresso/20 hover:border-gold hover:text-espresso"
                    }`}
                  >
                    {f.label}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        isActive ? "bg-gold/30 text-ivory" : "bg-espresso/10 text-taupe"
                      }`}
                    >
                      {f.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center gap-1 bg-espresso/5 border border-espresso/10 rounded-full p-1">
              <button
                type="button"
                onClick={() => setView("masonry")}
                className={`flex items-center gap-1.5 label-xs px-3 py-1.5 rounded-full transition-all ${
                  view === "masonry" ? "bg-espresso text-ivory" : "text-espresso/50 hover:text-espresso"
                }`}
              >
                <LayoutGrid className="w-3 h-3" /> Masonry
              </button>
              <button
                type="button"
                onClick={() => setView("grid")}
                className={`flex items-center gap-1.5 label-xs px-3 py-1.5 rounded-full transition-all ${
                  view === "grid" ? "bg-espresso text-ivory" : "text-espresso/50 hover:text-espresso"
                }`}
              >
                <Grid3X3 className="w-3 h-3" /> Grid
              </button>
            </div>
          </Reveal>

          {/* Count Indicator */}
          <Reveal className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-taupe">
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="label-xs font-mono text-[11px]">
                Showing {shown.length} of {fullPortfolio.length} frames
              </span>
            </div>
            <div className="h-px flex-1 bg-espresso/10 ml-6" />
          </Reveal>

          {/* ── Masonry View (Premium editorial layout) ── */}
          {view === "masonry" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
              {shown.map((item, idx) => (
                <Reveal
                  key={item.id}
                  delay={(idx % 3) * 60}
                  className={`group relative overflow-hidden bg-beige cursor-pointer ${item.colSpan ?? ""}`}
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Full bleed image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-107"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cinema/90 via-cinema/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

                    {/* Category badge top-left always visible */}
                    <div className="absolute top-3 left-3">
                      <span className="label-xs text-ivory bg-cinema/75 border border-ivory/20 px-2.5 py-1 backdrop-blur-md text-[9px] rounded-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover reveal bottom info */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <h3 className="font-display text-xl text-ivory font-light leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-mono text-ivory/70">
                        {item.location} <span className="text-gold mx-1">/</span> {item.year}
                      </p>
                    </div>

                    {/* Expand icon top-right on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ivory/20 border border-ivory/30 backdrop-blur-md text-ivory text-xs">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Caption bar below image */}
                  <div className="flex items-center justify-between px-4 py-3 bg-ivory border-t border-espresso/8 transition-colors group-hover:bg-gold/10">
                    <span className="font-display text-sm text-espresso truncate font-medium">{item.title}</span>
                    <span className="label-xs text-taupe font-mono text-[10px] shrink-0 ml-2">{item.city}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* ── Uniform Grid View ── */}
          {view === "grid" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {shown.map((item, idx) => (
                <Reveal
                  key={item.id}
                  delay={(idx % 4) * 40}
                  className="group relative overflow-hidden bg-beige cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-cinema/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div>
                        <span className="label-xs text-gold text-[9px] uppercase">{item.category}</span>
                        <p className="font-display text-base text-ivory font-light">{item.title}</p>
                        <p className="text-[10px] text-ivory/60 font-mono">{item.city}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* ── Bottom Section ── */}
          <div className="mt-24 grid md:grid-cols-2 gap-10 border-t border-espresso/15 pt-16">
            {/* Enquiry CTA */}
            <Reveal className="bg-cinema text-ivory p-10 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
              <img
                src={featured}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-cinema/70" />
              <div className="relative">
                <span className="label-xs text-gold uppercase tracking-widest">Reserve Your Date</span>
                <h2 className="mt-4 font-display text-4xl font-light leading-tight">
                  Your Story Deserves <em className="font-editorial italic text-gold">The Best.</em>
                </h2>
                <p className="mt-3 text-sm text-ivory/70 font-sans max-w-sm">
                  Limited commissions available per season. Reach out to check your date's availability.
                </p>
              </div>
              <Link
                to="/contact"
                className="relative mt-8 self-start label-xs border border-gold text-gold px-8 py-4 flex items-center gap-3 hover:bg-gold hover:text-cinema transition-all duration-300 group"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            {/* More Stories tagline */}
            <Reveal className="flex flex-col justify-center gap-6 p-10 bg-ivory border border-espresso/10">
              <span className="label-xs text-gold uppercase tracking-widest">Always Growing</span>
              <p className="font-display text-3xl text-espresso font-light leading-snug">
                New stories are added at the close of every wedding season.
              </p>
              <p className="text-sm text-taupe font-sans leading-relaxed max-w-sm">
                Each frame in this archive was chosen with editorial care — not for perfection, but for truth.
              </p>
              <Link
                to="/about"
                className="self-start label-xs link-underline text-espresso hover:text-gold transition-colors"
              >
                Our Studio Philosophy →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={shown}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </main>
  );
}
