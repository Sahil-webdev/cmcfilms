import React, { useState } from 'react';
import { WeddingFilm } from '../data/mockData';
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
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [category, setCategory] = useState('Cinematic Film');
  const [customThumbnail, setCustomThumbnail] = useState('');

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
      // fallback if invalid URL syntax
    }
    return 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800';
  };

  const handleCreateFilm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !youtubeUrl) {
      alert('Please fill in the Film Title and YouTube Video URL.');
      return;
    }

    const autoThumb = getYoutubeThumbnail(youtubeUrl, customThumbnail);

    const newFilm: WeddingFilm = {
      id: `film-${Date.now()}`,
      title,
      youtubeUrl,
      thumbnailUrl: autoThumb,
      category,
      featured: true,
      createdAt: new Date().toISOString().split('T')[0],
    };

    onAddFilm(newFilm);
    setShowAddModal(false);
    setTitle('');
    setYoutubeUrl('');
    setCustomThumbnail('');
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
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer font-sans"
        >
          <Plus className="h-4 w-4" />
          <span>+ Add Wedding Film</span>
        </button>
      </div>

      {/* Films Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {films.map((film) => {
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

                {/* Category Tag */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                  <Youtube className="h-3 w-3 text-red-500" />
                  {film.category}
                </span>

                {/* Featured Toggle */}
                <button
                  onClick={() => onToggleFeatured(film.id)}
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
                    onClick={() => onDeleteFilm(film.id)}
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

      {/* Add Film Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#23293D] rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute right-5 top-5 p-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-[#8C90C1]">
                <Video className="h-5 w-5" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                  Add Wedding Film
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Add title and YouTube link for wedding teasers
              </p>
            </div>

            <form onSubmit={handleCreateFilm} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Film Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The Royal Affair | Devansh & Shreya | Udaipur Wedding Film"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">YouTube Video Link / URL *</label>
                <div className="relative">
                  <Youtube className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-red-500" />
                  <input
                    type="url"
                    required
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white pl-9 pr-3 py-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Category Tag</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                >
                  <option value="Cinematic Film">Cinematic Film</option>
                  <option value="Teaser Reel">Teaser Reel</option>
                  <option value="Pre-Wedding Film">Pre-Wedding Film</option>
                  <option value="Highlight Reel">Highlight Reel</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Custom Thumbnail Image URL (Optional)</label>
                <input
                  type="text"
                  value={customThumbnail}
                  onChange={(e) => setCustomThumbnail(e.target.value)}
                  placeholder="Leave empty to auto-detect YouTube thumbnail"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8C90C1] hover:bg-[#787CAE] text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer text-xs"
              >
                Save & Add Film
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
