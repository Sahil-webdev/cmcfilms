import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel, TextReveal } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import luxuryBanner from "@/assets/luxury-editorial.jpg";
import portrait from "@/assets/story-1.jpg";

export function Philosophy() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: LightboxItem[] = [
    {
      src: luxuryBanner,
      alt: "Royal bride and groom at Udaipur Palace at golden hour",
      title: "Royal Sunset Ceremony",
      category: "Destination Weddings",
      location: "Udaipur, Rajasthan",
      year: "2026",
    },
    {
      src: portrait,
      alt: "Bride in soft window illumination before the ceremony",
      title: "The Regal Veil",
      category: "Bridal Portraits",
      location: "Jaipur Palace",
      year: "2026",
    },
  ];

  return (
    <section className="bg-background px-5 py-10 md:px-10 md:py-24 border-b border-espresso/10">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Heading & Tagline */}
        <Reveal className="max-w-4xl">
          <SectionLabel>The Art of Remembering</SectionLabel>
          <TextReveal
            as="h2"
            text={"We don't simply document weddings.\nWe preserve how they felt."}
            className="mt-4 md:mt-6 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] font-light text-espresso"
          />
        </Reveal>

        {/* Dual Editorial Masterpiece Showcase (Fills empty space right below Hero) */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Main Newly Generated Masterpiece Image */}
          <Reveal delay={100} className="lg:col-span-7">
            <div
              onClick={() => setLightboxIndex(0)}
              className="group relative overflow-hidden bg-beige border border-espresso/15 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img
                  src={luxuryBanner}
                  alt="Royal Indian destination wedding portrait at Udaipur palace"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Glassmorphism Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-cinema/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/40">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="label-xs text-ivory text-[10px]">Udaipur Palace / Golden Hour</span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-cinema/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="label-xs text-ivory bg-cinema/80 px-5 py-2.5 rounded-full border border-ivory/20 backdrop-blur-md">
                    View Masterpiece ↗
                  </span>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between border-t border-espresso/10 bg-ivory">
                <div>
                  <span className="label-xs text-gold uppercase">Featured Masterpiece</span>
                  <p className="font-display text-lg text-espresso font-medium mt-0.5">
                    A Royal Celebration in Udaipur
                  </p>
                </div>
                <span className="label-xs text-taupe font-mono text-[11px]">2026 Edition</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Editorial Text & Supporting Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <Reveal delay={200} className="bg-ivory p-6 md:p-8 border border-espresso/10 shadow-sm">
              <span className="label-xs text-gold uppercase tracking-widest">Our Intent</span>
              <p className="mt-4 font-display text-2xl leading-snug text-espresso md:text-3xl font-light">
                From quiet glances before the ceremony to the unrestrained joy of the midnight sangeet, we capture genuine human spirit.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-taupe font-sans">
                CMC FILMS is a boutique studio by intention. We accept a limited number of commissions each season to ensure uncompromising artistic focus on every frame.
              </p>
            </Reveal>

            {/* Second Portrait Image */}
            <Reveal delay={300}>
              <div
                onClick={() => setLightboxIndex(1)}
                className="group relative flex items-center gap-6 p-4 bg-beige/50 border border-espresso/10 hover:border-gold/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-28 h-36 shrink-0 overflow-hidden bg-espresso shadow-md">
                  <img
                    src={portrait}
                    alt="Bride adjusting her veil"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <span className="label-xs text-gold">Editorial Portrait</span>
                  <h3 className="font-display text-xl text-espresso font-light mt-1">
                    The Gentle Moments
                  </h3>
                  <p className="text-xs text-taupe font-sans mt-1">Jaipur Palace Collection</p>
                  <Link
                    to="/about"
                    className="label-xs link-underline inline-block mt-3 text-espresso hover:text-gold"
                  >
                    Discover Studio Ethos →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
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
