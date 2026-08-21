import React, { useState } from 'react';
import { Story } from '../data/mockData';
import { Plus, Sparkles, MapPin, X } from 'lucide-react';

interface StoriesPageProps {
  stories: Story[];
  onToggleFeatured: (id: string) => void;
  onAddStory: (story: Story) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ stories, onToggleFeatured, onAddStory }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [couple, setCouple] = useState('');
  const [category, setCategory] = useState<Story['category']>('Royal Wedding');
  const [location, setLocation] = useState('Udaipur, Rajasthan');
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !couple) return;

    const newStory: Story = {
      id: `story-${Date.now()}`,
      title,
      couple,
      category,
      location,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
      photosCount: 30,
      featured: true,
      date: 'Aug 2026',
    };

    onAddStory(newStory);
    setShowAddModal(false);
    setTitle('');
    setCouple('');
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Wedding Stories Gallery</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Curate portfolio galleries displayed on the main website</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>+ Add Wedding Story</span>
        </button>
      </div>

      {/* Grid of Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl overflow-hidden group hover:border-[#8C90C1]/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={story.coverImage}
                alt={story.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                {story.category}
              </span>

              <button
                onClick={() => onToggleFeatured(story.id)}
                className={`absolute top-3 right-3 p-1.5 rounded-full border backdrop-blur-md transition-colors cursor-pointer ${
                  story.featured
                    ? 'bg-[#8C90C1] text-white border-[#8C90C1]'
                    : 'bg-black/60 text-slate-300 border-white/20 hover:text-white'
                }`}
                title={story.featured ? 'Featured on Home Page' : 'Click to feature on Home'}
              >
                <Sparkles className="h-4 w-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#8C90C1]">{story.couple}</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug font-sans">
                  {story.title}
                </h4>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#1E2235] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#8C90C1]" />
                  {story.location}
                </span>
                <span className="font-mono text-[10px] bg-slate-100 dark:bg-[#1A1E2E] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-[#2B3147] font-semibold">
                  {story.photosCount} Photos
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Story Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#23293D] rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute right-5 top-5 p-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Add Wedding Story</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Publish a new wedding gallery on the website</p>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Story Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Whispers of Love in Lake City"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Couple Names</label>
                <input
                  type="text"
                  required
                  value={couple}
                  onChange={(e) => setCouple(e.target.value)}
                  placeholder="e.g. Rahul & Sunaina"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  >
                    <option value="Royal Wedding">Royal Wedding</option>
                    <option value="Destination">Destination</option>
                    <option value="Pre-Wedding">Pre-Wedding</option>
                    <option value="Intimate Ceremony">Intimate Ceremony</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Cover Image URL</label>
                <input
                  type="text"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8C90C1] hover:bg-[#787CAE] text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer"
              >
                Publish Story
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
