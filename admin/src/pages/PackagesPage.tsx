import React, { useState } from 'react';
import { PackageItem } from '../data/mockData';
import { Sparkles, Check, Edit2, Save } from 'lucide-react';

interface PackagesPageProps {
  packages: PackageItem[];
  onUpdatePackage: (pkg: PackageItem) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ packages, onUpdatePackage }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState('');

  const handleStartEdit = (pkg: PackageItem) => {
    setEditingId(pkg.id);
    setEditPrice(pkg.price);
  };

  const handleSave = (pkg: PackageItem) => {
    onUpdatePackage({ ...pkg, price: editPrice });
    setEditingId(null);
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h3 className="font-editorial text-2xl text-white font-medium">Investment Packages Editor</h3>
        <p className="text-xs text-slate-400">Configure photography & cinema package pricing and feature checklists</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-[#121520] border rounded-3xl p-6 space-y-6 flex flex-col justify-between relative shadow-xl ${
              pkg.popular
                ? 'border-[#C47A65] shadow-[#C47A65]/10'
                : 'border-[#202434]'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C47A65] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                MOST POPULAR CHOICE
              </span>
            )}

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C47A65] font-semibold">
                  {pkg.duration} COVERAGE
                </span>
                <h4 className="font-editorial text-2xl text-white font-medium">{pkg.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{pkg.tagline}</p>
              </div>

              {/* Price Row */}
              <div className="p-4 rounded-2xl bg-[#171B29] border border-[#23293D] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Starting Investment
                  </span>
                  {editingId === pkg.id ? (
                    <input
                      type="text"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="bg-[#0B0C10] text-white font-mono text-lg font-bold px-2 py-1 rounded border border-[#C47A65] w-36"
                    />
                  ) : (
                    <span className="font-mono text-2xl font-bold text-white">{pkg.price}</span>
                  )}
                </div>

                {editingId === pkg.id ? (
                  <button
                    onClick={() => handleSave(pkg)}
                    className="p-2 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                  >
                    <Save className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleStartEdit(pkg)}
                    className="p-2 rounded-xl bg-[#1A1E2C] text-slate-400 hover:text-white transition-colors"
                    title="Edit Price"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-slate-300">Included Deliverables:</span>
                <ul className="space-y-2">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded bg-[#C47A65]/20 text-[#C47A65] mt-0.5 shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
