import React, { useState, useRef } from 'react';
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Save,
  X,
  Edit3,
  Package,
  Upload,
  Image as ImageIcon,
  ArrowLeft,
  CheckCircle,
  MapPin,
  Tag,
  Clock,
  IndianRupee,
  ListChecks,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Offering {
  id: string;
  name: string;
  duration: string;
  destinations: string;
  themes: string;
  price: string;
  categoryTag: string;
  imagePreview: string | null;
  inclusions: string[];
}

interface ServicePackage {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  copy: string;
  fullDescription: string;
  startingPrice: string;
  heroImagePreview: string | null;
  offerings: Offering[];
}

// ─── Empty templates ──────────────────────────────────────────────────────────

const emptyOffering = (): Offering => ({
  id: `off-${Date.now()}`,
  name: '',
  duration: '',
  destinations: '',
  themes: '',
  price: '',
  categoryTag: '',
  imagePreview: null,
  inclusions: [''],
});

const emptyService = (no: number): ServicePackage => ({
  id: `pkg-${Date.now()}`,
  no: String(no).padStart(2, '0'),
  title: '',
  subtitle: '',
  copy: '',
  fullDescription: '',
  startingPrice: '',
  heroImagePreview: null,
  offerings: [emptyOffering()],
});

// ─── INITIAL MOCK DATA matching current website servicesData ──────────────────

