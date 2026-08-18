import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { HeroMarqueeStrip } from "@/components/home/HeroMarqueeStrip";

import { StoriesCarousel } from "@/components/home/StoriesCarousel";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { PortfolioEditorial } from "@/components/home/PortfolioEditorial";
import { FilmsSection } from "@/components/home/FilmsSection";
import { Approach } from "@/components/home/Approach";

import { ClientExperiencesSection } from "@/components/home/ClientExperiencesSection";
import { BlogJournalSection } from "@/components/home/BlogJournalSection";

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
      <HeroMarqueeStrip />

      <StoriesCarousel />
      <FeaturedStory />
      <PortfolioEditorial />
      <FilmsSection />
      <Approach />

      <ClientExperiencesSection />
      <BlogJournalSection />
    </main>
  );
}
