import { TextReveal } from "@/components/Reveal";

export function QuoteSection() {
  return (
    <section className="relative flex min-h-[42svh] md:min-h-[60svh] items-center justify-center bg-ivory px-5 py-12 md:px-10 md:py-24 overflow-hidden border-b border-espresso/10">
      {/* ── Circuit Background Overlay ── */}
      <div className="circuit-background opacity-60" />

      {/* Subtle radial center mask to keep text ultra-crisp */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-ivory)_35%,transparent_85%)] opacity-80" />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] text-center">
        <TextReveal
          as="blockquote"
          text={
            "Years from now,\nyou may forget how everything looked.\nBut you'll remember\nhow it felt."
          }
          className="font-display text-[clamp(1.75rem,5.2vw,4.5rem)] leading-[1.12] text-espresso font-light"
        />
        <p className="mt-6 md:mt-12 font-editorial text-xl md:text-3xl italic text-gold font-normal">
          CMC Films
        </p>
      </div>
    </section>
  );
}
