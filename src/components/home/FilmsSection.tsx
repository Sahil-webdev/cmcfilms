import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play, X, Film, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import poster from "@/assets/featured.jpg";
import t1 from "@/assets/cat-1.jpg";
import t2 from "@/assets/cat-2.jpg";
import t3 from "@/assets/cat-3.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";

const films = [
  { title: "Ananya & Arjun", place: "Udaipur", year: "2026", len: "06:12", img: t1, tag: "Feature Film" },
  { title: "Tara & Nikhil", place: "Jaipur", year: "2026", len: "04:48", img: t2, tag: "Teaser" },
  { title: "Saira & Aman", place: "Goa", year: "2025", len: "05:20", img: t3, tag: "Destination Cinema" },
  { title: "Meera & Kabir", place: "Jodhpur", year: "2026", len: "03:55", img: luxuryEditorial, tag: "Highlight Film" },
];

export function FilmsSection() {
  const [activeVideo, setActiveVideo] = useState<{ title: string; place: string } | null>(null);

  return (
    <section className="grain relative bg-[#012640] px-5 py-14 text-ivory md:px-10 md:py-20 overflow-hidden border-y border-ivory/10">
      {/* Subtle Circuit Grid Pattern Overlay */}
      <div className="circuit-background opacity-35" />

      {/* Ambient background depth for royal sapphire blue */}
      <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#E5CA92]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-cinema/40 blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* ── Top Header ── */}
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E5CA92]/20 border border-[#E5CA92]/40 text-[#E5CA92]">
              <Film className="h-2.5 w-2.5" />
            </span>
            <span className="label-xs uppercase tracking-[0.25em] text-[#E5CA92] font-mono text-[10px]">
              Wedding Films &amp; Cinema
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,4rem)] font-light leading-[1] text-[#FAF8F3]">
              Films That Let You{" "}
              <em className="font-editorial italic text-[#E5CA92] font-normal">
                Feel It Again.
              </em>
            </h2>

            <Link
              to="/films"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E5CA92] hover:text-[#FAF8F3] transition-colors duration-300 self-start md:self-end"
            >
              View All 4K Films
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* ── Featured Hero Film Preview ── */}
        <Reveal className="group mt-8 block cursor-pointer" delay={100}>
          <div
            onClick={() => setActiveVideo({ title: "Ananya & Arjun — The Royal Pichola Vows", place: "Udaipur, Rajasthan" })}
            className="relative aspect-[16/9] md:aspect-[2.35/1] w-full overflow-hidden rounded-sm bg-cinema/80 shadow-2xl border border-ivory/15 transition-all duration-700 group-hover:border-[#E5CA92]/70"
          >
            <img
              src={poster}
              alt="Poster frame from a destination wedding film"
              loading="lazy"
              className="h-full w-full object-cover opacity-85 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-95"
            />

            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/95 via-cinema/25 to-cinema/40" />

            {/* Glowing Play Button Center */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-ivory/40 bg-cinema/60 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-[#E5CA92] group-hover:border-[#E5CA92] group-hover:text-[#27231F] text-[#FAF8F3] shadow-2xl">
                <Play className="h-5 w-5 md:h-7 md:w-7 translate-x-0.5 fill-current" strokeWidth={1.5} />
              </span>
            </span>

            {/* Top Badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <span className="label-xs text-[11px] font-mono uppercase tracking-[0.2em] text-[#E5CA92] bg-cinema/70 px-2.5 py-1 rounded-sm border border-[#E5CA92]/30 backdrop-blur-md">
                Featured 4K Cinema
              </span>
            </div>

            {/* Bottom Title Info */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-[11px] text-[#E5CA92]">Udaipur · City Palace Lakefront</span>
                <h3 className="font-display text-xl md:text-3xl text-[#FAF8F3] font-light mt-0.5">
                  Ananya &amp; Arjun — The Royal Pichola Vows
                </h3>
              </div>

              <span className="label-xs font-mono text-[11px] text-ivory/80 bg-cinema/60 px-3 py-1 rounded-full border border-ivory/20 backdrop-blur-md self-start md:self-end">
                Duration · 06:12
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── Category Tags ── */}
        <div className="mt-8 flex items-center justify-between border-b border-ivory/15 pb-3">
          <div className="flex gap-4 md:gap-8 font-mono text-xs uppercase tracking-wider text-ivory/70">
            <span className="text-[#E5CA92] border-b-2 border-[#E5CA92] pb-3 -mb-3 font-medium">
              Featured Reels
            </span>
            <span className="hover:text-ivory transition-colors cursor-pointer">Teasers</span>
            <span className="hover:text-ivory transition-colors cursor-pointer">Destination Stories</span>
          </div>

          <span className="label-xs text-ivory/50 font-mono text-[10px] hidden sm:inline-block">
            4K UHD Cinematography
          </span>
        </div>

        {/* ── More Film Cards Strip ── */}
        <div className="no-bar mt-5 flex gap-3.5 md:gap-5 overflow-x-auto pb-2">
          {films.map((f) => (
            <div
              key={f.title}
              onClick={() => setActiveVideo({ title: f.title, place: f.place })}
              className="group relative w-[75vw] shrink-0 sm:w-[42vw] lg:w-[23vw] cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-sm bg-cinema/80 shadow-lg border border-ivory/15 transition-all duration-500 group-hover:border-[#E5CA92] group-hover:shadow-2xl">
                <img
                  src={f.img}
                  alt={`${f.title} film still`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-106"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/90 via-cinema/20 to-transparent" />

                {/* Small play icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5CA92] text-[#27231F] shadow-lg">
                    <Play className="h-4 w-4 fill-current translate-x-0.5" />
                  </span>
                </div>

                <span className="absolute top-2.5 right-2.5 font-mono text-[9px] text-ivory/80 bg-cinema/70 px-2 py-0.5 rounded-xs border border-ivory/20 backdrop-blur-sm">
                  {f.len}
                </span>

                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#E5CA92]">
                    {f.place} · {f.year}
                  </p>
                  <p className="font-display text-base text-[#FAF8F3] font-light leading-snug truncate">
                    {f.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4K Cinema Video Player Modal ── */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-cinema/95 p-4 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-sm border border-ivory/20 bg-cinema shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ivory/15 bg-cinema/90 px-6 py-4">
              <div>
                <span className="label-xs text-xs font-mono text-[#E5CA92] uppercase">
                  CMC FILMS 4K Cinema
                </span>
                <h3 className="font-display text-xl text-ivory font-light">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory transition-colors hover:border-[#E5CA92] hover:bg-[#E5CA92] hover:text-[#27231F] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Element */}
            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
                src="/hero-bg.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-ivory/15 bg-cinema/90 px-6 py-3 font-mono text-xs text-ivory/70">
              <span>{activeVideo.place}</span>
              <span className="text-[#E5CA92]">Shot on RED / Sony FX Cinematic 4K</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
