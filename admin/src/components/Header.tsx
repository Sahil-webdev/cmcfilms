import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, Plus, Database, Command, Sun, Moon } from 'lucide-react';

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
        return { main: 'Executive Overview', desc: 'Real-time studio stats, inquiries and upcoming shoots' };
      case 'inquiries':
        return { main: 'Inquiries & Bookings', desc: 'Manage client requests, proposals and booking confirmations' };
      case 'stories':
        return { main: 'Wedding Stories', desc: 'Curate luxury portfolio galleries and cinematic stories' };
      case 'packages':
        return { main: 'Packages & Rates', desc: 'Update investment packages and feature checklists' };
      case 'media':
        return { main: 'Media Asset Manager', desc: 'Manage studio photography, films, and cloud assets' };
      case 'analytics':
        return { main: 'Performance Analytics', desc: 'Revenue breakdown, destination insights and lead sources' };
      case 'settings':
        return { main: 'Studio & API Settings', desc: 'Configure MongoDB URI, JWT secrets and profile settings' };
      default:
        return { main: 'Studio Console', desc: 'Manage CMC Films Studio' };
    }
  };

  const titleInfo = getTitle();

  return (
    <header className="h-20 border-b transition-colors duration-200 sticky top-0 z-20 px-6 sm:px-8 flex items-center justify-between backdrop-blur-md bg-white/80 dark:bg-[#0B0C10]/80 border-slate-200 dark:border-[#1E2333]">
      {/* Title */}
      <div>
        <h2 className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {titleInfo.main}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">{titleInfo.desc}</p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* MongoDB Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-slate-100 dark:bg-[#141722] border border-slate-200 dark:border-[#23283B] text-slate-700 dark:text-slate-300">
          <Database className="h-3.5 w-3.5 text-emerald-500" />
          <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">DB: Atlas Cloud Ready</span>
        </div>

        {/* Command Palette Trigger (Cmd+K / Ctrl+K) */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl border text-xs transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-[#141722] dark:hover:bg-[#1A1E2C] border-slate-200 dark:border-[#23283B] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Search commands...</span>
          <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#1A1E2C] border border-slate-300 dark:border-[#2B3147] text-slate-500 dark:text-slate-400">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </button>

        {/* Theme Toggle Button (Sun / Moon) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-[#141722] dark:hover:bg-[#1A1E2C] border-slate-200 dark:border-[#23283B] text-slate-700 dark:text-slate-300 cursor-pointer"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-amber-400" />
          ) : (
            <Moon className="h-4 w-4 text-slate-700" />
          )}
        </button>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2 rounded-xl border transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-[#141722] dark:hover:bg-[#1A1E2C] border-slate-200 dark:border-[#23283B] text-slate-700 dark:text-slate-300 cursor-pointer"
          title="Notifications Center"
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
