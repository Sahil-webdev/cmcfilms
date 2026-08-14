import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";

import { StoriesCarousel } from "@/components/home/StoriesCarousel";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { PortfolioEditorial } from "@/components/home/PortfolioEditorial";
import { FilmsSection } from "@/components/home/FilmsSection";
import { QuoteSection } from "@/components/home/QuoteSection";
import { Approach } from "@/components/home/Approach";

import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { Destinations } from "@/components/home/Destinations";
import { Testimonials } from "@/components/home/Testimonials";
import { JournalPreview } from "@/components/home/JournalPreview";
import { FilmStrip } from "@/components/home/FilmStrip";
import { SocialGallery } from "@/components/home/SocialGallery";
import { FinalCTA } from "@/components/home/FinalCTA";

const title = "CMC FILMS — Luxury Wedding Photography & Cinematic Films";
const description =
  "CMC FILMS is a luxury visual storytelling studio documenting love, emotion and legacy through wedding photography and cinema.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "CMC FILMS",
          description,
          serviceType: "Wedding Photography and Cinematography",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />

      <StoriesCarousel />
      <FeaturedStory />
      <PortfolioEditorial />
      <FilmsSection />
      <QuoteSection />
      <Approach />

      <ExperienceTimeline />
      <Destinations />
      <Testimonials />
      <JournalPreview />
      <FilmStrip />
      <SocialGallery />
      <FinalCTA />
    </main>
  );
}
