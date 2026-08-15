import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Play, X, ArrowRight, ArrowDown, Film, Volume2, VolumeX, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
import hero from "@/assets/featured.jpg";
import f1 from "@/assets/cat-1.jpg";
import f2 from "@/assets/cat-2.jpg";
import f3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import haldi from "@/assets/haldi.jpg";
import coastal from "@/assets/coastal.jpg";
import maternity from "@/assets/maternity.jpg";

const title = "Wedding Films — Cinematic Stories by CMC FILMS";
const description =
  "Every wedding deserves its own film. Explore cinematic wedding films, teasers and destination stories by CMC FILMS.";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "video.other" },
      { property: "og:url", content: "/films" },
    ],
    links: [{ rel: "canonical", href: "/films" }],
  }),
  component: WeddingFilmsPage,
});

export interface FilmItem {
  id: string;
  code: string;
  couple: string;
  filmTitle: string;
  location: string;
  style: string;
  category: string;
  year: string;
  duration: string;
  logline: string;
  coverImage: string;
  videoUrl: string;
  aspect?: "tall" | "wide";
  isFeatured?: boolean;
  isSignature?: boolean;
  isMostLoved?: boolean;
}

const filmsList: FilmItem[] = [
  {
    id: "film-01",
    code: "001",
    couple: "Aarav & Meera",
    filmTitle: "The Night Jaipur Became Theirs",
    location: "Jaipur, Rajasthan",
    style: "Royal Wedding",
    category: "Royal",
    year: "2026",
    duration: "12:45",
    logline: "An ancestral Amer haveli, sacred Vedic pheras at dusk, and a midnight courtyard celebration under Rajasthani stars.",
    coverImage: luxuryEditorial,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    aspect: "wide",
    isFeatured: true,
  },
  {
    id: "film-02",
    code: "002",
    couple: "Rhea & Kabir",
    filmTitle: "Lake Pichola Symphony",
    location: "Udaipur, Rajasthan",
    style: "Palace Wedding",
    category: "Royal",
    year: "2026",
    duration: "09:30",
    logline: "Ten years of shared city train rides culminated on a floating lake island surrounded by oil lamps and sitar melodies.",
    coverImage: hero,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    aspect: "tall",
    isMostLoved: true,
  },
  {
    id: "film-03",
    code: "003",
    couple: "Aneesh & Maitri",
    filmTitle: "Where Sea Whispers Promises",
    location: "Goa Beachfront",
    style: "Destination Wedding",
    category: "Destination",
    year: "2026",
    duration: "08:15",
    logline: "Barefoot sunset vows on sandy shores where the Arabian ocean breeze met golden hour promises.",
    coverImage: coastal,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    aspect: "wide",
    isMostLoved: true,
  },
  {
    id: "film-04",
    code: "004",
    couple: "Saba & Usman",
    filmTitle: "Dunes & Desert Silk",
    location: "Dubai, UAE",
    style: "International Nikah",
    category: "International",
    year: "2025",
    duration: "11:20",
    logline: "Three days in Dubai connecting families from London, Dubai, and Mumbai under golden Arabian desert dunes.",
    coverImage: f1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    aspect: "tall",
  },
  {
    id: "film-05",
    code: "005",
    couple: "Dhruv & Pippa",
    title: "Marigold Rain at Oleander Farms",
    filmTitle: "Marigold Rain at Oleander Farms",
    location: "Karjat, Maharashtra",
    style: "Intimate Farm Vows",
    category: "Intimate",
    year: "2026",
    duration: "07:40",
    logline: "Eighty close guests, marigold petal showers, and unhurried family dinners under starry Karjat hills.",
    coverImage: haldi,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    aspect: "wide",
    isMostLoved: true,
  },
  {
    id: "film-06",
    code: "006",
    couple: "Ishita & Arjun",
    filmTitle: "Three Days. Two Families. One Story.",
    location: "Jaisalmer, Rajasthan",
    style: "Signature Heritage",
    category: "Traditional",
    year: "2025",
    duration: "14:10",
    logline: "A golden fortress celebration where ancient desert folk music accompanied quiet, unscripted glances.",
    coverImage: f2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    aspect: "wide",
    isSignature: true,
  },
  {
    id: "film-07",
    code: "007",
    couple: "Devendra & Saira",
    filmTitle: "The Manganiyar Serenade",
    location: "Jodhpur, Rajasthan",
    style: "Cultural Heritage",
    category: "Cultural",
    year: "2025",
    duration: "08:50",
    logline: "Folk musicians led the royal procession through 500-year-old fort courtyards in blue city twilight.",
    coverImage: f3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    aspect: "tall",
  },
  {
    id: "film-08",
    code: "008",
    couple: "Ria & Kunal",
    filmTitle: "The Imperial Lawns",
    location: "Delhi, India",
    style: "Traditional Wedding",
    category: "Traditional",
    year: "2025",
    duration: "10:05",
    logline: "Grand imperial gardens in New Delhi filled with candlelit banquets and joyful ancestral dancing.",
    coverImage: story2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback2013.mp4",
    aspect: "wide",
  },
];

