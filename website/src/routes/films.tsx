import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
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

const title = "Wedding Films — Cinematic Archive by CMC FILMS";
const description =
  "Real wedding films created by CMC FILMS. Stories that moved us, captured the way they felt.";

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
  category: "DESTINATION" | "TRADITIONAL" | "INTIMATE" | "INTERNATIONAL" | "ROYAL";
  style: string;
  year: string;
  duration: string;
  timestamp: string;
  coverImage: string;
  secondaryImage?: string;
  videoUrl: string;
  isMostLoved?: boolean;
}

const filmsData: FilmItem[] = [
  {
    id: "f-01",
    code: "01",
    couple: "Aarav & Meera",
    filmTitle: "A Royal Winter Wedding",
    location: "JAIPUR",
    category: "ROYAL",
    style: "Royal Wedding",
    year: "2026",
    duration: "12:45",
    timestamp: "00:01:24",
    coverImage: luxuryEditorial,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "f-02",
    code: "02",
    couple: "Rhea & Kabir",
    filmTitle: "Lake Pichola Symphony",
    location: "UDAIPUR",
    category: "ROYAL",
    style: "Palace Wedding",
    year: "2026",
    duration: "09:30",
    timestamp: "00:04:17",
    coverImage: hero,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    isMostLoved: true,
  },
  {
    id: "f-03",
    code: "03",
    couple: "Aneesh & Maitri",
    filmTitle: "Where Sea Whispers Vows",
    location: "GOA",
    category: "DESTINATION",
    style: "Oceanfront Wedding",
    year: "2026",
    duration: "08:15",
    timestamp: "00:07:32",
    coverImage: coastal,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    isMostLoved: true,
  },
  {
    id: "f-04",
    code: "04",
    couple: "Saba & Usman",
    filmTitle: "Arabian Dune Stories",
    location: "DUBAI",
    category: "INTERNATIONAL",
    style: "International Nikah",
    year: "2025",
    duration: "11:20",
    timestamp: "00:10:04",
    coverImage: f1,
    secondaryImage: story3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "f-05",
    code: "05",
    couple: "Dhruv & Pippa",
    filmTitle: "Marigold Rain at Oleander Farms",
    location: "KARJAT",
    category: "INTIMATE",
    style: "Eco-Luxury Farm Vows",
    year: "2026",
    duration: "07:40",
    timestamp: "00:12:50",
    coverImage: haldi,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    isMostLoved: true,
  },
  {
    id: "f-06",
    code: "06",
    couple: "Ishita & Arjun",
    filmTitle: "Three Days. Two Families.",
    location: "JAISALMER",
    category: "TRADITIONAL",
    style: "Heritage Fort Wedding",
    year: "2025",
    duration: "14:10",
    timestamp: "00:16:08",
    coverImage: f2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    isMostLoved: true,
  },
  {
    id: "f-07",
    code: "07",
    couple: "Sana & Aditya",
    filmTitle: "The Manganiyar Serenade",
    location: "JODHPUR",
    category: "TRADITIONAL",
    style: "Cultural Heritage",
    year: "2025",
    duration: "08:50",
    timestamp: "00:19:42",
    coverImage: f3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    isMostLoved: true,
  },
];

const categoryFilters = [
  "ALL",
  "DESTINATION",
  "TRADITIONAL",
  "INTIMATE",
  "INTERNATIONAL",
] as const;

// ── FILMS PAGE VIDEO HERO ─────────────────────────────────────────────────
function FilmsVideoHero() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const p = videoRef.current.play();
      if (p !== undefined) p.catch(() => {});
    }
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
      {/* Autoplay background video — couples cinematic wedding footage */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        {/* Drop a couple-specific video at /public/films-hero-bg.mp4 to override */}
        <source src="/films-hero-bg.mp4" type="video/mp4" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlay — bottom-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

      {/* Content — identical layout to home hero, centered at bottom */}
      <div
        className="relative flex h-full flex-col items-center justify-end px-5 pb-20 md:pb-28 text-center text-white"
      >
        {/* Small label above */}
        <p
          className="mb-4 font-mono text-[11px] tracking-[0.35em] uppercase text-white/60 transition-all duration-700 delay-100"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(10px)" }}
        >
          CMC FILMS · WEDDING CINEMA
        </p>

        {/* Big "FILMS" title — same size & weight as home "CMC Films" */}
        <h1
          className="font-display text-[clamp(3.2rem,8.5vw,6.5rem)] font-normal md:font-medium leading-none tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
        >
          Films
        </h1>

        {/* Subtitle */}
        <p
          className="mt-2.5 md:mt-3.5 font-display text-[clamp(1.1rem,2.6vw,2rem)] font-light tracking-wide text-white/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] transition-all duration-1000 delay-200 ease-out"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(14px)" }}
        >
          Cinematic Stories. Told Forever.
        </p>
      </div>
    </section>
  );
}

