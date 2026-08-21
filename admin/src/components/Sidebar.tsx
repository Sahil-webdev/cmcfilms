import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Inbox,
  Film,
  Sparkles,
  Image as ImageIcon,
  BarChart3,
  Settings,
  LogOut,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const { activeTab, setActiveTab, user, logout } = useAuth();

  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inquiries', label: 'Inquiries & Bookings', icon: Inbox, badge: '5 New' },
    { id: 'stories', label: 'Wedding Stories', icon: Film },
    { id: 'packages', label: 'Packages & Rates', icon: Sparkles },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
  ];

  const secondaryNav = [
    { id: 'analytics', label: 'Analytics & Insights', icon: BarChart3 },
    { id: 'settings', label: 'Studio Settings', icon: Settings },
  ];

  return (
    <aside
      className={`border-r flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none transition-all duration-300 bg-white dark:bg-[#0E1017] border-slate-200 dark:border-[#1E2333] ${
        isCollapsed ? 'w-20' : 'w-64 sm:w-72'
      }`}
    >
      <div>
        {/* Brand Header */}
        <div className="h-20 border-b px-5 flex items-center justify-between border-slate-200 dark:border-[#1E2333]">
          {!isCollapsed && (
            <div className="min-w-0 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#C47A65] to-[#D4AF37] flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
                CMC
              </div>
              <div className="min-w-0">
                <h1 className="font-editorial text-base font-bold tracking-tight truncate text-slate-900 dark:text-white">
                  CMC FILMS
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C47A65]">
                  STUDIO CONSOLE
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="mx-auto h-10 w-10 rounded-xl bg-gradient-to-tr from-[#C47A65] to-[#D4AF37] flex items-center justify-center text-white font-bold text-sm shadow-md">
              C
            </div>
          )}

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-xl border transition-colors bg-slate-100 dark:bg-[#141722] hover:bg-slate-200 dark:hover:bg-[#1C202E] border-slate-200 dark:border-[#23283B] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {/* Core Navigation */}
        <nav className="p-3 space-y-6">
          {/* Main Section */}
          <div className="space-y-1">
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
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all relative group cursor-pointer ${
                    isActive
                      ? 'bg-[#C47A65] text-white shadow-lg shadow-[#C47A65]/20 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#141722]'
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isCollapsed ? 'mx-auto' : ''}`}>
                    <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>

                  {!isCollapsed && item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#C47A65]/15 text-[#C47A65] border border-[#C47A65]/30'
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
          <div className="space-y-1">
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
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all relative group cursor-pointer ${
                    isActive
                      ? 'bg-[#C47A65] text-white shadow-lg shadow-[#C47A65]/20 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#141722]'
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isCollapsed ? 'mx-auto' : ''}`}>
                    <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-3 border-t border-slate-200 dark:border-[#1E2333] space-y-3">
        {/* Open Main Website */}
        {!isCollapsed && (
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium border rounded-xl transition-all bg-slate-50 dark:bg-[#141722] hover:bg-slate-100 dark:hover:bg-[#1C202E] border-slate-200 dark:border-[#252A3B] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <span className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#C47A65]" />
              Preview Live Website
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        )}

        {/* User Profile Card */}
        <div
          className={`flex items-center justify-between p-2 rounded-2xl border bg-slate-50 dark:bg-[#141722] border-slate-200 dark:border-[#1E2333] ${
            isCollapsed ? 'flex-col gap-2' : ''
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
              alt={user?.name}
              className="h-8.5 w-8.5 rounded-full object-cover border-2 border-[#C47A65] shrink-0"
            />
            {!isCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {user?.name || 'CMC Director'}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                  {user?.role || 'Administrator'}
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
