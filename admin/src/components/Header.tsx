import React from 'react';
import { useAuth } from '../context/AuthContext';
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
    <header className="h-20 border-b border-[#1E2333] bg-[#0B0C10]/80 backdrop-blur-md px-6 sm:px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Title */}
      <div>
        <h2 className="font-editorial text-xl sm:text-2xl text-white font-semibold tracking-tight">
          {titleInfo.main}
        </h2>
        <p className="text-xs text-slate-400 hidden sm:block">{titleInfo.desc}</p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* MongoDB Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141722] border border-[#23283B] text-xs text-slate-300">
          <Database className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-mono text-[11px] text-slate-400">DB: Atlas Cloud Ready</span>
        </div>

        {/* Command Palette Trigger (Cmd+K / Ctrl+K) */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-3 bg-[#141722] hover:bg-[#1A1E2C] text-slate-400 hover:text-slate-200 px-3.5 py-2 rounded-xl border border-[#23283B] transition-colors text-xs"
        >
          <Search className="h-4 w-4 text-slate-400" />
          <span className="hidden md:inline">Search or command...</span>
          <div className="hidden md:flex items-center gap-1 bg-[#1A1E2C] border border-[#2B3147] px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </button>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2 rounded-xl bg-[#141722] border border-[#23283B] text-slate-300 hover:text-white hover:border-[#C47A65] transition-colors cursor-pointer"
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
