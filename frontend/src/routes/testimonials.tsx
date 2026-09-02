import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { useHeroMedia } from "@/hooks/useHeroMedia";

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

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5001").replace(/\/$/, "");

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
  const heroMedia = useHeroMedia('testimonials', hero);

  // Published CMS data is shared across devices, unlike browser local storage.
  const [adminTestimonials, setAdminTestimonials] = useState<TestimonialItem[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/testimonials`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        const saved = payload?.data?.testimonials;
        if (!payload?.success || !Array.isArray(saved)) return;
        setAdminTestimonials(saved.map((item: Partial<TestimonialItem>) => ({
          id: String(item.id || crypto.randomUUID()),
          couple: String(item.couple || 'CMC FILMS Couple'),
          location: String(item.location || 'Udaipur, Rajasthan'),
          city: item.city || 'Udaipur',
          eventType: item.eventType || 'Intimate Ceremony',
          year: String(item.year || new Date().getFullYear()),
          image: String(item.image || hero),
          rating: Number(item.rating || 5),
          highlightQuote: String(item.highlightQuote || ''),
          fullReview: String(item.fullReview || ''),
          serviceType: String(item.serviceType || ''),
        })));
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  // An explicit empty CMS list must remain empty; it must never revive old
  // bundled testimonials after a frontend deployment.
  const activeTestimonials = adminTestimonials ?? testimonialsData;

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-poppins selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full bg-[#0C0D10] overflow-hidden">
        <img
          src={heroMedia}
          alt="CMC FILMS Testimonials Hero"
          className="h-full w-full object-cover"
        />
      </section>

      {/* ── SIMPLE TESTIMONIAL LIST ── */}
      <div className="divide-y divide-[#D8D3CB]">
        {activeTestimonials.map((item, index) => {
          const imageOnRight = index % 2 === 1;

          return (
          <section key={item.id} className="px-6 py-12 sm:px-12 sm:py-16 md:px-16">
            <div className="mx-auto max-w-[1200px]">
              <Reveal>
                <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                  <div className={`aspect-[4/3] overflow-hidden bg-[#E5E0D8] ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
                    <img src={item.image} alt={item.couple} className="h-full w-full object-cover" />
                  </div>

                  <div className={`space-y-5 lg:pt-2 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <h2 className="text-xl font-normal leading-snug text-[#171717] sm:text-2xl">{item.couple}</h2>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#C47A65]">
                        {item.location} · {item.year}
                      </p>
                    </div>
                    <p className="text-lg font-normal leading-relaxed text-[#171717] sm:text-xl">“{item.highlightQuote}”</p>
                    <p className="text-sm font-normal leading-relaxed text-[#55504A] sm:text-base">{item.fullReview}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
          );
        })}
      </div>

    </main>
  );
}
