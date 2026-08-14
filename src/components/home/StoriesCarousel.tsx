import { Reveal, SectionLabel } from "@/components/Reveal";
import { categories } from "@/lib/site-data";

export function StoriesCarousel() {
  return (
    <section className="grain relative bg-[#646E54] py-24 text-ivory md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionLabel className="text-ivory/70">Stories We Tell</SectionLabel>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] text-ivory">
              Every celebration
              <br />
              <em className="font-editorial italic text-ivory/80">has its own rhythm.</em>
            </h2>
            <span className="label-xs text-ivory/70 font-mono">Drag to explore →</span>
          </div>
        </Reveal>
      </div>

      <div className="no-bar mt-16 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:gap-4 md:px-10">
        {categories.map((c) => (
          <article
            key={c.no}
            className="group relative w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[22vw]"
          >
            <div className="hover-zoom relative aspect-[3/4.4] w-full bg-espresso/80 overflow-hidden shadow-xl border border-ivory/10">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-75"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/90 via-cinema/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-2">
                <span className="label-xs text-gold">{c.no}</span>
                <h3 className="mt-2 font-display text-2xl leading-tight text-ivory">{c.name}</h3>
                <span className="label-xs mt-3 block text-ivory/0 transition-colors duration-500 group-hover:text-ivory/90">
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
