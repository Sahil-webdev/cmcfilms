import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../lib/environment';
import {
  Plus,
  Trash2,
  Save,
  X,
  Edit3,
  Package,
  Upload,
  Image as ImageIcon,
  CheckCircle,
  MapPin,
  Tag,
  Clock,
  Layers,
  FolderPlus,
  Filter,
  Check,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Eye,
  Info,
} from 'lucide-react';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Offering {
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

export interface ServicePackage {
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

type ViewMode = 'list' | 'create-main' | 'edit-main' | 'create-sub' | 'edit-sub';

// ─── INITIAL MOCK DATA ────────────────────────────────────────────────────────

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
      {
        id: 'off-3',
        name: 'Intimate Single-Day Wedding Story',
        duration: '1 Day (12 Continuous Hours)',
        destinations: 'Udaipur & Local Venues',
        themes: 'Intimate, Candid, Unscripted',
        price: 'INR 1,20,000',
        categoryTag: 'Standard',
        imagePreview: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
        inclusions: ['1 Lead Photographer', '400+ Retouched Photos', 'Private Cloud Gallery', 'Same-Week Delivery'],
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
    heroImagePreview: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800',
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
      {
        id: 'off-5',
        name: 'Destination Coastal Highlight Film (2 Days)',
        duration: '2 Days, 2 Nights',
        destinations: 'Goa & Beach Resorts',
        themes: 'Coastal, Sunset, Romantic Film',
        price: 'INR 2,10,000',
        categoryTag: 'Destination',
        imagePreview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        inclusions: ['1 Lead Director', '2 Cinematographers', '30-Min Highlight Film', '2-Min Teaser Trailer', 'Aerial Drone'],
      },
    ],
  },
  {
    id: 'pkg-3',
    no: '03',
    title: 'PRE-WEDDING STORIES',
    subtitle: 'Dawn Outdoor Concept Shoot',
    copy: 'Outdoor dawn concept shoot in Jaipur, Udaipur, Goa, or royal haveli locations.',
    fullDescription:
      'Relaxed, romantic pre-wedding shoots designed around your pure chemistry. We guide you through golden hour dawn locations across Rajasthan fort havelis, serene lakes, or ocean shores.',
    startingPrice: '₹45,000',
    heroImagePreview: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    offerings: [
      {
        id: 'off-7',
        name: 'Royal Heritage Fort Session (Full Day)',
        duration: '1 Full Day (Dawn to Sunset)',
        destinations: 'Amer Fort / Udaipur Palace',
        themes: 'Royal Haveli, Fine-Art Portraits',
        price: 'INR 65,000',
        categoryTag: 'Royal Concept',
        imagePreview: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
        inclusions: ['1 Creative Photographer', '1 Reel Specialist', '40 Fine-Art Portraits', '60s Mood Reel', 'Styling Guidance'],
      },
      {
        id: 'off-8',
        name: 'Coastal Shore Concept Shoot (Full Day)',
        duration: '1 Full Day',
        destinations: 'Goa Shores & Palm Groves',
        themes: 'Beach, Casual, Romantic',
        price: 'INR 55,000',
        categoryTag: 'Destination',
        imagePreview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        inclusions: ['1 Photographer', '35 Retouched Portraits', 'Instagram Teaser', 'Private Gallery'],
      },
      {
        id: 'off-9',
        name: 'Scenic Dawn Couple Session (Half Day)',
        duration: 'Half Day (Golden Hour)',
        destinations: 'Lake Pichola / Forts',
        themes: 'Golden Hour, Sunset Portraits',
        price: 'INR 45,000',
        categoryTag: 'Standard',
        imagePreview: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
        inclusions: ['1 Photographer', '25 Retouched Portraits', 'Digital Delivery'],
      },
    ],
  },
];

