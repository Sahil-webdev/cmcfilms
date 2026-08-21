import React, { useState, useRef } from 'react';
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
  Upload,
  Image as ImageIcon,
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
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Handle System File Upload for Thumbnail
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateFilm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !youtubeUrl) {
      alert('Please fill in the Film Title and YouTube Video URL.');
      return;
    }

    const finalThumb = thumbnailPreview || getYoutubeThumbnail(youtubeUrl);

    const newFilm: WeddingFilm = {
      id: `film-${Date.now()}`,
      title,
      youtubeUrl,
      thumbnailUrl: finalThumb,
      category: 'Cinematic Film',
      featured: true,
      createdAt: new Date().toISOString().split('T')[0],
    };

    onAddFilm(newFilm);
    setShowAddModal(false);
    setTitle('');
    setYoutubeUrl('');
    setThumbnailPreview(null);
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
            setThumbnailPreview(null);
            setShowAddModal(true);
          }}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer font-sans transition-all active:scale-95"
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

                {/* Youtube Badge */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                  <Youtube className="h-3 w-3 text-red-500" />
                  YouTube Film
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
                Enter video title, YouTube link and select thumbnail from your system
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

              {/* Field 3: System File Picker for Thumbnail */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 dark:text-slate-300">
                  Thumbnail Image (Upload from System)
                </label>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {thumbnailPreview ? (
                  <div className="relative h-36 w-full rounded-2xl overflow-hidden bg-slate-900 border border-[#8C90C1]/50 group">
                    <img
                      src={thumbnailPreview}
                      alt="System Thumbnail"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => setThumbnailPreview(null)}
                        className="px-3 py-1.5 rounded-xl bg-red-500 text-white font-semibold text-xs shadow"
                      >
                        Remove Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] rounded-2xl p-5 text-center space-y-1.5 cursor-pointer transition-colors bg-slate-50/50 dark:bg-[#171B29]/50"
                  >
                    <Upload className="h-5 w-5 mx-auto text-[#8C90C1]" />
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Click to choose thumbnail from computer
                    </p>
                    <p className="text-[10px] text-slate-400">
                      PNG, JPG, WEBP (If empty, YouTube thumbnail will auto-detect)
                    </p>
                  </div>
                )}
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
