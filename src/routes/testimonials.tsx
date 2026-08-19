import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
import hero from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import story1 from "@/assets/story-1.jpg";
import pin1 from "@/assets/pinterest/pin1.jpg";
import pin2 from "@/assets/pinterest/pin2.jpg";
import pin3 from "@/assets/pinterest/pin3.jpg";
import pin4 from "@/assets/pinterest/pin4.jpg";
import pin5 from "@/assets/pinterest/pin5.jpg";

const title = "Kind Words & Reviews — CMC FILMS";
const description =
  "Read genuine reviews and love stories from real couples who trusted CMC FILMS to document their wedding celebrations across India and destination locations worldwide.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

export interface TestimonialItem {
  id: string;
  couple: string;
  location: string;
  city: "Jaipur" | "Udaipur" | "Goa" | "Mumbai" | "Delhi NCR" | "International";
  eventType: "Palace Wedding" | "Destination Nuptials" | "Pre-Wedding Session" | "Intimate Ceremony";
  year: string;
  image: string;
  rating: number;
  highlightQuote: string;
  fullReview: string;
  serviceType: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "t-01",
    couple: "Ananya & Siddharth",
    location: "City Palace, Jaipur",
    city: "Jaipur",
    eventType: "Palace Wedding",
    year: "2026",
    image: luxuryEditorial,
    rating: 5,
    highlightQuote: "They captured moments we didn't even know happened. Watching our wedding film brought happy tears all over again.",
    fullReview:
      "From our very first conversation with Sahil and the CMC FILMS team, we knew we were in safe hands. They were remarkably unobtrusive during our 3-day royal palace celebration in Jaipur. They didn't force us into awkward static poses; instead, they let our joy unfold naturally. When we received our 4K feature film and photo album, we were speechless. The color grading, sound design, and emotional narrative were worthy of a cinema release. Every frame feels like art.",
    serviceType: "Full 3-Day Photography & Cinema Collection",
  },
  {
    id: "t-02",
    couple: "Riya & Kabir",
    location: "Lake Pichola, Udaipur",
    city: "Udaipur",
    eventType: "Destination Nuptials",
    year: "2026",
    image: pin3,
    rating: 5,
    highlightQuote: "The drone sunset shots over Lake Pichola were surreal. Truly the best decision we made for our wedding.",
    fullReview:
      "Planning a destination wedding in Udaipur comes with immense stress, but CMC FILMS made the visual documentation completely effortless. Their crew arrived ahead of schedule, mapped out all the best natural light spots across the ghats, and blended right in with our families. Their team feels like family! Our guests are still raving about the 60-second teaser video they delivered just two days after the wedding.",
    serviceType: "Destination Cinema & Fine-Art Album",
  },
  {
    id: "t-03",
    couple: "Ishita & Arjun",
    location: "South Goa Coastline",
    city: "Goa",
    eventType: "Destination Nuptials",
    year: "2026",
    image: coastal,
    rating: 5,
    highlightQuote: "Barefoot ocean walk shots turned out like a luxury fashion magazine spread. Absolute master storytellers!",
    fullReview:
      "We wanted our Goa sunset wedding to feel relaxed, intimate, and romantic. Sahil understood our vision instantly. The candid portraits during golden hour are stunning beyond words. They captured the raw sea breeze, soft acoustic music, and unscripted laughs. If you want wedding cinema that feels real and cinematic rather than staged, CMC FILMS is unmatched.",
    serviceType: "Beachfront Cinema & Sunset Portraiture",
  },
  {
    id: "t-04",
    couple: "Aarav & Meera",
    location: "Amer Haveli, Jaipur",
    city: "Jaipur",
    eventType: "Pre-Wedding Session",
    year: "2026",
    image: pin1,
    rating: 5,
    highlightQuote: "Our dawn pre-wedding session in Jaipur felt so calm and magical. The photos look straight out of a fairytale.",
    fullReview:
      "Neither of us is comfortable in front of a camera, so we were quite nervous before our pre-wedding shoot. But the CMC team guided us with so much patience and warmth. We spent a tranquil morning walking through Amer haveli courtyards as winter sunlight touched the pink stone walls. The resulting editorial portraits are hung proudly in our home!",
    serviceType: "Pre-Wedding Concept Shoot & Reel",
  },
  {
    id: "t-05",
    couple: "Devika & Rohan",
    location: "The Oberoi Udaivilas, Udaipur",
    city: "Udaipur",
    eventType: "Palace Wedding",
    year: "2025",
    image: story1,
    rating: 5,
    highlightQuote: "Professionalism, punctuality, and artistic brilliance of the highest order. Worth every single rupee.",
    fullReview:
      "CMC FILMS documented our 2-day nuptials in Udaipur with supreme professionalism. Every camera angle was thoughtfully executed, and the audio recording during our vows was crystal clear. The leather-bound physical photo album they delivered is an heirloom our family will treasure for generations.",
    serviceType: "Royal Palace Collection & Leather Album",
  },
  {
    id: "t-06",
    couple: "Saba & Usman",
    location: "Marine Drive Coast, Mumbai",
    city: "Mumbai",
    eventType: "Intimate Ceremony",
    year: "2025",
    image: pin2,
    rating: 5,
    highlightQuote: "Intimate, warm, and deeply personal. They made us feel so comfortable throughout the entire evening.",
    fullReview:
      "We had an intimate sundown ceremony with only 80 close family members in Mumbai. CMC FILMS preserved the intimate essence of our gathering without ever disrupting the sacred ceremonies. Looking back at our wedding film feels like re-living the sweetest day of our lives.",
    serviceType: "Intimate Ceremony Cinema & Digital Gallery",
  },
];

