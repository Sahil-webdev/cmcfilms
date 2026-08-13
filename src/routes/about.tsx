import { createFileRoute } from "@tanstack/react-router";
import { ImageReveal, Reveal, SectionLabel, TextReveal } from "@/components/Reveal";
import hero from "@/assets/story-3.jpg";
import a from "@/assets/story-1.jpg";
import b from "@/assets/cat-2.jpg";
import { studio } from "@/lib/site-data";

const title = "Behind The Lens — About CMC FILMS";
const description =
  "The people, philosophy and approach behind CMC FILMS, a luxury wedding photography and filmmaking studio.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const sections = [
  {
    label: "Our Philosophy",
    heading: "Photograph the feeling, not the schedule.",
    copy: "We work quietly. We wait for the second after the posed one — the exhale, the glance, the hand that finds another hand. That is the frame we are here for.",
  },
  {
    label: "Our Story",
    heading: "A studio built around a handful of weddings a year.",
    copy: "CMC FILMS began with a simple frustration: weddings were being covered, not remembered. We chose to work with fewer couples so that each celebration receives full attention from the first call to the final album.",
  },
  {
    label: "Our Approach",
    heading: "Prepared enough to be invisible.",
    copy: "We scout light, learn your rituals and map the day in advance — so that when it begins, we can disappear into it.",
  },
];

function About() {
  return (
    <main>
      <section className="grain relative h-[80svh] min-h-[520px] overflow-hidden bg-cinema">
        <img src={hero} alt="Portrait from a CMC FILMS wedding" className="h-full w-full object-cover opacity-85" />
        <div className="absolute inset-0 bg-cinema/45" />
        <div className="absolute inset-x-0 bottom-16 px-5 text-ivory md:px-10">
          <span className="label-xs text-gold">{studio.name}</span>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95]">
            Behind The Lens
          </h1>
        </div>
      </section>

      <section className="bg-background px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <TextReveal
            as="p"
            text={"We photograph weddings because\nnothing else holds this much feeling\nin a single afternoon."}
            className="max-w-4xl font-display text-[clamp(1.9rem,5vw,4rem)] leading-[1.08]"
          />

          <div className="mt-28 space-y-28">
            {sections.map((s, i) => (
              <div key={s.label} className="grid gap-10 md:grid-cols-12 md:gap-16">
                <div className={i % 2 === 0 ? "md:col-span-5" : "md:col-span-5 md:order-2 md:col-start-8"}>
                  <ImageReveal
                    src={i % 2 === 0 ? a : b}
                    alt={s.label}
                    className="aspect-[3/4] w-full"
                  />
                </div>
                <div className={i % 2 === 0 ? "flex flex-col justify-center md:col-span-5 md:col-start-8" : "flex flex-col justify-center md:col-span-5 md:order-1"}>
                  <Reveal>
                    <SectionLabel>{s.label}</SectionLabel>
                    <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.05]">
                      {s.heading}
                    </h2>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {s.copy}
                    </p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>

          <Reveal className="mt-32 border-t border-border pt-12">
            <SectionLabel>The People Behind CMC</SectionLabel>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {["[Founder Name] — Photography", "[Name] — Cinematography", "[Name] — Studio & Albums"].map((p) => (
                <div key={p}>
                  <h3 className="font-display text-2xl">{p.split(" — ")[0]}</h3>
                  <p className="label-xs mt-2 text-taupe">{p.split(" — ")[1]}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
