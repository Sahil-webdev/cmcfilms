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
    { id: 'analytics', label: 'Performance Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Studio & API Settings', icon: Settings },
  ];

  return (
    <aside
      className={`bg-[#0E1017] border-r border-[#1E2333] flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64 sm:w-72'
      }`}
    >
      <div>
        {/* Brand Header */}
        <div className="h-20 border-b border-[#1E2333] px-5 flex items-center justify-between">
          {!isCollapsed && (
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C47A65]">
                STUDIO CONSOLE
              </span>
              <h1 className="font-editorial text-xl text-white font-semibold tracking-tight truncate">
                CMC FILMS
              </h1>
            </div>
          )}
          {isCollapsed && (
            <div className="mx-auto font-editorial text-lg font-bold text-[#C47A65]">CMC</div>
          )}

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-lg bg-[#141722] hover:bg-[#1C202E] border border-[#23283B] text-slate-400 hover:text-white transition-colors"
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
              <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
                CORE WORKSPACE
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all relative group ${
                    isActive
                      ? 'bg-[#171B29] text-white border border-[#C47A65]/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-[#141722]'
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#C47A65] rounded-r-full" />
                  )}

                  <div className={`flex items-center gap-3 ${isCollapsed ? 'mx-auto' : ''}`}>
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#C47A65]' : 'text-slate-400'}`} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>

                  {!isCollapsed && item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-[#C47A65] text-white'
                          : 'bg-[#C47A65]/20 text-[#C47A65] border border-[#C47A65]/30'
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
              <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
                SYSTEM & ANALYTICS
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-[#171B29] text-white border border-[#C47A65]/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-[#141722]'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#C47A65] rounded-r-full" />
                  )}
                  <div className={`flex items-center gap-3 ${isCollapsed ? 'mx-auto' : ''}`}>
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#C47A65]' : 'text-slate-400'}`} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-3 border-t border-[#1E2333] space-y-3">
        {/* Open Main Website */}
        {!isCollapsed && (
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#141722] hover:bg-[#1C202E] border border-[#252A3B] rounded-xl transition-colors"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C47A65]" />
              Preview Website
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        )}

        {/* User Profile Card */}
        <div
          className={`flex items-center justify-between p-2 rounded-xl bg-[#141722] border border-[#1E2333] ${
            isCollapsed ? 'flex-col gap-2' : ''
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
              alt={user?.name}
              className="h-8 w-8 rounded-full object-cover border border-[#C47A65] shrink-0"
            />
            {!isCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">{user?.name || 'CMC Director'}</p>
                <p className="text-[10px] text-slate-400 truncate">{user?.role || 'Administrator'}</p>
              </div>
            )}
          </div>
          <button
            onClick={logout}
            title="Sign Out"
            className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
