import { Play } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import poster from "@/assets/featured.jpg";
import t1 from "@/assets/cat-1.jpg";
import t2 from "@/assets/cat-2.jpg";
import t3 from "@/assets/cat-3.jpg";

const films = [
  { title: "Ananya & Arjun", place: "Udaipur", img: t1 },
  { title: "Tara & Nikhil", place: "Jaipur", img: t2 },
  { title: "Saira & Aman", place: "Goa", img: t3 },
];

export function FilmsSection() {
  return (
    <section className="grain bg-cinema px-5 py-28 text-ivory md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>Wedding Films</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1]">
            Films That Let You <em className="font-editorial italic text-taupe">Feel It Again.</em>
          </h2>
        </Reveal>

        <Reveal className="group mt-16 block cursor-pointer" delay={100}>
          <div className="relative aspect-video w-full overflow-hidden bg-espresso">
            <img
              src={poster}
              alt="Poster frame from a destination wedding film"
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-[1400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[1.03] group-hover:opacity-95"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ivory/50 backdrop-blur-sm transition-colors duration-500 group-hover:bg-ivory group-hover:text-cinema md:h-28 md:w-28">
                <Play className="h-5 w-5" strokeWidth={1} />
              </span>
            </span>
            <span className="label-xs absolute bottom-6 left-6 text-ivory/80">
              Feature Film / 06:12
            </span>
          </div>
        </Reveal>

        <div className="label-xs mt-14 flex gap-8 text-taupe">
          <span className="text-ivory">Wedding Films</span>
          <span>Teasers</span>
          <span>Destination Stories</span>
        </div>

        <div className="no-bar mt-8 flex gap-4 overflow-x-auto pb-2">
          {films.map((f) => (
            <div key={f.place} className="hover-zoom w-[70vw] shrink-0 sm:w-[38vw] lg:w-[24vw]">
              <div className="relative aspect-video overflow-hidden bg-espresso">
                <img src={f.img} alt={`${f.title} film still`} loading="lazy" className="h-full w-full object-cover opacity-80" />
              </div>
              <p className="mt-3 font-display text-xl">{f.title}</p>
              <p className="label-xs mt-1 text-taupe">{f.place} — 2026</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