export const PackagesPage: React.FC = () => {
  const { token } = useAuth();
  // Persistence via localStorage
  const [packages, setPackages] = useState<ServicePackage[]>(() => {
    try {
      const saved = localStorage.getItem('cmc_packages');
      return saved ? JSON.parse(saved) : initialPackages;
    } catch {
      return initialPackages;
    }
  });
  const [packagesLoaded, setPackagesLoaded] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);
  const skipFirstRemoteSave = useRef(true);

  useEffect(() => {
    try {
      localStorage.setItem('cmc_packages', JSON.stringify(packages));
    } catch (err) {
      console.error('Failed to save packages:', err);
    }
  }, [packages]);

  // Load packages published through the admin panel. Website and admin use this same API.
  useEffect(() => {
    const controller = new AbortController();
    const loadPackages = async () => {
      try {
        const response = await fetch(`${API_URL}/api/packages`, { signal: controller.signal });
        const payload = await response.json();
        if (response.ok && Array.isArray(payload?.data?.packages)) {
          setPackages(payload.data.packages);
        }
      } catch {
        setSyncMessage('Backend is offline. Your edits are saved locally until the API is running.');
      } finally {
        if (!controller.signal.aborted) setPackagesLoaded(true);
      }
    };
    loadPackages();
    return () => controller.abort();
  }, []);

  // Publish each add, edit or delete action automatically.
  useEffect(() => {
    if (!packagesLoaded) return;
    if (skipFirstRemoteSave.current) {
      skipFirstRemoteSave.current = false;
      return;
    }
    if (!token) return;

    const publishTimer = window.setTimeout(async () => {
      try {
        const response = await fetch(`${API_URL}/api/packages`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ packages }),
        });
        const payload = await response.json();
        if (!response.ok || !payload.success) throw new Error(payload.message || 'Unable to publish packages.');
        setSyncMessage('Changes published to the website.');
      } catch (error) {
        setSyncMessage(error instanceof Error ? error.message : 'Could not publish packages to the website.');
      }
    }, 400);

    return () => window.clearTimeout(publishTimer);
  }, [packages, packagesLoaded, token]);

  // Current View State (Full Page Mode navigation)
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [activeListTab, setActiveListTab] = useState<'main-packages' | 'sub-packages'>('main-packages');

  // Search & Filters inside List View
  const [subPkgCategoryFilter, setSubPkgCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Notification Banner
  const [notice, setNotice] = useState<string | null>(null);
  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3500);
  };

  // ─── FORM STATES FOR DEDICATED PAGES ───
  const [editingMainPkg, setEditingMainPkg] = useState<ServicePackage | null>(null);
  const [mainForm, setMainForm] = useState({
    title: '',
    subtitle: '',
    startingPrice: '',
    copy: '',
    fullDescription: '',
    heroImagePreview: '',
  });

  const [editingSubPkg, setEditingSubPkg] = useState<{ parentId: string; offering: Offering } | null>(null);
  const [subForm, setSubForm] = useState({
    parentPackageId: '',
    name: '',
    categoryTag: '',
    duration: '',
    price: '',
    destinations: '',
    themes: '',
    imagePreview: '',
    inclusions: [''],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const subFileInputRef = useRef<HTMLInputElement>(null);

  // ─────────────────────────────────────────────────────────────────────────────
  // NAVIGATION HANDLERS (Switching View Modes to Dedicated Pages)
  // ─────────────────────────────────────────────────────────────────────────────

  const handleOpenCreateMain = () => {
    setEditingMainPkg(null);
    setMainForm({
      title: '',
      subtitle: '',
      startingPrice: '',
      copy: '',
      fullDescription: '',
      heroImagePreview: '',
    });
    setViewMode('create-main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEditMain = (pkg: ServicePackage) => {
    setEditingMainPkg(pkg);
    setMainForm({
      title: pkg.title,
      subtitle: pkg.subtitle,
      startingPrice: pkg.startingPrice,
      copy: pkg.copy,
      fullDescription: pkg.fullDescription,
      heroImagePreview: pkg.heroImagePreview || '',
    });
    setViewMode('edit-main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCreateSub = (preselectedParentId?: string) => {
    const parentId = preselectedParentId || (packages[0]?.id ?? '');
    setEditingSubPkg(null);
    setSubForm({
      parentPackageId: parentId,
      name: '',
      categoryTag: 'Standard',
      duration: '',
      price: '',
      destinations: '',
      themes: '',
      imagePreview: '',
      inclusions: [''],
    });
    setViewMode('create-sub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEditSub = (parentId: string, offering: Offering) => {
    setEditingSubPkg({ parentId, offering });
    setSubForm({
      parentPackageId: parentId,
      name: offering.name,
      categoryTag: offering.categoryTag,
      duration: offering.duration,
      price: offering.price,
      destinations: offering.destinations,
      themes: offering.themes,
      imagePreview: offering.imagePreview || '',
      inclusions: offering.inclusions.length > 0 ? [...offering.inclusions] : [''],
    });
    setViewMode('edit-sub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setViewMode('list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // SAVE / DELETE LOGIC
  // ─────────────────────────────────────────────────────────────────────────────

  const handleSaveMainPackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainForm.title.trim()) return;

    if (editingMainPkg) {
      setPackages((prev) =>
        prev.map((p) =>
          p.id === editingMainPkg.id
            ? {
                ...p,
                title: mainForm.title.toUpperCase(),
                subtitle: mainForm.subtitle,
                startingPrice: mainForm.startingPrice,
                copy: mainForm.copy,
                fullDescription: mainForm.fullDescription,
                heroImagePreview: mainForm.heroImagePreview || null,
              }
            : p
        )
      );
      showNotice(`Main Package "${mainForm.title}" updated successfully!`);
    } else {
      const newNo = packages.length + 1;
      const newPkg: ServicePackage = {
        id: `pkg-${Date.now()}`,
        no: String(newNo).padStart(2, '0'),
        title: mainForm.title.toUpperCase(),
        subtitle: mainForm.subtitle,
        startingPrice: mainForm.startingPrice,
        copy: mainForm.copy,
        fullDescription: mainForm.fullDescription,
        heroImagePreview: mainForm.heroImagePreview || null,
        offerings: [],
      };
      setPackages((prev) => [...prev, newPkg]);
      showNotice(`New Main Package "${mainForm.title}" created!`);
    }

    setViewMode('list');
  };

  const handleDeleteMainPackage = (pkgId: string, pkgTitle: string) => {
    if (window.confirm(`Are you sure you want to delete Main Package "${pkgTitle}" and all its sub-packages?`)) {
      setPackages((prev) => prev.filter((p) => p.id !== pkgId));
      showNotice(`Main Package "${pkgTitle}" deleted.`);
    }
  };

  const handleSaveSubPackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subForm.name.trim() || !subForm.parentPackageId) {
      alert('Please enter a sub-package name and select a parent category.');
      return;
    }

    const newOffering: Offering = {
      id: editingSubPkg ? editingSubPkg.offering.id : `off-${Date.now()}`,
      name: subForm.name,
      categoryTag: subForm.categoryTag || 'Standard',
      duration: subForm.duration,
      price: subForm.price,
      destinations: subForm.destinations,
      themes: subForm.themes,
      imagePreview: subForm.imagePreview || null,
      inclusions: subForm.inclusions.filter((inc) => inc.trim() !== ''),
    };

    const targetParentId = subForm.parentPackageId;

    if (editingSubPkg) {
      const oldParentId = editingSubPkg.parentId;
      if (oldParentId === targetParentId) {
        setPackages((prev) =>
          prev.map((p) =>
            p.id === targetParentId
              ? {
                  ...p,
                  offerings: p.offerings.map((o) => (o.id === newOffering.id ? newOffering : o)),
                }
              : p
          )
        );
      } else {
        setPackages((prev) =>
          prev.map((p) => {
            if (p.id === oldParentId) {
              return { ...p, offerings: p.offerings.filter((o) => o.id !== newOffering.id) };
            }
            if (p.id === targetParentId) {
              return { ...p, offerings: [...p.offerings, newOffering] };
            }
            return p;
          })
        );
      }
      showNotice(`Sub-Package "${subForm.name}" updated!`);
    } else {
      setPackages((prev) =>
        prev.map((p) =>
          p.id === targetParentId
            ? { ...p, offerings: [...p.offerings, newOffering] }
            : p
        )
      );
      const parentName = packages.find((p) => p.id === targetParentId)?.title || 'Category';
      showNotice(`Sub-Package "${subForm.name}" created under "${parentName}"!`);
    }

    setViewMode('list');
  };

  const handleDeleteSubPackage = (parentId: string, subId: string, subName: string) => {
    if (window.confirm(`Delete sub-package "${subName}"?`)) {
      setPackages((prev) =>
        prev.map((p) =>
          p.id === parentId
            ? { ...p, offerings: p.offerings.filter((o) => o.id !== subId) }
            : p
        )
      );
      showNotice(`Sub-Package "${subName}" deleted.`);
    }
  };

  // Image upload helpers
  const uploadImage = async (file: File) => {
    if (!token) throw new Error('Please sign in again before uploading an image.');
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch(`${API_URL}/api/packages/upload-image`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const payload = await response.json();
    if (!response.ok || !payload.success) throw new Error(payload.message || 'Image upload failed.');
    return payload.data.imageUrl as string;
  };

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setSyncMessage('Uploading image…');
        const imageUrl = await uploadImage(file);
        setMainForm((prev) => ({ ...prev, heroImagePreview: imageUrl }));
        setSyncMessage('Image uploaded. Save the package to publish it.');
      } catch (error) {
        setSyncMessage(error instanceof Error ? error.message : 'Image upload failed.');
      }
    }
  };

  const handleSubImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setSyncMessage('Uploading image…');
        const imageUrl = await uploadImage(file);
        setSubForm((prev) => ({ ...prev, imagePreview: imageUrl }));
        setSyncMessage('Image uploaded. Save the sub-package to publish it.');
      } catch (error) {
        setSyncMessage(error instanceof Error ? error.message : 'Image upload failed.');
      }
    }
  };

  // Inclusions dynamic input helpers
  const handleInclusionChange = (index: number, val: string) => {
    const updated = [...subForm.inclusions];
    updated[index] = val;
    setSubForm((prev) => ({ ...prev, inclusions: updated }));
  };

  const addInclusionField = () => {
    setSubForm((prev) => ({ ...prev, inclusions: [...prev.inclusions, ''] }));
  };

  const removeInclusionField = (index: number) => {
    setSubForm((prev) => ({
      ...prev,
      inclusions: prev.inclusions.filter((_, i) => i !== index),
    }));
  };

  // Flatten all sub-packages for Sub-Packages Tab View
  const allSubPackages = packages.flatMap((p) =>
    p.offerings.map((off) => ({
      parentId: p.id,
      parentTitle: p.title,
      offering: off,
    }))
  );

  const filteredSubPackages = allSubPackages.filter((item) => {
    const matchesCat = subPkgCategoryFilter === 'All' || item.parentId === subPkgCategoryFilter;
    const matchesSearch =
      item.offering.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.offering.destinations.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.parentTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const selectedCategoryObj = packages.find((p) => p.id === subForm.parentPackageId);

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER 1: DEDICATED FULL-PAGE MAIN PACKAGE CREATION / EDITING
  // ─────────────────────────────────────────────────────────────────────────────
  if (viewMode === 'create-main' || viewMode === 'edit-main') {
    const isEditing = viewMode === 'edit-main';
    return (
      <div className="p-4 sm:p-8 space-y-6 max-w-6xl mx-auto font-sans text-slate-900 dark:text-white animate-in fade-in duration-300">
        
        {/* Top Breadcrumb & Page Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-5 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToList}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Packages</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
            <div>
              <span className="text-[10px] font-semibold text-[#8C90C1] uppercase tracking-wider block">
                MAIN PACKAGE EDITOR
              </span>
              <h1 className="text-xl font-bold">
                {isEditing ? `Edit "${mainForm.title || 'Main Package'}"` : 'Create New Main Package Category'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBackToList}
              className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveMainPackage}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
            >
              <Save className="h-4 w-4" />
              <span>Save Main Package</span>
            </button>
          </div>
        </div>

        {/* 2-Column Main Package Form & Live Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Section */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5 text-left">
            <h2 className="text-base font-bold flex items-center gap-2 border-b border-slate-100 dark:border-[#1E2235] pb-3">
              <FolderPlus className="h-4.5 w-4.5 text-[#8C90C1]" />
              <span>Main Package Information</span>
            </h2>

            <form onSubmit={handleSaveMainPackage} className="space-y-6 text-xs font-sans">
              <div>
                <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                  Package Text / Name *
                </label>
                <input
                  required
                  type="text"
                  value={mainForm.title}
                  onChange={(e) => setMainForm({ ...mainForm, title: e.target.value })}
                  placeholder="e.g. WEDDING PHOTOGRAPHY"
                  className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs font-bold outline-none focus:border-[#8C90C1]"
                />
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">This text will appear at the bottom of the package card.</p>
              </div>

              {/* Cover Image Upload */}
              <div>
                <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                  Package Card Image *
                </label>
                <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-5 dark:border-[#2B3147] dark:bg-[#1A1E2E]">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-[#202435] hover:bg-[#8C90C1] hover:text-white transition-colors text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="h-4 w-4" />
                    <span>{mainForm.heroImagePreview ? 'Replace image from computer' : 'Choose image from computer'}</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleMainImageUpload}
                    className="hidden"
                  />
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">Only the image and the package name are needed for the main package card.</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-[#1E2235] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-slate-100 dark:bg-[#1A1E2E] border-slate-200 dark:border-[#2B3147]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-md cursor-pointer"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Main Package</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Live Card Preview Section */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
              <Eye className="h-4 w-4 text-[#8C90C1]" />
              <span>Live Website Card Preview</span>
            </div>

            <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl overflow-hidden shadow-md">
              <div className="relative aspect-[4/5] w-full bg-slate-900 overflow-hidden">
                {mainForm.heroImagePreview ? (
                  <img
                    src={mainForm.heroImagePreview}
                    alt="Preview"
                    className="h-full w-full object-cover opacity-90"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-slate-600">
                    <Package className="h-12 w-12" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold text-white/80 bg-black/60 px-2.5 py-0.5 rounded-full">
                  MAIN PACKAGE PREVIEW
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-base font-bold text-white uppercase tracking-wide text-center">
                    {mainForm.title || 'PACKAGE TITLE'}
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER 2: DEDICATED FULL-PAGE SUB-PACKAGE CREATION / EDITING (NO POPUP!)
  // ─────────────────────────────────────────────────────────────────────────────
  if (viewMode === 'create-sub' || viewMode === 'edit-sub') {
    const isEditing = viewMode === 'edit-sub';
    return (
      <div className="p-4 sm:p-8 space-y-6 max-w-6xl mx-auto font-sans text-slate-900 dark:text-white animate-in fade-in duration-300">
        
        {/* Top Breadcrumb & Page Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-5 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToList}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Packages</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
            <div>
              <span className="text-[10px] font-semibold text-[#8C90C1] uppercase tracking-wider block">
                SUB-PACKAGE EDITOR
              </span>
              <h1 className="text-xl font-bold">
                {isEditing ? `Edit Sub-Package "${subForm.name || 'Offering'}"` : 'Create New Sub-Package Offering'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBackToList}
              className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSubPackage}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
            >
              <Save className="h-4 w-4" />
              <span>Save Sub-Package</span>
            </button>
          </div>
        </div>

        {/* 2-Column Sub-Package Form & Live Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Section */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 text-left">
            
            {/* Category Dropdown Selection Highlight Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#8C90C1]/10 border border-[#8C90C1]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#6C70A6] dark:text-[#8C90C1] uppercase tracking-wider">
                <Tag className="h-4 w-4" />
                <span>SELECT MAIN PACKAGE CATEGORY *</span>
              </div>
              <select
                required
                value={subForm.parentPackageId}
                onChange={(e) => setSubForm({ ...subForm, parentPackageId: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-white dark:bg-[#1A1E2E] border border-[#8C90C1]/40 text-xs font-bold outline-none focus:ring-2 focus:ring-[#8C90C1] text-slate-900 dark:text-white"
              >
                <option value="" disabled>-- Select Main Package Category --</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    #{pkg.no} - {pkg.title} ({pkg.subtitle})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                This sub-package offering will be grouped and displayed under this selected category.
              </p>
            </div>

            <form onSubmit={handleSaveSubPackage} className="space-y-5 text-xs font-sans">
              {/* Name & Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                    Sub-Package Name / Title *
                  </label>
                  <input
                    required
                    type="text"
                    value={subForm.name}
                    onChange={(e) => setSubForm({ ...subForm, name: e.target.value })}
                    placeholder="e.g. Royal Heritage Fort Session (Full Day)"
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                    Category Tag / Badge
                  </label>
                  <input
                    type="text"
                    value={subForm.categoryTag}
                    onChange={(e) => setSubForm({ ...subForm, categoryTag: e.target.value })}
                    placeholder="e.g. Royal Concept"
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                </div>
              </div>

              {/* Price & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                    Starting Investment / Price
                  </label>
                  <input
                    type="text"
                    value={subForm.price}
                    onChange={(e) => setSubForm({ ...subForm, price: e.target.value })}
                    placeholder="e.g. INR 65,000"
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                    Duration / Days
                  </label>
                  <input
                    type="text"
                    value={subForm.duration}
                    onChange={(e) => setSubForm({ ...subForm, duration: e.target.value })}
                    placeholder="e.g. 1 Full Day (Dawn to Sunset)"
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                </div>
              </div>

              {/* Destinations & Themes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                    Shooting Destinations
                  </label>
                  <input
                    type="text"
                    value={subForm.destinations}
                    onChange={(e) => setSubForm({ ...subForm, destinations: e.target.value })}
                    placeholder="e.g. Amer Fort / Udaipur Palace"
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                    Themes & Style
                  </label>
                  <input
                    type="text"
                    value={subForm.themes}
                    onChange={(e) => setSubForm({ ...subForm, themes: e.target.value })}
                    placeholder="e.g. Royal Haveli, Fine-Art Portraits"
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                  Sub-Package Image URL or File Upload
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={subForm.imagePreview}
                    onChange={(e) => setSubForm({ ...subForm, imagePreview: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                  <button
                    type="button"
                    onClick={() => subFileInputRef.current?.click()}
                    className="px-4 py-3.5 rounded-xl bg-slate-200 dark:bg-[#202435] hover:bg-[#8C90C1] hover:text-white transition-colors text-xs font-bold shrink-0 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload</span>
                  </button>
                  <input
                    ref={subFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleSubImageUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Dynamic Inclusions List */}
              <div className="space-y-3 pt-2">
                <label className="block font-bold text-slate-700 dark:text-slate-300 text-xs">
                  Package Inclusions List
                </label>
                <div className="space-y-2.5">
                  {subForm.inclusions.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={inc}
                        onChange={(e) => handleInclusionChange(iIdx, e.target.value)}
                        placeholder={`e.g. Inclusion item #${iIdx + 1}`}
                        className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                      />
                      {subForm.inclusions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeInclusionField(iIdx)}
                          className="p-2.5 text-slate-400 hover:text-red-500 rounded-xl hover:bg-red-500/10"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addInclusionField}
                    className="text-xs font-bold text-[#6C70A6] dark:text-[#8C90C1] hover:underline flex items-center gap-1.5 pt-1 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>+ Add Inclusion Item</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-[#1E2235] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-slate-100 dark:bg-[#1A1E2E] border-slate-200 dark:border-[#2B3147]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-md cursor-pointer"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Sub-Package</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Live Sub-Package Card Preview */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
              <Eye className="h-4 w-4 text-[#8C90C1]" />
              <span>Live Website Offering Card Preview</span>
            </div>

            <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6C70A6] dark:text-[#8C90C1] bg-[#8C90C1]/15 px-3 py-1 rounded-full truncate">
                  Category: {selectedCategoryObj?.title || 'Selected Category'}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-[#1E2235] px-2 py-0.5 rounded-md">
                  {subForm.categoryTag || 'Tag'}
                </span>
              </div>

              <div className="flex items-start gap-4">
                {subForm.imagePreview ? (
                  <img
                    src={subForm.imagePreview}
                    alt="Preview"
                    className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-slate-200 dark:border-[#1E2235]"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-[#1E2235] flex items-center justify-center shrink-0 text-slate-400">
                    <Tag className="h-8 w-8" />
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                    {subForm.name || 'Sub-Package Name'}
                  </h4>
                  <p className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                    {subForm.price || 'INR 0'}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono pt-1 border-t border-slate-100 dark:border-[#1E2235]">
                <p className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#8C90C1] shrink-0" />
                  <span>{subForm.duration || 'Duration...'}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#8C90C1] shrink-0" />
                  <span>{subForm.destinations || 'Destinations...'}</span>
                </p>
              </div>

              {subForm.inclusions.filter((inc) => inc.trim() !== '').length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1">
                  {subForm.inclusions
                    .filter((inc) => inc.trim() !== '')
                    .map((inc, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-slate-100 dark:bg-[#1A1E2E] text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md flex items-center gap-1"
                      >
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span>{inc}</span>
                      </span>
                    ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER 3: MAIN LIST VIEW (MAIN PACKAGES & SUB PACKAGES TABS)
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans text-slate-900 dark:text-white">
      
      {/* ── Page Header & Primary Actions ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-[#1E2235] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#8C90C1]/15 text-[#6C70A6] dark:text-[#8C90C1]">
              <Layers className="h-5 w-5" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight">Packages & Sub-Packages Admin</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Create main package categories and assign custom sub-packages directly to categories.
          </p>
        </div>

        {/* Action Buttons for Main Package and Sub-Package */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenCreateMain}
            className="flex items-center gap-2 bg-slate-900 dark:bg-[#1E2235] hover:bg-slate-800 dark:hover:bg-[#2A2F45] text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700/50 shadow-sm cursor-pointer transition-all active:scale-95"
          >
            <FolderPlus className="h-4 w-4 text-[#8C90C1]" />
            <span>+ Create Main Package</span>
          </button>

          <button
            onClick={() => handleOpenCreateSub()}
            className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
          >
            <Plus className="h-4 w-4" />
            <span>+ Create Sub-Package</span>
          </button>
        </div>
      </div>

      {/* Notice Banner */}
      {notice && (
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 animate-in fade-in">
          <CheckCircle className="h-4 w-4 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* ── Navigation Tabs ── */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E2235]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveListTab('main-packages')}
            className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeListTab === 'main-packages'
                ? 'border-[#8C90C1] text-[#6C70A6] dark:text-[#8C90C1] bg-[#8C90C1]/10 rounded-t-xl'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Package className="h-4 w-4" />
            <span>Main Packages ({packages.length})</span>
          </button>

          <button
            onClick={() => setActiveListTab('sub-packages')}
            className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeListTab === 'sub-packages'
                ? 'border-[#8C90C1] text-[#6C70A6] dark:text-[#8C90C1] bg-[#8C90C1]/10 rounded-t-xl'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Tag className="h-4 w-4" />
            <span>Sub-Packages ({allSubPackages.length})</span>
          </button>
        </div>

        {/* Search Field */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search packages or offerings..."
            className="w-60 px-3 py-1.5 pl-8 text-xs rounded-xl bg-slate-100 dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] text-slate-900 dark:text-white focus:outline-none focus:border-[#8C90C1]"
          />
          <Filter className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2.5" />
        </div>
      </div>

      {/* ── LIST TAB 1: MAIN PACKAGES ── */}
      {activeListTab === 'main-packages' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl overflow-hidden shadow-sm hover:border-[#8C90C1]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 w-full bg-slate-900 overflow-hidden">
                    {pkg.heroImagePreview ? (
                      <img
                        src={pkg.heroImagePreview}
                        alt={pkg.title}
                        className="h-full w-full object-cover opacity-85"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-slate-600">
                        <Package className="h-10 w-10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold font-mono text-white/80 bg-black/60 px-2.5 py-0.5 rounded-full">
                      MAIN PACKAGE #{pkg.no}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-base font-bold text-white uppercase tracking-wide truncate">
                        {pkg.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-mono">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-[#1E2235] pb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 font-mono uppercase block">Starting Price</span>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {pkg.startingPrice || 'N/A'}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#6C70A6] dark:text-[#8C90C1] bg-[#8C90C1]/15 px-2.5 py-1 rounded-full font-bold">
                        {pkg.offerings.length} Sub-Package{pkg.offerings.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                        Assigned Sub-Packages:
                      </span>

                      {pkg.offerings.length > 0 ? (
                        <div className="space-y-1.5">
                          {pkg.offerings.map((off) => (
                            <div
                              key={off.id}
                              className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/60 dark:border-[#202435] text-xs"
                            >
                              <div className="min-w-0 pr-2">
                                <span className="font-semibold text-slate-800 dark:text-slate-200 block truncate">
                                  {off.name}
                                </span>
                                <span className="text-[10px] text-[#8C90C1] font-mono block">
                                  {off.price} • {off.duration}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => handleOpenEditSub(pkg.id, off)}
                                  className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#2B3147]"
                                  title="Edit Sub-Package"
                                >
                                  <Edit3 className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteSubPackage(pkg.id, off.id, off.name)}
                                  className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                                  title="Delete Sub-Package"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">No sub-packages added yet.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#0E101A] border-t border-slate-200 dark:border-[#1E2235] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleOpenEditMain(pkg)}
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#1A1E2E] transition-colors cursor-pointer"
                      title="Edit Main Package Details"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteMainPackage(pkg.id, pkg.title)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                      title="Delete Main Package"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleOpenCreateSub(pkg.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8C90C1]/15 hover:bg-[#8C90C1] text-[#6C70A6] dark:text-[#8C90C1] hover:text-white transition-all text-xs font-bold cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add Sub-Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {packages.length === 0 && (
            <div className="py-16 text-center border-2 border-dashed border-slate-300 dark:border-[#202435] rounded-3xl space-y-3">
              <Package className="h-10 w-10 text-slate-400 mx-auto" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No Main Packages Created Yet</p>
              <button
                onClick={handleOpenCreateMain}
                className="px-5 py-2.5 rounded-xl bg-[#8C90C1] text-white text-xs font-bold hover:bg-[#787CAE]"
              >
                + Create First Main Package
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── LIST TAB 2: SUB-PACKAGES ── */}
      {activeListTab === 'sub-packages' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <span className="text-xs font-mono text-slate-400 mr-2 font-bold uppercase">Filter Category:</span>
            <button
              onClick={() => setSubPkgCategoryFilter('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                subPkgCategoryFilter === 'All'
                  ? 'bg-[#8C90C1] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#121522] text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All Sub-Packages ({allSubPackages.length})
            </button>
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSubPkgCategoryFilter(pkg.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  subPkgCategoryFilter === pkg.id
                    ? 'bg-[#8C90C1] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-[#121522] text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {pkg.title} ({pkg.offerings.length})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSubPackages.map(({ parentId, parentTitle, offering }) => (
              <div
                key={offering.id}
                className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-5 shadow-sm hover:border-[#8C90C1]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6C70A6] dark:text-[#8C90C1] bg-[#8C90C1]/15 px-2.5 py-1 rounded-full truncate max-w-[200px]">
                      Category: {parentTitle}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-[#1E2235] px-2 py-0.5 rounded-md">
                      {offering.categoryTag}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    {offering.imagePreview ? (
                      <img
                        src={offering.imagePreview}
                        alt={offering.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-[#1E2235]"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-[#1E2235] flex items-center justify-center shrink-0 text-slate-400">
                        <Tag className="h-6 w-6" />
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                        {offering.name}
                      </h4>
                      <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                        {offering.price}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono pt-1">
                    <p className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#8C90C1] shrink-0" />
                      <span>{offering.duration}</span>
                    </p>
                    <p className="flex items-center gap-1.5 truncate">
                      <MapPin className="h-3.5 w-3.5 text-[#8C90C1] shrink-0" />
                      <span>{offering.destinations}</span>
                    </p>
                  </div>

                  {offering.inclusions.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 dark:border-[#1E2235] flex flex-wrap gap-1">
                      {offering.inclusions.slice(0, 3).map((inc, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono bg-slate-100 dark:bg-[#1A1E2E] text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <Check className="h-2.5 w-2.5 text-emerald-500" />
                          <span>{inc}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-[#1E2235] flex items-center justify-between">
                  <button
                    onClick={() => handleDeleteSubPackage(parentId, offering.id, offering.name)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-500/10 cursor-pointer"
                    title="Delete Sub-Package"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleOpenEditSub(parentId, offering)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-colors text-xs font-bold cursor-pointer"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    <span>Edit Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSubPackages.length === 0 && (
            <div className="py-16 text-center border-2 border-dashed border-slate-300 dark:border-[#202435] rounded-3xl space-y-3">
              <Tag className="h-10 w-10 text-slate-400 mx-auto" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No Sub-Packages Found</p>
              <button
                onClick={() => handleOpenCreateSub()}
                className="px-5 py-2.5 rounded-xl bg-[#8C90C1] text-white text-xs font-bold hover:bg-[#787CAE]"
              >
                + Create Sub-Package Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
