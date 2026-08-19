import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef } from "react";
import { Check, Sparkles, ArrowRight, ArrowLeft, Camera, Film, Clock, HelpCircle, X, Send, Award, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
import hero from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import couplesHeroCustom from "@/assets/couples-hero-custom.jpg";

const title = "Investment & Packages — CMC FILMS";
const description =
  "Explore transparent luxury wedding photography and cinematic film packages by CMC FILMS. Crafted for royal palace nuptials, destination weddings, and intimate celebrations.";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: string;
  numericPrice: number;
  unit: string;
  badge?: string;
  isPopular?: boolean;
  category: "Destination" | "Royal" | "Intimate" | "Couple Shoot";
  coverImage: string;
  coverageHours: string;
  crewDetails: string;
  deliverables: string[];
  features: string[];
}

const packageTiers: PackageTier[] = [
  {
    id: "pkg-01",
    name: "Royal Heritage Collection",
    subtitle: "3-Day Grand Celebration",
    tagline: "Our flagship cinema & photography archive for multi-day royal palace celebrations.",
    price: "₹3,50,000",
    numericPrice: 350000,
    unit: "per 3-day event",
    badge: "MOST POPULAR CHOICE",
    isPopular: true,
    category: "Royal",
    coverImage: luxuryEditorial,
    coverageHours: "Unlimited Coverage (3 Days)",
    crewDetails: "2 Lead Directors + 3 Senior Cinematographers + 2 Senior Photographers",
    deliverables: [
      "4K Cinematic Feature Film (45 Mins)",
      "60-Second Instagram Teaser (within 72 hrs)",
      "2 Heirloom Handcrafted Leather Photo Albums",
      "Full High-Res Edited Digital Photo Gallery",
      "Raw Footage Delivered on High-Speed SSD Drive",
    ],
    features: [
      "Aerial 4K Drone Coverage",
      "Lighting & Sound Technicians",
      "Complimentary Pre-Wedding Session",
      "Same-Day Edit Reception Video",
    ],
  },
  {
    id: "pkg-02",
    name: "Destination Cinema Experience",
    subtitle: "2-Day Oceanfront & Resort Nuptials",
    tagline: "Tailored for beach, coastal resort, and international destination weddings.",
    price: "₹2,40,000",
    numericPrice: 240000,
    unit: "per 2-day event",
    category: "Destination",
    coverImage: coastal,
    coverageHours: "Full 2-Day Comprehensive Coverage",
    crewDetails: "1 Lead Director + 2 Senior Cinematographers + 2 Senior Photographers",
    deliverables: [
      "30-Minute Cinematic Highlight Film",
      "2-Minute Extended Teaser Trailer",
      "1 Premium Fine-Art Hardcover Photo Album",
      "Online Private Client Photo Gallery",
    ],
    features: [
      "Aerial 4K Drone Coverage",
      "Professional Sound Recorders",
      "Color-Graded Digital Master",
      "Travel Included (India)",
    ],
  },
  {
    id: "pkg-03",
    name: "Intimate Keepsake Story",
    subtitle: "1-Day Ceremony & Reception",
    tagline: "Unobtrusive, heartfelt documentation for intimate single-day celebrations.",
    price: "₹1,40,000",
    numericPrice: 140000,
    unit: "per 1-day event",
    category: "Intimate",
    coverImage: haldi,
    coverageHours: "Up to 12 Hours Continuous Coverage",
    crewDetails: "1 Lead Photographer + 1 Lead Cinematographer",
    deliverables: [
      "15 to 20-Minute Cinematic Story Film",
      "1-Minute Reel Teaser",
      "High-Res Edited Digital Photo Gallery (400+ Images)",
    ],
    features: [
      "Unscripted Candid Focus",
      "Color-Corrected Images",
      "Full Private Cloud Drive",
      "Music Consultation",
    ],
  },
  {
    id: "pkg-04",
    name: "Editorial Couple & Pre-Wedding",
    subtitle: "Full-Day Concept Couple Session",
    tagline: "A relaxed, artistic outdoor shoot capturing your pure romantic chemistry.",
    price: "₹65,000",
    numericPrice: 65000,
    unit: "per session",
    category: "Couple Shoot",
    coverImage: couplesHeroCustom,
    coverageHours: "Full Day (Dawn to Sunset)",
    crewDetails: "1 Senior Creative Photographer + 1 Reel Cinematographer",
    deliverables: [
      "40 High-Fashion Retouched Fine-Art Portraits",
      "60-Second Cinematic Mood Reel (4K)",
      "High-Res Digital Photo Gallery",
    ],
    features: [
      "Location Guidance (Jaipur/Udaipur/Goa)",
      "Wardrobe & Color Styling",
      "Low-Pressure Candid Posing",
      "10-Day Delivery",
    ],
  },
];

