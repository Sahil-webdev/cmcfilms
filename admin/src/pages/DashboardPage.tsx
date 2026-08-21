import React, { useState } from 'react';
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
  Download,
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
  const [dateRange, setDateRange] = useState<'30d' | '3m' | 'ytd'>('30d');

  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;
  const confirmedCount = inquiries.filter((i) => i.status === 'Confirmed').length;

  const stats = [
    {
      title: 'Pipeline Revenue',
      value: '₹42,00,000',
      change: '+18.4%',
      period: 'vs previous month',
      icon: TrendingUp,
      accent: 'border-l-4 border-l-emerald-500',
    },
    {
      title: 'New Client Leads',
      value: `${newInquiriesCount} Pending`,
      change: '+2 this week',
      period: 'requires action',
      icon: Inbox,
      accent: 'border-l-4 border-l-amber-500',
    },
    {
      title: 'Confirmed Shoots',
      value: `${confirmedCount} Weddings`,
      change: '100% deposit',
      period: 'October - December',
      icon: CheckCircle2,
      accent: 'border-l-4 border-l-[#8C90C1]',
    },
    {
      title: 'Published Stories',
      value: `${stories.length} Galleries`,
      change: '4 Featured',
      period: 'on live website',
      icon: Sparkles,
      accent: 'border-l-4 border-l-indigo-400',
    },
  ];

  const chartData = [
    { month: 'May', revenue: 6.2, bookings: 2 },
    { month: 'Jun', revenue: 8.5, bookings: 3 },
    { month: 'Jul', revenue: 5.8, bookings: 2 },
    { month: 'Aug', revenue: 12.4, bookings: 5 },
    { month: 'Sep', revenue: 15.1, bookings: 6 },
    { month: 'Oct', revenue: 18.0, bookings: 7 },
  ];

  return (
    <div className="p-6 sm:p-8 space-y-8 max-w-7xl mx-auto font-sans">
      {/* Contextual Top Summary & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200 dark:border-[#1E2235]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans">
            Welcome back, Sahil
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Studio booking activity overview for <span className="font-semibold text-slate-800 dark:text-white">August 2026</span>
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Date Range Selector */}
          <div className="flex items-center p-1 rounded-xl text-xs font-medium bg-slate-100 dark:bg-[#121522] border border-slate-200 dark:border-[#202435]">
            <button
              onClick={() => setDateRange('30d')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                dateRange === '30d' ? 'bg-[#8C90C1] text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setDateRange('3m')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                dateRange === '3m' ? 'bg-[#8C90C1] text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              3 Months
            </button>
            <button
              onClick={() => setDateRange('ytd')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                dateRange === 'ytd' ? 'bg-[#8C90C1] text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              YTD
            </button>
          </div>

          <button
            onClick={() => onNavigateTab('analytics')}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-colors bg-white dark:bg-[#121522] hover:bg-slate-50 dark:hover:bg-[#1A1E2E] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export Summary</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] ${stat.accent} rounded-2xl p-5 space-y-3 shadow-sm hover:border-[#8C90C1]/40 transition-colors`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.title}</span>
                <Icon className="h-4 w-4 text-[#8C90C1]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans">{stat.value}</p>
                <div className="flex items-center gap-2 text-[11px] mt-1.5">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    {stat.change}
                  </span>
                  <span className="text-slate-500">{stat.period}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Analytics Chart Section */}
      <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-[#1E2235] pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C90C1]">
              REVENUE & BOOKING ANALYTICS
            </span>
            <h3 className="text-xl font-bold mt-0.5 text-slate-900 dark:text-white font-sans">
              Studio Revenue Trend (2026)
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8C90C1]" />
              Revenue (Lakhs)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Booked Weddings
            </span>
          </div>
        </div>

        {/* Visual Chart Graph */}
        <div className="h-56 w-full flex items-end justify-between gap-4 sm:gap-8 pt-4 px-2">
          {chartData.map((d, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
              <div className="w-full flex items-end justify-center gap-1.5 h-44 relative">
                {/* Hover Tooltip */}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 pointer-events-none">
                  ₹{d.revenue} Lakhs • {d.bookings} Weddings
                </div>

                {/* Revenue Bar */}
                <div
                  className="w-1/2 bg-gradient-to-t from-[#8C90C1]/40 to-[#8C90C1] rounded-t-lg transition-all duration-300 group-hover:brightness-125"
                  style={{ height: `${(d.revenue / 20) * 100}%` }}
                />
                {/* Bookings Bar */}
                <div
                  className="w-1/2 bg-gradient-to-t from-emerald-500/40 to-emerald-400 rounded-t-lg transition-all duration-300 group-hover:brightness-125"
                  style={{ height: `${(d.bookings / 8) * 100}%` }}
                />
              </div>

              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {d.month}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Inquiries */}
        <div className="lg:col-span-8 bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Recent Booking Inquiries</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Client wedding leads requiring action</p>
            </div>
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="text-xs font-semibold text-[#8C90C1] hover:underline flex items-center gap-1"
            >
              Manage All Inquiries
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectInquiry(item)}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] hover:border-[#8C90C1]/50 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{item.coupleName}</span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        item.status === 'New'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                          : item.status === 'Confirmed'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                          : 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#8C90C1]" />
                      {item.venueLocation}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {item.weddingDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 text-right">
                  <div>
                    <p className="text-xs font-mono font-semibold text-slate-900 dark:text-white">{item.estimatedBudget}</p>
                    <p className="text-[10px] text-slate-500">Budget Range</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#1A1E2E] text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#2B3147]">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Shoots Calendar & Top Destinations */}
        <div className="lg:col-span-4 space-y-6">
          {/* Upcoming Shoots Timeline */}
          <div className="bg-white dark:bg-[#121522] border border-slate-200 dark:border-[#1E2235] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E2235] pb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-sans">
                <Clock className="h-4 w-4 text-[#8C90C1]" />
                Upcoming Shoots
              </h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                OCT - DEC 2026
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] space-y-1">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Kabir & Rhea Wedding</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Rambagh Palace, Jaipur</p>
                <p className="text-[10px] text-[#8C90C1] font-mono font-semibold">Oct 28 - Oct 30, 2026</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#171B29] border border-slate-200 dark:border-[#202435] space-y-1">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Aarav & Ananya Pre-Wedding</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Lake Pichola, Udaipur</p>
                <p className="text-[10px] text-[#8C90C1] font-mono font-semibold">Nov 14, 2026</p>
              </div>
            </div>
          </div>

          {/* Quick Package Card */}
          <div className="bg-gradient-to-br from-[#8C90C1] to-[#6C70A6] text-white rounded-2xl p-5 space-y-3 shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
              MOST POPULAR PACKAGE
            </span>
            <h4 className="text-xl font-bold text-white font-sans">The Royal Edition</h4>
            <p className="text-xs text-white/90">
              3-Day luxury Cinema & Ultra-Candid photography for destination weddings.
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-white/20">
              <span className="font-mono text-base font-bold text-white">₹7,50,000</span>
              <button
                onClick={() => onNavigateTab('packages')}
                className="text-xs font-semibold text-white hover:underline"
              >
                Edit Package →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
