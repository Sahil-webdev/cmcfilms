import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Pinterest Folder Assets (src/assets/pinterest)
import pin1 from "@/assets/pinterest/pin1.jpg";
import pin2 from "@/assets/pinterest/pin2.jpg";
import pin3 from "@/assets/pinterest/pin3.jpg";
import pin4 from "@/assets/pinterest/pin4.jpg";
import pin5 from "@/assets/pinterest/pin5.jpg";
import pin6 from "@/assets/pinterest/pin6.jpg";
import pin7 from "@/assets/pinterest/pin7.jpg";
import pin8 from "@/assets/pinterest/pin8.jpg";

// Hero Custom Asset (PRESERVED)
import couplesHeroCustom from "@/assets/couples-hero-custom.jpg";

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
  title: string;
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

export const coupleStoriesList: CoupleStoryItem[] = [
  {
    id: "cs-01",
    couple: "Mrinal & Abhishek",
    title: "Mrinal & Abhishek Pre Wedding At Aksa Beach, Mumbai",
    location: "Aksa Beach, Mumbai",
    city: "Mumbai",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: pin1,
    supportingImage: pin2,
    galleryImages: [pin1, pin2, pin3, pin4, pin5, pin6],
    introText:
      "Starting right as the sun came up at 6:00 AM on Aksa Beach, we kicked off Mrinal and Abhishek’s pre wedding session with the most peaceful, misty morning light. They kept things effortless and chic in matching white and beige outfits, looking completely at ease as we strolled along the wet shoreline and caught those sweet, quiet embraces against the gentle waves.",
    credits: {
      location: "Aksa Beach, Mumbai",
      photography: "Sahil Sharma & Team",
      film: "CMC Cinematic Archive",
      styling: "Personal Wardrobe",
      year: "2026",
    },
  },
  {
    id: "cs-02",
    couple: "Mahi & Varun",
    title: "Mahi & Varun Pre Wedding, From the Gardens of Zostel to Pawana Lake",
    location: "Zostel & Pawana Lake, Lonavala",
    city: "Mumbai",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: pin2,
    supportingImage: pin4,
    galleryImages: [pin2, pin4, pin6, pin8, pin1],
    introText:
      "There is something vividly cinematic about the golden hour in Lonavala. For Mahi and Varun’s pre wedding shoot, we traded the city’s hustle for the serene landscapes of Zostel Plus Lonavala and the tranquil shores of Pawana Lake. The result? A collection of moments that feel as effortless and authentic as their connection.",
    credits: {
      location: "Pawana Lake & Zostel, Lonavala",
      photography: "Sahil Sharma",
      film: "CMC Studio",
      styling: "Casual Chic",
      year: "2026",
    },
  },
  {
    id: "cs-03",
    couple: "Riya & Kabir",
    title: "Riya & Kabir Pre-Wedding at City Palace & Lake Pichola, Udaipur",
    location: "Lake Pichola, Udaipur",
    city: "Udaipur",
    shootType: "Couple Session",
    year: "2026",
    heroImage: pin3,
    supportingImage: pin4,
    galleryImages: [pin7, pin8, pin1, pin2, pin3],
    introText:
      "Riya and Kabir shared ten years of memories before stepping onto a wooden lakeboat in Udaipur. As dusk descended over the Aravalli hills, mirror reflections on Lake Pichola and historic palace ghats created an unmatched quiet harmony between royal heritage and tender intimacy.",
    credits: {
      location: "Lake Pichola & Ghats, Udaipur",
      photography: "Sahil Sharma",
      film: "CMC Studio",
      styling: "Minimal Linen",
      year: "2026",
    },
  },
  {
    id: "cs-04",
    couple: "Ishita & Arjun",
    title: "Ishita & Arjun Serene Oceanfront Story at South Goa Beaches",
    location: "South Goa Coastline",
    city: "Goa",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: pin5,
    supportingImage: pin6,
    galleryImages: [pin4, pin5, pin6, pin7, pin8],
    introText:
      "Two weeks after their celebration, Ishita and Arjun escaped to southern Goa shores. No schedules, no heavy outfits — just barefoot ocean walks as warm sea breeze and evening waves rustled beside them, capturing pure laughter and unscripted companionship.",
    credits: {
      location: "South Goa Coastline",
      photography: "CMC Films",
      film: "Cinematic Reel",
      styling: "Casual Resort",
      year: "2026",
    },
  },
  {
    id: "cs-05",
    couple: "Saba & Usman",
    title: "Saba & Usman Twilight Romance at Marine Drive & Bandra Fort, Mumbai",
    location: "Marine Drive, Mumbai",
    city: "Mumbai",
    shootType: "Pre-Wedding",
    year: "2025",
    heroImage: pin7,
    supportingImage: pin8,
    galleryImages: [pin1, pin3, pin5, pin7, pin2],
    introText:
      "Standing amidst sunset waves as sea breeze painted the horizon in soft rose gold tones. The vast open Mumbai shores allowed them to feel like the only two souls on earth as evening city lights began to shimmer in the background.",
    credits: {
      location: "Marine Drive & Bandra, Mumbai",
      photography: "Sahil Sharma",
      film: "CMC Films",
      styling: "Flowing Silk",
      year: "2025",
    },
  },
  {
    id: "cs-06",
    couple: "Aarav & Meera",
    title: "Aarav & Meera Morning Light Session in Heritage Jaipur Haveli",
    location: "Amer & Haveli Courtyards, Jaipur",
    city: "Jaipur",
    shootType: "Pre-Wedding",
    year: "2026",
    heroImage: pin8,
    supportingImage: pin1,
    galleryImages: [pin8, pin1, pin2, pin3, pin4],
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
];

export const getCoupleStorySlug = (story: Pick<CoupleStoryItem, "id" | "title">) => {
  const toSegment = (value: string) => value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${toSegment(story.title) || "couple-story"}-${toSegment(story.id) || "story"}`;
};

// Photo Collage Grid Items (PINTEREST IMAGES)
const collagePhotos = [
  { src: pin1, alt: "Couple Embrace at Sunset", title: "Sunset Romance" },
  { src: pin2, alt: "Haveli Archway Walk", title: "Heritage Walk" },
  { src: pin3, alt: "Boat Ride on Lake Pichola", title: "Pichola Serenade" },
  { src: pin4, alt: "Beachfront Ocean Breeze", title: "Coastal Vows" },
  { src: pin5, alt: "Laughter in Courtyard", title: "Pure Emotion" },
  { src: pin6, alt: "Twilight Promenade", title: "Desert Twilight" },
];

export function CoupleShootsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const [heroImages, setHeroImages] = useState<string[]>([couplesHeroCustom, pin1, pin2]);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [galleryPhotos, setGalleryPhotos] = useState(collagePhotos);
  const [stories, setStories] = useState<CoupleStoryItem[]>(coupleStoriesList);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/couple-content`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        const content = payload?.data?.content;
        if (!content) return;
        if (Array.isArray(content.galleryImages) && content.galleryImages.length) {
          setGalleryPhotos(content.galleryImages.slice(0, 6).map((src: string, index: number) => ({ src, alt: `Couple Shoot Gallery ${index + 1}`, title: `Couple Shoot ${index + 1}` })));
        }
        if (Array.isArray(content.blogs) && content.blogs.length) {
          setStories(content.blogs.map((blog: any, index: number) => ({
            id: String(blog.id || `blog-${index}`), couple: 'CMC FILMS', title: String(blog.title || 'Couple Shoot Story'), location: '', city: 'Udaipur', shootType: 'Pre-Wedding', year: new Date().getFullYear().toString(), heroImage: String(blog.image), supportingImage: String(blog.image), galleryImages: [String(blog.image)], introText: String(blog.excerpt || ''), credits: { location: '', photography: 'CMC FILMS', film: 'CMC FILMS', styling: '', year: new Date().getFullYear().toString() },
          })));
        }
      }).catch(() => undefined);
    return () => controller.abort();
  }, []);

  // Three editable hero slides from the admin panel. Old single-image hero
  // settings remain supported as the first slide during the transition.
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/site-settings/hero-media`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        const saved = payload?.data?.media?.couples;
        const savedImages = Array.isArray(saved?.images)
          ? saved.images.filter((image: unknown) => typeof image === 'string' && image)
          : saved?.url ? [saved.url] : [];
        if (savedImages.length) setHeroImages([...savedImages, pin1, pin2].slice(0, 3));
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = (carouselRef.current.clientWidth) * (direction === "left" ? -1 : 1);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openStory = (story: CoupleStoryItem) => {
    navigate({
      to: "/couples/$slug",
      params: { slug: getCoupleStorySlug(story) },
    });
  };

  // The detail route owns the full screen when a story URL is open.
  if (pathname.startsWith("/couples/")) return <Outlet />;

  return (
    <main className="bg-[#F3F0EA] text-[#171717] font-sans selection:bg-[#922A2F]/20 relative overflow-hidden">
      
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-b border-[#D8D3CB] overflow-hidden">
        
        <style>{`
          @keyframes marquee-couples {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-couples-track {
            display: flex;
            width: max-content;
            animation: marquee-couples 35s linear infinite;
          }
        `}</style>

        <div className="absolute inset-x-0 top-10 pointer-events-none opacity-[0.07] overflow-hidden select-none">
          <div className="marquee-couples-track">
            <span className="font-editorial text-[14vw] leading-none uppercase tracking-widest text-[#261E1E] whitespace-nowrap pr-12 font-bold">
              COUPLE STORIES &bull; UNFILTERED LOVE &bull; PRE-WEDDING ARCHIVES &bull;&nbsp;
            </span>
            <span className="font-editorial text-[14vw] leading-none uppercase tracking-widest text-[#261E1E] whitespace-nowrap pr-12 font-bold">
              COUPLE STORIES &bull; UNFILTERED LOVE &bull; PRE-WEDDING ARCHIVES &bull;&nbsp;
            </span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 md:pt-12">
          
          {/* Left Column: Clean Tall Vertical Real Couple Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start w-full">
            <div className="relative h-[520px] sm:h-[600px] lg:h-[660px] w-full max-w-lg lg:max-w-xl overflow-hidden rounded-2xl shadow-xl bg-[#D8D3CB]">
              {heroImages.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`Real Couple Shoot Hero ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out ${index === activeHeroImage ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Signature-style display title & editorial copy */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0 text-left">
            <div>
              <h1
                className="text-center lg:text-left leading-[0.82] text-6xl sm:text-7xl md:text-8xl lg:text-9xl select-none"
              >
                <span className="block text-[#922A2F]" style={{ fontFamily: "'Sofia', cursive" }}>Couple</span>
                <span className="font-editorial italic font-normal tracking-[-0.035em] text-[#8A8072] block relative left-4 sm:left-5 lg:left-0 lg:pl-[1.8em] mt-0 sm:mt-1 md:mt-2">Shoots</span>
              </h1>
            </div>

            <h2 className="font-sans font-normal text-xl sm:text-2xl md:text-3xl text-[#3D3A36] tracking-tight leading-snug">
              Artistic Storytelling Celebrating YOU!
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#68645E] font-sans font-light leading-relaxed">
              <p>
                Welcome to CMC FILMS, where we infuse magic into your wedding memories turning them into timeless tales of love, romance, and companionship.
              </p>
              <p>
                We are an award-winning premium wedding photography and films brand, known for our artistic, professional, and couple-centric approach.
              </p>
              <p>
                We believe in and exist to showcase the most beautiful and heartfelt stories of your life in their true magnificence.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ── 2. SMALL PHOTO COLLAGE GRID (CHOTTA SA GALLERY SECTION BELOW HERO) ── */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D3CB]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightboxPhoto(photo.src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-md bg-[#D8D3CB] cursor-pointer border border-black/5"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                  {photo.title} ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Photo Collage */}
      {activeLightboxPhoto && (
        <div
          onClick={() => setActiveLightboxPhoto(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-300"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-[4px] shadow-2xl">
            <img
              src={activeLightboxPhoto}
              alt="Enlarged photo"
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setActiveLightboxPhoto(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black p-2 rounded-full text-xs font-mono cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* ── 3. DEDICATED 3-ITEMS-PER-ROW SLIDER CAROUSEL SECTION ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-12 md:px-16 max-w-[1700px] mx-auto space-y-10">
        
        {/* Section Heading Title (Matching Reference Screenshot "Couple Shoot") */}
        <div className="text-center">
          <h2
            className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#261E1E] inline-block border-b border-[#261E1E]/20 pb-2 px-4 font-normal"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            Couple Shoot
          </h2>
        </div>

        {/* Carousel Slider Wrapper (1 Item per view on Mobile, 2 on Tablet, 3 on Desktop) */}
        <div
          className="relative group px-3 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-2 sm:left-4 top-[22%] sm:top-1/3 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#261E1E]/80 hover:bg-[#261E1E] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer opacity-90 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-2 sm:right-4 top-[22%] sm:top-1/3 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#261E1E]/80 hover:bg-[#261E1E] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer opacity-90 hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slider Row */}
          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-1 no-bar items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                onClick={() => openStory(story)}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] snap-center shrink-0 group cursor-pointer space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Image Frame */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#D8D3CB] rounded-[2px] border border-black/5 shadow-sm">
                    <img
                      src={story.heroImage}
                      alt={story.couple}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Story Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#261E1E] font-normal leading-snug group-hover:text-[#922A2F] transition-colors">
                    {story.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="font-sans text-xs sm:text-sm text-[#4A453F] font-light leading-relaxed line-clamp-3">
                    {story.introText}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openStory(story);
                    }}
                    className="uiverse-button group/btn inline-flex items-center gap-2.5 bg-[#261E1E] hover:bg-black text-white font-semibold text-xs py-2 px-4 pl-3 rounded-full transition-all duration-300 shadow-xs cursor-pointer whitespace-nowrap overflow-hidden"
                    style={{ "--clr": "#261E1E" } as React.CSSProperties}
                  >
                    <span className="uiverse-button__icon-wrapper shrink-0 w-6 h-6 rounded-full bg-white text-[#261E1E] flex items-center justify-center relative overflow-hidden">
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="uiverse-button__icon-svg w-2.5 h-2.5 transition-transform duration-300 group-hover/btn:translate-x-[150%] group-hover/btn:-translate-y-[150%]"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="uiverse-button__icon-svg uiverse-button__icon-svg--copy w-2.5 h-2.5 absolute transition-transform duration-300 -translate-x-[150%] translate-y-[150%] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="font-poppins text-xs font-semibold text-white">Read More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