const initialPackages: ServicePackage[] = [
  {
    id: 'pkg-1',
    no: '01',
    title: 'WEDDING PHOTOGRAPHY',
    subtitle: 'Full Day Traditional & Candid Photography',
    copy: 'Two to three senior photographers quietly present through every hour of your celebration.',
    fullDescription:
      'Our wedding photography archives capture the genuine spirit, emotional glances, royal grandeur, and quiet romantic pauses of your wedding days. We combine unobtrusive candid photojournalism with editorial fine-art portraiture so every heirloom moment is preserved for generations.',
    startingPrice: '₹1,20,000',
    heroImagePreview: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    offerings: [
      {
        id: 'off-1',
        name: 'Royal Palace 3-Day Photography Archive',
        duration: '3 Days, 3 Nights',
        destinations: 'Jaipur, Udaipur, Jodhpur Palaces',
        themes: 'Royal, Heritage, Fine-Art, Candid',
        price: 'INR 2,20,000',
        categoryTag: 'Royal Luxury',
        imagePreview: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
        inclusions: ['3 Senior Photographers', '1 Candid Specialist', '1000+ Retouched Photos', '2 Leather Photo Albums', 'Raw Master Files'],
      },
      {
        id: 'off-2',
        name: 'Destination Resort Nuptials (2 Days)',
        duration: '2 Days, 2 Nights',
        destinations: 'Goa, Kerala, Rishikesh Resorts',
        themes: 'Destination, Beach, Romantic',
        price: 'INR 1,60,000',
        categoryTag: 'Destination',
        imagePreview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        inclusions: ['2 Senior Photographers', '600+ Retouched Photos', '1 Fine-Art Hardcover Album', 'Private Cloud Gallery'],
      },
    ],
  },
  {
    id: 'pkg-2',
    no: '02',
    title: 'WEDDING CINEMATOGRAPHY',
    subtitle: '4K Cinematic Film & Highlights',
    copy: 'A 4K cinematic film cut for feeling — capturing vows, laughter, and emotional pauses.',
    fullDescription:
      'CMC FILMS cinema feature films are crafted like high-end motion pictures. We use 4K cinema cameras, prime lenses, multi-channel sound recorders for wedding vows and speeches, and dedicated color grading to create an unforgettable cinematic story film.',
    startingPrice: '₹1,50,000',
    heroImagePreview: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    offerings: [
      {
        id: 'off-4',
        name: 'Royal Cinema Feature Film (3 Days)',
        duration: '3 Days, 3 Nights',
        destinations: 'Udaipur & Royal Venues',
        themes: 'Grand Cinema, Vows & Speeches, 4K',
        price: 'INR 2,80,000',
        categoryTag: 'Royal Cinema',
        imagePreview: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800',
        inclusions: ['1 Lead Director', '3 4K Cinematographers', '45-Min Feature Film', '60s Teaser Reel', 'Aerial Drone', 'Sound Recorders'],
      },
    ],
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export const PackagesAdminPage: React.FC = () => {
  const [packages, setPackages] = useState<ServicePackage[]>(initialPackages);
  const [editingPkg, setEditingPkg] = useState<ServicePackage | null>(null);
  const [expandedPkgId, setExpandedPkgId] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState(false);

  const heroFileRef = useRef<HTMLInputElement>(null);
  const offeringFileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // ── Open editor for a service package ──
  const handleEditPackage = (pkg: ServicePackage) => {
    setEditingPkg(JSON.parse(JSON.stringify(pkg))); // deep clone
  };

  const handleNewPackage = () => {
    const pkg = emptyService(packages.length + 1);
    setEditingPkg(pkg);
  };

  // ── Save edited package back to list ──
  const handleSavePackage = () => {
    if (!editingPkg) return;
    setPackages((prev) => {
      const idx = prev.findIndex((p) => p.id === editingPkg.id);
      if (idx === -1) return [...prev, editingPkg];
      const updated = [...prev];
      updated[idx] = editingPkg;
      return updated;
    });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
    setEditingPkg(null);
  };

  const handleDeletePackage = (id: string) => {
    if (!confirm('Delete this package category? This cannot be undone.')) return;
    setPackages((prev) => prev.filter((p) => p.id !== id));
  };

  // ── Hero image upload ──
  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingPkg) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingPkg((prev) => prev ? { ...prev, heroImagePreview: reader.result as string } : prev);
    };
    reader.readAsDataURL(file);
  };

  // ── Offering image upload ──
  const handleOfferingImageUpload = (e: React.ChangeEvent<HTMLInputElement>, offeringId: string) => {
    const file = e.target.files?.[0];
    if (!file || !editingPkg) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingPkg((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          offerings: prev.offerings.map((o) =>
            o.id === offeringId ? { ...o, imagePreview: reader.result as string } : o
          ),
        };
      });
    };
    reader.readAsDataURL(file);
  };

  // ── Offering field update ──
  const updateOffering = (offeringId: string, field: keyof Offering, value: string) => {
    setEditingPkg((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        offerings: prev.offerings.map((o) =>
          o.id === offeringId ? { ...o, [field]: value } : o
        ),
      };
    });
  };

  // ── Inclusion list management ──
  const updateInclusion = (offeringId: string, idx: number, value: string) => {
    setEditingPkg((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        offerings: prev.offerings.map((o) => {
          if (o.id !== offeringId) return o;
          const inc = [...o.inclusions];
          inc[idx] = value;
          return { ...o, inclusions: inc };
        }),
      };
    });
  };

  const addInclusion = (offeringId: string) => {
    setEditingPkg((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        offerings: prev.offerings.map((o) =>
          o.id === offeringId ? { ...o, inclusions: [...o.inclusions, ''] } : o
        ),
      };
    });
  };

  const removeInclusion = (offeringId: string, idx: number) => {
    setEditingPkg((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        offerings: prev.offerings.map((o) => {
          if (o.id !== offeringId) return o;
          const inc = [...o.inclusions];
          inc.splice(idx, 1);
          return { ...o, inclusions: inc.length === 0 ? [''] : inc };
        }),
      };
    });
  };

  // ── Add / Remove offerings ──
  const addOffering = () => {
    setEditingPkg((prev) =>
      prev ? { ...prev, offerings: [...prev.offerings, emptyOffering()] } : prev
    );
  };

  const removeOffering = (offeringId: string) => {
    setEditingPkg((prev) => {
      if (!prev) return prev;
      const filtered = prev.offerings.filter((o) => o.id !== offeringId);
      return { ...prev, offerings: filtered.length === 0 ? [emptyOffering()] : filtered };
    });
  };

  // ─────────────────────────────────────────────
  // EDITOR VIEW
  // ─────────────────────────────────────────────
  if (editingPkg) {
    return (
      <div className="p-5 sm:p-8 max-w-5xl mx-auto space-y-8 font-sans pb-20">
        {/* Editor Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#1E2235]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setEditingPkg(null)}
              className="p-2 rounded-xl border bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {editingPkg.title ? editingPkg.title : 'New Package Category'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fill all details — they appear on the website packages page
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setEditingPkg(null)}
              className="px-4 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePackage}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer"
            >
              <Save className="h-4 w-4" />
              Save Package
            </button>
          </div>
        </div>

        {/* ── SECTION A: SERVICE CATEGORY INFO ── */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-5 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C90C1] border-b border-slate-200 dark:border-[#1E2235] pb-2">
            Package Category Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Title */}
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Category Title * <span className="text-slate-400 font-normal">(e.g. WEDDING PHOTOGRAPHY)</span>
              </label>
              <input
                type="text"
                value={editingPkg.title}
                onChange={(e) => setEditingPkg({ ...editingPkg, title: e.target.value.toUpperCase() })}
                placeholder="e.g. WEDDING PHOTOGRAPHY"
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-sm font-bold font-sans"
              />
            </div>

            {/* Subtitle */}
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Subtitle <span className="text-slate-400 font-normal">(e.g. Full Day Traditional & Candid Photography)</span>
              </label>
              <input
                type="text"
                value={editingPkg.subtitle}
                onChange={(e) => setEditingPkg({ ...editingPkg, subtitle: e.target.value })}
                placeholder="Full Day Traditional & Candid Photography"
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
              />
            </div>

            {/* Short Copy */}
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Short Tagline / Copy <span className="text-slate-400 font-normal">(1 line shown on overview card)</span>
              </label>
              <input
                type="text"
                value={editingPkg.copy}
                onChange={(e) => setEditingPkg({ ...editingPkg, copy: e.target.value })}
                placeholder="Two to three senior photographers quietly present through every hour..."
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
              />
            </div>

            {/* Full Description */}
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Full Description <span className="text-slate-400 font-normal">(shown in expanded detail page)</span>
              </label>
              <textarea
                rows={4}
                value={editingPkg.fullDescription}
                onChange={(e) => setEditingPkg({ ...editingPkg, fullDescription: e.target.value })}
                placeholder="Detailed description of this package category shown when visitor reads more..."
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans leading-relaxed"
              />
            </div>

            {/* Starting Price */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <IndianRupee className="h-3.5 w-3.5 text-[#8C90C1]" />
                Starting Price <span className="text-slate-400 font-normal">(e.g. ₹1,20,000)</span>
              </label>
              <input
                type="text"
                value={editingPkg.startingPrice}
                onChange={(e) => setEditingPkg({ ...editingPkg, startingPrice: e.target.value })}
                placeholder="₹1,20,000"
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
              />
            </div>

            {/* Package Number (auto) */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Package Number
              </label>
              <input
                type="text"
                value={editingPkg.no}
                readOnly
                className="w-full bg-slate-100 dark:bg-[#1A1E2E] text-slate-500 dark:text-slate-400 p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] text-xs font-mono cursor-not-allowed"
              />
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ImageIcon className="h-3.5 w-3.5 text-[#8C90C1]" />
              Hero Cover Image <span className="text-slate-400 font-normal">(used as package card thumbnail & detail page banner)</span>
            </label>

            <input
              type="file"
              accept="image/*"
              ref={heroFileRef}
              onChange={handleHeroImageUpload}
              className="hidden"
            />

            {editingPkg.heroImagePreview ? (
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-[#8C90C1]/40 group">
                <img
                  src={editingPkg.heroImagePreview}
                  alt="Hero Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => heroFileRef.current?.click()}
                    className="px-3 py-1.5 bg-[#8C90C1] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Change Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingPkg({ ...editingPkg, heroImagePreview: null })}
                    className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => heroFileRef.current?.click()}
                className="border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 dark:bg-[#171B29]/50 space-y-2"
              >
                <Upload className="h-6 w-6 mx-auto text-[#8C90C1]" />
                <p className="text-xs font-bold text-slate-900 dark:text-white">Click to upload hero banner image</p>
                <p className="text-[10px] text-slate-400">PNG, JPG, WEBP (recommended 1400×700px)</p>
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION B: OFFERINGS (Sub-packages) ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Sub-Package Offerings
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Each offering shows as a separate row on the website with its own price, duration & inclusions
              </p>
            </div>
            <button
              onClick={addOffering}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold cursor-pointer shadow-lg shadow-[#8C90C1]/20"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Offering
            </button>
          </div>

          {editingPkg.offerings.map((offering, ofIdx) => (
            <div
              key={offering.id}
              className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Offering Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-[#171B2E] border-b border-slate-200 dark:border-[#1E2235]">
                <span className="text-xs font-bold text-[#8C90C1]">
                  OFFERING #{ofIdx + 1}: {offering.name || 'Untitled Offering'}
                </span>
                <button
                  onClick={() => removeOffering(offering.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                  title="Remove this offering"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Offering Name */}
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Offering Name *
                    </label>
                    <input
                      type="text"
                      value={offering.name}
                      onChange={(e) => updateOffering(offering.id, 'name', e.target.value)}
                      placeholder="e.g. Royal Palace 3-Day Photography Archive"
                      className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                    />
                  </div>

                  {/* Duration */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Duration
                    </label>
                    <input
                      type="text"
                      value={offering.duration}
                      onChange={(e) => updateOffering(offering.id, 'duration', e.target.value)}
                      placeholder="e.g. 3 Days, 3 Nights"
                      className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                    />
                  </div>

                  {/* Category Tag */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Tag className="h-3 w-3" /> Category Tag
                    </label>
                    <input
                      type="text"
                      value={offering.categoryTag}
                      onChange={(e) => updateOffering(offering.id, 'categoryTag', e.target.value)}
                      placeholder="e.g. Royal Luxury / Destination / Standard"
                      className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                    />
                  </div>

                  {/* Destinations */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Destinations
                    </label>
                    <input
                      type="text"
                      value={offering.destinations}
                      onChange={(e) => updateOffering(offering.id, 'destinations', e.target.value)}
                      placeholder="e.g. Jaipur, Udaipur, Jodhpur Palaces"
                      className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                    />
                  </div>

                  {/* Themes */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Themes / Style
                    </label>
                    <input
                      type="text"
                      value={offering.themes}
                      onChange={(e) => updateOffering(offering.id, 'themes', e.target.value)}
                      placeholder="e.g. Royal, Heritage, Fine-Art, Candid"
                      className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                    />
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <IndianRupee className="h-3 w-3" /> Price (Starting From)
                    </label>
                    <input
                      type="text"
                      value={offering.price}
                      onChange={(e) => updateOffering(offering.id, 'price', e.target.value)}
                      placeholder="e.g. INR 2,20,000"
                      className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                    />
                  </div>
                </div>

                {/* Offering Thumbnail Image */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <ImageIcon className="h-3 w-3" /> Offering Thumbnail Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => { offeringFileRefs.current[offering.id] = el; }}
                    onChange={(e) => handleOfferingImageUpload(e, offering.id)}
                    className="hidden"
                  />

                  {offering.imagePreview ? (
                    <div className="relative h-36 w-full rounded-xl overflow-hidden border border-[#8C90C1]/40 group">
                      <img src={offering.imagePreview} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => offeringFileRefs.current[offering.id]?.click()}
                          className="px-3 py-1 bg-[#8C90C1] text-white text-xs font-bold rounded-xl cursor-pointer"
                        >
                          Change
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setEditingPkg((prev) => prev ? {
                              ...prev,
                              offerings: prev.offerings.map((o) =>
                                o.id === offering.id ? { ...o, imagePreview: null } : o
                              ),
                            } : prev)
                          }
                          className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-xl cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => offeringFileRefs.current[offering.id]?.click()}
                      className="border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50/50 dark:bg-[#171B29]/50 flex items-center gap-3"
                    >
                      <Upload className="h-5 w-5 text-[#8C90C1] shrink-0" />
                      <div className="text-left">
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Click to upload thumbnail</p>
                        <p className="text-[10px] text-slate-400">PNG, JPG, WEBP (recommended 800×500px)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Inclusions (What's Included) */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <ListChecks className="h-3 w-3" /> What's Included
                  </label>
                  <div className="space-y-2">
                    {offering.inclusions.map((inc, incIdx) => (
                      <div key={incIdx} className="flex items-center gap-2">
                        <span className="text-[#8C90C1] text-xs font-bold shrink-0">✓</span>
                        <input
                          type="text"
                          value={inc}
                          onChange={(e) => updateInclusion(offering.id, incIdx, e.target.value)}
                          placeholder={`Inclusion item #${incIdx + 1} (e.g. 3 Senior Photographers)`}
                          className="flex-1 bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-2.5 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                        />
                        <button
                          type="button"
                          onClick={() => removeInclusion(offering.id, incIdx)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 cursor-pointer shrink-0"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addInclusion(offering.id)}
                      className="text-[11px] font-semibold text-[#8C90C1] hover:underline flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <Plus className="h-3 w-3" />
                      Add Inclusion Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addOffering}
            className="w-full py-3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-[#8C90C1] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Another Offering / Sub-Package
          </button>
        </div>

        {/* Bottom Save Bar */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-[#1E2235]">
          <button
            onClick={() => setEditingPkg(null)}
            className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSavePackage}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer"
          >
            <Save className="h-4 w-4" />
            Save Package
          </button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // LIST VIEW — all package categories
  // ─────────────────────────────────────────────
  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Packages & Pricing CMS
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Create and manage service categories and their sub-package offerings shown on the website
          </p>
        </div>

        <button
          onClick={handleNewPackage}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
        >
          <Plus className="h-4 w-4" />
          + Create New Package
        </button>
      </div>

      {/* Saved notice */}
      {savedNotice && (
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
          <CheckCircle className="h-4 w-4" />
          Package saved successfully!
        </div>
      )}

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl overflow-hidden shadow-sm hover:border-[#8C90C1]/40 transition-all group"
          >
            {/* Hero Image */}
            <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
              {pkg.heroImagePreview ? (
                <img
                  src={pkg.heroImagePreview}
                  alt={pkg.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-slate-600">
                  <Package className="h-10 w-10" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 text-[10px] font-bold font-mono text-white/60 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                #{pkg.no}
              </span>
              <h4 className="absolute bottom-3 left-4 text-base font-bold text-white">{pkg.title}</h4>
            </div>

            {/* Card Body */}
            <div className="p-4 space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{pkg.subtitle}</p>

              <div className="flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Starting From</span>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{pkg.startingPrice || '—'}</p>
                </div>
                <span className="text-[10px] font-mono text-[#8C90C1] bg-[#8C90C1]/10 px-2.5 py-1 rounded-full">
                  {pkg.offerings.length} offering{pkg.offerings.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Offering names preview */}
              <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-[#1E2235]">
                {pkg.offerings.slice(0, 2).map((o) => (
                  <p key={o.id} className="text-[11px] text-slate-500 dark:text-slate-400 truncate flex items-center gap-1.5">
                    <span className="text-[#8C90C1]">›</span>
                    {o.name || 'Untitled offering'}
                  </p>
                ))}
                {pkg.offerings.length > 2 && (
                  <p className="text-[10px] text-slate-400 font-mono">+{pkg.offerings.length - 2} more</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-[#1E2235]">
                <button
                  onClick={() => handleDeletePackage(pkg.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                  title="Delete Package"
                >
                  <Trash2 className="h-4 w-4" />
                </button>

                <button
                  onClick={() => handleEditPackage(pkg)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                  Edit Package →
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty state Add button */}
        {packages.length === 0 && (
          <div
            onClick={handleNewPackage}
            className="border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] rounded-2xl p-12 flex flex-col items-center gap-3 cursor-pointer text-center transition-colors group col-span-full"
          >
            <Package className="h-10 w-10 text-slate-400 group-hover:text-[#8C90C1] transition-colors" />
            <div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No packages yet</p>
              <p className="text-xs text-slate-400">Click to create your first package category</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
