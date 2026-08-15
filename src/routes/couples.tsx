import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight, ArrowDown, X } from "lucide-react";

// Image Imports
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import coastal from "@/assets/coastal.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import heroImg from "@/assets/hero.jpg";
import haldi from "@/assets/haldi.jpg";
import featured from "@/assets/featured.jpg";

const title = "Couple Shoots & Pre-Weddings — CMC FILMS";
const description =
  "Stories of two people, photographed as they are. Real couple shoots, pre-wedding sessions & editorial love stories by CMC FILMS.";

export const Route = createFileRoute("/couples")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/couples" },
    ],
    links: [{ rel: "canonical", href: "/couples" }],
  }),
  component: CoupleShootsPage,
});

export interface CoupleStoryItem {
  id: string;
  couple: string;
  location: string;
  city: "Jaipur" | "Udaipur" | "Goa" | "Mumbai" | "International";
  shootType: "Pre-Wedding" | "Engagement" | "Couple Session" | "Post-Wedding";
  year: string;
  heroImage: string;
  supportingImage: string;
  galleryImages: string[];
  introText: string;
  credits: {
    location: string;
    photography: string;
    film: string;
    styling: string;
    year: string;
  };
}

const coupleStoriesList: CoupleStoryItem[] = [
  {
    id: "cs-01",
    couple: "Aarav & Meera",
    location: "Jaipur, Rajasthan",
    city: "Jaipur",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: luxuryEditorial,
    supportingImage: heroImg,
    galleryImages: [featured, cat2, haldi, story1, story3, coastal],
    introText:
      "Aarav and Meera wanted nothing elaborate. Just Jaipur before the streets became busy, some winter dawn light, and enough time to forget about the camera. We spent hours walking through Amer and calm haveli courtyards as early sun touched pink stone walls.",
    credits: {
      location: "Amer & City Palace, Jaipur",
      photography: "Sahil Sharma & Team",
      film: "CMC Cinematic Archive",
      styling: "Personal Wardrobe",
      year: "2026",
    },
  },
  {
    id: "cs-02",
    couple: "Riya & Kabir",
    location: "Udaipur, Rajasthan",
    city: "Udaipur",
    shootType: "Couple Session",
    year: "2026",
    heroImage: heroImg,
    supportingImage: featured,
    galleryImages: [cat1, story2, coastal, luxuryEditorial, haldi],
    introText:
      "Riya and Kabir shared ten years of memories before stepping onto a wooden lakeboat in Udaipur. As dusk descended over the Aravalli hills, mirror reflections on Lake Pichola created an unmatched quiet harmony.",
    credits: {
      location: "Lake Pichola & Ghats, Udaipur",
      photography: "Sahil Sharma",
      film: "CMC Studio",
      styling: "Minimal Linen",
      year: "2026",
    },
  },
  {
    id: "cs-03",
    couple: "Ishita & Arjun",
    location: "Goa Beachfront",
    city: "Goa",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: coastal,
    supportingImage: cat1,
    galleryImages: [story3, haldi, cat2, heroImg],
    introText:
      "Two weeks after their celebration, Ishita and Arjun escaped to southern Goa shores. No schedules, no heavy outfits — just barefoot ocean walks as warm sea breeze and evening waves rustled beside them.",
    credits: {
      location: "South Goa Coastline",
      photography: "CMC Films",
      film: "Cinematic Reel",
      styling: "Casual Resort",
      year: "2026",
    },
  },
  {
    id: "cs-04",
    couple: "Saba & Usman",
    location: "Dubai Desert, UAE",
    city: "International",
    shootType: "Pre-Wedding",
    year: "2025",
    heroImage: cat1,
    supportingImage: cat3,
    galleryImages: [luxuryEditorial, cat2, story2, coastal],
    introText:
      "Standing amidst endless wind-swept Lahbab desert dunes as sunset painted the horizon in soft rose gold tones. The vast open dunes allowed them to feel like the only two souls on earth.",
    credits: {
      location: "Lahbab Desert, Dubai",
      photography: "Sahil Sharma",
      film: "CMC Films",
      styling: "Flowing Silk",
      year: "2025",
    },
  },
  {
    id: "cs-05",
    couple: "Neha & Kunal",
    location: "Manali, Himachal Pradesh",
    city: "International",
    shootType: "Post-Wedding",
    year: "2025",
    heroImage: cat3,
    supportingImage: story2,
    galleryImages: [cat2, haldi, heroImg, coastal],
    introText:
      "Quiet mountain trails surrounded by towering pine trees and soft morning mist. High elevation pine forests gave them a calm, intimate canopy far away from urban noise.",
    credits: {
      location: "Solang & Pine Forest, Manali",
      photography: "CMC Studio",
      film: "CMC Films",
      styling: "Winter Knits",
      year: "2025",
    },
  },
];

