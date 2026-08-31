import React from 'react';
import { MapPin, Globe } from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const destinations = [
    { name: 'Udaipur', share: '45%', bookings: 12, bg: 'bg-[#8C90C1]' },
    { name: 'Jaipur', share: '25%', bookings: 7, bg: 'bg-[#D4AF37]' },
    { name: 'Goa', share: '18%', bookings: 5, bg: 'bg-emerald-500' },
    { name: 'Jodhpur & others', share: '12%', bookings: 3, bg: 'bg-indigo-400' },
  ];

  return (
    <div className="p-6 sm:p-8 space-y-8 max-w-7xl mx-auto font-sans">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Studio Performance & Insights</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Destination wedding booking statistics and client channels</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Destination Weddings Distribution */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-3">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-sans">
              <MapPin className="h-4 w-4 text-[#8C90C1]" />
              Top Wedding Destinations (2026)
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">27 Bookings</span>
          </div>

          <div className="space-y-4">
            {destinations.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{item.name}</span>
                  <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold">
                    {item.bookings} Weddings ({item.share})
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-[#1A1E2E] rounded-full overflow-hidden">
                  <div className={`h-full ${item.bg} rounded-full`} style={{ width: item.share }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Source Distribution */}
        <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-3">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-sans">
              <Globe className="h-4 w-4 text-[#8C90C1]" />
              Client Lead Sources
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">Organic & Referral</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Instagram Reels & Stories</span>
              <span className="font-mono text-[#8C90C1] font-bold">52%</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Direct Website Inquiry Form</span>
              <span className="font-mono text-[#8C90C1] font-bold">34%</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Word of Mouth / Past Clients</span>
              <span className="font-mono text-[#8C90C1] font-bold">14%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
