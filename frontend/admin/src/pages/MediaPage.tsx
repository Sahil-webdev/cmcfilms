import React, { useState } from 'react';
import { MediaAsset } from '../data/mockData';
import { Upload, Copy, Check } from 'lucide-react';

interface MediaPageProps {
  media: MediaAsset[];
  onUploadMedia: (asset: MediaAsset) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ media, onUploadMedia }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSimulatedUpload = () => {
    const sampleUrls = [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    ];
    const randomUrl = sampleUrls[Math.floor(Math.random() * sampleUrls.length)];
    const newAsset: MediaAsset = {
      id: `m-${Date.now()}`,
      title: `CMC_New_Capture_${Math.floor(Math.random() * 900 + 100)}.jpg`,
      type: 'Photo',
      url: randomUrl,
      category: 'New Upload',
      size: '4.2 MB',
      uploadedAt: '2026-08-21',
    };
    onUploadMedia(newAsset);
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Media Asset Library</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Manage studio photography, teasers, and cloud media files</p>
        </div>

        <button
          onClick={handleSimulatedUpload}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Media Asset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {media.map((asset) => (
          <div
            key={asset.id}
            className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl overflow-hidden group hover:border-[#8C90C1]/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div className="relative h-44 w-full overflow-hidden bg-slate-900">
              <img
                src={asset.url}
                alt={asset.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-md">
                {asset.type}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{asset.title}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  {asset.size} • {asset.uploadedAt}
                </p>
              </div>

              <button
                onClick={() => handleCopyUrl(asset.id, asset.url)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 dark:bg-[#1A1E2E] hover:bg-slate-200 dark:hover:bg-[#23293D] text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                {copiedId === asset.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-slate-400" />
                    <span>Copy Asset URL</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