export function CoupleShootsPage() {
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>("All");
  const [activeStoryModal, setActiveStoryModal] = useState<CoupleStoryItem | null>(null);

  const featuredCouple = coupleStoriesList[0];

  const filteredStories = useMemo(() => {
    if (selectedCityFilter === "All") return coupleStoriesList;
    return coupleStoriesList.filter((s) => s.city === selectedCityFilter);
  }, [selectedCityFilter]);

  return (
    <main className="bg-[#F3F0EA] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── 1. HERO (55% / 45% Restrained 12-Column Grid Layout) ── */}
      <section className="pt-28 pb-20 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB]">
        
        {/* Top Metadata Header */}
        <div className="flex justify-between items-center pb-8 border-b border-[#D8D3CB]/60">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#68645E]">
            CMC FILMS · COUPLE PORTFOLIO
          </span>
          <span className="text-xs font-mono text-[#68645E] hidden sm:block">
            Pre-Wedding · Engagement · Couple Sessions
          </span>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-12">
          
          {/* Left Column (55% Width / 7 Cols): One Large Vertical Couple Image (4:5) */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#D8D3CB]">
              <img
                src={luxuryEditorial}
                alt="Couple Shoot Main"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Right Column (5 Cols): Title, Quote, Metadata & Smaller Landscape Image (3:2) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.9] text-[#171717]">
                COUPLE <br />
                <span className="italic font-light">SHOOTS</span>
              </h1>

              <p className="font-editorial text-2xl text-[#68645E] italic leading-relaxed">
                “Stories of two people, photographed as they are.”
              </p>

              <div className="text-xs font-mono uppercase tracking-widest text-[#68645E] space-x-3 pt-2">
                <span>Pre-Wedding</span>
                <span>·</span>
                <span>Engagement</span>
                <span>·</span>
                <span>Couple Sessions</span>
              </div>
            </div>

            {/* Smaller Landscape Image (3:2) */}
            <div className="space-y-4 pt-4">
              <div className="aspect-[3/2] w-full overflow-hidden bg-[#D8D3CB]">
                <img
                  src={coastal}
                  alt="Coastal couple moment"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-[#68645E] pt-2">
                <span>JAIPUR & GOA ARCHIVE</span>
                <span className="flex items-center gap-1.5 text-[#171717]">
                  Explore <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ── 2. EDITORIAL INTRODUCTION (Clean 2-Column Grid) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Large Serif Statement */}
          <div className="md:col-span-6">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717] leading-tight">
              Less posing. <br />
              <span className="italic">More of you.</span>
            </h2>
          </div>

          {/* Right: Short Paragraph (Max 3 Lines) */}
          <div className="md:col-span-6 pt-2">
            <p className="text-base sm:text-lg text-[#68645E] font-sans font-light leading-relaxed">
              Every couple has a different rhythm. We build the shoot around that, instead of forcing everyone into the same photographs.
            </p>
          </div>

        </div>
      </section>

      {/* ── 3. FEATURED COUPLE (Editorial Spread Layout) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB] space-y-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#68645E] block">
          FEATURED SHOOT
        </span>

        {/* 3 Images Spread (Left 8 Cols Landscape + Right 4 Cols 2 Stacked Verticals) */}
        <div
          onClick={() => setActiveStoryModal(featuredCouple)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 cursor-pointer group"
        >
          {/* Left: Large Landscape Photograph (8 Cols, 16:10) */}
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden bg-[#D8D3CB]">
            <img
              src={featuredCouple.heroImage}
              alt={featuredCouple.couple}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>

          {/* Right: Two Smaller Vertical Photographs Aligned Beside It (4 Cols, 4:5) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
              <img
                src={featuredCouple.supportingImage}
                alt="Supporting 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB] hidden lg:block">
              <img
                src={haldi}
                alt="Supporting 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Metadata Outside Images (No Heavy Overlays) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
          <div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#171717] font-normal">
              {featuredCouple.couple}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">
              {featuredCouple.shootType} · {featuredCouple.location}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveStoryModal(featuredCouple)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#171717] hover:text-[#68645E] transition-colors cursor-pointer"
          >
            <span>View Story</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── 4. SELECTED STORIES (Restrained Editorial Rhythm) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB] space-y-24">
        <div className="border-b border-[#D8D3CB] pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
            SELECTED COUPLE STORIES
          </span>
        </div>

        {/* STORY 01: Aarav & Meera (Large Vertical 4:5 + Small Landscape 3:2) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[0])}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end cursor-pointer group"
        >
          <div className="lg:col-span-7 aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
            <img src={coupleStoriesList[0].heroImage} alt={coupleStoriesList[0].couple} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[3/2] overflow-hidden bg-[#D8D3CB]">
              <img src={coupleStoriesList[0].supportingImage} alt="Supporting" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-editorial text-3xl text-[#171717]">{coupleStoriesList[0].couple}</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">{coupleStoriesList[0].shootType} · {coupleStoriesList[0].location}</p>
              <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717] mt-3">View Story →</span>
            </div>
          </div>
        </div>

        {/* STORY 02: Riya & Kabir (Large Landscape 16:10 + Single Supporting Vertical 4:5) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[1])}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end cursor-pointer group"
        >
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden bg-[#D8D3CB]">
            <img src={coupleStoriesList[1].heroImage} alt={coupleStoriesList[1].couple} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
              <img src={coupleStoriesList[1].supportingImage} alt="Supporting" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-editorial text-3xl text-[#171717]">{coupleStoriesList[1].couple}</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">{coupleStoriesList[1].shootType} · {coupleStoriesList[1].location}</p>
              <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717] mt-3">View Story →</span>
            </div>
          </div>
        </div>

        {/* STORY 03: Ishita & Arjun (Two Vertical Photographs Side by Side 4:5) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[2])}
          className="space-y-6 cursor-pointer group"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
              <img src={coupleStoriesList[2].heroImage} alt={coupleStoriesList[2].couple} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
              <img src={coupleStoriesList[2].supportingImage} alt="Supporting" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-editorial text-3xl text-[#171717]">{coupleStoriesList[2].couple}</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">{coupleStoriesList[2].shootType} · {coupleStoriesList[2].location}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717]">View Story →</span>
          </div>
        </div>

        {/* STORY 04: Saba & Usman (Large Landscape 16:10 + Smaller Detail Image 3:4) */}
        <div
          onClick={() => setActiveStoryModal(coupleStoriesList[3])}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end cursor-pointer group"
        >
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden bg-[#D8D3CB]">
            <img src={coupleStoriesList[3].heroImage} alt={coupleStoriesList[3].couple} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="aspect-[3/4] overflow-hidden bg-[#D8D3CB]">
              <img src={coupleStoriesList[3].supportingImage} alt="Supporting" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-editorial text-3xl text-[#171717]">{coupleStoriesList[3].couple}</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">{coupleStoriesList[3].shootType} · {coupleStoriesList[3].location}</p>
              <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717] mt-3">View Story →</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── 5. EDITORIAL IMAGE BREAK (Natural Visual Pause 2:1 Wide Photo) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB] space-y-4">
        <div className="aspect-[2/1] w-full overflow-hidden bg-[#D8D3CB]">
          <img
            src={featured}
            alt="Editorial image break"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-end">
          <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
            Jaipur · Winter 2026
          </span>
        </div>
      </section>

      {/* ── 6. MINIMAL LOCATION FILTER ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB] space-y-12">
        
        {/* Horizontal Line Filter Bar */}
        <div className="flex flex-wrap items-center gap-8 border-b border-[#D8D3CB] pb-4 text-xs font-mono uppercase tracking-widest">
          {["All", "Jaipur", "Udaipur", "Goa", "Mumbai", "International"].map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => setSelectedCityFilter(loc)}
              className={`pb-1 transition-all cursor-pointer ${
                selectedCityFilter === loc
                  ? "text-[#171717] border-b-2 border-[#171717] font-semibold"
                  : "text-[#68645E] hover:text-[#171717]"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Filtered Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              className="space-y-4 cursor-pointer group"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#D8D3CB]">
                <img
                  src={story.heroImage}
                  alt={story.couple}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-editorial text-3xl text-[#171717]">{story.couple}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">
                    {story.shootType} · {story.location}
                  </p>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]">View →</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── 7. STORY INDEX (Compact 2-Column Archive) ── */}
      <section className="py-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB] space-y-12">
        <div className="border-b border-[#D8D3CB] pb-4">
          <h2 className="font-editorial text-4xl text-[#171717]">More Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coupleStoriesList.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              className="flex items-center gap-6 cursor-pointer group border-b border-[#D8D3CB]/60 pb-6"
            >
              <div className="w-24 h-24 shrink-0 overflow-hidden bg-[#D8D3CB]">
                <img src={story.heroImage} alt={story.couple} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <h3 className="font-editorial text-2xl text-[#171717] group-hover:text-[#68645E] transition-colors">{story.couple}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-0.5">{story.location}</p>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717]">View →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. FINAL CTA (Understated 70% Width Layout) ── */}
      <section className="py-32 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 70% Width Landscape Image (8 Cols) */}
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden bg-[#D8D3CB]">
            <img src={coastal} alt="Planning a shoot" className="h-full w-full object-cover" />
          </div>

          {/* Beside It: Planning Text & Enquire Link */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#68645E] block">
              PLANNING A SHOOT?
            </span>
            <p className="font-editorial text-3xl sm:text-4xl text-[#171717] font-normal leading-tight">
              “Let’s make something that feels like you.”
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#171717] border-b border-[#171717] pb-1 hover:text-[#68645E] hover:border-[#68645E] transition-colors"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 9. DEDICATED COUPLE STORY PAGE MODAL ── */}
      {activeStoryModal && (
        <IndividualCoupleStoryModal
          story={activeStoryModal}
          onClose={() => setActiveStoryModal(null)}
          onNextStory={(nextS) => setActiveStoryModal(nextS)}
        />
      )}
    </main>
  );
}

// ── DEDICATED COUPLE STORY EDITORIAL DETAIL MODAL ──
function IndividualCoupleStoryModal({
  story,
  onClose,
  onNextStory,
}: {
  story: CoupleStoryItem;
  onClose: () => void;
  onNextStory: (nextS: CoupleStoryItem) => void;
}) {
  const currentIndex = coupleStoriesList.findIndex((s) => s.id === story.id);
  const nextStory = coupleStoriesList[(currentIndex + 1) % coupleStoriesList.length];

  return (
    <div className="fixed inset-0 z-[100] bg-[#F3F0EA] text-[#171717] overflow-y-auto animate-in fade-in duration-300">
      
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F3F0EA]/95 backdrop-blur-md border-b border-[#D8D3CB]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
          CMC FILMS · EDITORIAL STORY
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#171717] hover:text-[#68645E] transition-colors cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Story Opening */}
      <section className="pt-8 pb-16 px-6 max-w-[1440px] mx-auto space-y-8">
        
        {/* Large Hero Image */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#D8D3CB]">
          <img src={story.heroImage} alt={story.couple} className="h-full w-full object-cover" />
        </div>

        {/* Title & Metadata */}
        <div className="space-y-2 border-b border-[#D8D3CB] pb-8">
          <h1 className="font-editorial text-5xl sm:text-7xl text-[#171717] font-normal">
            {story.couple}
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
            {story.location} · {story.shootType} · {story.year}
          </p>
        </div>

        {/* Short Introduction (120-180 words) */}
        <div className="max-w-2xl py-4">
          <p className="font-sans text-base sm:text-lg text-[#171717] font-light leading-relaxed">
            {story.introText}
          </p>
        </div>
      </section>

      {/* Gallery Flow (Disciplined Grid Rhythm) */}
      <section className="py-12 px-6 max-w-[1440px] mx-auto space-y-16">
        
        {/* 1. Full-Width Image */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[0] || story.heroImage} alt="Gallery 1" className="h-full w-full object-cover" />
        </div>

        {/* 2. Two Portraits Side by Side (4:5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
            <img src={story.galleryImages[1] || heroImg} alt="Gallery 2" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-[#D8D3CB]">
            <img src={story.galleryImages[2] || cat2} alt="Gallery 3" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* 3. One Landscape Image (3:2) */}
        <div className="aspect-[3/2] max-w-4xl mx-auto overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[3] || haldi} alt="Gallery 4" className="h-full w-full object-cover" />
        </div>

        {/* 4. Short Text Passage */}
        <div className="max-w-xl mx-auto text-center py-6">
          <p className="font-editorial text-2xl sm:text-3xl italic text-[#68645E] font-light">
            “No schedules. No rush. Just moments as they unfolded.”
          </p>
        </div>

        {/* 5. One Vertical Image with Generous Whitespace */}
        <div className="max-w-md mx-auto aspect-[3/4] overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[4] || cat1} alt="Gallery 5" className="h-full w-full object-cover" />
        </div>

        {/* 6. Three-Image Sequence */}
        <div className="grid grid-cols-3 gap-4">
          {story.galleryImages.slice(0, 3).map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-[#D8D3CB]">
              <img src={img} alt="Sequence frame" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* 7. Full-Width Closing Image */}
        <div className="aspect-[2/1] w-full overflow-hidden bg-[#D8D3CB]">
          <img src={story.galleryImages[5] || coastal} alt="Closing image" className="h-full w-full object-cover" />
        </div>

      </section>

      {/* Credits Section */}
      <section className="py-16 px-6 max-w-[1440px] mx-auto border-t border-b border-[#D8D3CB]">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-xs font-mono uppercase tracking-widest text-[#68645E]">
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Location</span>
            <span>{story.credits.location}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Photography</span>
            <span>{story.credits.photography}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Film</span>
            <span>{story.credits.film}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Styling</span>
            <span>{story.credits.styling}</span>
          </div>
          <div>
            <span className="block text-[#171717] font-semibold mb-1">Year</span>
            <span>{story.credits.year}</span>
          </div>
        </div>
      </section>

      {/* Next Story Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNextStory(nextStory);
        }}
        className="py-24 px-6 max-w-[1440px] mx-auto cursor-pointer group space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
          NEXT STORY
        </span>

        <div className="aspect-[16/9] w-full overflow-hidden bg-[#D8D3CB]">
          <img
            src={nextStory.heroImage}
            alt={nextStory.couple}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>

        <div className="flex justify-between items-end pt-2">
          <div>
            <h3 className="font-editorial text-4xl text-[#171717] group-hover:text-[#68645E] transition-colors">
              {nextStory.couple}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#68645E] mt-1">
              {nextStory.location}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#171717]">
            View Story →
          </span>
        </div>
      </section>

    </div>
  );
}
