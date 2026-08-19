import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Check, Sparkles, ArrowRight, Camera, Film, Clock, HelpCircle, X, Send, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
import hero from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import couplesHeroCustom from "@/assets/couples-hero-custom.jpg";
import maternity from "@/assets/maternity.jpg";
import pin1 from "@/assets/pinterest/pin1.jpg";

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

export interface PackageService {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  copy: string;
  price: string;
  numericPrice: number;
  image: string;
  deliverables: string[];
}

const mainPackages: PackageService[] = [
  {
    id: "pkg-1",
    no: "01",
    title: "WEDDING PHOTOGRAPHY",
    subtitle: "Full Day Traditional & Candid Photography",
    copy: "Two to three senior photographers quietly present through every hour of your celebration.",
    price: "₹1,20,000",
    numericPrice: 120000,
    image: luxuryEditorial,
    deliverables: [
      "2 Senior Photographers + 1 Candid Specialist",
      "Full High-Res Edited Digital Photo Gallery (800+ Images)",
      "1 Handcrafted Leather Fine-Art Photo Album",
      "Raw Digital Master Files",
    ],
  },
  {
    id: "pkg-2",
    no: "02",
    title: "WEDDING CINEMATOGRAPHY",
    subtitle: "4K Cinematic Film & Highlights",
    copy: "A 4K cinematic film cut for feeling — capturing vows, laughter, and emotional pauses.",
    price: "₹1,50,000",
    numericPrice: 150000,
    image: coastal,
    deliverables: [
      "1 Lead Director + 2 Senior 4K Cinematographers",
      "30-Minute Cinematic Highlight Feature Film",
      "60-Second Teaser Reel for Instagram (within 72 hrs)",
      "Sound Recorders for Vows & Speeches",
    ],
  },
  {
    id: "pkg-3",
    no: "03",
    title: "PRE-WEDDING STORIES",
    subtitle: "Dawn Outdoor Concept Shoot",
    copy: "Outdoor dawn concept shoot in Jaipur, Udaipur, Goa, or royal haveli locations.",
    price: "₹45,000",
    numericPrice: 45000,
    image: couplesHeroCustom,
    deliverables: [
      "1 Creative Photographer + 1 Reel Specialist",
      "40 Retouched High-Fashion Fine-Art Portraits",
      "60-Second Cinematic Concept Teaser",
      "Location Guidance & Styling Consultation",
    ],
  },
  {
    id: "pkg-4",
    no: "04",
    title: "DESTINATION WEDDINGS",
    subtitle: "Multi-Day Resort & Palace Nuptials",
    copy: "Full multi-day destination wedding coverage across India & international venues.",
    price: "₹2,80,000",
    numericPrice: 280000,
    image: hero,
    deliverables: [
      "Comprehensive Multi-Day Photography & Cinema Team",
      "Aerial 4K Drone Coverage",
      "2 Fine-Art Albums + SSD Master Drive",
      "Travel & Stay Included (Within India)",
    ],
  },
  {
    id: "pkg-5",
    no: "05",
    title: "COUPLE PORTRAITS",
    subtitle: "Editorial Fine-Art Portraiture",
    copy: "Editorial fine-art portraits & romantic couples sessions in studio or scenic outdoor sets.",
    price: "₹35,000",
    numericPrice: 35000,
    image: pin1,
    deliverables: [
      "1 Senior Creative Portrait Photographer",
      "25 Retouched High-Resolution Images",
      "Online Private Client Photo Gallery",
      "Wardrobe & Color Palette Guidance",
    ],
  },
  {
    id: "pkg-6",
    no: "06",
    title: "MATERNITY PHOTOSHOOT",
    subtitle: "Fine-Art Aesthetic Portraiture",
    copy: "Fine-art aesthetic portraiture celebrating new beginnings in studio or outdoor glow.",
    price: "₹30,000",
    numericPrice: 30000,
    image: maternity,
    deliverables: [
      "1 Senior Photographer",
      "20 High-Res Retouched Fine-Art Portraits",
      "Low-Pressure Comfortable Posing Direction",
      "10-Day Delivery",
    ],
  },
];

