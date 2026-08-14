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
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-ivory pt-12">
        {/* Main Grand Title */}
        <h1
          className="font-display text-[clamp(3.5rem,11vw,9.5rem)] font-light leading-[0.88] tracking-widest text-[#FAF8F3] uppercase transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(24px)" }}
        >
          CMC FILMS
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 font-editorial text-[clamp(1.6rem,3.8vw,2.8rem)] italic text-[#E5CA92] font-normal tracking-wide transition-all duration-1000 delay-200 ease-out drop-shadow-md"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(16px)" }}
        >
          Stories for love Told forever
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(12px)" }}
        >
          <Link
            to="/portfolio"
            className="label-xs border border-ivory bg-ivory px-9 py-4 text-espresso transition-all duration-300 hover:bg-[#E5CA92] hover:border-[#E5CA92] hover:text-[#27231F] shadow-lg"
          >
            Explore Portfolio
          </Link>
          <Link
            to="/films"
            className="label-xs border border-ivory/40 bg-cinema/40 px-9 py-4 text-ivory transition-all duration-300 hover:border-[#E5CA92] hover:text-[#E5CA92] hover:bg-ivory/15 backdrop-blur-md"
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