export function WeddingFilmsPage() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("ALL");
  const [activeFilmModal, setActiveFilmModal] = useState<FilmItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-[#F2EFE8] text-[#171512] font-sans selection:bg-[#171512] selection:text-[#F2EFE8] min-h-screen relative overflow-hidden"
    >
      {/* ── SECTION 1 — FULL-SCREEN VIDEO HERO ── */}
      <FilmsVideoHero />

      {/* ── SECTION 2 — EDITORIAL INTRO & 2-COLUMN FILM GRID (Matching Reference Design) ── */}
      <section className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-[1600px] mx-auto space-y-16">
        
        {/* Editorial Intro Header */}
        <Reveal className="max-w-4xl space-y-6">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.08] text-[#C47A65]">
            Deeply personal, immersive, and timeless Films.
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-[#171512]/75 font-sans font-light leading-relaxed">
            <p>
              Cinematic wedding films rooted in genuine emotion, unscripted movement, and honest storytelling. We take pride in understanding the couple, their families, and the quiet, intimate glances between. Every celebration deserves a wedding film thoughtfully crafted to do justice to the beauty, grace, and authentic spirit of your story. This philosophy has made CMC FILMS the choice for couples seeking an elevated, artistic, and deeply personal cinema experience.
            </p>
            <p className="text-[#171512]/60 text-xs sm:text-sm font-sans">
              Here is a curated selection of our recent wedding films. Each film captures a unique celebration—thoughtfully edited to take you on a timeless journey through pure joy, tearful vows, exuberant celebrations, and quiet romantic moments.
            </p>
          </div>
        </Reveal>

        {/* 3-Column Video Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filmsData.map((film) => (
            <Reveal key={film.id}>
              <div
                onClick={() => setActiveFilmModal(film)}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#171512] shadow-xl cursor-pointer border border-black/5"
              >
                {/* Film Cover Image */}
                <img
                  src={film.coverImage}
                  alt={film.couple}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Gradient Overlay for Text Readability & Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/85 group-hover:via-black/40 transition-all duration-500 flex items-center justify-center">
                  {/* Center Play Button */}
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white text-white group-hover:text-[#171512] transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Text — Studio Name & Large Serif Couple Names */}
                <div className="absolute bottom-4 left-5 right-5 text-white space-y-0.5 pointer-events-none">
                  <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/75 font-bold">
                    CMC FILMS
                  </p>
                  <h3 className="font-display uppercase tracking-wider text-xl sm:text-2xl font-normal text-white drop-shadow-md leading-tight">
                    {film.couple}
                  </h3>
                </div>

                {/* Top Duration Badge */}
                <span className="absolute top-3 right-3 text-[10px] font-mono text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-[2px]">
                  {film.duration} · {film.location}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* ── DARK TRANSITION INTERMISSION (#171512 Deep Warm Brown-Black) ── */}
      <section className="relative py-32 md:py-48 bg-[#171512] text-[#F2EFE8] border-b border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-8">
          
          <div className="relative mx-auto w-full max-w-xl aspect-[16/9] overflow-hidden rounded-[4px] shadow-2xl border border-white/10 bg-black">
            <img
              src={f2}
              alt="CMC Intermission frame"
              className="h-full w-full object-cover opacity-75 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full border border-white/40 flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A67B2E]">
              CMC FILMS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#F2EFE8]">
              “We film what you didn't know <br />
              <em className="font-editorial italic text-[#A67B2E] font-normal">
                you would miss.
              </em>”
            </h2>
          </div>

        </div>
      </section>

      {/* ── FINAL SCREEN & CTA ── */}
      <section className="py-36 md:py-48 px-6 text-center bg-[#F2EFE8]">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Center Single Small Wedding Frame */}
          <div className="mx-auto w-44 aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-black/5 bg-[#171512]">
            <img
              src={coastal}
              alt="Your story could be next"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#171512]">
              “Your story could be next.”
            </h2>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#171512] border-b-2 border-[#A67B2E] pb-1 hover:text-[#A67B2E] transition-colors"
              >
                <span>Tell Us About Your Wedding</span>
                <ArrowUpRight className="w-4 h-4 text-[#A67B2E]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── FULL-SCREEN PRIVATE CINEMA PLAYER MODAL (#0D0D0C) ── */}
      {activeFilmModal && (
        <PrivateCinemaFilmPlayerModal
          film={activeFilmModal}
          onClose={() => setActiveFilmModal(null)}
        />
      )}
    </main>
  );
}

// ── PRIVATE CINEMA FILM PLAYER MODAL (#0D0D0C) ──
function PrivateCinemaFilmPlayerModal({
  film,
  onClose,
}: {
  film: FilmItem;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0D0D0C] text-[#F2EFE8] flex flex-col justify-between animate-in fade-in duration-300">
      
      {/* Minimal Top Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-black/60 border-b border-white/10 z-20">
        <div className="space-y-0.5">
          <h2 className="font-display text-2xl font-light text-white">
            {film.couple}
          </h2>
          <p className="text-xs font-mono text-[#A67B2E]">
            {film.location} · {film.style} · {film.year}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-[2px] bg-white/10 hover:bg-[#A67B2E] hover:text-[#171512] text-xs font-mono transition-all cursor-pointer"
        >
          <span>× CLOSE</span>
        </button>
      </div>

      {/* Video Viewport */}
      <div className="relative flex-1 bg-black flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-[4px] bg-black border border-white/10 shadow-2xl relative">
          <video
            src={film.videoUrl}
            poster={film.coverImage}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="px-6 py-4 bg-black/60 border-t border-white/10 flex justify-between items-center text-xs font-mono text-[#F2EFE8]/60 z-20">
        <span>"{film.filmTitle}"</span>
        <span className="text-[#A67B2E]">CMC FILMS PRIVATE CINEMA</span>
      </div>

    </div>
  );
}
