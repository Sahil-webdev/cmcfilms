import { useState } from "react";
import { ImageReveal, Reveal, SectionLabel } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import a from "@/assets/story-2.jpg";
import b from "@/assets/cat-2.jpg";
import c from "@/assets/story-3.jpg";

export function ThreeImageStory() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: LightboxItem[] = [
    {
      src: a,
      alt: "Mehndi-covered hands of a bride beside the groom",
      title: "Handcrafted Mehndi Traditions",
      category: "Pre-Wedding",
      location: "Jodhpur",
      year: "2026",
    },
    {
      src: b,
      alt: "Couple walking through a misty field at dawn",
      title: "Misty Horizon Stroll",
      category: "Destination Stories",
      location: "Jaisalmer",
      year: "2026",
    },
    {
      src: c,
      alt: "Portrait of a bride laughing",
      title: "Unscripted Pure Joy",
      category: "Editorial Portrait",
      location: "Jaipur",
      year: "2026",
    },
  ];

  return (
    <section className="bg-ivory px-5 py-20 md:px-10 md:py-32 border-b border-espresso/10">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-espresso/15 pb-8">
          <div>
            <SectionLabel>Chapter 01</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-tight font-light text-espresso">
              Moments That Become <em className="font-editorial italic text-gold">Memories.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm text-taupe font-sans leading-relaxed">
            No performance. No forced emotions. Just your genuine story, honestly preserved in high definition.
          </p>
        </Reveal>

        {/* Dense 3-Column Layout (Zero gaps) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Card 1 */}
          <Reveal delay={100} className="flex flex-col">
            <ImageReveal
              src={a}
              alt="Mehndi-covered hands of a bride beside the groom"
              className="aspect-[3/4] w-full border border-espresso/10"
              onClick={() => setLightboxIndex(0)}
            />
            <div className="mt-4 p-2">
              <span className="label-xs text-gold">Pre-Wedding / Rituals</span>
              <p className="font-display text-xl text-espresso font-light mt-1">
                Handcrafted Henna &amp; Vows
              </p>
              <p className="text-xs text-taupe font-mono mt-0.5">Jodhpur, Rajasthan</p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200} className="flex flex-col">
            <ImageReveal
              src={b}
              alt="Couple walking through a misty field at dawn"
              className="aspect-[3/4] w-full border border-espresso/10"
              onClick={() => setLightboxIndex(1)}
            />
            <div className="mt-4 p-2">
              <span className="label-xs text-gold">Destination / Dusk</span>
              <p className="font-display text-xl text-espresso font-light mt-1">
                Mist in the Desert Dunes
              </p>
              <p className="text-xs text-taupe font-mono mt-0.5">Jaisalmer Horizon</p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300} className="flex flex-col">
            <ImageReveal
              src={c}
              alt="Portrait of a bride laughing"
              className="aspect-[3/4] w-full border border-espresso/10"
              onClick={() => setLightboxIndex(2)}
            />
            <div className="mt-4 p-2">
              <span className="label-xs text-gold">Editorial Portrait</span>
              <p className="font-display text-xl text-espresso font-light mt-1">
                Unscripted Laughter &amp; Joy
              </p>
              <p className="text-xs text-taupe font-mono mt-0.5">Jaipur Collection / 2026</p>
            </div>
          </Reveal>
        </div>
      </div>

      <Lightbox
        items={items}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