export function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Palace Wedding", "Destination Nuptials", "Pre-Wedding Session", "Intimate Ceremony"];

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === "All") return testimonialsData;
    return testimonialsData.filter((t) => t.eventType === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full bg-[#0C0D10] overflow-hidden flex items-center justify-center text-center px-6">
        <img
          src={hero}
          alt="CMC FILMS Testimonials Hero"
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[#0C0D10]" />

        {/* Centered Title */}
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="relative flex items-center justify-center">
            <span
              className="text-white/20 select-none pointer-events-none text-7xl sm:text-9xl md:text-[12rem] leading-none absolute -top-10 sm:-top-20 font-normal"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              Kind Words
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal relative z-10 tracking-tight">
              Testimonials
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#C47A65] pt-4 font-semibold">
            REAL COUPLES · HEARTFELT LOVE STORIES
          </p>

          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Read authentic reviews from couples who trusted us to capture their unrepeatable wedding celebrations.
          </p>
        </div>
      </section>

      {/* ── 2. FILTER PILLS STRIP ── */}
      <section className="py-8 px-6 sm:px-12 bg-[#F3EEE7] border-b border-[#D8D3CB] sticky top-16 md:top-20 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
            FILTER BY EXPERIENCE:
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-[#171717] text-white shadow-md font-semibold"
                      : "bg-white text-[#171717]/75 hover:bg-[#E5E0D8] hover:text-[#171717] border border-[#D8D3CB]/60"
                  }`}
                >
                  {cat === "All" ? "All Stories" : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. INDIVIDUAL SECTION-BY-SECTION TESTIMONIAL STRIPS ── */}
      <div className="divide-y divide-[#D8D3CB]">
        {filteredTestimonials.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <section
              key={item.id}
              className={`py-20 sm:py-28 px-6 sm:px-12 md:px-16 transition-colors duration-500 ${
                isEven ? "bg-[#FAF8F5]" : "bg-[#F3EEE7]"
              }`}
            >
              <div className="max-w-[1500px] mx-auto">
                <Reveal>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* PHOTO COLUMN (Left for Even, Right for Odd) */}
                    <div
                      className={`lg:col-span-5 relative ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#D8D3CB] shadow-xl border border-black/10 group">
                        <img
                          src={item.image}
                          alt={item.couple}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl text-white flex items-center justify-between">
                          <div>
                            <span className="font-editorial text-2xl text-white block">
                              {item.couple}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                              {item.location}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#C47A65] bg-white px-3 py-1 rounded-full font-bold">
                            {item.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT COLUMN (Right for Even, Left for Odd) */}
                    <div
                      className={`lg:col-span-7 space-y-6 relative ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Section Number & Rating */}
                      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#D8D3CB]/60 pb-4">
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-bold">
                          TESTIMONIAL 0{idx + 1} · {item.eventType}
                        </span>

                        <div className="flex items-center gap-1.5 text-[#C47A65]">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Large Highlight Quote */}
                      <h2 className="font-editorial text-2xl sm:text-4xl text-[#171717] font-normal leading-tight">
                        “{item.highlightQuote}”
                      </h2>

                      {/* Full Detailed Review */}
                      <p className="text-sm sm:text-base text-[#55504A] font-light leading-relaxed">
                        “{item.fullReview}”
                      </p>

                      {/* Author Info & Collection Badge */}
                      <div className="pt-6 border-t border-[#D8D3CB]/60 flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <h3 className="font-editorial text-3xl text-[#171717]">
                            {item.couple}
                          </h3>
                          <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-0.5">
                            {item.location} · {item.city}
                          </p>
                        </div>

                        <span className="text-xs font-mono text-[#171717] bg-white px-4 py-2 rounded-full border border-[#D8D3CB] shadow-xs">
                          {item.serviceType}
                        </span>
                      </div>

                    </div>

                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── 4. KEY TRUST & STATS BANNER ── */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">150+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Happy Couples</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">4.9 ★</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Client Rating</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">20+</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">Destinations Filmed</p>
          </div>
          <div className="space-y-1">
            <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] font-light">100%</span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">In-House Crafting</p>
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM INVITATION CTA ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-bold">
          BEGIN YOUR STORY
        </span>
        <h2 className="font-editorial text-4xl sm:text-6xl text-[#171717] max-w-2xl mx-auto leading-tight">
          Ready to preserve your unrepeatable wedding memories?
        </h2>
        <p className="text-sm sm:text-base text-[#55504A] font-light max-w-md mx-auto leading-relaxed">
          Tell us about your wedding dates, venue, and vision. We reply personally within 24 hours.
        </p>
        <div className="pt-4">
          <Link
            to="/about"
            hash="contact"
            className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#C47A65] text-white px-10 py-4 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span>Enquire For Your Date</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