const categoryList = [
  "All Films",
  "Traditional",
  "Destination",
  "Royal",
  "Intimate",
  "Cultural",
  "International",
];

const destinationDataMap: Record<
  string,
  { count: string; image: string; tag: string }
> = {
  JAIPUR: { count: "12 Wedding Films", image: luxuryEditorial, tag: "Royal Heritage" },
  UDAIPUR: { count: "09 Wedding Films", image: hero, tag: "Lakefront Palaces" },
  JAISALMER: { count: "06 Wedding Films", image: f2, tag: "Desert Forts" },
  GOA: { count: "14 Wedding Films", image: coastal, tag: "Coastal Ocean Vows" },
  DUBAI: { count: "08 Wedding Films", image: f1, tag: "Desert Dunes & Skylines" },
  BALI: { count: "05 Wedding Films", image: haldi, tag: "Tropical Sanctuaries" },
};

export function WeddingFilmsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Films");
  const [hoveredCity, setHoveredCity] = useState("JAIPUR");
  const [activeFilmModal, setActiveFilmModal] = useState<FilmItem | null>(null);
  const [hoveredArchiveIndex, setHoveredArchiveIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filteredFilms = useMemo(() => {
    if (selectedCategory === "All Films") return filmsList;
    return filmsList.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  const featuredFilm = useMemo(() => {
    return filmsList.find((f) => f.isFeatured) || filmsList[0];
  }, []);

  const signatureFilm = useMemo(() => {
    return filmsList.find((f) => f.isSignature) || filmsList[5];
  }, []);

  const mostLovedFilms = useMemo(() => {
    return filmsList.filter((f) => f.isMostLoved || f.isFeatured).slice(0, 3);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-[#11110F] text-[#F3EFE7] font-sans selection:bg-[#C5A880]/30 min-h-screen relative"
    >
      {/* ── 1. CINEMATIC HERO SECTION ── */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col justify-between p-6 md:p-14 border-b border-white/10">
        {/* Muted Looping Film Background Still with Soft Dark Overlay */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={hero}
            alt="CMC Wedding Film Hero Frame"
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-[12000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/60 to-[#11110F]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11110F]/90 via-[#11110F]/40 to-transparent" />
        </div>

        {/* Top Branding Label */}
        <div className="relative z-10 pt-16 md:pt-8 flex justify-between items-center">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A880]"></span>
            </span>
            <span>CMC FILMS PRESENTS</span>
          </div>
          <span className="text-xs font-mono text-[#F3EFE7]/40 hidden sm:block">
            CINEMATIC ARCHIVE
          </span>
        </div>

        {/* Minimal Hero Content Toward Lower Left */}
        <div className="relative z-10 my-auto max-w-4xl space-y-6">
          <Reveal>
            <h1 className="font-display text-[clamp(4rem,11.5vw,9.5rem)] leading-[0.85] font-light text-[#F3EFE7] tracking-tight select-none">
              Wedding <br />
              <em className="font-editorial italic text-[#C5A880] font-normal">
                Films
              </em>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#F3EFE7]/80 font-sans font-light leading-relaxed max-w-sm pt-2 italic font-editorial">
              “Stories that moved us, captured the way they felt.”
            </p>
          </Reveal>
        </div>

        {/* Sub-Indicator */}
        <div className="relative z-10 flex justify-between items-end text-xs font-mono text-[#F3EFE7]/50 border-t border-white/10 pt-4">
          <span>EVERY WEDDING DESERVES ITS OWN FILM</span>
          <span className="flex items-center gap-2 text-[#C5A880]">
            WATCH OUR FILMS <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </span>
        </div>
      </section>

      {/* ── 2. INTRODUCTION SECTION (Transition to Warm Ivory #F3EFE7) ── */}
      <section className="bg-[#F3EFE7] text-[#11110F] py-24 md:py-36 px-6 md:px-14 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <Reveal className="md:col-span-6 space-y-4">
            <span className="label-xs text-[#C5A880] uppercase tracking-[0.25em] font-mono">
              OUR FILMS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[#11110F]">
              “We don't simply record weddings. <br />
              <em className="font-editorial italic text-[#A67B2E]">We remember them through film.</em>”
            </h2>
          </Reveal>

          {/* Right Column: Paragraph + Small Film Accent Frame */}
          <Reveal delay={150} className="md:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-[#11110F]/80 font-sans font-light leading-relaxed">
              Every wedding film we craft is built around the people, personalities, families, atmosphere and silent unspoken moments of the day. No stiff poses. No generic movie trailers. Just true human connection cut with quiet precision and true emotional color tones.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-20 aspect-[4/3] rounded-lg overflow-hidden shadow-md border border-black/10">
                <img src={f3} alt="Film accent" className="h-full w-full object-cover" />
              </div>
              <span className="text-xs font-mono text-[#11110F]/60">
                CINEMATOGRAPHY &amp; SOUND DESIGN BY CMC FILMS
              </span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── 3. FEATURED FILM SECTION ── */}
      <section className="bg-[#11110F] py-24 md:py-36 px-4 md:px-10 border-b border-white/10">
        <div className="max-w-[1700px] mx-auto space-y-6">
          
          <div className="flex items-center justify-between px-2">
            <span className="label-xs text-[#C5A880] font-mono tracking-widest uppercase">
              FEATURED FILM
            </span>
            <span className="text-xs font-mono text-[#F3EFE7]/50">
              {featuredFilm.duration} · {featuredFilm.style}
            </span>
          </div>

          {/* Huge Cinematic Landscape Image (85-90% Viewport Width) */}
          <div
            onClick={() => setActiveFilmModal(featuredFilm)}
            className="relative mx-auto w-full md:w-[92%] aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl cursor-pointer group bg-[#11110F] shadow-2xl border border-white/10"
          >
            <img
              src={featuredFilm.coverImage}
              alt={featuredFilm.couple}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/90 via-[#11110F]/20 to-transparent" />

            {/* Hover Circular Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-20 w-20 rounded-full bg-[#C5A880]/90 text-[#11110F] flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-white">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h3 className="font-display text-4xl sm:text-6xl font-light text-[#F3EFE7]">
                  {featuredFilm.couple}
                </h3>
                <p className="font-editorial text-xl italic text-[#C5A880]">
                  "{featuredFilm.filmTitle}"
                </p>
                <p className="text-xs font-mono text-[#F3EFE7]/70">
                  {featuredFilm.location} · {featuredFilm.style}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveFilmModal(featuredFilm)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C5A880] text-[#11110F] font-mono text-xs font-semibold hover:bg-white transition-all shadow-lg active:scale-95 w-fit"
              >
                <span>WATCH FILM</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. LATEST WEDDING FILMS (Asymmetrical 2-Column Layout) ── */}
      <section className="py-24 md:py-36 px-6 md:px-14 border-b border-white/10 max-w-[1700px] mx-auto space-y-16">
        
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
              COLLECTION
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-light text-[#F3EFE7]">
              Latest <em className="font-editorial italic text-[#C5A880]">Films</em>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#F3EFE7]/50">
            {filmsList.length} SELECTED CINEMATIC RELEASES
          </p>
        </Reveal>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {filmsList.slice(1, 5).map((film, idx) => {
            const isTall = idx % 2 === 0;

            return (
              <div
                key={film.id}
                onClick={() => setActiveFilmModal(film)}
                className="group space-y-5 cursor-pointer"
              >
                {/* Film Thumbnail */}
                <div
                  className={`relative w-full overflow-hidden rounded-2xl bg-[#11110F] border border-white/10 shadow-md ${
                    isTall ? "aspect-[3/4]" : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={film.coverImage}
                    alt={film.couple}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-16 w-16 rounded-full bg-[#C5A880] text-[#11110F] flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  <span className="absolute top-4 left-4 text-xs font-mono text-[#C5A880] bg-black/60 px-3 py-1 rounded-full">
                    {film.code}
                  </span>
                </div>

                {/* Minimal Metadata */}
                <div className="space-y-1 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-display text-3xl font-light text-[#F3EFE7] group-hover:text-[#C5A880] transition-colors">
                    {film.couple}
                  </h3>
                  <p className="font-editorial text-base italic text-[#F3EFE7]/70">
                    "{film.filmTitle}"
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono text-[#F3EFE7]/50">
                      {film.location} · {film.style}
                    </span>
                    <span className="text-xs font-mono text-[#C5A880] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>WATCH FILM</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ── 5. FILM CATEGORIES FILTER SYSTEM ── */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/10 max-w-[1700px] mx-auto space-y-12">
        
        <div className="space-y-2">
          <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
            DISCOVERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-[#F3EFE7]">
            Find A <em className="font-editorial italic text-[#C5A880]">Story</em>
          </h2>
        </div>

        {/* Minimal Text Navigation Categories */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 border-b border-white/10 pb-4">
          {categoryList.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative pb-2 font-display text-lg sm:text-xl font-light transition-colors cursor-pointer ${
                  isSelected ? "text-[#C5A880]" : "text-[#F3EFE7]/60 hover:text-[#F3EFE7]"
                }`}
              >
                <span>{cat}</span>
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] animate-in fade-in duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Filtered Films Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilmModal(film)}
              className="group bg-[#171714] p-5 rounded-2xl border border-white/10 cursor-pointer hover:border-[#C5A880]/50 transition-all duration-300 space-y-4"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black relative">
                <img
                  src={film.coverImage}
                  alt={film.couple}
                  className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Play className="w-10 h-10 text-[#C5A880] fill-current opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white bg-black/70 px-2 py-0.5 rounded">
                  {film.duration}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-2xl font-light text-[#F3EFE7] group-hover:text-[#C5A880] transition-colors">
                  {film.couple}
                </h3>
                <p className="text-xs text-[#F3EFE7]/60 font-mono">
                  {film.location} · {film.style}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── 6. SIGNATURE FILM SECTION (Dark Visual Break) ── */}
      <section className="relative py-28 md:py-40 bg-[#0C0D10] text-[#F3EFE7] border-b border-white/10 overflow-hidden">
        <img
          src={signatureFilm.coverImage}
          alt={signatureFilm.couple}
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/50 to-[#0C0D10]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-6">
          <span className="label-xs text-[#C5A880] font-mono uppercase tracking-[0.3em]">
            A CMC SIGNATURE FILM
          </span>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-light leading-none">
            {signatureFilm.couple}
          </h2>

          <p className="font-editorial text-xl sm:text-2xl italic text-[#C5A880] max-w-xl mx-auto">
            "{signatureFilm.logline}"
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => setActiveFilmModal(signatureFilm)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#11110F] font-mono text-xs font-semibold hover:bg-white transition-all shadow-xl active:scale-95"
            >
              <span>WATCH THEIR FILM</span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 7. WEDDINGS ACROSS PLACES (DESTINATION SPLIT VIEW) ── */}
      <section className="py-24 md:py-36 px-6 md:px-14 bg-[#F3EFE7] text-[#11110F] border-b border-black/10">
        <div className="max-w-[1700px] mx-auto space-y-12">
          
          <div className="space-y-2">
            <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
              DESTINATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#11110F]">
              Stories From <em className="font-editorial italic text-[#A67B2E]">Everywhere</em>
            </h2>
            <p className="text-xs font-mono text-[#11110F]/60">
              “Different places. Different people. Different stories.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-black/10 shadow-sm">
            {/* Left Column: Changing Image Visual */}
            <div className="md:col-span-7 aspect-[16/10] overflow-hidden rounded-2xl bg-black relative shadow-lg">
              <img
                src={destinationDataMap[hoveredCity]?.image || luxuryEditorial}
                alt={hoveredCity}
                className="h-full w-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-mono text-[#C5A880]">
                  {destinationDataMap[hoveredCity]?.tag}
                </span>
                <h3 className="font-display text-4xl font-light">{hoveredCity}</h3>
                <p className="text-xs font-mono text-white/80 mt-1">
                  {destinationDataMap[hoveredCity]?.count}
                </p>
              </div>
            </div>

            {/* Right Column: Vertically Stacked City Names */}
            <div className="md:col-span-5 space-y-3">
              {Object.keys(destinationDataMap).map((city) => {
                const isSelected = hoveredCity === city;
                return (
                  <div
                    key={city}
                    onMouseEnter={() => setHoveredCity(city)}
                    onClick={() => setHoveredCity(city)}
                    className={`group py-3 px-5 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                      isSelected
                        ? "bg-[#11110F] text-[#F3EFE7] border-[#11110F] shadow-md"
                        : "bg-[#FAF8F5] text-[#11110F]/70 border-black/5 hover:border-[#A67B2E]"
                    }`}
                  >
                    <span className="font-display text-2xl tracking-wide font-light">
                      {city}
                    </span>
                    <span className={`text-xs font-mono ${isSelected ? "text-[#C5A880]" : "opacity-0 group-hover:opacity-100"}`}>
                      View Films →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── 8. FILM STRIP INTERACTION (Cinema Contact Sheet) ── */}
      <section className="py-24 md:py-36 px-6 md:px-14 border-b border-white/10 max-w-[1700px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
              EDITOR'S CONTACT SHEET
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-[#F3EFE7]">
              Film Strip <em className="font-editorial italic text-[#C5A880]">Reels</em>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#F3EFE7]/50">
            DRAG OR SCROLL TO EXPLORE FRAMES
          </p>
        </div>

        {/* Scrollable Film Strip */}
        <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-none snap-x snap-mandatory">
          {filmsList.map((film, idx) => (
            <div
              key={film.id}
              onClick={() => setActiveFilmModal(film)}
              className="w-[260px] sm:w-[300px] shrink-0 snap-start bg-[#171714] p-4 rounded-xl border border-white/10 cursor-pointer group hover:border-[#C5A880] transition-all"
            >
              {/* Film Perforation Header */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#C5A880] mb-3 pb-2 border-b border-white/10">
                <span>FRAME {film.code}</span>
                <span>35MM 4K</span>
              </div>

              {/* Image Frame */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-black mb-3">
                <img
                  src={film.coverImage}
                  alt={film.couple}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h4 className="font-display text-xl font-light text-[#F3EFE7] group-hover:text-[#C5A880] transition-colors">
                {film.couple}
              </h4>
              <p className="text-xs font-mono text-[#F3EFE7]/50">{film.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. MOST LOVED FILMS (Horizontal Carousel) ── */}
      <section className="py-24 md:py-36 px-6 md:px-14 border-b border-white/10 max-w-[1700px] mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
            SELECTION
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#F3EFE7]">
            Most <em className="font-editorial italic text-[#C5A880]">Loved</em>
          </h2>
        </div>

        {/* 3-Film Horizontal Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {mostLovedFilms.map((film, idx) => {
            const isCenter = idx === 1;

            return (
              <div
                key={film.id}
                onClick={() => setActiveFilmModal(film)}
                className={`group bg-[#171714] p-5 rounded-2xl border border-white/10 cursor-pointer transition-all duration-500 hover:border-[#C5A880] ${
                  isCenter ? "md:-translate-y-4 md:shadow-2xl md:border-[#C5A880]/60" : "opacity-90"
                }`}
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black relative mb-4">
                  <img
                    src={film.coverImage}
                    alt={film.couple}
                    className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Play className="w-12 h-12 text-[#C5A880] fill-current group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-light text-[#F3EFE7] group-hover:text-[#C5A880] transition-colors">
                    {film.couple}
                  </h3>
                  <p className="text-xs font-mono text-[#F3EFE7]/50">
                    {film.location} · {film.style}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 10. THE FILMMAKING PHILOSOPHY ── */}
      <section className="py-24 md:py-36 px-6 md:px-14 bg-[#F3EFE7] text-[#11110F] border-b border-black/10">
        <div className="max-w-[1500px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
              PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light leading-tight">
              “We Look For What Happens <br />
              <em className="font-editorial italic text-[#A67B2E]">Between The Big Moments.</em>”
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3 bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
              <span className="text-xs font-mono text-[#A67B2E] font-bold">01 / REAL MOMENTS</span>
              <h3 className="font-display text-2xl font-light">Unplanned Emotion</h3>
              <p className="text-xs sm:text-sm text-[#11110F]/70 font-sans font-light leading-relaxed">
                The laughter, nervousness, chaos, and quiet tears that cannot be scripted or posed.
              </p>
            </div>

            <div className="space-y-3 bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
              <span className="text-xs font-mono text-[#A67B2E] font-bold">02 / STORY FIRST</span>
              <h3 className="font-display text-2xl font-light">Personal Rhythm</h3>
              <p className="text-xs sm:text-sm text-[#11110F]/70 font-sans font-light leading-relaxed">
                Every wedding has a distinct pulse and pace. Every film is cut specifically around the couple's true personality.
              </p>
            </div>

            <div className="space-y-3 bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
              <span className="text-xs font-mono text-[#A67B2E] font-bold">03 / CRAFTED BY HAND</span>
              <h3 className="font-display text-2xl font-light">Artisanal Cut</h3>
              <p className="text-xs sm:text-sm text-[#11110F]/70 font-sans font-light leading-relaxed">
                Music scores, color grading, sound design and pacing are hand-crafted frame by frame.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 11. CINEMATIC QUOTE BREAK ── */}
      <section className="py-32 md:py-44 px-6 bg-[#0C0D10] text-[#F3EFE7] text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-display text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
            “The best wedding films don't remind you how the day looked. <br />
            <em className="font-editorial italic text-[#C5A880]">They remind you how it felt.</em>”
          </p>
        </div>
      </section>

      {/* ── 12. THE FILM ARCHIVE (INDEX LIST WITH HOVER FLOATING PHOTO) ── */}
      <section className="py-24 md:py-36 px-6 md:px-14 border-b border-white/10 max-w-[1600px] mx-auto space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="label-xs text-[#C5A880] font-mono uppercase tracking-widest">
              INDEX
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-[#F3EFE7]">
              The Film <em className="font-editorial italic text-[#C5A880]">Archive</em>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#F3EFE7]/50">
            ALL REGISTERED RELEASES
          </p>
        </div>

        {/* Floating Cover Photo Following Mouse Cursor */}
        {hoveredArchiveIndex !== null && (
          <div
            className="fixed pointer-events-none z-50 w-56 aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 transition-opacity duration-300 hidden md:block"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y - 60}px`,
            }}
          >
            <img
              src={filmsList[hoveredArchiveIndex].coverImage}
              alt="Archive preview"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Clean Row List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {filmsList.map((film, idx) => (
            <div
              key={film.id}
              onClick={() => setActiveFilmModal(film)}
              onMouseEnter={() => setHoveredArchiveIndex(idx)}
              onMouseLeave={() => setHoveredArchiveIndex(null)}
              className="group py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer px-2"
            >
              <div className="flex items-center gap-6 sm:gap-12">
                <span className="text-xs font-mono text-[#C5A880] w-12 shrink-0">
                  {film.code}
                </span>

                <div>
                  <h3 className="font-display text-2xl text-[#F3EFE7] font-normal group-hover:text-[#C5A880] transition-colors">
                    {film.couple}
                  </h3>
                  <p className="text-xs text-[#F3EFE7]/50 font-mono">
                    {film.filmTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <span className="text-xs font-mono text-[#F3EFE7]/60 hidden sm:inline">
                  {film.location}
                </span>
                <span className="text-xs font-mono text-[#F3EFE7]/40 hidden md:inline">
                  {film.style}
                </span>
                <span className="text-xs font-mono text-[#F3EFE7]/40">
                  {film.year}
                </span>
                <span className="text-xs font-mono text-[#C5A880] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>PLAY</span>
                  <Play className="w-3 h-3 fill-current" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── 13. FINAL EMOTIONAL CALL TO ACTION ── */}
      <section className="relative py-36 md:py-48 text-center text-[#F3EFE7] bg-[#0C0D10] overflow-hidden">
        <img
          src={featuredFilm.coverImage}
          alt="Tell us about your wedding"
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 px-6">
          <span className="text-xs font-mono text-[#C5A880] uppercase tracking-[0.3em]">
            YOUR STORY, ON FILM
          </span>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
            “One day. <br />
            One story. <br />
            <em className="font-editorial italic text-[#C5A880]">Yours forever.</em>”
          </h2>

          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#C5A880] text-[#11110F] hover:bg-white font-mono text-xs font-semibold transition-all shadow-2xl active:scale-95"
            >
              <span>TELL US ABOUT YOUR WEDDING →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 14. CINEMATIC FULL-SCREEN FILM PLAYER MODAL ── */}
      {activeFilmModal && (
        <CinematicFilmPlayerModal
          film={activeFilmModal}
          onClose={() => setActiveFilmModal(null)}
        />
      )}
    </main>
  );
}

// ── CINEMATIC FILM PLAYER MODAL ──
function CinematicFilmPlayerModal({
  film,
  onClose,
}: {
  film: FilmItem;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0C0D10] text-[#F3EFE7] flex flex-col justify-between animate-in fade-in duration-300">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-6 py-5 bg-black/60 backdrop-blur-md border-b border-white/10 z-20">
        <div className="space-y-0.5">
          <h2 className="font-display text-2xl font-light text-white">
            {film.couple}
          </h2>
          <p className="text-xs font-mono text-[#C5A880]">
            {film.location} · {film.style}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-[#11110F] text-xs font-mono transition-all cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Video Viewport */}
      <div className="relative flex-1 bg-black flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl relative">
          <video
            src={film.videoUrl}
            poster={film.coverImage}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Logline Strip */}
      <div className="px-6 py-4 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-[#F3EFE7]/70 z-20">
        <span>"{film.logline}"</span>
        <span className="text-[#C5A880] shrink-0">CMC FILMS CINEMA REEL</span>
      </div>

    </div>
  );
}
