import { TextReveal } from "@/components/Reveal";

export function QuoteSection() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ivory px-5 py-28 md:px-10">
      <div className="mx-auto w-full max-w-[1300px] text-center">
        <TextReveal
          as="blockquote"
          text={
            "Years from now,\nyou may forget how everything looked.\nBut you'll remember\nhow it felt."
          }
          className="font-display text-[clamp(1.9rem,5vw,4.25rem)] leading-[1.12] text-espresso"
        />
        <p className="mt-14 font-editorial text-2xl italic text-gold">CMC Films</p>
      </div>
    </section>
  );
}
