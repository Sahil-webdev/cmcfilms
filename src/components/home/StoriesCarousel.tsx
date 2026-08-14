import { Reveal, SectionLabel } from "@/components/Reveal";
import { categories } from "@/lib/site-data";

export function StoriesCarousel() {
  return (
    <section className="grain relative bg-[#646E54] py-24 text-ivory md:py-36 overflow-hidden">
      {/* Subtle ambient lighting for depth on sage green */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-ivory/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-cinema/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          {/* Refined Luxury Tag that complements #646E54 */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5CA92] shadow-[0_0_8px_#E5CA92]" />
            <span className="label-xs uppercase tracking-[0.28em] text-[#E5CA92] font-mono text-[11px]">
              Stories We Tell
            </span>
            <span className="h-px w-12 bg-gradient-to-r from-[#E5CA92]/50 to-transparent" />
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-light leading-[0.98] text-[#FAF8F3]">
              Every celebration
              <br />
              <em className="font-editorial italic text-[#E5CA92] font-normal">
                has its own rhythm.
              </em>
            </h2>

            <div className="flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/10 px-4 py-2 backdrop-blur-sm">
              <span className="label-xs text-ivory/90 font-mono text-[11px]">
                Drag to explore →
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="no-bar relative mt-16 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:gap-5 md:px-10">
        {categories.map((c) => (
          <article
            key={c.no}
            className="group relative w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[22vw]"
          >
            <div className="hover-zoom relative aspect-[3/4.4] w-full bg-cinema/60 overflow-hidden shadow-2xl border border-ivory/15 transition-all duration-500 group-hover:border-[#E5CA92]/60">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/95 via-cinema/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                <span className="label-xs text-[#E5CA92] font-mono text-[11px] tracking-wider">{c.no}</span>
                <h3 className="mt-2 font-display text-2xl leading-tight text-[#FAF8F3] font-light">{c.name}</h3>
                <span className="label-xs mt-3 inline-flex items-center gap-1.5 text-xs text-[#E5CA92] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-mono">
                  View Story →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
