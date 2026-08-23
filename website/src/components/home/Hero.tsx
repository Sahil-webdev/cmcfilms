import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/video/15157496-hd_1920_1080_25fps.mp4";

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
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* ── Hero content placed in lower center like KnotsbyAMP ── */}
      <div className="relative flex h-full flex-col items-center justify-end px-5 pb-20 md:pb-28 text-center text-white">
        {/* Main Title */}
        <h1
          className="font-display text-[clamp(2rem,5.2vw,4.25rem)] font-medium leading-none tracking-wider uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
        >
          CMC FILMS
        </h1>

        {/* Subtitle */}
        <p
          className="mt-0.5 md:mt-1 font-sans text-[clamp(0.9rem,1.8vw,1.35rem)] font-medium tracking-widest text-white/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] transition-all duration-1000 delay-200 ease-out"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(14px)" }}
        >
          Wedding Storytellers
        </p>
      </div>
    </section>
  );
}
