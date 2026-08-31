import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CommandPalette } from './components/CommandPalette';
import { NotificationDrawer } from './components/NotificationDrawer';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { InquiriesPage } from './pages/InquiriesPage';
import { StoriesPage } from './pages/StoriesPage';
import { FilmsPage } from './pages/FilmsPage';
import { PackagesPage } from './pages/PackagesPage';
import { MediaPage } from './pages/MediaPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';
import { HomeHeroPage } from './pages/HomeHeroPage';
import { GalleryPage, type GalleryImage, type GalleryCategory } from './pages/GalleryPage';
import { CoupleShootPage } from './pages/CoupleShootPage';
import {
  INITIAL_INQUIRIES,
  INITIAL_STORIES,
  INITIAL_FILMS,
  INITIAL_PACKAGES,
  INITIAL_MEDIA,
  Inquiry,
  Story,
  WeddingFilm,
  PackageItem,
  MediaAsset,
} from './data/mockData';
import { X } from 'lucide-react';

const AdminContent: React.FC = () => {
  const { isAuthenticated, activeTab, setActiveTab } = useAuth();

  // Layout UI states
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Data states
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [films, setFilms] = useState<WeddingFilm[]>(() => {
    try {
      const saved = localStorage.getItem('cmc_films');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_FILMS;
  });
  const [packages, setPackages] = useState<PackageItem[]>(INITIAL_PACKAGES);
  const [media, setMedia] = useState<MediaAsset[]>(INITIAL_MEDIA);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    try {
      const saved = localStorage.getItem('cmc_gallery');
      if (saved) return JSON.parse(saved) as GalleryImage[];
    } catch {}
    return [];
  });

  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [showNewInquiryModal, setShowNewInquiryModal] = useState(false);

  // New Inquiry Form fields
  const [newCouple, setNewCouple] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newVenue, setNewVenue] = useState('');
  const [newBudget, setNewBudget] = useState('₹8,00,000');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Handlers
  const handleUpdateStatus = (id: string, status: Inquiry['status']) => {
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status } : null));
    }
  };

  const handleSaveInquiry = (updated: Partial<Inquiry>) => {
    if (!updated.id) return;
    setInquiries((prev) => prev.map((i) => (i.id === updated.id ? { ...i, ...updated } : i)));
  };

  const handleCreateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouple) return;

    const created: Inquiry = {
      id: `INQ-${1000 + inquiries.length + 1}`,
      coupleName: newCouple,
      email: newEmail || 'couple@gmail.com',
      phone: newPhone || '+91 98765 00000',
      weddingDate: newDate || '2026-11-20',
      venueLocation: newVenue || 'Lake Palace, Udaipur',
      estimatedBudget: newBudget,
      servicesRequested: ['Full Wedding Cinema', 'Pre-Wedding Shoot'],
      status: 'New',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setInquiries([created, ...inquiries]);
    setShowNewInquiryModal(false);
    setNewCouple('');
    setNewEmail('');
    setNewPhone('');
  };

  const handleToggleFeaturedStory = (id: string) => {
    setStories((prev) => prev.map((s) => (s.id === id ? { ...s, featured: !s.featured } : s)));
  };

  const handleAddStory = (story: Story) => {
    setStories([story, ...stories]);
  };

  // Film Handlers
  const handleAddFilm = (film: WeddingFilm) => {
    setFilms([film, ...films]);
  };

  const handleDeleteFilm = (id: string) => {
    setFilms((prev) => prev.filter((f) => f.id !== id));
  };

  const handleToggleFeaturedFilm = (id: string) => {
    setFilms((prev) => prev.map((f) => (f.id === id ? { ...f, featured: !f.featured } : f)));
  };

  // Persist films to localStorage whenever films state changes
  React.useEffect(() => {
    try {
      localStorage.setItem('cmc_films', JSON.stringify(films));
    } catch {}
  }, [films]);

  // Persist gallery to localStorage
  React.useEffect(() => {
    try {
      localStorage.setItem('cmc_gallery', JSON.stringify(galleryImages));
    } catch {}
  }, [galleryImages]);

  const handleUpdatePackage = (pkg: PackageItem) => {
    setPackages((prev) => prev.map((p) => (p.id === pkg.id ? pkg : p)));
  };

  const handleUploadMedia = (asset: MediaAsset) => {
    setMedia([asset, ...media]);
  };

  // Gallery Handlers
  const handleAddGalleryImages = (imgs: GalleryImage[]) => {
    setGalleryImages((prev) => [...prev, ...imgs]);
  };

  const handleDeleteGalleryImage = (id: string) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleUpdateGalleryCategory = (id: string, category: GalleryCategory) => {
    setGalleryImages((prev) => prev.map((img) => img.id === id ? { ...img, category } : img));
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardPage
            inquiries={inquiries}
            stories={stories}
            packages={packages}
            onNavigateTab={setActiveTab}
            onSelectInquiry={(inq) => {
              setSelectedInquiry(inq);
              setActiveTab('inquiries');
            }}
          />
        );
      case 'inquiries':
        return (
          <InquiriesPage
            inquiries={inquiries}
            onUpdateStatus={handleUpdateStatus}
            onSaveInquiry={handleSaveInquiry}
            selectedInquiry={selectedInquiry}
            setSelectedInquiry={setSelectedInquiry}
          />
        );
      case 'stories':
        return (
          <StoriesPage
            stories={stories}
            onToggleFeatured={handleToggleFeaturedStory}
            onAddStory={handleAddStory}
          />
        );
      case 'films':
        return (
          <FilmsPage
            films={films}
            onAddFilm={handleAddFilm}
            onDeleteFilm={handleDeleteFilm}
            onToggleFeatured={handleToggleFeaturedFilm}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            images={galleryImages}
            onAddImages={handleAddGalleryImages}
            onDeleteImage={handleDeleteGalleryImage}
            onUpdateCategory={handleUpdateGalleryCategory}
          />
        );
      case 'packages':
        return <PackagesPage />;
      case 'media':
        return <MediaPage media={media} onUploadMedia={handleUploadMedia} />;
      case 'home-hero':
        return <HomeHeroPage />;
      case 'couple-shoot':
        return <CoupleShootPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return (
          <DashboardPage
            inquiries={inquiries}
            stories={stories}
            packages={packages}
            onNavigateTab={setActiveTab}
            onSelectInquiry={setSelectedInquiry}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#0B0C10] text-slate-900 dark:text-[#E2E8F0] transition-colors duration-200 font-sans">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onNewInquiryClick={() => setShowNewInquiryModal(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
        />
        <main className="flex-1 overflow-y-auto pb-12">{renderActiveView()}</main>
      </div>

      {/* Command Palette Modal (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNewInquiry={() => setShowNewInquiryModal(true)}
      />

      {/* Slide-over Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onNavigateTab={setActiveTab}
      />

      {/* New Inquiry Modal */}
      {showNewInquiryModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#23293D] rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowNewInquiryModal(false)}
              className="absolute right-5 top-5 p-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1E2C] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Create New Inquiry</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Add a new client wedding booking request</p>
            </div>

            <form onSubmit={handleCreateInquiry} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Couple Names</label>
                <input
                  type="text"
                  required
                  value={newCouple}
                  onChange={(e) => setNewCouple(e.target.value)}
                  placeholder="e.g. Sameer & Priyanka"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2C] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Phone</label>
                  <input
                    type="text"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 dark:bg-[#1A1E2C] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="couple@gmail.com"
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Wedding Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Venue / Location</label>
                  <input
                    type="text"
                    value={newVenue}
                    onChange={(e) => setNewVenue(e.target.value)}
                    placeholder="Udaipur, Rajasthan"
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Budget Range</label>
                <input
                  type="text"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  placeholder="e.g. ₹10,00,000"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8C90C1] hover:bg-[#787CAE] text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer"
              >
                Save Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AdminContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
