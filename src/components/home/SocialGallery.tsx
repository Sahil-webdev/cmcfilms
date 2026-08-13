import { Instagram } from "lucide-react";
import { gallery, studio } from "@/lib/site-data";
import { Reveal, SectionLabel } from "@/components/Reveal";

export function SocialGallery() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionLabel>Stories Beyond The Frame</SectionLabel>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-tight">
              Behind the scenes, between the frames
            </h2>
            <a href={studio.socials[0]?.href} className="label-xs link-underline">
              Follow on Instagram →
            </a>
          </div>
        </Reveal>
      </div>

      <div className="no-bar mt-12 flex gap-3 overflow-x-auto px-5 pb-3 md:px-10">
        {gallery.map((src, i) => (
          <a
            key={i}
            href={studio.socials[0]?.href}
            className="group relative aspect-[4/5] w-44 shrink-0 overflow-hidden bg-beige md:w-64"
          >
            <img src={src} alt="Behind the scenes moment" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105" />
            <span className="absolute inset-0 flex items-center justify-center bg-cinema/0 text-ivory opacity-0 transition-all duration-500 group-hover:bg-cinema/35 group-hover:opacity-100">
              <Instagram className="h-5 w-5" strokeWidth={1.2} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
