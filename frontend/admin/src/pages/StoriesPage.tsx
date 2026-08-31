import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../lib/environment';
import {
  Plus,
  Trash2,
  Save,
  X,
  Edit3,
  Film,
  Upload,
  Image as ImageIcon,
  CheckCircle,
  MapPin,
  Tag,
  Clock,
  Sparkles,
  ArrowLeft,
  Eye,
  Sliders,
  Maximize2,
  Wand2,
} from 'lucide-react';

declare global {
  interface Window {
    CKEDITOR: any;
  }
}

export interface WeddingStory {
  id: string;
  title: string;
  subtitle?: string;
  couple: string;
  date: string;
  location: string;
  category: string;
  coverImage: string;
  content: string;
  status: 'Published' | 'Draft' | string;
  featured: boolean;
  photosCount?: number;
}

const initialStories: WeddingStory[] = [
  {
    id: 'story-1',
    title: 'The Royal Lake Palace Romance of Ananya & Dev',
    subtitle: 'A 3-Day Sunset Royal Wedding at Taj Lake Pichola, Udaipur',
    couple: 'Ananya & Dev',
    date: 'February 14, 2026',
    location: 'Taj Lake Pichola, Udaipur',
    category: 'Royal Palace',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    content:
      '<h2>The Heritage Arrival</h2><p>Set amidst the serene waters of Lake Pichola, Ananya and Dev celebrated their vows surrounded by centuries-old marble palaces and crimson sunsets.</p>',
    status: 'Published',
    featured: true,
  },
  {
    id: 'story-2',
    title: 'Sunset Coastal vows at Alila Diwa, Goa',
    subtitle: 'Intimate Beachfront Nuptials with Golden Hour Mandap',
    couple: 'Rhea & Rohan',
    date: 'January 28, 2026',
    location: 'Alila Diwa, South Goa',
    category: 'Destination Beach',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    content:
      '<h2>Coastal Harmony</h2><p>Warm ocean breeze, acoustic strings, and an ethereal floral mandap created an unscripted sunset celebration.</p>',
    status: 'Published',
    featured: true,
  },
];

