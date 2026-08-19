import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Check, Sparkles, Star, ArrowRight, ArrowLeft, ShieldCheck, Camera, Film, Clock, HelpCircle, X, Send, Award, Sliders } from "lucide-react";
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
      "Aerial 4K Drone Coverage (Subject to venue permissions)",
      "Dedicated Lighting & Sound Design Technicians",
      "Complimentary Pre-Wedding Dawn Session in Jaipur/Udaipur",
      "Same-Day Edit Teaser Video for Reception Screening",
      "Direct Priority Director Post-Production Supervision",
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
      "Aerial 4K Drone Photography & Videography",
      "Professional Sound Recorders for Vows & Speeches",
      "Color-Graded High-Resolution Digital Master",
      "Travel & Stay Included (Within India)",
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
      "Unscripted Candid Photography Focus",
      "Color-Corrected High-Resolution Images",
      "Full Digital Delivery via Private Cloud Drive",
      "Personalized Music Selection Consultation",
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
    coverageHours: "Full Day (Dawn to Golden Hour Sunset)",
    crewDetails: "1 Senior Creative Photographer + 1 Reel Cinematographer",
    deliverables: [
      "40 High-Fashion Retouched Fine-Art Portraits",
      "60-Second Cinematic Mood Reel (4K)",
      "High-Res Digital Photo Gallery",
    ],
    features: [
      "Location Guidance (Amer Haveli, Lake Pichola, or Goa)",
      "Wardrobe & Color Palette Styling Consultation",
      "Low-Pressure Candid Posing Direction",
      "Delivery within 10 Working Days",
    ],
  },
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

const customAddOns = [
  { id: "add-1", label: "Aerial 4K Drone Coverage", price: 25000 },
  { id: "add-2", label: "Pre-Wedding Dawn Session", price: 35000 },
  { id: "add-3", label: "Extra Day Event Coverage", price: 65000 },
  { id: "add-4", label: "2nd Heirloom Leather Album", price: 30000 },
  { id: "add-5", label: "Same-Day Edit Reception Teaser", price: 20000 },
];

