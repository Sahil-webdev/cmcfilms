import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="grain relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-cinema">
      {/* ── Fallback still image (shown until video loads) ── */}
      <img
        src={heroImg}
        alt=""
        aria-hidden
        width={1920}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-0" : "opacity-90"
        }`}
      />

      {/* ── Background Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-80" : "opacity-0"
        }`}
        aria-hidden
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Cinematic gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema/75 via-cinema/30 to-cinema/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-cinema/30 via-transparent to-cinema/30 pointer-events-none" />

      {/* ── Hero content ── */}
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-ivory pt-16">
        {/* Label */}
        <div
          className="flex items-center gap-3 transition-all duration-700 ease-out"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(16px)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
          <span className="label-xs text-gold tracking-[0.3em] uppercase">
            Luxury Wedding Photography &amp; Cinema
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,9vw,8rem)] font-light leading-[0.92] tracking-tight">
          {["Love, Emotion", "& Legacy."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transitionDelay: `${120 + i * 140}ms`,
                  transform: ready ? "none" : "translateY(100%)",
                  opacity: ready ? 1 : 0,
                }}
              >
                {i === 1 ? (
                  <em className="font-editorial italic text-gold font-normal">{line}</em>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/80 transition-all duration-700 delay-300 md:text-base font-sans font-light"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(12px)" }}
        >
          Honest emotions. Timeless frames. Crafted with quiet artistic devotion for generations.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(12px)" }}
        >
          <Link
            to="/portfolio"
            className="label-xs border border-ivory bg-ivory px-9 py-4 text-espresso transition-all duration-300 hover:bg-gold hover:border-gold hover:text-cinema shadow-lg"
          >
            Explore Portfolio
          </Link>
          <Link
            to="/films"
            className="label-xs border border-ivory/40 bg-cinema/40 px-9 py-4 text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory/15 backdrop-blur-md"
          >
            Watch Films 🎬
          </Link>
        </div>

        {/* Floating Stats Bar */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-5 hidden md:flex items-center justify-between border-t border-ivory/15 pt-4 transition-all duration-700 delay-700"
          style={{ opacity: ready ? 1 : 0 }}
        >
          <div className="flex items-center gap-12 text-left">
            <div>
              <p className="font-display text-2xl text-gold font-light">250+</p>
              <p className="label-xs text-ivory/60 font-mono text-[10px]">Weddings Documented</p>
            </div>
            <div className="h-6 w-px bg-ivory/20" />
            <div>
              <p className="font-display text-2xl text-gold font-light">18+</p>
              <p className="label-xs text-ivory/60 font-mono text-[10px]">Global Destinations</p>
            </div>
            <div className="h-6 w-px bg-ivory/20" />
            <div>
              <p className="font-display text-2xl text-gold font-light">100%</p>
              <p className="label-xs text-ivory/60 font-mono text-[10px]">Cinematic Craft</p>
            </div>
          </div>

          {/* Video credit */}
          <p className="label-xs text-ivory/30 text-[9px] font-mono">
            Video: viresh studio / Pexels
          </p>
        </div>
      </div>
    </section>
  );
}
