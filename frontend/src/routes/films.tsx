import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Play, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useHeroMedia } from "@/hooks/useHeroMedia";

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
const FILMS_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

type ManagedFilm = {
  id: string;
  title: string;
  youtubeUrl: string;
  featured?: boolean;
  createdAt?: string;
};

const getYouTubeVideoId = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) return parsed.pathname.split('/').filter(Boolean)[0] || '';
    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop() || '';
    }
  } catch {}
  return '';
};

const getYouTubeThumbnail = (url: string) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : hero;
};

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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    isMostLoved: true,
  },
];

// ── FILMS PAGE VIDEO HERO ─────────────────────────────────────────────────
function FilmsVideoHero() {
  const videoSrc = useHeroMedia('films', '/films-hero-bg.mp4');
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
      <video key={videoSrc}
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

      <div className="relative flex h-full flex-col items-center justify-end px-5 pb-20 md:pb-28 text-center text-white">
        <p
          className="mb-4 font-mono text-[11px] tracking-[0.35em] uppercase text-white/60 transition-all duration-700 delay-100"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(10px)" }}
        >
          CMC FILMS · WEDDING CINEMA
        </p>

        <h1
          className="font-display text-[clamp(3.2rem,8.5vw,6.5rem)] font-normal md:font-medium leading-none tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
        >
          Films
        </h1>

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

// ── RECENT FILMS INFINITE AUTO-LOOP CAROUSEL (knotsbyamp.com reference design) ──
function RecentFilmsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 340;
      
      if (direction === 'right') {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 15) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 15) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  // Infinite Auto-Loop Timer
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 15) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered]);

  const [adminFilms, setAdminFilms] = useState<ManagedFilm[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${FILMS_API_URL}/api/films`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        if (Array.isArray(payload?.data?.films)) setAdminFilms(payload.data.films);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  // Fallback static films shown when admin hasn't set up any yet
  const staticRecentFilms = [
    { id: 'rf-1', couple: 'Kashish & Priya', sub: 'A CMC Films Feature', image: luxuryEditorial, youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'rf-2', couple: 'Anushri & Aditya', sub: 'A CMC Films Feature', image: f1, youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'rf-3', couple: 'Riddhi & Karan', sub: 'A CMC Films Feature', image: hero, youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'rf-4', couple: 'Maitri & Aneesh', sub: 'A CMC Films Feature', image: coastal, youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'rf-5', couple: 'Palak & Priya', sub: 'A CMC Films Feature', image: haldi, youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'rf-6', couple: 'Dhruv & Pippa', sub: 'A CMC Films Feature', image: story2, youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];

  // Published films from the admin panel take priority; otherwise show samples.
  const recentFilmsList = adminFilms !== null
    ? adminFilms.map((af) => ({
        id: af.id,
        couple: af.title,
        sub: 'A CMC Films Feature',
        image: getYouTubeThumbnail(af.youtubeUrl),
        youtubeUrl: af.youtubeUrl,
      }))
    : staticRecentFilms;

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#FAF7F2] py-20 md:py-28 relative overflow-hidden select-none border-t border-b border-[#EAE5DC]"
    >
      {/* Centered Serif Italic Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl text-[#2B2724] tracking-tight font-normal">
          Recent Films
        </h2>
      </div>

      {/* Navigation Controls & Carousel Container */}
      <div className="max-w-[1700px] mx-auto relative px-4 sm:px-14">
        {/* Left Floating Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-xl border border-white/20 cursor-pointer active:scale-95"
          aria-label="Previous Films"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Right Floating Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-xl border border-white/20 cursor-pointer active:scale-95"
          aria-label="Next Films"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recentFilmsList.map((film) => (
            <a
              key={film.id}
              href={film.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="snap-center shrink-0 w-[260px] sm:w-[300px] md:w-[320px] flex flex-col items-center gap-3.5 group cursor-pointer"
            >
              {/* Movie Poster Card */}
              <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-black/40 shadow-xl border border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                {/* Poster Background Image */}
                <img
                  src={film.image}
                  alt={film.couple}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                {/* Poster Title (Positioned at Bottom of Card) */}
                <div className="absolute bottom-5 sm:bottom-6 inset-x-4 text-center z-10">
                  <h3 className="font-poppins text-lg sm:text-xl md:text-2xl text-white font-semibold drop-shadow-md tracking-tight leading-snug">
                    {film.couple}
                  </h3>
                </div>
              </div>

              {/* Bottom Dark Pill Button "Watch Film" */}
              <span className="bg-[#33302C] group-hover:bg-[#171717] text-white font-poppins text-xs font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block">
                Watch Film
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WeddingFilmsPage() {
  const [activeFilmModal, setActiveFilmModal] = useState<FilmItem | null>(null);
  const [managedFilms, setManagedFilms] = useState<ManagedFilm[] | null>(null);
  const [introTitle, setIntroTitle] = useState('MARWADI WEDDINGS');
  const [introText, setIntroText] = useState('Cinematic wedding films rooted in genuine emotion, unscripted movement, and honest storytelling. We take pride in understanding the couple, their families, and the quiet, intimate glances between. Every celebration deserves a wedding film thoughtfully crafted to do justice to the beauty, grace, and authentic spirit of your story.');

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${FILMS_API_URL}/api/films`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        if (!payload?.data) return;
        if (Array.isArray(payload.data.films)) setManagedFilms(payload.data.films);
        if (payload.data.introTitle) setIntroTitle(payload.data.introTitle);
        if (payload.data.introText) setIntroText(payload.data.introText);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const displayedFilms: FilmItem[] = managedFilms !== null
    ? managedFilms.map((film, index) => ({
        id: film.id,
        code: String(index + 1).padStart(2, '0'),
        couple: film.title,
        filmTitle: film.title,
        location: 'CMC FILMS',
        category: 'ROYAL',
        style: 'Wedding Film',
        year: film.createdAt?.slice(0, 4) || '',
        duration: '',
        timestamp: '',
        coverImage: getYouTubeThumbnail(film.youtubeUrl),
        videoUrl: film.youtubeUrl,
        isMostLoved: Boolean(film.featured),
      }))
    : filmsData;

  return (
    <main className="bg-[#F2EFE8] text-[#171512] font-sans selection:bg-[#171512] selection:text-[#F2EFE8] min-h-screen relative overflow-hidden">
      {/* ── SECTION 1 — FULL-SCREEN VIDEO HERO ── */}
      <FilmsVideoHero />

      {/* ── SECTION 2 — RECENT FILMS CAROUSEL (knotsbyamp.com reference design with auto-loop) ── */}
      <RecentFilmsCarousel />

      {/* ── SECTION 3 — MINIMAL & DISTINCTIVE MARWADI WEDDINGS GALLERY ── */}
      <section className="bg-[#FAF8F5] text-[#261E1E] py-16 md:py-24 px-6 sm:px-10 md:px-16 border-t border-b border-black/5 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto space-y-12 sm:space-y-16 relative z-10">
          
          {/* Clean Editorial Header */}
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#93191E]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93191E] font-semibold">
                  CINEMATIC ARCHIVE
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#261E1E]">
                MARWADI <em className="font-editorial italic font-normal text-[#93191E] lowercase">Weddings</em>
              </h1>
            </div>

            <p className="font-sans text-xs sm:text-sm font-light text-[#8A7D71] max-w-md leading-relaxed">
              Real 4K wedding cinema documenting royal heritage, unscripted emotion, and timeless celebrations.
            </p>
          </Reveal>

          {/* 3-Column Clean Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {displayedFilms.map((film) => (
              <Reveal key={film.id}>
                <article
                  onClick={() => setActiveFilmModal(film)}
                  className="group cursor-pointer space-y-3.5 flex flex-col justify-between"
                >
                  {/* Clean Video Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#171512] shadow-md border border-black/5">
                    {/* Cover Image */}
                    <img
                      src={film.coverImage}
                      alt={film.couple}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-104"
                    />

                    {/* Overlay Gradient & Minimal Play Button */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        aria-label="Play 4K Wedding Film"
                        onClick={(event) => {
                          event.stopPropagation();
                          window.open(film.videoUrl, "_blank", "noopener,noreferrer");
                        }}
                        className="h-13 w-13 rounded-full bg-white/95 text-[#261E1E] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#93191E] group-hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Below Card Details (Clean & Legible) */}
                  <div className="flex items-start justify-between gap-3 pt-1">
                    <div>
                      <h3 className="font-display uppercase tracking-wider text-xl sm:text-2xl font-normal text-[#261E1E] group-hover:text-[#93191E] transition-colors leading-snug">
                        {film.couple}
                      </h3>
                      <p className="font-mono text-[11px] text-[#8A7D71] uppercase tracking-wider mt-1">
                        {film.location} · 4K FILM
                      </p>
                    </div>

                    <span className="font-mono text-xs text-[#93191E] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0 pt-1">
                      Watch <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>



      {/* ── FULL-SCREEN PRIVATE CINEMA PLAYER MODAL ── */}
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
    <div className="fixed inset-0 z-[100] bg-[#0D0D0C] text-[#F2EFE8] flex flex-col justify-between animate-in fade-in duration-300 font-sans">
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

      <div className="relative flex-1 bg-black flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-[4px] bg-black border border-white/10 shadow-2xl relative">
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(film.videoUrl)}?autoplay=1`}
            title={film.filmTitle}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="px-6 py-4 bg-black/60 border-t border-white/10 flex justify-between items-center text-xs font-mono text-[#F2EFE8]/60 z-20">
        <span>"{film.filmTitle}"</span>
        <span className="text-[#A67B2E]">CMC FILMS PRIVATE CINEMA</span>
      </div>
    </div>
  );
}