export function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [enquiryModalPkg, setEnquiryModalPkg] = useState<PackageTier | null>(null);
  const [formSent, setFormSent] = useState(false);

  // Custom Investment Builder State
  const [basePrice, setBasePrice] = useState<number>(350000);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["add-1"]);

  const categories = ["All", "Royal", "Destination", "Intimate", "Couple Shoot"];

  const filteredPackages = useMemo(() => {
    if (selectedCategory === "All") return packageTiers;
    return packageTiers.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [selectedCategory]);

  const currentPackage = filteredPackages[activeSlideIndex] || filteredPackages[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotalEstimate = useMemo(() => {
    const addOnSum = selectedAddOns.reduce((sum, addId) => {
      const addObj = customAddOns.find((a) => a.id === addId);
      return sum + (addObj ? addObj.price : 0);
    }, 0);
    return basePrice + addOnSum;
  }, [basePrice, selectedAddOns]);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── 1. HERO SECTION (DARK CINEMA WITH CURSIVE WATERMARK OVERLAY) ── */}
      <section className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full bg-[#0C0D10] overflow-hidden flex items-center justify-center text-center px-6">
        <img
          src={hero}
          alt="CMC FILMS Packages Hero"
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

      {/* ── 2. FILTER PILLS STRIP ── */}
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

      {/* ── 3. UNIQUE INTERACTIVE PACKAGE CAROUSEL (IVORY THEME) ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 max-w-[1500px] mx-auto space-y-12">
        
        {/* Carousel Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Navigation Arrow Controls */}
          <div className="w-full flex items-center justify-between absolute top-1/2 -translate-y-1/2 inset-x-0 z-30 pointer-events-none px-2 sm:px-4">
            <button
              type="button"
              onClick={() =>
                setActiveSlideIndex((prev) =>
                  prev === 0 ? filteredPackages.length - 1 : prev - 1
                )
              }
              aria-label="Previous package"
              className="pointer-events-auto h-12 w-12 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white flex items-center justify-center transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveSlideIndex((prev) => (prev + 1) % filteredPackages.length)
              }
              aria-label="Next package"
              className="pointer-events-auto h-12 w-12 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white flex items-center justify-center transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Display Showcase */}
          <div className="w-full max-w-4xl overflow-hidden py-4 px-2">
            {currentPackage && (
              <div
                key={currentPackage.id}
                className="bg-white border border-[#D8D3CB] rounded-3xl p-6 sm:p-12 shadow-xl relative overflow-hidden transition-all duration-500 animate-in fade-in zoom-in-95 space-y-8"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-[#D8D3CB]/60 pb-8">
                  <div className="space-y-2">
                    {currentPackage.badge && (
                      <span className="bg-[#C47A65] text-white text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1 rounded-full inline-block shadow-xs">
                        {currentPackage.badge}
                      </span>
                    )}
                    <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717] font-normal">
                      {currentPackage.name}
                    </h2>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#C47A65]">
                      {currentPackage.subtitle}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="font-editorial text-4xl sm:text-6xl text-[#171717] block">
                      {currentPackage.price}
                    </span>
                    <span className="text-xs font-mono text-[#68645E]">
                      {currentPackage.unit}
                    </span>
                  </div>
                </div>

                {/* Coverage & Crew Details Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF8F5] p-4 sm:p-6 rounded-2xl border border-[#D8D3CB]/60 text-xs font-mono text-[#171717]">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C47A65] shrink-0" />
                    <span>{currentPackage.coverageHours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-[#C47A65] shrink-0" />
                    <span>{currentPackage.crewDetails}</span>
                  </div>
                </div>

                {/* Deliverables & Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  
                  {/* Deliverables */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-bold">
                      FILM &amp; PHOTO DELIVERABLES
                    </h4>
                    <ul className="space-y-3">
                      {currentPackage.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#55504A] font-light">
                          <Check className="w-4 h-4 text-[#C47A65] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-bold">
                      INCLUDED SPECIAL SERVICES
                    </h4>
                    <ul className="space-y-3">
                      {currentPackage.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#55504A] font-light">
                          <Sparkles className="w-4 h-4 text-[#C47A65] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Action Button */}
                <div className="pt-6 border-t border-[#D8D3CB]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setEnquiryModalPkg(currentPackage);
                      setFormSent(false);
                    }}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Check Availability &amp; Enquire</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-[#68645E]">
                    Collection {activeSlideIndex + 1} of {filteredPackages.length}
                  </span>
                </div>

              </div>
            )}
          </div>

          {/* Carousel Dots Indicator */}
          <div className="flex items-center gap-3 pt-6">
            {filteredPackages.map((pkg, idx) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                aria-label={`Jump to ${pkg.name}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === activeSlideIndex
                    ? "w-8 bg-[#171717]"
                    : "w-2.5 bg-[#171717]/20 hover:bg-[#171717]/40"
                }`}
              />
            ))}
          </div>

        </div>

      </section>

      {/* ── 4. INTERACTIVE "BUILD YOUR CUSTOM COLLECTION" PRICING ESTIMATOR ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1500px] mx-auto border-t border-[#D8D3CB] space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C47A65] font-bold">
            CUSTOMIZATION CALCULATOR
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717] font-normal">
            Estimate Your <em className="italic text-[#C47A65]">Custom Collection</em>
          </h2>
          <p className="text-xs sm:text-sm text-[#55504A] font-light">
            Select your preferred base coverage and add bespoke services to build a personalized package proposal.
          </p>
        </div>

        <div className="bg-[#F3EEE7] p-8 sm:p-12 rounded-3xl border border-[#D8D3CB] max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Base Selection */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-semibold block mb-2">
                1. SELECT BASE COVERAGE
              </label>
              <select
                value={basePrice}
                onChange={(e) => setBasePrice(Number(e.target.value))}
                className="w-full bg-white text-[#171717] border border-[#D8D3CB] p-3.5 rounded-xl font-mono text-xs outline-none focus:border-[#C47A65]"
              >
                <option value={350000}>3-Day Royal Palace Collection (₹3,50,000)</option>
                <option value={240000}>2-Day Destination Cinema (₹2,40,000)</option>
                <option value={140000}>1-Day Intimate Story (₹1,40,000)</option>
                <option value={65000}>Pre-Wedding Concept Shoot (₹65,000)</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-[#C47A65] font-semibold block">
                2. CHOOSE BESPOKE ADD-ONS
              </label>

              <div className="space-y-2.5">
                {customAddOns.map((add) => {
                  const checked = selectedAddOns.includes(add.id);
                  return (
                    <div
                      key={add.id}
                      onClick={() => toggleAddOn(add.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono cursor-pointer transition-all ${
                        checked
                          ? "bg-[#C47A65]/15 border-[#C47A65] text-[#171717] font-semibold"
                          : "bg-white border-[#D8D3CB] text-[#55504A] hover:bg-[#FAF8F5]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? "bg-[#C47A65] border-[#C47A65]" : "border-[#D8D3CB]"}`}>
                          {checked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>{add.label}</span>
                      </div>
                      <span className="text-[#C47A65]">+₹{add.price.toLocaleString("en-IN")}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Calculated Total Card */}
          <div className="md:col-span-6 bg-white p-8 rounded-2xl border border-[#D8D3CB] shadow-md space-y-6 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#68645E]">
              ESTIMATED INVESTMENT
            </span>

            <div className="space-y-1">
              <span className="font-editorial text-4xl sm:text-5xl text-[#C47A65] block font-normal">
                ₹{calculatedTotalEstimate.toLocaleString("en-IN")}
              </span>
              <span className="text-[11px] font-mono text-[#68645E] block">
                Includes all selected add-ons &amp; Taxes
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setEnquiryModalPkg({
                  ...currentPackage,
                  name: "Custom Package Proposal",
                  price: `₹${calculatedTotalEstimate.toLocaleString("en-IN")}`,
                });
                setFormSent(false);
              }}
              className="w-full py-4 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md cursor-pointer"
            >
              Request Custom Proposal
            </button>
          </div>

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
