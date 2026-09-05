import React, { useState, useRef, useCallback } from 'react';
import {
  Plus,
  Trash2,
  Upload,
  Image as ImageIcon,
  Grid3X3,
  X,
  Check,
  Layers,
  Eye,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  aspectRatio: string;
  createdAt: string;
}

export type GalleryCategory =
  | 'Weddings'
  | 'Bridal'
  | 'Pre-Wedding'
  | 'Couples'
  | 'Ceremonies'
  | 'Uncategorized';

const CATEGORIES: GalleryCategory[] = [
  'Weddings',
  'Bridal',
  'Pre-Wedding',
  'Couples',
  'Ceremonies',
  'Uncategorized',
];
const MAX_GALLERY_IMAGES = 15;

function detectAspectRatioClass(width: number, height: number): string {
  const ratio = width / height;
  if (ratio >= 1.7)  return 'aspect-[16/9]';
  if (ratio >= 1.2)  return 'aspect-[4/3]';
  if (ratio >= 0.9)  return 'aspect-[1/1]';
  if (ratio >= 0.7)  return 'aspect-[3/4]';
  return 'aspect-[2/3]';
}

function getImageDimensions(src: string): Promise<{ w: number; h: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({ w: 4, h: 3 });
    img.src = src;
  });
}

interface GalleryPageProps {
  images: GalleryImage[];
  onAddImages: (imgs: GalleryImage[]) => void;
  onDeleteImage: (id: string) => void;
  onUpdateCategory: (id: string, category: GalleryCategory) => void;
  onClearAll: () => void;
  onUploadImage: (file: File, onProgress?: (percent: number) => void) => Promise<string>;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  images,
  onAddImages,
  onDeleteImage,
  onUpdateCategory,
  onClearAll,
  onUploadImage,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | GalleryCategory>('All');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [limitNotice, setLimitNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const remainingSlots = Math.max(0, MAX_GALLERY_IMAGES - images.length);
  const atImageLimit = remainingSlots === 0;

  const showImageLimitNotice = () => {
    setLimitNotice(`Gallery limit reached: only ${MAX_GALLERY_IMAGES} images can be added.`);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const deleteSelected = () => {
    selectedIds.forEach((id) => onDeleteImage(id));
    setSelectedIds(new Set());
  };

  const clearAll = () => {
    if (!images.length || !window.confirm('Remove every image from the live home gallery?')) return;
    onClearAll();
    setSelectedIds(new Set());
  };

  const processFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArr = Array.from(files).filter((f) => f.type.startsWith('image/'));
      if (!fileArr.length) return;
      if (atImageLimit) {
        showImageLimitNotice();
        return;
      }
      const filesToUpload = fileArr.slice(0, remainingSlots);
      if (fileArr.length > remainingSlots) {
        setLimitNotice(`Only ${remainingSlots} more image${remainingSlots === 1 ? '' : 's'} can be added. Gallery limit is ${MAX_GALLERY_IMAGES}.`);
      } else {
        setLimitNotice(null);
      }
      setIsUploading(true);
      setUploadProgress(0);
      setUploadStatus(`Preparing ${filesToUpload.length} image${filesToUpload.length > 1 ? 's' : ''}…`);
      try {
        const results: GalleryImage[] = [];
        for (let i = 0; i < filesToUpload.length; i++) {
          const file = filesToUpload[i];
          setUploadStatus(`Uploading ${i + 1} of ${filesToUpload.length}: ${file.name}`);
          const src = await onUploadImage(file, (fileProgress) => {
            setUploadProgress(Math.min(99, Math.round(((i + fileProgress / 100) / filesToUpload.length) * 100)));
          });
          setUploadStatus(`Finalizing ${i + 1} of ${filesToUpload.length}: ${file.name}`);
          const { w, h } = await getImageDimensions(src);
          const aspectRatio = detectAspectRatioClass(w, h);
          results.push({
            id: `gimg-${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`,
            src,
            alt: file.name.replace(/\.[^/.]+$/, ''),
            title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
            category: 'Uncategorized',
            aspectRatio,
            createdAt: new Date().toISOString().split('T')[0],
          });
          setUploadProgress(Math.round(((i + 1) / filesToUpload.length) * 100));
        }
        onAddImages(results);
      } catch (error) {
        alert(error instanceof Error ? error.message : 'Image upload failed.');
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
        setUploadStatus('');
      }
    },
    [atImageLimit, onAddImages, onUploadImage, remainingSlots]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) processFiles(e.target.files);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files?.length) processFiles(e.dataTransfer.files);
  };

  const filtered = activeFilter === 'All'
    ? images
    : images.filter((img) => img.category === activeFilter);

  const totalSizeMB = images.reduce((acc, img) => {
    const bytes = (img.src.length * 3) / 4;
    return acc + bytes / (1024 * 1024);
  }, 0);

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-[1600px] mx-auto font-sans">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 text-[#8C90C1] mb-1">
            <Grid3X3 className="h-5 w-5" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
              Home Gallery CMS
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Upload images for the <strong>"Visual Editorial Masonry"</strong> section on home page.
            Aspect ratios (portrait, landscape, square) are auto-detected from real pixel dimensions.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {images.length > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-2 border border-red-500/30 bg-white px-4 py-2.5 text-xs font-semibold text-red-500 transition-all hover:bg-red-500 hover:text-white dark:bg-[#121522]"
            >
              <Trash2 className="h-4 w-4" />
              Clear All Images
            </button>
          )}
          {selectedIds.size > 0 && (
            <button
              onClick={deleteSelected}
              className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer border border-red-500/30"
            >
              <Trash2 className="h-4 w-4" />
              Delete {selectedIds.size} Selected
            </button>
          )}
          <button
            onClick={() => atImageLimit ? showImageLimitNotice() : fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer transition-all active:scale-95"
          >
            <Plus className="h-4 w-4" />
            Upload Images ({images.length}/{MAX_GALLERY_IMAGES})
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total Images', value: `${images.length} / ${MAX_GALLERY_IMAGES}` },
          { label: 'Categories Used', value: new Set(images.map((i) => i.category)).size },
          { label: 'Selected', value: selectedIds.size },
          { label: 'Est. Size', value: `${totalSizeMB.toFixed(1)} MB` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white dark:bg-[#141828] rounded-2xl border border-slate-200 dark:border-[#1E2235] p-4 space-y-0.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
            <p className="text-xl font-bold text-slate-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Hidden File Input */}
      <input type="file" ref={fileInputRef} multiple accept="image/*" className="hidden" onChange={handleFileChange} />

      {limitNotice && <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs font-semibold text-amber-700 dark:text-amber-300">{limitNotice}</div>}

      {/* Drag & Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
        onDragLeave={() => setIsDragOver(false)}
        onClick={() => atImageLimit ? showImageLimitNotice() : fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragOver
            ? 'border-[#8C90C1] bg-[#8C90C1]/10 scale-[1.01]'
            : 'border-slate-300 dark:border-[#2B3147] hover:border-[#8C90C1] bg-slate-50/50 dark:bg-[#171B29]/50'
        }`}
      >
        {isUploading ? (
          <div className="space-y-3">
            <Layers className="h-8 w-8 mx-auto text-[#8C90C1] animate-pulse" />
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {uploadProgress >= 99 ? 'Finalizing upload…' : `Uploading images… ${uploadProgress}%`}
            </p>
            {uploadStatus && <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{uploadStatus}</p>}
            <div className="w-64 mx-auto h-2 bg-slate-200 dark:bg-[#1E2235] rounded-full overflow-hidden">
              <div className="h-full bg-[#8C90C1] rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="h-8 w-8 mx-auto text-[#8C90C1]" />
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Drop images here, or click to browse
            </p>
            <p className="text-xs text-slate-400">
              JPG, PNG, WEBP • Select multiple at once • Maximum {MAX_GALLERY_IMAGES} images • Aspect ratio auto-detected
            </p>
          </div>
        )}
      </div>

      {/* Category Filter Tabs */}
      {images.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          {(['All', ...CATEGORIES] as const).map((cat) => {
            const count = cat === 'All' ? images.length : images.filter((i) => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#8C90C1] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-[#1A1E2E] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#22283E]'
                }`}
              >
                {cat} {count > 0 && <span className="ml-1 opacity-70">({count})</span>}
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 space-y-3">
          <ImageIcon className="h-12 w-12 mx-auto text-slate-300 dark:text-slate-600" />
          <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">
            {images.length === 0
              ? 'No images yet — upload your first gallery image above'
              : `No images in "${activeFilter}" category`}
          </p>
        </div>
      ) : (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 space-y-2">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group rounded-xl overflow-hidden bg-slate-200 dark:bg-[#141828] cursor-pointer mb-2"
            >
              <div className={`relative w-full ${img.aspectRatio} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col justify-between p-2.5">
                <div className="flex items-start justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleSelect(img.id); }}
                    className={`h-7 w-7 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer ${
                      selectedIds.has(img.id)
                        ? 'bg-[#8C90C1] border-[#8C90C1] text-white'
                        : 'bg-black/40 border-white/60 text-transparent'
                    }`}
                  >
                    <Check className="h-3.5 w-3.5 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setPreviewSrc(img.src); }}
                    className="h-7 w-7 rounded-lg bg-black/40 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between gap-1.5">
                  <select
                    value={img.category}
                    onChange={(e) => onUpdateCategory(img.id, e.target.value as GalleryCategory)}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-black/70 text-white text-[10px] font-bold px-2 py-1.5 rounded-lg border border-white/20 outline-none cursor-pointer"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <button
                    onClick={(e) => { e.stopPropagation(); onDeleteImage(img.id); }}
                    className="h-7 w-7 rounded-lg bg-red-500/80 hover:bg-red-600 border border-red-400/30 flex items-center justify-center text-white transition cursor-pointer flex-shrink-0"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {selectedIds.has(img.id) && (
                <div className="absolute inset-0 ring-2 ring-[#8C90C1] ring-inset rounded-xl pointer-events-none" />
              )}

              <div className="absolute top-1.5 left-1.5 bg-black/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {img.aspectRatio.replace('aspect-[', '').replace(']', '')}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview Lightbox */}
      {previewSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setPreviewSrc(null)}
        >
          <button
            onClick={() => setPreviewSrc(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer z-10"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={previewSrc}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
