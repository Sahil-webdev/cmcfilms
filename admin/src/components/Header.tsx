import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, Plus, Database, Command, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNewInquiryClick: () => void;
  onOpenCommandPalette: () => void;
  onOpenNotifications: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNewInquiryClick,
  onOpenCommandPalette,
  onOpenNotifications,
}) => {
  const { activeTab } = useAuth();
  const { theme, setTheme } = useTheme();

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return { main: 'Executive Overview', desc: 'Real-time studio stats, inquiries & shoot timeline' };
      case 'inquiries':
        return { main: 'Inquiries & Bookings', desc: 'Manage client leads, proposals & booking confirmations' };
      case 'stories':
        return { main: 'Wedding Stories', desc: 'Curate luxury website portfolio galleries' };
      case 'packages':
        return { main: 'Packages & Pricing', desc: 'Edit investment tiers, deliverables & rates' };
      case 'media':
        return { main: 'Media Asset Library', desc: 'Cloud assets, photography & film teasers' };
      case 'analytics':
        return { main: 'Performance Analytics', desc: 'Revenue breakdown, top destinations & lead sources' };
      case 'settings':
        return { main: 'Studio & API Settings', desc: 'MongoDB Atlas URI, JWT keys & branch addresses' };
      default:
        return { main: 'Studio Console', desc: 'Manage CMC Films Studio' };
    }
  };

  const titleInfo = getTitle();

  return (
    <header className="h-20 sticky top-0 z-20 px-6 sm:px-8 flex items-center justify-between transition-colors duration-200 border-b backdrop-blur-xl bg-white/80 dark:bg-[#090A0F]/80 border-slate-200/80 dark:border-[#1E2333]/80">
      {/* Title & Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#C47A65] tracking-wider uppercase">
          <span>CMC Films Studio</span>
          <span>/</span>
          <span className="capitalize">{activeTab}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-0.5">
          {titleInfo.main}
        </h2>
      </div>

      {/* Right Action Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* MongoDB Status Pill */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#141722] border border-slate-200 dark:border-[#23283B] text-slate-700 dark:text-slate-300">
          <Database className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px]">Atlas Cloud Connected</span>
        </div>

        {/* Command Palette Trigger (Cmd+K) */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all bg-slate-100 hover:bg-slate-200 dark:bg-[#141722] dark:hover:bg-[#1A1E2C] border-slate-200 dark:border-[#23283B] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
        >
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Quick search...</span>
          <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#1A1E2C] border border-slate-300 dark:border-[#2B3147] text-slate-500 dark:text-slate-400">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </button>

        {/* Segmented Light / Dark Mode Switcher */}
        <div className="flex items-center p-1 rounded-xl border bg-slate-100 dark:bg-[#141722] border-slate-200 dark:border-[#23283B]">
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              theme === 'light'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Switch to Light Mode"
          >
            <Sun className="h-3.5 w-3.5 text-amber-500" />
            <span className="hidden sm:inline">Light</span>
          </button>

          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-[#1D2232] text-white shadow-sm border border-[#2B3147]'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Switch to Dark Mode"
          >
            <Moon className="h-3.5 w-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Dark</span>
          </button>
        </div>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2.5 rounded-xl border transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-[#141722] dark:hover:bg-[#1A1E2C] border-slate-200 dark:border-[#23283B] text-slate-700 dark:text-slate-300 cursor-pointer"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#C47A65]" />
        </button>

        {/* Primary Action Button */}
        <button
          onClick={onNewInquiryClick}
          className="flex items-center gap-2 bg-[#C47A65] hover:bg-[#B36854] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-[#C47A65]/20 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">+ New Inquiry</span>
        </button>
      </div>
    </header>
  );
};
