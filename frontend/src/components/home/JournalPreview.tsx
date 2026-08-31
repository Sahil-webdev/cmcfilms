import { ImageReveal, Reveal, SectionLabel } from "@/components/Reveal";
import { journal } from "@/lib/site-data";

export function JournalPreview() {
  return (
    <section className="bg-background px-5 py-10 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>From The Journal</SectionLabel>
        </Reveal>

        <div className="mt-6 md:mt-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <article className="md:col-span-7">
            <ImageReveal src={journal[0]!.image} alt={journal[0]!.title} className="aspect-[16/11] w-full" />
            <p className="label-xs mt-5 text-taupe">
              {journal[0]!.category} <span className="mx-2 text-gold">/</span> {journal[0]!.date}
            </p>
            <h3 className="mt-3 max-w-lg font-display text-3xl leading-tight md:text-4xl">
              {journal[0]!.title}
            </h3>
            <a href="#" className="label-xs link-underline mt-6 inline-block">
              Read Story →
            </a>
          </article>

          <div className="flex flex-col justify-end gap-12 md:col-span-4 md:col-start-9">
            {journal.slice(1).map((j, i) => (
              <Reveal as="article" key={j.title} delay={i * 120}>
                <div className="hover-zoom aspect-[16/10] w-full">
                  <img src={j.image} alt={j.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="label-xs mt-4 text-taupe">
                  {j.category} <span className="mx-2 text-gold">/</span> {j.date}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{j.title}</h3>
                <a href="#" className="label-xs link-underline mt-4 inline-block">
                  Read Story →
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
