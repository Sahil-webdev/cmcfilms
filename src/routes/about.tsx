import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Film, Heart, Award, Sparkles, Compass } from "lucide-react";

// Real Shoot Photos
import shoot1 from "@/assets/shoot/IMG_5570.JPG";
import shoot2 from "@/assets/shoot/IMG_5603.JPG";
import shoot3 from "@/assets/shoot/IMG_5636.JPG";
import shoot4 from "@/assets/shoot/IMG_5712.JPG";
import shoot9 from "@/assets/shoot/_04A4901.JPG";

const title = "About CMC FILMS — Luxury Wedding Storytellers";
const description =
  "Discover the people, philosophy, and craft behind CMC FILMS — capturing unscripted wedding cinema and timeless portraits.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] min-h-screen">
      
      {/* ── 1. EDITORIAL HERO SECTION ── */}
      <section className="relative pt-24 sm:pt-32 pb-20 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] overflow-hidden">
        
        {/* Background Subtle Marquee Text */}
        <style>{`
          @keyframes marquee-about {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-about-track {
            animation: marquee-about 100s linear infinite;
            will-change: transform;
          }
        `}</style>
        
        <div className="pointer-events-none select-none absolute top-6 inset-x-0 overflow-hidden z-0 flex items-center opacity-[0.05]">
          <div className="marquee-about-track flex items-center gap-12 whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="uppercase tracking-tighter text-[#171717]"
                style={{ fontSize: "clamp(6rem, 14vw, 12rem)", lineHeight: 1, fontFamily: "'Anton', sans-serif" }}
              >
                CMC FILMS STORYTELLERS
              </span>
            ))}
          </div>
        </div>

        {/* Hero Header Content */}
        <div className="relative z-10 space-y-6 max-w-4xl pt-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-semibold">
            ABOUT THE STUDIO
          </span>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171717] font-normal leading-[1.05]">
            Stories told with <br />
            <em className="font-normal text-[#C47A65]" style={{ fontFamily: "'Alex Brush', cursive", fontSize: "1.25em" }}>
              patience & feeling
            </em>
          </h1>

          <p className="text-base sm:text-lg text-[#55504A] font-sans font-light leading-relaxed max-w-2xl pt-2">
            We are a boutique wedding photography & filmmaking studio based in India. We capture celebrations as they unfold naturally — honest, graceful, and timeless.
          </p>
        </div>
      </section>

      {/* ── 2. FOUNDER'S LETTER & PHILOSOPHY SECTION ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Photo Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md shadow-2xl bg-white p-3 sm:p-4 rounded-[4px] border border-black/10">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-[#D8D3CB]">
                <img
                  src={shoot9}
                  alt="Sahil Sharma behind the lens"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
                  Sahil Sharma · Founder & Creative Lead
                </span>
              </div>
            </div>
          </div>

          {/* Right: Human Letter / Note */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-semibold block">
              OUR BELIEF
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] font-normal leading-snug">
              “A great wedding film shouldn’t feel like a movie set. It should feel like your real day, remembered beautifully.”
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#55504A] font-light leading-relaxed">
              <p>
                When we founded CMC Films, we chose a deliberate direction: we would never treat a wedding like a factory production. We limit ourselves to only 15 to 20 weddings a year.
              </p>
              <p>
                That way, we can be there — truly present — for every tearful glance during the pheras, every quiet smile between rituals, and every unscripted laugh on the dance floor.
              </p>
              <p>
                No awkward poses or staged moments. We observe quietly, capturing frames that will feel just as moving 30 years from now as they do today.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8D3CB]/60 flex items-center justify-between">
              <div>
                <h3 className="font-editorial text-xl text-[#171717]">Sahil Sharma</h3>
                <p className="text-xs font-mono text-[#68645E] uppercase tracking-widest">Lead Cinematographer & Director</p>
              </div>
              <span className="text-[#C47A65] text-3xl" style={{ fontFamily: "'Alex Brush', cursive" }}>
                CMC Studio
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. THREE GUIDING PILLARS ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-semibold">
            HOW WE WORK
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717]">
            Our Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">01. Unscripted & Natural</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              We never interrupt real moments to ask for a redo. We work quietly in the background, allowing you to enjoy your day with the people you love.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">02. Intentional & Limited</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              By capping our calendar, every single couple gets our full creative energy, meticulous color grading, and custom sound design.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <Film className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">03. Heirloom Cinema</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              We shoot on full-frame cinema cameras and edit with rich, warm film tones that stand the test of time without chasing temporary trends.
            </p>
          </div>

        </div>
      </section>

      {/* ── 4. KEY STATS STRIP ── */}
      <section className="py-16 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">8+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Years of Crafting</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">150+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Weddings Filmed</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">20+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Destinations Covered</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">100%</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Unscripted Moments</p>
          </div>
        </div>
      </section>

      {/* ── 5. TEAM BEHIND THE LENS ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] space-y-16">
        
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-semibold">
            THE TEAM
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
            The People Behind The Cameras
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Member 1 */}
          <div className="space-y-4 group">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB] rounded-xl border border-black/5">
              <img src={shoot1} alt="Sahil Sharma" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl text-[#171717]">Sahil Sharma</h3>
              <p className="text-xs font-mono text-[#C47A65] uppercase tracking-widest mt-0.5">Founder & Lead Director</p>
              <p className="text-xs text-[#55504A] font-light mt-2 leading-relaxed">
                Focuses on quiet compositions, natural lighting, and directing the overall cinematic aesthetic.
              </p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="space-y-4 group">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB] rounded-xl border border-black/5">
              <img src={shoot2} alt="Ritika Sharma" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl text-[#171717]">Ritika Sharma</h3>
              <p className="text-xs font-mono text-[#C47A65] uppercase tracking-widest mt-0.5">Cinematographer & Colorist</p>
              <p className="text-xs text-[#55504A] font-light mt-2 leading-relaxed">
                Specializes in intimate candidate portraits, color harmony, and delicate ritual details.
              </p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="space-y-4 group">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB] rounded-xl border border-black/5">
              <img src={shoot3} alt="Vikram Singh" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl text-[#171717]">Vikram Singh</h3>
              <p className="text-xs font-mono text-[#C47A65] uppercase tracking-widest mt-0.5">Sound & Aerial Operator</p>
              <p className="text-xs text-[#55504A] font-light mt-2 leading-relaxed">
                Captures high-fidelity live wedding soundscapes, vows, and breathtaking drone perspectives.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. SIMPLE WARM CTA ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-semibold">
          LET'S CONNECT
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717] font-normal leading-tight max-w-3xl mx-auto">
          Have a date in mind? <br />
          <em className="font-normal text-[#C47A65]" style={{ fontFamily: "'Alex Brush', cursive", fontSize: "1.2em" }}>
            Let's talk about your story.
          </em>
        </h2>

        <p className="text-xs sm:text-sm text-[#55504A] font-light max-w-md mx-auto leading-relaxed">
          We are currently taking bookings for 2026 & 2027 wedding dates across India and destination locations worldwide.
        </p>

        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#171717] text-white hover:bg-[#C47A65] text-xs font-mono font-semibold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Enquire For Your Date</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}

