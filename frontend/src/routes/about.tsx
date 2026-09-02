import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useHeroMedia } from "@/hooks/useHeroMedia";
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Film, Sparkles, Award, Users } from "lucide-react";

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
  const heroMedia = useHeroMedia('about', featured);
  const whyChooseCarouselRef = useRef<HTMLDivElement>(null);
  const whyChoosePauseUntilRef = useRef(0);
  const whyChooseFeatures = [
    { icon: Users, title: "In-House Team", copy: "We never outsource your memories. Every photo and film frame is captured and edited by our dedicated in-house team." },
    { icon: Camera, title: "Cinema Gear", copy: "We use 4K full-frame cinema cameras, anamorphic lenses, studio lighting, and audio equipment for rich production value." },
    { icon: Award, title: "12+ Years of Experience", copy: "More than a decade of thoughtfully preserving real celebrations, emotions, and family memories." },
    { icon: Film, title: "200+ Weddings Filmed", copy: "Over 200 love stories captured with the same care from the first frame to the final film." },
    { icon: Sparkles, title: "20+ Shoot Destinations", copy: "From intimate hometown ceremonies to destination weddings across India and beyond." },
    { icon: Users, title: "100% In-House Crafting", copy: "Your photographs and films are created, edited, and delivered by our dedicated in-house team." },
  ];

  const moveWhyChooseCarousel = (direction: 'left' | 'right') => {
    const carousel = whyChooseCarouselRef.current;
    if (!carousel) return;
    whyChoosePauseUntilRef.current = Date.now() + 4500;
    carousel.scrollBy({ left: direction === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frameId = 0;
    let previousTime = performance.now();
    const scroll = (time: number) => {
      const carousel = whyChooseCarouselRef.current;
      const elapsed = time - previousTime;
      previousTime = time;
      if (carousel && Date.now() >= whyChoosePauseUntilRef.current) {
        const loopPoint = carousel.scrollWidth / 2;
        if (loopPoint > 0) {
          const nextPosition = carousel.scrollLeft + (elapsed * 0.04);
          carousel.scrollLeft = nextPosition >= loopPoint ? nextPosition - loopPoint : nextPosition;
        }
      }
      frameId = window.requestAnimationFrame(scroll);
    };
    frameId = window.requestAnimationFrame(scroll);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-poppins selection:bg-[#D8D3CB] min-h-screen">
      
      {/* ── 1. HERO SECTION (CLEAR VIVID IMAGE WITH CLEAN SINGLE ABOUT US TITLE) ── */}
      <section className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full overflow-hidden flex items-center justify-center text-center px-6">
        {/* Clear Vivid Background Image */}
        <img
          src={heroMedia}
          alt="CMC FILMS Studio Background"
          className="absolute inset-0 h-full w-full object-cover object-center scale-100"
        />

      </section>

      {/* ── 2. MAIN STORY & PHOTO SECTION (2-COLUMN REFERENCE MATCH) ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Studio Paragraph & Skills */}
          <div className="lg:col-span-7 space-y-8 relative">
            
            <div className="relative">
              <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl text-[#171717] font-extrabold leading-[1.12] relative z-10">
                Wedding photography <br />
                specialists since 2018.
              </h2>
            </div>

            {/* Studio Brand Name Subheading */}
            <div className="space-y-3 pt-2">
              <span className="font-poppins text-xs uppercase tracking-[0.18em] text-[#C47A65] font-semibold block">
                CMC FILMS
              </span>

              <p className="text-sm sm:text-base text-[#55504A] font-normal leading-relaxed">
                My journey into photography began when I was just in 7th grade, when I started learning photography with my Mama Ji. I would accompany him to weddings and slowly became fascinated by the way photographs and wedding films captured real emotions and memories. What started as simple curiosity gradually turned into a genuine passion for photography and filmmaking.
              </p>
              <p className="text-sm sm:text-base text-[#55504A] font-normal leading-relaxed">
                After school, I would spend my time at his studio, constantly observing and asking the editors how everything worked. At that time, wedding videos were created using DVC cameras, cassettes, and video mixing systems. I became especially interested in editing and started learning by watching the studio staff. Once they left in the evening, I would stay back, use the computer, experiment with editing, make mistakes, and keep trying until I understood how things worked.
              </p>
              <p className="text-sm sm:text-base text-[#55504A] font-normal leading-relaxed">
                Over time, those countless hours of practice turned into real skills. I learned photography, videography, and editing not through a formal course, but through observation, curiosity, practice, and countless late nights. What began as a small opportunity to learn alongside my Mama Ji eventually became my profession and my passion. Today, I continue to create photographs and films with the same curiosity and dedication that first inspired me when I was in 7th grade.
              </p>
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
                <span className="text-xs font-poppins uppercase tracking-widest text-[#68645E] font-semibold">
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
          <h2 className="font-montserrat text-3xl sm:text-5xl text-[#171717] font-extrabold">
            WHY CHOOSE US
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => moveWhyChooseCarousel('left')}
            aria-label="Previous reason"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white shadow-lg transition hover:bg-[#C47A65] sm:-left-5"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => moveWhyChooseCarousel('right')}
            aria-label="Next reason"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white shadow-lg transition hover:bg-[#C47A65] sm:-right-5"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        <div ref={whyChooseCarouselRef} className="why-choose-carousel" aria-label="Why choose CMC Films">
          <div className="why-choose-carousel-track">
          {[...whyChooseFeatures, ...whyChooseFeatures].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article key={`${feature.title}-${index}`} className="why-choose-card bg-white p-8 rounded-2xl border border-[#D8D3CB]/60 shadow-sm space-y-4 hover:border-[#C47A65]/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D8D3CB] flex items-center justify-center text-[#C47A65]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-league text-2xl text-[#171717] font-bold">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-[#55504A] font-normal leading-relaxed">{feature.copy}</p>
              </article>
            );
          })}
          </div>
        </div>
        </div>
      </section>

      {/* ── 4. EMBEDDED CONTACT & ENQUIRY FORM SECTION ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto space-y-12">
        <AboutContactForm />
      </section>

    </main>
  );
}

// ── ABOUT PAGE CONTACT ENQUIRY FORM ──
function AboutContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fields = [
    { name: "name", label: "Your Name", type: "text", required: true, placeholder: "e.g. Rahul Sharma" },
    { name: "partner", label: "Partner's Name", type: "text", placeholder: "e.g. Ananya Patel" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "e.g. rahul@example.com" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
    { name: "date", label: "Wedding Date", type: "date", placeholder: "Select Date" },
    { name: "city", label: "Wedding City", type: "text", placeholder: "e.g. Udaipur, Rajasthan" },
    { name: "venue", label: "Venue", type: "text", placeholder: "e.g. City Palace / Leela Palace" },
    { name: "eventType", label: "Event Type", type: "text", placeholder: "e.g. 3-Day Wedding / Pre-Wedding" },
    { name: "referral", label: "How Did You Find Us?", type: "text", placeholder: "e.g. Instagram / Friend recommendation" },
  ] as const;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("email")) {
      setError("Please share at least your name and email.");
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <div className="bg-[#FAF8F5] p-6 sm:p-10 md:p-14 rounded-3xl border border-[#261E1E]/12 shadow-xl max-w-5xl mx-auto space-y-8 text-left">
      <div className="space-y-2.5 border-b border-[#261E1E]/12 pb-6">
        <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#922A2F] font-bold block">
          GET IN TOUCH
        </span>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#261E1E] font-normal leading-tight">
          Tell Us Your Story
        </h2>
        <p className="text-xs sm:text-sm text-[#4A453F] font-light leading-relaxed max-w-xl">
          Share a little about your celebration. We reply personally to every inquiry, usually within 24 to 48 hours.
        </p>
      </div>

      {sent ? (
        <div className="border border-[#922A2F]/30 bg-white p-8 sm:p-12 rounded-2xl text-center space-y-4 shadow-sm animate-in fade-in">
          <div className="w-14 h-14 bg-[#922A2F]/10 text-[#922A2F] rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-7 h-7 fill-[#922A2F]" />
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-[#261E1E] font-normal">Thank You!</h3>
          <p className="text-xs sm:text-sm text-[#4A453F] font-light max-w-md mx-auto leading-relaxed">
            Your enquiry has been received by CMC FILMS. We will reach out to you directly at the email provided.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {fields.map((f) => (
              <div key={f.name} className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-[0.16em] text-[#261E1E]/80 font-bold">
                  {f.label}
                  {"required" in f && f.required ? <span className="text-[#922A2F]"> *</span> : null}
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required={"required" in f ? f.required : false}
                  className="w-full bg-white border border-[#261E1E]/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#261E1E] placeholder:text-[#261E1E]/35 outline-none transition-all duration-300 focus:border-[#922A2F] focus:ring-2 focus:ring-[#922A2F]/10 shadow-2xs"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-[11px] font-mono uppercase tracking-[0.16em] text-[#261E1E]/80 font-bold">
              Tell Us About Your Celebration &amp; Vision
            </label>
            <textarea
              name="story"
              rows={4}
              placeholder="Describe your wedding functions, venue, vision, budget range, or any specific details..."
              className="w-full bg-white border border-[#261E1E]/15 rounded-2xl p-4 text-xs sm:text-sm text-[#261E1E] placeholder:text-[#261E1E]/35 outline-none transition-all duration-300 focus:border-[#922A2F] focus:ring-2 focus:ring-[#922A2F]/10 shadow-2xs resize-none"
            />
          </div>

          {error && <p className="text-xs font-mono text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">{error}</p>}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-[#261E1E]/10">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#261E1E] hover:bg-[#922A2F] text-white px-9 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2.5 group"
            >
              <span>Send Enquiry</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="text-xs text-[#55504A] flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 font-sans">
              <span>Email: <a href="mailto:cmcfilms771@gmail.com" className="font-semibold text-[#261E1E] hover:underline">cmcfilms771@gmail.com</a></span>
              <span className="hidden sm:inline">•</span>
              <span>Phone: <a href="tel:+917425940636" className="font-semibold text-[#261E1E] hover:underline">+91 74259 40636</a></span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
