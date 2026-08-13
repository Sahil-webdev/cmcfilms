import { Link } from "@tanstack/react-router";
import { useInView } from "@/components/Reveal";
import featured from "@/assets/featured.jpg";

export function FeaturedStory() {
  const { ref, inView } = useInView<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      className="grain relative h-[90svh] min-h-[560px] overflow-hidden bg-cinema border-y border-ivory/10"
    >
      <img
        src={featured}
        alt="Lakeside palace wedding ceremony at dusk in Udaipur"
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          inView ? "scale-100 opacity-90" : "scale-105 opacity-70"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cinema via-cinema/40 to-cinema/30" />

      <div
        className={`relative flex h-full flex-col justify-end px-5 pb-16 text-ivory md:px-12 md:pb-24 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
            <span className="label-xs text-gold uppercase tracking-widest">Featured Story</span>
          </div>

          <p className="label-xs mt-4 text-ivory/70 font-mono">
            Ananya &amp; Arjun — Udaipur, Rajasthan <span className="text-gold">/</span> 2026
          </p>

          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] font-light">
            A Celebration Written <em className="font-editorial italic text-gold">in Light.</em>
          </h2>

          <div className="mt-8 flex items-center gap-6">
            <Link
              to="/portfolio"
              className="label-xs border border-ivory/40 bg-ivory/10 px-8 py-4 text-ivory transition-all duration-300 hover:bg-ivory hover:text-cinema hover:border-ivory backdrop-blur-md"
            >
              View Full Story →
            </Link>
            <Link
              to="/films"
              className="label-xs link-underline text-ivory/80 hover:text-gold transition-colors"
            >
              Watch Highlight Film
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
