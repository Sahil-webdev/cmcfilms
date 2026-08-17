import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);

    // Ensure browser autoplay policy is satisfied
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented; fallback poster is shown
        });
      }
    }

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
      {/* ── Crystal Clear Background Video with Poster Fallback ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Minimal Subtle Gradient for Text Readability (Just like KnotsbyAMP) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35 pointer-events-none" />

      {/* ── Hero content placed in lower center like KnotsbyAMP ── */}
      <div className="relative flex h-full flex-col items-center justify-end px-5 pb-20 md:pb-28 text-center text-white">
        {/* Main Title */}
        <h1
          className="font-display text-[clamp(3.2rem,8.5vw,6.5rem)] font-normal md:font-medium leading-none tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
        >
          CMC Films
        </h1>

        {/* Subtitle */}
        <p
          className="mt-2.5 md:mt-3.5 font-display text-[clamp(1.15rem,2.8vw,2.1rem)] font-light tracking-wide text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] transition-all duration-1000 delay-200 ease-out"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(14px)" }}
        >
          Wedding Storytellers
        </p>
      </div>
    </section>
  );
}
