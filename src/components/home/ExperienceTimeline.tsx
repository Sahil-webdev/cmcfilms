import { Reveal, SectionLabel } from "@/components/Reveal";
import { experience } from "@/lib/site-data";

export function ExperienceTimeline() {
  return (
    <section className="bg-background px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>The Experience</SectionLabel>
          <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1]">
            Five quiet steps,
            <br />
            <em className="font-editorial italic text-taupe">from hello to heirloom.</em>
          </h2>
        </Reveal>

        <ol className="mt-20 grid gap-10 border-t border-border pt-10 md:grid-cols-5 md:gap-6">
          {experience.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 90} className="relative md:pr-6">
              <span className="label-xs text-gold">{s.no}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              <span className="absolute -top-[41px] left-0 hidden h-px w-full bg-gold/40 md:block" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
