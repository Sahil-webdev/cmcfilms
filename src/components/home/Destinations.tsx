import { destinations } from "@/lib/site-data";
import { Reveal, SectionLabel } from "@/components/Reveal";
import img from "@/assets/featured.jpg";

export function Destinations() {
  return (
    <section className="grain relative overflow-hidden bg-cinema py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionLabel>Destination Weddings</SectionLabel>
          <h2 className="mt-8 font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1]">
            Love Has No Address.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/70">
            From royal palaces in Rajasthan to intimate celebrations further afield. Locations shown
            are indicative and kept editable.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-16 h-[52vh] min-h-[320px] w-full">
        <img src={img} alt="Palace wedding by the lake" loading="lazy" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="ticker flex w-max gap-14 whitespace-nowrap">
            {[...destinations, ...destinations].map((d, i) => (
              <span
                key={`${d}-${i}`}
                className="font-display text-[clamp(2.5rem,7vw,6rem)] uppercase leading-none tracking-tight text-ivory/85"
              >
                {d}
                <span className="mx-6 align-middle text-gold">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
