import React, { useEffect, useState } from 'react';
import { WeddingFilm } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../lib/environment';
import {
  Plus,
  Play,
  ExternalLink,
  Youtube,
  Sparkles,
  Trash2,
  X,
  Video,
} from 'lucide-react';

interface FilmsPageProps {
  films: WeddingFilm[];
  onAddFilm: (film: WeddingFilm) => void;
  onDeleteFilm: (id: string) => void;
  onToggleFeatured: (id: string) => void;
}

export const FilmsPage: React.FC<FilmsPageProps> = ({
  films,
  onAddFilm,
  onDeleteFilm,
  onToggleFeatured,
}) => {
  const { token } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [managedFilms, setManagedFilms] = useState<WeddingFilm[]>(films);
  const [introTitle, setIntroTitle] = useState('Deeply personal, immersive, and timeless Films.');
  const [introText, setIntroText] = useState('Cinematic wedding films rooted in genuine emotion, unscripted movement, and honest storytelling. We take pride in understanding the couple, their families, and the quiet, intimate glances between. Every celebration deserves a wedding film thoughtfully crafted to do justice to the beauty, grace, and authentic spirit of your story.');
  const [hydrated, setHydrated] = useState(false);

  // Extract YouTube Thumbnail helper
  const getYoutubeThumbnail = (url: string, fallback?: string) => {
    if (fallback) return fallback;
    try {
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v') || '';
      }
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    } catch (e) {
      // fallback
    }
    return 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800';
  };

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/films`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        if (Array.isArray(payload?.data?.films)) setManagedFilms(payload.data.films);
        if (payload?.data?.introTitle) setIntroTitle(payload.data.introTitle);
        if (payload?.data?.introText) setIntroText(payload.data.introText);
      })
      .catch(() => undefined)
      .finally(() => setHydrated(true));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!hydrated || !token) return;
    const timer = window.setTimeout(() => {
      fetch(`${API_URL}/api/films`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ films: managedFilms, introTitle, introText }),
      }).catch(() => undefined);
    }, 400);
    return () => window.clearTimeout(timer);
  }, [managedFilms, introTitle, introText, hydrated, token]);

  const handleCreateFilm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !youtubeUrl) {
      alert('Please fill in the Film Title and YouTube Video URL.');
      return;
    }

    const newFilm: WeddingFilm = {
      id: `film-${Date.now()}`,
      title,
      youtubeUrl,
      thumbnailUrl: getYoutubeThumbnail(youtubeUrl),
      category: 'Cinematic Film',
      featured: true,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setManagedFilms((current) => [newFilm, ...current]);
    onAddFilm(newFilm);
    setShowAddModal(false);
    setTitle('');
    setYoutubeUrl('');
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
            Wedding Films CMS
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Manage YouTube cinematic films, teasers and video redirects for the website
          </p>
        </div>

        <button
          onClick={() => {
            setTitle('');
            setYoutubeUrl('');
            setShowAddModal(true);
          }}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer font-sans transition-all active:scale-95"
        >
          <Plus className="h-4 w-4" />
          <span>+ Add Wedding Film</span>
        </button>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#1E2235] dark:bg-[#121522]">
        <div className="mb-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Wedding Films Page Introduction</h4>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">This heading and text appear above the six-film showcase on the website.</p>
        </div>
        <div className="grid gap-4">
          <input value={introTitle} onChange={(event) => setIntroTitle(event.target.value)} placeholder="Section heading" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold outline-none focus:border-[#8C90C1] dark:border-[#2B3147] dark:bg-[#1A1E2E] dark:text-white" />
          <textarea value={introText} onChange={(event) => setIntroText(event.target.value)} placeholder="Section introduction" rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#8C90C1] dark:border-[#2B3147] dark:bg-[#1A1E2E] dark:text-white" />
          <p className="text-[11px] text-slate-400">Changes save automatically and publish to the live Wedding Films page.</p>
        </div>
      </section>

      {/* Films Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managedFilms.map((film) => {
          const thumb = getYoutubeThumbnail(film.youtubeUrl, film.thumbnailUrl);
          return (
            <div
              key={film.id}
              className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl overflow-hidden group hover:border-[#8C90C1]/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              {/* YouTube Thumbnail Preview Header */}
              <div className="relative h-52 w-full overflow-hidden bg-black">
                <img
                  src={thumb}
                  alt={film.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                {/* Youtube Badge */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                  <Youtube className="h-3 w-3 text-red-500" />
                  YouTube Film
                </span>

                {/* Featured Toggle */}
                <button
                  onClick={() => setManagedFilms((current) => current.map((item) => item.id === film.id ? { ...item, featured: !item.featured } : item))}
                  className={`absolute top-3 right-3 p-1.5 rounded-full border backdrop-blur-md transition-colors cursor-pointer ${
                    film.featured
                      ? 'bg-[#8C90C1] text-white border-[#8C90C1]'
                      : 'bg-black/60 text-slate-300 border-white/20 hover:text-white'
                  }`}
                  title={film.featured ? 'Featured on Home Page' : 'Click to feature on Home'}
                >
                  <Sparkles className="h-4 w-4" />
                </button>

                {/* Play Button Overlay (Clicking opens YouTube) */}
                <a
                  href={film.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                >
                  <div className="h-14 w-14 rounded-full bg-[#8C90C1] group-hover/btn:bg-[#787CAE] text-white flex items-center justify-center shadow-xl group-hover/btn:scale-110 transition-all duration-300 border-2 border-white/40">
                    <Play className="h-6 w-6 fill-white ml-0.5" />
                  </div>
                </a>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug font-sans line-clamp-2">
                    {film.title}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400 truncate">
                    {film.youtubeUrl}
                  </p>
                </div>

                {/* Card Action Controls */}
                <div className="pt-3 border-t border-slate-200 dark:border-[#1E2235] flex items-center justify-between">
                  <button
                    onClick={() => setManagedFilms((current) => current.filter((item) => item.id !== film.id))}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                    title="Delete Film"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <a
                    href={film.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                  >
                    <span>Watch Film</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Redesigned Clean Add Film Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#23293D] rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute right-5 top-5 p-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Title */}
            <div>
              <div className="flex items-center gap-2.5 text-[#8C90C1]">
                <Video className="h-5 w-5" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                  Add Wedding Film
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Enter a display title and YouTube link. The thumbnail is fetched automatically from YouTube.
              </p>
            </div>

            <form onSubmit={handleCreateFilm} className="space-y-5 text-xs">
              {/* Field 1: Film Title */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 dark:text-slate-300">Film Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The Royal Affair | Devansh & Shreya | Udaipur Wedding Film"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3.5 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-sans"
                />
              </div>

              {/* Field 2: YouTube Video Link */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 dark:text-slate-300">YouTube Video Link / URL *</label>
                <div className="relative">
                  <Youtube className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-red-500" />
                  <input
                    type="url"
                    required
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white pl-10 pr-3.5 py-3.5 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] text-xs font-mono"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-500 dark:border-[#2B3147] dark:bg-[#171B29] dark:text-slate-400">
                The YouTube thumbnail will be used automatically after you save this video.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#8C90C1] hover:bg-[#787CAE] text-white font-bold py-3.5 rounded-xl transition-all cursor-pointer text-xs shadow-lg shadow-[#8C90C1]/20 active:scale-95 mt-2"
              >
                Save & Add Wedding Film
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
