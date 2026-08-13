import { createFileRoute } from "@tanstack/react-router";
import { Play, X, Film } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import hero from "@/assets/featured.jpg";
import f1 from "@/assets/cat-1.jpg";
import f2 from "@/assets/cat-2.jpg";
import f3 from "@/assets/cat-3.jpg";
import f4 from "@/assets/story-2.jpg";

const title = "Wedding Films — Cinematic Stories by CMC FILMS";
const description =
  "Cinematic wedding films made to be felt: feature films, teasers and destination stories by CMC FILMS.";

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
  component: Films,
});

const films = [
  { title: "Ananya & Arjun", place: "Udaipur", year: "2026", img: hero, len: "06:12", tag: "Feature Film" },
  { title: "Aarohi & Dev", place: "Jaipur", year: "2026", img: f1, len: "04:48", tag: "Teaser Film" },
  { title: "Tara & Nikhil", place: "Goa", year: "2025", img: f2, len: "05:20", tag: "Destination Cinema" },
  { title: "Saira & Aman", place: "Jodhpur", year: "2025", img: f3, len: "03:55", tag: "Highlights" },
  { title: "Ria & Kunal", place: "Delhi", year: "2025", img: f4, len: "07:02", tag: "Feature Film" },
];

function Films() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-cinema text-ivory min-h-screen">
      {/* Hero Header */}
      <section className="grain relative h-[85svh] min-h-[520px] overflow-hidden border-b border-ivory/10">
        <img
          src={hero}
          alt="Still from a CMC FILMS wedding film"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-75 transition-transform duration-[2000ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema via-cinema/40 to-cinema/20" />

        <div className="absolute inset-x-0 bottom-16 px-5 md:px-12 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-gold" />
            <span className="label-xs text-gold uppercase tracking-widest">Cinematic Works</span>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-light">
            Cinematic Stories <br />
            <em className="font-editorial italic text-gold font-normal">Made To Be Felt.</em>
          </h1>
          <p className="mt-4 max-w-lg text-sm text-ivory/70 font-sans leading-relaxed">
            High-definition 4K color-graded films captured with silent precision and cut for true emotional resonance.
          </p>
        </div>
      </section>

      {/* Featured Films Grid */}
      <section className="px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ivory/15 pb-8">
            <div>
              <SectionLabel>Featured Films</SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-light">Curated Cinema Collection</h2>
            </div>
            <p className="label-xs text-taupe font-mono">05 Selected Wedding Films</p>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {films.map((f, i) => (
              <Reveal
                key={f.place + i}
                delay={i * 80}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group block w-full text-left cursor-pointer border border-ivory/10 bg-espresso/40 p-3 rounded-sm transition-all duration-500 hover:border-gold/50 hover:bg-espresso/80"
                  aria-label={`Play film: ${f.title}`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-espresso rounded-xs">
                    <img
                      src={f.img}
                      alt={`${f.title} film poster`}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-95"
                    />

                    {/* Central Play Badge */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-18 w-18 items-center justify-center rounded-full border border-ivory/50 bg-cinema/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-cinema group-hover:border-gold shadow-2xl">
                        <Play className="h-6 w-6 ml-0.5" strokeWidth={1.5} />
                      </span>
                    </span>

                    {/* Metadata overlays */}
                    <span className="label-xs absolute top-4 left-4 text-gold bg-cinema/80 border border-gold/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                      {f.tag}
                    </span>
                    <span className="label-xs absolute bottom-4 right-4 text-ivory bg-cinema/80 border border-ivory/20 px-3 py-1.5 rounded-full font-mono backdrop-blur-md">
                      {f.len}
                    </span>
                  </div>

                  <div className="mt-5 p-2 flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-ivory font-light group-hover:text-gold transition-colors">
                        {f.title}
                      </h2>
                      <p className="label-xs mt-1 text-taupe font-mono">
                        {f.place} <span className="mx-2 text-gold">/</span> {f.year}
                      </p>
                    </div>
                    <span className="label-xs text-ivory/70 border border-ivory/20 px-4 py-2 rounded-full group-hover:bg-ivory group-hover:text-cinema transition-all">
                      Watch Reel ▶
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Preview */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cinema/95 backdrop-blur-xl p-5 animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close player"
            className="absolute right-6 top-6 flex items-center justify-center w-12 h-12 rounded-full border border-ivory/20 text-ivory hover:bg-ivory hover:text-cinema transition-all"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video w-full bg-espresso overflow-hidden rounded-md border border-gold/30 shadow-2xl">
              <img src={films[open]!.img} alt="" className="h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-cinema/60 text-ivory p-6 text-center">
                <Play className="w-16 h-16 text-gold animate-bounce mb-4" strokeWidth={1.5} />
                <span className="label-xs text-gold uppercase tracking-widest">{films[open]!.tag}</span>
                <h3 className="font-display text-3xl font-light mt-2">{films[open]!.title}</h3>
                <p className="text-sm font-mono text-taupe mt-1">{films[open]!.place} — {films[open]!.len}</p>
                <p className="mt-4 text-xs text-ivory/70 border border-ivory/20 px-4 py-2 rounded-full">
                  Full 4K Cinema Reel Loading...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
