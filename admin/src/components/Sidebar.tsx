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
  ShieldCheck,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, user, logout } = useAuth();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'inquiries', label: 'Inquiries & Bookings', icon: Inbox, badge: '5 New' },
    { id: 'stories', label: 'Wedding Stories', icon: Film },
    { id: 'packages', label: 'Packages & Pricing', icon: Sparkles },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'settings', label: 'Studio Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 sm:w-72 bg-[#0E1017] border-r border-[#1E2333] flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-[#1E2333] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C47A65]">
              STUDIO CONSOLE
            </span>
            <h1 className="font-editorial text-2xl text-white font-medium tracking-tight flex items-center gap-1.5 mt-0.5">
              CMC FILMS
            </h1>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Live System Online" />
        </div>

        {/* Navigation Section */}
        <nav className="p-4 space-y-1.5">
          <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
            MANAGEMENT
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C47A65] text-white shadow-lg shadow-[#C47A65]/20 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-[#161924]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#C47A65]/20 text-[#C47A65] border border-[#C47A65]/30'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-[#1E2333] space-y-3">
        {/* Open Main Website */}
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#161924] hover:bg-[#1C202E] border border-[#252A3B] rounded-lg transition-colors"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#C47A65]" />
            Preview Live Website
          </span>
          <ExternalLink className="h-3.5 w-3.5 opacity-60" />
        </a>

        {/* User Card & Logout */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#141722] border border-[#1E2333]">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
              alt={user?.name}
              className="h-8 w-8 rounded-full object-cover border border-[#C47A65]"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{user?.name || 'CMC Admin'}</p>
              <p className="text-[10px] text-slate-400 truncate">{user?.role || 'Administrator'}</p>
            </div>
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
