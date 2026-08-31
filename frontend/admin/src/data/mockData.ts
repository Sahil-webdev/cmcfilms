export interface Inquiry {
  id: string;
  coupleName: string;
  email: string;
  phone: string;
  weddingDate: string;
  venueLocation: string;
  estimatedBudget: string;
  servicesRequested: string[];
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'Confirmed' | 'Archived';
  createdAt: string;
  notes?: string;
}

export interface Story {
  id: string;
  title: string;
  couple: string;
  category: 'Royal Wedding' | 'Destination' | 'Pre-Wedding' | 'Intimate Ceremony';
  location: string;
  coverImage: string;
  photosCount: number;
  featured: boolean;
  date: string;
  excerpt?: string;
  content?: string;
  status?: 'Published' | 'Draft';
}

export interface WeddingFilm {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  category: string;
  featured: boolean;
  createdAt: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
}

export interface MediaAsset {
  id: string;
  title: string;
  type: 'Photo' | 'Video';
  url: string;
  category: string;
  size: string;
  uploadedAt: string;
}

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'INQ-1001',
    coupleName: 'Aarav & Ananya',
    email: 'aarav.ananya@gmail.com',
    phone: '+91 98765 43210',
    weddingDate: '2026-11-15',
    venueLocation: 'The Leela Palace, Udaipur',
    estimatedBudget: '₹8,50,000',
    servicesRequested: ['Full Wedding Film', 'Pre-Wedding Shoot', 'Drone Cinematography'],
    status: 'New',
    createdAt: '2026-08-20',
    notes: 'Requested sunrise shoot at Lake Pichola.',
  },
  {
    id: 'INQ-1002',
    coupleName: 'Rohan & Meera',
    email: 'rohan.m@outlook.com',
    phone: '+91 99887 76655',
    weddingDate: '2026-12-04',
    venueLocation: 'Taj Lake Palace, Udaipur',
    estimatedBudget: '₹12,00,000',
    servicesRequested: ['Royal Cinematic Film', 'Teaser & Highlights', 'Traditional Photography'],
    status: 'Contacted',
    createdAt: '2026-08-19',
    notes: 'Discussed timeline for Sangeet & Reception.',
  },
  {
    id: 'INQ-1003',
    coupleName: 'Kabir & Rhea',
    email: 'rhea.kabir@yahoo.com',
    phone: '+91 97112 23344',
    weddingDate: '2026-10-28',
    venueLocation: 'Rambagh Palace, Jaipur',
    estimatedBudget: '₹15,00,000',
    servicesRequested: ['Full Wedding Package', 'Same Day Edit', 'Editorial Album'],
    status: 'Confirmed',
    createdAt: '2026-08-18',
    notes: 'Advance deposit paid. Flight tickets booked.',
  },
  {
    id: 'INQ-1004',
    coupleName: 'Vikram & Ishita',
    email: 'vikram.ishita@gmail.com',
    phone: '+91 91234 56789',
    weddingDate: '2027-01-18',
    venueLocation: 'Alila Fort, Bishangarh',
    estimatedBudget: '₹6,50,000',
    servicesRequested: ['Pre-Wedding Story', 'Candid Photography'],
    status: 'Proposal Sent',
    createdAt: '2026-08-17',
    notes: 'Proposal PDF sent on WhatsApp.',
  },
  {
    id: 'INQ-1005',
    coupleName: 'Dev & Pooja',
    email: 'dev.pooja.wed@gmail.com',
    phone: '+91 98220 11223',
    weddingDate: '2026-11-02',
    venueLocation: 'W Goa, Vagator',
    estimatedBudget: '₹10,00,000',
    servicesRequested: ['Beach Sunset Shoot', 'Cinematic Highlight Film', 'Drone Shots'],
    status: 'New',
    createdAt: '2026-08-16',
  },
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'Echoes of Royalty at Jagmandir Island Palace',
    couple: 'Devansh & Shreya',
    category: 'Royal Wedding',
    location: 'Udaipur, Rajasthan',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    photosCount: 42,
    featured: true,
    date: 'Feb 2026',
    excerpt: 'An enchanting multi-day royal wedding celebration surrounded by the shimmering waters of Lake Pichola.',
    content: `Nestled amidst the serene waters of Lake Pichola, Devansh and Shreya's wedding at Jagmandir Island Palace was a masterpiece of heritage, elegance, and timeless romance.`,
    status: 'Published',
  },
  {
    id: 'story-2',
    title: 'Sunset Vows by the Azure Arabian Sea',
    couple: 'Siddharth & Natasha',
    category: 'Destination',
    location: 'Goa, India',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    photosCount: 36,
    featured: true,
    date: 'Jan 2026',
    excerpt: 'A breezy, sun-kissed beach destination wedding filled with laughter, pastel florals, and golden hour magic.',
    content: `Siddharth and Natasha chose the serene golden beaches of Vagator for their dream destination wedding.`,
    status: 'Published',
  },
  {
    id: 'story-3',
    title: 'A Modern Royal Tale at Umaid Bhawan Palace',
    couple: 'Karan & Avani',
    category: 'Royal Wedding',
    location: 'Jodhpur, Rajasthan',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    photosCount: 50,
    featured: false,
    date: 'Dec 2025',
    excerpt: 'Opulence meets intimate warmth at Jodhpur’s iconic sandstone palace.',
    content: `Set against the colossal golden sandstone architecture of Umaid Bhawan Palace, Karan and Avani's union was a testament to grandeur.`,
    status: 'Published',
  },
  {
    id: 'story-4',
    title: 'Whispers of Romance in the Aravalli Foothills',
    couple: 'Yash & Riya',
    category: 'Pre-Wedding',
    location: 'Fateh Sagar, Udaipur',
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    photosCount: 28,
    featured: true,
    date: 'Mar 2026',
    excerpt: 'An intimate pre-wedding photo story capturing quiet moments by the lake.',
    content: `Before their winter wedding, Yash and Riya spent a peaceful morning exploring secret heritage nooks and lakeside docks around Udaipur.`,
    status: 'Published',
  },
];

