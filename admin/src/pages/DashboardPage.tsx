import React from 'react';
import { Inquiry, Story, PackageItem } from '../data/mockData';
import {
  Inbox,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface DashboardProps {
  inquiries: Inquiry[];
  stories: Story[];
  packages: PackageItem[];
  onNavigateTab: (tab: string) => void;
  onSelectInquiry: (inquiry: Inquiry) => void;
}

export const DashboardPage: React.FC<DashboardProps> = ({
  inquiries,
  stories,
  packages,
  onNavigateTab,
  onSelectInquiry,
}) => {
  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;
  const confirmedCount = inquiries.filter((i) => i.status === 'Confirmed').length;

  const stats = [
    {
      title: 'New Requests',
      value: newInquiriesCount,
      change: '+2 this week',
      icon: Inbox,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Confirmed Weddings',
      value: confirmedCount,
      change: '100% deposit cleared',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Active Stories',
      value: stories.length,
      change: '4 Featured online',
      icon: Sparkles,
      color: 'text-[#C47A65]',
      bg: 'bg-[#C47A65]/10 border-[#C47A65]/20',
    },
    {
      title: 'Pipeline Revenue',
      value: '₹42.0 Lakhs',
      change: '+18% vs last month',
      icon: TrendingUp,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/20',
    },
  ];

  return (
    <div className="p-6 sm:p-8 space-y-8 max-w-7xl mx-auto">
      {/* KPI Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-[#121520] border border-[#202434] rounded-2xl p-5 space-y-3 relative overflow-hidden group hover:border-[#C47A65]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{stat.title}</span>
                <div className={`p-2.5 rounded-xl border ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <div>
                <p className="font-editorial text-3xl text-white font-medium">{stat.value}</p>
                <p className="text-[11px] text-slate-400 mt-1">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Inquiries */}
        <div className="lg:col-span-8 bg-[#121520] border border-[#202434] rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-[#1E2333] pb-4">
            <div>
              <h3 className="font-editorial text-xl text-white font-medium">Recent Inquiries</h3>
              <p className="text-xs text-slate-400">Client wedding booking requests</p>
            </div>
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="text-xs font-semibold text-[#C47A65] hover:underline flex items-center gap-1"
            >
              View All Inquiries
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectInquiry(item)}
                className="p-4 rounded-xl bg-[#171B29] border border-[#23293D] hover:border-[#C47A65]/50 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white">{item.coupleName}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        item.status === 'New'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : item.status === 'Confirmed'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#C47A65]" />
                      {item.venueLocation}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {item.weddingDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-right">
                  <div>
                    <p className="text-xs font-mono font-semibold text-white">{item.estimatedBudget}</p>
                    <p className="text-[10px] text-slate-500">Budget Range</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Upcoming Shoots & Featured Stories */}
        <div className="lg:col-span-4 space-y-6">
          {/* Upcoming Shoots Timeline */}
          <div className="bg-[#121520] border border-[#202434] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E2333] pb-3">
              <h3 className="font-editorial text-lg text-white font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#C47A65]" />
                Shoots Calendar
              </h3>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                OCT - DEC 2026
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#171B29] border border-[#23293D] space-y-1">
                <p className="text-xs font-bold text-white">Kabir & Rhea Wedding</p>
                <p className="text-[11px] text-slate-400">Rambagh Palace, Jaipur</p>
                <p className="text-[10px] text-[#C47A65] font-mono">Oct 28 - Oct 30, 2026</p>
              </div>

              <div className="p-3 rounded-xl bg-[#171B29] border border-[#23293D] space-y-1">
                <p className="text-xs font-bold text-white">Aarav & Ananya Pre-Wedding</p>
                <p className="text-[11px] text-slate-400">Lake Pichola, Udaipur</p>
                <p className="text-[10px] text-[#C47A65] font-mono">Nov 14, 2026</p>
              </div>
            </div>
          </div>

          {/* Quick Package Card */}
          <div className="bg-gradient-to-br from-[#1A1E2C] to-[#121520] border border-[#2A3045] rounded-2xl p-5 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C47A65]">
              MOST POPULAR PACKAGE
            </span>
            <h4 className="font-editorial text-xl text-white font-medium">The Royal Edition</h4>
            <p className="text-xs text-slate-400">
              3-Day luxury Cinema & Ultra-Candid photography for destination weddings.
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-base font-bold text-white">₹7,50,000</span>
              <button
                onClick={() => onNavigateTab('packages')}
                className="text-xs font-semibold text-[#C47A65] hover:underline"
              >
                Edit Packages →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
