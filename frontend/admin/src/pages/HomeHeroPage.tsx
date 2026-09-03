import React, { useEffect, useState } from 'react';
import { ExternalLink, FileImage, FileVideo, Home, Upload } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { API_URL, WEBSITE_URL } from '../lib/environment';

const heroPages = [
  { key: 'home', label: 'Home', type: 'video', recommendation: '1920 × 1080 px · 16:9' },
  { key: 'portfolio', label: 'Wedding Stories', type: 'image', recommendation: '1920 × 1080 px · 16:9' },
  { key: 'films', label: 'Wedding Films', type: 'video', recommendation: '1920 × 1080 px · 16:9' },
  { key: 'couples', label: 'Couple Shoot', type: 'image', recommendation: '1600 × 2000 px · 4:5 portrait' },
  { key: 'testimonials', label: 'Testimonials', type: 'image', recommendation: '1920 × 680 px · 2.82:1 wide banner' },
  { key: 'packages', label: 'Packages', type: 'image', recommendation: '1920 × 680 px · 2.82:1 wide banner' },
  { key: 'about', label: 'About', type: 'image', recommendation: '1920 × 680 px · 2.82:1 wide banner' },
] as const;
type HeroKey = (typeof heroPages)[number]['key'];
type HeroMedia = Record<string, { url: string; type: 'image' | 'video' }>;

export const HomeHeroPage: React.FC = () => {
  const { token } = useAuth();
  const [media, setMedia] = useState<HeroMedia>({});
  const [uploading, setUploading] = useState<HeroKey | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/site-settings/hero-media`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => { if (payload?.success && payload?.data?.media) setMedia(payload.data.media); })
      .catch(() => !controller.signal.aborted && setMessage({ type: 'error', text: 'Could not reach the backend. Start it to manage hero media.' }));
    return () => controller.abort();
  }, []);

  const uploadMedia = async (key: HeroKey, file?: File) => {
    if (!file) return;
    const page = heroPages.find((item) => item.key === key)!;
    const valid = page.type === 'video' ? file.type === 'video/mp4' || file.name.toLowerCase().endsWith('.mp4') : file.type.startsWith('image/');
    if (!valid) return setMessage({ type: 'error', text: page.type === 'video' ? 'Choose an MP4 video file.' : 'Choose an image file.' });
    if (!token) return setMessage({ type: 'error', text: 'Please sign in again before uploading.' });
    setUploading(key); setMessage(null);
    try {
      const formData = new FormData();
      formData.append('key', key); formData.append('media', file);
      const response = await fetch(`${API_URL}/api/site-settings/hero-media/upload`, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: formData });
      const payload = await response.json();
      if (!response.ok || !payload.success) throw new Error(payload.message || 'Upload failed.');
      setMedia(payload.data.media || {});
      setMessage({ type: 'success', text: `${page.label} hero media saved and published.` });
    } catch (error) {
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Upload failed.' });
    } finally { setUploading(null); }
  };

  return <div className="mx-auto max-w-6xl space-y-8 p-6 font-sans sm:p-8">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C90C1]"><Home className="h-3.5 w-3.5" /> Website content</div><h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Website Hero Media</h3><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Upload and replace the image or video shown at the top of every website page.</p></div><a href={WEBSITE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 dark:border-[#23293D] dark:bg-[#121522] dark:text-slate-200"><ExternalLink className="h-3.5 w-3.5" /> Preview website</a></div>
    {message && <div className={`rounded-xl border px-4 py-3 text-xs font-medium ${message.type === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300'}`}>{message.text}</div>}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{heroPages.map((page) => { const saved = media[page.key]; const Icon = page.type === 'video' ? FileVideo : FileImage; return <section key={page.key} className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-[#1E2235] dark:bg-[#121522]"><div className="mb-3 flex items-start justify-between gap-2"><div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"><Icon className="h-4 w-4 text-[#8C90C1]" />{page.label}</div><div className="text-right"><span className="block text-[10px] font-medium uppercase text-slate-400">{page.type}</span><span className="mt-0.5 block text-[10px] font-semibold text-[#8C90C1]">Recommended: {page.recommendation}</span></div></div><div className="mb-4 aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-[#1A1E2E]">{saved?.url ? saved.type === 'video' ? <video src={saved.url} muted loop autoPlay playsInline className="h-full w-full object-cover" /> : <img src={saved.url} alt={`${page.label} hero`} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-center text-[11px] text-slate-400">Website default media is active</div>}</div><label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#8C90C1] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#787CAE]"><Upload className="h-4 w-4" />{uploading === page.key ? 'Uploading…' : `Choose ${page.type === 'video' ? 'MP4 video' : 'image'}`}<input type="file" accept={page.type === 'video' ? 'video/mp4,.mp4' : 'image/*'} disabled={uploading !== null} className="sr-only" onChange={(event) => uploadMedia(page.key, event.target.files?.[0])} /></label></section>; })}</div>
  </div>;
};