const studioServices = [
  { id: "srv-1", no: "01", title: "Wedding Photography", copy: "Two to three senior photographers quietly present through every ceremony.", price: 120000 },
  { id: "srv-2", no: "02", title: "Wedding Cinematography", copy: "A 4K film cut for feeling — capturing vows, laughter, & quiet romantic pauses.", price: 150000 },
  { id: "srv-3", no: "03", title: "Pre-Wedding Stories", copy: "Outdoor dawn concept shoot in Jaipur, Udaipur, Goa, or royal havelis.", price: 45000 },
  { id: "srv-4", no: "04", title: "Destination Weddings", copy: "Full multi-day destination coverage across India & international venues.", price: 280000 },
  { id: "srv-5", no: "05", title: "Couple Portraits", copy: "Editorial fine-art portraits & romantic couples sessions.", price: 35000 },
  { id: "srv-6", no: "06", title: "Maternity Photoshoot", copy: "Fine-art aesthetic portraiture celebrating new beginnings.", price: 30000 },
];

const faqs = [
  {
    q: "How early should we book CMC FILMS for our wedding?",
    a: "We recommend locking dates 6 to 10 months in advance, especially for prime wedding season dates (October through March) as we only shoot a limited number of select weddings each year.",
  },
  {
    q: "Do you travel for destination weddings across India & worldwide?",
    a: "Yes! Over 60% of our work is destination weddings across Jaipur, Udaipur, Goa, Kerala, Dubai, Bali, and beyond. Travel and accommodation details are handled transparently.",
  },
  {
    q: "How long does it take to receive our final photos & cinematic film?",
    a: "You will receive your 60-second teaser trailer within 72 hours of your wedding. The complete retouched photo gallery is delivered within 4 to 6 weeks, and full cinematic feature films in 8 to 10 weeks.",
  },
  {
    q: "Can we customize a package for our specific wedding schedule?",
    a: "Absolutely. Every wedding is unique. You can add or remove days, additional crew members, drone coverage, or physical heirloom albums based on your specific itinerary.",
  },
];