export interface StoriesPageProps {
  stories?: any[];
  onToggleFeatured?: (id: string) => void;
  onAddStory?: (story: any) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  stories: propStories,
  onToggleFeatured: propToggleFeatured,
  onAddStory: propAddStory,
}) => {
  const { token } = useAuth();
  const [stories, setStories] = useState<WeddingStory[]>(() => {
    try {
      const saved = localStorage.getItem('cmc_stories');
      if (saved) return JSON.parse(saved);
    } catch {
    }
    if (propStories && propStories.length > 0) return propStories;
    return initialStories;
  });
  const [storiesReady, setStoriesReady] = useState(false);
  const skipFirstPublish = useRef(true);

  useEffect(() => {
    try {
      localStorage.setItem('cmc_stories', JSON.stringify(stories));
    } catch (err) {
      console.error('Failed to save stories:', err);
    }
  }, [stories]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/stories`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        if (Array.isArray(payload?.data?.stories)) {
          setStories((current) => {
            const remoteStories = payload.data.stories as WeddingStory[];
            const hasLocalOnlyStory = current.some((story) => !remoteStories.some((remote) => remote.id === story.id));
            if (hasLocalOnlyStory) {
              skipFirstPublish.current = false;
              return current;
            }
            return remoteStories;
          });
        } else skipFirstPublish.current = false;
      })
      .catch(() => undefined)
      .finally(() => !controller.signal.aborted && setStoriesReady(true));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!storiesReady || !token) return;
    if (skipFirstPublish.current) { skipFirstPublish.current = false; return; }
    const timer = window.setTimeout(async () => {
      try {
        const publishedStories = await Promise.all(stories.map(async (story) => {
          if (!story.coverImage.startsWith('data:image/')) return story;
          const blob = await (await fetch(story.coverImage)).blob();
          const imageFile = new File([blob], 'story-cover.jpg', { type: blob.type || 'image/jpeg' });
          const formData = new FormData();
          formData.append('image', imageFile);
          const uploadResponse = await fetch(`${API_URL}/api/packages/upload-image`, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: formData });
          const uploadPayload = await uploadResponse.json();
          if (!uploadResponse.ok || !uploadPayload.success) throw new Error(uploadPayload.message || 'Cover image upload failed.');
          return { ...story, coverImage: uploadPayload.data.imageUrl };
        }));
        if (publishedStories.some((story, index) => story.coverImage !== stories[index].coverImage)) setStories(publishedStories);
        const response = await fetch(`${API_URL}/api/stories`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ stories: publishedStories }) });
        if (!response.ok) throw new Error(`Publishing failed (${response.status}).`);
      } catch (error) {
        console.error('Unable to publish stories:', error);
      }
    }, 300);
    return () => window.clearTimeout(timer);
  }, [stories, storiesReady, token]);

  const [viewMode, setViewMode] = useState<'list' | 'editor'>('list');
  const [editingStory, setEditingStory] = useState<WeddingStory | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [couple, setCouple] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Royal Palace');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');
  const [featured, setFeatured] = useState(false);

  // Toolbar Visibility State (for #editorContainer.hide-toolbar)
  const [showTools, setShowTools] = useState(true);

  // Notification Banner
  const [notice, setNotice] = useState<string | null>(null);
  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3500);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const articleImageInputRef = useRef<HTMLInputElement>(null);
  const editorInstanceRef = useRef<any>(null);

  // ─────────────────────────────────────────────────────────────────────────────
  // CKEDITOR INTEGRATION SETUP
  // ─────────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (viewMode !== 'editor') {
      // Clean up CKEditor instance when leaving editor view
      if (window.CKEDITOR && window.CKEDITOR.instances.news_content) {
        window.CKEDITOR.instances.news_content.destroy(true);
        editorInstanceRef.current = null;
      }
      return;
    }

    let isMounted = true;

    // Load CKEditor 4.22.1 Full CDN if not already loaded in window
    const initEditorInstance = () => {
      if (!isMounted) return;

      const textareaEl = document.getElementById('news_content');
      if (!textareaEl) {
        console.warn('Textarea #news_content not found in DOM yet.');
        return;
      }

      // Prevent duplicate initialization
      if (window.CKEDITOR && window.CKEDITOR.instances.news_content) {
        window.CKEDITOR.instances.news_content.destroy(true);
      }

      if (window.CKEDITOR) {
        try {
          const editor = window.CKEDITOR.replace('news_content', {
            height: 420,
            uiColor: '#F8FAFC',
            // Explicit Full Build Toolbar Groups Configuration (No removeButtons: 'Image')
            toolbarGroups: [
              { name: 'document', groups: ['mode', 'document', 'doctools'] },
              { name: 'clipboard', groups: ['clipboard', 'undo'] },
              { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
              { name: 'forms', groups: ['forms'] },
              '/',
              { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
              { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
              { name: 'links', groups: ['links'] },
              { name: 'insert', groups: ['insert'] },
              '/',
              { name: 'styles', groups: ['styles'] },
              { name: 'colors', groups: ['colors'] },
              { name: 'tools', groups: ['tools'] },
              { name: 'others', groups: ['others'] },
              { name: 'about', groups: ['about'] },
            ],
            // Enable all full plugins
            extraPlugins: '',
            allowedContent: true,
          });

          editorInstanceRef.current = editor;

          editor.on('instanceReady', () => {
            // Populate initial content if present
            if (content) {
              editor.setData(content);
            }
          });

          editor.on('change', () => {
            const data = editor.getData();
            setContent(data);
            editor.updateElement();
          });
        } catch (err) {
          console.error('Error initializing CKEditor:', err);
        }
      }
    };

    // If CKEditor script is already on page, init immediately; otherwise load CDN script
    if (window.CKEDITOR) {
      setTimeout(initEditorInstance, 100);
    } else {
      const existingScript = document.querySelector('script[src*="ckeditor.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://cdn.ckeditor.com/4.22.1/full/ckeditor.js';
        script.async = true;
        script.onload = () => setTimeout(initEditorInstance, 150);
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', () => setTimeout(initEditorInstance, 150));
      }
    }

    return () => {
      isMounted = false;
      if (window.CKEDITOR && window.CKEDITOR.instances.news_content) {
        window.CKEDITOR.instances.news_content.destroy(true);
        editorInstanceRef.current = null;
      }
    };
  }, [viewMode]);

  // Handle open editor mode
  const handleOpenNewEditor = () => {
    setEditingStory(null);
    setTitle('');
    setSubtitle('');
    setCouple('');
    setDate(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
    setLocation('');
    setCategory('Royal Palace');
    setCoverImage('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800');
    setContent('');
    setFeatured(false);
    setShowTools(true);
    setViewMode('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEditEditor = (story: WeddingStory) => {
    setEditingStory(story);
    setTitle(story.title);
    setSubtitle(story.subtitle || "");
    setCouple(story.couple);
    setDate(story.date);
    setLocation(story.location);
    setCategory(story.category);
    setCoverImage(story.coverImage);
    setContent(story.content);
    setFeatured(story.featured);
    setShowTools(true);
    setViewMode('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Image Upload Handler
  const uploadStoryImage = async (file: File) => {
    if (!token) throw new Error('Please sign in again before uploading an image.');
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch(`${API_URL}/api/packages/upload-image`, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: formData });
    const payload = await response.json();
    if (!response.ok || !payload.success) throw new Error(payload.message || 'Image upload failed.');
    return payload.data.imageUrl as string;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await uploadStoryImage(file);
        setCoverImage(imageUrl);
        showNotice('Cover image uploaded.');
      } catch (error) {
        showNotice(error instanceof Error ? error.message : 'Image upload failed.');
      }
    }
  };

  const handleArticleImageInsert = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editorInstanceRef.current) return;
    if (!token) {
      showNotice('Please sign in again before inserting an image.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await fetch(`${API_URL}/api/packages/upload-image`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const payload = await response.json();
      if (!response.ok || !payload.success) throw new Error(payload.message || 'Image upload failed.');

      const imageUrl = payload.data.imageUrl;
      editorInstanceRef.current.insertHtml(`<img src="${imageUrl}" alt="Story image" />`);
      setContent(editorInstanceRef.current.getData());
      showNotice('Image inserted into the article.');
    } catch (error) {
      showNotice(error instanceof Error ? error.message : 'Image upload failed.');
    } finally {
      e.target.value = '';
    }
  };

  // Save Story Post Handler
  const handleSavePost = (status: 'Published' | 'Draft') => {
    if (!title.trim()) {
      alert('Please enter a story title.');
      return;
    }

    // Ensure CKEditor updates text element before saving
    let finalContent = content;
    if (window.CKEDITOR && window.CKEDITOR.instances.news_content) {
      window.CKEDITOR.instances.news_content.updateElement();
      finalContent = window.CKEDITOR.instances.news_content.getData();
    }

    const newStory: WeddingStory = {
      id: editingStory ? editingStory.id : `story-${Date.now()}`,
      title,
      subtitle,
      couple,
      date: date || 'March 2026',
      location,
      category,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
      content: finalContent,
      status,
      featured,
    };

    if (propAddStory) { try { propAddStory(newStory); } catch (e) {} }
    if (editingStory) {
      setStories((prev) => prev.map((s) => (s.id === newStory.id ? newStory : s)));
      showNotice(`Wedding Story "${title}" updated!`);
    } else {
      setStories((prev) => [newStory, ...prev]);
      showNotice(`Wedding Story "${title}" published!`);
    }

    setViewMode('list');
  };

  const handleDeletePost = (id: string, postTitle: string) => {
    if (window.confirm(`Delete story post "${postTitle}"?`)) {
      setStories((prev) => prev.filter((s) => s.id !== id));
      showNotice(`Story post "${postTitle}" deleted.`);
    }
  };

  const onToggleFeatured = (id: string) => { if (propToggleFeatured) propToggleFeatured(id);
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, featured: !s.featured } : s))
    );
  };

  // Toggle CKEditor Toolbar Visibility
  const toggleToolbar = () => {
    setShowTools((prev) => !prev);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER VIEW 1: DEDICATED FULL-PAGE EDITOR (WITH CKEDITOR 4.22.1 FULL BUILD)
  // ─────────────────────────────────────────────────────────────────────────────
  if (viewMode === 'editor') {
    return (
      <div className="p-4 sm:p-8 space-y-6 max-w-6xl mx-auto font-sans text-slate-900 dark:text-white animate-in fade-in duration-300">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-5 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('list')}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Stories</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
            <div>
              <span className="text-[10px] font-mono font-bold text-[#8C90C1] uppercase tracking-wider block">
                WEDDING STORY CMS EDITOR
              </span>
              <h1 className="text-xl font-bold">
                {editingStory ? `Edit Story "${editingStory.title}"` : 'Create New Wedding Story Article'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSavePost('Published')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
            >
              <Save className="h-4 w-4" />
              <span>Publish Story</span>
            </button>
          </div>
        </div>

        {/* 2-Column Main Form & CKEditor Layout */}
        <div className="space-y-6 text-left">
          
          {/* Metadata Section */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#8C90C1] border-b border-slate-100 dark:border-[#1E2235] pb-2">
              Story Header Metadata
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="sm:col-span-2">
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  Story Title *
                </label>
                <input
                  required
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The Royal Lake Palace Wedding of Ananya & Dev"
                  className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs font-bold outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  Subtitle / Highlight Tagline
                </label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="e.g. 3-Day Celebration in Udaipur"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  Couple Name(s)
                </label>
                <input
                  type="text"
                  value={couple}
                  onChange={(e) => setCouple(e.target.value)}
                  placeholder="e.g. Ananya & Dev"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  Location / Venue
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Taj Lake Pichola, Udaipur"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  Story Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1] font-bold"
                >
                  <option value="Royal Palace">Royal Palace</option>
                  <option value="Destination Beach">Destination Beach</option>
                  <option value="Heritage Fort">Heritage Fort</option>
                  <option value="Intimate Wedding">Intimate Wedding</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  Cover Showcase Image URL / Upload
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 rounded-xl bg-slate-200 dark:bg-[#202435] hover:bg-[#8C90C1] hover:text-white transition-colors text-xs font-bold shrink-0 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 🌟 CKEDITOR 4.22.1 FULL BUILD EDITOR SECTION 🌟 */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            
            {/* Toolbar Header & Toggle Button */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#1E2235] pb-3">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C90C1] flex items-center gap-2">
                  <Wand2 className="h-4 w-4" />
                  <span>Story Article Content Editor (CKEditor 4.22.1 Full Build)</span>
                </h3>
                <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Use full rich-text tools, tables, media embeds, styles, colors, and custom formatting.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => articleImageInputRef.current?.click()}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-[#2B3147] dark:bg-[#1A1E2E] dark:text-slate-200"
                >
                  <ImageIcon className="h-3.5 w-3.5" />
                  <span>Insert image</span>
                </button>
                <input ref={articleImageInputRef} type="file" accept="image/*" onChange={handleArticleImageInsert} className="hidden" />
                <button
                  id="toolbarToggleBtn"
                  type="button"
                  onClick={toggleToolbar}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    showTools
                      ? 'bg-[#8C90C1]/15 text-[#6C70A6] dark:text-[#8C90C1] hover:bg-[#8C90C1] hover:text-white'
                      : 'bg-slate-200 dark:bg-[#202435] text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Sliders className="h-3.5 w-3.5" />
                  <span>{showTools ? 'Hide Toolbar' : 'Show Toolbar'}</span>
                </button>
              </div>
            </div>

            {/* Container with id="editorContainer" and conditional hide-toolbar class */}
            <div
              id="editorContainer"
              className={showTools ? '' : 'hide-toolbar'}
            >
              {/* Textarea element with id="news_content" and name="news_content" */}
              <textarea
                id="news_content"
                name="news_content"
                rows={12}
                defaultValue={content}
                placeholder="Write the full wedding story article content here..."
                className="w-full p-4 bg-slate-50 dark:bg-[#1A1E2E] text-xs font-mono outline-none border rounded-xl"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">To add a link: select text in the editor, click the chain-link icon, enter the URL, then save. Use “Insert image” above to place an image from your computer inside the article.</p>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-[#1E2235]">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className="px-5 py-2.5 rounded-xl border text-xs font-semibold bg-white dark:bg-[#121522] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSavePost('Published')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
            >
              <Save className="h-4 w-4" />
              <span>Publish Story Post</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER VIEW 2: LIST MODE (ALL BLOG STORIES GRID)
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans text-slate-900 dark:text-white">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-[#1E2235] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#8C90C1]/15 text-[#6C70A6] dark:text-[#8C90C1]">
              <Film className="h-5 w-5" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight">Wedding Stories CMS</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Publish & manage luxury wedding photo stories and editorial blog articles with full CKEditor.
          </p>
        </div>

        <button
          onClick={handleOpenNewEditor}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
        >
          <Plus className="h-4 w-4" />
          <span>+ Add Wedding Story</span>
        </button>
      </div>

      {/* Notice Banner */}
      {notice && (
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 animate-in fade-in">
          <CheckCircle className="h-4 w-4 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl overflow-hidden group hover:border-[#8C90C1]/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-900">
              <img
                src={story.coverImage}
                alt={story.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
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
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#8C90C1]">{story.couple}</span>
                  <span className="text-[10px] font-semibold text-slate-400">{story.date}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {story.title}
                </h4>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#1E2235] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium truncate max-w-[150px]">
                  <MapPin className="h-3.5 w-3.5 text-[#8C90C1] shrink-0" />
                  <span>{story.location}</span>
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleDeletePost(story.id, story.title)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-500/10 cursor-pointer"
                    title="Delete Story Post"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleOpenEditEditor(story)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] text-slate-700 dark:text-slate-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                  >
                    Edit Article →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
