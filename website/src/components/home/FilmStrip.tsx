import { gallery } from "@/lib/site-data";

/** Continuous horizontal film strip between major sections. */
export function FilmStrip() {
  const frames = [...gallery, ...gallery];
  return (
    <section aria-label="Film strip of wedding moments" className="grain overflow-hidden border-y border-espresso/10 bg-espresso py-6">
      <div className="ticker flex w-max gap-2">
        {frames.map((src, i) => (
          <div key={i} className="relative h-40 w-28 shrink-0 overflow-hidden md:h-56 md:w-40">
            <img src={src} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover opacity-85" />
          </div>
        ))}
      </div>
    </section>
  );
}
