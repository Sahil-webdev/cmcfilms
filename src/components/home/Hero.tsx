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
    <section className="grain relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cinema">
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

      {/* ── Hero content (Ultra-clean brand focus) ── */}
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-ivory">
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
      </div>
    </section>
  );
}
