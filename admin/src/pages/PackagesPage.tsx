import React, { useState } from 'react';
import { PackageItem } from '../data/mockData';
import { Check, Edit2, Save } from 'lucide-react';

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
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Investment Packages Editor</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Configure photography & cinema package pricing and feature checklists</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white dark:bg-[#121522] border rounded-3xl p-6 space-y-6 flex flex-col justify-between relative shadow-sm ${
              pkg.popular
                ? 'border-[#8C90C1] shadow-[#8C90C1]/10'
                : 'border-slate-200 dark:border-[#1E2235]'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8C90C1] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                MOST POPULAR CHOICE
              </span>
            )}

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8C90C1] font-bold">
                  {pkg.duration} COVERAGE
                </span>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">{pkg.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{pkg.tagline}</p>
              </div>

              {/* Price Row */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#23293D] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                    Starting Investment
                  </span>
                  {editingId === pkg.id ? (
                    <input
                      type="text"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="bg-white dark:bg-[#0B0D14] text-slate-900 dark:text-white font-mono text-lg font-bold px-2 py-1 rounded border border-[#8C90C1] w-36"
                    />
                  ) : (
                    <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
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
                    className="p-2 rounded-xl bg-slate-200 dark:bg-[#1A1E2E] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="Edit Price"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Included Deliverables:</span>
                <ul className="space-y-2">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <div className="p-0.5 rounded bg-[#8C90C1]/20 text-[#8C90C1] mt-0.5 shrink-0">
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
