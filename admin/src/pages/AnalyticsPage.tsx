import React from 'react';
import { BarChart3, TrendingUp, MapPin, Users, Globe } from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const destinations = [
    { name: 'Udaipur', share: '45%', bookings: 12, bg: 'bg-[#C47A65]' },
    { name: 'Jaipur', share: '25%', bookings: 7, bg: 'bg-[#D4AF37]' },
    { name: 'Goa', share: '18%', bookings: 5, bg: 'bg-emerald-500' },
    { name: 'Jodhpur & others', share: '12%', bookings: 3, bg: 'bg-sky-500' },
  ];

  return (
    <div className="p-6 sm:p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h3 className="font-editorial text-2xl text-white font-medium">Studio Performance & Insights</h3>
        <p className="text-xs text-slate-400">Destination wedding booking statistics and client channels</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Destination Weddings Distribution */}
        <div className="bg-[#121520] border border-[#202434] rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1E2333] pb-3">
            <h4 className="font-editorial text-lg text-white font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#C47A65]" />
              Top Wedding Destinations (2026)
            </h4>
            <span className="text-xs text-slate-400 font-mono">27 Bookings</span>
          </div>

          <div className="space-y-4">
            {destinations.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="font-mono text-slate-400">
                    {item.bookings} Weddings ({item.share})
                  </span>
                </div>
                <div className="h-2 w-full bg-[#1A1E2C] rounded-full overflow-hidden">
                  <div className={`h-full ${item.bg} rounded-full`} style={{ width: item.share }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Source Distribution */}
        <div className="bg-[#121520] border border-[#202434] rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1E2333] pb-3">
            <h4 className="font-editorial text-lg text-white font-medium flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#C47A65]" />
              Client Lead Sources
            </h4>
            <span className="text-xs text-slate-400 font-mono">Organic & Referral</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#171B29] border border-[#23293D] flex justify-between items-center text-xs">
              <span className="font-semibold text-white">Instagram Reels & Stories</span>
              <span className="font-mono text-[#C47A65] font-bold">52%</span>
            </div>
            <div className="p-4 rounded-xl bg-[#171B29] border border-[#23293D] flex justify-between items-center text-xs">
              <span className="font-semibold text-white">Direct Website Inquiry Form</span>
              <span className="font-mono text-[#C47A65] font-bold">34%</span>
            </div>
            <div className="p-4 rounded-xl bg-[#171B29] border border-[#23293D] flex justify-between items-center text-xs">
              <span className="font-semibold text-white">Word of Mouth / Past Clients</span>
              <span className="font-mono text-[#C47A65] font-bold">14%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
