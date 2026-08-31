import { useEffect, useState } from "react";

/** Cinematic fullscreen intro. Shown once per browser session. */
export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("cmc-intro") === "seen") return;
    sessionStorage.setItem("cmc-intro", "seen");
    setGone(false);
    const raf = requestAnimationFrame(() => setMounted(true));
    const t1 = setTimeout(() => setLeaving(true), 1700);
    const t2 = setTimeout(() => setGone(true), 2600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="grain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cinema transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateY(-6%)" : "none",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      <div className="text-center">
        <div className="overflow-hidden">
          <span
            className="block font-display text-[clamp(3rem,10vw,7rem)] leading-[0.9] text-ivory transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: mounted ? "none" : "translateY(100%)", opacity: mounted ? 1 : 0 }}
          >
            CMC
          </span>
        </div>
        <div className="overflow-hidden">
          <span
            className="block font-display text-[clamp(3rem,10vw,7rem)] leading-[0.9] text-gold transition-[transform,opacity] delay-200 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: mounted ? "none" : "translateY(100%)", opacity: mounted ? 1 : 0 }}
          >
            FILMS
          </span>
        </div>
        <p
          className="label-xs mt-8 text-taupe transition-opacity delay-500 duration-700"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          Stories of Love. Told Forever.
        </p>
        <div className="mx-auto mt-8 h-px w-40 bg-ivory/15">
          <div
            className="h-px bg-gold transition-[width] duration-[1600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ width: mounted ? "100%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}
