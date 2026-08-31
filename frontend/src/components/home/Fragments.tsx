import { useState } from "react";
import { fragments } from "@/lib/site-data";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";

export function Fragments() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = fragments.map((f) => ({
    src: f.image,
    alt: f.caption,
    title: f.caption,
    category: "Fragments of a Memory",
    location: "CMC Editorial Archive",
    year: "2026",
  }));

  return (
    <section className="grain relative overflow-hidden bg-ivory px-5 py-24 md:px-10 md:py-36 border-t border-espresso/10">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionLabel>Fragments of a Memory</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] font-light text-espresso">
              A wedding is remembered in quiet fragments <em className="font-editorial italic text-gold">before it is remembered whole.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm text-taupe font-sans leading-relaxed">
            Fleeting glances, hand touches, tear-stained laughs — collected with gentle care and preserved for eternity.
          </p>
        </Reveal>

        {/* Dense Balanced Editorial Mosaic (Zero empty dead zones) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {fragments.map((f, i) => (
            <Reveal
              key={f.caption + i}
              delay={i * 80}
              className="group relative flex flex-col cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-beige border border-espresso/10 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-gold/40"
              >
                <img
                  src={f.image}
                  alt={f.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {/* Overlay Badge */}
                <div className="absolute inset-0 bg-cinema/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="label-xs text-ivory bg-cinema/80 px-4 py-2 rounded-full border border-ivory/20 backdrop-blur-sm">
                    View Fragment ↗
                  </span>
                </div>
              </div>
              <figcaption className="mt-3 flex items-center justify-between border-t border-espresso/10 pt-2">
                <span className="font-editorial text-lg italic text-espresso group-hover:text-gold transition-colors duration-300">
                  {f.caption}
                </span>
                <span className="label-xs text-taupe font-mono">0{i + 1}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Integration */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
