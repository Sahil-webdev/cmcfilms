import React, { useState, useRef } from 'react';
import {
  Plus,
  Trash2,
  Edit3,
  Star,
  Quote,
  MapPin,
  User,
  Calendar,
  Upload,
  X,
  Save,
  MessageSquare,
  ChevronLeft,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
export interface TestimonialItem {
  id: string;
  couple: string;
  location: string;
  year: string;
  highlightQuote: string;
  fullReview: string;
  image: string;   // base64 or URL
  rating: number;
  serviceType: string;
  createdAt: string;
}

interface TestimonialsAdminPageProps {
  testimonials: TestimonialItem[];
  onAdd: (t: TestimonialItem) => void;
  onUpdate: (t: TestimonialItem) => void;
  onDelete: (id: string) => void;
}

const EMPTY_FORM: Omit<TestimonialItem, 'id' | 'createdAt'> = {
  couple: '',
  location: '',
  year: new Date().getFullYear().toString(),
  highlightQuote: '',
  fullReview: '',
  image: '',
  rating: 5,
  serviceType: '',
};

export const TestimonialsAdminPage: React.FC<TestimonialsAdminPageProps> = ({
  testimonials,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'create'>('list');
  const [editingItem, setEditingItem] = useState<TestimonialItem | null>(null);
  const [form, setForm] = useState<typeof EMPTY_FORM>({ ...EMPTY_FORM });
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Helpers ──────────────────────────────────────────────────────────────
  const setField = <K extends keyof typeof EMPTY_FORM>(key: K, value: typeof EMPTY_FORM[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => {
    setForm({ ...EMPTY_FORM });
    setImagePreview('');
    setEditingItem(null);
    setViewMode('create');
  };

  const openEdit = (item: TestimonialItem) => {
    setForm({
      couple: item.couple,
      location: item.location,
      year: item.year,
      highlightQuote: item.highlightQuote,
      fullReview: item.fullReview,
      image: item.image,
      rating: item.rating,
      serviceType: item.serviceType,
    });
    setImagePreview(item.image);
    setEditingItem(item);
    setViewMode('create');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setImagePreview(result);
      setField('image', result);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleSave = () => {
    if (!form.couple.trim() || !form.highlightQuote.trim()) {
      alert('Couple name and highlight quote are required.');
      return;
    }
    if (editingItem) {
      onUpdate({ ...editingItem, ...form });
    } else {
      onAdd({
        id: `t-${Date.now()}`,
        ...form,
        createdAt: new Date().toISOString().split('T')[0],
      });
    }
    setViewMode('list');
  };

  // ── CREATE / EDIT FORM ────────────────────────────────────────────────────
  if (viewMode === 'create') {
    return (
      <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-6 font-sans">

        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode('list')}
            className="h-9 w-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-[#1A1E2E] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#22283E] transition cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {editingItem ? 'Edit Testimonial' : 'Add New Testimonial'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Fill in couple details, upload their wedding photo and write their review
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-3xl p-6 sm:p-8 space-y-6">

          {/* ── Photo Upload ── */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
              Couple Photo *
            </label>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            {imagePreview ? (
              <div className="relative w-full max-w-sm aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-[#2B3147] group">
                <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-white text-black rounded-xl text-xs font-bold cursor-pointer hover:bg-slate-100"
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    onClick={() => { setImagePreview(''); setField('image', ''); }}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full max-w-sm aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] bg-slate-50 dark:bg-[#171B29] flex flex-col items-center justify-center gap-2 cursor-pointer transition"
              >
                <Upload className="h-8 w-8 text-[#8C90C1]" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Upload Couple Photo</p>
                <p className="text-[10px] text-slate-400">JPG, PNG, WEBP</p>
              </div>
            )}
            <div className="mt-2">
              <input
                type="url"
                value={form.image.startsWith('data:') ? '' : form.image}
                onChange={(e) => { setField('image', e.target.value); setImagePreview(e.target.value); }}
                placeholder="Or paste image URL: https://..."
                className="w-full max-w-sm p-2.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1] font-mono"
              />
            </div>
          </div>

          {/* ── Basic Fields Row ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Couple Name */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-[#8C90C1]" /> Couple Name *
              </label>
              <input
                type="text"
                value={form.couple}
                onChange={(e) => setField('couple', e.target.value)}
                placeholder="e.g. Ananya & Siddharth"
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-sm font-semibold outline-none focus:border-[#8C90C1]"
              />
            </div>

            {/* Location / Venue */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#8C90C1]" /> Location / Venue
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setField('location', e.target.value)}
                placeholder="e.g. City Palace, Jaipur"
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#8C90C1]" /> Year
              </label>
              <input
                type="text"
                value={form.year}
                onChange={(e) => setField('year', e.target.value)}
                placeholder="2026"
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
              />
            </div>

            {/* Service Type */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Service Type
              </label>
              <input
                type="text"
                value={form.serviceType}
                onChange={(e) => setField('serviceType', e.target.value)}
                placeholder="e.g. Full 3-Day Photography & Cinema Collection"
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs outline-none focus:border-[#8C90C1]"
              />
            </div>
          </div>

          {/* ── Rating ── */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Rating
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setField('rating', star)}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-7 w-7 ${star <= form.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs text-slate-400">{form.rating}/5</span>
            </div>
          </div>

          {/* ── Highlight Quote ── */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Quote className="h-3.5 w-3.5 text-[#8C90C1]" /> Highlight Quote * <span className="text-[10px] text-slate-400 font-normal">(shown in large text on website)</span>
            </label>
            <textarea
              value={form.highlightQuote}
              onChange={(e) => setField('highlightQuote', e.target.value)}
              rows={3}
              placeholder={"e.g. They captured moments we didn't even know happened. Watching our wedding film brought happy tears all over again."}
              className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-sm font-light leading-relaxed outline-none focus:border-[#8C90C1] resize-none"
            />
          </div>

          {/* ── Full Review ── */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-[#8C90C1]" /> Full Review <span className="text-[10px] text-slate-400 font-normal">(detailed paragraph below quote)</span>
            </label>
            <textarea
              value={form.fullReview}
              onChange={(e) => setField('fullReview', e.target.value)}
              rows={6}
              placeholder="Write the couple's detailed review here. This appears as the full paragraph under the highlight quote on the testimonials page..."
              className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200 dark:border-[#2B3147] text-xs leading-relaxed outline-none focus:border-[#8C90C1] resize-none"
            />
          </div>

          {/* ── Save Button ── */}
          <div className="flex justify-end gap-3 pt-2 border-t border-slate-100 dark:border-[#1E2235]">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-[#2B3147] text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 px-7 py-2.5 rounded-xl text-xs font-bold bg-[#8C90C1] hover:bg-[#787CAE] text-white shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
            >
              <Save className="h-4 w-4" />
              {editingItem ? 'Update Testimonial' : 'Save Testimonial'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── LIST MODE ─────────────────────────────────────────────────────────────
  return (
    <div className="p-6 sm:p-8 max-w-5xl mx-auto space-y-6 font-sans">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 text-[#8C90C1] mb-1">
            <MessageSquare className="h-5 w-5" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Testimonials CMS</h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Add couple reviews. They appear on the website in a zig-zag layout — photo left/right alternating.
          </p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
        >
          <Plus className="h-4 w-4" />
          Add Testimonial
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Total Reviews', value: testimonials.length },
          { label: 'Avg Rating', value: testimonials.length ? (testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length).toFixed(1) : '—' },
          { label: 'Published on Site', value: testimonials.length },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white dark:bg-[#141828] rounded-2xl border border-slate-200 dark:border-[#1E2235] p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
            <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">{value}</p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {testimonials.length === 0 ? (
        <div className="text-center py-24 space-y-4 bg-white dark:bg-[#141828] rounded-3xl border border-slate-200 dark:border-[#1E2235]">
          <MessageSquare className="h-12 w-12 mx-auto text-slate-300 dark:text-slate-600" />
          <div>
            <p className="text-slate-700 dark:text-slate-300 font-semibold">No testimonials yet</p>
            <p className="text-xs text-slate-400 mt-1">Add your first couple review to display on the website</p>
          </div>
          <button onClick={openCreate} className="inline-flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-bold px-6 py-3 rounded-xl cursor-pointer transition-all active:scale-95">
            <Plus className="h-4 w-4" />
            Add First Testimonial
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#141828] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-5 flex items-start gap-4 group hover:border-[#8C90C1]/50 transition-all"
            >
              {/* Thumbnail */}
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-[#1A1E2E]">
                {item.image ? (
                  <img src={item.image} alt={item.couple} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <User className="h-7 w-7 text-slate-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{item.couple}</p>
                    <p className="text-[10px] font-mono text-[#C47A65] uppercase tracking-wider mt-0.5">
                      {item.location}{item.year ? ` · ${item.year}` : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {/* Stars */}
                    <div className="flex">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className={`h-3 w-3 ${s <= item.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlight Quote preview */}
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 italic">
                  "{item.highlightQuote}"
                </p>

                {/* Position badge */}
                <span className="mt-2 inline-block text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#1A1E2E] text-slate-500">
                  Position {idx + 1} · Image on {idx % 2 === 0 ? 'Left' : 'Right'}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEdit(item)}
                  className="h-8 w-8 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-[#8C90C1] hover:text-white text-slate-500 flex items-center justify-center transition cursor-pointer"
                  title="Edit"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm(`Delete testimonial from ${item.couple}?`)) onDelete(item.id);
                  }}
                  className="h-8 w-8 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-red-500 hover:text-white text-slate-400 flex items-center justify-center transition cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
