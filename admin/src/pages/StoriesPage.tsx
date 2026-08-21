import React, { useState, useRef } from 'react';
import { Story } from '../data/mockData';
import {
  Plus,
  Sparkles,
  MapPin,
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Eye,
  Bold,
  Italic,
  List,
  Heading2,
  Heading3,
  Quote,
  Trash2,
  FileText,
  Save,
  Globe,
} from 'lucide-react';

interface StoriesPageProps {
  stories: Story[];
  onToggleFeatured: (id: string) => void;
  onAddStory: (story: Story) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ stories, onToggleFeatured, onAddStory }) => {
  // View states: 'list' | 'editor' | 'preview'
  const [viewMode, setViewMode] = useState<'list' | 'editor' | 'preview'>('list');
  const [editingStory, setEditingStory] = useState<Story | null>(null);

  // Editor Form Fields
  const [title, setTitle] = useState('');
  const [couple, setCouple] = useState('');
  const [category, setCategory] = useState<Story['category']>('Royal Wedding');
  const [location, setLocation] = useState('Udaipur, Rajasthan');
  const [date, setDate] = useState('Aug 2026');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'Published' | 'Draft'>('Published');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Open Editor for Creating New Story
  const handleOpenNewEditor = () => {
    setEditingStory(null);
    setTitle('');
    setCouple('');
    setCategory('Royal Wedding');
    setLocation('Udaipur, Rajasthan');
    setDate('Aug 2026');
    setExcerpt('');
    setContent('');
    setCoverImage('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800');
    setImagePreview(null);
    setStatus('Published');
    setViewMode('editor');
  };

  // Open Editor for Existing Story
  const handleOpenEditEditor = (story: Story) => {
    setEditingStory(story);
    setTitle(story.title);
    setCouple(story.couple);
    setCategory(story.category);
    setLocation(story.location);
    setDate(story.date);
    setExcerpt(story.excerpt || '');
    setContent(story.content || '');
    setCoverImage(story.coverImage);
    setImagePreview(story.coverImage);
    setStatus(story.status || 'Published');
    setViewMode('editor');
  };

  // Handle System File Upload for Cover Image
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setCoverImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Insert Rich Text Formatting Snippets into Content
  const handleFormatText = (prefix: string, suffix: string = '') => {
    setContent((prev) => `${prev}${prefix}${suffix}`);
  };

  // Save / Publish Blog Post
  const handleSavePost = (publishStatus: 'Published' | 'Draft') => {
    if (!title || !couple) {
      alert('Please fill in the Story Title and Couple Names.');
      return;
    }

    const newStory: Story = {
      id: editingStory ? editingStory.id : `story-${Date.now()}`,
      title,
      couple,
      category,
      location,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
      photosCount: 35,
      featured: editingStory ? editingStory.featured : true,
      date,
      excerpt: excerpt || title,
      content: content || 'Story content coming soon...',
      status: publishStatus,
    };

    onAddStory(newStory);
    setViewMode('list');
  };

  // -------------------------------------------------------------
  // RENDER VIEW 1: BLOG POST EDITOR MODE
  // -------------------------------------------------------------
  if (viewMode === 'editor') {
    return (
      <div className="p-6 sm:p-8 max-w-5xl mx-auto space-y-8 font-sans">
        {/* Editor Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#1E2235]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('list')}
              className="p-2 rounded-xl border transition-colors bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              title="Back to Stories List"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {editingStory ? 'Edit Story Post' : 'Create New Wedding Story'}
                </h2>
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    status === 'Published'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                  }`}
                >
                  {status}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Write & publish luxury wedding story blog posts for the website
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSavePost('Draft')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1A1E2E] transition-colors cursor-pointer"
            >
              <Save className="h-4 w-4 text-slate-400" />
              <span>Save Draft</span>
            </button>

            <button
              onClick={() => handleSavePost('Published')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 transition-all cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              <span>Publish to Website</span>
            </button>
          </div>
        </div>

        {/* Main Editor Body */}
        <div className="space-y-8">
          {/* Section 1: Story Title & Excerpt */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#8C90C1]">
                Story Blog Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Whispers of Royal Elegance at Jagmandir Island Palace"
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-lg sm:text-xl font-bold text-slate-900 dark:text-white p-4 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Short Excerpt / Teaser Summary
              </label>
              <textarea
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A brief 1-2 sentence preview summary of the wedding celebration..."
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-xs text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
              />
            </div>
          </div>

          {/* Section 2: Metadata Grid */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-[#1E2235] pb-2">
              Wedding Post Meta & Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Couple Names *</label>
                <input
                  type="text"
                  value={couple}
                  onChange={(e) => setCouple(e.target.value)}
                  placeholder="e.g. Devansh & Shreya"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                >
                  <option value="Royal Wedding">Royal Wedding</option>
                  <option value="Destination">Destination</option>
                  <option value="Pre-Wedding">Pre-Wedding</option>
                  <option value="Intimate Ceremony">Intimate Ceremony</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Location / Venue</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Udaipur, Rajasthan"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Shoot Month & Year</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Feb 2026"
                  className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Thumbnail & Cover Image Upload */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-[#1E2235] pb-2">
              Featured Cover Image & Thumbnail
            </h4>

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Upload Drop Zone / Button */}
              <div className="space-y-3">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] rounded-2xl p-6 text-center space-y-2 cursor-pointer transition-colors bg-slate-50/50 dark:bg-[#171B29]/50"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#8C90C1]/15 text-[#8C90C1] flex items-center justify-center mx-auto">
                    <Upload className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Click to choose image from system
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Supports PNG, JPG, WEBP (Max 10MB)</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500">Or Paste Image URL directly:</label>
                  <input
                    type="text"
                    value={coverImage}
                    onChange={(e) => {
                      setCoverImage(e.target.value);
                      setImagePreview(e.target.value);
                    }}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-xs text-slate-900 dark:text-white p-2.5 rounded-xl border border-slate-200 dark:border-[#2B3147]"
                  />
                </div>
              </div>

              {/* Cover Preview Box */}
              <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-[#23293D] flex items-center justify-center">
                {imagePreview || coverImage ? (
                  <>
                    <img
                      src={imagePreview || coverImage}
                      alt="Cover Preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                      <span className="text-[11px] font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                        Cover Preview
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-slate-500 text-xs space-y-1">
                    <ImageIcon className="h-8 w-8 mx-auto text-slate-600" />
                    <p>No cover image selected</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 4: Rich Content Editor Toolbar & Textarea */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-[#1E2235] pb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Full Wedding Story Article Content
              </h4>

              {/* Formatting Toolbar */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#171B29] p-1 rounded-xl border border-slate-200 dark:border-[#2B3147]">
                <button
                  type="button"
                  onClick={() => handleFormatText('**', '**')}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#23293D]"
                  title="Bold"
                >
                  <Bold className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleFormatText('*', '*')}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#23293D]"
                  title="Italic"
                >
                  <Italic className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleFormatText('\n## ', '\n')}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#23293D]"
                  title="Heading 2"
                >
                  <Heading2 className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleFormatText('\n### ', '\n')}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#23293D]"
                  title="Heading 3"
                >
                  <Heading3 className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleFormatText('\n> ', '\n')}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#23293D]"
                  title="Quote Block"
                >
                  <Quote className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleFormatText('\n- ', '\n')}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#23293D]"
                  title="Bullet List"
                >
                  <List className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <textarea
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the full wedding blog post story here... (Describe the venue, moments, ritual highlights, ceremony details, and couple quote)"
              className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-sm text-slate-900 dark:text-white p-4 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1] leading-relaxed font-sans"
            />
          </div>

          {/* Bottom Save Bar */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-[#1E2235]">
            <button
              onClick={() => setViewMode('list')}
              className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1A1E2E]"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSavePost('Published')}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20"
            >
              Publish Story Post
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER VIEW 2: LIST MODE (ALL BLOG STORIES GRID)
  // -------------------------------------------------------------
  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
            Wedding Stories CMS
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Publish & manage luxury wedding photo stories and blog posts for the website
          </p>
        </div>

        <button
          onClick={handleOpenNewEditor}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer font-sans"
        >
          <Plus className="h-4 w-4" />
          <span>+ Add Wedding Story</span>
        </button>
      </div>

      {/* Stories Grid */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

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
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#8C90C1]">{story.couple}</span>
                  <span className="text-[10px] font-semibold text-slate-400">{story.date}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug font-sans">
                  {story.title}
                </h4>
                {story.excerpt && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {story.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#1E2235] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-[#8C90C1]" />
                  {story.location}
                </span>

                <button
                  onClick={() => handleOpenEditEditor(story)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                >
                  Edit Post →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
