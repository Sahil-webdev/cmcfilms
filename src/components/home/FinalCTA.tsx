import { Link } from "@tanstack/react-router";
import img from "@/assets/hero.jpg";
import { TextReveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="grain relative flex min-h-[92svh] items-center overflow-hidden bg-cinema">
      <img src={img} alt="Couple at golden hour" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-cinema/65" />
      <div className="relative mx-auto w-full max-w-[1600px] px-5 text-center text-ivory md:px-10">
        <p className="label-xs text-gold">Your story deserves to be remembered.</p>
        <TextReveal
          as="h2"
          text={"Let's Create Something\nThat Outlives The Moment."}
          className="mx-auto mt-8 max-w-5xl font-display text-[clamp(2.25rem,7vw,6rem)] leading-[0.98]"
        />
        <Link
          to="/contact"
          className="label-xs mt-12 inline-block border border-ivory bg-ivory px-10 py-4 text-espresso transition-colors duration-500 hover:bg-transparent hover:text-ivory"
        >
          Tell Us Your Story
        </Link>
        <p className="label-xs mt-10 text-ivory/60">Wedding Photography &amp; Films — [Studio Location]</p>
      </div>
    </section>
  );
}
