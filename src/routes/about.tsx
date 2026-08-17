import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Film, Sparkles, Award, Heart, ShieldCheck, Users } from "lucide-react";

// Image Imports
import couplesHeroCustom from "@/assets/couples-hero-custom.jpg";
import shoot1 from "@/assets/shoot/IMG_5570.JPG";
import shoot2 from "@/assets/shoot/IMG_5603.JPG";
import shoot3 from "@/assets/shoot/IMG_5636.JPG";
import shoot4 from "@/assets/shoot/IMG_5712.JPG";
import featured from "@/assets/featured.jpg";

const title = "About Us — CMC FILMS Wedding Storytellers";
const description =
  "The wedding photography specialists crafting timeless wedding cinema and authentic love stories since 2018.";

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
  const skillsList = [
    { title: "Cinematic Wedding Films", percentage: 98 },
    { title: "Candid & Editorial Photography", percentage: 96 },
    { title: "Pre-Wedding Concept Shoots", percentage: 95 },
    { title: "Color Grading & Sound Design", percentage: 100 },
  ];

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] min-h-screen">
      
      {/* ── 1. HERO SECTION (DARK CINEMA WITH CURSIVE WATERMARK OVERLAY) ── */}
      <section className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full bg-[#0C0D10] overflow-hidden flex items-center justify-center text-center px-6">
        {/* Background Image with Dark Vignette */}
        <img
          src={featured}
          alt="CMC FILMS Studio Background"
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0C0D10]" />

        {/* Centered Cursive Overlay & Main Title */}
        <div className="relative z-10 space-y-2 max-w-3xl">
          {/* Cursive Background Watermark */}
          <div className="relative flex items-center justify-center">
            <span
              className="text-white/20 select-none pointer-events-none text-7xl sm:text-9xl md:text-[11rem] leading-none absolute -top-8 sm:-top-16 font-normal"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              About
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal relative z-10 tracking-tight">
              About Us
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#C47A65] pt-4 font-semibold">
            CMC FILMS · WEDDING STORYTELLERS
          </p>
        </div>
      </section>

      {/* ── 2. MAIN STORY & PHOTO SECTION (2-COLUMN REFERENCE MATCH) ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Watermark, Studio Paragraph & Skills */}
          <div className="lg:col-span-7 space-y-8 relative">
            
            {/* Background Watermark Text behind Heading */}
            <div className="relative">
              <span
                className="text-[#171717]/[0.06] select-none pointer-events-none text-6xl sm:text-8xl md:text-9xl leading-none absolute -top-6 -left-2 font-normal z-0"
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                About Us
              </span>

              <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] relative z-10">
                The wedding photography <br className="hidden sm:block" />
                specialists since 2018.
              </h2>
            </div>

            {/* Studio Brand Name Subheading */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-bold block">
                CMC FILMS
              </span>

              <p className="text-sm sm:text-base text-[#55504A] font-light leading-relaxed">
                Our journey of becoming a premium wedding photography & filmmaking studio began years ago. Since then, we have creatively captured the beginning of conjugal lives of 100s of couples across India and internationally. We have been successful in winning the admiration and respect of our clients because we have an in-house team of dedicated photographers, videographers, and cinematographers.
              </p>
              <p className="text-sm sm:text-base text-[#55504A] font-light leading-relaxed">
                We own and use only the most advanced cinema lighting equipment, anamorphic prime lenses, and 4K full-frame camera systems. We provide end-to-end services for all aspects of photography and film using our in-house team of trained photo and movie editors. Our level of professionalism and courtesy makes you and your guests feel completely at ease while being captured.
              </p>
            </div>

            {/* Skills / Strengths Progress Bars */}
            <div className="pt-6 space-y-6">
              <h3 className="font-editorial text-2xl text-[#171717] font-normal">
                Some Of Our Strengths
              </h3>

              <div className="space-y-5">
                {skillsList.map((skill) => (
                  <div key={skill.title} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#171717] font-semibold">
                      <span>{skill.title}</span>
                      <span className="text-[#C47A65]">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#E5E0D8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#C47A65] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Tall Couple Photo Frame (Matching Reference) */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
            <div className="relative w-full max-w-md shadow-2xl bg-white p-3 sm:p-4 rounded-2xl border border-black/10">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#D8D3CB]">
                <img
                  src={couplesHeroCustom}
                  alt="CMC FILMS Couple Portrait"
                  className="h-full w-full object-cover object-top transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
                  Real Couple Shoot · CMC FILMS
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. WHY CHOOSE CMC FILMS (4 FEATURE CARDS) ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-semibold">
            WHY CHOOSE US
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717]">
            Crafting Memories With Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">In-House Team</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              We never outsource your memories. Every photo and film frame is captured and edited by our dedicated in-house team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">Cinema Gear</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              We use 4K full-frame cinema cameras, anamorphic lenses, studio lighting, and audio equipment for rich production value.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">Unscripted Tones</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              No awkward forced posing. We document genuine emotions, candid laughter, and quiet moments as they naturally occur.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#171717]">Worldwide Travel</h3>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              Based in India and available for destination weddings worldwide — Jaipur, Udaipur, Goa, Dubai, and beyond.
            </p>
          </div>

        </div>
      </section>

      {/* ── 4. KEY STATS STRIP ── */}
      <section className="py-16 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">8+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Years Experience</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">150+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Weddings Filmed</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">20+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Shoot Destinations</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">100%</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">In-House Crafting</p>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION (DARK CINEMA BANNER MATCHING REFERENCE HERO) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#0C0D10] text-white p-10 sm:p-16 md:p-20 text-center space-y-6 shadow-2xl border border-white/10">
          <img
            src={shoot1}
            alt="CMC Films Celebration"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/60 to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-semibold">
              BEGIN YOUR STORY WITH US
            </span>

            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-tight">
              Let's create something <br />
              <em className="font-normal text-[#C47A65]" style={{ fontFamily: "'Alex Brush', cursive", fontSize: "1.25em" }}>
                timeless together.
              </em>
            </h2>

            <p className="text-xs sm:text-sm text-white/80 font-light max-w-md mx-auto leading-relaxed">
              We are currently booking wedding & couple shoot dates across India & international destinations.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C47A65] text-white hover:bg-white hover:text-[#171717] text-xs font-mono font-semibold uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Enquire For Your Wedding</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