const studioServices = [
  { id: "srv-1", no: "01", title: "Wedding Photography", price: 120000 },
  { id: "srv-2", no: "02", title: "Wedding Cinematography", price: 150000 },
  { id: "srv-3", no: "03", title: "Pre-Wedding Stories", price: 45000 },
  { id: "srv-4", no: "04", title: "Destination Weddings", price: 280000 },
  { id: "srv-5", no: "05", title: "Couple Portraits", price: 35000 },
  { id: "srv-6", no: "06", title: "Maternity Photoshoot", price: 30000 },
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
  const [enquiryModalPkg, setEnquiryModalPkg] = useState<PackageService | null>(null);
  const [formSent, setFormSent] = useState(false);

  // Custom Multi-Service Calculator State
  const [selectedServices, setSelectedServices] = useState<string[]>(["srv-1", "srv-2"]);

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

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── 1. CLEAR HERO BANNER WITH BOLD TITLE ── */}
      <section className="relative h-[240px] sm:h-[300px] md:h-[340px] w-full overflow-hidden flex items-center justify-center text-center px-6">
        <img
          src={hero}
          alt="Our Packages - CMC FILMS"
          className="absolute inset-0 h-full w-full object-cover opacity-90 object-center"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 pt-8">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-white font-bold tracking-wider uppercase drop-shadow-md">
            Our Packages
          </h1>
        </div>
      </section>

      {/* ── 2. EXACT 4-COLUMN IMAGE CARDS GRID (EXACT FORMAT MATCHING SCREENSHOT) ── */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 md:px-12 max-w-[1550px] mx-auto space-y-8">
        
        {/* Title Header */}
        <div className="text-left space-y-1 max-w-xl">
          <h2 className="font-editorial text-2xl sm:text-4xl text-[#171717] font-bold uppercase tracking-tight">
            Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#55504A] font-light">
            Thoughtfully planned photography &amp; cinema archives for every occasion.
          </p>
        </div>

        {/* 4-Column Image Grid matching user screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {mainPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => {
                setEnquiryModalPkg(pkg);
                setFormSent(false);
              }}
              className="relative overflow-hidden rounded-xl aspect-[1.1/1] sm:aspect-square group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-black border border-black/10"
            >
              {/* Full Image Fill */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Bottom Title Text Overlay (Left) */}
              <div className="absolute bottom-3 left-3.5 right-12 z-10 text-left">
                <span className="font-mono text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider leading-snug drop-shadow-sm block">
                  {pkg.title}
                </span>
                <span className="text-[10px] font-mono text-white/70 block mt-0.5">
                  Starting {pkg.price}
                </span>
              </div>

              {/* Bottom Right Floating Badge Icon (Exact Match to Screenshot) */}
              <div className="absolute bottom-3 right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#171717] transition-all duration-300 shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ── 3. CUSTOM MULTI-SERVICE CALCULATOR SECTION ── */}
      <section className="py-12 sm:py-16 px-6 sm:px-12 md:px-16 max-w-[1400px] mx-auto border-t border-[#D8D3CB] space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C47A65] font-bold">
            CUSTOMIZATION CALCULATOR
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-[#171717] font-normal">
            Build Your <em className="italic text-[#C47A65]">Custom Package</em>
          </h2>
          <p className="text-xs text-[#55504A] font-light">
            Select multiple services from the 6 core offerings to estimate your tailored wedding collection investment.
          </p>
        </div>

        {/* 6 Services Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainPackages.map((service) => {
            const isSelected = selectedServices.includes(`srv-${service.no.replace(/^0/, '')}`);
            const srvId = `srv-${service.no.replace(/^0/, '')}`;
            return (
              <div
                key={service.id}
                onClick={() => toggleService(srvId)}
                className={`bg-white p-5 rounded-2xl border transition-all duration-300 cursor-pointer space-y-3 flex flex-col justify-between relative ${
                  isSelected
                    ? "border-[#C47A65] ring-2 ring-[#C47A65]/30 shadow-md"
                    : "border-[#D8D3CB]/70 hover:border-[#171717]"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-2xl text-[#C47A65] font-normal">
                      {service.no}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? "bg-[#C47A65] border-[#C47A65] text-white" : "border-[#D8D3CB]"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl text-[#171717] font-bold">
                    {service.title}
                  </h3>

                  <p className="text-[11px] text-[#55504A] font-light leading-snug">
                    {service.copy}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D3CB]/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#68645E]">Est. Investment</span>
                  <span className="font-editorial text-lg text-[#C47A65] font-bold">
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Investment Summary Bar */}
        <div className="bg-[#171717] text-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C47A65] font-bold block">
              ESTIMATED INVESTMENT ({selectedServices.length} SERVICES SELECTED)
            </span>
            <span className="font-editorial text-3xl text-white block mt-0.5 font-bold">
              ₹{calculatedTotalEstimate.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setEnquiryModalPkg(mainPackages[0]);
              setFormSent(false);
            }}
            className="w-full sm:w-auto bg-[#C47A65] hover:bg-white hover:text-[#171717] text-white px-7 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer shrink-0"
          >
            Enquire Custom Selection →
          </button>
        </div>

      </section>

      {/* ── 4. FAQ ACCORDION SECTION ── */}
      <section className="py-12 sm:py-16 px-6 sm:px-12 md:px-16 max-w-[1300px] mx-auto space-y-8 border-t border-[#D8D3CB]">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#C47A65] uppercase tracking-[0.2em] font-semibold">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-[#171717]">
            Frequently Asked <em className="italic text-[#C47A65]">Questions</em>
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-[#D8D3CB]/80 space-y-1.5 shadow-xs">
              <h3 className="font-editorial text-lg text-[#171717] font-normal flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#C47A65] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#55504A] font-light leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. PACKAGE ENQUIRY & DETAILS MODAL ── */}
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
                PACKAGE ENQUIRY · {enquiryModalPkg.no}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
                {enquiryModalPkg.title}
              </h3>
              <p className="text-xs font-mono text-[#68645E]">
                {enquiryModalPkg.price}
              </p>
            </div>

            {/* Inclusions List inside Modal */}
            <div className="space-y-2 bg-white p-4 rounded-xl border border-[#D8D3CB]/60 text-xs">
              <span className="font-mono text-[#C47A65] font-bold uppercase block text-[10px]">
                KEY DELIVERABLES:
              </span>
              <ul className="space-y-1 text-[#55504A]">
                {enquiryModalPkg.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C47A65] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {formSent ? (
              <div className="py-8 text-center space-y-3">
                <h4 className="font-editorial text-3xl text-[#C47A65]">Enquiry Sent!</h4>
                <p className="text-xs sm:text-sm text-[#55504A] font-light">
                  We have received your enquiry for {enquiryModalPkg.title}. Our team will contact you shortly.
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
                    <label className="block text-[#171717] font-semibold mb-1">Event Date</label>
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
