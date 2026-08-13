import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { SectionLabel } from "@/components/Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ivory px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel>In Their Words</SectionLabel>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-beige">
              {testimonials.map((x, xi) => (
                <img
                  key={x.name + xi}
                  src={x.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-[clip-path,opacity] duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                  style={{
                    clipPath: xi === i ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
                    opacity: xi === i ? 1 : 0,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <blockquote
              key={i}
              className="font-display text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1] animate-fade-in"
            >
              “{t.quote}”
            </blockquote>
            <p className="label-xs mt-10 text-taupe">
              {t.name} <span className="mx-2 text-gold">/</span> {t.place}{" "}
              <span className="mx-2 text-gold">/</span> {t.year}
            </p>

            <div className="mt-10 flex items-center gap-6">
              <button onClick={() => go(-1)} aria-label="Previous testimonial" className="border border-border p-3 transition-colors hover:bg-espresso hover:text-ivory">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.2} />
              </button>
              <button onClick={() => go(1)} aria-label="Next testimonial" className="border border-border p-3 transition-colors hover:bg-espresso hover:text-ivory">
                <ArrowRight className="h-4 w-4" strokeWidth={1.2} />
              </button>
              <span className="label-xs text-taupe">
                0{i + 1} — 0{testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
