import React from 'react';
import { useAuth } from '../context/AuthContext';
import { WEBSITE_URL } from '../lib/environment';
import {
  LayoutDashboard,
  Inbox,
  Film,
  Video,
  Sparkles,
  Image as ImageIcon,
  Home,
  BarChart3,
  Settings,
  LogOut,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Grid3X3,
  Star,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const { activeTab, setActiveTab, user, logout } = useAuth();

  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'home-hero', label: 'Website Hero Media', icon: Home },
    { id: 'couple-shoot', label: 'Couple Shoot Content', icon: ImageIcon },
    { id: 'stories', label: 'Wedding Stories', icon: Film },
    { id: 'films', label: 'Wedding Films', icon: Video },
    { id: 'gallery', label: 'Home Gallery', icon: Grid3X3 },
    { id: 'testimonials-cms', label: 'Testimonials', icon: Star },
    { id: 'packages', label: 'Packages & Rates', icon: Sparkles },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
    { id: 'inquiries', label: 'Inquiries & Bookings', icon: Inbox, badge: '5 New' },
  ];

  const secondaryNav = [
    { id: 'analytics', label: 'Analytics & Insights', icon: BarChart3 },
    { id: 'settings', label: 'Studio Settings', icon: Settings },
  ];

  return (
    <aside
      className={`border-r flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none transition-all duration-300 bg-white dark:bg-[#0B0D14] border-slate-200 dark:border-[#1E2235] ${
        isCollapsed ? 'w-20' : 'w-64 sm:w-72'
      }`}
    >
      <div>
        {/* Brand Header */}
        <div className="h-20 border-b px-5 flex items-center justify-between border-slate-200 dark:border-[#1E2235]">
          {!isCollapsed && (
            <div className="min-w-0 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#8C90C1] to-[#6C70A6] flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
                CMC
              </div>
              <div className="min-w-0">
                <h1 className="text-base font-bold tracking-tight truncate text-slate-900 dark:text-white font-sans">
                  CMC FILMS
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C90C1]">
                  STUDIO CONSOLE
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="mx-auto h-10 w-10 rounded-xl bg-gradient-to-br from-[#8C90C1] to-[#6C70A6] flex items-center justify-center text-white font-bold text-sm shadow-md">
              C
            </div>
          )}

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-xl border transition-colors bg-slate-100 dark:bg-[#121522] hover:bg-slate-200 dark:hover:bg-[#1A1E2E] border-slate-200 dark:border-[#202435] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {/* Core Navigation */}
        <nav className="p-3 space-y-6 font-sans">
          {/* Main Section */}
          <div className="space-y-1.5">
            {!isCollapsed && (
              <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                MAIN WORKSPACE
              </p>
            )}
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all relative group cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#8C90C1]/15 dark:bg-[#8C90C1]/22 text-[#4E5178] dark:text-white font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#121522]'
                  }`}
                >
                  {/* Left Rounded Vertical Pill Strip for Active State */}
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1.5 rounded-r-full bg-[#8C90C1] shadow-sm" />
                  )}

                  <div className={`flex items-center gap-3 ${isCollapsed ? 'mx-auto' : ''}`}>
                    {/* Icon Badge Box */}
                    <div
                      className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? 'bg-[#8C90C1]/25 text-[#565985] dark:text-white shadow-2xs'
                          : 'bg-slate-100 dark:bg-[#121522] text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-[#1A1E2E] group-hover:text-slate-800 dark:group-hover:text-slate-200'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>

                  {!isCollapsed && item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-[#8C90C1] text-white shadow-xs'
                          : 'bg-[#8C90C1]/15 text-[#6C70A6] border border-[#8C90C1]/20'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* System Section */}
          <div className="space-y-1.5">
            {!isCollapsed && (
              <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                STUDIO INSIGHTS
              </p>
            )}
            {secondaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all relative group cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#8C90C1]/15 dark:bg-[#8C90C1]/22 text-[#4E5178] dark:text-white font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#121522]'
                  }`}
                >
                  {/* Left Rounded Vertical Pill Strip for Active State */}
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1.5 rounded-r-full bg-[#8C90C1] shadow-sm" />
                  )}

                  <div className={`flex items-center gap-3 ${isCollapsed ? 'mx-auto' : ''}`}>
                    {/* Icon Badge Box */}
                    <div
                      className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? 'bg-[#8C90C1]/25 text-[#565985] dark:text-white shadow-2xs'
                          : 'bg-slate-100 dark:bg-[#121522] text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-[#1A1E2E] group-hover:text-slate-800 dark:group-hover:text-slate-200'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-3 border-t border-slate-200 dark:border-[#1E2235] space-y-3 font-sans">
        {/* Open Main Website */}
        {!isCollapsed && (
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium border rounded-xl transition-all bg-slate-50 dark:bg-[#121522] hover:bg-slate-100 dark:hover:bg-[#1A1E2E] border-slate-200 dark:border-[#202435] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <span className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#8C90C1]" />
              Preview Live Website
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        )}

        {/* User Profile Card */}
        <div
          className={`flex items-center justify-between p-2 rounded-2xl border bg-slate-50 dark:bg-[#121522] border-slate-200 dark:border-[#1E2235] ${
            isCollapsed ? 'flex-col gap-2' : ''
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
              alt={user?.name}
              className="w-9 h-9 rounded-full object-cover border-2 border-[#8C90C1] shrink-0"
            />
            {!isCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {user?.name || 'Sahil Sharma'}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                  {user?.role || 'Founder & Director'}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={logout}
            title="Sign Out"
            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
