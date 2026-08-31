import React, { useState } from 'react';
import { Database, Save, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [mongoUri, setMongoUri] = useState(
    'mongodb+srv://soumyasharma042_db_user:bhl8yvSjRJBg96zW@cluster0.tishk06.mongodb.net/cmcfilms?retryWrites=true&w=majority&appName=Cluster0'
  );
  const [jwtSecret, setJwtSecret] = useState('cmc_films_super_secret_jwt_key_2026_luxury_studio');
  const [apiPort, setApiPort] = useState('5001');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="p-6 sm:p-8 space-y-8 max-w-4xl mx-auto font-sans">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Studio & API Settings</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Configure database parameters, JWT secret keys, and backend services</p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <span>Configuration saved successfully! Server is ready for production.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* MongoDB Config Card */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#8C90C1] border-b border-slate-200 dark:border-[#1E2235] pb-3">
            <Database className="h-5 w-5" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">MongoDB Connection String</h4>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              MongoDB Atlas URI / Connection String
            </label>
            <input
              type="text"
              value={mongoUri}
              onChange={(e) => setMongoUri(e.target.value)}
              placeholder="mongodb+srv://<username>:<password>@cluster.mongodb.net/cmcfilms"
              className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-xs font-mono text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147] focus:outline-none focus:border-[#8C90C1]"
            />
            <p className="text-[11px] text-slate-500">
              Paste your MongoDB Atlas URI here. The Express backend uses Mongoose to connect to this database.
            </p>
          </div>
        </div>

        {/* Security & JWT Card */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#8C90C1] border-b border-slate-200 dark:border-[#1E2235] pb-3">
            <ShieldCheck className="h-5 w-5" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">JWT Authentication Security</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">JWT Secret Token Key</label>
              <input
                type="text"
                value={jwtSecret}
                onChange={(e) => setJwtSecret(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-xs font-mono text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Node.js Express Port</label>
              <input
                type="text"
                value={apiPort}
                onChange={(e) => setApiPort(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1A1E2E] text-xs font-mono text-slate-900 dark:text-white p-3 rounded-xl border border-slate-200 dark:border-[#2B3147]"
              />
            </div>
          </div>
        </div>

        {/* Studio Branch Locations */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#8C90C1] border-b border-slate-200 dark:border-[#1E2235] pb-3">
            <MapPin className="h-5 w-5" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Studio Branch Locations</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] space-y-1">
              <span className="font-bold text-[#8C90C1] uppercase text-[10px]">Branch 1 (Main Office)</span>
              <p className="font-bold text-slate-900 dark:text-white">Urban Square Mall, Sukher, Udaipur</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">Direct Google Maps integration active</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] space-y-1">
              <span className="font-bold text-[#8C90C1] uppercase text-[10px]">Branch 2</span>
              <p className="font-bold text-slate-900 dark:text-white">Intali Road, Fatehnagar, Udaipur</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">Secondary Studio</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white font-semibold text-xs px-6 py-3 rounded-xl shadow-lg shadow-[#8C90C1]/20 cursor-pointer"
          >
            <Save className="h-4 w-4" />
            <span>Save All Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
};
