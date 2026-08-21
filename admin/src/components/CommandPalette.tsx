import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Inbox,
  Film,
  Sparkles,
  Image as ImageIcon,
  BarChart3,
  Settings,
  Plus,
  ArrowRight,
  Database,
  ExternalLink,
  Command,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNewInquiry: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNewInquiry,
}) => {
  const { setActiveTab } = useAuth();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
          setSelectedIndex(0);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      group: 'Navigation',
      items: [
        {
          id: 'nav-dash',
          title: 'Go to Dashboard Overview',
          subtitle: 'View live stats & shoots calendar',
          icon: LayoutDashboard,
          action: () => {
            setActiveTab('dashboard');
            onClose();
          },
        },
        {
          id: 'nav-inq',
          title: 'Go to Inquiries & Bookings',
          subtitle: 'Manage client leads and booking status',
          icon: Inbox,
          action: () => {
            setActiveTab('inquiries');
            onClose();
          },
        },
        {
          id: 'nav-[#C47A65]',
          title: 'Go to Wedding Stories',
          subtitle: 'Curate luxury website portfolio stories',
          icon: Film,
          action: () => {
            setActiveTab('stories');
            onClose();
          },
        },
        {
          id: 'nav-pkg',
          title: 'Go to Packages & Rates',
          subtitle: 'Edit investment packages and features',
          icon: Sparkles,
          action: () => {
            setActiveTab('packages');
            onClose();
          },
        },
        {
          id: 'nav-media',
          title: 'Go to Media Library',
          subtitle: 'Manage photography and film assets',
          icon: ImageIcon,
          action: () => {
            setActiveTab('media');
            onClose();
          },
        },
        {
          id: 'nav-[#C47A65]2',
          title: 'Go to Performance Analytics',
          subtitle: 'View destination breakdown and revenue',
          icon: BarChart3,
          action: () => {
            setActiveTab('analytics');
            onClose();
          },
        },
        {
          id: 'nav-set',
          title: 'Go to Studio Settings',
          subtitle: 'MongoDB URI, JWT secret & studio info',
          icon: Settings,
          action: () => {
            setActiveTab('settings');
            onClose();
          },
        },
      ],
    },
    {
      group: 'Quick Studio Actions',
      items: [
        {
          id: 'act-new-inq',
          title: 'Create New Inquiry',
          subtitle: 'Add a new client wedding booking request',
          icon: Plus,
          action: () => {
            onClose();
            onNewInquiry();
          },
        },
        {
          id: 'act-[#C47A65]db',
          title: 'Configure MongoDB Atlas Connection',
          subtitle: 'Open settings to update database URI',
          icon: Database,
          action: () => {
            setActiveTab('settings');
            onClose();
          },
        },
        {
          id: 'act-prev',
          title: 'Open Live Website Preview',
          subtitle: 'Opens http://localhost:5173 in new tab',
          icon: ExternalLink,
          action: () => {
            window.open('http://localhost:5173', '_blank');
            onClose();
          },
        },
      ],
    },
  ];

  const filteredGroups = actions
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  const flatItems = filteredGroups.flatMap((g) => g.items);

  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, flatItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + flatItems.length) % Math.max(1, flatItems.length));
    } else if (e.key === 'Enter' && flatItems[selectedIndex]) {
      e.preventDefault();
      flatItems[selectedIndex].action();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div
        className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#23283B] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[550px]"
        onKeyDown={handleKeyDownInMenu}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-[#1E2333] flex items-center gap-3">
          <Command className="h-5 w-5 text-[#C47A65]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, page, or quick action..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-[#1A1E2C] border border-slate-200 dark:border-[#23283B] text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-4">
          {filteredGroups.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-600 dark:text-slate-300">No matching commands found</p>
              <p>Try searching for "Dashboard", "Inquiry", or "MongoDB"</p>
            </div>
          ) : (
            filteredGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1">
                <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                  {group.group}
                </div>
                {group.items.map((item) => {
                  const itemGlobalIndex = flatItems.findIndex((i) => i.id === item.id);
                  const isSelected = itemGlobalIndex === selectedIndex;
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(itemGlobalIndex)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#C47A65]/15 border border-[#C47A65]/40 text-slate-900 dark:text-white'
                          : 'hover:bg-slate-50 dark:hover:bg-[#1A1E2C] text-slate-700 dark:text-slate-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected
                              ? 'bg-[#C47A65] text-white'
                              : 'bg-slate-100 dark:bg-[#171B29] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-[#23283B]'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">{item.title}</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{item.subtitle}</p>
                        </div>
                      </div>

                      {isSelected && <ArrowRight className="h-4 w-4 text-[#C47A65] shrink-0" />}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer Hint Bar */}
        <div className="p-3 bg-slate-50 dark:bg-[#0B0C10] border-t border-slate-200 dark:border-[#1E2333] flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#1A1E2C] text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-[#23283B]">
                ↑↓
              </kbd>{' '}
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#1A1E2C] text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-[#23283B]">
                ↵
              </kbd>{' '}
              Select
            </span>
          </div>
          <span>CMC Films Admin Command Center</span>
        </div>
      </div>
    </div>
  );
};
