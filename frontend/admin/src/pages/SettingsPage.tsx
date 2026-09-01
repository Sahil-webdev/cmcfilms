import React from 'react';
import { Database, ShieldCheck, MapPin, ServerCog } from 'lucide-react';

export const SettingsPage: React.FC = () => (
  <div className="p-6 sm:p-8 space-y-8 max-w-4xl mx-auto font-sans">
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Studio & API Settings</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Production service and security status for the CMC Films studio.
      </p>
    </div>

    <section className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-[#8C90C1] border-b border-slate-200 dark:border-[#1E2235] pb-3">
        <ShieldCheck className="h-5 w-5" />
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Security</h4>
      </div>
      <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-xs text-emerald-700 dark:text-emerald-300">
        Admin credentials, database connections, and JWT signing keys are stored only in the server environment. They are never displayed or editable in this browser.
      </div>
      <p className="text-[11px] leading-5 text-slate-500 dark:text-slate-400">
        To change production secrets, use your hosting provider’s environment-variable settings and redeploy the backend. This protects the studio even if an admin browser session is compromised.
      </p>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#8C90C1]"><Database className="h-5 w-5" /><h4 className="font-bold text-slate-900 dark:text-white">Database</h4></div>
        <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">Website content and administrator accounts are saved in MongoDB through the secure backend API.</p>
      </div>
      <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#8C90C1]"><ServerCog className="h-5 w-5" /><h4 className="font-bold text-slate-900 dark:text-white">Backend service</h4></div>
        <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">The API uses protected sessions and limits repeated authentication attempts to help prevent unauthorized access.</p>
      </div>
    </section>

    <section className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-[#8C90C1] border-b border-slate-200 dark:border-[#1E2235] pb-3">
        <MapPin className="h-5 w-5" />
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Studio Branch Locations</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] space-y-1">
          <span className="font-bold text-[#8C90C1] uppercase text-[10px]">Branch 1 (Main Office)</span>
          <p className="font-bold text-slate-900 dark:text-white">Urban Square Mall, Sukher, Udaipur</p>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] space-y-1">
          <span className="font-bold text-[#8C90C1] uppercase text-[10px]">Branch 2</span>
          <p className="font-bold text-slate-900 dark:text-white">Intali Road, Fatehnagar, Udaipur</p>
        </div>
      </div>
    </section>
  </div>
);
