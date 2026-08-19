import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Check, Sparkles, ArrowRight, Camera, Film, Clock, HelpCircle, X, Send, ArrowUpRight, ArrowLeft, Search, Filter, RotateCcw, ChevronDown, ChevronUp, MapPin, Award, SlidersHorizontal, Phone, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Image Imports
import hero from "@/assets/featured.jpg";
import luxuryEditorial from "@/assets/luxury-editorial.jpg";
import coastal from "@/assets/coastal.jpg";
import haldi from "@/assets/haldi.jpg";
import couplesHeroCustom from "@/assets/couples-hero-custom.jpg";
import maternity from "@/assets/maternity.jpg";
import pin1 from "@/assets/pinterest/pin1.jpg";
import pin7 from "@/assets/pinterest/pin7.jpg";
import pin8 from "@/assets/pinterest/pin8.jpg";

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

export interface DetailedOffering {
  id: string;
  name: string;
  duration: string;
  destinations: string;
  themes: string;
  price: string;
  numericPrice: number;
  image: string;
  categoryTag: string;
  inclusions: string[];
}

export interface ServiceDetail {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  copy: string;
  fullDescription: string;
  price: string;
  numericPrice: number;
  image: string;
  offerings: DetailedOffering[];
}

const servicesData: ServiceDetail[] = [
  {
    id: "pkg-1",
    no: "01",
    title: "WEDDING PHOTOGRAPHY",
    subtitle: "Full Day Traditional & Candid Photography",
    copy: "Two to three senior photographers quietly present through every hour of your celebration.",
    fullDescription:
      "Our wedding photography archives capture the genuine spirit, emotional glances, royal grandeur, and quiet romantic pauses of your wedding days. We combine unobtrusive candid photojournalism with editorial fine-art portraiture so every heirloom moment is preserved for generations.",
    price: "₹1,20,000",
    numericPrice: 120000,
    image: couplesHeroCustom,
    offerings: [
      {
        id: "off-1",
        name: "Royal Palace 3-Day Photography Archive",
        duration: "3 Days, 3 Nights",
        destinations: "Jaipur, Udaipur, Jodhpur Palaces",
        themes: "Royal, Heritage, Fine-Art, Candid",
        price: "INR 2,20,000",
        numericPrice: 220000,
        image: luxuryEditorial,
        categoryTag: "Royal Luxury",
        inclusions: ["3 Senior Photographers", "1 Candid Specialist", "1000+ Retouched Photos", "2 Leather Photo Albums", "Raw Master Files"],
      },
      {
        id: "off-2",
        name: "Destination Resort Nuptials (2 Days)",
        duration: "2 Days, 2 Nights",
        destinations: "Goa, Kerala, Rishikesh Resorts",
        themes: "Destination, Beach, Romantic",
        price: "INR 1,60,000",
        numericPrice: 160000,
        image: coastal,
        categoryTag: "Destination",
        inclusions: ["2 Senior Photographers", "600+ Retouched Photos", "1 Fine-Art Hardcover Album", "Private Cloud Gallery"],
      },
      {
        id: "off-3",
        name: "Intimate Single-Day Wedding Story",
        duration: "1 Day (12 Continuous Hours)",
        destinations: "Udaipur & Local Venues",
        themes: "Intimate, Candid, Unscripted",
        price: "INR 1,20,000",
        numericPrice: 120000,
        image: haldi,
        categoryTag: "Standard",
        inclusions: ["1 Lead Photographer", "400+ Retouched Photos", "Private Cloud Gallery", "Same-Week Delivery"],
      },
    ],
  },
  {
    id: "pkg-2",
    no: "02",
    title: "WEDDING CINEMATOGRAPHY",
    subtitle: "4K Cinematic Film & Highlights",
    copy: "A 4K cinematic film cut for feeling — capturing vows, laughter, and emotional pauses.",
    fullDescription:
      "CMC FILMS cinema feature films are crafted like high-end motion pictures. We use 4K cinema cameras, prime lenses, multi-channel sound recorders for wedding vows and speeches, and dedicated color grading to create an unforgettable cinematic story film.",
    price: "₹1,50,000",
    numericPrice: 150000,
    image: coastal,
    offerings: [
      {
        id: "off-4",
        name: "Royal Cinema Feature Film (3 Days)",
        duration: "3 Days, 3 Nights",
        destinations: "Udaipur & Royal Venues",
        themes: "Grand Cinema, Vows & Speeches, 4K",
        price: "INR 2,80,000",
        numericPrice: 280000,
        image: coastal,
        categoryTag: "Royal Cinema",
        inclusions: ["1 Lead Director", "3 4K Cinematographers", "45-Min Feature Film", "60s Teaser Reel", "Aerial Drone", "Sound Recorders"],
      },
      {
        id: "off-5",
        name: "Destination Coastal Highlight Film (2 Days)",
        duration: "2 Days, 2 Nights",
        destinations: "Goa & Beach Resorts",
        themes: "Coastal, Sunset, Romantic Film",
        price: "INR 2,10,000",
        numericPrice: 210000,
        image: hero,
        categoryTag: "Destination",
        inclusions: ["1 Lead Director", "2 Cinematographers", "30-Min Highlight Film", "2-Min Teaser Trailer", "Aerial Drone"],
      },
      {
        id: "off-6",
        name: "Intimate Story Feature Film (1 Day)",
        duration: "1 Day (12 Continuous Hours)",
        destinations: "Udaipur / Heritage Venues",
        themes: "Intimate, Heartfelt, 4K Film",
        price: "INR 1,50,000",
        numericPrice: 150000,
        image: haldi,
        categoryTag: "Standard",
        inclusions: ["1 Lead Cinematographer", "15-20 Min Story Film", "1-Min Teaser Reel", "High-Speed SSD Delivery"],
      },
    ],
  },
  {
    id: "pkg-3",
    no: "03",
    title: "PRE-WEDDING STORIES",
    subtitle: "Dawn Outdoor Concept Shoot",
    copy: "Outdoor dawn concept shoot in Jaipur, Udaipur, Goa, or royal haveli locations.",
    fullDescription:
      "Relaxed, romantic pre-wedding shoots designed around your pure chemistry. We guide you through golden hour dawn locations across Rajasthan fort havelis, serene lakes, or ocean shores.",
    price: "₹45,000",
    numericPrice: 45000,
    image: pin7,
    offerings: [
      {
        id: "off-7",
        name: "Royal Heritage Fort Session (Full Day)",
        duration: "1 Full Day (Dawn to Sunset)",
        destinations: "Amer Fort / Udaipur Palace",
        themes: "Royal Haveli, Fine-Art Portraits",
        price: "INR 65,000",
        numericPrice: 65000,
        image: pin7,
        categoryTag: "Royal Concept",
        inclusions: ["1 Creative Photographer", "1 Reel Specialist", "40 Fine-Art Portraits", "60s Mood Reel", "Styling Guidance"],
      },
      {
        id: "off-8",
        name: "Coastal Shore Concept Shoot (Full Day)",
        duration: "1 Full Day",
        destinations: "Goa Shores & Palm Groves",
        themes: "Beach, Casual, Romantic",
        price: "INR 55,000",
        numericPrice: 55000,
        image: couplesHeroCustom,
        categoryTag: "Destination",
        inclusions: ["1 Photographer", "35 Retouched Portraits", "Instagram Teaser", "Private Gallery"],
      },
      {
        id: "off-9",
        name: "Scenic Dawn Couple Session (Half Day)",
        duration: "Half Day (Golden Hour)",
        destinations: "Lake Pichola / Forts",
        themes: "Golden Hour, Sunset Portraits",
        price: "INR 45,000",
        numericPrice: 45000,
        image: pin1,
        categoryTag: "Standard",
        inclusions: ["1 Photographer", "25 Retouched Portraits", "Digital Delivery"],
      },
    ],
  },
  {
    id: "pkg-4",
    no: "04",
    title: "DESTINATION WEDDINGS",
    subtitle: "Multi-Day Resort & Palace Nuptials",
    copy: "Full multi-day destination wedding coverage across India & international venues.",
    fullDescription:
      "Complete multi-day photography & cinema coverage crafted specifically for destination weddings in Jaipur, Udaipur, Goa, Kerala, Dubai, and beyond with transparent travel and crew coordination.",
    price: "₹2,80,000",
    numericPrice: 280000,
    image: hero,
    offerings: [
      {
        id: "off-10",
        name: "Grand Palace Destination Archive (3 Days)",
        duration: "3 Days, 3 Nights",
        destinations: "Palace Venues (Jaipur/Udaipur)",
        themes: "Royal, Multi-Day, Luxury",
        price: "INR 3,80,000",
        numericPrice: 380000,
        image: luxuryEditorial,
        categoryTag: "Royal Palace",
        inclusions: ["Complete Photo & Cinema Crew", "2 Lead Directors", "Aerial 4K Drone", "2 Fine-Art Albums", "Raw SSD Master"],
      },
      {
        id: "off-11",
        name: "Beach Resort Destination Nuptials (2 Days)",
        duration: "2 Days, 2 Nights",
        destinations: "Goa & Beach Resorts",
        themes: "Destination, Sunset, Coastal",
        price: "INR 2,80,000",
        numericPrice: 280000,
        image: coastal,
        categoryTag: "Resort Nuptials",
        inclusions: ["Photo + 4K Cinema Team", "30-Min Highlight Film", "1 Photo Album", "Travel Included in India"],
      },
    ],
  },
  {
    id: "pkg-5",
    no: "05",
    title: "COUPLE PORTRAITS",
    subtitle: "Editorial Fine-Art Portraiture",
    copy: "Editorial fine-art portraits & romantic couples sessions in studio or scenic outdoor sets.",
    fullDescription:
      "High-fashion editorial portraits capturing your authentic bond in natural outdoor light or studio settings.",
    price: "₹35,000",
    numericPrice: 35000,
    image: pin8,
    offerings: [
      {
        id: "off-12",
        name: "Editorial Fine-Art Couple Shoot",
        duration: "Half Day (4 Hours)",
        destinations: "Studio or Scenic Outdoor",
        themes: "Fine-Art, Fashion, Romantic",
        price: "INR 45,000",
        numericPrice: 45000,
        image: pin8,
        categoryTag: "Fine-Art",
        inclusions: ["1 Creative Photographer", "30 Retouched Portraits", "Styling Guidance", "Private Online Gallery"],
      },
      {
        id: "off-13",
        name: "Classic Couple Portrait Session",
        duration: "2 to 3 Hours",
        destinations: "Local Scenic Locations",
        themes: "Classic, Romantic",
        price: "INR 35,000",
        numericPrice: 35000,
        image: pin1,
        categoryTag: "Classic",
        inclusions: ["1 Photographer", "20 Retouched Portraits", "Digital Cloud Delivery"],
      },
    ],
  },
  {
    id: "pkg-6",
    no: "06",
    title: "MATERNITY PHOTOSHOOT",
    subtitle: "Fine-Art Aesthetic Portraiture",
    copy: "Fine-art aesthetic portraiture celebrating new beginnings in studio or outdoor glow.",
    fullDescription:
      "Warm, comfortable, and aesthetic fine-art portraiture celebrating new beginnings for expecting parents.",
    price: "₹30,000",
    numericPrice: 30000,
    image: maternity,
    offerings: [
      {
        id: "off-14",
        name: "Luxury Fine-Art Maternity Story",
        duration: "Half Day (3-4 Hours)",
        destinations: "Studio or Outdoor Location",
        themes: "Maternity, Aesthetic, Fine-Art",
        price: "INR 35,000",
        numericPrice: 35000,
        image: maternity,
        categoryTag: "Luxury Fine-Art",
        inclusions: ["1 Senior Photographer", "25 Retouched Fine-Art Portraits", "Wardrobe Styling Guidance", "Private Gallery"],
      },
      {
        id: "off-15",
        name: "Classic Maternity Session",
        duration: "2 Hours",
        destinations: "Studio Setup",
        themes: "Aesthetic, Posing Direction",
        price: "INR 30,000",
        numericPrice: 30000,
        image: maternity,
        categoryTag: "Classic",
        inclusions: ["1 Photographer", "20 Retouched Portraits", "10-Day Delivery"],
      },
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
  const [activeDetailService, setActiveDetailService] = useState<ServiceDetail | null>(null);
  const [enquiryModalItem, setEnquiryModalItem] = useState<{ name: string; price: string } | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Search & Filter State inside Detail View
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState<string[]>([]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("All");

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

  // Filtered offerings inside Detail View
  const filteredOfferings = useMemo(() => {
    if (!activeDetailService) return [];
    return activeDetailService.offerings.filter((off) => {
      const matchesSearch = off.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            off.destinations.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategoryFilter === "All" || off.categoryTag === selectedCategoryFilter;
      const matchesDuration = selectedDuration.length === 0 || selectedDuration.some(d => off.duration.includes(d));
      return matchesSearch && matchesCategory && matchesDuration;
    });
  }, [activeDetailService, searchQuery, selectedCategoryFilter, selectedDuration]);

  return (
    <main className="bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8D3CB] selection:text-[#171717] min-h-screen relative">
      
      {/* ── IF A CARD IS CLICKED: DEDICATED DETAIL PAGE VIEW MATCHING SCREENSHOTS ── */}
      {activeDetailService ? (
        <div className="pt-20 sm:pt-28 pb-20 px-3 sm:px-8 md:px-12 max-w-[1550px] mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          
          {/* Breadcrumb Bar */}
          <div className="flex items-center justify-between border-b border-[#D8D3CB]/60 pb-3 text-xs font-mono text-[#68645E]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveDetailService(null)}
                className="hover:text-[#C47A65] underline flex items-center gap-1 cursor-pointer font-bold text-[#171717]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Packages</span>
              </button>
              <span>/</span>
              <span className="text-[#C47A65] font-semibold truncate max-w-[150px] sm:max-w-none">{activeDetailService.title}</span>
            </div>

            <button
              type="button"
              onClick={() => setActiveDetailService(null)}
              className="bg-[#171717] text-white px-3.5 py-1 rounded-full text-[11px] font-mono hover:bg-[#C47A65] transition-all cursor-pointer shrink-0"
            >
              ← Back
            </button>
          </div>

          {/* 1. Landscape Hero Banner Image (Matching Top Banner in Screenshots) */}
          <div className="relative h-[180px] sm:h-[260px] md:h-[340px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#D8D3CB]/60 bg-black">
            <img
              src={activeDetailService.image}
              alt={activeDetailService.title}
              className="h-full w-full object-cover opacity-85 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-10 max-w-xl text-left space-y-1">
              <span className="text-[9px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C47A65] font-bold">
                PLAN YOUR SHOOT TO
              </span>
              <h1 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight uppercase leading-tight">
                {activeDetailService.title}
              </h1>
            </div>
          </div>

          {/* 2. Package Summary Description Box (Matching Description Box in Screenshots) */}
          <div className="bg-white p-4 sm:p-7 rounded-2xl border border-[#D8D3CB] shadow-xs space-y-2.5 text-left">
            <h2 className="font-editorial text-xl sm:text-3xl text-[#171717] font-bold">
              {activeDetailService.title} Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#55504A] font-light leading-relaxed">
              {expandedDesc
                ? activeDetailService.fullDescription
                : `${activeDetailService.fullDescription.slice(0, 160)}...`}
            </p>
            <button
              type="button"
              onClick={() => setExpandedDesc((prev) => !prev)}
              className="text-xs font-mono text-[#C47A65] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>{expandedDesc ? "Read Less ▲" : "Read More ▼"}</span>
            </button>
          </div>

          {/* Mobile Filter Toggle Button (For Mobile Screens) */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFilterOpen((prev) => !prev)}
              className="w-full py-3 px-4 bg-white border border-[#D8D3CB] rounded-xl flex items-center justify-between text-xs font-mono font-bold text-[#171717] shadow-xs"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C47A65]" />
                <span>Search &amp; Filter Packages ({filteredOfferings.length})</span>
              </div>
              {mobileFilterOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* 3. Split 2-Column Section (Filter Sidebar + Main Packages List) (Matching Screenshot 1 & 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-1">
            
            {/* Left Filter Sidebar (Collapsible on Mobile, Sticky on Desktop) */}
            <div className={`lg:col-span-3 bg-white p-5 sm:p-6 rounded-2xl border border-[#D8D3CB] shadow-xs space-y-5 text-left sticky top-24 ${mobileFilterOpen ? "block" : "hidden lg:block"}`}>
              <div className="flex items-center justify-between border-b border-[#D8D3CB]/60 pb-3">
                <span className="text-xs font-mono font-bold text-[#171717]">
                  {filteredOfferings.length} out of {activeDetailService.offerings.length} packages
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDuration([]);
                    setSelectedCategoryFilter("All");
                  }}
                  className="text-[11px] font-mono text-[#C47A65] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Search Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold text-[#171717] uppercase block">
                  SEARCH PACKAGE
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by package name..."
                    className="w-full p-2.5 pl-8 rounded-xl bg-[#FAF8F5] border border-[#D8D3CB] text-xs font-sans outline-none focus:border-[#C47A65]"
                  />
                  <Search className="w-4 h-4 text-[#68645E] absolute left-2.5 top-3" />
                </div>
              </div>

              {/* Duration Checkboxes */}
              <div className="space-y-2 border-t border-[#D8D3CB]/60 pt-4">
                <label className="text-[11px] font-mono font-bold text-[#171717] uppercase block">
                  NUMBER OF DAYS / DURATION
                </label>
                <div className="space-y-2 text-xs font-mono text-[#55504A]">
                  {["3 Days", "2 Days", "1 Day", "Full Day", "Half Day"].map((dur) => (
                    <label key={dur} className="flex items-center gap-2 cursor-pointer hover:text-[#171717]">
                      <input
                        type="checkbox"
                        checked={selectedDuration.includes(dur)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedDuration([...selectedDuration, dur]);
                          else setSelectedDuration(selectedDuration.filter((d) => d !== dur));
                        }}
                        className="rounded accent-[#C47A65]"
                      />
                      <span>{dur}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-2 border-t border-[#D8D3CB]/60 pt-4">
                <label className="text-[11px] font-mono font-bold text-[#171717] uppercase block">
                  PACKAGE THEME / TYPE
                </label>
                <div className="space-y-1.5 text-xs font-mono">
                  {["All", "Royal Luxury", "Destination", "Standard", "Royal Concept", "Fine-Art"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategoryFilter(cat)}
                      className={`w-full text-left p-2 rounded-lg transition-all cursor-pointer ${
                        selectedCategoryFilter === cat
                          ? "bg-[#171717] text-white font-bold"
                          : "bg-[#FAF8F5] text-[#55504A] hover:bg-[#E5E0D8]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Packages List (Optimized for Mobile View matching DevTools screenshot) */}
            <div className="lg:col-span-9 space-y-5 sm:space-y-6 text-left">
              {filteredOfferings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D8D3CB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6 items-center"
                >
                  {/* Top / Left Thumbnail Image */}
                  <div className="w-full md:col-span-4 relative aspect-[16/10] overflow-hidden rounded-xl bg-[#D8D3CB] shrink-0">
                    <img
                      src={offering.image}
                      alt={offering.name}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#171717] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {offering.categoryTag}
                    </span>
                  </div>

                  {/* Middle Information Column */}
                  <div className="w-full md:col-span-5 space-y-2 text-left">
                    <div>
                      <h3 className="font-editorial text-lg sm:text-2xl text-[#171717] font-bold leading-tight">
                        {offering.name}
                      </h3>
                      <span className="text-xs font-mono text-[#C47A65] font-semibold block mt-0.5">
                        {offering.duration}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#55504A] space-y-0.5 font-sans">
                      <p><strong>Destinations:</strong> {offering.destinations}</p>
                      <p><strong>Themes:</strong> {offering.themes}</p>
                    </div>

                    {/* Inclusions Strip with Icons */}
                    <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] font-mono text-[#68645E]">
                      {offering.inclusions.slice(0, 3).map((inc, iIdx) => (
                        <span key={iIdx} className="bg-[#FAF8F5] border border-[#D8D3CB]/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#C47A65]" />
                          <span>{inc}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right / Bottom Pricing & CTA Column (Matching Mobile Screenshot Layout) */}
                  <div className="w-full md:col-span-3 text-left md:text-right border-t md:border-t-0 md:border-l border-[#D8D3CB]/60 pt-3 md:pt-0 md:pl-6 flex flex-row md:flex-col items-center md:items-end justify-between gap-3">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#68645E] block uppercase">Starting from</span>
                      <span className="font-sans text-xl sm:text-2xl font-extrabold text-[#00A651] block leading-none mt-1 tracking-tight">
                        {offering.price}
                      </span>
                      <span className="text-[9px] font-mono text-[#68645E] block mt-0.5 md:hidden">Per Event</span>
                    </div>

                    <div className="flex flex-row md:flex-col items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryModalItem({ name: offering.name, price: offering.price });
                          setFormSent(false);
                        }}
                        className="py-2 px-3.5 sm:px-5 rounded-full bg-[#C47A65] hover:bg-[#171717] text-white font-mono text-[11px] uppercase font-bold transition-all shadow-xs cursor-pointer whitespace-nowrap"
                      >
                        Book Now
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryModalItem({ name: offering.name, price: offering.price });
                          setFormSent(false);
                        }}
                        className="py-2 px-3.5 sm:px-5 rounded-full border border-[#C47A65] text-[#C47A65] hover:bg-[#C47A65] hover:text-white font-mono text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      ) : (
        /* ── MAIN OVERVIEW PAGE (HERO + 6 CARD BOXES + CALCULATOR + FAQS) ── */
        <>
          {/* ── 1. CLEAR HERO BORDERLESS BANNER WITH BOLD TITLE ── */}
          <section className="relative h-[220px] sm:h-[300px] md:h-[340px] w-full overflow-hidden flex items-center justify-center text-center px-6">
            <img
              src={hero}
              alt="Our Packages - CMC FILMS"
              className="absolute inset-0 h-full w-full object-cover opacity-90 object-center"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 pt-6 sm:pt-8">
              <h1 className="font-editorial text-3xl sm:text-6xl md:text-7xl text-white font-bold tracking-wider uppercase drop-shadow-md">
                Our Packages
              </h1>
            </div>
          </section>

          {/* ── 2. EXACT 4-COLUMN IMAGE CARDS GRID (OPTIMIZED FOR MOBILE) ── */}
          <section className="py-8 sm:py-16 px-4 sm:px-8 md:px-12 max-w-[1550px] mx-auto space-y-6 sm:space-y-8">
            
            {/* Title Header */}
            <div className="text-left space-y-1 max-w-xl">
              <h2 className="font-editorial text-xl sm:text-4xl text-[#171717] font-bold uppercase tracking-tight">
                Our Packages
              </h2>
              <p className="text-xs sm:text-sm text-[#55504A] font-light">
                Click any service card below to view detailed offerings, duration filters, and inclusions.
              </p>
            </div>

            {/* 4-Column Responsive Grid (Optimized for Mobile View) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {servicesData.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => {
                    setActiveDetailService(pkg);
                    window.scrollTo({ top: 250, behavior: "smooth" });
                  }}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[1.25/1] sm:aspect-square group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-black border border-black/10"
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
                    <span className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-snug drop-shadow-sm block">
                      {pkg.title}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 block mt-0.5">
                      Starting {pkg.price}
                    </span>
                  </div>

                  {/* Bottom Right Floating Badge Icon */}
                  <div className="absolute bottom-3 right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#171717] transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                </div>
              ))}
            </div>

          </section>

          {/* ── 3. CUSTOM MULTI-SERVICE CALCULATOR SECTION ── */}
          <section className="py-10 sm:py-16 px-4 sm:px-12 md:px-16 max-w-[1400px] mx-auto border-t border-[#D8D3CB] space-y-6 sm:space-y-8">
            
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {servicesData.map((service) => {
                const isSelected = selectedServices.includes(`srv-${service.no.replace(/^0/, '')}`);
                const srvId = `srv-${service.no.replace(/^0/, '')}`;
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(srvId)}
                    className={`bg-white p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer space-y-3 flex flex-col justify-between relative ${
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

                      <h3 className="font-editorial text-lg sm:text-xl text-[#171717] font-bold">
                        {service.title}
                      </h3>

                      <p className="text-[11px] text-[#55504A] font-light leading-snug">
                        {service.copy}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#D8D3CB]/50 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#68645E]">Est. Investment</span>
                      <span className="font-editorial text-base sm:text-lg text-[#C47A65] font-bold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Investment Summary Bar */}
            <div className="bg-[#171717] text-white p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C47A65] font-bold block">
                  ESTIMATED INVESTMENT ({selectedServices.length} SERVICES SELECTED)
                </span>
                <span className="font-editorial text-2xl sm:text-3xl text-white block mt-0.5 font-bold">
                  ₹{calculatedTotalEstimate.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setEnquiryModalItem({ name: "Custom Multi-Service Selection", price: `₹${calculatedTotalEstimate.toLocaleString("en-IN")}` });
                  setFormSent(false);
                }}
                className="w-full sm:w-auto bg-[#C47A65] hover:bg-white hover:text-[#171717] text-white px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer shrink-0"
              >
                Enquire Custom Selection →
              </button>
            </div>

          </section>

          {/* ── 4. FAQ ACCORDION SECTION ── */}
          <section className="py-10 sm:py-16 px-4 sm:px-12 md:px-16 max-w-[1300px] mx-auto space-y-6 sm:space-y-8 border-t border-[#D8D3CB]">
            <div className="text-center space-y-1.5">
              <span className="text-xs font-mono text-[#C47A65] uppercase tracking-[0.2em] font-semibold">
                QUESTIONS &amp; ANSWERS
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-[#171717]">
                Frequently Asked <em className="italic text-[#C47A65]">Questions</em>
              </h2>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-[#D8D3CB]/80 space-y-1.5 shadow-xs text-left">
                  <h3 className="font-editorial text-base sm:text-lg text-[#171717] font-normal flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#C47A65] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-[#55504A] font-light leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── PACKAGE ENQUIRY & DETAILS MODAL ── */}
      {enquiryModalItem && (
        <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-[#FAF8F5] text-[#171717] max-w-xl w-full p-5 sm:p-10 rounded-3xl border border-[#D8D3CB] shadow-2xl relative space-y-5 my-6 text-left">
            
            <button
              type="button"
              onClick={() => setEnquiryModalItem(null)}
              className="absolute top-5 right-5 text-[#68645E] hover:text-[#C47A65] p-1 rounded-full text-xs font-mono cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-[#D8D3CB] pb-3">
              <span className="text-[10px] font-mono text-[#C47A65] uppercase font-bold">
                PACKAGE ENQUIRY
              </span>
              <h3 className="font-editorial text-xl sm:text-3xl font-bold text-[#171717]">
                {enquiryModalItem.name}
              </h3>
              <p className="text-xs font-mono text-[#68645E]">
                {enquiryModalItem.price}
              </p>
            </div>

            {formSent ? (
              <div className="py-6 text-center space-y-3">
                <h4 className="font-editorial text-2xl sm:text-3xl text-[#C47A65]">Enquiry Sent!</h4>
                <p className="text-xs sm:text-sm text-[#55504A] font-light">
                  We have received your enquiry for {enquiryModalItem.name}. Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquiryModalItem(null)}
                  className="mt-3 px-6 py-2 rounded-full bg-[#171717] text-white text-xs font-mono font-semibold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-3.5 text-xs font-mono">
                <div>
                  <label className="block text-[#171717] font-semibold mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name..."
                    className="w-full p-2.5 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                  />
                </div>

                <div>
                  <label className="block text-[#171717] font-semibold mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full p-2.5 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#171717] font-semibold mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full p-2.5 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#171717] font-semibold mb-1">Event Date</label>
                    <input
                      type="date"
                      className="w-full p-2.5 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#171717] font-semibold mb-1">Event Location / Venue</label>
                  <input
                    type="text"
                    placeholder="City / Venue name (e.g. Udaipur, Jaipur)"
                    className="w-full p-2.5 rounded-xl bg-white border border-[#D8D3CB] font-sans text-xs focus:outline-none focus:border-[#C47A65]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#171717] hover:bg-[#C47A65] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-3"
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