export function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [enquiryModalPkg, setEnquiryModalPkg] = useState<PackageTier | null>(null);
  const [formSent, setFormSent] = useState(false);

  // Custom Multi-Service Calculator State
  const [selectedServices, setSelectedServices] = useState<string[]>(["srv-1", "srv-2"]);

  // Carousel Index
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const categories = ["All", "Royal", "Destination", "Intimate", "Couple Shoot"];

  const filteredPackages = useMemo(() => {
    if (selectedCategory === "All") return packageTiers;
    return packageTiers.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [selectedCategory]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotalEstimate = useMemo(() => {
    return selectedServices.reduce((sum, sId) => {
      const s = studioServices.find((item) => item.id === sId);
      return sum + (s ? s.price : 0);
    }, 0);
  }, [selectedServices]);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? filteredPackages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredPackages.length);
  };

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── 1. HERO SECTION (DARK CINEMA WITH CURSIVE WATERMARK OVERLAY) ── */}
      <section className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full bg-[#0C0D10] overflow-hidden flex items-center justify-center text-center px-6">
        <img
          src={hero}
          alt="CMC FILMS Investment & Packages Hero"
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
              Collections
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal relative z-10 tracking-tight">
              Investment &amp; Packages
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#C47A65] pt-4 font-semibold">
            TRANSPARENT LUXURY COLLECTIONS
          </p>

          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Thoughtfully curated photography and cinema archives designed for royal palace nuptials, destination celebrations, and intimate vows.
          </p>
        </div>
      </section>

      {/* ── 2. STICKY CATEGORY FILTER BAR ── */}
      <section className="py-6 px-6 sm:px-12 bg-[#F3EEE7] border-b border-[#D8D3CB] sticky top-16 md:top-20 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
            SELECT EVENT TYPE:
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
                  {cat === "All" ? "All Collections" : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. HIGH-END HORIZONTAL CAROUSEL SHOWCASE ── */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 md:px-16 max-w-[1600px] mx-auto space-y-10 overflow-hidden">
        
        {/* Header Controls Bar */}
        <div className="flex items-center justify-between border-b border-[#D8D3CB]/60 pb-6 flex-wrap gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-bold">
              FEATURED COLLECTIONS ({filteredPackages.length})
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
              Explore Our <em className="italic text-[#C47A65]">Cinema Packages</em>
            </h2>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous package"
              className="h-12 w-12 rounded-full bg-white hover:bg-[#171717] text-[#171717] hover:text-white border border-[#D8D3CB] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next package"
              className="h-12 w-12 rounded-full bg-white hover:bg-[#171717] text-[#171717] hover:text-white border border-[#D8D3CB] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="relative overflow-hidden py-2">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6 md:gap-8"
            style={{
              transform: `translateX(-${currentSlideIndex * (360 + 32)}px)`,
            }}
          >
            {filteredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="w-[340px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 sm:p-8 border border-[#D8D3CB] shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  {/* Photo Top Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#D8D3CB]">
                    <img
                      src={pkg.coverImage}
                      alt={pkg.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {pkg.badge && (
                      <span className="absolute top-3 left-3 bg-[#C47A65] text-white text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C47A65] font-bold block">
                      {pkg.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl text-[#171717] font-normal leading-snug">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Tag */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#D8D3CB]/60 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#68645E]">Investment</span>
                    <span className="font-editorial text-3xl text-[#171717] font-normal">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717] font-bold block">
                      INCLUSIONS:
                    </span>
                    <ul className="space-y-2 text-xs text-[#55504A]">
                      {pkg.deliverables.slice(0, 4).map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C47A65] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enquiry Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEnquiryModalPkg(pkg);
                      setFormSent(false);
                    }}
                    className="w-full py-3.5 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Enquire Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {filteredPackages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlideIndex ? "w-8 bg-[#171717]" : "w-2 bg-[#171717]/20"
              }`}
            />
          ))}
        </div>

      </section>

      {/* ── 4. STUDIO SERVICES & CUSTOM CALCULATOR SECTION ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-t border-[#D8D3CB] space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-bold">
            STUDIO SERVICES &amp; CALCULATOR
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717] font-normal">
            Build Your <em className="italic text-[#C47A65]">Custom Collection</em>
          </h2>
          <p className="text-xs sm:text-sm text-[#55504A] font-light">
            Select from the 6 core services offered by CMC FILMS to calculate a tailored investment estimate.
          </p>
        </div>

        {/* 6 Services Grid (01 to 06) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studioServices.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`bg-white p-8 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between relative ${
                  isSelected
                    ? "border-[#C47A65] ring-2 ring-[#C47A65]/30 shadow-lg"
                    : "border-[#D8D3CB]/70 hover:border-[#171717] hover:shadow-md"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-3xl text-[#C47A65] font-normal">
                      {service.no}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? "bg-[#C47A65] border-[#C47A65] text-white" : "border-[#D8D3CB]"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#171717] font-normal">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#55504A] font-light leading-relaxed">
                    {service.copy}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8D3CB]/50 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#68645E]">Est. Investment</span>
                  <span className="font-editorial text-xl text-[#C47A65] font-normal">
                    +₹{service.price.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Investment Summary Bar */}
        <div className="bg-[#171717] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C47A65] font-bold block">
              ESTIMATED INVESTMENT ({selectedServices.length} SERVICES SELECTED)
            </span>
            <span className="font-editorial text-3xl sm:text-5xl text-white block mt-1">
              ₹{calculatedTotalEstimate.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setEnquiryModalPkg({
                ...currentPackage,
                name: "Custom Multi-Service Collection",
                price: `₹${calculatedTotalEstimate.toLocaleString("en-IN")}`,
              });
              setFormSent(false);
            }}
            className="w-full sm:w-auto bg-[#C47A65] hover:bg-white hover:text-[#171717] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer shrink-0"
          >
            Enquire Custom Selection →
          </button>
        </div>

      </section>

      {/* ── 5. FAQ ACCORDION SECTION ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1400px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-[#C47A65] uppercase tracking-[0.25em] font-semibold">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#171717]">
            Frequently Asked <em className="italic text-[#C47A65]">Questions</em>
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D8D3CB]/80 space-y-2 shadow-xs">
              <h3 className="font-editorial text-xl sm:text-2xl text-[#171717] font-normal flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#C47A65] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. PACKAGE ENQUIRY MODAL ── */}
      {enquiryModalPkg && (
        <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-[#FAF8F5] text-[#171717] max-w-xl w-full p-6 sm:p-10 rounded-3xl border border-[#D8D3CB] shadow-2xl relative space-y-6 my-8">
            
            <button
              type="button"
              onClick={() => setEnquiryModalPkg(null)}
              className="absolute top-6 right-6 text-[#68645E] hover:text-[#C47A65] p-1 rounded-full text-xs font-mono"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-[#D8D3CB] pb-4">
              <span className="text-xs font-mono text-[#C47A65] uppercase font-bold">
                PACKAGE ENQUIRY
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#171717]">
                {enquiryModalPkg.name}
              </h3>
              <p className="text-xs font-mono text-[#68645E]">
                {enquiryModalPkg.price}
              </p>
            </div>

            {formSent ? (
              <div className="py-8 text-center space-y-3">
                <h4 className="font-editorial text-3xl text-[#C47A65]">Enquiry Sent!</h4>
                <p className="text-xs sm:text-sm text-[#55504A] font-light">
                  We have received your enquiry for {enquiryModalPkg.name}. Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquiryModalPkg(null)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#171717] text-white text-xs font-mono font-semibold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[#171717] font-semibold mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name..."
                    className="w-full p-3 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                  />
                </div>

                <div>
                  <label className="block text-[#171717] font-semibold mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full p-3 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#171717] font-semibold mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full p-3 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#171717] font-semibold mb-1">Wedding Date</label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#171717] font-semibold mb-1">Event Location / Venue</label>
                  <input
                    type="text"
                    placeholder="City / Venue name (e.g. Udaipur, Jaipur)"
                    className="w-full p-3 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-4"
                >
                  <span>Submit Package Enquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
