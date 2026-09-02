import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, Plus, Database, Command } from 'lucide-react';

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
  const { theme, toggleTheme } = useTheme();

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return { main: 'Executive Overview', desc: 'Real-time studio stats, inquiries & shoot timeline' };
      case 'inquiries':
        return { main: 'Inquiries & Bookings', desc: 'Manage client leads, proposals & booking confirmations' };
      case 'stories':
        return { main: 'Wedding Stories', desc: 'Curate luxury website portfolio galleries' };
      case 'films':
        return { main: 'Wedding Films CMS', desc: 'Manage YouTube cinematic films & video redirects' };
      case 'packages':
        return { main: 'Packages & Pricing', desc: 'Edit investment tiers, deliverables & rates' };
      case 'media':
        return { main: 'Media Asset Library', desc: 'Cloud assets, photography & film teasers' };
      case 'home-hero':
        return { main: 'Website Hero Media', desc: 'Update hero images and videos across the website' };
      case 'couple-shoot':
        return { main: 'Couple Shoot Content', desc: 'Manage gallery images and couple shoot blogs' };
      case 'analytics':
        return { main: 'Performance Analytics', desc: 'Revenue breakdown, top destinations & lead sources' };
      case 'settings':
        return { main: 'Studio & API Settings', desc: 'Configure MongoDB Atlas URI, JWT keys & branch addresses' };
      default:
        return { main: 'Studio Console', desc: 'Manage CMC Films Studio' };
    }
  };

  const titleInfo = getTitle();

  return (
    <header className="min-h-16 lg:h-20 sticky top-0 z-20 px-4 sm:px-6 lg:px-8 py-3 lg:py-0 flex items-center justify-between gap-3 transition-colors duration-200 border-b backdrop-blur-xl bg-white/80 dark:bg-[#0B0D14]/80 border-slate-200/80 dark:border-[#1E2235]/80 font-sans">
      {/* Title & Breadcrumb */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-[11px] font-bold text-[#8C90C1] tracking-wider uppercase max-sm:hidden">
          <span>CMC Films Studio</span>
          <span>/</span>
          <span className="capitalize">{activeTab}</span>
        </div>
        <h2 className="truncate text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-0.5 font-sans">
          {titleInfo.main}
        </h2>
      </div>

      {/* Right Action Controls */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
        {/* MongoDB Status Pill */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#121522] border border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300">
          <Database className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px]">Atlas Cloud Connected</span>
        </div>

        {/* Command Palette Trigger (Cmd+K) */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all bg-slate-100 hover:bg-slate-200 dark:bg-[#121522] dark:hover:bg-[#1A1E2E] border-slate-200 dark:border-[#202435] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
        >
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Quick search...</span>
          <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#1A1E2E] border border-slate-300 dark:border-[#2B3147] text-slate-500 dark:text-slate-400">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </button>

        {/* Uiverse.io Sun/Moon Switcher Toggle Button */}
        <div className="flex items-center gap-2" title={`Click to switch mode (Current: ${theme})`}>
          <label
            className="ui-switch cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
          >
            <input
              type="checkbox"
              checked={theme === 'dark'}
              readOnly
            />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </div>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2.5 rounded-xl border transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-[#121522] dark:hover:bg-[#1A1E2E] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 cursor-pointer"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#8C90C1]" />
        </button>

        {/* Primary Action Button */}
        <button
          onClick={onNewInquiryClick}
          className="flex items-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-xs font-semibold px-3 sm:px-4 py-2.5 rounded-xl shadow-lg shadow-[#8C90C1]/20 transition-all duration-200 active:scale-95 cursor-pointer font-sans"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden lg:inline">+ New Inquiry</span>
        </button>
      </div>
    </header>
  );
};