export const INITIAL_FILMS: WeddingFilm[] = [
  {
    id: 'film-1',
    title: 'The Royal Affair | Devansh & Shreya | Udaipur Wedding Film',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    category: 'Cinematic Film',
    featured: true,
    createdAt: '2026-08-20',
  },
  {
    id: 'film-2',
    title: 'Sunset Beach Vows | Siddharth & Natasha | Goa Wedding Teaser',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    category: 'Teaser Reel',
    featured: true,
    createdAt: '2026-08-18',
  },
  {
    id: 'film-3',
    title: 'Pre-Wedding Symphony | Yash & Riya | Udaipur Lake Shoot',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    category: 'Pre-Wedding Film',
    featured: false,
    createdAt: '2026-08-15',
  },
];

export const INITIAL_PACKAGES: PackageItem[] = [
  {
    id: 'pkg-1',
    name: 'The Royal Edition',
    tagline: 'Complete grand wedding cinema & ultra-candid coverage for luxury multi-day celebrations.',
    price: '₹7,50,000',
    duration: '3 Days',
    popular: true,
    features: [
      'Senior Lead Director + 4 Master Cinematographers',
      '4K Ultra HD Cinema Film & 3-Minute Instagram Reel',
      'Full Length Traditional Video Coverage (All Functions)',
      'Aerial 4K Drone Photography & Video',
      'Luxury Hardbound Flush Mount Album (100 Pages)',
      'Raw Footage Drive + Online Cloud Gallery',
    ],
  },
  {
    id: 'pkg-2',
    name: 'The Signature Cinema',
    tagline: 'Artistic wedding storytelling crafted for intimate and high-end celebrations.',
    price: '₹4,80,000',
    duration: '2 Days',
    popular: false,
    features: [
      'Lead Director + 2 Cinematographers',
      '4K Cinematic Teaser (3-5 Mins) + 20-Min Highlight Film',
      'Pre-Wedding Shoot Session (Half Day)',
      '4K Drone Shots (Subject to permissions)',
      'Premium Printed Leatherette Album (60 Pages)',
    ],
  },
  {
    id: 'pkg-3',
    name: 'Pre-Wedding Romance',
    tagline: 'Bespoke pre-wedding love story shoot in iconic destination venues.',
    price: '₹1,25,000',
    duration: '1 Day',
    popular: false,
    features: [
      '1 Full Day Shoot (Multiple locations & outfit changes)',
      'High-Resolution Edited Photos (50+ Images)',
      'Cinematic Concept Reel (60-90 Seconds)',
      'Drone Aerial Sequences',
      'Color Graded High Res Digital Files',
    ],
  },
];

export const INITIAL_MEDIA: MediaAsset[] = [
  {
    id: 'm-1',
    title: 'Jagmandir Palace Night View.jpg',
    type: 'Photo',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    category: 'Palace',
    size: '4.8 MB',
    uploadedAt: '2026-08-20',
  },
  {
    id: 'm-2',
    title: 'Haldi Ceremony Joy.jpg',
    type: 'Photo',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    category: 'Haldi',
    size: '3.2 MB',
    uploadedAt: '2026-08-19',
  },
  {
    id: 'm-3',
    title: 'Bride Entry Reel Teaser.mp4',
    type: 'Video',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    category: 'Film Teaser',
    size: '42.5 MB',
    uploadedAt: '2026-08-18',
  },
  {
    id: 'm-4',
    title: 'Leela Palace Mandap Setup.jpg',
    type: 'Photo',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    category: 'Decor',
    size: '5.1 MB',
    uploadedAt: '2026-08-15',
  },
];
