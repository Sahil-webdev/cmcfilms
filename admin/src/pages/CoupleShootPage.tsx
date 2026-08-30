import React, { useEffect, useState } from 'react';
import { FileImage, FileText, Plus, Save, Trash2, Upload } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const API_URL = 'http://localhost:5001';
type Blog = { id: string; title: string; excerpt: string; image: string };

export const CoupleShootPage: React.FC = () => {
  const { token } = useAuth();
  const [section, setSection] = useState<'gallery' | 'blogs'>('gallery');
  const [galleryImages, setGalleryImages] = useState<string[]>(Array(6).fill(''));
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [draft, setDraft] = useState({ title: '', excerpt: '', image: '' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/couple-content`).then((r) => r.json()).then((p) => {
      const content = p?.data?.content;
      if (!content) return;
      setGalleryImages([...content.galleryImages, ...Array(6)].slice(0, 6));
      setBlogs(content.blogs || []);
    }).catch(() => undefined);
  }, []);

  const upload = async (file?: File) => {
    if (!file || !token) throw new Error('Please sign in again and choose an image.');
    const formData = new FormData(); formData.append('image', file);
    const response = await fetch(`${API_URL}/api/packages/upload-image`, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: formData });
    const payload = await response.json();
    if (!response.ok || !payload.success) throw new Error(payload.message || 'Image upload failed.');
    return payload.data.imageUrl as string;
  };

  const changeGalleryImage = async (index: number, file?: File) => {
    try { const image = await upload(file); setGalleryImages((items) => items.map((item, i) => i === index ? image : item)); setMessage('Image ready. Click Publish Gallery to make it live.'); }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Image upload failed.'); }
  };
  const chooseBlogImage = async (file?: File) => {
    try { const image = await upload(file); setDraft((item) => ({ ...item, image })); setMessage('Blog image uploaded.'); }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Image upload failed.'); }
  };
  const publish = async () => {
    if (!token) return setMessage('Please sign in again.');
    setSaving(true);
    try {
      const response = await fetch(`${API_URL}/api/couple-content`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ content: { galleryImages: galleryImages.filter(Boolean), blogs } }) });
      const payload = await response.json();
      if (!response.ok || !payload.success) throw new Error(payload.message || 'Could not publish.');
      setMessage('Saved content is now live on the Couple Shoot website page.');
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Could not publish.'); }
    finally { setSaving(false); }
  };
  const addBlog = () => {
    if (!draft.title.trim() || !draft.image) return setMessage('Add a blog title and image first.');
    setBlogs((items) => [...items, { ...draft, id: `blog-${Date.now()}` }]);
    setDraft({ title: '', excerpt: '', image: '' });
    setMessage('Blog added below. Click Publish Blogs to make it live.');
  };

  return <div className="mx-auto max-w-6xl space-y-7 p-6 font-sans sm:p-8">
    <div><h3 className="text-2xl font-bold text-slate-900 dark:text-white">Couple Shoot Content</h3><p className="mt-1 text-xs text-slate-500">Choose what you want to manage. Published items below match what appears on the website.</p></div>
    <div className="flex flex-wrap gap-3"><button onClick={() => setSection('gallery')} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold ${section === 'gallery' ? 'bg-[#8C90C1] text-white' : 'border border-slate-200 bg-white text-slate-700 dark:border-[#2B3147] dark:bg-[#121522] dark:text-slate-200'}`}><FileImage className="h-4 w-4" />Gallery Images</button><button onClick={() => setSection('blogs')} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold ${section === 'blogs' ? 'bg-[#8C90C1] text-white' : 'border border-slate-200 bg-white text-slate-700 dark:border-[#2B3147] dark:bg-[#121522] dark:text-slate-200'}`}><FileText className="h-4 w-4" />Couple Shoot Blogs</button></div>
    {message && <div className="rounded-xl border border-[#8C90C1]/30 bg-[#8C90C1]/10 px-4 py-3 text-xs text-slate-700 dark:text-slate-200">{message}</div>}
    {section === 'gallery' ? <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-[#1E2235] dark:bg-[#121522]"><div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h4 className="text-base font-bold">Gallery images shown on website</h4><p className="mt-1 text-xs text-slate-500">Six images, in the same order as the Couple Shoot page.</p></div><button onClick={publish} disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-[#8C90C1] px-4 py-2.5 text-xs font-semibold text-white disabled:opacity-50"><Save className="h-4 w-4" />{saving ? 'Publishing…' : 'Publish Gallery'}</button></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{galleryImages.map((image, index) => <label key={index} className="relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 dark:border-[#2B3147] dark:bg-[#1A1E2E]">{image ? <img src={image} alt={`Website gallery ${index + 1}`} className="h-full w-full object-cover" /> : <span className="text-center text-[11px] text-slate-400"><FileImage className="mx-auto mb-1 h-5 w-5" />Image {index + 1}</span>}<span className="absolute inset-x-2 bottom-2 rounded-lg bg-black/65 py-1.5 text-center text-[10px] font-medium text-white"><Upload className="mr-1 inline h-3 w-3" />{image ? 'Replace' : 'Upload image'}</span><input className="sr-only" type="file" accept="image/*" onChange={(e) => changeGalleryImage(index, e.target.files?.[0])} /></label>)}</div></section> : <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-[#1E2235] dark:bg-[#121522]"><div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h4 className="text-base font-bold">Blogs shown on website</h4><p className="mt-1 text-xs text-slate-500">Create a blog card and see the saved cards below.</p></div><button onClick={publish} disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-[#8C90C1] px-4 py-2.5 text-xs font-semibold text-white disabled:opacity-50"><Save className="h-4 w-4" />{saving ? 'Publishing…' : 'Publish Blogs'}</button></div><div className="grid gap-3 rounded-xl bg-slate-50 p-4 dark:bg-[#1A1E2E]"><input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="Blog title" className="rounded-lg border border-slate-200 bg-white p-3 text-xs dark:border-[#2B3147] dark:bg-[#121522]" /><textarea value={draft.excerpt} onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })} placeholder="Short blog description" rows={3} className="rounded-lg border border-slate-200 bg-white p-3 text-xs dark:border-[#2B3147] dark:bg-[#121522]" /><div className="flex flex-wrap gap-3"><label className="cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold dark:border-[#2B3147] dark:bg-[#121522]"><Upload className="mr-1 inline h-3.5 w-3.5" />{draft.image ? 'Replace image' : 'Upload image'}<input className="sr-only" type="file" accept="image/*" onChange={(e) => chooseBlogImage(e.target.files?.[0])} /></label><button onClick={addBlog} className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white dark:bg-[#8C90C1]"><Plus className="h-3.5 w-3.5" />Add blog</button></div></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{blogs.map((blog) => <article key={blog.id} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-[#2B3147] dark:bg-[#121522]"><img src={blog.image} alt={blog.title} className="h-36 w-full object-cover" /><div className="p-3"><h5 className="text-sm font-bold">{blog.title}</h5><p className="mt-1 line-clamp-3 text-xs text-slate-500">{blog.excerpt}</p></div><button onClick={() => setBlogs((items) => items.filter((item) => item.id !== blog.id))} className="absolute right-2 top-2 rounded-md bg-white/90 p-1.5 text-red-600"><Trash2 className="h-3.5 w-3.5" /></button></article>)}{blogs.length === 0 && <p className="col-span-full py-8 text-center text-xs text-slate-400">No blog has been saved yet.</p>}</div></section>}
  </div>;
};
