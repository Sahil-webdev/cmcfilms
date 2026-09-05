import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import featured from "@/assets/featured.jpg";
import maternity from "@/assets/maternity.jpg";

export const studio = {
  name: "CMC FILMS",
  tagline: "Stories of Love. Told Forever.",
  positioning:
    "A luxury visual storytelling studio documenting love, emotion and legacy through photography and cinema.",
  email: "cmcfilms771@gmail.com",
  phone: "+91 74259 40636",
  address: "Urban Square Mall, Sukher, Udaipur, Rajasthan – 313001",
  address2: "Intali Road, Chungi Naka, Fatehnagar, Udaipur, Rajasthan",
  locations: [
    {
      title: "Sukher Studio",
      address: "Urban Square Mall, Sukher, Udaipur, Rajasthan – 313001",
    },
    {
      title: "Fatehnagar Studio",
      address: "Intali Road, Chungi Naka, Fatehnagar, Udaipur, Rajasthan",
    },
  ],
  city: "Udaipur, Rajasthan, India",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/cmc_films?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" },
    { label: "YouTube", href: "https://www.youtube.com/@cmcfilms" },
    { label: "Vimeo", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Wedding Stories", to: "/wedding-stories" },
  { label: "Wedding Films", to: "/films" },
  { label: "Couple Shoot", to: "/couples" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Packages", to: "/packages" },
  { label: "About", to: "/about" },
] as const;

export const PACKAGES_COMING_SOON = false;

export const categories = [
  { no: "01", name: "Weddings", image: cat1 },
  { no: "02", name: "Pre-Weddings", image: cat2 },
  { no: "03", name: "Destination Weddings", image: featured },
  { no: "04", name: "Couple Stories", image: cat3 },
  { no: "05", name: "Wedding Films", image: story1 },
  { no: "06", name: "Editorial Portraits", image: story3 },
];

export const services = [
  {
    no: "01",
    title: "Wedding Photography",
    copy: "Two to three photographers, quietly present through every hour of your celebration.",
    image: story1,
  },
  {
    no: "02",
    title: "Wedding Cinematography",
    copy: "A film cut for feeling — the vows, the laughter, the pauses in between.",
    image: featured,
  },
  {
    no: "03",
    title: "Pre-Wedding Stories",
    copy: "An unhurried afternoon together, photographed the way you actually are.",
    image: cat2,
  },
  {
    no: "04",
    title: "Destination Weddings",
    copy: "Travel, scouting and light-planning handled long before the first frame.",
    image: cat1,
  },
  {
    no: "05",
    title: "Couple Portraits",
    copy: "Fine-art portraiture — few frames, made with intention.",
    image: cat3,
  },
  {
    no: "06",
    title: "Maternity Photoshoot",
    copy: "Fine-art maternity portraits capturing the grace, glow and quiet emotion of new beginnings.",
    image: maternity,
  },
];

export const experience = [
  { no: "01", title: "Let's Connect", copy: "A call, without a pitch." },
  { no: "02", title: "Understand Your Story", copy: "Your people, your rituals, your rhythm." },
  { no: "03", title: "Plan The Narrative", copy: "Light, locations and moments, mapped." },
  { no: "04", title: "Live Your Celebration", copy: "You forget we are there." },
  { no: "05", title: "Relive It Forever", copy: "Albums and films made to be handed down." },
];

export const destinations = [
  "Jaipur",
  "Udaipur",
  "Jodhpur",
  "Goa",
  "Delhi",
  "Mumbai",
  "Dubai",
  "Europe",
];

export const testimonials = [
  {
    quote: "Somehow they captured moments we didn't even realise were happening.",
    name: "Meher & Rohan",
    place: "Udaipur",
    year: "2026",
    image: story3,
  },
  {
    quote: "We watched our film three times the night it arrived. Then we called our parents.",
    name: "Ishita & Kabir",
    place: "Jaipur",
    year: "2025",
    image: cat3,
  },
  {
    quote: "Nothing felt staged. It just felt like our wedding, remembered properly.",
    name: "Nandini & Veer",
    place: "Goa",
    year: "2025",
    image: story1,
  },
];

export const journal = [
  {
    title: "Planning an Intimate Wedding in Jaipur",
    category: "Planning",
    date: "March 2026",
    image: featured,
  },
  {
    title: "The Art of Choosing Your Wedding Photographer",
    category: "Guides",
    date: "February 2026",
    image: story1,
  },
  {
    title: "Why Wedding Films Matter More With Time",
    category: "Craft",
    date: "January 2026",
    image: cat3,
  },
];

export const fragments = [
  { image: story1, caption: "The first look" },
  { image: story2, caption: "Before forever" },
  { image: cat3, caption: "One quiet second" },
  { image: story3, caption: "The beginning" },
];

export const gallery = [story1, cat2, featured, story3, cat1, story2, cat3];
