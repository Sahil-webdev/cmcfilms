import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Check, Sparkles, Star, ArrowRight, ShieldCheck, Camera, Film, Clock, HelpCircle, X, Send, Award } from "lucide-react";
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

export function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [enquiryModalPkg, setEnquiryModalPkg] = useState<PackageTier | null>(null);
  const [formSent, setFormSent] = useState(false);

  const categories = ["All", "Royal", "Destination", "Intimate", "Couple Shoot"];

  const filteredPackages = useMemo(() => {
    if (selectedCategory === "All") return packageTiers;
    return packageTiers.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="bg-[#FAF8F5] text-[#261E1E] font-sans selection:bg-[#93191E]/20 relative overflow-hidden">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative h-[65vh] min-h-[500px] w-full bg-[#0C0D10] text-white flex flex-col justify-end p-6 sm:p-12 md:p-16 overflow-hidden">
        <img
          src={hero}
          alt="CMC FILMS Luxury Investment Packages"
          className="absolute inset-0 h-full w-full object-cover opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/40 to-black/60" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C47A65] font-semibold">
            TRANSPARENT INVESTMENT & COLLECTIONS
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-white leading-none">
            Wedding <em className="font-editorial italic text-[#C47A65] font-normal">Packages</em>
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-sans font-light max-w-xl leading-relaxed">
            Thoughtfully structured photography & cinema collections designed to preserve every unrepeatable emotion of your celebration.
          </p>
        </div>
      </section>

      {/* ── 2. PACKAGE TIER CARDS GRID ── */}
      <section className="py-20 md:py-28 px-6 md:px-14 max-w-[1600px] mx-auto space-y-14">
        
        {/* Filter Pills */}
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#93191E] uppercase tracking-[0.25em] font-semibold">
            SELECT YOUR EVENT TYPE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-[#261E1E]">
            Tailored <em className="font-editorial italic text-[#93191E] font-normal">Cinematic Collections</em>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-[#383330] text-white shadow-md"
                      : "bg-[#EFECE6] text-[#261E1E]/75 hover:bg-[#E2DDD5] hover:text-[#261E1E]"
                  }`}
                >
                  {cat === "All" ? "All Collections" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-6 sm:p-10 border transition-all duration-500 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl ${
                pkg.isPopular
                  ? "border-[#93191E] ring-1 ring-[#93191E]/30"
                  : "border-black/10 hover:border-black/30"
              }`}
            >
              {/* Optional Popular Badge */}
              {pkg.badge && (
                <span className="absolute -top-3.5 left-8 bg-[#93191E] text-white text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </span>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-black/10 pb-6">
                  <span className="text-xs font-mono text-[#93191E] uppercase font-semibold">
                    {pkg.subtitle}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#261E1E] font-light">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#261E1E]/70 font-sans font-light leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-light text-[#261E1E]">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-mono text-[#261E1E]/60">{pkg.unit}</span>
                </div>

                {/* Coverage & Crew Details */}
                <div className="space-y-2 bg-[#FAF8F5] p-4 rounded-xl border border-black/5 text-xs font-mono text-[#261E1E]/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#93191E]" />
                    <span>{pkg.coverageHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#93191E]" />
                    <span>{pkg.crewDetails}</span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#261E1E]">
                    FILM & PHOTO DELIVERABLES
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#261E1E]/85">
                        <Check className="w-4 h-4 text-[#93191E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special Features */}
                <div className="space-y-3 pt-2 border-t border-black/5">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#93191E]">
                    INCLUDED SPECIAL SERVICES
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#261E1E]/75 font-sans font-light">
                        <Sparkles className="w-3.5 h-3.5 text-[#93191E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryModalPkg(pkg);
                    setFormSent(false);
                  }}
                  className={`w-full py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? "bg-[#93191E] hover:bg-[#261E1E] text-white"
                      : "bg-[#261E1E] hover:bg-[#93191E] text-white"
                  }`}
                >
                  <span>Check Availability & Enquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. FAQ ACCORDION SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-14 bg-[#F5F1EB] border-t border-b border-black/10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[#93191E] uppercase tracking-[0.25em] font-semibold">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#261E1E]">
              Frequently Asked <em className="font-editorial italic text-[#93191E]">Questions</em>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-black/5 space-y-3 shadow-xs">
                <h3 className="font-display text-xl sm:text-2xl text-[#261E1E] font-normal flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#93191E] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#261E1E]/75 font-sans font-light leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. PACKAGE ENQUIRY MODAL ── */}
      {enquiryModalPkg && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-[#FAF8F5] text-[#261E1E] max-w-xl w-full p-6 sm:p-10 rounded-3xl border border-black/10 shadow-2xl relative space-y-6 my-8">
            
            <button
              type="button"
              onClick={() => setEnquiryModalPkg(null)}
              className="absolute top-6 right-6 text-[#261E1E]/60 hover:text-[#93191E] p-1 rounded-full text-xs font-mono"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-black/10 pb-4">
              <span className="text-xs font-mono text-[#93191E] uppercase font-bold">
                PACKAGE ENQUIRY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#261E1E]">
                {enquiryModalPkg.name}
              </h3>
              <p className="text-xs font-mono text-[#261E1E]/60">
                {enquiryModalPkg.price} · {enquiryModalPkg.subtitle}
              </p>
            </div>

            {formSent ? (
              <div className="py-8 text-center space-y-3">
                <h4 className="font-display text-3xl text-[#93191E]">Enquiry Sent!</h4>
                <p className="text-xs sm:text-sm text-[#261E1E]/75 font-sans">
                  We have received your enquiry for the {enquiryModalPkg.name}. Our team will review availability and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquiryModalPkg(null)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#261E1E] text-white text-xs font-mono"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[#261E1E] font-semibold mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name..."
                    className="w-full p-3 rounded-xl bg-white border border-black/10 font-sans text-xs focus:outline-none focus:border-[#93191E]"
                  />
                </div>

                <div>
                  <label className="block text-[#261E1E] font-semibold mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full p-3 rounded-xl bg-white border border-black/10 font-sans text-xs focus:outline-none focus:border-[#93191E]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#261E1E] font-semibold mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full p-3 rounded-xl bg-white border border-black/10 font-sans text-xs focus:outline-none focus:border-[#93191E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#261E1E] font-semibold mb-1">Wedding Date</label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-xl bg-white border border-black/10 font-sans text-xs focus:outline-none focus:border-[#93191E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#261E1E] font-semibold mb-1">Event Location / Venue</label>
                  <input
                    type="text"
                    placeholder="City / Venue name (e.g. Udaipur, Jaipur)"
                    className="w-full p-3 rounded-xl bg-white border border-black/10 font-sans text-xs focus:outline-none focus:border-[#93191E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#93191E] hover:bg-[#261E1E] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-4"
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
