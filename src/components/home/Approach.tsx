import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export function Approach() {
  const [active, setActive] = useState(0);
  const current = services[active]!;

  return (
    <section className="bg-background px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige md:sticky md:top-28 md:self-start">
          {services.map((s, i) => (
            <img
              key={s.no}
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1]">
              Your Story.
              <br />
              <em className="font-editorial italic text-taupe">Our Perspective.</em>
            </h2>
          </Reveal>

          <ul className="mt-12">
            {services.map((s, i) => (
              <li key={s.no} className="border-t border-border last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={i === active}
                  className="group flex w-full items-baseline gap-6 py-6 text-left"
                >
                  <span className="label-xs w-8 shrink-0 text-gold">{s.no}</span>
                  <span className="flex-1">
                    <span
                      className="block font-display text-2xl transition-colors duration-500 md:text-3xl"
                      style={{ color: i === active ? "var(--espresso)" : "var(--taupe)" }}
                    >
                      {s.title}
                    </span>
                    <span
                      className="grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                      style={{
                        gridTemplateRows: i === active ? "1fr" : "0fr",
                        opacity: i === active ? 1 : 0,
                      }}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-3 text-sm leading-relaxed text-muted-foreground">
                          {s.copy}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
